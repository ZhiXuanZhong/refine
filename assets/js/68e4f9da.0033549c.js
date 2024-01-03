"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=o,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Notification Provider"},c=void 0,l={unversionedId:"notification/notification-provider/index",id:"notification/notification-provider/index",title:"Notification Provider",description:"Refine let's you set a notification API by providing the notificationProvider property to the `` component.",source:"@site/docs/notification/notification-provider/index.md",sourceDirName:"notification/notification-provider",slug:"/notification/notification-provider/",permalink:"/docs/notification/notification-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/notification/notification-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704268684,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"Notification Provider"},sidebar:"mainSidebar",previous:{title:"Ably",permalink:"/docs/examples/live-provider/ably"},next:{title:"useNotification",permalink:"/docs/notification/hooks/use-notification/"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Built-in Notification Providers",id:"built-in-notification-providers",level:2},{value:"Creating a <code>notificationProvider</code> from scratch",id:"creating-a-notificationprovider-from-scratch",level:2},{value:"open",id:"open",level:3},{value:"close",id:"close",level:3},{value:"Example",id:"example",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=f("Tabs"),m=f("TabItem"),h=f("CodeSandboxExample"),k={toc:d};function v(e){var{components:t}=e,n=r(e,["components"]);return(0,i.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Refine let's you set a notification API by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," is an object with close and open methods. Refine uses these methods to show and hide notifications. These methods can be called from anywhere in the application with ",(0,i.kt)("a",{parentName:"p",href:"/docs/notification/hooks/use-notification"},(0,i.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," must include following methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const notificationProvider = {\n  show: () => {},\n  close: () => {},\n};\n")),(0,i.kt)("p",null,"And these methods types like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'interface NotificationProvider {\n  open: (params: OpenNotificationParams) => void;\n  close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n  key?: string;\n  message: string;\n  type: "success" | "error" | "progress";\n  description?: string;\n  cancelMutation?: () => void;\n  undoableTimeout?: number;\n}\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," in Refine, we have to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, NotificationProvider } from "@refinedev/core";\n\n//highlight-start\nconst notificationProvider: NotificationProvider = {\n  open: () => {},\n  close: () => {},\n};\n//highlight-end\n\nconst App = () => {\n  return (\n    <Refine\n      //highlight-next-line\n      notificationProvider={notificationProvider}\n      /* ... */\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,i.kt)("p",null,"By default, Refine doesn't require ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," configuration."),(0,i.kt)("p",null,"If an ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property is not provided, Refine will use the default ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider"),", which lets the app work without an notification.\nIf your app doesn't require ",(0,i.kt)("inlineCode",{parentName:"p"},"notification"),", no further setup is necessary for the app to work."),(0,i.kt)("h2",{id:"built-in-notification-providers"},"Built-in Notification Providers"),(0,i.kt)("p",null,"If you're looking for a complete notification infrastructure, Refine has out-of-the-box support for the libraries below:"),(0,i.kt)(u,{defaultValue:"antd",values:[{label:"Ant Design",value:"antd"},{label:"Material UI",value:"mui"},{label:"Mantine",value:"mantine"},{label:"Chakra UI",value:"chakra"}],mdxType:"Tabs"},(0,i.kt)(m,{value:"antd",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@refinedev/antd";\n\nreturn (\n  <Refine\n    //...\n    notificationProvider={notificationProvider}\n  />\n);\n'))),(0,i.kt)(m,{value:"mui",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider, RefineSnackbarProvider } from "@refinedev/mui";\n\nreturn (\n  <RefineSnackbarProvider>\n    <Refine\n      //...\n      notificationProvider={notificationProvider}\n    />\n  </RefineSnackbarProvider>\n);\n'))),(0,i.kt)(m,{value:"mantine",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\n\nreturn (\n  <NotificationsProvider position="top-right">\n    <Refine\n      //...\n      notificationProvider={notificationProvider}\n    />\n  </NotificationsProvider>\n);\n'))),(0,i.kt)(m,{value:"chakra",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@refinedev/chakra";\n\nreturn (\n  <Refine\n    //...\n    notificationProvider={notificationProvider()}\n  />\n);\n')))),(0,i.kt)("h2",{id:"creating-a-notificationprovider-from-scratch"},"Creating a ",(0,i.kt)("inlineCode",{parentName:"h2"},"notificationProvider")," from scratch"),(0,i.kt)("p",null,"We will now build a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," from scratch to show the logic of how ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," methods interact with the app. For this, we will use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,i.kt)("inlineCode",{parentName:"a"},"react-toastify"))," package, which is very ",(0,i.kt)("strong",{parentName:"p"},"popular")," in the ",(0,i.kt)("strong",{parentName:"p"},"React Ecosystem"),". If you want to use another notification library, you can use the same approach."),(0,i.kt)("p",null,"Before we start, we need set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-toastify")," requirements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\n//highlight-start\nimport { ToastContainer } from "react-toastify";\nimport "react-toastify/dist/ReactToastify.css";\n//highlight-end\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n    /* ...*/\n    >\n      {/* ... */}\n      {/* highlight-start */}\n      <ToastContainer />\n      {/* highlight-end */}\n    </Refine>\n  );\n};\n\nexport default App;\n')),(0,i.kt)("h3",{id:"open"},"open"),(0,i.kt)("p",null,"Refine calls this method when it wants to open a notification. It also helps you to get the right notification by sending some parameters to the Refine open method. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", etc."),(0,i.kt)("p",null,"Here we open a notification with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,i.kt)("inlineCode",{parentName:"a"},"react-toastify")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  open: ({ message, key, type }) => {\n    toast(message, {\n      toastId: key,\n      type,\n    });\n  },\n};\n')),(0,i.kt)("p",null,"Let's make it so that the previous notification is updated when the notification is called again with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," instead of creating a new one each time. We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"toast.isActive(key)")," for this since it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the notification is still active."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  open: ({ message, key, type }) => {\n    //highlight-start\n    if (toast.isActive(key)) {\n      toast.update(key, {\n        render: message,\n        type,\n      });\n    } else {\n      //highlight-end\n      toast(message, {\n        toastId: key,\n        type,\n      });\n    }\n  },\n};\n')),(0,i.kt)("p",null,"Now, let's create a custom notification when the mutation mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"undoable"),". In this case, Refine sends the notification's type as ",(0,i.kt)("inlineCode",{parentName:"p"},"progress")," as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelMutation")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"undoableTimeout"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," decreases by 1 every second until it reaches 0, at which point the notification is closed. The ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method is called again with the same",(0,i.kt)("inlineCode",{parentName:"p"},"key")," each countdown. So, the notification should be updated with the new",(0,i.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  open: ({ message, key, type }) => {\n    //highlight-start\n    if (type === "progress") {\n      if (toast.isActive(key)) {\n        toast.update(key, {\n          progress: undoableTimeout && (undoableTimeout / 10) * 2,\n          render: <UndoableNotification message={message} cancelMutation={cancelMutation} />,\n          type: "default",\n        });\n      } else {\n        toast(<UndoableNotification message={message} cancelMutation={cancelMutation} />, {\n          toastId: key,\n          updateId: key,\n          closeOnClick: false,\n          closeButton: false,\n          autoClose: false,\n          progress: undoableTimeout && (undoableTimeout / 10) * 2,\n        });\n      }\n    } else {\n      //highlight-end\n      if (toast.isActive(key)) {\n        toast.update(key, {\n          render: message,\n          //highlight-start\n          closeButton: true,\n          autoClose: 5000,\n          //highlight-end\n          type,\n        });\n      } else {\n        toast(message, {\n          toastId: key,\n          type,\n        });\n      }\n    }\n  },\n};\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"See UndoableNotification Component"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type UndoableNotification = {\n  message: string;\n  cancelMutation?: () => void;\n  closeToast?: () => void;\n};\n\nexport const UndoableNotification: React.FC<UndoableNotification> = ({ closeToast, cancelMutation, message }) => {\n  return (\n    <div>\n      <p>{message}</p>\n      <button\n        onClick={() => {\n          cancelMutation?.();\n          closeToast?.();\n        }}\n      >\n        Undo\n      </button>\n    </div>\n  );\n};\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We add ",(0,i.kt)("inlineCode",{parentName:"p"},"closeButton")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"autoClose")," for progress notifications, which are not closable by default to allow users to close them when the progress is done.")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method then will be accessible via ",(0,i.kt)("a",{parentName:"p",href:"/docs/notification/hooks/use-notification"},(0,i.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@refinedev/core";\n\nconst { open } = useNotification();\n\nopen?.({\n  type: "success",\n  message: "Hey",\n  description: "I <3 Refine",\n  key: "unique-id",\n});\n')),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"Refine calls this method when it wants to close a notification. Refine pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," of the notification to the ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," method. So, we can handle the notification close logic with this ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  //...\n  close: (key) => toast.dismiss(key),\n};\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"close")," method then will be accessible via ",(0,i.kt)("a",{parentName:"p",href:"/docs/notification/hooks/use-notification"},(0,i.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@refinedev/core";\n\nconst { close } = useNotification();\n\nclose?.("displayed-notification-key");\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(h,{path:"with-react-toastify",mdxType:"CodeSandboxExample"}))}v.isMDXComponent=!0}}]);