(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25f42c25"],{"42f9":function(e,t,n){e.exports=n.p+"img/login.a4c656a9.png"},"772b":function(e,t,n){"use strict";var s=n("8ee8"),o=n.n(s);o.a},"8ee8":function(e,t,n){},ede4:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wyl_login"},[e._m(0),n("div",[n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("van-field",{attrs:{type:"password",name:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("div",{staticClass:"wyl_login_register"},[n("span",{on:{click:e.retrieve}},[e._v("找回密码")]),n("div",[n("span",{on:{click:e.onRegister}},[e._v("注册/验证码登录")])])]),n("div",{staticClass:"wyl_login_button"},[n("button",{on:{click:e.onClickLogin}},[e._v("登录")])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wyl_login_img"},[s("img",{attrs:{src:n("42f9"),alt:""}})])}],i={data:function(){return{username:"",password:""}},methods:{onSubmit:function(e){console.log("submit",e)},retrieve:function(){this.$router.push("/retrieve")},onRegister:function(){this.$router.push("/register")},onClickLogin:function(){var e=this;this.$APP.login({mobile:this.username,password:this.password,type:1}).then((function(t){console.log(t),console.log(t.data.data.remember_token);var n=t.data.data.remember_token;window.localStorage.setItem("token",n),e.$router.push("/user")}))}}},r=i,a=(n("772b"),n("2877")),l=Object(a["a"])(r,s,o,!1,null,"8c765a86",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-25f42c25.f6d3cb20.js.map