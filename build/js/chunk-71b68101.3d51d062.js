(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71b68101"],{"0b42":function(e,t,o){var r=o("da84"),n=o("e8b5"),i=o("68ee"),s=o("861d"),l=o("b622"),a=l("species"),c=r.Array;e.exports=function(e){var t;return n(e)&&(t=e.constructor,i(t)&&(t===c||n(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?c:t}},"159b":function(e,t,o){var r=o("da84"),n=o("fdbc"),i=o("785a"),s=o("17c2"),l=o("9112"),a=function(e){if(e&&e.forEach!==s)try{l(e,"forEach",s)}catch(t){e.forEach=s}};for(var c in n)n[c]&&a(r[c]&&r[c].prototype);a(i)},"17c2":function(e,t,o){"use strict";var r=o("b727").forEach,n=o("a640"),i=n("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,o){var r=o("d039"),n=o("b622"),i=o("2d00"),s=n("species");e.exports=function(e){return i>=51||!r((function(){var t=[],o=t.constructor={};return o[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,o){var r=o("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8418:function(e,t,o){"use strict";var r=o("a04b"),n=o("9bf2"),i=o("5c6c");e.exports=function(e,t,o){var s=r(t);s in e?n.f(e,s,i(0,o)):e[s]=o}},a434:function(e,t,o){"use strict";var r=o("23e7"),n=o("da84"),i=o("23cb"),s=o("5926"),l=o("07fa"),a=o("7b0b"),c=o("65f0"),f=o("8418"),u=o("1dde"),d=u("splice"),p=n.TypeError,m=Math.max,h=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var o,r,n,u,d,y,g=a(this),k=l(g),_=i(e,k),x=arguments.length;if(0===x?o=r=0:1===x?(o=0,r=k-_):(o=x-2,r=h(m(s(t),0),k-_)),k+o-r>v)throw p(b);for(n=c(g,r),u=0;u<r;u++)d=_+u,d in g&&f(n,u,g[d]);if(n.length=r,o<r){for(u=_;u<k-r;u++)d=u+r,y=u+o,d in g?g[y]=g[d]:delete g[y];for(u=k;u>k-r+o;u--)delete g[u-1]}else if(o>r)for(u=k-r;u>_;u--)d=u+r-1,y=u+o-1,d in g?g[y]=g[d]:delete g[y];for(u=0;u<o;u++)g[u+_]=arguments[u+2];return g.length=k-r+o,n}})},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},b64b:function(e,t,o){var r=o("23e7"),n=o("7b0b"),i=o("df75"),s=o("d039"),l=s((function(){i(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return i(n(e))}})},b727:function(e,t,o){var r=o("0366"),n=o("e330"),i=o("44ad"),s=o("7b0b"),l=o("07fa"),a=o("65f0"),c=n([].push),f=function(e){var t=1==e,o=2==e,n=3==e,f=4==e,u=6==e,d=7==e,p=5==e||u;return function(m,h,v,b){for(var y,g,k=s(m),_=i(k),x=r(h,v),w=l(_),F=0,E=b||a,$=t?E(m,w):o||d?E(m,0):void 0;w>F;F++)if((p||F in _)&&(y=_[F],g=x(y,F,k),e))if(t)$[F]=g;else if(g)switch(e){case 3:return!0;case 5:return y;case 6:return F;case 2:c($,y)}else switch(e){case 4:return!1;case 7:c($,y)}return u?-1:n||f?f:$}};e.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},ba2d:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"multiform"},[o("h1",[e._v("Multiform Component - ")]),o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",rules:e.formRules,size:"min",set:e.defaultFields=Object.keys(e.fields),"label-position":"top"}},[e._l(e.form.fields,(function(t,r){return o("div",{key:r},[e._l(Object.keys(t),(function(n,i){return o("div",{key:i},e._l(e.defaultFields,(function(i,s){return o("div",{key:s+"_"+r,attrs:{set:e.dfield=e.fields[i]}},[n==i?o("span",{staticStyle:{border:"1px solid red",padding:"5px",margin:"5px",display:"block"}},[o("el-form-item",{attrs:{prop:"fields."+r+"."+n}},[o("template",{staticStyle:{width:"100%"},slot:"label"},[o("el-row",{attrs:{gutter:20,type:"flex"}},[o("el-col",{attrs:{span:14,offset:0}},[o("i",{staticClass:"el-icon-circle-close",on:{click:function(t){return e.removeFields(n,r)}}}),e._v(" "+e._s(e.dfield.label)+" ")]),o("el-col",{attrs:{span:10,offset:0}},[o("el-select",{staticStyle:{float:"right"},model:{value:e.form.modes[r][n],callback:function(t){e.$set(e.form.modes[r],n,t)},expression:"form.modes[row][field]"}},e._l(10,(function(e){return o("el-option",{key:e,attrs:{label:"Equal_"+e,value:e}})})),1)],1)],1)],1),o("el-select",{staticStyle:{width:"100%"},attrs:{multiple:""},model:{value:t[n],callback:function(o){e.$set(t,n,o)},expression:"item[field]"}}),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:24,offset:0}},[e._v(" From: "),o("el-date-picker",{attrs:{type:"date","popper-class":"sraban-date-picker"}}),o("el-popover",{attrs:{placement:"top"}},[o("div",{staticStyle:{width:"70%"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:12,offset:0}},[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("@Today")])],1),o("el-col",{attrs:{span:12,offset:0}},[o("el-input-number",{attrs:{type:"number",size:"mini",label:"",min:1,max:10,step:1,controls:!0,"controls-position":"both"},on:{change:function(e){return e},input:function(){}}})],1)],1)],1),o("span",{attrs:{slot:"reference"},slot:"reference"},[o("i",{staticClass:"el-icon-edit"})])])],1)],1),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:24,offset:0}},[e._v(" To: "),o("el-date-picker",{attrs:{type:"date","popper-class":"sraban-date-picker"}}),o("el-popover",{attrs:{placement:"top"}},[o("div",{staticStyle:{width:"70%"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:12,offset:0}},[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("@Today")])],1),o("el-col",{attrs:{span:12,offset:0}},[o("el-input-number",{attrs:{type:"number",size:"mini",label:"",min:1,max:10,step:1,controls:!0,"controls-position":"both"},on:{change:function(e){return e},input:function(){}}})],1)],1)],1),o("span",{attrs:{slot:"reference"},slot:"reference"},[o("i",{staticClass:"el-icon-edit"})])])],1)],1),o("el-checkbox-group",{on:{change:function(e){return e}},model:{value:t[n],callback:function(o){e.$set(t,n,o)},expression:"item[field]"}},e._l(4,(function(t){return o("el-checkbox",{key:t.key,attrs:{label:t}},[e._v(" Sraban - "+e._s(t)+" ")])})),1),o("el-input",{attrs:{placeholder:"",size:"normal",clearable:""},on:{change:function(e){return e}},model:{value:t[n],callback:function(o){e.$set(t,n,o)},expression:"item[field]"}})],2)],1):e._e()])})),0)})),o("select",{on:{change:function(t){return e.addFields(t.target.value,r,!0)}}},[o("option",{attrs:{value:""}},[e._v("Add")]),e._l(e.defaultFields,(function(t,n){return o("option",{key:n+"_and_"+r,attrs:{disabled:e.form.modes[r]&&void 0!==e.form.modes[r][t]},domProps:{value:t}},[e._v(" "+e._s(e.fields[t].label)+" ")])}))],2)],2)})),o("select",{staticStyle:{float:"right",position:"relative",top:"-20px"},on:{change:function(t){return e.newGroupFields(t.target.value,!0)}}},[o("option",{attrs:{value:""}},[e._v("OR")]),e._l(e.defaultFields,(function(t,r){return o("option",{key:r+"_or_",domProps:{value:t}},[e._v(" "+e._s(e.fields[t].label)+" ")])}))],2)],2),e._v(" "+e._s(e.form)+" ")],1)},n=[],i=(o("d3b7"),o("159b"),o("b64b"),o("a434"),{name:"multiform",props:[],mounted:function(){this.convertToForm()},data:function(){return{form:this.initDefaultForm(),formRules:this.validationRuleFields(),fields:this.defaultFields()}},methods:{defaultFields:function(){return{status:{label:"Status",type:"checkbox",optional:!0},rdate:{label:"Date",type:"checkbox",optional:!0},country:{label:"Country",type:"checkbox",optional:!0}}},initDefaultForm:function(){return{fields:[{}],modes:[{}]}},validationRuleFields:function(){return{status:[],rdate:[]}},convertToForm:function(){var e=this,t={fields:[{status:["A","B","C"],rdate:["2018-10-10","2018-10-09"]},{country:["IN","US","CN"],rdate:["2018-10-10"]}],modes:[{status:"=",rdate:"<>"},{country:"~",rdate:"<="}]};t.fields.forEach((function(o,r){console.log(o,r),Object.keys(o).forEach((function(n){e.$nextTick((function(){e.addFields(n,r,!1,o[n],t.modes[r][n])}))}))}))},addFields:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";o&&(event.target.value=""),void 0===this.form.fields[t]&&(this.form.fields.push({}),this.form.modes.push({})),this.$set(this.form.fields[t],e,r),this.$set(this.form.modes[t],e,n)},removeFields:function(e,t){var o=this;if(1==this.form.fields.length&&1==Object.keys(this.form.fields[0]).length)return!1;this.$delete(this.form.fields[t],e),this.$delete(this.form.modes[t],e),this.form.fields.forEach((function(e,t){0==Object.keys(e).length&&(o.form.fields.splice(t,1),o.form.modes.splice(t,1))}))},newGroupFields:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&(event.target.value="");var o=this.form.fields.length;this.addFields(e,o)},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("ok"),console.log(t.form)}))}},computed:{}}),s=i,l=(o("fe51"),o("2877")),a=Object(l["a"])(s,r,n,!1,null,"f9a386f8",null);t["default"]=a.exports},e5e1:function(e,t,o){},e8b5:function(e,t,o){var r=o("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fe51:function(e,t,o){"use strict";o("e5e1")}}]);
//# sourceMappingURL=chunk-71b68101.3d51d062.js.map