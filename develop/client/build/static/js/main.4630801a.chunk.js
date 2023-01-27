(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{79:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a,r,s,c,i,o,l,j,d=n(1),u=n.n(d),b=n(70),m=n.n(b),O=(n(79),n(17)),h=n(6),p=n(92),x=n(94),g=n(91),v=n(95),f=n(27),N=n(93),y=(Object(N.a)(a||(a=Object(f.a)(["\n  query allUsers {\n    users {\n      _id\n      firstName\n      lastName\n      username\n      email\n      profilePicture\n      friends {\n        _id\n        firstName\n        lastName\n      }\n    }\n  }\n"]))),Object(N.a)(r||(r=Object(f.a)(["\n  query singleUser($userId: ID!) {\n    user(userId: $userId) {\n      _id\n      firstName\n      lastName\n      username\n      email\n      profilePicture\n      friends {\n        _id\n        firstName\n        lastName\n      }\n      post {\n        _id\n        userId\n        content\n      }\n    }\n  }\n"])))),I=Object(N.a)(s||(s=Object(f.a)(["\n  query me {\n    me {\n      _id\n      firstName\n      lastName\n      username\n      email\n      profilePicture\n      friends {\n        _id\n        firstName\n        lastName\n      }\n      post {\n        _id\n        userId\n        content\n      }\n    }\n  }\n"]))),w=Object(N.a)(c||(c=Object(f.a)(["\nquery post {\n    _id\n    userId\n    content\n}\n"]))),k=Object(N.a)(i||(i=Object(f.a)(["\nquery posts {\n  query post {\n    _id\n    userId\n    content\n  }\n}\n"]))),S=n(3),_=function(){var e=Object(h.o)().userId,t=Object(v.a)(e?y:I,{variables:{userId:e}}),n=t.loading,a=t.data,r=(null===a||void 0===a?void 0:a.me)||(null===a||void 0===a?void 0:a.user)||{};return n?Object(S.jsx)("div",{children:"Loading..."}):null!==r&&void 0!==r&&r.username?void 0:Object(S.jsxs)("section",{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(O.b,{className:"btn btn-lg btn-primary m-2",to:"/Login",children:"Login"}),Object(S.jsx)("p",{children:" "}),Object(S.jsx)(O.b,{className:"btn btn-lg btn-light m-2",to:"/Register",children:"Register"})]}),Object(S.jsx)("p",{children:"You need to be logged in. Use the navigation links above to sign up or log in!"})]})},$=n(8),C=n(15),L=n(12),P=n(26),q=n(9),T=n(89),D=Object(N.a)(o||(o=Object(f.a)(["\n    mutation login($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),U=Object(N.a)(l||(l=Object(f.a)(["\n    mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {\n        addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password){\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),Y=Object(N.a)(j||(j=Object(f.a)(["\n     mutation addPost($userId: ID!, $content: String!) {\n        addPost(userId: $userId, content: $content) {\n            post {\n            _id\n            userId\n            content\n            }\n         }\n    }\n "]))),F=n(31),B=n(32),E=n(41),R=new(function(){function e(){Object(F.a)(this,e)}return Object(B.a)(e,[{key:"getUser",value:function(){return Object(E.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){return Object(E.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){var t=Object(E.a)(e);console.log(t.data),localStorage.setItem("id_token",e),window.location.assign("/me/".concat(t.data._id))}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),z=function(e){var t=Object(d.useState)({username:"",password:""}),n=Object(q.a)(t,2),a=n[0],r=n[1],s=Object(T.a)(D),c=Object(q.a)(s,2),i=c[0],o=c[1],l=o.error,j=o.data,u=function(e){var t=e.target,n=t.name,s=t.value;r(Object(P.a)(Object(P.a)({},a),{},Object(L.a)({},n,s)))},b=function(){var e=Object(C.a)(Object($.a)().mark((function e(t){var n,s;return Object($.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),console.log(a),e.prev=3,e.next=6,i({variables:Object(P.a)({},a)});case 6:n=e.sent,s=n.data,R.login(s.login.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:r({username:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(S.jsx)("div",{className:"col-12 col-lg-10",children:Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Login"}),Object(S.jsxs)("div",{className:"card-body",children:[j?Object(S.jsx)("p",{children:Object(S.jsx)("div",{children:"Loading..."})}):Object(S.jsxs)("form",{onSubmit:b,children:[Object(S.jsx)("input",{placeholder:"Your username",name:"username",type:"text",value:a.username,onChange:u,required:!0}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",value:a.password,onChange:u,required:!0}),Object(S.jsx)("button",{className:"btn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),l&&Object(S.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:l.message})]})]})})})},A=function(){var e=Object(h.o)().userId,t=Object(v.a)(y,{variables:{userId:e}}),n=(t.loading,t.data);return console.log(e),console.log(Object(h.o)()),console.log("_-----------_"),console.log(n),Object(S.jsx)(d.Fragment,{children:!!n&&Object(S.jsx)("div",{children:Object(S.jsxs)("h1",{children:["$",n.name,"'s Profile"]})})})},H=function(){var e=Object(d.useState)({firstName:"",lastName:"",username:"",email:"",password:""}),t=Object(q.a)(e,2),n=t[0],a=t[1],r=Object(T.a)(U),s=Object(q.a)(r,2),c=s[0],i=s[1],o=i.error,l=i.data,j=function(e){var t=e.target,r=t.name,s=t.value;a(Object(P.a)(Object(P.a)({},n),{},Object(L.a)({},r,s)))},u=function(){var e=Object(C.a)(Object($.a)().mark((function e(t){var r,s;return Object($.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),console.log(n),e.prev=3,e.next=6,c({variables:Object(P.a)({},n)});case 6:r=e.sent,s=r.data,R.login(s.addUser.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:a({firstName:"",lastName:"",username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(S.jsx)("div",{className:"col-12 col-lg-10",children:Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Register"}),Object(S.jsxs)("div",{className:"card-body",children:[l?Object(S.jsxs)("p",{children:["Success! You may now head"," ",Object(S.jsx)(O.b,{to:"/",children:"back to Login"})]}):Object(S.jsxs)("form",{onSubmit:u,children:[Object(S.jsx)("input",{placeholder:"Your first name",name:"firstName",type:"text",value:n.firstName,onChange:j}),Object(S.jsx)("input",{placeholder:"Your last name",name:"lastName",type:"text",value:n.lastName,onChange:j}),Object(S.jsx)("input",{placeholder:"Your username",name:"username",type:"text",value:n.username,onChange:j}),Object(S.jsx)("input",{placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:j}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",value:n.password,onChange:j}),Object(S.jsx)("button",{className:"btn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),o&&Object(S.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})]})})})},J=function(e){var t=e.posts,n=Object(v.a)(k),a=n.loading,r=n.data;return t?a?Object(S.jsx)("div",{children:"Loading..."}):(console.log(r),Object(S.jsx)("div",{children:t&&t.map((function(e){return Object(S.jsxs)("div",{children:[Object(S.jsxs)("h4",{children:[e.userID," ",Object(S.jsx)("br",{}),Object(S.jsx)("spam",{style:{fontSize:"1rem"},children:"made this post on"})]}),Object(S.jsx)("div",{children:Object(S.jsx)("p",{children:e.content})})]},e._id)}))})):Object(S.jsx)("h3",{children:"no posts yet"})},M=function(){var e=Object(h.o)().userId,t=Object(v.a)(e?y:I,{variables:{userId:e}}),n=t.loading,a=t.data;return n?Object(S.jsx)("div",{children:"Loading..."}):(console.log(a),Object(S.jsxs)("section",{children:[Object(S.jsxs)("h4",{children:["welcome to your timeline ",a.user.firstName]}),Object(S.jsx)("div",{children:n?Object(S.jsx)("div",{children:" Loading... "}):Object(S.jsx)(J,{})})]}))},G=function(e){var t=e.userId,n=Object(d.useState)(""),a=Object(q.a)(n,2),r=a[0],s=a[1],c=Object(T.a)(Y),i=Object(q.a)(c,2),o=i[0],l=i[1].error,j=function(){var e=Object(C.a)(Object($.a)().mark((function e(n){var a;return Object($.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,o({variables:{userId:t,content:r}});case 4:a=e.sent,a.data,s(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Create A Post"}),Object(S.jsxs)("form",{className:"postFormContent",onSubmit:j,children:[Object(S.jsx)("div",{className:"postInput",children:Object(S.jsx)("textarea",{name:"postArea",placeholder:"Start Typing...",value:r,className:"formInput",onChange:function(e){return s(e.target.value)}})}),Object(S.jsx)("div",{className:"postSubmitButton",children:Object(S.jsx)("button",{className:"btn",type:"submit",children:"Create Post"})}),l&&Object(S.jsx)("div",{children:"Something is not a-okay..."})]})]})},K=function(){var e=Object(h.o)().userId,t=Object(v.a)(y,{variables:{userId:e}}),n=t.loading,a=t.data,r=(null===a||void 0===a?void 0:a.user)||{};return console.log(r._id),n?Object(S.jsx)("div",{children:"Loading..."}):Object(S.jsx)("div",{children:Object(S.jsx)(G,{})})},Q=function(){return Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:"Header"})})},V=n(72),W=["to","children"];function X(e){var t=e.to,n=e.children,a=Object(V.a)(e,W),r=Object(h.p)(t),s=Object(h.k)({path:r.pathname,end:!0});return Object(S.jsx)("li",{className:s?"active":"",children:Object(S.jsx)(O.b,Object(P.a)(Object(P.a)({to:t},a),{},{children:n}))})}var Z=function(){var e=Object(h.o)().userId,t=Object(v.a)(e?y:I,{variables:{userId:e}},w,k).loading,n=R.loggedIn()?R.getToken():null;if(console.log(n),!n)return!1;var a=Object(E.a)(n);return t?Object(S.jsx)("div",{children:"Loading..."}):(console.log(e),console.log(a.data),Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)(X,{to:"/me/".concat(a.data._id),children:"Home"}),Object(S.jsx)(X,{to:"/me/".concat(a.data._id,"/createpost"),children:"Post"}),Object(S.jsx)(X,{to:"/",children:"Log Out"})," "]})}))},ee=function(){return Object(S.jsx)("div",{className:"footer",children:Object(S.jsx)("div",{children:Object(S.jsx)(Z,{})})})},te=(n(82),new p.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql",cache:new x.a}));var ne=function(){return Object(S.jsx)(g.a,{client:te,children:Object(S.jsx)(O.a,{children:Object(S.jsxs)("div",{className:"flex-column justify-center align-center min-100-vh bg-primary",children:[Object(S.jsx)(Q,{}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)(h.c,{children:[Object(S.jsx)(h.a,{path:"/",element:Object(S.jsx)(_,{})}),Object(S.jsx)(h.a,{path:"/register",element:Object(S.jsx)(H,{})}),Object(S.jsx)(h.a,{path:"/login",element:Object(S.jsx)(z,{})}),Object(S.jsx)(h.a,{path:"/profile/:userId",element:Object(S.jsx)(A,{})}),Object(S.jsx)(h.a,{path:"/me/:userId",element:Object(S.jsx)(M,{})}),Object(S.jsx)(h.a,{path:"/me/:userId/createpost",element:Object(S.jsx)(K,{})})]})}),Object(S.jsx)(ee,{})]})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};m.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[83,1,2]]]);
//# sourceMappingURL=main.4630801a.chunk.js.map