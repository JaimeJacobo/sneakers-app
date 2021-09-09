(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},36:function(e,t,n){},55:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(29),r=n.n(c),i=(n(36),n(2)),o=n(8),l=n.n(o),u=(n(55),n(7)),d=n(11),j=n.n(d),b=n(12),h=n(3),m=Object(s.createContext)(null),O=(n(28),n(0)),p=function(){var e=Object(s.useContext)(m),t=e.loggedUser,n=e.setLoggedUser,a=Object(s.useState)(!1),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(O.jsx)(O.Fragment,{children:r?Object(O.jsx)(h.a,{to:"/"}):Object(O.jsxs)("div",{className:"Navbar",children:[Object(O.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(O.jsx)("p",{children:"Sneakers App"}),Object(O.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(O.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(u.b,{className:"nav-link",to:"/",children:"Home"})}),!t.id&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("p",{children:Object(O.jsx)(u.b,{className:"nav-link ",to:"/signup",children:"Sign Up"})})}),!t.id&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("p",{children:Object(O.jsx)(u.b,{className:"nav-link",to:"/login",children:"Log In"})})}),t.id&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("p",{children:Object(O.jsx)(u.b,{className:"nav-link",to:"/profile",children:"Profile"})})}),t.id&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("p",{children:Object(O.jsx)(u.b,{className:"nav-link",to:"/sneakers",children:"View Sneakers"})})}),t.id&&Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("p",{className:"nav-link",type:"button","data-toggle":"modal","data-target":"#exampleModal",children:"Log out"})})]}),Object(O.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(O.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(O.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]}),Object(O.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(O.jsx)("div",{class:"modal-dialog",role:"document",children:Object(O.jsxs)("div",{class:"modal-content",children:[Object(O.jsxs)("div",{class:"modal-header",children:[Object(O.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Are you sure you want to log out?"}),Object(O.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(O.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(O.jsxs)("div",{class:"modal-footer",children:[Object(O.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"NO! I want to stay \ud83d\ude04"}),Object(O.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){l()({method:"POST",url:"/api/auth/logout"}).then(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(!0);case 2:n({});case 3:case"end":return e.stop()}}),e)})))).catch((function(e){return console.log(e)}))},children:"Yes, log out \ud83d\udc4b"})]})]})})})]})})},x=function(){var e=Object(s.useContext)(m).setActualPage,t=Object(s.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(i.a)(d,2),b=j[0],h=j[1],x=Object(s.useState)(!1),g=Object(i.a)(x,2),f=g[0],v=g[1],k=Object(s.useState)(!1),y=Object(i.a)(k,2),S=y[0],N=y[1],w=Object(s.useState)(!1),C=Object(i.a)(w,2),L=C[0],M=C[1];return Object(s.useEffect)((function(){e("home");for(var t=document.getElementsByClassName("sneaker"),n=0,s=function(e){setTimeout((function(){t[e].classList.remove("display-none"),t[e].classList.add("slideLeft")}),n),n+=500},a=0;a<t.length;a++)s(a)}),[]),Object(O.jsxs)("div",{className:"Home",children:[Object(O.jsx)(p,{}),Object(O.jsx)("h2",{children:"Welcome to Sneakers App"}),Object(O.jsxs)("div",{className:"intro slideRight",children:[Object(O.jsx)("p",{children:"Want to check these sneakers?"}),Object(O.jsx)("p",{children:"Click on the names and get their info!"})]}),Object(O.jsxs)("div",{className:"snickers-list slideRight",children:[Object(O.jsx)("p",{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:"Nike - Air Jordan 1 Retro High x Travis Scott ''Cactus Jack''"}),Object(O.jsx)("p",{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:"Converse - Chuck Taylor All-Star Vulcanized Hi Off-White ''The Ten''"}),Object(O.jsx)("p",{onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},children:"Adidas - Yeezy Boost 350 V2 Ash Pearl"}),Object(O.jsx)("p",{onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},children:"Nike - Dunk Low Georgetown"}),Object(O.jsx)("p",{onMouseEnter:function(){return N(!0)},onMouseLeave:function(){return N(!1)},children:"Adidas - PW Solar HU NMD Inspiration"}),Object(O.jsx)("p",{onMouseEnter:function(){return M(!0)},onMouseLeave:function(){return M(!1)},children:"Converse - Chuck 70 CDG Play Comme Des Garcon"})]}),Object(O.jsx)("img",{style:a?{right:"250px",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"},className:"sneaker sneaker__travis display-none",src:"/img/travis_scott_jordan.png",alt:"Nike Travis Scott Jordan"}),Object(O.jsx)("img",{style:l?{right:"250px",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"},className:"sneaker sneaker__taylor display-none",src:"/img/converse-chuck-taylor.png",alt:"Converse Chuck Taylor"}),Object(O.jsx)("img",{style:b?{right:"250px",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"},className:"sneaker sneaker__yeezy display-none",src:"/img/adidas-yeezy-boost.png",alt:"Adidas Yeezy Boost"}),Object(O.jsx)("img",{style:f?{right:"250px",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"},className:"sneaker sneaker__dunk display-none",src:"/img/nike-dunk-low.png",alt:"Nike Dunk Low"}),Object(O.jsx)("img",{style:S?{right:"250px",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"},className:"sneaker sneaker__solar display-none",src:"/img/pw-solar.png",alt:"PW Solar"}),Object(O.jsx)("img",{style:L?{right:"250px",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"},className:"sneaker sneaker__chuck display-none",src:"/img/chuck-70.png",alt:"Chuck 70"})]})},g=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useContext)(m),r=c.signupSuccess,o=c.setSignupSuccess,u=c.setActualPage,d=c.errorMessage,x=c.setErrorMessage,g=c.setLoggedUser;Object(s.useEffect)((function(){r&&o(!1),u("login")}),[]);return Object(O.jsx)(O.Fragment,{children:n?Object(O.jsx)(h.a,{to:"/profile"}):Object(O.jsxs)("div",{style:{height:"calc(var(--vh, 1vh) * 100)"},children:[Object(O.jsx)("div",{style:{position:"fixed",width:"100%"},children:Object(O.jsx)(p,{})}),Object(O.jsxs)("div",{className:"Login container",children:[Object(O.jsx)("div",{style:{display:!d&&"none"},class:"alert alert-danger zoomer",role:"alert",children:d}),Object(O.jsxs)("div",{className:"form-signin",children:[Object(O.jsx)("img",{className:"jordans-image",src:"/img/air-jordan-red.png",alt:"Jordans red"}),Object(O.jsx)("p",{class:"Login__mainText h3 mb-3 font-weight-normal",children:"Log in"})," ",Object(O.jsxs)("div",{className:"Login__buttonAndMsg",children:[Object(O.jsx)("input",{type:"text",id:"username",class:"form-control",placeholder:"Username",required:"",autofocus:""}),Object(O.jsx)("input",{type:"password",id:"password",class:"form-control",placeholder:"Password",required:""})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{class:"btn btn-lg btn-block red",onClick:function(){l()({method:"POST",url:"/api/auth/login",data:{username:document.getElementById("username").value,password:document.getElementById("password").value}}).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.data.message){e.next=4;break}x(t.data.message),e.next=8;break;case 4:return n=t.data,s=n.id,c=n.username,e.next=7,g({id:s,username:c});case 7:a(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},children:"Log in"}),Object(O.jsx)("p",{class:"mt-3 mb-3 text-muted",children:"\xa9 Enjoy the experience \ud83d\ude04"})]})]})]})]})})},f=n(15),v=n(19),k=function(){var e=Object(s.useContext)(m),t=e.userInput,n=e.setUserInput,a=e.errorMessage,c=e.setErrorMessage,r=e.signupSuccess,i=e.setSignupSuccess,o=e.setActualPage;Object(s.useMemo)((function(){o("signup")}),[]);var u=function(e,s){n(Object(v.a)(Object(v.a)({},t),{},Object(f.a)({},s,e.target.value)))},d=function(){document.getElementById("password").value===document.getElementById("confirmPassword").value?l()({method:"POST",url:"/api/auth/signup",data:{username:t.username,password:t.password}}).then((function(e){console.log(e.data),e.data.message?c(e.data.message):(c(""),i(!0))})).catch((function(e){console.log(e)})):c("Passwords don't match. Please try again")};return r?Object(O.jsx)(h.a,{to:"/login"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{position:"fixed",width:"100%"},children:Object(O.jsx)(p,{})}),Object(O.jsxs)("div",{className:"Login container",children:[Object(O.jsx)("div",{style:{display:!a&&"none"},class:"alert alert-danger zoomer",role:"alert",children:a}),Object(O.jsxs)("div",{className:"form-signin",children:[Object(O.jsx)("img",{className:"jordans-image",src:"/img/jordans-dior.png",alt:"Jordans yellow"}),Object(O.jsx)("p",{class:"Login__mainText h3 mb-3 font-weight-normal",children:"Sign up"}),Object(O.jsxs)("div",{className:"Login__buttonAndMsg",children:[Object(O.jsx)("input",{onChange:function(e){return u(e,"username")},type:"text",id:"username",class:"form-control",placeholder:"Username",required:"",autofocus:""}),Object(O.jsx)("input",{onChange:function(e){return u(e,"password")},type:"password",id:"password",class:"form-control",placeholder:"Password",required:""}),Object(O.jsx)("input",{onChange:function(e){return u(e,"password")},type:"password",id:"confirmPassword",class:"form-control",placeholder:"Confirm password",required:""})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{class:"btn btn-lg btn-block blue",onClick:function(){return d()},children:"Sign up"}),Object(O.jsx)("p",{class:"mt-3 mb-3 text-muted",children:"\xa9 Enjoy the experience \ud83d\ude04"})]})]})]})]})},y=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),r=Object(i.a)(c,2),o=r[0],u=r[1];Object(s.useEffect)((function(){l()({method:"GET",url:"/api/auth/check-auth"}).then(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.data.id,!e.t0){e.next=4;break}return e.next=4,a(t.data);case 4:u(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}),[]);return Object(O.jsx)(O.Fragment,{children:function(){if(o)return n.id?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{}),Object(O.jsxs)("h2",{children:["Welcome, ",n.username]})]}):Object(O.jsx)(h.a,{to:"/login"})}()})},S=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),r=Object(i.a)(c,2),o=r[0],u=r[1],d=Object(s.useState)([]),m=Object(i.a)(d,2),x=m[0],g=m[1],f=Object(s.useState)({}),v=Object(i.a)(f,2),k=v[0],y=v[1];Object(s.useEffect)((function(){l()({method:"GET",url:"/api/auth/check-auth"}).then(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.data.id,!e.t0){e.next=4;break}return e.next=4,a(t.data);case 4:return e.next=6,u(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}),[]);var S=function(){var e=document.getElementById("nameInput").value;l()({method:"POST",url:"/api/sneakers",data:{limit:30,name:e}}).then((function(e){g(e.data.results)})).catch((function(e){console.log(e)}))};return Object(O.jsx)(O.Fragment,{children:function(){if(o)return n.id?k.id?Object(O.jsx)(h.a,{to:{pathname:"sneaker-details/".concat(k.id),state:k}}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{position:"fixed",width:"100%"},children:Object(O.jsx)(p,{})}),Object(O.jsx)("h2",{children:"Search for your favorite sneakers:"}),Object(O.jsx)("input",{id:"nameInput",type:"text"}),Object(O.jsx)("button",{onClick:S,children:"Search"}),Object(O.jsx)("div",{children:x.map((function(e){return Object(O.jsxs)("div",{id:e.id,onClick:function(){return function(e){y(e)}(e)},children:[Object(O.jsx)("p",{children:e.title}),Object(O.jsx)("img",{src:e.media.smallImageUrl,alt:e.title})]})}))})]}):Object(O.jsx)(h.a,{to:"/login"})}()})},N=function(e){return console.log(e.location.state),e.location.state?Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"One Sneaker Component"})}):Object(O.jsx)("div",{children:"Under constuction"})},w=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(h.b,{path:"/",exact:!0,component:x}),Object(O.jsx)(h.b,{path:"/login",exact:!0,component:g}),Object(O.jsx)(h.b,{path:"/signup",exact:!0,component:k}),Object(O.jsx)(h.b,{path:"/profile",exact:!0,component:y}),Object(O.jsx)(h.b,{path:"/sneakers",exact:!0,component:S}),Object(O.jsx)(h.b,{path:"/sneaker-details/:id",exact:!0,component:N})]})};var C=function(){var e=Object(s.useState)({username:"",password:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(i.a)(c,2),o=r[0],d=r[1],j=Object(s.useState)(!1),b=Object(i.a)(j,2),h=b[0],p=b[1],x=Object(s.useState)(""),g=Object(i.a)(x,2),f=g[0],v=g[1],k=Object(s.useState)({}),y=Object(i.a)(k,2),S=y[0],N=y[1],C={userInput:n,setUserInput:a,errorMessage:o,setErrorMessage:d,signupSuccess:h,setSignupSuccess:p,actualPage:f,setActualPage:v,loggedUser:S,setLoggedUser:N};return Object(s.useMemo)((function(){l()({method:"GET",url:"/api/auth/check-auth"}).then((function(e){var t=e.data,n=t.id,s=t.username;N({id:n,username:s})})).catch((function(e){console.log(e)}))}),[]),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m.Provider,{value:C,children:Object(O.jsx)(u.a,{children:Object(O.jsx)(w,{})})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.f629fabc.chunk.js.map