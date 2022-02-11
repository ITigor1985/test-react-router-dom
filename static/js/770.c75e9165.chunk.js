"use strict";(self.webpackChunktest_react_router_dom=self.webpackChunktest_react_router_dom||[]).push([[770],{4770:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r,a,s,i,c,o,u,l=n(5861),d=n(885),p=n(7757),f=n.n(p),h=n(6871),v=n(2791),g=n(9177),m=n(168),x=n(5751),b=x.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  & > :not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),w=x.ZP.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  liststyletype: none;\n  & > :not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),_=x.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Z=x.ZP.div(i||(i=(0,m.Z)(["\n  width: 650px;\n"]))),j=x.ZP.h2(c||(c=(0,m.Z)(["\n  margin-bottom: 15px;\n"]))),k=x.ZP.p(o||(o=(0,m.Z)(["\n  margin-bottom: 15px;\n"]))),y=x.ZP.h3(u||(u=(0,m.Z)(["\n  margin-bottom: 15px;\n"]))),U=n(2139),R=n(184);function L(){var e,t,n,r,a=(0,h.UO)().movieId,s=(0,h.TH)(),i=(0,v.useState)({}),c=(0,d.Z)(i,2),o=c[0],u=c[1],p=(0,v.useState)(""),m=(0,d.Z)(p,2),x=m[0],L=m[1];return(0,v.useEffect)((function(){function e(){return(e=(0,l.Z)(f().mark((function e(){var t,n,r,s,i,c,o,l;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.TP)(a);case 3:t=e.sent,n=t.id,r=t.original_title,s=t.overview,i=t.backdrop_path,c=t.genres,o=t.vote_average,l=t.release_date,u({id:n,original_title:r,overview:s,backdrop_path:i,genres:c,vote_average:o,release_date:l}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),L(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(U.Z,{to:null!==(e=null===s||void 0===s||null===(t=s.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go Back"}),x&&(0,R.jsx)("h2",{children:"Something went wrong, please try again"}),(0,R.jsxs)(_,{children:[o.backdrop_path&&(0,R.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o.backdrop_path),alt:"".concat(o.original_title)})||(0,R.jsx)("img",{src:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",alt:"".concat(o.original_title),width:"500",height:"281"}),(0,R.jsxs)(Z,{children:[(0,R.jsxs)(j,{children:[o.original_title,"(",o.release_date&&o.release_date.slice(0,4),")"]}),(0,R.jsxs)(k,{children:["User score: ",10*o.vote_average,"%"]}),(0,R.jsx)("h3",{children:"Genres"}),o.genres&&(0,R.jsx)(b,{children:o.genres.map((function(e){return(0,R.jsx)("li",{children:e.name},e.id)}))}),(0,R.jsx)(y,{children:"Overview"}),(0,R.jsx)("p",{children:o.overview})]})]}),(0,R.jsxs)(w,{children:[(0,R.jsx)("li",{children:(0,R.jsx)(U.Z,{to:"/movies/".concat(a,"/cast"),state:{from:null===s||void 0===s||null===(n=s.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,R.jsx)("li",{children:(0,R.jsx)(U.Z,{to:"/movies/".concat(a,"/reviews"),state:{from:null===s||void 0===s||null===(r=s.state)||void 0===r?void 0:r.from},children:"Reviews"})})]}),(0,R.jsx)(h.j3,{})]})}},9177:function(e,t,n){n.d(t,{Hg:function(){return u},on:function(){return l},TP:function(){return d},M1:function(){return p},tx:function(){return f}});var r=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i),o="051044c279aad319532da903b2292510",u=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c().defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o),e.next=3,c().get("".concat(c().defaults.baseURL));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c().defaults.baseURL="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=1&language=en-US"),e.next=3,c().get("".concat(c().defaults.baseURL));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"),e.next=3,c().get("".concat(c().defaults.baseURL));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e.next=3,c().get("".concat(c().defaults.baseURL));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),e.next=3,c().get("".concat(c().defaults.baseURL));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=770.c75e9165.chunk.js.map