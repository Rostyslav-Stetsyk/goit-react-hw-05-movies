"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{22:function(n,e,r){r.d(e,{Ph:function(){return u},jP:function(){return s},mU:function(){return c}});var t=r(861),i=r(687),a=r.n(i),o=r(243);o.Z.defaults.baseURL="".concat("https://api.themoviedb.org/3");var s=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/week",{params:{language:"en-US",page:e},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:r});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),c=function(){var n=(0,t.Z)(a().mark((function n(e,r,t){var i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e).concat(t),{params:{language:"en-US"},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:r});case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{params:{language:"en-US",page:1,query:e},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:r});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},257:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,i,a,o,s,c,u,p=r(861),d=r(439),h=r(687),l=r.n(h),f=r(689),x=r(87),g=r(791),j=r(22),v=r(168),Z=r(686),m=Z.Z.div(t||(t=(0,v.Z)(["\n  padding: 0 30px;\n  padding-top: 120px;\n  max-width: 1660px;\n  margin: 0 auto;\n"]))),w=Z.Z.section(i||(i=(0,v.Z)(["\n  margin-top: 30px;\n  display: flex;\n  gap: 30px;\n"]))),I=Z.Z.h2(a||(a=(0,v.Z)(["\n  font-size: x-large;\n  font-weight: 600;\n  line-height: 1.3;\n"]))),N=Z.Z.p(o||(o=(0,v.Z)(["\n  margin-top: 10px;\n"]))),b=Z.Z.h3(s||(s=(0,v.Z)(["\n  margin-top: 10px;\n  font-size: large;\n  line-height: 1.3;\n"]))),z=Z.Z.section(c||(c=(0,v.Z)(["\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),U=Z.Z.h3(u||(u=(0,v.Z)(["\n  font-size: large;\n  line-height: 1.3;\n"]))),k=r(155),J=r(820),Y=r(184),y=function(){var n,e,r=(0,f.UO)().movieId,t=(0,f.TH)(),i=(0,g.useRef)(),a=(0,g.useState)(""),o=(0,d.Z)(a,2),s=o[0],c=o[1],u=(0,g.useState)(""),h=(0,d.Z)(u,2),v=h[0],Z=h[1],y=(0,g.useState)(0),B=(0,d.Z)(y,2),R=B[0],T=B[1],D=(0,g.useState)(""),M=(0,d.Z)(D,2),W=M[0],A=M[1],G=(0,g.useState)([]),O=(0,d.Z)(G,2),C=O[0],Q=O[1];return(0,g.useEffect)((function(){if(r){var n=function(){var n=(0,p.Z)(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i.current=new AbortController,e=i.current.signal,n.next=5,(0,j.mU)(r,e,"");case 5:t=n.sent,c(t.poster_path),Z(t.title),T(t.vote_average),A(t.overview),Q(t.genres),n.next=15;break;case 13:n.prev=13,n.t0=n.catch(0);case 15:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){return i.current.abort()}}}),[r]),(0,Y.jsxs)(m,{children:[(0,Y.jsx)(k.V,{to:null!==(n=null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/goit-react-hw-05-movies",children:(0,Y.jsx)(J.kyg,{})}),(0,Y.jsxs)(w,{children:[(0,Y.jsx)("img",{width:"300px",height:"450px",src:s?"https://image.tmdb.org/t/p/w300".concat(s):"https://i.imgur.com/GhqsTtz.jpg",alt:v}),(0,Y.jsxs)("div",{children:[(0,Y.jsx)(I,{children:v}),(0,Y.jsxs)(N,{children:["User Score: ",R," IMDb"]}),(0,Y.jsx)(b,{children:"Overview"}),(0,Y.jsx)(N,{children:W}),(0,Y.jsx)(b,{children:"Genres"}),(0,Y.jsx)(N,{children:C.map((function(n){return n.name})).join(" ")})]})]}),(0,Y.jsxs)(z,{children:[(0,Y.jsx)(U,{children:"Additional information"}),(0,Y.jsx)(x.rU,{to:"/goit-react-hw-05-movies/movies/".concat(r,"/cast"),children:"Cast"}),(0,Y.jsx)(x.rU,{to:"/goit-react-hw-05-movies/movies/".concat(r,"/reviews"),children:"Reviews"})]}),(0,Y.jsx)(f.j3,{})]})}},155:function(n,e,r){r.d(e,{V:function(){return u},p:function(){return c}});var t,i,a=r(168),o=r(686),s=r(87),c=o.Z.div(t||(t=(0,a.Z)(["\n  padding: 0 30px;\n  padding-top: 120px;\n  max-width: 1660px;\n  margin: 0 auto;\n"]))),u=(0,o.Z)(s.rU)(i||(i=(0,a.Z)(["\n  display: inline-block;\n  background: transparent;\n  color: white;\n  background-color: #7f8ff4;\n  font: inherit;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  transition: all 200ms ease-in;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  padding: 12px 36px;\n\n  :hover {\n    background: #7183f2;\n  }\n\n  :active {\n    background: #7f8ff4;\n    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  }\n"])))}}]);
//# sourceMappingURL=257.38e5e847.chunk.js.map