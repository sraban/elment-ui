(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cefb0"],{6286:function(e,s,n){"use strict";n.r(s);var t=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("section",[n("hr"),n("h2",[e._v("Basic usage")]),n("el-button",{attrs:{plain:!0},on:{click:e.open}},[e._v("Open message prompt")]),n("el-button",{attrs:{plain:!0},on:{click:e.openVn}},[e._v("VNode")]),n("hr"),n("h2",[e._v("Different states")]),n("el-button",{attrs:{plain:!0},on:{click:e.open2}},[e._v("success")]),n("el-button",{attrs:{plain:!0},on:{click:e.open3}},[e._v("Warning")]),n("el-button",{attrs:{plain:!0},on:{click:e.open}},[e._v("message")]),n("el-button",{attrs:{plain:!0},on:{click:e.open4}},[e._v("error")]),n("hr"),n("h2",[e._v("Closeable")]),n("el-button",{attrs:{plain:!0},on:{click:e.open5}},[e._v("message")]),n("el-button",{attrs:{plain:!0},on:{click:e.open6}},[e._v("Success")]),n("el-button",{attrs:{plain:!0},on:{click:e.open7}},[e._v("Warning")]),n("el-button",{attrs:{plain:!0},on:{click:e.open8}},[e._v("error")]),n("hr"),n("h2",[e._v("Center text")]),n("el-button",{attrs:{plain:!0},on:{click:e.openCenter}},[e._v("Center text")]),n("hr"),n("h2",[e._v("Use HTML Fragments")]),n("el-button",{attrs:{plain:!0},on:{click:e.openHTML}},[e._v("Use HTML snippet")])],1)},o=[],a={name:"emessage",data:function(){return{}},methods:{open:function(){this.$message("This is a message prompt")},open2:function(){this.$message({message:"Congratulations, this is a success message",type:"success"})},open3:function(){this.$message({message:"Warning, this is a warning message",type:"warning"})},open4:function(){this.$message.error("wrong, this is an error message")},open5:function(){this.$message({showClose:!0,message:"This is a message prompt"})},open6:function(){this.$message({showClose:!0,message:"Congratulations, this is a success message",type:"success"})},open7:function(){this.$message({showClose:!0,message:"Warning, this is a warning message",type:"warning"})},open8:function(){this.$message({showClose:!0,message:"Wrong, this is an error message",type:"error"})},openCenter:function(){this.$message({message:"Centered text",center:!0})},openHTML:function(){this.$message({dangerouslyUseHTMLString:!0,message:"<strong>This is an <i>HTML</i> fragment</strong>"})},openVn:function(){var e=this.$createElement;this.$message({message:e("p",null,[e("span",null,"The content can be "),e("i",{style:"color: teal"},"VNode")])})}}},i=a,r=n("2877"),c=Object(r["a"])(i,t,o,!1,null,"e629ceb8",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0cefb0.097f134e.js.map