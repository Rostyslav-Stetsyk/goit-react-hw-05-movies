"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{22:function(n,r,t){t.d(r,{Ph:function(){return s},jP:function(){return u},mU:function(){return p}});var e=t(861),i=t(687),a=t.n(i),o=t(243);o.Z.defaults.baseURL="".concat("https://api.themoviedb.org/3");var u=function(){var n=(0,e.Z)(a().mark((function n(r,t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/week",{params:{language:"en-US",page:r},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(r,t,e){var i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(r).concat(e),{params:{language:"en-US"},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:t});case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(r,t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{params:{language:"en-US",page:1,query:r},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()},216:function(n,r,t){t.d(r,{y:function(){return f}});var e,i,a,o=t(689),u=t(87),p=t(168),s=t(686),c=s.Z.li(e||(e=(0,p.Z)(["\n  width: 300px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),d=s.Z.h2(i||(i=(0,p.Z)(["\n  font-size: large;\n  font-weight: 600;\n  padding: 16px;\n  min-height: 80px;\n  line-height: 1.3;\n  text-decoration-line: none;\n  color: #7183f2;\n"]))),x=t(184),l=function(n){var r=n.id,t=n.poster,e=n.name,i=(0,o.TH)();return(0,x.jsx)(c,{children:(0,x.jsxs)(u.rU,{to:"/goit-react-hw-05-movies/movies/"+r,state:{from:i},children:[(0,x.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w300".concat(t):"https://i.imgur.com/GhqsTtz.jpg;",alt:e,width:"300px",height:"450px"}),(0,x.jsx)(d,{children:e})]})})},h=s.Z.ul(a||(a=(0,p.Z)(["\n  display: grid;\n  width: 396px;\n  grid-template-columns: repeat(auto-fill, min(300px));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 48px 48px 48px 48px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media (min-width: 712px) {\n    width: 712px;\n  }\n  @media (min-width: 1028px) {\n    width: 1028px;\n  }\n  @media (min-width: 1344px) {\n    width: 1344px;\n  }\n  @media (min-width: 1660px) {\n    width: 1660px;\n  }\n"]))),f=function(n){var r=n.movieArr;return(0,x.jsx)(h,{children:r?r.map((function(n){return(0,x.jsx)(l,{id:n.id,poster:n.poster_path,name:n.title},n.id)})):(0,x.jsx)("p",{children:"We did not find any movies for this query. Try again."})})}},276:function(n,r,t){t.r(r),t.d(r,{default:function(){return z}});var e,i,a,o,u=t(861),p=t(439),s=t(687),c=t.n(s),d=t(87),x=t(791),l=t(203),h=t(22),f=t(168),g=t(686),m=g.Z.div(e||(e=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),b=g.Z.form(i||(i=(0,f.Z)(["\n  display: flex;\n  position: relative;\n  width: calc(100vw - 60px);\n  border: 0;\n  outline: 0;\n  padding: 10px 18px;\n"]))),v=g.Z.input(a||(a=(0,f.Z)(["\n  width: 100%;\n  background: #fff;\n  color: #a3a3a3;\n  font: inherit;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);\n  border: 0;\n  outline: 0;\n  padding: 22px 18px;\n"]))),w=g.Z.button(o||(o=(0,f.Z)(["\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-block;\n  background: transparent;\n  color: white;\n  background-color: #7f8ff4;\n  font: inherit;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  transition: all 200ms ease-in;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  padding: 12px 36px;\n\n  :hover {\n    background: #7183f2;\n  }\n\n  :active {\n    background: #7f8ff4;\n    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  }\n"]))),j=t(216),Z=t(184),I=function(){var n=(0,x.useRef)(),r=(0,d.lr)(),t=(0,p.Z)(r,2),e=t[0],i=t[1],a=(0,x.useState)(""),o=(0,p.Z)(a,2),s=o[0],f=o[1],g=(0,x.useState)([]),I=(0,p.Z)(g,2),N=I[0],y=I[1];return(0,x.useEffect)((function(){if(e){var r=function(){var r=(0,u.Z)(c().mark((function r(){var t,i;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n.current=new AbortController,t=n.current.signal,r.next=5,(0,h.Ph)(e.get("query"),t);case 5:i=r.sent,y(i.results),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){return n.current.abort()}}}),[e]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(m,{children:(0,Z.jsxs)(b,{onSubmit:function(n){n.preventDefault(),i({query:s})},children:[(0,Z.jsx)(v,{id:"search-input",type:"text",placeholder:"Search your movie",onChange:function(n){return f(n.target.value)},value:s}),(0,Z.jsx)(w,{type:"submit",children:(0,Z.jsx)(l.XPI,{})})]})}),(0,Z.jsx)(j.y,{movieArr:N})]})},N=t(689),y=t(155),k=t(820),z=function(){var n,r,t=(0,N.TH)();return(0,Z.jsxs)(y.p,{children:[(0,Z.jsx)(y.V,{to:null!==(n=null===t||void 0===t||null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/goit-react-hw-05-movies",children:(0,Z.jsx)(k.kyg,{})}),(0,Z.jsx)(I,{})]})}},155:function(n,r,t){t.d(r,{V:function(){return s},p:function(){return p}});var e,i,a=t(168),o=t(686),u=t(87),p=o.Z.div(e||(e=(0,a.Z)(["\n  padding: 0 30px;\n  padding-top: 20px;\n  max-width: 1660px;\n  margin: 0 auto;\n"]))),s=(0,o.Z)(u.rU)(i||(i=(0,a.Z)(["\n  display: inline-block;\n  background: transparent;\n  color: white;\n  background-color: #7f8ff4;\n  font: inherit;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  transition: all 200ms ease-in;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  padding: 12px 36px;\n\n  :hover {\n    background: #7183f2;\n  }\n\n  :active {\n    background: #7f8ff4;\n    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  }\n"])))}}]);
//# sourceMappingURL=276.ad319e11.chunk.js.map