(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(6),s=c.n(i),o=(c(5),c(4)),r=c(3),l=c(0);var j=function(e){var t,c=e.title,a=e.overview,n=e.poster_path,i=e.vote_average;return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w1280"+n:"https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=378&q=80"}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:c}),Object(l.jsx)("span",{className:"tag ".concat((t=i,t>=8?"green":t>=6?"orange":"red")),children:i})]}),Object(l.jsxs)("div",{className:"movie-over hide",children:[Object(l.jsxs)("h2",{children:["Overview of ",c," :"]}),Object(l.jsx)("p",{children:a})]})]})},h="https://api.themoviedb.org/3/discover/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate";var b=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),b=s[0],d=s[1],p=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),n(e.results)}))};return Object(a.useEffect)((function(){p(h)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(b),b&&(p("https://api.themoviedb.org/3/search/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&query="+b),d(""))},children:Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{className:"logo",onClick:function(){p(h)},children:[Object(l.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/2184/2184561.png",className:"logo-img"}),Object(l.jsx)("h3",{children:"Movie-DB"})]}),Object(l.jsx)("input",{className:"search",type:"search",placeholder:"search....",value:b,onChange:function(e){console.log(e.target.value),d(e.target.value)}})]})}),Object(l.jsx)("div",{className:"movie-container",children:c.map((function(e){return Object(a.createElement)(j,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.5224cda6.chunk.js.map