(function(e){function t(t){for(var n,i,a=t[0],u=t[1],p=t[2],d=0,f=[];d<a.length;d++)i=a[d],o[i]&&f.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,p||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"356d":function(e,t,r){},3976:function(e,t,r){"use strict";var n=r("356d"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("MaskedOutput")],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("form",[r("fieldset",[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.input.password,expression:"input.password",modifiers:{trim:!0}}],attrs:{type:"password",id:"password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),r("label",{attrs:{for:"fields"}},[e._v("Fields")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.fields,expression:"input.fields"}],attrs:{type:"text",id:"fields"},domProps:{value:e.input.fields},on:{input:function(t){t.target.composing||e.$set(e.input,"fields",t.target.value)}}})]),r("hr")]),e.maskedPassword.length?[r("h2",[e._v("Your password:")]),r("h3",[e._v(e._s(e.maskedPassword))])]:e._e()],2)},a=[],u={name:"MaskedOutput",data(){return{input:{password:"",fields:""}}},computed:{fields(){return this.input.fields.split(/[ ,;]/).map(e=>e.trim()).filter(e=>/^\d+$/.test(e))},maskedPassword(){return this.fields.map(e=>this.input.password.substr(e-1,1)).join("")}}},p=u,l=(r("d441"),r("2877")),d=Object(l["a"])(p,i,a,!1,null,"eccb425a",null);d.options.__file="MaskedOutput.vue";var f=d.exports,c=(r("3a72"),{name:"app",components:{MaskedOutput:f}}),v=c,m=(r("3976"),Object(l["a"])(v,o,s,!1,null,"5ce6539a",null));m.options.__file="App.vue";var w=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(w)}}).$mount("#app")},d441:function(e,t,r){"use strict";var n=r("f966"),o=r.n(n);o.a},f966:function(e,t,r){}});
//# sourceMappingURL=app.59d624d4.js.map