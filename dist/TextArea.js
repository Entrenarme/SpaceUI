module.exports=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=11)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n,r){"use strict";n.a={buttonBackground:{purpleGradient:"rgba(165, 20, 176, 1)",pinkGradient:"rgba(255, 96, 165, 1)"},gray:{light:"rgba(244, 244, 244, 1)",dark:"rgba(102, 102, 102, 1)"}}},function(e,n,r){"use strict";r.d(n,"b",function(){return t}),r.d(n,"a",function(){return o});var t="PT Sans, sans-serif",o="Montserrat, sans-serif"},function(e,n){e.exports=require("@fortawesome/react-fontawesome")},,,,,,,function(e,n,r){"use strict";r.r(n);var t=r(0),o=r(1),l=r.n(o),a=(r(4),r(3)),i=r(2),p=c(["\n  display: flex;\n  margin-top: 5px;\n"],["\n  display: flex;\n  margin-top: 5px;\n"]),f=c(["\n  font-size: 12px;\n  font-family: ",";\n  text-transform: uppercase;\n  font-weight: 500;\n  margin-left: 5px;\n  color: ",";\n"],["\n  font-size: 12px;\n  font-family: ",";\n  text-transform: uppercase;\n  font-weight: 500;\n  margin-left: 5px;\n  color: ",";\n"]),u=c(["\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ",";\n  border-radius: 50px 0px 0px 50px;\n  background-color: ",";\n"],["\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ",";\n  border-radius: 50px 0px 0px 50px;\n  background-color: ",";\n"]),s=c(["\n  border: 1px solid ",";\n  font-size: 14px;\n  width: 300px;\n  padding: 10px 10px 10px 15px;\n  border-radius: 50px;\n  font-family: ",";\n  color: ",";\n  overflow: hidden;\n\n  &:focus {\n    outline: 0;\n  }\n"],["\n  border: 1px solid ",";\n  font-size: 14px;\n  width: 300px;\n  padding: 10px 10px 10px 15px;\n  border-radius: 50px;\n  font-family: ",";\n  color: ",";\n  overflow: hidden;\n\n  &:focus {\n    outline: 0;\n  }\n"]);function c(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d=l.a.div(p),x=l.a.label(f,a.a,function(e){return e.options.labelColor?e.options.labelColor:"#ffffff"}),b=(l.a.div(u,i.a.gray.light,i.a.gray.light),l.a.textarea(s,i.a.gray.light,a.a,i.a.gray.dark)),y=function(e){var n=e.type,r=e.placeholder,o=e.label,l=e.labelColor,a=e.style,i=e.rows,p=e.cols;!function(e,n){var r={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}(e,["type","placeholder","label","labelColor","style","rows","cols"]);return t.createElement("div",{style:a},o?t.createElement(x,{options:{labelColor:l}},o):null,t.createElement(d,null,t.createElement(b,{type:n,placeholder:r,rows:i,cols:p})))};y.defaultProps={type:"text",placeholder:null,labelColor:"",style:{}},n.default=y}]);