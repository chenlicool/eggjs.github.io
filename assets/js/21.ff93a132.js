(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{221:function(e,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"目录规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录规范","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录规范")]),e._v(" "),t("p",[e._v("对于一个团队框架来说，『约定优于配置』，按照一套统一的约定进行应用开发，可以极大地减少开发人员的沟通成本。")]),e._v(" "),t("p",[e._v("框架通过 Loader 机制来自动挂载文件，应用开发者只需要添加文件到对应的目录即可。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("showcase\n├── app\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   ├── router.js\n│   ├── controller\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   └── home.js\n│   ├── "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v("\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   └── user.js\n│   ├── middleware\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   └── response_time.js\n│   └── view\n│       └── home.tpl\n├── config\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   ├── plugin.js\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   ├── config.default.js\n│   ├── config.prod.js\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   ├── config.local.js\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   └── config.unittest.js\n├── "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   ├── controller\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   └── home.test.js\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   └── "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("       └── user.test.js\n└── package.json\n")])])]),t("p",[e._v("如上，为一个常见的应用目录结构：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("app")]),e._v("： 为主要的逻辑代码目录。\n"),t("ul",[t("li",[e._v("常规 MVC 如： "),t("code",[e._v("app/controller")]),e._v(" 、 "),t("code",[e._v("app/service")]),e._v(" 、 "),t("code",[e._v("app/router.js")]),e._v(" 等。")]),e._v(" "),t("li",[e._v("某些插件也会自定义加载规范，如 "),t("code",[e._v("app/rpc")]),e._v(" 等目录的自动挂载。")])])]),e._v(" "),t("li",[t("code",[e._v("config")]),e._v("： 为配置目录，包含不同环境的配置文件，以及插件挂载声明。")]),e._v(" "),t("li",[t("code",[e._v("test")]),e._v("： 为单元测试目录。")]),e._v(" "),t("li",[t("code",[e._v("run")]),e._v("：每次启动期都会 dump 的相关信息，用于问题排查，建议加入 "),t("code",[e._v("gitignore")]),e._v("。")])]),e._v(" "),t("p",[e._v("文件挂载如下：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("app/controller/home.js")]),e._v(" 会被自动挂载到 "),t("code",[e._v("app.controller.home")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("app/service/user.js")]),e._v(" 会被自动挂载到 "),t("code",[e._v("ctx.service.user")]),e._v("。")])]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("注意事项")]),e._v(" "),t("p",[e._v("需要注意的是，"),t("strong",[e._v("加载文件时会进行驼峰转换")]),e._v("，因此文件名和挂载的属性名可能会存在差异：")]),e._v(" "),t("ul",[t("li",[e._v("默认情况下，连字符和下划线均会被转换为驼峰格式。")]),e._v(" "),t("li",[e._v("如 "),t("code",[e._v("app/middleware/response_time.js")]),e._v(" 挂载为 "),t("code",[e._v("app.middleware.responseTime")]),e._v("。")]),e._v(" "),t("li",[e._v("部分插件，如 mongoose 插件有特殊约定，会挂载为类格式，如 "),t("code",[e._v("app.model.User")]),e._v("。")])])]),e._v(" "),t("p",[e._v("在后面的章节中，我们会逐步介绍具体的目录约定。")]),e._v(" "),t("p",[e._v("如果需要自定义加载规则，可以参见 Loader 相关文档。")])])},[],!1,null,null,null);s.default=a.exports}}]);