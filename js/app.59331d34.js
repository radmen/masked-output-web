(function(e){function t(t){for(var r,s,i=t[0],u=t[1],p=t[2],c=0,f=[];c<i.length;c++)s=i[c],o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"566a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("MaskedOutput"),n("Footer")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("form",[n("fieldset",[n("label",{attrs:{for:"password"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.input.password,expression:"input.password",modifiers:{trim:!0}}],attrs:{type:"password",id:"password",autocomplete:"off",autofocus:""},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),n("label",{attrs:{for:"fields"}},[e._v("Fields")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.fields,expression:"input.fields"}],attrs:{type:"text",id:"fields",placeholder:"eg. 1 4 6 8",autocomplete:"off"},domProps:{value:e.input.fields},on:{input:function(t){t.target.composing||e.$set(e.input,"fields",t.target.value)}}})])]),e.masks.length?[n("hr"),n("h3",{staticClass:"masked-password"},e._l(e.masks,function(t){return n("span",{class:{fade:t.masked}},[e._v(e._s(t.masked?"*":t.char))])}))]:e._e()],2)},i=[],u={name:"MaskedOutput",data(){return{input:{password:"",fields:""}}},computed:{fields(){return this.input.fields.split(/[ ,;]/).map(e=>e.trim()).filter(e=>/^\d+$/.test(e))},masks(){const e=this.fields,t=new RegExp("");return this.input.password.split(t).map((t,n)=>({char:t,masked:!e.includes(`${n+1}`)}))}}},p=u,l=(n("89be"),n("2877")),c=Object(l["a"])(p,s,i,!1,null,"a0d5db7c",null);c.options.__file="MaskedOutput.vue";var f=c.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("hr"),n("a",{attrs:{href:"https://github.com/radmen/masked-output-web/"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])},m=[],v=(n("760c"),{}),b=Object(l["a"])(v,d,m,!1,null,null,null);b.options.__file="Footer.vue";var h=b.exports,w=(n("3a72"),{name:"app",components:{MaskedOutput:f,Footer:h}}),_=w,g=(n("f737"),Object(l["a"])(_,o,a,!1,null,"42ec7aeb",null));g.options.__file="App.vue";var y=g.exports,O=n("ecee"),k=n("f2d1"),x=n("ad3d");O["c"].add(k["a"]),r["a"].component("font-awesome-icon",x["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"760c":function(e,t,n){"use strict";var r=n("b675"),o=n.n(r);o.a},"7c61":function(e,t,n){},"89be":function(e,t,n){"use strict";var r=n("566a"),o=n.n(r);o.a},b675:function(e,t,n){},f737:function(e,t,n){"use strict";var r=n("7c61"),o=n.n(r);o.a}});
//# sourceMappingURL=app.59331d34.js.map