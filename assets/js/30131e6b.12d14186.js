"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4548],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||g[m]||a;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>c});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},l=void 0,d={unversionedId:"tutorial/adding-crud-pages/mantine/add-create-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/mantine/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the blog_posts resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mantine",slug:"/tutorial/adding-crud-pages/mantine/add-create-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mantine/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-create-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1713364469,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},s={},c=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=g("DocThumbsUpDownFeedbackWidget"),u=g("Checklist"),h=g("ChecklistItem"),y={toc:c},f="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,r.yg)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,r.yg)(m,{id:"creating-create-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"First, let's create our file under the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,r.yg)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,r.yg)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to the ",(0,r.yg)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Paste the code into the you created, ",(0,r.yg)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,r.yg)("p",null,"You can see the create page code generated by Inferencer below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          resources={[\n            {\n              name: "blog_posts",\n              list: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n              edit: MantineInferencer,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n')),(0,r.yg)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize.")),(0,r.yg)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,r.yg)(m,{id:"understanding-the-create-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will go through the create page components and hooks one by one."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,r.yg)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/components/basic-views/create"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-mantine")," package, has been developed by using the ",(0,r.yg)("strong",{parentName:"p"},"Mantine")," ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook and ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core")," ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook. It is used to handle the form state and form submission."),(0,r.yg)("p",{parentName:"li"},"It also provides the ",(0,r.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,r.yg)("p",{parentName:"li"},"When you use ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," in the edit page,it sends the form data to ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mantine/hooks/form/useForm/"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Mantine")," documentation for more information ","\u2192"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"All other components provided by ",(0,r.yg)("strong",{parentName:"p"},"Mantine")," are used to display the form fields."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://mantine.dev/"},"Refer to the Mantine documentation for more information ","\u2192"))))),(0,r.yg)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.yg)(m,{id:"handling-relationships",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,r.yg)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,r.yg)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,r.yg)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/useSelect/"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://mantine.dev/core/select/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Mantine")," ",(0,r.yg)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,r.yg)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,r.yg)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,r.yg)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n  resource: "categories",\n});\n'))),(0,r.yg)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,r.yg)(m,{id:"adding-the-create-page-to-the-app",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Now that we have created the create page, we need to add it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Import the created ",(0,r.yg)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"MantineInferencer")," component with the ",(0,r.yg)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    useNotificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={useNotificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: BlogPostList,\n                            edit: BlogPostEdit,\n                            show: BlogPostShow,\n                            /highlight-next-line\n                            create: BlogPostCreate,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\nexport default App;\n')),(0,r.yg)("p",null,"Now, we can see the create page in the browser at ",(0,r.yg)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)(u,{mdxType:"Checklist"},(0,r.yg)(h,{id:"add-create-page-mantine",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,r.yg)(h,{id:"add-create-page-mantine-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,r.yg)(h,{id:"add-create-page-mantine-3",mdxType:"ChecklistItem"},"I understood the relationship handling."))))}b.isMDXComponent=!0}}]);