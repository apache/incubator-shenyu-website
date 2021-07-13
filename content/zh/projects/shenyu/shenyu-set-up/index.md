---
title: 环境搭建
keywords: shenyu
description: 环境搭建
---

本文介绍如何基于 `ShenYu` 搭建属于你自己的网关。

> 请确保你的机器安装了 JDK 1.8+，MySQL 5.5.20 +。

## 启动 shenyu-admin

### 方式一：远程下载

* [2.3.0](https://github.com/apache/incubator-shenyu/releases/tag/2.3.0) 下载 `shenyu-admin-bin-2.3.0-RELEASE.tar.gz`

* 解压缩 `shenyu-admin-bin-2.3.0-RELEASE.tar.gz`。 进入 `bin` 目录。

* 使用 `h2` 来存储后台数据：

```
> windows: start.bat --spring.profiles.active = h2

> linux: ./start.sh --spring.profiles.active = h2
```

* 使用 `MySQL` 来存储后台数据， 进入 `/conf` 目录，修改 `application.yaml` 中 `mysql` 的配置。

```
> windows: start.bat 

> linux: ./start.sh 
```

### 方式二：docker构建

```
> docker pull dromara/shenyu-admin
> docker network create shenyu
```

* 使用 `h2` 来存储后台数据：
```
> docker run -d -p 9095:9095 --net shenyu dromara/shenyu-admin
```

* 使用 `MySQL` 来存储后台数据：

```
docker run -e "SPRING_PROFILES_ACTIVE=mysql" -d -p 9095:9095 --net shenyu dromara/shenyu-admin
```

如果你想覆盖环境变量，你可以这样操作：

```
docker run -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://192.168.1.9:3306/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.password=123456" -d -p 9095:9095 --net shenyu dromara/shenyu-admin
```

另外一种方式，可以挂载你本地磁盘其他目录。

把你的 `application.yml` 配置放到xxx目录， 然后执行以下语句：

```
docker run -v D:\tmp\conf:/opt/shenyu-admin/conf/ -d -p 9095:9095 --net shenyu dromara/shenyu-admin
```

### 方式三：本地构建

* 下载代码
```
> git clone https://github.com/apache/incubator-shenyu.git
> cd shenyu
```

* 编译代码
```
> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests
```

* 启动 `ShenyuAdminBootstrap`。 

   * 如果使用`h2`来存储，设置变量 `--spring.profiles.active = h2`
   
   * 如果使用`MySQL`来存储，修改 `application.yaml` 中的 `mysql` 配置。
   

访问 http://localhost:9095 ， 默认用户名和密码分别为: `admin` 和 `123456`。


## 启动 shenyu-bootstrap

### 方式一：远程下载

* [2.3.0](https://github.com/apache/incubator-shenyu/releases/tag/2.3.0) 下载 `shenyu-bootstrap-bin-2.3.0-RELEASE.tar.gz`

* 解压缩 `shenyu-bootstrap-bin-2.3.0-RELEASE.tar.gz`。 进入 bin 目录。

```
> windwos : start.bat 

> linux : ./start.sh 
```

### 方式二：docker构建

```
> docker network create shenyu
> docker pull dromara/shenyu-bootstrap
> docker run -d -p 9195:9195 --net shenyu dromara/shenyu-bootstrap
```

### 方式三：本地构建

* 下载代码
```
> git clone https://github.com/apache/incubator-shenyu.git
> cd shenyu
```

* 编译代码
```
> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests
```

* 启动 `ShenyuBootstrap`。 

## 搭建自己的网关（推荐）

* 首先新建一个空的 `springboot` 项目，可以参考 `shenyu-bootstrap`， 也可以在 [spring 官网](https://spring.io/quickstart) 创建。

* 引入如下`jar`包：

```xml
  <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webflux</artifactId>
        <version>2.2.2.RELEASE</version>
  </dependency>

  <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
        <version>2.2.2.RELEASE</version>
  </dependency>

    <!--shenyu gateway start-->
    <dependency>
        <groupId>org.apache.shenyu</groupId>
        <artifactId>shenyu-spring-boot-starter-gateway</artifactId>
        <version>${project.version}</version>
    </dependency>
  
    <!--shenyu data sync start use websocket-->
    <dependency>
        <groupId>org.apache.shenyu</groupId>
        <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>
        <version>${project.version}</version>
    </dependency>
```

其中， `${project.version}` 请使用当前最新版本。

* 在你的 `application.yaml` 文件中加上如下配置：

```yaml
spring:
  main:
    allow-bean-definition-overriding: true

management:
  health:
    defaults:
      enabled: false
shenyu:
  sync:
    websocket :
      urls: ws://localhost:9095/websocket  //设置成你的 shenyu-admin 地址
```

你的网关环境搭建完成，启动你的项目。










