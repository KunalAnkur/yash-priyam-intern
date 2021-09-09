(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(20),r=a.n(i),s=a(11),o=(a(53),a(16)),l=a(4),d=a(12),u=(a(54),a(7)),j=a.n(u),b="SET_AUTHENTICATED",p="SET_UNAUTHENTICATED",O="SET_USER",h="LOADING_USER",f="SET_ERRORS",x="LOADING_LIST",g="GET_LIST",m="UPDATE_LIST",v="DELETE_LIST",y="CREATE_LIST",E="LOADING_UI",N="CREATE_CARD",C="DELETE_CARD",_=function(){return function(e){e({type:h}),j.a.get("/api/user").then((function(t){e({type:O,payload:t.data})})).catch((function(e){console.log(e)}))}},w=function(){return function(e){localStorage.removeItem("mashDBToken"),delete j.a.defaults.headers.common.Authorization,e({type:p})}},T=function(e){var t="Bearer ".concat(e);localStorage.setItem("idToken",t),j.a.defaults.headers.common.Authorization=t},S=a(2);var I=Object(s.b)((function(e){return{authenticated:e.user.authenticated,loading:e.user.loading,errors:e.user.errors}}),{loginUser:function(e,t){return function(a){a({type:E}),j.a.post("/api/login",e).then((function(e){T(e.data.idToken),a(_()),t.push("/")})).catch((function(e){console.log(e.response.data),a({type:f,payload:e.response.data})}))}}})((function(e){var t=e.loginUser,a=e.authenticated,c=e.loading,i=e.errors,r=Object(l.f)(),s=Object(n.useState)(""),u=Object(d.a)(s,2),j=u[0],b=u[1],p=Object(n.useState)(""),O=Object(d.a)(p,2),h=O[0],f=O[1];return Object(n.useEffect)((function(){!c&&a&&r.replace("/")}),[a,c,r]),Object(S.jsxs)("div",{className:"form",children:[Object(S.jsx)("h3",{children:"Login"}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("label",{for:"email",children:Object(S.jsx)("b",{children:"Email"})}),Object(S.jsx)("input",{type:"text",placeholder:"Enter Email",name:"email",onChange:function(e){return b(e.target.value)},required:!0}),Object(S.jsx)("p",{className:"error-alert",children:null===i||void 0===i?void 0:i.email}),Object(S.jsx)("label",{for:"psw",children:Object(S.jsx)("b",{children:"Password"})}),Object(S.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",required:!0,onChange:function(e){return f(e.target.value)}}),Object(S.jsx)("p",{className:"error-alert",children:null===i||void 0===i?void 0:i.password}),Object(S.jsx)("button",{className:"button",onClick:function(){t({email:j,password:h},r)},type:"submit",children:"Login"}),Object(S.jsx)("p",{className:"error-alert",children:null===i||void 0===i?void 0:i.error})]}),Object(S.jsxs)("span",{children:["Don't have an account, ",Object(S.jsx)(o.b,{to:"/signup",children:"Click here"})]})]})}));var L=Object(s.b)((function(e){return{authenticated:e.user.authenticated,loading:e.user.loading,errors:e.user.errors}}),{signupUser:function(e,t){return function(a){a({type:E}),j.a.post("/api/signup",e).then((function(e){T(e.data.idToken),a({type:O,payload:e.data}),t.push("/")})).catch((function(e){console.log(e.response.data),a({type:f,payload:e.response.data})}))}}})((function(e){var t=e.signupUser,a=e.loading,c=e.authenticated,i=e.errors,r=Object(l.f)(),s=Object(n.useState)(""),u=Object(d.a)(s,2),j=u[0],b=u[1],p=Object(n.useState)(""),O=Object(d.a)(p,2),h=O[0],f=O[1],x=Object(n.useState)(""),g=Object(d.a)(x,2),m=g[0],v=g[1];return Object(n.useEffect)((function(){!a&&c&&r.replace("/")}),[c,a,r]),Object(S.jsxs)("div",{className:"form",children:[Object(S.jsx)("h3",{children:"Signup"}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("label",{for:"email",children:Object(S.jsx)("b",{children:"Email"})}),Object(S.jsx)("input",{type:"text",placeholder:"Enter Email",name:"email",onChange:function(e){return b(e.target.value)},required:!0}),Object(S.jsx)("p",{className:"error-alert",children:null===i||void 0===i?void 0:i.email}),Object(S.jsx)("label",{for:"psw",children:Object(S.jsx)("b",{children:"Password"})}),Object(S.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",onChange:function(e){return f(e.target.value)},required:!0}),Object(S.jsx)("label",{for:"psw",children:Object(S.jsx)("b",{children:"Confirm Password"})}),Object(S.jsx)("input",{type:"password",placeholder:"Re enter Password",name:"psw",onChange:function(e){return v(e.target.value)},required:!0}),Object(S.jsx)("p",{className:"error-alert",children:null===i||void 0===i?void 0:i.confirmPassword}),Object(S.jsx)("button",{className:"button",onClick:function(){t({email:j,password:h,confirmPassword:m},r)},type:"submit",children:"Signup"}),Object(S.jsx)("p",{className:"error-alert",children:null===i||void 0===i?void 0:i.error})]}),Object(S.jsxs)("span",{children:["Already have an account, ",Object(S.jsx)(o.b,{to:"/login",children:"Click here"})]})]})})),k=(a(77),a(78),a(79),function(){return function(e){e({type:x}),j.a.post("/api/list").then((function(t){e({type:y,payload:t.data})})).catch((function(e){console.log(e)}))}});var A=Object(s.b)(null,{deleteCard:function(e,t){return function(a){j.a.delete("/api/card/".concat(e,"/").concat(t)).then((function(e){a({type:C,payload:e.data})})).catch((function(e){console.log(e)}))}},updateCard:function(e){return function(t){j.a.put("/api/card",e).then((function(e){t({type:"UPDATE_CARD",payload:e.data})})).catch((function(e){console.log(e)}))}}})((function(e){var t=e.card,a=e.cardIdx,c=e.deleteCard,i=e.cardlistIdx,r=e.updateCard,s=void 0===t.title?"":t.title,o=void 0===t.description?"":t.description,l=Object(n.useState)(s),u=Object(d.a)(l,2),j=u[0],b=u[1],p=Object(n.useState)(o),O=Object(d.a)(p,2),h=O[0],f=O[1],x=function(){r({title:j,description:h,cardId:a})};return Object(S.jsxs)("div",{className:"task-card",draggable:!0,children:[Object(S.jsx)("div",{className:"remove-card",children:Object(S.jsx)("button",{className:"card-remove-btn",onClick:function(){c(i,a)},children:"X"})}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{children:"Title"}),Object(S.jsx)("input",{name:"title",onChange:function(e){b(e.target.value),x()},className:"task-title",value:j,placeholder:"title"}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{children:"Description"}),Object(S.jsx)("textarea",{rows:"4",cols:"15",name:"description",onChange:function(e){f(e.target.value),x()},className:"task-description",value:h,placeholder:"description"}),Object(S.jsx)("br",{})]})}));var D=Object(s.b)(null,{deleteList:function(e){return function(t){t({type:x}),t({type:v,payload:e}),j.a.delete("/api/list/".concat(e)).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},updateList:function(e){return function(t){t({type:x}),j.a.put("/api/list",e).then((function(e){t({type:m,payload:e.data})})).catch((function(e){console.log(e)}))}},createList:k,createCard:function(e){return function(t){j.a.post("/api/card",e).then((function(e){t({type:N,payload:e.data})})).catch((function(e){console.log(e)}))}}})((function(e){var t=e.list,a=e.deleteList,c=e.cardlistIdx,i=e.updateList,r=e.createCard,s=t.cardList,o=void 0===t.listName?"":t.listName,l=Object(n.useState)(o),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(S.jsxs)("div",{className:"card-list",children:[Object(S.jsx)("input",{className:"card-list-name",onChange:function(e){b(e.target.value),i({listName:j,listId:c})},placeholder:"card list name",value:j}),Object(S.jsx)("button",{className:"remove-btn",onClick:function(){a(c)},children:"Remove List"}),Object(S.jsx)("span",{className:"card-number",children:s.length}),Object(S.jsx)("div",{className:"card-list-container",children:s.map((function(e){return Object(S.jsx)(A,{card:e,cardIdx:e._id,cardlistIdx:c},e._id)}))}),Object(S.jsx)("button",{className:"card-add-btn",onClick:function(){r({listRef:c})},children:"Add task"})]})})),U=a(40),R=a.n(U),P=a(42),q=a.n(P),G=a(41),z=a.n(G);var B=Object(s.b)((function(e){return{authenticated:e.user.authenticated,loading:e.user.loading,lists:e.list.lists,loadingList:e.list.loading,user:e.user.email}}),{createList:k,getList:function(e){return function(t){t({type:x}),j.a.get("/api/list",e).then((function(e){t({type:g,payload:e.data})})).catch((function(e){console.log(e.response.data)}))}},logoutUser:w})((function(e){var t=e.authenticated,a=e.loading,c=e.createList,i=e.lists,r=e.getList,s=e.user,o=e.logoutUser,d=Object(l.f)();return Object(n.useEffect)((function(){a||t?r():d.replace("/login")}),[a,t,d,r]),Object(S.jsxs)("div",{className:"homepage-container",children:[Object(S.jsxs)("div",{className:"nav-btn",children:[Object(S.jsx)("button",{className:"listadd-btn",onClick:function(){c()},children:Object(S.jsx)(R.a,{})}),Object(S.jsx)("button",{className:"logout-btn",onClick:function(){return o()},children:Object(S.jsx)(z.a,{})})]}),Object(S.jsxs)("h3",{children:[Object(S.jsx)(q.a,{}),": ",s]}),Object(S.jsx)("div",{className:"cardlist-container",children:i.map((function(e){return Object(S.jsx)(D,{list:e,cardlistIdx:e._id},e._id)}))})]})}));var X=function(){return Object(S.jsx)(o.a,{children:Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{exact:!0,path:"/",children:Object(S.jsx)(B,{})}),Object(S.jsx)(l.a,{exact:!0,path:"/login",children:Object(S.jsx)(I,{})}),Object(S.jsx)(l.a,{exact:!0,path:"/signup",children:Object(S.jsx)(L,{})})]})})},H=a(43),J=a(22),M=a(44),V=a(3),F={authenticated:!1,loading:!1,errors:{}};var K=a(19),Q={loading:!1,lists:[]};var W=[M.a],Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.c,Z=Object(J.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(V.a)(Object(V.a)({},e),{},{authenticated:!0,loading:!1});case p:return F;case h:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});case O:return Object(V.a)({authenticated:!0,loading:!1},t.payload);case f:return Object(V.a)(Object(V.a)({},e),{},{loading:!1,errors:t.payload});default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});case g:return Object(V.a)(Object(V.a)({},e),{},{loading:!1,lists:Object(K.a)(t.payload)});case m:var a=e.lists.findIndex((function(e){return e._id===t.payload._id}));return e.lists[a].listName=t.payload.listName,Object(V.a)(Object(V.a)({},e),{},{lists:Object(K.a)(e.lists),loading:!1});case y:return Object(V.a)(Object(V.a)({},e),{},{lists:[].concat(Object(K.a)(e.lists),[t.payload]),loading:!1});case v:var n=e.lists.filter((function(e){return e._id!==t.payload}));return Object(V.a)(Object(V.a)({},e),{},{lists:Object(K.a)(n),loading:!1});case N:console.log(t.payload);var c=e.lists.findIndex((function(e){return e._id===t.payload._id}));return e.lists[c]=t.payload,Object(V.a)(Object(V.a)({},e),{},{lists:Object(K.a)(e.lists)});case C:var i=e.lists.findIndex((function(e){return e._id===t.payload._id}));return e.lists[i]=t.payload,Object(V.a)(Object(V.a)({},e),{},{lists:Object(K.a)(e.lists)});default:return e}}}),$=Object(J.d)(Z,Y(J.a.apply(void 0,W))),ee=(a(81),localStorage.idToken);ee&&(1e3*Object(H.a)(ee).exp<Date.now()?($.dispatch(w()),window.location.href="/login"):($.dispatch({type:p}),j.a.defaults.headers.common.Authorization=ee,$.dispatch(_())));r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(s.a,{store:$,children:Object(S.jsx)(X,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.790267e3.chunk.js.map