(function(e){function t(t){for(var r,l,s=t[0],i=t[1],u=t[2],c=0,v=[];c<s.length;c++)l=s[c],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&v.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,l=1;l<o.length;l++){var i=o[l];0!==n[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={app:0},a=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7adbe610"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=l(e);var u=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(c);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,o[1](u)}n[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/player/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("d9a3"),o("c9db"),o("de3e"),o("618d");var r=o("0261"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("el-card",{staticStyle:{"margin-bottom":"20px"}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[e._v("播放设置")])]),o("el-input",{attrs:{placeholder:"请输入播放地址"},model:{value:e.options.video.url,callback:function(t){e.$set(e.options.video,"url",t)},expression:"options.video.url"}},[o("el-select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.options.video.type,callback:function(t){e.$set(e.options.video,"type",t)},expression:"options.video.type"}},[o("el-option",{attrs:{value:"auto"}}),o("el-option",{attrs:{value:"flv"}}),o("el-option",{attrs:{value:"hls"}}),o("el-option",{attrs:{value:"mp4"}})],1),o("el-button",{attrs:{slot:"append",type:"primary"},on:{click:e.play},slot:"append"},[e._v("播放")])],1),o("div",{staticClass:"controls",staticStyle:{"margin-top":"10px"}},[o("el-checkbox",{model:{value:e.options.live,callback:function(t){e.$set(e.options,"live",t)},expression:"options.live"}},[e._v("直播")]),o("el-checkbox",{model:{value:e.options.autoplay,callback:function(t){e.$set(e.options,"autoplay",t)},expression:"options.autoplay"}},[e._v("自动播放")])],1)],1),e.isPlay?o("el-card",[o("d-player",{ref:"player",attrs:{options:e.options},on:{play:e.play}})],1):e._e()],1)},a=[],l=o("5cf0"),s=o.n(l),i=(o("6fb4"),{components:{"d-player":s.a},data:function(){return{options:{video:{url:"http://podcast.ezijing.com/live/liveteststream.flv",type:"auto"},live:!0,autoplay:!0},isPlay:!1}},mounted:function(){this.player=this.$refs.player.dp},methods:{play:function(){this.isPlay=!0}}}),u=i,c=(o("5c0b"),o("623f")),p=Object(c["a"])(u,n,a,!1,null,null,null),v=p.exports,f=o("e1bc");Object(f["a"])("".concat("/player/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("3a20");var d=o("9bfb"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},g=[],b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._m(0),o("h3",[e._v("Installed CLI Plugins")]),e._m(1),o("h3",[e._v("Essential Links")]),e._m(2),o("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),e._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],_={name:"HelloWorld",props:{msg:String}},y=_,k=(o("7827"),Object(c["a"])(y,b,m,!1,null,"1a1b23fe",null)),j=k.exports,w={name:"Home",components:{HelloWorld:j}},x=w,O=Object(c["a"])(x,h,g,!1,null,null,null),E=O.exports;r["default"].use(d["a"]);var P=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],$=new d["a"]({routes:P}),C=$,S=o("2ca7"),A=o.n(S);o("46c6");r["default"].use(A.a),r["default"].config.productionTip=!1,new r["default"]({router:C,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var r=o("b673"),n=o.n(r);n.a},6988:function(e,t,o){},7827:function(e,t,o){"use strict";var r=o("6988"),n=o.n(r);n.a},b673:function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1ea8505e.js.map