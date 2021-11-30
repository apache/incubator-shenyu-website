"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2584],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11280:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={title:"Sofa Proxy",keywords:["Sofa"],description:"sofa access shenyu gateway"},s=void 0,l={unversionedId:"user-guide/sofa-rpc-proxy",id:"user-guide/sofa-rpc-proxy",isDocsHomePage:!1,title:"Sofa Proxy",description:"sofa access shenyu gateway",source:"@site/docs/user-guide/sofa-rpc-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/sofa-rpc-proxy",permalink:"/docs/next/user-guide/sofa-rpc-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/user-guide/sofa-rpc-proxy.md",version:"current",frontMatter:{title:"Sofa Proxy",keywords:["Sofa"],description:"sofa access shenyu gateway"},sidebar:"tutorialSidebar",previous:{title:"Register Center Instance Config",permalink:"/docs/next/user-guide/register-center-instance"},next:{title:"Spring Cloud Proxy",permalink:"/docs/next/user-guide/spring-cloud-proxy"}},c=[{value:"Add sofa plugin in gateway",id:"add-sofa-plugin-in-gateway",children:[]},{value:"Plugin Settings",id:"plugin-settings",children:[]},{value:"Interface registered to the gateway",id:"interface-registered-to-the-gateway",children:[]},{value:"User request and parameter description",id:"user-request-and-parameter-description",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document is intended to help the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sofa")," service access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sofa")," plugin to handle ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa")," service."),(0,i.kt)("p",null,"Before the connection, start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,i.kt)("inlineCode",{parentName:"p"},"Sofa")," plugin, and add related dependencies on the gateway and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sofa")," application client. Refer to the previous ",(0,i.kt)("a",{parentName:"p",href:"../quick-start/quick-start-sofa"},"Quick start with Sofa")," ."),(0,i.kt)("p",null,"For details about client access configuration, see ",(0,i.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,i.kt)("p",null,"For details about data synchronization configurations, see ",(0,i.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,i.kt)("h2",{id:"add-sofa-plugin-in-gateway"},"Add sofa plugin in gateway"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the following dependencies in the gateway's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file\uff1a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Replace the sofa version with yours, and replace the jar package in the registry with yours, The following is a reference\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\n       <dependency>\n           <groupId>com.alipay.sofa</groupId>\n           <artifactId>sofa-rpc-all</artifactId>\n           <version>5.7.6</version>\n           <exclusions>\n               <exclusion>\n                   <groupId>net.jcip</groupId>\n                   <artifactId>jcip-annotations</artifactId>\n               </exclusion>\n           </exclusions>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-client</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-framework</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-recipes</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-plugin-sofa</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n* Restart the gateway service.\n\n## Sofa service access gateway\n\nyou can refer to\uff1a[shenyu-examples-sofa](https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-sofa)\n\n* SpringBoot\n\n  Add the following dependencies :\n\n ```xml\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-sofa</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spring"),(0,i.kt)("p",{parentName:"li"}," Add the following dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-client-sofa</artifactId>\n           <version>${shenyu.version}</version>\n       </dependency>\n")))),(0,i.kt)("p",null,"Add the following in the xml file of your bean definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'      <bean id ="sofaServiceBeanPostProcessor" class ="org.apache.shenyu.client.sofa.SofaServiceBeanPostProcessor">\n           <constructor-arg  ref="shenyuRegisterCenterConfig"/>\n      </bean>\n\n   <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n     <property name="registerType" value="http"/>\n     <property name="serverList" value="http://localhost:9095"/>\n     <property name="props">\n          <map>\n               <entry key="contextPath" value="/your contextPath"/>\n               <entry key="appName" value="your name"/>\n               <entry key="isFull" value="false"/>\n          </map>\n     </property>\n  </bean>\n')),(0,i.kt)("h2",{id:"plugin-settings"},"Plugin Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," plugin management, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa")," plugin to open.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Secondly, configure your registered address in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa")," plugin, or the address of other registry."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"protocol":"zookeeper","register":"127.0.0.1:2181"}\n')),(0,i.kt)("h2",{id:"interface-registered-to-the-gateway"},"Interface registered to the gateway"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For your sofa service implementation class, add ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuSofaClient")," annotation to the method\uff0cIndicates that the interface method is registered to the gateway.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start the sofa service provider, after successful registration, enter the pluginList -> rpc proxy -> sofa in the background management system, you will see the automatic registration of selectors and rules information."))),(0,i.kt)("h2",{id:"user-request-and-parameter-description"},"User request and parameter description"),(0,i.kt)("p",null,"ShenYu gateway needs to have a routing prefix, this routing prefix is for you to access the project for configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"contextPath")," ."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example, if you have an ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," service, it has an interface and its registration path ",(0,i.kt)("inlineCode",{parentName:"p"},"/order/test/save")),(0,i.kt)("p",{parentName:"blockquote"},"Now it's to request the gateway via post\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save")),(0,i.kt)("p",{parentName:"blockquote"},"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:9195")," is the IP port of the gateway, default port is ",(0,i.kt)("inlineCode",{parentName:"p"},"9195"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/order")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"contextPath")," of your sofa access gateway configuration")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Parameter passing\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Access the gateway through http post\uff0cand pass through body and json."),(0,i.kt)("li",{parentName:"ul"},"For more parameter type transfer, please refer to the interface definition in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")," and the parameter transfer method."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Single java bean parameter type (default)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Customize multi-parameter support:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the gateway project you built, add a new class ",(0,i.kt)("inlineCode",{parentName:"p"},"MySofaParamResolveService"),", implements ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.api.sofa.SofaParamResolveService")," ."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"   public interface SofaParamResolveService {\n   \n       /**\n        * Build parameter pair.\n        * this is Resolve http body to get sofa param.\n        *\n        * @param body           the body\n        * @param parameterTypes the parameter types\n        * @return the pair\n        */\n       Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n   }\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"body")," is the json string passed by body in http.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parameterTypes"),": list of matched method parameter types, If there are multiple, use ",(0,i.kt)("inlineCode",{parentName:"p"},",")," to separate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In Pair\uff0cleft is the parameter type\uff0cand right is the parameter value. This is the standard for sofa generalization calls.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Register your class as a String bean and override the default implementation."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SofaParamResolveService mySofaParamResolveService() {\n   return new MySofaParamResolveService();\n}\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0}}]);