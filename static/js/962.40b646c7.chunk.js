"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[962],{419:function(t,e,r){r.d(e,{tn:function(){return c},yA:function(){return a}});var n=r(243),a="https://image.tmdb.org/t/p/w500",c={get:function(t,e){return(0,n.Z)({method:"get",url:"".concat("https://api.themoviedb.org/3").concat(t,"?api_key=").concat("17c5a5de30466e42172be6812ea6018f").concat(e||"")})}}},692:function(t,e,r){r.d(e,{Aj:function(){return o},HI:function(){return s},jP:function(){return p},z1:function(){return i},zv:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(419),o=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.tn.get("/trending/movie/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.tn.get("/movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.tn.get("/search/movie","&language=en-US&page=1&include_adult=false&".concat(e));case 3:return r=t.sent,n=r.data.results,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.tn.get("".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.tn.get("".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},962:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n,a=r(861),c=r(439),u=r(757),o=r.n(u),s=r(791),i=r(87),l=r(689),p=r(686),f=r.n(p),h=r(692),v=["title","titleId"];function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},d.apply(this,arguments)}function m(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function w(t,e){var r=t.title,a=t.titleId,c=m(t,v);return s.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:e,"aria-labelledby":a},c),r?s.createElement("title",{id:a},r):null,n||(n=s.createElement("path",{d:"M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"})))}var g=s.forwardRef(w),x=(r.p,r(184)),y=function(){var t=(0,s.useState)(""),e=(0,c.Z)(t,2),r=e[0],n=e[1],u=(0,s.useState)([]),p=(0,c.Z)(u,2),v=p[0],d=p[1],m=(0,l.TH)(),w=(0,l.s0)();(0,s.useEffect)((function(){var t=m.pathname+m.search;y(t.replace("?","&")).finally()}),[m.search]);var y=function(){var t=(0,a.Z)(o().mark((function t(e){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.z1)(e||"query=".concat(r));case 2:a=t.sent,d(a),n("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("header",{className:"searchbar",children:(0,x.jsxs)("form",{className:"searchForm",onSubmit:function(t){t.preventDefault(),r.trim()?(y().finally(),w("?query=".concat(r))):f().Notify.warning("No movies found!")},children:[(0,x.jsx)("button",{type:"submit",className:"searchForm-button",children:(0,x.jsx)(g,{className:"searchForm-icon"})}),(0,x.jsx)("input",{className:"searchForm-input",type:"text",autoComplete:"off",value:r,autoFocus:!0,placeholder:"Search images and photos",onChange:function(t){var e=t.target.value;n(e)}})]})}),(0,x.jsx)("ul",{className:"list",children:v.map((function(t){return(0,x.jsx)("li",{children:(0,x.jsx)(i.rU,{to:"/movie/".concat(t.id),state:{from:{location:m}},children:(0,x.jsx)("span",{children:t.title})})},t.id)}))})]})}}}]);
//# sourceMappingURL=962.40b646c7.chunk.js.map