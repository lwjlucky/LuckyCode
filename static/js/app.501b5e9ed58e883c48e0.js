webpackJsonp([1],{"/9hw":function(t,e,n){t.exports=n.p+"/LuckyCode/static/img/bg3.7eb1ec4.jpg"},"/S5q":function(t,e){},BDeZ:function(t,e){},BZjW:function(t,e){},CFSk:function(t,e){},CVlB:function(t,e,n){t.exports=n.p+"lwjlucky.github.io/LuckyCode/static/img/bg2.54ef441.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("yf3K"),a=n("zUjc"),s=n.n(a),o=(n("BDeZ"),n("CFSk")),c=n.n(o),r={data:function(){return{show:!1,states:[{icon:"icon-nianling",val:"年龄/30"},{icon:"icon-xueli",val:"学历/本科"},{icon:"icon-icon-",val:"坐标/四川会理"},{icon:"icon-zhiwei",val:"状态/离职"}]}},methods:{timeout:function(){var t=this;setTimeout(function(){t.show=!0},1e3)}},mounted:function(){this.timeout()}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info"},[i("h1",[t._v("基本资料/info")]),t._v(" "),i("transition",{attrs:{duration:{enter:2500,leave:1500},"enter-active-class":"animated fadeInUp"}},[t.show?i("div",{staticClass:"cont"},[i("img",{staticClass:"avatar",attrs:{src:n("/9hw"),alt:""}}),t._v(" "),i("h2",[t._v("博学之,审问之,慎思之,明辨之,笃行之")]),t._v(" "),i("p",[t._v("我叫李在荣")]),t._v(" "),i("p",[t._v("二年互联网经验,一年前端开发经验")]),t._v(" "),i("div",{staticClass:"state"},[i("el-row",{attrs:{gutter:30}},[t._l(t.states,function(e){return[i("el-col",{key:e.icon,attrs:{span:6,xs:12}},[i("div",{staticClass:"iconBox"},[i("i",{staticClass:"iconfont iconSet",class:e.icon})]),t._v(" "),i("p",{domProps:{textContent:t._s(e.val)}})])]})],2)],1)]):t._e()])],1)},staticRenderFns:[]};var u={data:function(){return{show:!1,skills:[{name:"前端",background:"rgba(29, 218, 61, 0.2)",child:[{name:"Vue",background:"rgba(29, 218, 61, 0.2)"},{name:"VueRouter",background:"rgba(29, 218, 61, 0.2)"},{name:"Vuex",background:"rgba(29, 218, 61, 0.2)"},{name:"axios",background:"rgba(29, 218, 61, 0.2)"}]},{name:"服务端",background:"rgba(211, 184, 30, 0.2)",child:[{name:"NodeJs",background:"rgba(211, 184, 30, 0.2)"},{name:"mongoose",background:"rgba(211, 184, 30, 0.2)"},{name:"express",background:"rgba(211, 184, 30, 0.2)"},{name:"ES6",background:"rgba(211, 184, 30, 0.2)"}]},{name:"工具",background:"rgba(232, 13, 24, 0.2)",child:[{name:"Git",background:"rgba(232, 13, 24, 0.2)"},{name:"WebPack",background:"rgba(232, 13, 24, 0.2)"},{name:"Ubuntu",background:"rgba(232, 13, 24, 0.2)"},{name:"VS Code",background:"rgba(232, 13, 24, 0.2)"}]}]}},methods:{timeout:function(){var t=this;setTimeout(function(){t.show=!0},1e3)}},mounted:function(){this.timeout()}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("h1",[t._v("技术栈/Skills")]),t._v(" "),n("transition",{attrs:{duration:{enter:2500,leave:1500},"leave-active-class":"animated fadeOutRight","enter-active-class":"animated fadeInLeft"}},[t.show?n("div",{staticClass:"cont"},[t._l(t.skills,function(e){return[n("el-row",{key:e.name,attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"left",style:{backgroundColor:""+e.background}},[n("h2",[t._v(t._s(e.name))])])]),t._v(" "),n("el-col",{attrs:{span:16}},[n("el-row",{attrs:{gutter:10}},[t._l(e.child,function(e){return[n("el-col",{key:e.name,attrs:{span:12}},[n("div",{staticClass:"right",style:{backgroundColor:e.background}},[n("h3",[t._v(t._s(e.name))])])])]})],2)],1)],1)]})],2):t._e()])],1)},staticRenderFns:[]};var d={data:function(){return{show:!1,profiles:[{name:"电商代理商城(learn)",skills:"vue vue-cli vue-router vuex axios qiniu echart element-ui mavon-editor",content:"这个代理商城项目有完整的前后端页面，基本实现了商城的所有功能，用户登录注册，状态管理，商品分类展示搜索，用户购买、发货，后端页面也完全实现了网站整体设置，用户统计，购买统计，商品管理、用户管理、订单管理等的功能！",github:"https://github.com/lyttonlee/learn"},{name:"电商代理商城服务端(express-server)",skills:"node express mongoose mongodb3.4 express-promise-router async/await语法",content:"这是代理商城项目的服务端，express框架,数据库为mongodb3.4,使用async/await语法，使用express-promise-router统一捕获error，七牛云作为图片存储空间，开发中用到RoBo 3T,postman等工具，功能也完全响应代理商城客户端!",github:"https://github.com/lyttonlee/express-server-for-learn"},{name:"MarkDown文章编辑器",skills:"electron vue vue-cli vue-router axios qiniu nedb element-ui mavon-editor",content:"本软件只要配置七牛云信息,文章中插入的图片将自动上传至用户的七牛云空间，软件使用nedb本地数据库，使用electron打包为各平台的应用!",github:"https://github.com/lyttonlee/md-editor"},{name:"火焰纹章if人物升级模拟",skills:"electron vue vue-cli element-ui",content:"这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!",github:"https://github.com/lyttonlee/if"}]}},methods:{timeout:function(){var t=this;setTimeout(function(){t.show=!0},1e3)}},mounted:function(){this.timeout()}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("h1",[t._v("作品集/Profile")]),t._v(" "),n("transition",{attrs:{duration:{enter:2500,leave:1500},"enter-active-class":"animated fadeInRight"}},[t.show?n("div",{staticClass:"cont"},[n("el-row",{attrs:{gutter:20}},[t._l(t.profiles,function(e){return[n("el-col",{key:e.name,attrs:{span:12,xs:24}},[n("div",{staticClass:"item"},[n("h2",{domProps:{textContent:t._s(e.name)}}),t._v(" "),n("p",{domProps:{textContent:t._s("技术栈: "+e.skills)}}),t._v(" "),n("p",{domProps:{textContent:t._s(e.content)}}),t._v(" "),n("p",{domProps:{textContent:t._s("github地址: "+e.github)}})])])]})],2)],1):t._e()])],1)},staticRenderFns:[]};var h={data:function(){return{show:!1,accounts:[{class:"icon-GitHub",link:"https://github.com/lyttonlee"},{class:"icon-sf",link:"https://segmentfault.com/u/siwuweihesi"},{class:"icon-zhihu",link:"https://www.zhihu.com/people/li-zai-rong-27/activities"},{class:"icon-xinlang",link:"https://weibo.com/1803573600/profile?topnav=1&wvr=6&is_all=1"}]}},methods:{timeout:function(){var t=this;setTimeout(function(){t.show=!0},1e3)}},mounted:function(){this.timeout()}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("h1",[t._v("联系我/Contact")]),t._v(" "),n("transition",{attrs:{duration:{enter:2500,leave:1500},"enter-active-class":"animated fadeInDown"}},[t.show?n("div",{staticClass:"cont"},[n("div",{staticClass:"assessment"},[n("h2",[t._v("自我评价")]),t._v(" "),n("p",[t._v("高效的自学能力,具备独立分析解决问题能力")]),t._v(" "),n("p",[t._v("强烈的自我驱动力,只喜欢优雅的代码")]),t._v(" "),n("p",[t._v("熟悉组件化开发，sf重度依耐性患者")])]),t._v(" "),n("div",{staticClass:"honor"},[n("h2",[t._v("兴趣爱好")]),t._v(" "),n("p",[t._v("爱读书、爱写字、爱喝茶")]),t._v(" "),n("p",[t._v("喜欢尝试新事物")])]),t._v(" "),n("div",{staticClass:"contact"},[n("h2",[t._v("联系我")]),t._v(" "),n("p",[n("i",{staticClass:"iconfont icon-shouji"}),t._v("  15181589155")]),t._v(" "),n("p",[n("i",{staticClass:"iconfont icon-youxiang"}),t._v("  lzr3278@163.com")])]),t._v(" "),n("div",{staticClass:"acount"},[n("el-row",[t._l(t.accounts,function(t){return[n("el-col",{key:t.class,attrs:{span:6}},[n("div",{staticClass:"iconBox"},[n("a",{attrs:{href:t.link}},[n("i",{staticClass:"iconfont iconSet",class:t.class})])])])]})],2)],1)]):t._e()])],1)},staticRenderFns:[]};var f={components:{Con1:n("C7Lr")(r,l,!1,function(t){n("jhMF")},"data-v-c49a9250",null).exports,Con2:n("C7Lr")(u,v,!1,function(t){n("jDOn")},"data-v-2ba4296b",null).exports,Con3:n("C7Lr")(d,m,!1,function(t){n("BZjW")},"data-v-858b5084",null).exports,Con4:n("C7Lr")(h,g,!1,function(t){n("/S5q")},"data-v-52c208a0",null).exports},data:function(){return{img:n("CVlB"),clientHeight:"900px",init:1,lastscroll:0,leaveanimate:"zoomOutUp",enteranimate:"zoomInDown"}},methods:{mouse:function(t){var e=t.timeStamp-this.lastscroll;console.log(e),e>1e3?(this.lastscroll=t.timeStamp,console.log("合法的滚动"),t.deltaY>0?(console.log("down"),4===this.init?this.init=1:this.init=this.init+1):(console.log("up"),1===this.init?this.init=4:this.init=this.init-1)):console.log("请爱护你的鼠标不要连续滚动！")},nextPage:function(){4===this.init?this.init=1:this.init=this.init+1}},mounted:function(){var t=this;this.clientHeight=document.documentElement.clientHeight+"px",window.onresize=function(){t.clientHeight=document.documentElement.clientHeight+"px",console.log(t.clientHeight)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resume",style:{backgroundImage:"url("+t.img+")",height:""+t.clientHeight},on:{mousewheel:t.mouse}},[n("transition",{attrs:{duration:{enter:2500,leave:1500},"leave-active-class":"animated "+t.leaveanimate,"enter-active-class":"animated "+t.enteranimate}},[1===t.init?n("div",{staticClass:"section",style:{height:""+t.clientHeight}},[n("div",{staticClass:"sec"},[n("Con1")],1)]):t._e()]),t._v(" "),n("transition",{attrs:{duration:{enter:2500,leave:1500},"leave-active-class":"animated "+t.leaveanimate,"enter-active-class":"animated "+t.enteranimate}},[2===t.init?n("div",{staticClass:"section",style:{height:""+t.clientHeight}},[n("div",{staticClass:"sec"},[n("Con2")],1)]):t._e()]),t._v(" "),n("transition",{attrs:{duration:{enter:1500,leave:1500},"leave-active-class":"animated "+t.leaveanimate,"enter-active-class":"animated "+t.enteranimate}},[3===t.init?n("div",{staticClass:"section",style:{height:""+t.clientHeight}},[n("div",{staticClass:"sec"},[n("Con3")],1)]):t._e()]),t._v(" "),n("transition",{attrs:{duration:{enter:1500,leave:1500},"leave-active-class":"animated "+t.leaveanimate,"enter-active-class":"animated "+t.enteranimate}},[4===t.init?n("div",{staticClass:"section",style:{height:""+t.clientHeight}},[n("div",{staticClass:"sec"},[n("Con4")],1)]):t._e()]),t._v(" "),n("div",{staticClass:"next"},[n("i",{staticClass:"iconfont icon-xiala setarrow",on:{click:t.nextPage}})])],1)},staticRenderFns:[]};var _={name:"App",components:{Resume:n("C7Lr")(f,p,!1,function(t){n("XyX7")},"data-v-11eece1b",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Resume")],1)},staticRenderFns:[]};var C=n("C7Lr")(_,b,!1,function(t){n("aCBp")},null,null).exports;i.default.config.productionTip=!1,i.default.use(s.a),i.default.use(c.a),new i.default({el:"#app",components:{App:C},template:"<App/>"})},XyX7:function(t,e){},aCBp:function(t,e){},jDOn:function(t,e){},jhMF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.501b5e9ed58e883c48e0.js.map
