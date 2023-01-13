(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{80:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var s,a,c,r,i,l,o,j,u=n(1),d=n.n(u),b=n(71),m=n.n(b),O=(n(80),n(18)),h=n(6),p=n(93),x=n(95),v=n(92),g=n(96),f=n(26),N=n(94),I=(Object(N.a)(s||(s=Object(f.a)(["\n  query allUsers {\n    users {\n      _id\n      firstName\n      lastName\n      username\n      email\n      profilePicture\n      post {\n        _id\n        userId\n        content\n      }\n    }\n  }\n"]))),Object(N.a)(a||(a=Object(f.a)(["\n  query singleUser($userId: ID!) {\n    user(userId: $userId) {\n      _id\n      firstName\n      lastName\n      username\n      email\n      profilePicture\n      post {\n        _id\n        userId\n        content\n      }\n    }\n  }\n"])))),y=Object(N.a)(c||(c=Object(f.a)(["\n  query me {\n    me {\n      _id\n      firstName\n      lastName\n      username\n      email\n      profilePicture\n      post {\n        _id\n        userId\n        content\n      }\n    }\n  }\n"]))),k=Object(N.a)(r||(r=Object(f.a)(["\nquery post {\n    _id\n    userId\n    content\n}\n"]))),w=Object(N.a)(i||(i=Object(f.a)(["\nquery getPosts {\n posts {\n    _id\n    content\n    userId\n  }\n}\n"]))),P=(n(42),n(2)),A=function(){var e=Object(h.o)().userId,t=Object(g.a)(e?I:y,{variables:{userId:e}}),n=t.loading,s=t.data,a=(null===s||void 0===s?void 0:s.me)||(null===s||void 0===s?void 0:s.user)||{};return n?Object(P.jsx)("div",{children:"Loading..."}):null!==a&&void 0!==a&&a.username?void 0:Object(P.jsx)("main",{className:"hero is-fullheight columns is-vcentered is-centered is-flex",children:Object(P.jsxs)("section",{className:"landingPage ",children:[Object(P.jsx)("div",{className:"column",children:Object(P.jsx)(O.b,{className:"LPbtn button",to:"/Login",children:"Login"})}),Object(P.jsx)("div",{className:"column",children:Object(P.jsx)(O.b,{className:"LPbtn button",to:"/Register",children:"Register"})}),Object(P.jsx)("div",{className:"column",children:Object(P.jsx)("p",{className:"LPtxt",children:"You need to be logged in. Use the navigation links above to Register or Login!"})})]})})},C=n(7),S=n(15),T=n(12),D=n(17),U=n(9),L=n(90),E=Object(N.a)(l||(l=Object(f.a)(["\n    mutation login($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),R=Object(N.a)(o||(o=Object(f.a)(["\n    mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {\n        addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password){\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),q=Object(N.a)(j||(j=Object(f.a)(["\n     mutation addPost($userId: ID!, $content: String!) {\n        addPost(userId: $userId, content: $content) {\n            _id\n            userId\n            content\n         }\n    }\n "]))),Y=n(31),Q=n(32),H=n(41),J=new(function(){function e(){Object(Y.a)(this,e)}return Object(Q.a)(e,[{key:"getUser",value:function(){return Object(H.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){return Object(H.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){var t=Object(H.a)(e);localStorage.setItem("id_token",e),window.location.assign("/me/".concat(t.data._id))}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),B=function(e){var t=Object(u.useState)(null),n=Object(U.a)(t,2),s=n[0],a=n[1],c=Object(L.a)(E),r=Object(U.a)(c,2),i=r[0],l=r[1],o=l.error,j=l.data,d=function(e){var t=e.target,n=t.name,c=t.value;a(Object(D.a)(Object(D.a)({},s),{},Object(T.a)({},n,c)))};console.log(s),Object(u.useEffect)((function(){J.loggedIn()&&J.logout()}),[]);var b=function(){var e=Object(S.a)(Object(C.a)().mark((function e(t){var n,c;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),e.prev=2,e.next=5,i({variables:Object(D.a)({},s)});case 5:n=e.sent,c=n.data,J.login(c.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:a(null);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)("main",{className:"hero is-fullheight columns is-vcentered is-centered is-flex",children:Object(P.jsx)("section",{className:"loginPage",children:Object(P.jsxs)("div",{className:"",children:[j?Object(P.jsx)("p",{children:Object(P.jsx)("div",{children:"Loading..."})}):Object(P.jsxs)("form",{onSubmit:b,children:[Object(P.jsx)("input",{className:"log-input input is-large",placeholder:"Your username",name:"username",type:"text",value:s?s.username:"",onChange:d,required:!0}),Object(P.jsx)("input",{className:"pass-input input is-large",placeholder:"Your Password",name:"password",type:"password",value:s?s.password:"",onChange:d,required:!0}),Object(P.jsx)("button",{className:"loginbtn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"Sign In"})]}),o&&Object(P.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})})})},G=function(){var e=Object(h.o)().userId,t=Object(g.a)(I,{variables:{userId:e}}),n=(t.loading,t.data);return console.log(e),console.log(Object(h.o)()),console.log("_-----------_"),console.log(n),Object(P.jsx)(u.Fragment,{children:!!n&&Object(P.jsxs)("div",{className:"container is-widescreen",children:[Object(P.jsxs)("div",{className:"profile-content-section card",children:[Object(P.jsx)("section",{class:"cover-pic hero is-medium",children:Object(P.jsxs)("div",{class:"hero-body",children:[Object(P.jsx)("p",{class:"title",children:"Welcome To Your Profile"}),Object(P.jsx)("p",{class:"subtitle",children:"Edit Profile to Customize Background"})]})}),Object(P.jsx)("section",{children:Object(P.jsxs)("div",{className:"profile-info-section card-content",children:[Object(P.jsxs)("div",{className:"media",children:[Object(P.jsx)("div",{className:"media-left",children:Object(P.jsx)("figure",{className:"profile-pic image is-48x48",children:Object(P.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAANlBMVEX+/v68vb////+9vb25urze3+C5ubn7+/v39/fOz9Hc3Nzy8vLr6+vu7u7j4+PJycnU1dfDxMZ0tiDNAAAD+0lEQVR4nO2c63KjMAyFQTa+48v7v+wacml2lgTLWCaz5fzrTKb9amTZ0hEZhkuXLl26dKmp4FWnoyjnTdRaR+OdOhUIlA+M8bsYY8HLs3hAGibYyMa7Mk3+2cgzcGDwnI//inMvT4DRYoNl5dFD5+UBlQR7QzPyoLriZJitp/TEST1xAMInmAWnH8wAb2PmiRP7wTj2NmaeOL7Ts4JhD2UR67SxwHwOmvvimC40oEqWJmdm1YWmaGlGJrosDnxMNS9KHWhg3t1PDzl6HDB7ueahLnG8k4ZfaAI5C8hSmIxDftUBi6Cx5DQeQUN+OhRmmxsNeRhDLIbJBzk5jUbQaHoaxJP6bTQRQUMfN99FM31VvnEIGvJDHBSChr6qkqmYJnUoyIvDONfj5AJffPfrUFKBLabpUYyXZmP6TLzSFO5x0eGSniVDCQyjvxWvgrlkcQT5NfSBo9/3tR7ioVc/CVTapUldqvAbjtvtJvUJ4TvOTuXAp75tyIl/6G91hllW50OHtleX7QXHvinIeZpP6O2DNOO/PHw8x2gYAJRJQrAXiWTUaaYQgLQmpDtKCmY+zRC68yxEdnbOWnm+ezf8eIlnc1zaEuypK4iavZ/eyftZdUHKf8I6k/i+xugt7X7Pu3nSTBTe0vkYIplDnlGcXlNvEcyiJTlPJMk5L0vaOJf2l2jUqrVVBTCVmh0bPLHp+gC4VOoubImJhgc7DBERLFs0OX5aXXrAsdqH9CIeW0QPDNOxhXniNJkgiKINzcjZ8fIz337bwOTw4QeDRyIasvvi4yEcTOe8jOfAw8LYP4UK1YmnrDWCU3XHCxDNWIQqC1GYjpwGb1Vr2vNWW/sv1VXpGD8VpbqGYFGzsUJVKdkSwYyi4lFhrB8kTYUxjbHFcGIV7dLmh8IPDaugIdneK41Anw6YWRI0Dfokh5kkEa80DL2pyHLfQoPeVASXiR8atE8OkSyKl0sOkkYGQpqE3VRy32Y5IGQtA6pR2bIprG0Pat8QO0CDPMVzuqGkQbpX4EhpkOnvk+FzAs1ESoN008CQ0iCPBmIa5NHwq2iwT+q7ovi78o0lpUFeRWlPTfTUEvH9BgfzbTdRRVcz4CsYwqJBVA2zus13Dg+L66oRSbCHjJdNMSZq31iEwbReHs7qR3MA5tCU5+g0DMy6xj/clBj9UVcIBhsZylvd1PIK8NTCEgKQvth3fiMu2r0eDav7nGpDiI/B2KbG+DqtMIW8RLfRn12E28e4ECyQDA2soxHWG52E2H9u+TMZJK6LQja/sPxqaWcfdUqLKbI1QbEoaeOtkn1GO9Z/WFm3TJqYuHyvwPLVAjEaM3nnrBr6jyt9wfjNpUuXLl36z/UHRDwyCVDWLhwAAAAASUVORK5CYII=",alt:"Human Sillouette"})})}),Object(P.jsx)("div",{className:"user=tags media-content columns",children:Object(P.jsxs)("div",{className:"column-1",children:[Object(P.jsxs)("p",{className:"container title is-4",children:[n.user.firstName," ",n.user.lastName]}),Object(P.jsxs)("p",{className:"subtitle is-b is-6",children:["@",n.user.username]})]})})]}),Object(P.jsxs)("div",{className:"content",children:["This bio is empty... got nothing to say?",Object(P.jsx)("br",{}),Object(P.jsx)("time",{datetime:"2016-1-1",children:"11:09 PM - 1 Jan 2016"}),Object(P.jsxs)("p",{className:"",children:["Email: ",n.user.email]})]})]})}),Object(P.jsx)("button",{class:"edit-profile-btn button btn-block",children:"Edit Profile"})]}),Object(P.jsx)("div",{children:n.user.post})]})})},V=function(){var e=Object(u.useState)({firstName:"",lastName:"",username:"",email:"",password:""}),t=Object(U.a)(e,2),n=t[0],s=t[1],a=Object(L.a)(R),c=Object(U.a)(a,2),r=c[0],i=c[1],l=i.error,o=i.data,j=function(e){var t=e.target,a=t.name,c=t.value;s(Object(D.a)(Object(D.a)({},n),{},Object(T.a)({},a,c)))},d=function(){var e=Object(S.a)(Object(C.a)().mark((function e(t){var a,c;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),console.log(n),e.prev=3,e.next=6,r({variables:Object(D.a)({},n)});case 6:a=e.sent,c=a.data,J.login(c.addUser.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:s({firstName:"",lastName:"",username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)("main",{className:"hero is-fullheight columns is-vcentered is-centered is-flex",children:Object(P.jsx)("section",{className:"registerPage",children:Object(P.jsxs)("div",{className:"",children:[o?Object(P.jsxs)("p",{children:["Success! You may now head"," ",Object(P.jsx)(O.b,{to:"/",children:"back to Login"})]}):Object(P.jsxs)("form",{onSubmit:d,children:[Object(P.jsx)("input",{className:"fname-input input is-large",placeholder:"First Name",name:"firstName",type:"text",value:n.firstName,onChange:j}),Object(P.jsx)("input",{className:"lname-input input is-large",placeholder:"Last Name",name:"lastName",type:"text",value:n.lastName,onChange:j}),Object(P.jsx)("input",{className:"user-name-input input is-large",placeholder:"Username",name:"username",type:"text",value:n.username,onChange:j}),Object(P.jsx)("input",{className:"email-input input is-large",placeholder:"Email",name:"email",type:"email",value:n.email,onChange:j}),Object(P.jsx)("input",{className:"reg-pass-input input is-large",placeholder:"Password",name:"password",type:"password",value:n.password,onChange:j}),Object(P.jsx)("button",{className:"registerbtn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"REGISTER"})]}),l&&Object(P.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:l.message})]})})})},z=function(e){var t=e.posts;return t?(console.log(t),Object(P.jsx)("div",{children:t&&t.map((function(e){return Object(P.jsx)("div",{children:Object(P.jsxs)("div",{className:"single-post",children:[Object(P.jsx)("div",{children:Object(P.jsxs)("p",{children:["User: ",e.userId]})}),Object(P.jsx)("div",{children:Object(P.jsx)("p",{children:e.content})})]})},e._id)}))})):Object(P.jsx)("h3",{children:"no posts yet"})},M=function(e){var t=Object(u.useState)({}),n=Object(U.a)(t,2),s=n[0],a=n[1],c=Object(u.useState)({}),r=Object(U.a)(c,2),i=r[0],l=r[1];Object(g.a)(e?I:y,{variables:{userId:e},onCompleted:l}),Object(g.a)(w,{onCompleted:a});return[i,s]},W=function(){var e,t=Object(h.o)().userId,n=M(t);return Object(P.jsx)(u.Fragment,{children:!!n&&Object(P.jsx)("section",{className:"post-feed-section hero is-fullheight",children:Object(P.jsxs)("div",{className:"",children:[Object(P.jsx)("div",{className:"",children:Object(P.jsxs)("strong",{className:"",children:["Welcome to your timeline ",null===(e=n[0].user)||void 0===e?void 0:e.firstName]})}),Object(P.jsx)("div",{className:"user-post-section hero",children:Object(P.jsx)(z,{posts:n[1].posts})})]})})})},_=function(e){var t=e.userId;console.log(t);var n=Object(u.useState)({content:""}),s=Object(U.a)(n,2),a=s[0],c=s[1],r=Object(L.a)(q),i=Object(U.a)(r,2),l=i[0],o=i[1].error,j=function(){var e=Object(S.a)(Object(C.a)().mark((function e(n){var s;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),n.stopPropagation(),e.prev=2,e.next=5,l({variables:Object(D.a)({userId:t},a)});case 5:s=e.sent,s.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:c({content:""});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)("main",{className:"hero is-fullheight columns is-vcentered is-centered is-flex",children:Object(P.jsx)("section",{className:"createPost-page",children:Object(P.jsxs)("div",{className:"",children:[Object(P.jsx)("div",{className:"post-title",children:Object(P.jsx)("h3",{children:"Create A Post"})}),Object(P.jsxs)("form",{className:"postFormContent",onSubmit:j,children:[Object(P.jsx)("div",{className:"postInput",children:Object(P.jsx)("textarea",{name:"content",placeholder:"Start Typing...",value:a.content,className:"formInput textarea is-large",onChange:function(e){var t=e.target,n=t.name,s=t.value;c(Object(D.a)(Object(D.a)({},a),{},Object(T.a)({},n,s)))}})}),Object(P.jsx)("div",{className:"postSubmitButton",children:Object(P.jsx)("button",{className:"postbtn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"Create Post"})}),o&&Object(P.jsx)("div",{children:"Something is not a-okay..."})]})]})})})},F=function(){var e=Object(h.o)().userId;return Object(P.jsx)("div",{children:Object(P.jsx)(_,{userId:e})})},K=n.p+"static/media/campfire.48759d01.gif",$=function(){return Object(P.jsxs)("div",{className:"headerTitle is-flex",children:[Object(P.jsx)("h1",{children:"MY TRYBE"}),Object(P.jsx)("img",{src:K,alt:"Computer man",className:"image is-64x64 mx-4"})]})},X=n(73),Z=["to","children"];var ee=function(e){var t=e.userId;function n(e){var t=e.to,n=e.children,s=Object(X.a)(e,Z),a=Object(h.p)(t),c=Object(h.k)({path:a.pathname,end:!0});return Object(P.jsx)("li",{className:c?"active":"",children:Object(P.jsx)(O.b,Object(D.a)(Object(D.a)({to:t},s),{},{children:n}))})}var s=Object(g.a)(t?I:y,{variables:{userId:t}},k,w).loading,a=J.loggedIn()?J.getToken():null;if(!a)return!1;var c=Object(H.a)(a);return s?Object(P.jsx)("div",{children:"Loading..."}):Object(P.jsx)("section",{children:Object(P.jsxs)("ul",{className:"nav-buttons navbar columns",children:[Object(P.jsx)("li",{className:"single-nav-btn button column is-one-quarter",children:Object(P.jsx)(n,{className:"nav-btn-txt",to:"/logout",children:"Log Out"})}),Object(P.jsx)("li",{className:"single-nav-btn button column is-one-quarter",children:Object(P.jsx)(n,{className:"nav-btn-txt",to:"/me/".concat(c.data._id),children:"Home"})}),Object(P.jsx)("li",{className:"single-nav-btn button column is-one-quarter",children:Object(P.jsx)(n,{className:"nav-btn-txt",to:"/me/".concat(c.data._id,"/createpost"),children:"Post"})}),Object(P.jsx)("li",{className:"single-nav-btn button column is-one-quarter",children:Object(P.jsx)(n,{className:"nav-btn-txt",to:"/profile/".concat(c.data._id),children:"Profile"})})]})})},te=function(){var e=Object(u.useState)(null),t=Object(U.a)(e,2),n=t[0],s=t[1];function a(){return(a=Object(S.a)(Object(C.a)().mark((function e(){return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.getUser());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){J.loggedIn()&&function(){return a.apply(this,arguments)}().then((function(e){return s(e.data)}))}),[]),console.log(),Object(P.jsx)(u.Fragment,{children:!!n&&Object(P.jsx)("div",{children:Object(P.jsx)("div",{className:"nav-section navbar is-fixed-bottom",children:Object(P.jsx)(ee,{userId:n._id})})})})},ne=(n(83),new p.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql",cache:new x.a}));var se=function(){return Object(P.jsx)(v.a,{client:ne,children:Object(P.jsxs)(O.a,{children:[Object(P.jsx)($,{}),Object(P.jsx)("div",{children:Object(P.jsxs)(h.c,{children:[Object(P.jsx)(h.a,{path:"/",element:Object(P.jsx)(A,{})}),Object(P.jsx)(h.a,{path:"/register",element:Object(P.jsx)(V,{})}),Object(P.jsx)(h.a,{path:"/login",element:Object(P.jsx)(B,{})}),Object(P.jsx)(h.a,{path:"/profile/:userId",element:Object(P.jsx)(G,{})}),Object(P.jsx)(h.a,{path:"/logout",element:Object(P.jsx)(B,{})}),Object(P.jsx)(h.a,{path:"/me/:userId",element:Object(P.jsx)(W,{})}),Object(P.jsx)(h.a,{path:"/me/:userId/createpost",element:Object(P.jsx)(F,{})})]})}),Object(P.jsx)(te,{})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};m.a.render(Object(P.jsx)(d.a.StrictMode,{children:Object(P.jsx)(se,{})}),document.getElementById("root")),ae()}},[[84,1,2]]]);
//# sourceMappingURL=main.f376bcc3.chunk.js.map