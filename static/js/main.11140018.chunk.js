(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{100:function(e,t){},130:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(13),r=a.n(s),i=(a(73),a(100),a(187)),o=a(8),l=a(176),j=a(179),d=a(85),b=a.n(d),u=a(181),p=a(61),O=a(86),f=a.n(O),g=a(87),h=a.n(g),v=a(59),m=a.n(v),x=a(14),_=a(2),y=Object(l.a)({root:{width:"100%",background:"rgb(53, 51, 51)",color:"white",position:"fixed",bottom:"0",zIndex:"100"}});function w(){var e=Object(x.f)(),t=y(),a=c.a.useState(0),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){0==r?e.push("MovieDb/"):1==r?e.push("MovieDb/movies"):2==r?e.push("MovieDb/series"):e.push("MovieDb/search")}),[r]),Object(_.jsxs)(j.a,{value:r,onChange:function(e,t){i(t)},showLabels:!0,className:t.root,children:[Object(_.jsx)(u.a,{style:{color:p.a[100]},label:"Trending",icon:Object(_.jsx)(b.a,{})}),Object(_.jsx)(u.a,{style:{color:p.a[100]},label:"Movies",icon:Object(_.jsx)(f.a,{})}),Object(_.jsx)(u.a,{style:{color:p.a[100]},label:"TV Series",icon:Object(_.jsx)(h.a,{})}),Object(_.jsx)(u.a,{style:{color:p.a[100]},label:"Search",icon:Object(_.jsx)(m.a,{})})]})}var S=a(64);var k=function(){return Object(_.jsxs)("span",{className:"logo",onClick:function(){return window.scroll(0,0)},children:[Object(_.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/2184/2184561.png",className:"logo-img"}),Object(_.jsx)("h3",{children:"MovieDB"})]})},N=a(23),C=a.n(N),M=a(184),P="https://image.tmdb.org/t/p/w500",T="https://www.movienewz.com/img/films/poster-holder.jpg",D=(a(130),a(12)),z=a(18),G=a.n(z),E=a(26),B=a(191),I=a(182),U=a(135),F=a(183),J=a(88),L=a.n(J),V=(a(132),Object(l.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}})));function q(e){var t,a=e.children,c=e.type,s=e.id,r=V(),i=Object(n.useState)(!1),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(n.useState)(),u=Object(o.a)(b,2),p=u[0],O=u[1],f=Object(n.useState)(),g=Object(o.a)(f,2),h=g[0],v=g[1],m=function(){var e=Object(E.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.themoviedb.org/3/".concat(c,"/").concat(s,"?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US"));case 2:t=e.sent,a=t.data,console.log(a),O(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(E.a)(G.a.mark((function e(){var t,a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.themoviedb.org/3/".concat(c,"/").concat(s,"/videos?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US"));case 2:a=e.sent,n=a.data,console.log(n),v(null===(t=n.results[0])||void 0===t?void 0:t.key);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m(),x()}),[]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",(t={onClick:m,className:"media"},Object(D.a)(t,"onClick",(function(){d(!0)})),Object(D.a)(t,"children",a),t)),Object(_.jsx)(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:j,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500},children:Object(_.jsx)(U.a,{in:j,children:p&&Object(_.jsx)("div",{className:r.paper,children:Object(_.jsxs)("div",{className:"ContentModal",children:[Object(_.jsx)("img",{className:"ContentModal__portrait",src:p.poster_path?"".concat(P,"/").concat(p.poster_path):T,alt:p.title||p.name}),Object(_.jsx)("img",{className:"ContentModal__landscape",src:p.backdrop_path?"".concat(P,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.title||p.name}),Object(_.jsxs)("div",{className:"ContentModal__about",children:[Object(_.jsxs)("span",{className:"ContentModal__title",children:[p.title||p.name," (",(p.release_date||p.first_air_date||"----").substring(0,4),")"]}),p.tagline&&Object(_.jsx)("i",{className:"tagline",children:p.tagline}),Object(_.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(_.jsx)(F.a,{style:{width:"100%",marginTop:"20px"},variant:"contained",startIcon:Object(_.jsx)(L.a,{}),color:"secondary",target:"_blank",href:"https://www.youtube.com/watch?v=".concat(h),children:"Watch the trailer."})]})]})})})})]})}var A=Object(l.a)((function(e){return{badge:{fontSize:15,padding:"10px 10px"}}}));var R=function(e){var t=e.id,a=e.title,n=e.poster_path,c=e.vote_average,s=e.release_date,r=e.type,i=A();return console.log(t),Object(_.jsxs)(q,{type:r,id:t,children:[Object(_.jsx)(M.a,{badgeContent:c,color:c>6?"primary":"secondary",classes:{badge:i.badge}}),Object(_.jsx)("img",{className:"poster",src:n?"".concat("https://image.tmdb.org/t/p/w300").concat(n):T,alt:a}),Object(_.jsx)("b",{className:"title",children:a}),Object(_.jsxs)("span",{className:"subtitle",children:[s,Object(_.jsx)("span",{className:"subtitle",children:"tv"===r?"TV Series":"Movie"})]})]})},W=(a(63),a(190)),H=a(185),K=a(89),Q=(a(133),Object(l.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}))),X=Object(K.a)({palette:{type:"dark"}});function Y(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a,c=Q();return Object(_.jsx)(H.a,{theme:X,children:Object(_.jsx)("div",{className:"paging",children:Object(_.jsx)("div",{className:c.root,children:Object(_.jsx)(W.a,{color:"primary",count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a}})})})})}var Z=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)(),d=Object(o.a)(j,2),b=(d[0],d[1],"https://api.themoviedb.org/3/trending/all/week?api_key=f2d277071b3575e2362951ad0c7a09bf&page=".concat(i));return console.log(i),Object(n.useEffect)((function(){fetch(b).then((function(e){return e.json()})).then((function(e){console.log(e),c(e.results)}))}),[i]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"pagetitle",children:"Trending Today"}),Object(_.jsx)("div",{className:"Trending",children:a&&a.map((function(e){return Object(_.jsx)(R,{id:e.id,type:e.media_type,vote_average:e.vote_average,title:e.title||e.name,release_date:e.release_date||e.first_air_date,poster_path:e.poster_path},e.id)}))}),Object(_.jsx)(Y,{setPage:l})]})},$=a(15),ee=a(192);var te=function(e){var t=e.type,a=e.genres,c=e.setGenres,s=e.selectedGenres,r=e.setSelectedGenres,i=e.setPage,o=function(){var e=Object(E.a)(G.a.mark((function e(){var n,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.themoviedb.org/3/genre/".concat(t,"/list?api_key=").concat("f2d277071b3575e2362951ad0c7a09bf","&language=en-US"));case 2:n=e.sent,s=n.data,c(s.genres),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o(),function(){c({})}}),[]),Object(_.jsxs)("div",{children:[s.map((function(e){return Object(_.jsx)(ee.a,{style:{margin:4},label:e.name,clickable:!0,color:"primary",size:"small",onDelete:function(){return function(e){c([].concat(Object($.a)(a),[e])),r(s.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)})),a.map((function(e){return Object(_.jsx)(ee.a,{style:{margin:4},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){r([].concat(Object($.a)(s),[e])),c(a.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)}))]})},ae=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))};var ne=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)([]),d=Object(o.a)(j,2),b=d[0],u=d[1],p=Object(n.useState)([]),O=Object(o.a)(p,2),f=O[0],g=O[1],h=Object(n.useState)(),v=Object(o.a)(h,2),m=v[0],x=v[1],y=ae(f);console.log(y);var w="https://api.themoviedb.org/3/discover/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&sort_by=popularity.desc&page=".concat(i,"&with_genres=").concat(y);console.log(i);var S=function(){var e=Object(E.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(t);case 2:a=e.sent,n=a.data,c(n.results),x(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("totalPages: "+m),Object(n.useEffect)((function(){S(w)}),[y,i]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"pagetitle",children:"Discover Movies"}),Object(_.jsx)(te,{type:"movie",genres:b,setGenres:u,selectedGenres:f,setSelectedGenres:g,setPage:l}),Object(_.jsx)("div",{className:"Trending",children:a&&a.map((function(e){return Object(_.jsx)(R,{id:e.id,type:"movie",vote_average:e.vote_average,title:e.title,release_date:e.release_date||e.first_air_date,poster_path:e.poster_path},e.id)}))}),Object(_.jsx)(Y,{setPage:l,numOfPages:m})]})};var ce=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)([]),d=Object(o.a)(j,2),b=d[0],u=d[1],p=Object(n.useState)([]),O=Object(o.a)(p,2),f=O[0],g=O[1],h=Object(n.useState)(),v=Object(o.a)(h,2),m=v[0],x=v[1],y=ae(f);console.log(y);var w="https://api.themoviedb.org/3/discover/tv?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&sort_by=popularity.desc&page=1&with_genres=".concat(y,"&with_watch_monetization_types=flatrate&page=").concat(i);console.log(i);var S=function(){var e=Object(E.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,C.a.get(t);case 3:a=e.sent,n=a.data,c(n.results),x(n.total_pages),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("totalPages: "+m),Object(n.useEffect)((function(){S(w)}),[y,i]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"pagetitle",children:"Discover Series"}),Object(_.jsx)(te,{type:"tv",genres:b,setGenres:u,selectedGenres:f,setSelectedGenres:g,setPage:l}),Object(_.jsx)("div",{className:"Trending",children:a&&a.map((function(e){return Object(_.jsx)(R,{id:e.id,type:"tv",vote_average:e.vote_average,title:e.name,release_date:e.release_date||e.first_air_date,poster_path:e.poster_path},e.id)}))}),Object(_.jsx)(Y,{setPage:l,numOfPages:m})]})},se=a(188),re=a(189),ie=a(186),oe=Object(K.a)({palette:{type:"dark",primary:{main:"#fff"}}});var le=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)(),d=Object(o.a)(j,2),b=d[0],u=d[1],p=Object(n.useState)([]),O=Object(o.a)(p,2),f=O[0],g=O[1],h=Object(n.useState)("Batman"),v=Object(o.a)(h,2),x=v[0],y=v[1],w=function(){var e=Object(E.a)(G.a.mark((function e(){var t,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,C.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&query=").concat(x,"&page=").concat(i,"&include_adult=false"));case 3:t=e.sent,n=t.data,g(n.results),console.log(n),u(n.total_pages),console.log(f);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[a,i]),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{style:{marginTop:"100px"},children:[Object(_.jsxs)(H.a,{theme:oe,children:[Object(_.jsxs)("div",{style:{display:"flex",margin:"15px 0",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(_.jsx)(se.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return y(e.target.value)}}),Object(_.jsx)(F.a,{onClick:w,variant:"contained",style:{marginLeft:10},children:Object(_.jsx)(m.a,{fontSize:"large"})})]}),Object(_.jsx)("div",{style:{display:"flex",margin:"15px 0",width:"100%",justifyContent:"center",alignItems:"center"},children:Object(_.jsxs)(re.a,{onChange:function(e,t){l(1),c(t),console.log(t)},value:a,indicatorColor:"secondary",textColor:"primary",children:[Object(_.jsx)(ie.a,{style:{width:"50%",fontsize:"20px"},label:"Search Movies"}),Object(_.jsx)(ie.a,{style:{width:"50%",fontsize:"20px"},label:"Search Series"})]})})]}),Object(_.jsx)("div",{className:"pagetitle",children:x&&!f?a?Object(_.jsx)("h2",{children:"No Series Found"}):Object(_.jsx)("h2",{children:"No Movies Found"}):"Discover ".concat(a?"Tv Seies":"Movies")}),Object(_.jsx)("div",{className:"Trending",children:f&&f.map((function(e){return Object(_.jsx)(R,{id:e.id,type:a?"tv":"movie",vote_average:e.vote_average,title:e.title||e.name,release_date:e.release_date||e.first_air_date,poster_path:e.poster_path},e.id)}))}),Object(_.jsx)(Y,{setPage:l,numOfPages:b})]})})};var je=function(){return Object(_.jsxs)(S.a,{children:[Object(_.jsx)(k,{}),Object(_.jsxs)("div",{className:"movie-container",children:[Object(_.jsx)(i.a,{children:Object(_.jsxs)(x.c,{children:[Object(_.jsx)(x.a,{path:"MovieDb/",component:Z,exact:!0}),Object(_.jsx)(x.a,{path:"MovieDb/movies",component:ne}),Object(_.jsx)(x.a,{path:"MovieDb/series",component:ce}),Object(_.jsx)(x.a,{path:"MovieDb/search",component:le})]})}),Object(_.jsx)(w,{})]})]})};r.a.render(Object(_.jsx)(je,{}),document.getElementById("root"))},63:function(e,t,a){},73:function(e,t,a){}},[[134,1,2]]]);
//# sourceMappingURL=main.11140018.chunk.js.map