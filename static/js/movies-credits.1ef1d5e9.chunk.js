/*! For license information please see movies-credits.1ef1d5e9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[19],{109:function(t,r,e){e.r(r),e.d(r,{default:function(){return E}});var n,o,a,i,c,u,s,f=e(439),l=e(791),h=e(689),p=e(168),d=e(867),v=d.ZP.div(n||(n=(0,p.Z)(["\n  text-align: center;\n"]))),y=d.ZP.p(o||(o=(0,p.Z)(["\n  font-size: 16px;\n  color: #ff6b01;\n"]))),g=d.ZP.h2(a||(a=(0,p.Z)(["\n  font-size: 20px;\n"]))),m=d.ZP.img(i||(i=(0,p.Z)(["\n  display: block;\n  max-width: 100%;\n"]))),w=d.ZP.li(c||(c=(0,p.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n"]))),x=d.ZP.div(u||(u=(0,p.Z)(["\n  height: 100%;\n  color: #fff;\n  background-color: #000;\n"]))),b=d.ZP.ul(s||(s=(0,p.Z)(["\n  padding: 10px;\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  list-style: none;\n\n  @media screen and (min-width: 768px) and (max-width: 1024px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media screen and (min-width: 1024px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"]))),L=e(184),_=function(t){var r=t.data;return(0,L.jsx)(b,{children:r.map((function(t){return(0,L.jsx)(w,{children:(0,L.jsxs)(x,{children:[(0,L.jsx)(m,{src:t.profile_path?"https://image.tmdb.org/t/p/original/".concat(t.profile_path):"https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png",alt:"Photo Actors"}),(0,L.jsxs)(v,{children:[(0,L.jsx)(g,{children:t.name}),(0,L.jsxs)(y,{children:["Character: ",t.character]})]})]})},t.id)}))})},Z=e(660),k=e(742),E=function(){var t=(0,h.UO)(),r=(0,l.useState)([]),e=(0,f.Z)(r,2),n=e[0],o=e[1];return(0,l.useEffect)((function(){Z.xc(t.id).then((function(t){k.Loading.circle({svgColor:"#ff6b01"}),o(t)})).finally((function(){k.Loading.remove()}))}),[t.id]),(0,L.jsx)(L.Fragment,{children:n&&(0,L.jsx)(_,{data:n})})}},660:function(t,r,e){e.d(r,{Hx:function(){return p},Li:function(){return s},Zn:function(){return c},lu:function(){return l},xc:function(){return v}});var n=e(861),o=e(243);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var a=r&&r.prototype instanceof g?r:g,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:E(t,e,c)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function w(){}var x={};f(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==e&&n.call(L,c)&&(x=L);var _=w.prototype=g.prototype=Object.create(x);function Z(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function E(r,e,n){var o=p;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function j(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,j(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=h(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(_,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},r.awrap=function(t){return{__await:t}},Z(k.prototype),f(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},Z(_),f(_,s,"Generator"),f(_,c,(function(){return this})),f(_,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var i="cd00d8c55831cbeec8ccdad1db16d6d2";function c(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/popular?api_key=".concat(i,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r,"?api_key=cd00d8c55831cbeec8ccdad1db16d6d2&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=movies-credits.1ef1d5e9.chunk.js.map