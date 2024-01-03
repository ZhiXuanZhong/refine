"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92212,98575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={},l=void 0,p={unversionedId:"partials/tutorial/headless-layout",id:"partials/tutorial/headless-layout",title:"headless-layout",description:"",source:"@site/docs/partials/tutorial/headless-layout.md",sourceDirName:"partials/tutorial",slug:"/partials/tutorial/headless-layout",permalink:"/docs/partials/tutorial/headless-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/partials/tutorial/headless-layout.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704268684,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{}},d={},c=[],u={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},'body {\n    margin: 0px;\n}\n\ntable {\n    border-spacing: 0;\n    border: 1px solid black;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n    border-bottom: 0;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n    border-right: 0;\n}\n\n.layout {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 751px) {\n    .layout {\n        display: block;\n    }\n}\n\n.layout .content {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.breadcrumb {\n    display: flex;\n    gap: 24px;\n    list-style-type: "/  ";\n    padding: 8px 16px;\n    border-bottom: 1px solid lightgray;\n}\n\n.breadcrumb a {\n    color: blue;\n    text-decoration: none;\n}\n\n.menu {\n    flex-shrink: 0;\n    padding: 8px 16px;\n    border-right: 1px solid lightgray;\n}\n\n.menu a {\n    color: black;\n}\n\n.menu .active {\n    font-weight: bold;\n}\n\n@media screen and (max-width: 751px) {\n    .menu {\n        border-right: none;\n        border-bottom: 1px solid lightgray;\n    }\n}\n\n.menu ul {\n    padding-left: 16px;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { PropsWithChildren } from "react";\nimport { useMenu, useBreadcrumb } from "@refinedev/core";\nimport { NavLink, Link } from "react-router-dom";\n\nconst Breadcrumb = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul className="breadcrumb">\n            {breadcrumbs.map((breadcrumb) => (\n                <li key={`breadcrumb-${breadcrumb.label}`}>\n                    {breadcrumb.href ? (\n                        <Link to={breadcrumb.href}>{breadcrumb.label}</Link>\n                    ) : (\n                        <span>{breadcrumb.label}</span>\n                    )}\n                </li>\n            ))}\n        </ul>\n    );\n};\n\nconst Menu = () => {\n    const { menuItems } = useMenu();\n\n    return (\n        <nav className="menu">\n            <ul>\n                {menuItems.map((item) => (\n                    <li key={item.key}>\n                        <NavLink to={item.route ?? "/"}>{item.label}</NavLink>\n                    </li>\n                ))}\n            </ul>\n        </nav>\n    );\n};\n\nconst Layout: React.FC<PropsWithChildren> = ({ children }) => {\n    return (\n        <div className="layout">\n            <Menu />\n            <div className="content">\n                <Breadcrumb />\n                <div>{children}</div>\n            </div>\n        </div>\n    );\n};\n')))}h.isMDXComponent=!0},31977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>u});n(67294);var r=n(3905),o=n(70151);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}},p=void 0,d={unversionedId:"tutorial/adding-crud-pages/headless/add-show-page",id:"tutorial/adding-crud-pages/headless/add-show-page",title:"3. Adding Show Page",description:"`",source:"@site/docs/tutorial/4-adding-crud-pages/headless/add-show-page.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-show-page",permalink:"/docs/tutorial/adding-crud-pages/headless/add-show-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/add-show-page.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704268684,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}}},c={},u=[{value:"Creating the Show Page",id:"creating-the-show-page",level:2},{value:"Understanding the Show Component",id:"understanding-the-show-component",level:2},{value:"Hooks and Components in Show Page",id:"hooks-and-components-in-show-page",level:3},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Show Page to the App",id:"adding-the-show-page-to-the-app",level:2}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=h("Checklist"),g=h("ChecklistItem"),f={toc:u};function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"SharedComponents"}),"`",(0,r.kt)("h2",{id:"creating-the-show-page"},"Creating the Show Page"),(0,r.kt)("p",null,"First, we need to create our file, named ",(0,r.kt)("inlineCode",{parentName:"p"},"show.tsx"),", under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will then copy the show page code generated by Inferencer and paste it into the file; for this, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on any of the "Show" buttons in the "Actions" column of the table to open the edit page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the show page code generated by Inferencer. Copy it by clicking on the "Copy" button.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"show.tsx")," file."))),(0,r.kt)("p",null,"You can see an example show page generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerBindings}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        resources={[\n          {\n            name: "blog_posts",\n            list: "/blog-posts",\n            show: "/blog-posts/show/:id",\n            create: "/blog-posts/create",\n            edit: "/blog-posts/edit/:id",\n          },\n        ]}\n        options={{\n          syncWithLocation: true,\n          warnWhenUnsavedChanges: true,\n        }}\n      >\n        <Routes>\n          <Route\n            element={\n              <Layout>\n                <Outlet />\n              </Layout>\n            }\n          >\n            <Route index element={<NavigateToResource resource="blog_posts" />} />\n\n            <Route path="/blog-posts">\n              <Route index element={<HeadlessInferencer />} />\n              <Route path="show/:id" element={<HeadlessInferencer />} />\n              <Route path="edit/:id" element={<HeadlessInferencer />} />\n              <Route path="create" element={<HeadlessInferencer />} />\n            </Route>\n\n            <Route path="*" element={<div>Error!</div>} />\n          </Route>\n        </Routes>\n\n        <UnsavedChangesNotifier />\n      </Refine>\n    </BrowserRouter>\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"understanding-the-show-component"},"Understanding the Show Component"),(0,r.kt)("h3",{id:"hooks-and-components-in-show-page"},"Hooks and Components in Show Page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," hook is used to get single record data by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the URL. It sends the parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," function and returns the result.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook is used for navigating between pages. In this case, we are using it to navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),' pages when the user clicks on the "Blog Posts List" buttons.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useResource")," is hook is used to get current resource information and ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," that are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-show"},(0,r.kt)("inlineCode",{parentName:"a"},"useShow")),",",(0,r.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-resource"},(0,r.kt)("inlineCode",{parentName:"a"},"useResource")," documentations","\u2192"))))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"On the show page, we have a single record, and it may have relationships with other resources."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource has a relationship with the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource. In this case, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook provided by Refine, which allows us to fetch single record data by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," parameters."),(0,r.kt)("p",null,"In the auto-generated show page code, Inferencer used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook to fetch the category data of the blog post record like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n  resource: "categories",\n  id: record?.category?.id || "",\n});\n')),(0,r.kt)("p",null,"To ensure that the related data is fetched only after the blog post record has been successfully retrieved, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," object. By setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," only if the record variable is truthy, we can control when the related data is fetched, just like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n  resource: "categories",\n  id: record?.category?.id || "",\n  queryOptions: {\n    enabled: !!record,\n  },\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-one"},(0,r.kt)("inlineCode",{parentName:"a"},"useOne")," documentation","\u2192"))),(0,r.kt)("h2",{id:"adding-the-show-page-to-the-app"},"Adding the Show Page to the App"),(0,r.kt)("p",null,"Now that we have created the show page, we can add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostShow")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"HeadlessInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostShow")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostList } from "pages/blog-posts/list";\n//highlight-next-line\nimport { BlogPostShow } from "pages/blog-posts/show";\n\nimport { Layout } from "components/layout";\n\nimport "./App.css";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerBindings}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        resources={[\n          {\n            name: "blog_posts",\n            list: "/blog-posts",\n            // highlight-next-line\n            show: "/blog-posts/show/:id",\n            create: "/blog-posts/create",\n            edit: "/blog-posts/edit/:id",\n          },\n        ]}\n        options={{\n          syncWithLocation: true,\n          warnWhenUnsavedChanges: true,\n        }}\n      >\n        <Routes>\n          <Route\n            element={\n              <Layout>\n                <Outlet />\n              </Layout>\n            }\n          >\n            <Route index element={<NavigateToResource resource="blog_posts" />} />\n\n            <Route path="blog-posts">\n              <Route index element={<BlogPostList />} />\n              {/* highlight-next-line */}\n              <Route path="show/:id" element={<BlogPostShow />} />\n              <Route path="edit/:id" element={<BlogPostEdit />} />\n              <Route path="create" element={<HeadlessInferencer />} />\n            </Route>\n\n            <Route path="*" element={<div>Error!</div>} />\n          </Route>\n        </Routes>\n        <UnsavedChangesNotifier />\n      </Refine>\n    </BrowserRouter>\n  );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the show page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123")),(0,r.kt)("br",null),(0,r.kt)(m,{mdxType:"Checklist"},(0,r.kt)(g,{id:"add-show-page-headless",mdxType:"ChecklistItem"},"I have added the show page to the app."),(0,r.kt)(g,{id:"add-show-page-headless-2",mdxType:"ChecklistItem"},"I understood the show page components and hooks."),(0,r.kt)(g,{id:"add-show-page-headless-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}b.isMDXComponent=!0}}]);