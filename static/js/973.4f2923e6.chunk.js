"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[973],{6973:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(5861),a=n(885),u=n(7757),c=n.n(u),s=n(2791),i=n(184);function o(t){var e=t.onSubmit,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,i.jsx)("header",{className:"searchbar",children:(0,i.jsxs)("form",{className:"searchForm",onSubmit:function(t){t.preventDefault(),""!==u?e(u):alert("Enter movie title")},children:[(0,i.jsx)("button",{type:"submit",className:"searchForm-button"}),(0,i.jsx)("input",{className:"searchForm-input",type:"text",autoComplete:"off",placeholder:"Search movie",onChange:function(t){var e=t.target.value;c(e.toLowerCase().trim())}})]})})}var p,f,l=n(168),d=n(5751),h=d.ZP.ul(p||(p=(0,l.Z)(["\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:space-between;\n  & > li{\n      \n  }\n"]))),m=d.ZP.li(f||(f=(0,l.Z)(["\n  width: 250px;\n  \n"]))),v=n(9177),g=n(501),b=n(6871);function x(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],p=(0,g.lr)(),f=(0,a.Z)(p,2),l=f[0],d=f[1],x=l.get("query"),_=(0,b.TH)();(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null!==x){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,(0,v.on)(x);case 5:if(e=t.sent,n=e.results,0!==e.total_results){t.next=11;break}return alert("Nothing found"),t.abrupt("return");case 11:r=n.map((function(t){return{id:t.id,original_title:t.original_title,poster_path:t.poster_path}})),u(r),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[x]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{onSubmit:function(t){return d({query:t})}}),(0,i.jsx)(h,{children:n.map((function(t){return(0,i.jsx)(m,{children:(0,i.jsxs)(g.rU,{style:{display:"block",margin:"1rem 0"},to:"/movies/".concat(t.id),state:{from:_},children:[t.poster_path&&(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:"".concat(t.original_title),width:"250"})||(0,i.jsx)("img",{src:"https://12knots.ru/storage/app/uploads/public/045/61a/f10/thumb__375_250_0_0_crop.jpg",alt:"not-found",width:"250",height:"375"}),t.original_title]},t.id)},t.id)}))})]})}},9177:function(t,e,n){n.d(e,{Hg:function(){return o},on:function(){return p},TP:function(){return f},M1:function(){return l},tx:function(){return d}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c),i="051044c279aad319532da903b2292510",o=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i),t.next=3,s().get("".concat(s().defaults.baseURL));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.baseURL="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e,"&page=1&language=en-US"),t.next=3,s().get("".concat(s().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t.next=3,s().get("".concat(s().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t.next=3,s().get("".concat(s().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"),t.next=3,s().get("".concat(s().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=973.4f2923e6.chunk.js.map