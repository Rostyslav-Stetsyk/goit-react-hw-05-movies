"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[303],{22:function(e,t,n){n.d(t,{Ph:function(){return c},jP:function(){return l},mU:function(){return a}});var r=n(861),o=n(687),i=n.n(o),s=n(243);s.Z.defaults.baseURL="".concat("https://api.themoviedb.org/3");var l=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/week",{params:{language:"en-US",page:t},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a=function(){var e=(0,r.Z)(i().mark((function e(t,n,r){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t).concat(r),{params:{language:"en-US"},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:n});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie",{params:{language:"en-US",page:1,query:t},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54"},signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},386:function(e,t,n){n.d(t,{c:function(){return u}});var r,o,i=n(689),s=n(87),l=n(168),a=n(686),c=a.Z.li(r||(r=(0,l.Z)(["\n  width: 300px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),h=a.Z.h2(o||(o=(0,l.Z)(["\n  font-size: large;\n  font-weight: 600;\n  padding: 16px;\n  min-height: 80px;\n  line-height: 1.3;\n  text-decoration-line: none;\n  color: #7183f2;\n"]))),p=n(184),u=function(e){var t=e.id,n=e.poster,r=e.name,o=(0,i.TH)();return(0,p.jsx)(c,{children:(0,p.jsxs)(s.rU,{to:"/goit-react-hw-05-movies/movies/"+t,state:{from:o},children:[(0,p.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w300".concat(n):"https://i.imgur.com/GhqsTtz.jpg;",alt:r,width:"300px",height:"450px"}),(0,p.jsx)(h,{children:r})]})})}},303:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(433),o=n(861),i=n(439),s=n(687),l=n.n(s),a=n(791),c=function(e,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},c(e,t)};var h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)};var p="Pixel",u="Percent",d={unit:u,value:.8};function f(e){return"number"===typeof e?{unit:u,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:p,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:u,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),d):(console.warn("scrollThreshold should be string or number"),d)}var m,g=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,r){var o,i=!1,s=0;function l(){o&&clearTimeout(o)}function a(){var a=this,c=Date.now()-s,h=arguments;function p(){s=Date.now(),n.apply(a,h)}function u(){o=void 0}i||(r&&!o&&p(),l(),void 0===r&&c>e?p():!0!==t&&(o=setTimeout(r?u:p,void 0===r?e-c:e)))}return"boolean"!==typeof t&&(r=n,n=t,t=void 0),a.cancel=function(){l(),i=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?h(h({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=f(t);return r.unit===p?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=f(t);return r.unit===p?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=h({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return a.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(a.Component),v=g,w=n(22),x=n(478),T=n(386),y=n(168),b=n(686).Z.ul(m||(m=(0,y.Z)(["\n  display: grid;\n  width: 396px;\n  grid-template-columns: repeat(auto-fill, min(300px));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 160px 48px 48px 48px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media (min-width: 712px) {\n    width: 712px;\n  }\n  @media (min-width: 1028px) {\n    width: 1028px;\n  }\n  @media (min-width: 1344px) {\n    width: 1344px;\n  }\n  @media (min-width: 1660px) {\n    width: 1660px;\n  }\n"]))),Y=n(184),E=function(){var e=(0,a.useState)([]),t=(0,i.Z)(e,2),n=t[0],s=t[1],c=(0,a.useState)(1),h=(0,i.Z)(c,2),p=h[0],u=h[1],d=(0,a.useState)(0),f=(0,i.Z)(d,2),m=f[0],g=f[1],y=(0,a.useRef)();return(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y.current=new AbortController,t=y.current.signal,e.next=5,(0,w.jP)(p,t);case 5:n=e.sent,s((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n.results))})),g(n.total_pages),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return y.current.abort()}}),[p]),(0,Y.jsx)(Y.Fragment,{children:n.length>0&&(0,Y.jsx)(v,{dataLength:n.length,next:function(){u((function(e){return e+1}))},hasMore:p<m,loader:(0,Y.jsx)(x.a,{loading:!0}),endMessage:(0,Y.jsx)("p",{style:{textAlign:"center"},children:(0,Y.jsx)("b",{children:"Yay! You have seen it all"})}),children:(0,Y.jsx)(b,{children:n.map((function(e){return(0,Y.jsx)(T.c,{id:e.id,poster:e.poster_path,name:e.title},e.id)}))})})})}}}]);
//# sourceMappingURL=303.4716da10.chunk.js.map