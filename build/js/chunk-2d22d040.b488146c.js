(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d040"],{f660:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("hr"),o("h2",[t._v("Basic usage")]),o("el-button",{attrs:{plain:""},on:{click:t.open}},[t._v(" Can be closed automatically ")]),o("el-button",{attrs:{plain:""},on:{click:t.open2}},[t._v(" does not close automatically ")]),o("hr"),o("h2",[t._v("Tendency")]),o("el-button",{attrs:{plain:""},on:{click:t.open3}},[t._v(" success ")]),o("el-button",{attrs:{plain:""},on:{click:t.open4}},[t._v(" warn ")]),o("el-button",{attrs:{plain:""},on:{click:t.open5}},[t._v(" information ")]),o("el-button",{attrs:{plain:""},on:{click:t.open6}},[t._v(" Mistake ")]),o("hr"),o("h2",[t._v("Custom popup position")]),o("el-button",{attrs:{plain:""},on:{click:t.open7}},[t._v(" top right ")]),o("el-button",{attrs:{plain:""},on:{click:t.open8}},[t._v(" bottom right ")]),o("el-button",{attrs:{plain:""},on:{click:t.open9}},[t._v(" bottom left ")]),o("el-button",{attrs:{plain:""},on:{click:t.open10}},[t._v(" top left ")]),o("hr"),o("h2",[t._v("with offset")]),o("el-button",{attrs:{plain:""},on:{click:t.open11}},[t._v(" offset message ")]),o("hr"),o("h2",[t._v("Use HTML Fragments")]),o("el-button",{attrs:{plain:""},on:{click:t.open12}},[t._v(" Use HTML snippets ")]),o("hr"),o("h2",[t._v("Hide the close button")]),o("el-button",{attrs:{plain:""},on:{click:t.open13}},[t._v(" hide the close button ")])],1)},s=[],i={name:"enotification",data:function(){return{}},methods:{open:function(){var t=this.$createElement;this.$notify({title:"Title name",message:t("i",{style:"color: teal"},"this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy this is the prompt copy")})},open2:function(){this.$notify({title:"Tips",message:"This is a message that will not be closed automatically",duration:0})},open3:function(){this.$notify({title:"Success",message:"This is a successful prompt message",type:"success"})},open4:function(){this.$notify({title:"Warning",message:"This is a warning message",type:"warning"})},open5:function(){this.$notify.info({title:"Message",message:"This is a reminder message for a message"})},open6:function(){this.$notify.error({title:"error",message:"This is an error message"})},open7:function(){this.$notify({title:"custom location",message:"The message popped up in the upper right corner"})},open8:function(){this.$notify({title:"custom location",message:"The message popped up in the lower right corner",position:"bottom-right"})},open9:function(){this.$notify({title:"custom location",message:"The message popped up in the lower left corner",position:"bottom-left"})},open10:function(){this.$notify({title:"custom location",message:"The message popped up in the upper left corner",position:"top-left"})},open11:function(){this.$notify({title:"offset",message:"This is a message with an offset",offset:100})},open12:function(){this.$notify({title:"HTML Fragment",dangerouslyUseHTMLString:!0,message:"<strong>This is an <i>HTML</i> fragment</strong>"})},open13:function(){this.$notify.success({title:"Info",message:"This is a message without a close button",showClose:!1})}}},a=i,p=o("2877"),c=Object(p["a"])(a,n,s,!1,null,"70701170",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22d040.b488146c.js.map