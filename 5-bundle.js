(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"DOMInspector",(function(){return ve})),r.d(t,"Inspector",(function(){return Ae})),r.d(t,"ObjectInspector",(function(){return oe})),r.d(t,"ObjectLabel",(function(){return te})),r.d(t,"ObjectName",(function(){return Y})),r.d(t,"ObjectPreview",(function(){return Q})),r.d(t,"ObjectRootLabel",(function(){return ee})),r.d(t,"ObjectValue",(function(){return K})),r.d(t,"TableInspector",(function(){return be})),r.d(t,"chromeDark",(function(){return f})),r.d(t,"chromeLight",(function(){return d}));var n=r(1),o=r.n(n),a=r(0),c=r.n(a),i=r(184),l=r.n(i);function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=s((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t}));var p=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o};var O=function(e,t){if(null==e)return{};var r,n,o=p(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},f={BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"11px",BASE_LINE_HEIGHT:1.2,BASE_BACKGROUND_COLOR:"rgb(36, 36, 36)",BASE_COLOR:"rgb(213, 213, 213)",OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES:10,OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES:5,OBJECT_NAME_COLOR:"rgb(227, 110, 236)",OBJECT_VALUE_NULL_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_REGEXP_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_STRING_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_SYMBOL_COLOR:"rgb(233, 63, 59)",OBJECT_VALUE_NUMBER_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_BOOLEAN_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_FUNCTION_PREFIX_COLOR:"rgb(85, 106, 242)",HTML_TAG_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(155, 187, 220)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(242, 151, 102)",HTML_COMMENT_COLOR:"rgb(137, 137, 137)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"rgb(145, 145, 145)",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:12,ARROW_ANIMATION_DURATION:"0",TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"11px",TREENODE_LINE_HEIGHT:1.2,TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"rgb(85, 85, 85)",TABLE_TH_BACKGROUND_COLOR:"rgb(44, 44, 44)",TABLE_TH_HOVER_COLOR:"rgb(48, 48, 48)",TABLE_SORT_ICON_COLOR:"black",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"},d={BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"11px",BASE_LINE_HEIGHT:1.2,BASE_BACKGROUND_COLOR:"white",BASE_COLOR:"black",OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES:10,OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES:5,OBJECT_NAME_COLOR:"rgb(136, 19, 145)",OBJECT_VALUE_NULL_COLOR:"rgb(128, 128, 128)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(128, 128, 128)",OBJECT_VALUE_REGEXP_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_STRING_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_SYMBOL_COLOR:"rgb(196, 26, 22)",OBJECT_VALUE_NUMBER_COLOR:"rgb(28, 0, 207)",OBJECT_VALUE_BOOLEAN_COLOR:"rgb(28, 0, 207)",OBJECT_VALUE_FUNCTION_PREFIX_COLOR:"rgb(13, 34, 170)",HTML_TAG_COLOR:"rgb(168, 148, 166)",HTML_TAGNAME_COLOR:"rgb(136, 18, 128)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(153, 69, 0)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(26, 26, 166)",HTML_COMMENT_COLOR:"rgb(35, 110, 37)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"#6e6e6e",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:12,ARROW_ANIMATION_DURATION:"0",TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"11px",TREENODE_LINE_HEIGHT:1.2,TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"#aaa",TABLE_TH_BACKGROUND_COLOR:"#eee",TABLE_TH_HOVER_COLOR:"hsla(0, 0%, 90%, 1)",TABLE_SORT_ICON_COLOR:"#6e6e6e",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"},b=Object.freeze({__proto__:null,chromeDark:f,chromeLight:d}),E=s((function(e){var t=function(e){var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r,n){var o=t&&t.prototype instanceof u?t:u,a=Object.create(o.prototype),c=new T(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=h(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,c),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=i;var s={};function u(){}function p(){}function O(){}var f={};f[o]=function(){return this};var d=Object.getPrototypeOf,b=d&&d(d(v([])));b&&b!==t&&r.call(b,o)&&(f=b);var E=O.prototype=u.prototype=Object.create(f);function m(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(o,a){function c(){return new t((function(n,c){!function n(o,a,c,i){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(p).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(s.arg)}(o,a,n,c)}))}return n=n?n.then(c,c):c()}}function h(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,h(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function g(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function v(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=E.constructor=O,O.constructor=p,O[c]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},m(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new y(i(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},m(E),E[c]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=v,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(g),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(i&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),g(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;g(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:v(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));var m=function(e){if(Array.isArray(e))return e};var y=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}};var h=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var _=function(e,t){return m(e)||y(e,t)||h()},g=s((function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t}));var T=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}};var v=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)};var A=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var R=function(e){return T(e)||v(e)||A()};var N=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},L=Object(n.createContext)([{},function(){}]),C={WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",OUserSelect:"none",userSelect:"none"};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(e){return{DOMNodePreview:{htmlOpenTag:{base:{color:e.HTML_TAG_COLOR},tagName:{color:e.HTML_TAGNAME_COLOR,textTransform:e.HTML_TAGNAME_TEXT_TRANSFORM},htmlAttributeName:{color:e.HTML_ATTRIBUTE_NAME_COLOR},htmlAttributeValue:{color:e.HTML_ATTRIBUTE_VALUE_COLOR}},htmlCloseTag:{base:{color:e.HTML_TAG_COLOR},offsetLeft:{marginLeft:-e.TREENODE_PADDING_LEFT},tagName:{color:e.HTML_TAGNAME_COLOR,textTransform:e.HTML_TAGNAME_TEXT_TRANSFORM}},htmlComment:{color:e.HTML_COMMENT_COLOR},htmlDoctype:{color:e.HTML_DOCTYPE_COLOR}},ObjectPreview:{objectDescription:{fontStyle:"italic"},preview:{fontStyle:"italic"},arrayMaxProperties:e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,objectMaxProperties:e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES},ObjectName:{base:{color:e.OBJECT_NAME_COLOR},dimmed:{opacity:.6}},ObjectValue:{objectValueNull:{color:e.OBJECT_VALUE_NULL_COLOR},objectValueUndefined:{color:e.OBJECT_VALUE_UNDEFINED_COLOR},objectValueRegExp:{color:e.OBJECT_VALUE_REGEXP_COLOR},objectValueString:{color:e.OBJECT_VALUE_STRING_COLOR},objectValueSymbol:{color:e.OBJECT_VALUE_SYMBOL_COLOR},objectValueNumber:{color:e.OBJECT_VALUE_NUMBER_COLOR},objectValueBoolean:{color:e.OBJECT_VALUE_BOOLEAN_COLOR},objectValueFunctionPrefix:{color:e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,fontStyle:"italic"},objectValueFunctionName:{fontStyle:"italic"}},TreeView:{treeViewOutline:{padding:0,margin:0,listStyleType:"none"}},TreeNode:{treeNodeBase:{color:e.BASE_COLOR,backgroundColor:e.BASE_BACKGROUND_COLOR,lineHeight:e.TREENODE_LINE_HEIGHT,cursor:"default",boxSizing:"border-box",listStyle:"none",fontFamily:e.TREENODE_FONT_FAMILY,fontSize:e.TREENODE_FONT_SIZE},treeNodePreviewContainer:{},treeNodePlaceholder:w({whiteSpace:"pre",fontSize:e.ARROW_FONT_SIZE,marginRight:e.ARROW_MARGIN_RIGHT},C),treeNodeArrow:{base:w({color:e.ARROW_COLOR,display:"inline-block",fontSize:e.ARROW_FONT_SIZE,marginRight:e.ARROW_MARGIN_RIGHT},parseFloat(e.ARROW_ANIMATION_DURATION)>0?{transition:"transform ".concat(e.ARROW_ANIMATION_DURATION," ease 0s")}:{},{},C),expanded:{WebkitTransform:"rotateZ(90deg)",MozTransform:"rotateZ(90deg)",transform:"rotateZ(90deg)"},collapsed:{WebkitTransform:"rotateZ(0deg)",MozTransform:"rotateZ(0deg)",transform:"rotateZ(0deg)"}},treeNodeChildNodesContainer:{margin:0,paddingLeft:e.TREENODE_PADDING_LEFT}},TableInspector:{base:{color:e.BASE_COLOR,position:"relative",border:"1px solid ".concat(e.TABLE_BORDER_COLOR),fontFamily:e.BASE_FONT_FAMILY,fontSize:e.BASE_FONT_SIZE,lineHeight:"120%",boxSizing:"border-box",cursor:"default"}},TableInspectorHeaderContainer:{base:{top:0,height:"17px",left:0,right:0,overflowX:"hidden"},table:{tableLayout:"fixed",borderSpacing:0,borderCollapse:"separate",height:"100%",width:"100%",margin:0}},TableInspectorDataContainer:{tr:{display:"table-row"},td:{boxSizing:"border-box",border:"none",height:"16px",verticalAlign:"top",padding:"1px 4px",WebkitUserSelect:"text",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",lineHeight:"14px"},div:{position:"static",top:"17px",bottom:0,overflowY:"overlay",transform:"translateZ(0)",left:0,right:0,overflowX:"hidden"},table:{positon:"static",left:0,top:0,right:0,bottom:0,borderTop:"0 none transparent",margin:0,backgroundImage:e.TABLE_DATA_BACKGROUND_IMAGE,backgroundSize:e.TABLE_DATA_BACKGROUND_SIZE,tableLayout:"fixed",borderSpacing:0,borderCollapse:"separate",width:"100%",fontSize:e.BASE_FONT_SIZE,lineHeight:"120%"}},TableInspectorTH:{base:{position:"relative",height:"auto",textAlign:"left",backgroundColor:e.TABLE_TH_BACKGROUND_COLOR,borderBottom:"1px solid ".concat(e.TABLE_BORDER_COLOR),fontWeight:"normal",verticalAlign:"middle",padding:"0 4px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",lineHeight:"14px",":hover":{backgroundColor:e.TABLE_TH_HOVER_COLOR}},div:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:e.BASE_FONT_SIZE,lineHeight:"120%"}},TableInspectorLeftBorder:{none:{borderLeft:"none"},solid:{borderLeft:"1px solid ".concat(e.TABLE_BORDER_COLOR)}},TableInspectorSortIcon:w({display:"block",marginRight:3,width:8,height:7,marginTop:-7,color:e.TABLE_SORT_ICON_COLOR,fontSize:12},C)}},S=Object(n.createContext)(x(b.chromeLight)),I=function(e){return Object(n.useContext)(S)[e]},P=function(e){var t=function(t){var r=t.theme,a=void 0===r?"chromeLight":r,c=O(t,["theme"]),i=Object(n.useMemo)((function(){switch(Object.prototype.toString.call(a)){case"[object String]":return x(b[a]);case"[object Object]":return x(a);default:return x(b.chromeLight)}}),[a]);return o.a.createElement(S.Provider,{value:i},o.a.createElement(e,c))};return t.propTypes={theme:c.a.oneOfType([c.a.string,c.a.object])},t};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(e){var t=e.expanded,r=e.styles;return o.a.createElement("span",{style:B({},r.base,{},t?r.expanded:r.collapsed)},"▶")},k=Object(n.memo)((function(e){var t=e=B({expanded:!0,nodeRenderer:function(e){var t=e.name;return o.a.createElement("span",null,t)},onClick:function(){},shouldShowArrow:!1,shouldShowPlaceholder:!0},e),r=t.expanded,a=t.onClick,c=t.children,i=t.nodeRenderer,l=t.title,s=t.shouldShowArrow,u=t.shouldShowPlaceholder,p=I("TreeNode"),O=i;return o.a.createElement("li",{"aria-expanded":r,role:"treeitem",style:p.treeNodeBase,title:l},o.a.createElement("div",{style:p.treeNodePreviewContainer,onClick:a},s||n.Children.count(c)>0?o.a.createElement(M,{expanded:r,styles:p.treeNodeArrow}):u&&o.a.createElement("span",{style:p.treeNodePlaceholder}," "),o.a.createElement(O,e)),o.a.createElement("ol",{role:"group",style:p.treeNodeChildNodesContainer},r?c:void 0))}));function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}k.propTypes={name:c.a.string,data:c.a.any,expanded:c.a.bool,shouldShowArrow:c.a.bool,shouldShowPlaceholder:c.a.bool,nodeRenderer:c.a.func,onClick:c.a.func};var H="$";function V(e,t){return!t(e).next().done}var G=function(e,t,r,n,o){var a,c=[].concat((a=n,Array.from({length:a},(function(e,t){return[H].concat(Array.from({length:t},(function(){return"*"}))).join(".")})))).concat(r).filter((function(e){return"string"==typeof e})),i=[];return c.forEach((function(r){var n=r.split(".");!function e(r,o,a){if(a!==n.length){var c=n[a];if(0===a)!V(r,t)||c!==H&&"*"!==c||e(r,H,a+1);else if("*"===c){var l=!0,s=!1,u=void 0;try{for(var p,O=t(r)[Symbol.iterator]();!(l=(p=O.next()).done);l=!0){var f=p.value,d=f.name,b=f.data;V(b,t)&&e(b,"".concat(o,".").concat(d),a+1)}}catch(e){s=!0,u=e}finally{try{l||null==O.return||O.return()}finally{if(s)throw u}}}else{var E=r[c];V(E,t)&&e(E,"".concat(o,".").concat(c),a+1)}}else i.push(o)}(e,"",0)})),i.reduce((function(e,t){return e[t]=!0,e}),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},o))};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var J=Object(n.memo)((function(e){var t=e.data,r=e.dataIterator,a=e.path,c=e.depth,i=e.nodeRenderer,l=Object(n.useContext)(L),s=_(l,2),p=s[0],f=s[1],d=V(t,r),b=!!p[a],E=Object(n.useCallback)((function(){return d&&f((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,N({},a,!b))}))}),[d,f,a,b]);return o.a.createElement(k,u({expanded:b,onClick:E,shouldShowArrow:d,shouldShowPlaceholder:c>0,nodeRenderer:i},e),b?R(r(t)).map((function(e){var t=e.name,n=e.data,l=O(e,["name","data"]);return o.a.createElement(J,u({name:t,data:n,depth:c+1,path:"".concat(a,".").concat(t),key:t,dataIterator:r,nodeRenderer:i},l))})):null)}));J.propTypes={name:c.a.string,data:c.a.any,dataIterator:c.a.func,depth:c.a.number,expanded:c.a.bool,nodeRenderer:c.a.func};var W=Object(n.memo)((function(e){var t=e.name,r=e.data,a=e.dataIterator,c=e.nodeRenderer,i=e.expandPaths,l=e.expandLevel,s=I("TreeView"),u=Object(n.useState)({}),p=_(u,2)[1];return Object(n.useLayoutEffect)((function(){return p((function(e){return G(r,a,i,l,e)}))}),[r,a,i,l]),o.a.createElement(L.Provider,{value:u},o.a.createElement("ol",{role:"tree",style:s.treeViewOutline},o.a.createElement(J,{name:t,data:r,dataIterator:a,depth:0,path:H,nodeRenderer:c})))}));function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}W.propTypes={name:c.a.string,data:c.a.any,dataIterator:c.a.func,nodeRenderer:c.a.func,expandPaths:c.a.oneOfType([c.a.string,c.a.array]),expandLevel:c.a.number};var Y=function(e){var t=e.name,r=e.dimmed,n=void 0!==r&&r,a=e.styles,c=void 0===a?{}:a,i=I("ObjectName"),l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},i.base,{},n?i.dimmed:{},{},c);return o.a.createElement("span",{style:l},t)};function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Y.propTypes={name:c.a.string,dimmed:c.a.bool};var K=function(e){var t=e.object,r=e.styles,n=I("ObjectValue"),a=function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n[e],{},r)};switch(g(t)){case"bigint":return o.a.createElement("span",{style:a("objectValueNumber")},String(t),"n");case"number":return o.a.createElement("span",{style:a("objectValueNumber")},String(t));case"string":return o.a.createElement("span",{style:a("objectValueString")},'"',t,'"');case"boolean":return o.a.createElement("span",{style:a("objectValueBoolean")},String(t));case"undefined":return o.a.createElement("span",{style:a("objectValueUndefined")},"undefined");case"object":return null===t?o.a.createElement("span",{style:a("objectValueNull")},"null"):t instanceof Date?o.a.createElement("span",null,t.toString()):t instanceof RegExp?o.a.createElement("span",{style:a("objectValueRegExp")},t.toString()):Array.isArray(t)?o.a.createElement("span",null,"Array(".concat(t.length,")")):t.constructor?"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)?o.a.createElement("span",null,"Buffer[".concat(t.length,"]")):o.a.createElement("span",null,t.constructor.name):o.a.createElement("span",null,"Object");case"function":return o.a.createElement("span",null,o.a.createElement("span",{style:a("objectValueFunctionPrefix")},"ƒ "),o.a.createElement("span",{style:a("objectValueFunctionName")},t.name,"()"));case"symbol":return o.a.createElement("span",{style:a("objectValueSymbol")},t.toString());default:return o.a.createElement("span",null)}};K.propTypes={object:c.a.any};var z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;function $(e,t){return 0===e.length?[]:e.slice(1).reduce((function(e,r){return e.concat([t,r])}),[e[0]])}var Q=function(e){var t=e.data,r=I("ObjectPreview"),n=t;if("object"!==g(n)||null===n||n instanceof Date||n instanceof RegExp)return o.a.createElement(K,{object:n});if(Array.isArray(n)){var a=r.arrayMaxProperties,c=n.slice(0,a).map((function(e,t){return o.a.createElement(K,{key:t,object:e})}));n.length>a&&c.push(o.a.createElement("span",{key:"ellipsis"},"…"));var i=n.length;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{style:r.objectDescription},0===i?"":"(".concat(i,") ")),o.a.createElement("span",{style:r.preview},"[",$(c,", "),"]"))}var l=r.objectMaxProperties,s=[];for(var u in n){var p=n[u];if(z.call(n,u)){var O=void 0;if(s.length===l-1&&Object.keys(n).length>l&&(O=o.a.createElement("span",{key:"ellipsis"},"…")),s.push(o.a.createElement("span",{key:u},o.a.createElement(Y,{name:u||'""'}),": ",o.a.createElement(K,{object:p}),O)),O)break}}var f=n.constructor?n.constructor.name:"Object";return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{style:r.objectDescription},"Object"===f?"":"".concat(f," ")),o.a.createElement("span",{style:r.preview},"{",$(s,", "),"}"))},ee=function(e){var t=e.name,r=e.data;return"string"==typeof t?o.a.createElement("span",null,o.a.createElement(Y,{name:t}),o.a.createElement("span",null,": "),o.a.createElement(Q,{data:r})):o.a.createElement(Q,{data:r})},te=function(e){var t=e.name,r=e.data,n=e.isNonenumerable,a=void 0!==n&&n,c=r;return o.a.createElement("span",null,"string"==typeof t?o.a.createElement(Y,{name:t,dimmed:a}):o.a.createElement(Q,{data:t}),o.a.createElement("span",null,": "),o.a.createElement(K,{object:c}))};te.propTypes={isNonenumerable:c.a.bool};var re=function(e){var t=e.depth,r=e.name,n=e.data,a=e.isNonenumerable;return 0===t?o.a.createElement(ee,{name:r,data:n}):o.a.createElement(te,{name:r,data:n,isNonenumerable:a})},ne=function(e){var t=e.showNonenumerable,r=void 0!==t&&t,n=e.sortObjectKeys,a=e.nodeRenderer,c=O(e,["showNonenumerable","sortObjectKeys","nodeRenderer"]),i=function(e,t){return E.mark((function r(n){var o,a,c,i,l,s,u,p,O,f,d,b,m,y,h,T,v,A,R,N;return E.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("object"===g(n)&&null!==n||"function"==typeof n){r.next=3;break}return r.abrupt("return");case 3:if((o=Array.isArray(n))||!n[Symbol.iterator]){r.next=41;break}a=0,c=!0,i=!1,l=void 0,r.prev=9,s=n[Symbol.iterator]();case 11:if(c=(u=s.next()).done){r.next=25;break}if(p=u.value,!Array.isArray(p)||2!==p.length){r.next=19;break}return O=_(p,2),f=O[0],d=O[1],r.next=17,{name:f,data:d};case 17:r.next=21;break;case 19:return r.next=21,{name:a.toString(),data:p};case 21:a++;case 22:c=!0,r.next=11;break;case 25:r.next=31;break;case 27:r.prev=27,r.t0=r.catch(9),i=!0,l=r.t0;case 31:r.prev=31,r.prev=32,c||null==s.return||s.return();case 34:if(r.prev=34,!i){r.next=37;break}throw l;case 37:return r.finish(34);case 38:return r.finish(31);case 39:r.next=82;break;case 41:b=Object.getOwnPropertyNames(n),!0!==t||o?"function"==typeof t&&b.sort(t):b.sort(),m=!0,y=!1,h=void 0,r.prev=46,T=b[Symbol.iterator]();case 48:if(m=(v=T.next()).done){r.next=65;break}if(A=v.value,!q.call(n,A)){r.next=56;break}return R=n[A],r.next=54,{name:A||'""',data:R};case 54:r.next=62;break;case 56:if(!e){r.next=62;break}N=void 0;try{N=n[A]}catch(e){}if(void 0===N){r.next=62;break}return r.next=62,{name:A,data:N,isNonenumerable:!0};case 62:m=!0,r.next=48;break;case 65:r.next=71;break;case 67:r.prev=67,r.t1=r.catch(46),y=!0,h=r.t1;case 71:r.prev=71,r.prev=72,m||null==T.return||T.return();case 74:if(r.prev=74,!y){r.next=77;break}throw h;case 77:return r.finish(74);case 78:return r.finish(71);case 79:if(!e||n===Object.prototype){r.next=82;break}return r.next=82,{name:"__proto__",data:Object.getPrototypeOf(n),isNonenumerable:!0};case 82:case"end":return r.stop()}}),r,null,[[9,27,31,39],[32,,34,38],[46,67,71,79],[72,,74,78]])}))}(r,n),l=a||re;return o.a.createElement(W,u({nodeRenderer:l,dataIterator:i},c))};ne.propTypes={expandLevel:c.a.number,expandPaths:c.a.oneOfType([c.a.string,c.a.array]),name:c.a.string,data:c.a.any,showNonenumerable:c.a.bool,sortObjectKeys:c.a.oneOfType([c.a.bool,c.a.func]),nodeRenderer:c.a.func};var oe=P(ne);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Array.prototype.includes||(Array.prototype.includes=function(e){var t=Object(this),r=parseInt(t.length)||0;if(0===r)return!1;var n,o,a=parseInt(arguments[1])||0;for(a>=0?n=a:(n=r+a)<0&&(n=0);n<r;){if(e===(o=t[n])||e!=e&&o!=o)return!0;n++}return!1});var ie=function(e){var t=e.rows,r=e.columns,n=e.rowsData,a=I("TableInspectorDataContainer"),c=I("TableInspectorLeftBorder");return o.a.createElement("div",{style:a.div},o.a.createElement("table",{style:a.table},o.a.createElement("colgroup",null),o.a.createElement("tbody",null,t.map((function(e,t){return o.a.createElement("tr",{key:e,style:a.tr},o.a.createElement("td",{style:ce({},a.td,{},c.none)},e),r.map((function(e){var r=n[t];return"object"===g(r)&&null!==r&&z.call(r,e)?o.a.createElement("td",{key:e,style:ce({},a.td,{},c.solid)},o.a.createElement(K,{object:r[e]})):o.a.createElement("td",{key:e,style:ce({},a.td,{},c.solid)})})))})))))};function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){return o.a.createElement("div",{style:{position:"absolute",top:1,right:0,bottom:1,display:"flex",alignItems:"center"}},e.children)},pe=function(e){var t=e.sortAscending,r=I("TableInspectorSortIcon"),n=t?"▲":"▼";return o.a.createElement("div",{style:r},n)},Oe=function(e){var t=e.sortAscending,r=void 0!==t&&t,a=e.sorted,c=void 0!==a&&a,i=e.onClick,l=void 0===i?void 0:i,s=e.borderStyle,p=void 0===s?{}:s,f=e.children,d=O(e,["sortAscending","sorted","onClick","borderStyle","children"]),b=I("TableInspectorTH"),E=Object(n.useState)(!1),m=_(E,2),y=m[0],h=m[1],g=Object(n.useCallback)((function(){return h(!0)}),[]),T=Object(n.useCallback)((function(){return h(!1)}),[]);return o.a.createElement("th",u({},d,{style:se({},b.base,{},p,{},y?b.base[":hover"]:{}),onMouseEnter:g,onMouseLeave:T,onClick:l}),o.a.createElement("div",{style:b.div},f),c&&o.a.createElement(ue,null,o.a.createElement(pe,{sortAscending:r})))},fe=function(e){var t=e.indexColumnText,r=void 0===t?"(index)":t,n=e.columns,a=void 0===n?[]:n,c=e.sorted,i=e.sortIndexColumn,l=e.sortColumn,s=e.sortAscending,u=e.onTHClick,p=e.onIndexTHClick,O=I("TableInspectorHeaderContainer"),f=I("TableInspectorLeftBorder");return o.a.createElement("div",{style:O.base},o.a.createElement("table",{style:O.table},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement(Oe,{borderStyle:f.none,sorted:c&&i,sortAscending:s,onClick:p},r),a.map((function(e){return o.a.createElement(Oe,{borderStyle:f.solid,key:e,sorted:c&&l===e,sortAscending:s,onClick:u.bind(null,e)},e)}))))))},de=function(e){var t=e.data,r=e.columns,a=I("TableInspector"),c=Object(n.useState)({sorted:!1,sortIndexColumn:!1,sortColumn:void 0,sortAscending:!1}),i=_(c,2),l=i[0],s=l.sorted,u=l.sortIndexColumn,p=l.sortColumn,O=l.sortAscending,f=i[1],d=Object(n.useCallback)((function(){f((function(e){var t=e.sortIndexColumn,r=e.sortAscending;return{sorted:!0,sortIndexColumn:!0,sortColumn:void 0,sortAscending:!t||!r}}))}),[]),b=Object(n.useCallback)((function(e){f((function(t){var r=t.sortColumn,n=t.sortAscending;return{sorted:!0,sortIndexColumn:!1,sortColumn:e,sortAscending:e!==r||!n}}))}),[]);if("object"!==g(t)||null===t)return o.a.createElement("div",null);var E=function(e){if("object"===g(e)){var t;if(Array.isArray(e)){var r=e.length;t=R(Array(r).keys())}else null!==e&&(t=Object.keys(e));var n=t.reduce((function(t,r){var n=e[r];"object"===g(n)&&null!==n&&Object.keys(n).reduce((function(e,t){return e.includes(t)||e.push(t),e}),t);return t}),[]);return{rowHeaders:t,colHeaders:n}}}(t),m=E.rowHeaders,y=E.colHeaders;void 0!==r&&(y=r);var h,T,v,A=m.map((function(e){return t[e]}));if(void 0!==p?h=A.map((function(e,t){return"object"===g(e)&&null!==e?[e[p],t]:[void 0,t]})):u&&(h=m.map((function(e,t){return[m[t],t]}))),void 0!==h){var N=h.sort((T=function(e){return e[0]},v=O,function(e,t){var r,n=T(e),o=T(t),a=g(n),c=g(o),i=function(e,t){return e<t?-1:e>t?1:0};if(a===c)r=i(n,o);else{var l={string:0,number:1,object:2,symbol:3,boolean:4,undefined:5,function:6};r=i(l[a],l[c])}return v||(r=-r),r})).map((function(e){return e[1]}));m=N.map((function(e){return m[e]})),A=N.map((function(e){return A[e]}))}return o.a.createElement("div",{style:a.base},o.a.createElement(fe,{columns:y,sorted:s,sortIndexColumn:u,sortColumn:p,sortAscending:O,onTHClick:b,onIndexTHClick:d}),o.a.createElement(ie,{rows:m,columns:y,rowsData:A}))};de.propTypes={data:c.a.oneOfType([c.a.array,c.a.object]),columns:c.a.array};var be=P(de),Ee=function(e){return 0===e.childNodes.length||1===e.childNodes.length&&e.childNodes[0].nodeType===Node.TEXT_NODE&&e.textContent.length<80},me=function(e){var t=e.tagName,r=e.attributes,n=e.styles;return o.a.createElement("span",{style:n.base},"<",o.a.createElement("span",{style:n.tagName},t),function(){if(r){for(var e=[],t=0;t<r.length;t++){var a=r[t];e.push(o.a.createElement("span",{key:t}," ",o.a.createElement("span",{style:n.htmlAttributeName},a.name),'="',o.a.createElement("span",{style:n.htmlAttributeValue},a.value),'"'))}return e}}(),">")},ye=function(e){var t=e.tagName,r=e.isChildNode,n=void 0!==r&&r,a=e.styles;return o.a.createElement("span",{style:u({},a.base,n&&a.offsetLeft)},"</",o.a.createElement("span",{style:a.tagName},t),">")},he={1:"ELEMENT_NODE",3:"TEXT_NODE",7:"PROCESSING_INSTRUCTION_NODE",8:"COMMENT_NODE",9:"DOCUMENT_NODE",10:"DOCUMENT_TYPE_NODE",11:"DOCUMENT_FRAGMENT_NODE"},_e=function(e){var t=e.isCloseTag,r=e.data,n=e.expanded,a=I("DOMNodePreview");if(t)return o.a.createElement(ye,{styles:a.htmlCloseTag,isChildNode:!0,tagName:r.tagName});switch(r.nodeType){case Node.ELEMENT_NODE:return o.a.createElement("span",null,o.a.createElement(me,{tagName:r.tagName,attributes:r.attributes,styles:a.htmlOpenTag}),Ee(r)?r.textContent:!n&&"…",!n&&o.a.createElement(ye,{tagName:r.tagName,styles:a.htmlCloseTag}));case Node.TEXT_NODE:return o.a.createElement("span",null,r.textContent);case Node.CDATA_SECTION_NODE:return o.a.createElement("span",null,"<![CDATA["+r.textContent+"]]>");case Node.COMMENT_NODE:return o.a.createElement("span",{style:a.htmlComment},"\x3c!--",r.textContent,"--\x3e");case Node.PROCESSING_INSTRUCTION_NODE:return o.a.createElement("span",null,r.nodeName);case Node.DOCUMENT_TYPE_NODE:return o.a.createElement("span",{style:a.htmlDoctype},"<!DOCTYPE ",r.name,r.publicId?' PUBLIC "'.concat(r.publicId,'"'):"",!r.publicId&&r.systemId?" SYSTEM":"",r.systemId?' "'.concat(r.systemId,'"'):"",">");case Node.DOCUMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:return o.a.createElement("span",null,r.nodeName);default:return o.a.createElement("span",null,he[r.nodeType])}};_e.propTypes={isCloseTag:c.a.bool,name:c.a.string,data:c.a.object.isRequired,expanded:c.a.bool.isRequired};var ge=E.mark((function e(t){var r,n;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.childNodes){e.next=17;break}if(!Ee(t)){e.next=4;break}return e.abrupt("return");case 4:r=0;case 5:if(!(r<t.childNodes.length)){e.next=14;break}if((n=t.childNodes[r]).nodeType!==Node.TEXT_NODE||0!==n.textContent.trim().length){e.next=9;break}return e.abrupt("continue",11);case 9:return e.next=11,{name:"".concat(n.tagName,"[").concat(r,"]"),data:n};case 11:r++,e.next=5;break;case 14:if(!t.tagName){e.next=17;break}return e.next=17,{name:"CLOSE_TAG",data:{tagName:t.tagName},isCloseTag:!0};case 17:case"end":return e.stop()}}),e)})),Te=function(e){return o.a.createElement(W,u({nodeRenderer:_e,dataIterator:ge},e))};Te.propTypes={data:c.a.object.isRequired};var ve=P(Te),Ae=function(e){var t=e.table,r=void 0!==t&&t,n=e.data,a=O(e,["table","data"]);return r?o.a.createElement(be,u({data:n},a)):l()(n)?o.a.createElement(ve,u({data:n},a)):o.a.createElement(oe,u({data:n},a))};Ae.propTypes={data:c.a.any,name:c.a.string,table:c.a.bool},t.default=Ae},184:function(e,t,r){var n=r(185),o=r(186);e.exports=function(e){return!(!n(e)||!o(window)||"function"!=typeof window.Node)&&("number"==typeof e.nodeType&&"string"==typeof e.nodeName)}},185:function(e,t,r){"use strict";e.exports=function(e){return"object"==typeof e&&null!==e}},186:function(e,t,r){"use strict";e.exports=function(e){if(null==e)return!1;var t=Object(e);return t===t.window}}}]);