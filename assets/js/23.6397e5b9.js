(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[t._v("如果下面的内容无法解决你的问题，请查看 "),a("a",{attrs:{href:"https://github.com/eggjs/egg/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Egg issues"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"如何高效的反馈问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何高效的反馈问题？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何高效的反馈问题？")]),t._v(" "),a("p",[t._v("感谢您向我们反馈问题。")]),t._v(" "),a("ol",[a("li",[t._v("我们推荐如果是小问题（错别字修改，小的 bug fix）直接提交 PR。")]),t._v(" "),a("li",[t._v("如果是一个新需求，请提供：详细需求描述，最好是有伪代码示意。")]),t._v(" "),a("li",[t._v("如果是一个 BUG，请提供：复现步骤，错误日志以及相关配置，并尽量填写下面的模板中的条目。")]),t._v(" "),a("li",[a("strong",[t._v("如果可以，尽可能使用 "),a("code",[t._v("egg-init --type=simple bug")]),t._v(" 提供一个最小可复现的代码仓库，方便我们排查问题。")])]),t._v(" "),a("li",[t._v("不要挤牙膏似的交流，扩展阅读："),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25795393",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何向开源项目提交无法解答的问题"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("最重要的是，请明白一件事：开源项目的用户和维护者之间并不是甲方和乙方的关系，issue 也不是客服工单。在开 issue 的时候，请抱着一种『一起合作来解决这个问题』的心态，不要期待我们单方面地为你服务。")]),t._v(" "),a("h2",{attrs:{id:"为什么我的配置不生效？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么我的配置不生效？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么我的配置不生效？")]),t._v(" "),a("p",[t._v("框架的配置功能比较强大，有不同环境变量，又有框架、插件、应用等很多地方配置。")]),t._v(" "),a("p",[t._v("如果你分析问题时，想知道当前运行时使用的最终配置，可以查看下 "),a("code",[t._v("${root}/run/application_config.json")]),t._v("（worker 进程配置） 和 "),a("code",[t._v("${root}/run/agent_config.json")]),t._v("（agent 进程配置） 这两个文件。（"),a("code",[t._v("root")]),t._v(" 为应用根目录，只有在 local 和 unittest 环境下为项目所在目录，其他环境下都为 HOME 目录）")]),t._v(" "),a("p",[t._v("也可参见"),a("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/config.html#%E9%85%8D%E7%BD%AE%E7%BB%93%E6%9E%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("PS：请确保没有写出以下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/config.default.js")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someKeys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("appInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"线上的日志打印去哪里了？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上的日志打印去哪里了？","aria-hidden":"true"}},[t._v("#")]),t._v(" 线上的日志打印去哪里了？")]),t._v(" "),a("p",[t._v("默认配置下，本地开发环境的日志都会打印在应用根目录的 "),a("code",[t._v("logs")]),t._v(" 文件夹下("),a("code",[t._v("${baseDir}/logs")]),t._v(") ，但是在非开发期的环境（非 local 和 unittest 环境），所有的日志都会打印到 "),a("code",[t._v("$HOME/logs")]),t._v(" 文件夹下（例如 "),a("code",[t._v("/home/admin/logs")]),t._v("）。这样可以让本地开发时应用日志互不影响，服务器运行时又有统一的日志输出目录。")]),t._v(" "),a("h2",{attrs:{id:"进程管理为什么没有选型-pm2-？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程管理为什么没有选型-pm2-？","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程管理为什么没有选型 PM2 ？")]),t._v(" "),a("ol",[a("li",[t._v("PM2 模块本身复杂度很高，出了问题很难排查。我们认为框架使用的工具复杂度不应该过高，而 PM2 自身的复杂度超越了大部分应用本身。")]),t._v(" "),a("li",[t._v("没法做非常深的优化。")]),t._v(" "),a("li",[t._v("切实的需求问题，一个进程里跑 leader，其他进程代理到 leader 这种模式（"),a("router-link",{attrs:{to:"/zh/advanced/framework/cluster-and-ipc.html"}},[t._v("多进程模型")]),t._v("），在企业级开发中对于减少远端连接，降低数据通信压力等都是切实的需求。特别当应用规模大到一定程度，这就会是刚需。egg 本身起源于蚂蚁金服和阿里，我们对标的起点就是大规模企业应用的构建，所以要非常全面。这些特性通过 PM2 很难做到。")],1)]),t._v(" "),a("p",[t._v("进程模型非常重要，会影响到开发模式，运行期间的深度优化等，我们认为可能由框架来控制比较合适。")]),t._v(" "),a("p",[a("strong",[t._v("如何使用 PM2 启动应用？")])]),t._v(" "),a("p",[t._v("尽管我们不推荐使用 PM2 启动，但仍然是可以做到的。")]),t._v(" "),a("p",[t._v("首先，在项目根目录定义启动文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// server.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" egg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'egg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'os'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cpus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\negg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startCluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  workers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  baseDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样，我们就可以通过 PM2 进行启动了：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pm2 start server.js\n")])])]),a("h2",{attrs:{id:"为什么会有-csrf-报错？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会有-csrf-报错？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么会有 csrf 报错？")]),t._v(" "),a("p",[t._v("通常有两种 csrf 报错：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("missing csrf token")])]),t._v(" "),a("li",[a("code",[t._v("invalid csrf token")])])]),t._v(" "),a("p",[t._v("Egg 内置的 "),a("a",{attrs:{href:"https://github.com/eggjs/egg-security/",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-security"),a("OutboundLink")],1),t._v(" 插件默认对所有『非安全』的方法，例如 "),a("code",[t._v("POST")]),t._v("，"),a("code",[t._v("PUT")]),t._v("，"),a("code",[t._v("DELETE")]),t._v(" 都进行 CSRF 校验。")]),t._v(" "),a("p",[t._v("请求遇到 csrf 报错通常是因为没有加正确的 csrf token 导致，具体实现方式，请阅读"),a("router-link",{attrs:{to:"/zh/ecosystem/security/csrf.html"}},[t._v("安全威胁 CSRF 的防范")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"本地开发时，修改代码后为什么-worker-进程没有自动重启？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地开发时，修改代码后为什么-worker-进程没有自动重启？","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地开发时，修改代码后为什么 worker 进程没有自动重启？")]),t._v(" "),a("p",[t._v("没有自动重启的情况一般是在使用 Jetbrains 旗下软件（IntelliJ IDEA, WebStorm..），并且开启了 Safe Write 选项。")]),t._v(" "),a("p",[t._v("Jetbrains "),a("a",{attrs:{href:"https://www.jetbrains.com/help/webstorm/2016.3/system-settings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Safe Write 文档"),a("OutboundLink")],1),t._v("中有提到：")]),t._v(" "),a("blockquote",[a("p",[t._v("If this check box is selected, a changed file is first saved in a temporary file. If the save operation succeeds, the file being saved is replaced with the saved file. (Technically, the original file is deleted and the temporary file is renamed.)")])]),t._v(" "),a("p",[t._v('由于使用了重命名导致文件监听的失效。解决办法是关掉 Safe Write 选项。（Settings | Appearance & Behavior | System Settings | Use "safe write" 路径可能根据版本有所不同）')])])},[],!1,null,null,null);s.default=n.exports}}]);