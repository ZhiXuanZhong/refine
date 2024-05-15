"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81663,89942,67561,34704,12323,418,78037,45180,22799,10894,88513,45051,67432,289,22670,55527,77908,10765,33146,24099,46480,55040,32659,10278],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,g=p["".concat(u,".").concat(y)]||p[y]||d[y]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15947:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(96540),a=r(20053);const l={tabItem:"tabItem_Ymn6"};function o({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,r),hidden:t},e)}},5063:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(96540),a=r(20053),l=r(52204),o=r(57631),i=r(12075);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function d({className:e,block:t,selectedValue:r,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),y=e=>{const t=e.currentTarget,n=s.indexOf(t),a=i[n].value;a!==r&&(d(t),o(a))},g=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;var r;t=null!==(r=s[n])&&void 0!==r?r:s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;var n;t=null!==(n=s[r])&&void 0!==n?n:s[s.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>n.createElement("li",p(c({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>s.push(e),onKeyDown:g,onClick:y},l),{className:(0,a.A)("tabs__item",u.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function y({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=(0,o.u)(e);return n.createElement("div",{className:(0,a.A)("tabs-container",u.tabList)},n.createElement(d,c({},e,t)),n.createElement(y,c({},e,t)))}function m(e){const t=(0,i.A)();return n.createElement(g,c({key:String(t)},e))}},57631:(e,t,r)=>{r.d(t,{u:()=>y});var n=r(96540),a=r(56347),l=r(57641);var o=r(14278);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e){return function(e){var t,r;return null!==(r=null===(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:s(r);return function(e){const t=function(e,t=((e,t)=>e===t)){return e.filter(((r,n)=>e.findIndex((e=>t(e,r)))!==n))}(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const r=(0,a.W6)(),o=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),s=(0,l.aZ)(o),c=(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[o,r]);return[s,c]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=c(e),[i,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,y]=d({queryString:r,groupId:a}),[g,m]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,o.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),f=(()=>{const e=null!=s?s:g;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),y(e),m(e)}),[y,m,l]),tabValues:l}}},23539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>y});r(96540);var n=r(15680),a=r(5063),l=r(15947);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},c="Telemetry",p={unversionedId:"further-readings/telemetry",id:"version-3.xx.xx/further-readings/telemetry",title:"Telemetry",description:"Summary",source:"@site/versioned_docs/version-3.xx.xx/further-readings/telemetry.md",sourceDirName:"further-readings",slug:"/further-readings/telemetry",permalink:"/docs/3.xx.xx/further-readings/telemetry",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/further-readings/telemetry.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715762794,formattedLastUpdatedAt:"May 15, 2024",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"someSidebar",previous:{title:"Benchmarks",permalink:"/docs/3.xx.xx/further-readings/benchmarks"}},d={},y=[{value:"Summary",id:"summary",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"How do we collect data?",id:"how-do-we-collect-data",level:2}],g=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var m;const f={toc:y},b="wrapper";function h(e){var{components:t}=e,r=u(e,["components"]);return(0,n.yg)(b,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"telemetry"},"Telemetry"),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)(g,{id:"summary",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"refine")," implements a ",(0,n.yg)("strong",{parentName:"p"},"simple")," and ",(0,n.yg)("strong",{parentName:"p"},"transparent")," telemetry module for collecting usage statistics defined in a ",(0,n.yg)("strong",{parentName:"p"},"very limited scope"),"."),(0,n.yg)("p",null,"Tracking is totally ",(0,n.yg)("strong",{parentName:"p"},"secure")," and ",(0,n.yg)("strong",{parentName:"p"},"anonymous"),". It includes no personally identifiable information and ",(0,n.yg)("strong",{parentName:"p"},"does not use cookies"),". Participation is optional and users may easily ",(0,n.yg)("strong",{parentName:"p"},"opt-out"),".")),(0,n.yg)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,n.yg)(g,{id:"why-do-we-need-this",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"We try to answer the question ",(0,n.yg)("strong",{parentName:"p"},"how many users are actively using the Refine framework"),". This information is critical for open-source projects like Refine to better understand their communities and measure their growth metrics.")),(0,n.yg)("h2",{id:"how-do-we-collect-data"},"How do we collect data?"),(0,n.yg)(g,{id:"how-do-we-collect-data",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(a.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"refine-core",label:"refine core",default:!0,mdxType:"TabItem"},'The tracking happens when a Refine application is loaded on the user\'s browser. On application init, a single HTTP request is sent to "https://telemetry.refine.dev". The request body is encoded with Base64 to be decoded on Refine servers.',(0,n.yg)("p",null,"There are no consequent requests for that session, as we do NOT collect any behavioral information such as ",(0,n.yg)("em",{parentName:"p"},"page views"),", ",(0,n.yg)("em",{parentName:"p"},"button clicks"),", etc."),(0,n.yg)("h2",null,"What is collected?"),(0,n.yg)("p",null,"The HTTP call has a JSON payload having the following application-specific attributes:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Value"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"providers"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean[]")),(0,n.yg)("td",{parentName:"tr",align:null},"List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"version"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Version of the refine package.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resourceCount"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"number")),(0,n.yg)("td",{parentName:"tr",align:null},"Number of total resources.")))),(0,n.yg)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Value"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"IP Address"),(0,n.yg)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Hostname"),(0,n.yg)("td",{parentName:"tr",align:null},"Hostname of the machine the request is coming from.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Browser"),(0,n.yg)("td",{parentName:"tr",align:null},"Browser and browser version.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"OS"),(0,n.yg)("td",{parentName:"tr",align:null},"OS and OS version.")))),(0,n.yg)("h2",null,"How to opt-out?"),(0,n.yg)("p",null,"You can opt out of telemetry by simply adding ",(0,n.yg)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine />")," component.")),(0,n.yg)(l.A,{value:"refine-cli",label:"refine CLI",mdxType:"TabItem"},(0,n.yg)("p",null,"After running a command with the ",(0,n.yg)("inlineCode",{parentName:"p"},"refine")," CLI, a single HTTP POST request is sent to ",(0,n.yg)("inlineCode",{parentName:"p"},"https://telemetry.refine.dev/cli"),"."),(0,n.yg)("h2",null,"What is collected?"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Value"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"nodeEnv"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Specifies the environment in which an application is running.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"nodeVersion"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Installed Node.js version.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"os"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Operating system name.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"osVersion"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Operating system version.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"command"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Running script name.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"packages"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'{ "name": "string", "version": "string" }[]')),(0,n.yg)("td",{parentName:"tr",align:null},"Installed ",(0,n.yg)("inlineCode",{parentName:"td"},"refine")," packages.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"projectFramework"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},"Installed ",(0,n.yg)("inlineCode",{parentName:"td"},"react")," framework.")))),(0,n.yg)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Value"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"IP Address"),(0,n.yg)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")))),(0,n.yg)("h2",null,"How to opt-out?"),(0,n.yg)("p",null,"You can opt out of telemetry by simply adding ",(0,n.yg)("inlineCode",{parentName:"p"},"REFINE_NO_TELEMETRY=true")," to environment variables.")))))}h.isMDXComponent=!0}}]);