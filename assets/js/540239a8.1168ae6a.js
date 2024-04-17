"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47085],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,g=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});n(96540);var r=n(15680);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"useIsAuthenticated",description:"useIsAuthenticated data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},u=void 0,s={unversionedId:"authentication/hooks/use-is-authenticated/index",id:"authentication/hooks/use-is-authenticated/index",title:"useIsAuthenticated",description:"useIsAuthenticated data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"@site/docs/authentication/hooks/use-is-authenticated/index.md",sourceDirName:"authentication/hooks/use-is-authenticated",slug:"/authentication/hooks/use-is-authenticated/",permalink:"/docs/authentication/hooks/use-is-authenticated/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-is-authenticated/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1713364469,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{title:"useIsAuthenticated",description:"useIsAuthenticated data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},sidebar:"mainSidebar",previous:{title:"<AuthPage />",permalink:"/docs/authentication/components/auth-page/"},next:{title:"useOnError",permalink:"/docs/authentication/hooks/use-on-error/"}},l={},d=[{value:"Usage",id:"usage",level:2}],p=(h="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var h;const g={toc:d},m="wrapper";function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useIsAuthenticated")," calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"check")," method from the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.yg)("p",null,"It returns the result of ",(0,r.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.yg)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"isError"),"."),(0,r.yg)("p",null,"Data that is resolved from the ",(0,r.yg)("inlineCode",{parentName:"p"},"useIsAuthenticated")," will be returned as the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n  authenticated: boolean;\n  redirectTo?: string;\n  logout?: boolean;\n  error?: Error;\n};\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"authenticated"),": A boolean value indicating whether the user is authenticated or not."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"redirectTo"),": A string value indicating the URL to redirect to if authentication is required."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"logout"),": A boolean value indicating whether the logout method should be called."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"error"),": An Error object representing any errors that may have occurred during the check.")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(p,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useIsAuthenticated")," can be useful when you want to check for authentication and handle the result manually."),(0,r.yg)("p",null,"We have used this hook in Refine's ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/components/authenticated"},(0,r.yg)("inlineCode",{parentName:"a"},"<Authenticated>"))," component, which allows only authenticated users to access the page or any part of the code."),(0,r.yg)("p",null,"We will demonstrate a similar basic implementation below. Imagine that you have a public page, but you want to make some specific fields private."),(0,r.yg)("p",null,"We have a logic in ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"check")," method like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  // ...\n  // highlight-start\n  check: () => {\n    if (localStorage.getItem("email")) {\n      return {\n        authenticated: true,\n      };\n    }\n    return {\n      authenticated: false,\n      error: {\n        message: "Check failed",\n        name: "Not authenticated",\n      },\n      logout: true,\n      redirectTo: "/login",\n    };\n  },\n  // highlight-end\n};\n')),(0,r.yg)("br",null),(0,r.yg)("p",null,"Let's create a wrapper component that renders children if ",(0,r.yg)("inlineCode",{parentName:"p"},"check")," method returns the Promise resolved:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/authenticated.tsx"',title:'"components/authenticated.tsx"'},'// highlight-next-line\nimport { useIsAuthenticated, useGo } from "@refinedev/core";\n\nexport const Authenticated: React.FC<AuthenticatedProps> = ({\n  children,\n  fallback,\n  loading,\n}) => {\n  // highlight-next-line\n  const { isLoading, data } = useIsAuthenticated();\n\n  const go = useGo();\n\n  if (isLoading) {\n    return <>{loading}</> || null;\n  }\n\n  if (data.error) {\n    if (!fallback) {\n      go({ to: redirectTo, type: "replace" });\n      return null;\n    }\n\n    return <>{fallback}</>;\n  }\n\n  if (data.authenticated) {\n    return <>{children}</>;\n  }\n\n  return null;\n};\n\ntype AuthenticatedProps = {\n  fallback?: React.ReactNode;\n  loading?: React.ReactNode;\n};\n')),(0,r.yg)("br",null),(0,r.yg)("p",null,"Now, only authenticated users can see the price field:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/postShow"',title:'"components/postShow"'},'// highlight-next-line\nimport { Authenticated } from "components/authenticated";\n\nexport const PostShow: React.FC = () => (\n  <div>\n    // highlight-start\n    <Authenticated>\n      <span>Only authenticated users can see</span>\n    </Authenticated>\n    // highlight-end\n  </div>\n);\n'))))}y.isMDXComponent=!0}}]);