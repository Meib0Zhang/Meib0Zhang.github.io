(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cc83733"],{5443:function(t,a,n){},"586d":function(t,a,n){"use strict";var o=n("5443"),e=n.n(o);e.a},a5e4:function(t,a,n){"use strict";n.r(a);var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",t._l(t.list.list,(function(a,o){return n("div",{key:o,staticClass:"zmb_card",on:{click:function(n){return n.stopPropagation(),t.onteacher(a.teacher_id)}}},[n("img",{attrs:{src:a.avatar,alt:""}}),n("div",{staticClass:"zmb_txt"},[n("p",[t._v(t._s(a.teacher_name))]),n("p",[t._v("男 30年教龄")])]),n("div",{staticClass:"zmb_guanzhu"},[n("button",{staticClass:"zmb_guanzhu_btn",on:{click:function(n){return n.stopPropagation(),t.onfollow(a.teacher_id)}}},[t._v("不再关注")])])])})),0)},e=[],i={data:function(){return{list:[],flag:0}},mounted:function(){this.getdata()},methods:{getdata:function(){var t=this;this.$APP.fllowteacher().then((function(a){console.log(a.data.data),t.list=a.data.data}))},onteacher:function(t){this.$router.push({path:"/teacherXQ",query:{id:t}})},onfollow:function(t){var a=this;this.$APP.fllow(t).then((function(t){console.log(t.data.data.flag),a.flag=t.data.data.flag,a.getdata()}))}}},c=i,s=(n("586d"),n("2877")),l=Object(s["a"])(c,o,e,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-6cc83733.254de9ea.js.map