"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62605],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"custom-form-validation",title:"Custom Form Validation"},s=void 0,c={unversionedId:"advanced-tutorials/forms/custom-form-validation",id:"advanced-tutorials/forms/custom-form-validation",title:"Custom Form Validation",description:"In Refine, we can use the form validation that comes with Ant Design with the rules property of the Form.Item component.",source:"@site/docs/advanced-tutorials/forms/custom-form-validation.md",sourceDirName:"advanced-tutorials/forms",slug:"/advanced-tutorials/forms/custom-form-validation",permalink:"/docs/advanced-tutorials/forms/custom-form-validation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/forms/custom-form-validation.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1713364469,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"custom-form-validation",title:"Custom Form Validation"},sidebar:"mainSidebar",previous:{title:"Handling Filters",permalink:"/docs/advanced-tutorials/data-provider/handling-filters"},next:{title:"Live / Realtime",permalink:"/docs/advanced-tutorials/real-time"}},u={},p=[{value:"Example",id:"example",level:3}],m=(d="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var d;const f={toc:p},g="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In ",(0,r.yg)("strong",{parentName:"p"},"Refine"),", we can use the form validation that comes with ",(0,r.yg)("inlineCode",{parentName:"p"},"Ant Design")," with the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/#Rule"},"rules")," property of the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},"Form.Item")," component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'<Form>\n  <Form.Item\n    label="Title"\n    name="title"\n    // highlight-start\n    rules={[\n      {\n        required: true,\n      },\n      {\n        min: 5,\n      },\n    ]}\n    // highlight-end\n  >\n    <Input />\n  </Form.Item>\n  ...\n</Form>\n')),(0,r.yg)("p",null,"In addition to pre-defined rules, we can also prepare ",(0,r.yg)("strong",{parentName:"p"},"custom rules")," with the validator function."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Now let's prepare a rule that checks if the titles of the posts are unique. We have an endpoint like the below. We will do the uniqueness check here."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts-unique-check?title=Example"',title:'"https://api.fake-rest.refine.dev/posts-unique-check?title'},'{\n  "isAvailable": true\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts/create",live:!0,hideCode:!0,url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { useForm, Create, CreateButton } from "@refinedev/antd";\nimport { Form, Input } from "antd";\n// highlight-next-line\nimport { useApiUrl, useCustom, HttpError } from "@refinedev/core";\n\n// highlight-start\ninterface IPost {\n  title: string;\n}\n\ninterface PostUniqueCheckResponse {\n  isAvailable: boolean;\n}\n\ninterface PostUniqueCheckRequestQuery {\n  title: string;\n}\n// highlight-end\n\nconst PostCreate: React.FC = () => {\n  const { formProps, saveButtonProps } = useForm<IPost>();\n\n  // highlight-next-line\n  const [title, setTitle] = useState("");\n\n  // highlight-start\n  const apiUrl = useApiUrl();\n  const url = `${apiUrl}/posts-unique-check`;\n  const { refetch } = useCustom<\n    PostUniqueCheckResponse,\n    HttpError,\n    PostUniqueCheckRequestQuery\n  >({\n    url,\n    method: "get",\n    config: {\n      query: {\n        title,\n      },\n    },\n    queryOptions: {\n      enabled: false,\n    },\n  });\n  // highlight-end\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Title"\n          name="title"\n          // highlight-start\n          rules={[\n            {\n              required: true,\n            },\n            {\n              validator: async (_, value) => {\n                if (!value) return;\n                const { data } = await refetch();\n                if (data && data.data.isAvailable) {\n                  return Promise.resolve();\n                }\n                return Promise.reject(new Error("\'title\' must be unique"));\n              },\n            },\n          ]}\n          // highlight-end\n        >\n          <Input\n            defaultValue="Test"\n            // highlight-next-line\n            onChange={(event) => setTitle(event.target.value)}\n          />\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts/create"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => (\n          <div>\n            <p>This page is empty.</p>\n            <CreateButton />\n          </div>\n        ),\n        create: PostCreate,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("admonition",{title:"important",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Value must be kept in the state."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<Input onChange={(event) => setTitle(event.target.value)} />\n")))))}h.isMDXComponent=!0}}]);