(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1050:function(t,e,n){"use strict";n.r(e);n(14),n(118),n(119),n(11),n(120),n(47),n(51),n(18),n(19),n(16),n(9),n(32),n(62),n(90),n(12),n(97);var r=n(3),o=n(79);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={name:"AnnotCategorical",props:{activeCategory:{type:String,required:!0}},data:function(){return{exampleFields:["columnName","rawValue","description","select_an_appropriate_mapping","missingValue"],uiText:{instructions:"Annotate each unique value",missingValueButton:"Mark as missing",saveButton:"Save Annotation",isControlButton:"Mark as healthy control"}}},computed:d(d({},Object(o.c)(["getCategoricalOptions","getSelectedCategoricalOption","getUniqueValues","getValueDescription"])),{},{displayTable:function(){var t=this.getUniqueValues(this.activeCategory),e=[];for(var n in t){var r,o=c(t[n]);try{for(o.s();!(r=o.n()).done;){var l=r.value;e.push({columnName:n,description:this.getValueDescription(n,l),rawValue:l})}}catch(t){o.e(t)}finally{o.f()}}return e}}),mounted:function(){"Diagnosis"==this.activeCategory&&this.exampleFields.push("isControl")},methods:d(d({},Object(o.d)(["changeMissingStatus","selectCategoricalOption","updateAnnotationCount"])),{},{selectOptionAndUpdate:function(t,e,n){this.selectCategoricalOption({optionValue:t,columnName:e,rawValue:n}),this.updateAnnotationCount()}})},y=n(114),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"annotation-card",attrs:{"no-body":""}},[e("b-card-header",[t._v(t._s(t.uiText.instructions))]),t._v(" "),e("b-card-body",[e("b-table",{attrs:{striped:"",fields:t.exampleFields,"data-cy":"categoricalTable",items:t.displayTable},scopedSlots:t._u([{key:"cell(select_an_appropriate_mapping)",fn:function(n){return[e("v-select",{attrs:{"data-cy":"categoricalSelector_"+n.index,options:t.getCategoricalOptions(n.item.columnName),reduce:function(t){return t.identifier},value:t.getSelectedCategoricalOption(n.item.columnName,n.item.rawValue)},on:{input:function(e){return t.selectOptionAndUpdate(e,n.item.columnName,n.item.rawValue)}}})]}},{key:"cell(missingValue)",fn:function(n){return[e("b-button",{attrs:{"data-cy":"missingValueButton_"+n.index,variant:"danger"},on:{click:function(e){return t.changeMissingStatus({column:n.item.columnName,value:n.item.rawValue,markAsMissing:!0})}}},[t._v("\n                        "+t._s(t.uiText.missingValueButton)+"\n                    ")])]}},"Diagnosis"===t.activeCategory?{key:"cell(isControl)",fn:function(n){return[e("b-button",{attrs:{"data-cy":"isControlButton_"+n.index,variant:"info"},on:{click:function(e){return t.selectOptionAndUpdate("ncit:C94342",n.item.columnName,n.item.rawValue)}}},[t._v("\n                        "+t._s(t.uiText.isControlButton)+"\n                    ")])]}}:null],null,!0)}),t._v(" "),e("b-row")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);