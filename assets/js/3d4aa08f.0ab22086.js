"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22278],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(96540);var a=n(15680);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",slug:"navigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-29-router-navigate-component/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/navigate-react-router-redirect",source:"@site/blog/2022-09-29-router-navigate-component.md",title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",date:"2022-09-29T00:00:00.000Z",formattedDate:"September 29, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:3.865,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",slug:"navigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-29-router-navigate-component/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},nextItem:{title:"How to use Docker Build Args and Environment Variables",permalink:"/blog/docker-build-args-and-env-vars"},relatedPosts:[{title:"How to use Material UI Select in React",description:"We'll discover the Material UI select component with examples",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.155,date:"2022-10-30T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.64,date:"2023-01-17T00:00:00.000Z"},{title:"Refine vs AdminBro - Comparison Admin Panel Framework",description:"Refine vs AdminBro",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.44,date:"2021-11-29T00:00:00.000Z"}],authorPosts:[{title:"Create charts using Recharts",description:"We'll explore how to create charts in a Refine project using Recharts.",permalink:"/blog/recharts",formattedDate:"February 23, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:20.43,date:"2024-02-23T00:00:00.000Z"},{title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",permalink:"/blog/jwt-authentication",formattedDate:"March 11, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.77,date:"2024-03-11T00:00:00.000Z"},{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a Refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"June 1, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:12.94,date:"2023-06-01T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started with React router",id:"getting-started-with-react-router",level:2},{value:"Installing React router",id:"installing-react-router",level:2},{value:"Setting up React router",id:"setting-up-react-router",level:2},{value:"Setting up routes",id:"setting-up-routes",level:2},{value:"How to use the <code>Navigate</code> component",id:"how-to-use-the-navigate-component",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:c},m="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"React Router version 6 shipped recently with several new features and improvements. One such feature is the ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," component. It is the component equivalent of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook."),(0,a.yg)("p",null,"This article will take a deep dive into the ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," component."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#getting-started-with-react-router"},"Getting started with React router")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#installing-react-router"},"Installing React router")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#setting-up-react-router"},"Setting up React router")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#setting-up-routes"},"Setting up routes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-use-the--navigate-component"},"How to use the ",(0,a.yg)("inlineCode",{parentName:"a"},"Navigate")," component"))),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"To run the examples in this article, you need to have some following."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A working React project. Quickly create a React project using ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/pankod/superplate"},"superplate"),".")),(0,a.yg)("h2",{id:"getting-started-with-react-router"},"Getting started with React router"),(0,a.yg)("p",null,"In this section, you will learn how to set up React router in an existing React project."),(0,a.yg)("h2",{id:"installing-react-router"},"Installing React router"),(0,a.yg)("p",null,"Depending on your package manager, install React router from the NPM package registry using one of the commands below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\n npm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,a.yg)("h2",{id:"setting-up-react-router"},"Setting up React router"),(0,a.yg)("p",null,"Before using React router in the browser environment, import one of the top-level Components and wrap your root Component in it. We will use ",(0,a.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," since we want to run React router in the browser. It is the recommended way for running React router in the browser."),(0,a.yg)("p",null,"If you are using React router version 6, wrap your root component in ",(0,a.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," as in the example below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>,\n);\n')),(0,a.yg)("h2",{id:"setting-up-routes"},"Setting up routes"),(0,a.yg)("p",null,"In React router version 6, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"Routes")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Route")," Components to set up the routes in your application. You can import and use them like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,a.yg)("h2",{id:"how-to-use-the-navigate-component"},"How to use the ",(0,a.yg)("inlineCode",{parentName:"h2"},"Navigate")," component"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," component is one of the several built-in components in React router version 6. It is a wrapper for the ",(0,a.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook, and the current location changes when you render it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Navigate } from "react-router-dom";\n')),(0,a.yg)("p",null,"Import ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," from ",(0,a.yg)("inlineCode",{parentName:"p"},"react-router-dom")," to start using it. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," component takes up to three ",(0,a.yg)("inlineCode",{parentName:"p"},"props"),", only one of which is required. The other two are optional."),(0,a.yg)("p",null,"Below are the explanations for these three ",(0,a.yg)("inlineCode",{parentName:"p"},"props"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<Navigate to="/dashboard" state={{ todos: [] }} replace={true} />\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"to")," - A required prop. Its value should be the path which you want to navigate."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"replace")," - An optional boolean prop. Setting its value to ",(0,a.yg)("inlineCode",{parentName:"li"},"true")," will replace the current entry in the history stack."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"state")," - An optional prop. You can use it to pass data from the component that renders ",(0,a.yg)("inlineCode",{parentName:"li"},"Navigate"),".")),(0,a.yg)("p",null,"The code below illustrates how you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," component for navigation. We are rendering it conditionally after a state update and using the ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," prop to pass a route state."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const App = () => {\n  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });\n  const [user, setUser] = useState(null);\n\n  const changeHandler = (e) => {\n    const { name, value } = e.target;\n    setLoginDetails((loginDetails) => ({ ...loginDetails, [name]: value }));\n  };\n\n  const submitHandler = async (e) => {\n    e.preventDefault();\n    const user = await loginUser(loginDetails);\n    setUser(user);\n  };\n\n  return (\n    <div>\n      <form onSubmit={submitHandler}>\n        <label>\n          Email:\n          <input\n            type="email"\n            name="email"\n            value={loginDetails.email}\n            onChange={changeHandler}\n            required\n          />\n        </label>\n        <label>\n          Password:\n          <input\n            type="password"\n            name="password"\n            value={loginDetails.password}\n            onChange={changeHandler}\n            required\n          />\n        </label>\n        <button type="submit"> Login </button>\n      </form>\n      {user && <Navigate to="/dashboard" state={user} replace={true} />}\n    </div>\n  );\n};\n')),(0,a.yg)("p",null,"After navigation, the component rendered by the matching route can access the state prop passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," using the ",(0,a.yg)("inlineCode",{parentName:"p"},"useLocation")," hook like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const location = useLocation();\nconsole.log(location.state);\n// The default value of location.state is null if you don't pass any data.\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"props")," you pass to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," component are the same as the arguments required by the function returned by the ",(0,a.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook."),(0,a.yg)("br",null),(0,a.yg)("div",null,(0,a.yg)("a",{href:"https://discord.gg/refine"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," component is one of the built-in components that shipped with React router version 6. It is a React component equivalent of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook. It uses ",(0,a.yg)("inlineCode",{parentName:"p"},"useNavigate")," internally. The props you pass to ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," are the same as the arguments you pass to the function returned by ",(0,a.yg)("inlineCode",{parentName:"p"},"useNavigate"),"."),(0,a.yg)("p",null,"Unlike functional components in React, ES6 classes do not support hooks. Therefore, ",(0,a.yg)("inlineCode",{parentName:"p"},"Navigate")," is a handy equivalent of ",(0,a.yg)("inlineCode",{parentName:"p"},"useNavigate")," when working with class-based React components."))}d.isMDXComponent=!0}}]);