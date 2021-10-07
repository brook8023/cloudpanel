(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24d893bf"],{"0338":function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticStyle:{height:"100%"}},[o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("登 录")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username",error:e.errorLogForm.username}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"username",attrs:{placeholder:"登录账号",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),e._v(" "),o("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(r){e.capsTooltip=r},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password",error:e.errorLogForm.password}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"登录密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(r){e.capsTooltip=!1}},nativeOn:{keyup:[function(r){return e.checkCapslock(r)},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleLogin(r)}]},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(r){return r.preventDefault(),e.handleLogin(r)}}},[e._v("登 录")]),e._v(" "),o("div",{staticStyle:{"font-size":"13px"}},[o("span",{staticStyle:{color:"#ffffff"}},[e._v("还没有账号? "),o("router-link",{staticStyle:{color:"#4A9FF9"},attrs:{to:"/register"}},[e._v("点我注册")])],1),e._v(" "),o("span",{staticStyle:{color:"#ffffff"}},[e._v("忘记密码? "),o("a",{staticStyle:{color:"#4A9FF9"},on:{click:e.resetPassword}},[e._v("点击重置")])])])],1)],1),e._v(" "),o("div",[o("el-dialog",{attrs:{"close-on-click-modal":!1,title:"注册账号",visible:e.showDialog},on:{"update:visible":function(r){e.showDialog=r},close:e.closeModal}},[o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("div",{staticClass:"social-signup-container"},[o("el-form",{ref:"regForm",attrs:{model:e.reg_form,rules:e.rules,"label-width":"80px","label-position":"top"}},[o("el-form-item",{attrs:{label:"登录账号",prop:"username",error:e.errorRegForm.username}},[o("el-input",{attrs:{placeholder:"登录账号"},model:{value:e.reg_form.username,callback:function(r){e.$set(e.reg_form,"username",r)},expression:"reg_form.username"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"注册邮箱",prop:"email",error:e.errorRegForm.email}},[o("el-input",{attrs:{placeholder:"注册邮箱"},model:{value:e.reg_form.email,callback:function(r){e.$set(e.reg_form,"email",r)},expression:"reg_form.email"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"登录密码",prop:"password",error:e.errorRegForm.password}},[o("el-input",{attrs:{type:"password",placeholder:"登录密码"},model:{value:e.reg_form.password,callback:function(r){e.$set(e.reg_form,"password",r)},expression:"reg_form.password"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"确认密码",prop:"password2",error:e.errorRegForm.password2}},[o("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.reg_form.password2,callback:function(r){e.$set(e.reg_form,"password2",r)},expression:"reg_form.password2"}})],1),e._v(" "),o("el-form-item",[o("el-button",{on:{click:function(r){e.showDialog=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即注册")])],1)],1)],1)])],1)])},s=[],a=(o("ac6a"),o("456d"),o("c24f")),i=o("4328"),n=o.n(i),l={name:"Login",data:function(){return{reg_form:{username:"",email:"",password:"",password2:""},errorLogForm:{username:"",password:""},errorRegForm:{username:"",email:"",password2:"",password:""},rules:{username:[{required:!0,message:"登录账号必须填写",trigger:"blur"}],password:[{required:!0,message:"登录密码必须填写",trigger:"blur"}],email:[{required:!0,message:"邮件地址必须填写",trigger:"blur"}],password2:[{required:!0,message:"确认密码必须填写",trigger:"blur"}]},loginForm:{},formInline:{user:"",region:""},loginRules:{username:[{required:!0,trigger:"blur",message:"登录账号必须填写"}],password:[{required:!0,trigger:"blur",message:"登录密码必须填写"}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var r=e.query;r&&(this.redirect=r.redirect,this.otherQuery=this.getOtherQuery(r))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.shiftKey,o=e.key;o&&1===o.length&&(this.capsTooltip=!!(r&&o>="a"&&o<="z"||!r&&o>="A"&&o<="Z")),"CapsLock"===o&&!0===this.capsTooltip&&(this.capsTooltip=!1)},resetPassword:function(){var e=this;this.$prompt("请输入邮箱或者账号","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(r){var o=r.value;Object(a["sendResetPassword"])(n.a.stringify({wd:o})).then(function(r){e.$notify({title:r.title,message:r.message,type:"success",duration:2e3})}).catch(function(r){e.$notify({title:r.title,message:r.message,type:"error",duration:2e3})})})},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;this.errorLogForm={username:"",password:""},this.$refs.loginForm.validate(function(r){if(!r)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1}).catch(function(r){if(e.loading=!1,r.error_data&&r.error_data)for(var o in r.error_data){var t=r.error_data[o][0];e.errorLogForm[o]=t}})})},handleReg:function(){var e=this;this.showDialog=!0,this.$nextTick(function(){e.$refs["regForm"].clearValidate()})},onSubmit:function(){var e=this;this.errorRegForm={username:"",email:"",password2:"",password:""},this.$refs.regForm.validate(function(r){Object(a["register"])(n.a.stringify(e.reg_form)).then(function(r){e.$notify({title:r.title,message:r.message,type:"success",duration:2e3}),e.showDialog=!1}).catch(function(r){if(e.dialogLoading=!1,r.error_data)for(var o in r.error_data){var t=r.error_data[o][0];e.errorRegForm[o]=t}})})},closeModal:function(){this.errorForm={},this.reg_form={}},getOtherQuery:function(e){return Object.keys(e).reduce(function(r,o){return"redirect"!==o&&(r[o]=e[o]),r},{})}}},c=l,u=(o("da58"),o("61ec"),o("2877")),p=Object(u["a"])(c,t,s,!1,null,"09570bfc",null);r["default"]=p.exports},"201d":function(e,r,o){},"61ec":function(e,r,o){"use strict";var t=o("8001"),s=o.n(t);s.a},8001:function(e,r,o){},da58:function(e,r,o){"use strict";var t=o("201d"),s=o.n(t);s.a}}]);