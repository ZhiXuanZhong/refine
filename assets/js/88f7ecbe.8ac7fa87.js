"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69117],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},g=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,d=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return t?n.createElement(d,s(s({ref:a},g),{},{components:t})):n.createElement(d,s({ref:a},g))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7536:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});t(96540);var n=t(15680);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",slug:"bash-script-arguments",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-22-bash-script/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/bash-script-arguments",source:"@site/blog/2024-02-22-bash-script.md",title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",date:"2024-02-22T00:00:00.000Z",formattedDate:"February 22, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:6.27,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",slug:"bash-script-arguments",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-22-bash-script/social.png",hide_table_of_contents:!1},prevItem:{title:"Create charts using Recharts",permalink:"/blog/recharts"},nextItem:{title:"How to Hide Scrollbar Using CSS?",permalink:"/blog/css-hide-scrollbar"},relatedPosts:[{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.07,date:"2022-11-13T00:00:00.000Z"},{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"},{title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",permalink:"/blog/low-code-tools",formattedDate:"April 19, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.255,date:"2024-04-19T00:00:00.000Z"}],authorPosts:[{title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",permalink:"/blog/kubectl-scale",formattedDate:"December 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.4,date:"2023-12-25T00:00:00.000Z"},{title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",permalink:"/blog/docker-exec",formattedDate:"August 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.995,date:"2023-08-18T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"November 3, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.02,date:"2022-11-03T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Positional Parameters",id:"understanding-positional-parameters",level:3},{value:"Using Special Parameters",id:"using-special-parameters",level:3},{value:"Implementing Flags and Options",id:"implementing-flags-and-options",level:2},{value:"Handling Variable Numbers of Arguments",id:"handling-variable-numbers-of-arguments",level:2},{value:"Best Practices for Script Arguments",id:"best-practices-for-script-arguments",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m},c="wrapper";function d(e){var{components:a}=e,t=s(e,["components"]);return(0,n.yg)(c,i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){r(e,a,t[a])}))}return e}({},u,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Arguments in any bash script are inevitable for any scripting task. They make the script flexible and dynamic instead of static and hard coded. Now there are many variations in how arguments can be used effectively in a script, and this is exactly what we will discuss today. Remember, a solid understanding of arguments is crucial to automate your tasks through script arguments. For each point in this article, we will provide an example from a practical perspective as well."),(0,n.yg)("p",null,"Let's start with understanding how positional parameters work in the bash script."),(0,n.yg)("p",null,"Steps to be covered:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#understanding-positional-parameters"},"Understanding Positional Parameters")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#using-special-parameters"},"Using Special Parameters")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#implementing-flags-and-options"},"Implementing Flags and Options")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#handling-variable-numbers-of-arguments"},"Handling Variable Numbers of Arguments"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#best-practices-for-script-arguments"},"Best Practices for Bash Script Arguments"))))),(0,n.yg)("h3",{id:"understanding-positional-parameters"},"Understanding Positional Parameters"),(0,n.yg)("p",null,"In bash scripting, positional parameters are a fundamental concept. They\u2019re the variables that bash scripts use to handle input data. When you run a script, you can pass arguments to it, and these arguments are stored in special variables known as positional parameters. The first argument you pass is stored in ",(0,n.yg)("inlineCode",{parentName:"p"},"$1"),", the second in ",(0,n.yg)("inlineCode",{parentName:"p"},"$2"),", and so on."),(0,n.yg)("p",null,"Let\u2019s understand this in detail through an example. Let's say you have a bash script that needs to process three pieces of input data and you want to make use of positional parameters. The below snippet shows how you might use positional parameters to handle this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "Arg 1: $1"\necho "Arg 2: $2"\necho "Arg 3: $3"\n')),(0,n.yg)("p",null,"When you run this script with three arguments, it will echo back the first three arguments you passed to it. For instance, if you run ",(0,n.yg)("inlineCode",{parentName:"p"},"./myscript.sh marketing sales engineering"),", the script will output:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"Arg 1: marketing\nArg 2: sales\nArg 3: engineering\n")),(0,n.yg)("p",null,"This shows how ",(0,n.yg)("inlineCode",{parentName:"p"},"$1"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"$2"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"$3")," correspond to the first, second, and third arguments you passed to the script. It is a simple yet powerful way to make your scripts more flexible and reusable."),(0,n.yg)("h3",{id:"using-special-parameters"},"Using Special Parameters"),(0,n.yg)("p",null,"In bash scripting, there are special parameters that provide additional ways to handle input data. These include ",(0,n.yg)("inlineCode",{parentName:"p"},"$*"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"$@"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"$#"),"."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"$*")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"$@")," parameters represent all arguments that were passed to the script. While they might seem identical, their behavior diverges when you try to iterate over them in a script. Let\u2019s illustrate this with an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "Iterating with \\$*"\nfor arg in "$*"\ndo\n    echo $arg\ndone\n\necho "Iterating with \\$@"\nfor arg in "$@"\ndo\n    echo $arg\ndone\n')),(0,n.yg)("p",null,"If you run this script with the arguments ",(0,n.yg)("inlineCode",{parentName:"p"},"./myscript.sh one two three"),", you\u2019ll notice that ",(0,n.yg)("inlineCode",{parentName:"p"},"$*")," treats all arguments as a single string, while ",(0,n.yg)("inlineCode",{parentName:"p"},"$@")," treats each argument as a separate string."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"$#")," parameter is different - it doesn\u2019t represent the arguments themselves, but the number of arguments. This can be useful when your script needs to know how many arguments were passed. Here\u2019s a simple script that uses ",(0,n.yg)("inlineCode",{parentName:"p"},"$#"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "You provided $# arguments."\n')),(0,n.yg)("p",null,"If you run ",(0,n.yg)("inlineCode",{parentName:"p"},"./myscript.sh apple banana cherry"),", the script will output ",(0,n.yg)("inlineCode",{parentName:"p"},"You provided 3 arguments.")," This shows how ",(0,n.yg)("inlineCode",{parentName:"p"},"$#")," can be used to count the number of arguments passed to a script."),(0,n.yg)("h2",{id:"implementing-flags-and-options"},"Implementing Flags and Options"),(0,n.yg)("p",null,"Bash scripts often require input parameters to customize behavior, and ",(0,n.yg)("inlineCode",{parentName:"p"},"getopts")," is a utility that can be used to parse positional parameters."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Initialize our own variables\nOPTIND=1         # Reset in case getopts has been used previously in the shell.\nverbose=0\nname=""\n\nwhile getopts "h?vn:" opt; do\n    case "$opt" in\n    h|\\?)\n        echo "Usage: $0 [-v] [-n name]"\n        exit 0\n        ;;\n    v)  verbose=1\n        ;;\n    n)  name=$OPTARG\n        ;;\n    esac\ndone\n\nshift $((OPTIND-1))\n\n[ "${1:-}" = "--" ] && shift\n\necho "verbose=$verbose, name=\'$name\', Leftovers: $@"\n')),(0,n.yg)("p",null,"In the script above, ",(0,n.yg)("inlineCode",{parentName:"p"},"-h")," is used for displaying help information, and ",(0,n.yg)("inlineCode",{parentName:"p"},"-n")," is used for setting a name. The ",(0,n.yg)("inlineCode",{parentName:"p"},"v")," flag is used to set verbose mode. If ",(0,n.yg)("inlineCode",{parentName:"p"},"-v")," is provided when the script is run, ",(0,n.yg)("inlineCode",{parentName:"p"},"verbose")," is set to 1. If ",(0,n.yg)("inlineCode",{parentName:"p"},"-n")," is provided, the next argument is assigned to the variable ",(0,n.yg)("inlineCode",{parentName:"p"},"name"),"."),(0,n.yg)("p",null,"Here\u2019s an example of how you might run this script:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'$ ./myscript -v -n "Example Name" leftover args\n\n')),(0,n.yg)("p",null,"Output:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"verbose=1, name='Example Name', Leftovers: leftover args\n")),(0,n.yg)("p",null,"In this example, the ",(0,n.yg)("inlineCode",{parentName:"p"},"-v")," flag sets verbose mode, and ",(0,n.yg)("inlineCode",{parentName:"p"},"-n")," sets the name to \u201cExample Name\u201d. Any arguments provided after the flags (in this case, \u201cleftover args\u201d) are still available in the script."),(0,n.yg)("h2",{id:"handling-variable-numbers-of-arguments"},"Handling Variable Numbers of Arguments"),(0,n.yg)("p",null,"Bash scripts often need to accept a variable number of arguments. This is where ",(0,n.yg)("inlineCode",{parentName:"p"},"$@")," comes into play. It\u2019s a special shell variable that holds all the arguments provided to the script."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Initialize an empty string\nconcatenated=""\n\n# Loop through all arguments\nfor arg in "$@"; do\n    concatenated+="$arg "\ndone\n\n# Print the concatenated string\necho "Concatenated string: $concatenated"\n')),(0,n.yg)("p",null,"In the script above, we initialize an empty string ",(0,n.yg)("inlineCode",{parentName:"p"},"concatenated"),". We then loop through all arguments provided to the script using ",(0,n.yg)("inlineCode",{parentName:"p"},"$@")," and append each argument to ",(0,n.yg)("inlineCode",{parentName:"p"},"concatenated"),"."),(0,n.yg)("p",null,"Here\u2019s an example of how you might run this script:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ ./myscript arg1 arg2 arg3\n")),(0,n.yg)("p",null,"Output:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"Concatenated string: arg1 arg2 arg3\n")),(0,n.yg)("p",null,"In this example, the script concatenates the three arguments ",(0,n.yg)("inlineCode",{parentName:"p"},"arg1"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"arg2"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"arg3")," into a single string. This demonstrates how a bash script can handle a variable number of arguments."),(0,n.yg)("h3",{id:"best-practices-for-script-arguments"},"Best Practices for Script Arguments"),(0,n.yg)("p",null,"Here are some best practices for designing bash scripts with arguments:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Use Intuitive Argument Names:")," Opt for descriptive and intuitive names for arguments. This improves readability and helps maintain the code."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Bad: ",(0,n.yg)("inlineCode",{parentName:"li"},"bash script.sh $1 $2")),(0,n.yg)("li",{parentName:"ul"},"Good: ",(0,n.yg)("inlineCode",{parentName:"li"},"bash script.sh -u username -p password")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Assign Default Values:")," Where practical, assign default values to arguments. This ensures that your script behaves predictably even when certain inputs are omitted."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Example: ",(0,n.yg)("inlineCode",{parentName:"li"},'file_path=${1:-"/default/path"}')))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Inline Comments:")," Use inline comments to explain the purpose and expected values of arguments. This documentation aids future maintainers and users of your script."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Example: ",(0,n.yg)("inlineCode",{parentName:"li"},"# -u: Username for login")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Leverage ",(0,n.yg)("inlineCode",{parentName:"strong"},"getopts")," for Option Parsing:")," ",(0,n.yg)("inlineCode",{parentName:"p"},"getopts")," allows for more flexible and robust argument parsing, supporting both short and long options."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Example:")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'while getopts ":u:p:" opt; do\n  case ${opt} in\n    u ) username=$OPTARG;;\n    p ) password=$OPTARG;;\n    \\? ) echo "Usage: cmd [-u] [-p]";;\n  esac\ndone\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Validate Input Early:")," Check for the existence and format of required arguments at the start of your script to prevent execution with invalid inputs.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Example:")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'if [ -z "$username" ] || [ -z "$password" ]; then\n  echo "Username and password are required."\n  exit 1\nfi\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Beware of Unquoted Variables:")," Always quote variables to handle values with spaces correctly.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Bad: ",(0,n.yg)("inlineCode",{parentName:"li"},"if [ -z $var ]; then")),(0,n.yg)("li",{parentName:"ul"},"Good: ",(0,n.yg)("inlineCode",{parentName:"li"},'if [ -z "$var" ]; then')))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Explicitly Declare Intent:")," Use ",(0,n.yg)("inlineCode",{parentName:"li"},"set -u")," to treat unset variables and parameters as an error, preventing scripts from running with unintended states.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Add ",(0,n.yg)("inlineCode",{parentName:"li"},"set -u")," at the beginning of your script.")))),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"The importance of arguments in developing scripts that can adapt to different situations is highlighted by the fact that they are extensively used in bash scripts. We focused on improving script functionality and user interaction by using positional parameters, special variables, and ",(0,n.yg)("inlineCode",{parentName:"p"},"getopts"),"."),(0,n.yg)("p",null,"Not only do the given examples provide a useful roadmap, but they also inspire developers to try new things and incorporate these ideas into their scripts. Your scripting skills will certainly improve after adopting these best practices and techniques, allowing you to make your automation tasks more efficient and adaptable."))}d.isMDXComponent=!0}}]);