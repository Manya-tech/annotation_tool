(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{962:function(e,t,n){var content=n(979);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(143).default)("450b7fd5",content,!0,{sourceMap:!1})},978:function(e,t,n){"use strict";n(962)},979:function(e,t,n){var o=n(142)((function(i){return i[1]}));o.push([e.i,".column1-color1{background-color:#f9f9f9}.column1-color2{background-color:#e9ecef}.column2-color1{background-color:#abdde5}.column2-color2{background-color:#aed2d7}",""]),o.locals={},e.exports=o},993:function(e,t,n){"use strict";n.r(t);n(51),n(14),n(11),n(18),n(19),n(16),n(12);var o=n(58),r=n(3),c=(n(43),n(9),n(494),n(90),n(495),n(496),n(497),n(498),n(499),n(500),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(508),n(509),n(510),n(97),n(79));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var f={data:function(){return{uiText:{instructions:"Annotate each unique value",missingValueButton:"Mark as missing",saveButton:"Save Annotation"},toolFields:["column","value","missing_value"]}},props:{name:{type:String,required:!0},uniqueColumnValues:{type:Array,required:!0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(c.c)(["getSelectedTools"])),methods:{emitMissingValue:function(e,t){this.$emit("declareMissing",{column:e,value:t})},styleTableRow:function(e){var t=[],n=this.uniqueColumnValues.map((function(e){return e.column}));return Object(o.a)(new Set(n)).indexOf(e.column)%2==0?this.uniqueColumnValues.indexOf(e)%2==0?t.push("column1-color1"):t.push("column1-color2"):this.uniqueColumnValues.indexOf(e)%2==0?t.push("column2-color1"):t.push("column2-color2"),t}}},m=f,d=(n(978),n(114)),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("b-table",{attrs:{"data-cy":"tool-annotation-for-"+e.name,fields:e.toolFields,items:e.uniqueColumnValues,"tbody-tr-class":e.styleTableRow},scopedSlots:e._u([{key:"cell(missing_value)",fn:function(n){return[t("b-button",{attrs:{"data-cy":"missingValueButton_"+n.index,variant:"danger"},on:{click:function(t){return e.emitMissingValue(n.item.column,n.item.value)}}},[e._v("\n                "+e._s(e.uiText.missingValueButton)+"\n            ")])]}}])})],1)}),[],!1,null,null,null);t.default=component.exports}}]);