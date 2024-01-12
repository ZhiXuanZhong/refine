"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"useCreateMany",source:"packages/core/src/hooks/data/useCreateMany.ts"},s=void 0,p={unversionedId:"data/hooks/use-create-many/index",id:"data/hooks/use-create-many/index",title:"useCreateMany",description:"useCreateMany is used for creating multiple records. It is an extended version of TanStack Query's useMutation and not only supports all features of the mutation but also adds some extra features.",source:"@site/docs/data/hooks/use-create-many/index.md",sourceDirName:"data/hooks/use-create-many",slug:"/data/hooks/use-create-many/",permalink:"/docs/data/hooks/use-create-many/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-create-many/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1705057311,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{title:"useCreateMany",source:"packages/core/src/hooks/data/useCreateMany.ts"},sidebar:"mainSidebar",previous:{title:"useCreate",permalink:"/docs/data/hooks/use-create/"},next:{title:"useUpdate",permalink:"/docs/data/hooks/use-update/"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Invalidating Queries",id:"invalidating-queries",level:2},{value:"Audit Logs",id:"audit-logs",level:2},{value:"Properties",id:"properties",level:2},{value:"mutationOptions",id:"mutationoptions",level:3},{value:"overtimeOptions",id:"overtimeoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"resource <PropTag required />",id:"resource-",level:3},{value:"values <PropTag required />",id:"values-",level:3},{value:"successNotification",id:"successnotification",level:3},{value:"errorNotification",id:"errornotification",level:3},{value:"meta",id:"meta",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"invalidates",id:"invalidates",level:3},{value:"Return Values",id:"return-values",level:2},{value:"Additional Values",id:"additional-values",level:3},{value:"overtime",id:"overtime",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],m=(c="PropTag",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const k={toc:d};function h(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," is used for creating multiple records. It is an extended version of TanStack Query's ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"useMutation"))," and not only supports all features of the mutation but also adds some extra features."),(0,n.kt)("p",null,"It uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"createMany")," method as the ",(0,n.kt)("strong",{parentName:"p"},"mutation function")," from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,n.kt)("p",null,"If your data provider does not have a ",(0,n.kt)("inlineCode",{parentName:"p"},"createMany")," method, ",(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method instead. This is not recommended, since it will make requests one by one for each record."),(0,n.kt)("p",null,"It is better to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"createMany")," method in the data provider."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," hook returns many useful properties and methods. One of them is the ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," as parameters. These parameters will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"createMany")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCreateMany } from "@refinedev/core";\n\nconst { mutate } = useCreateMany();\n\nmutate({\n  resource: "products",\n  values: [\n    {\n      name: "Product 1",\n      material: "Wood",\n    },\n    {\n      name: "Product 2",\n      material: "Metal",\n    },\n  ],\n});\n')),(0,n.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"Live Provider"),".")),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," mutation runs successfully, it will call the ",(0,n.kt)("inlineCode",{parentName:"p"},"publish")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," etc. It is useful when you want to publish the changes to the subscribers on the client side."),(0,n.kt)("h2",{id:"invalidating-queries"},"Invalidating Queries"),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," mutation runs successfully, it will invalidate the following queries from the current ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),": ",(0,n.kt)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'"many"')," by default. Which means that, if you use ",(0,n.kt)("inlineCode",{parentName:"p"},"useList")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," hooks in the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing ",(0,n.kt)("a",{parentName:"p",href:"#invalidates"},(0,n.kt)("inlineCode",{parentName:"a"},"invalidates"))," prop."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"invalidation documentation ","\u2192"))),(0,n.kt)("h2",{id:"audit-logs"},"Audit Logs"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/audit-logs/audit-log-provider"},"Audit Log Provider"),".")),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," mutation runs successfully, it will call the ",(0,n.kt)("inlineCode",{parentName:"p"},"log")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," with some parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," etc. It is useful when you want to log the changes to the database."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"mutationoptions"},"mutationOptions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useCreateMany({\n  mutationOptions: {\n    retry: 3,\n  },\n});\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,n.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,n.kt)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate(\n  {\n    resource: "products",\n    values: [\n      {\n        name: "Product 1",\n        material: "Wood",\n      },\n      {\n        name: "Product 2",\n        material: "Metal",\n      },\n    ],\n  },\n  {\n    onError: (error, variables, context) => {\n      // An error occurred!\n    },\n    onSuccess: (data, variables, context) => {\n      // Let\'s celebrate!\n    },\n  },\n);\n')),(0,n.kt)("h3",{id:"overtimeoptions"},"overtimeOptions"),(0,n.kt)("p",null,"If you want loading overtime for the request, you can pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,n.kt)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,n.kt)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,n.kt)("p",null,"Return ",(0,n.kt)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,n.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useCreateMany({\n  //...\n  overtimeOptions: {\n    interval: 1000,\n    onInterval(elapsedInterval) {\n      console.log(elapsedInterval);\n    },\n  },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n  elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n")),(0,n.kt)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,n.kt)("h3",{id:"resource-"},"resource ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"This parameter will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used as an API endpoint path but it all depends on how you handle the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  resource: "categories",\n});\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider tutorial ","\u2192"))),(0,n.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,n.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,n.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,n.kt)("h3",{id:"values-"},"values ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"This prop will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used as the data to be created and contains the data that will be sent to the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  values: [\n    {\n      name: "Product 1",\n      material: "Wood",\n    },\n    {\n      name: "Product 2",\n      material: "Metal",\n    },\n  ],\n});\n')),(0,n.kt)("h3",{id:"successnotification"},"successNotification"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"This prop allows you to customize the success notification that shows up when the data is fetched successfully and ",(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n')),(0,n.kt)("h3",{id:"errornotification"},"errorNotification"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"This prop allows you to customize the error notification that shows up when the data fetching fails and the ",(0,n.kt)("inlineCode",{parentName:"p"},"useCreateMany")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n')),(0,n.kt)("h3",{id:"meta"},"meta"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,n.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,n.kt)("p",null,"In the following example, we pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method. You can pass any properties to specifically handle the data provider methods with similar logic,."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  // highlight-start\n  meta: {\n    headers: { "x-meta-data": "true" },\n  },\n  // highlight-end\n});\n\nconst myDataProvider = {\n  //...\n  createMany: async ({\n    resource,\n    variables,\n    // highlight-next-line\n    meta,\n  }) => {\n    // highlight-next-line\n    const headers = meta?.headers ?? {};\n    const url = `${apiUrl}/${resource}`;\n\n    //...\n    //...\n\n    // highlight-next-line\n    const { data } = await httpClient.post(url, variables, { headers });\n\n    return {\n      data,\n    };\n  },\n  //...\n};\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts/#meta-concept"},(0,n.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation","\u2192"))),(0,n.kt)("h3",{id:"dataprovidername"},"dataProviderName"),(0,n.kt)("p",null,"This prop allows you to specify which ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," if you have more than one. Just pass it like in the example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  dataProviderName: "second-data-provider",\n});\n')),(0,n.kt)("h3",{id:"invalidates"},"invalidates"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"invalidates")," is used to specify which queries should be invalidated after the mutation is completed."),(0,n.kt)("p",null,"By default, it invalidates the following queries from the current ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),": ",(0,n.kt)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,n.kt)("inlineCode",{parentName:"p"},"useList")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCreateMany();\n\nmutate({\n  invalidates: ["list", "many"],\n});\n')),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("p",null,"Returns an object with TanStack Query's ",(0,n.kt)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"useMutation")," documentation ","\u2192"))),(0,n.kt)("h3",{id:"additional-values"},"Additional Values"),(0,n.kt)("h4",{id:"overtime"},"overtime"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,n.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useCreateMany();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n")),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource ",(0,n.kt)(m,{asterisk:!0,mdxType:"PropTag"})),(0,n.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"values ",(0,n.kt)(m,{asterisk:!0,mdxType:"PropTag"})),(0,n.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TVariables[]")),(0,n.kt)("td",{parentName:"tr",align:null},"[{}]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,n.kt)("inlineCode",{parentName:"td"},"resource"),'s"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,n.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,n.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"meta"),(0,n.kt)("td",{parentName:"tr",align:null},"Meta data query for ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#metaquery"},(0,n.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"default"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"invalidates"),(0,n.kt)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"many"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"detail"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'["list", "many"]'))))),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,n.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData[]}, TError, { resource: string; values: TVariables[]; }, unknown>")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"overtime"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }"))))))}h.isMDXComponent=!0}}]);