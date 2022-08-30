(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{104:function(e,t,a){e.exports=a(132)},109:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),l=a.n(i);a(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,c,s=a(26),d=a(83),u=a.n(d).a.create(Object(s.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"57c8177e-0cc1-45bd-9287-f4d1570cbc36"}})),m=function(){return u.get("todo-lists")},f=function(e){return u.post("todo-lists",{title:e})},p=function(e){return u.delete("todo-lists/".concat(e))},b=function(e,t){return u.put("todo-lists/".concat(e),{title:t})},g=function(e){return u.get("todo-lists/".concat(e,"/tasks"))},v=function(e,t){return u.delete("todo-lists/".concat(e,"/tasks/").concat(t))},k=function(e,t){return u.post("todo-lists/".concat(e,"/tasks"),{title:t})},h=function(e,t,a){return u.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},E=function(e){return u.post("auth/login",e)},C=function(){return u.delete("auth/login")},j=function(){return u.get("auth/me")};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(r||(r={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(c||(c={}));var O=function(e,t){e.messages.length?t(z(e.messages[0])):t(z("Some error occurred")),t(P("failed"))},T=function(e,t){t(z(e.message?e.message:"Some error occurred")),t(P("failed"))},y=a(27),I=Object(y.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(e,t){e.isLoggedIn=t.payload.value}}}),A=I.reducer,w=I.actions.setIsLoggedInAC,S=Object(y.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppInitializedAC:function(e,t){e.isInitialized=t.payload.isInitialized},setAppStatusAC:function(e,t){e.status=t.payload},setAppErrorAC:function(e,t){e.error=t.payload}}}),x=S.reducer,F=S.actions,L=F.setAppInitializedAC,P=F.setAppStatusAC,z=F.setAppErrorAC,N=Object(y.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload}));a>-1&&e.splice(a,1)},addTodolistAC:function(e,t){e.unshift(Object(s.a)(Object(s.a)({},t.payload),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.id}));e[a].title=t.payload.title},changeTodolistFilterAC:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.id}));e[a].filter=t.payload.filter},changeTodolistEntityStatusAC:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.id}));e[a].entityStatus=t.payload.entityStatus},setTodolistsAC:function(e,t){return t.payload.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{filter:"all",entityStatus:"idle"})}))}}}),D=N.reducer,M=N.actions,q=M.changeTodolistTitleAC,B=M.changeTodolistFilterAC,H=M.addTodolistAC,R=M.removeTodolistAC,U=M.changeTodolistEntityStatusAC,J=M.setTodolistsAC,K=Object(y.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(e,t){var a=e[t.payload.todolistId],n=a.findIndex((function(e){return e.id===t.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(e,t){e[t.payload.todoListId].unshift(t.payload)},updateTaskAC:function(e,t){var a=e[t.payload.todolistId],n=a.findIndex((function(e){return e.id===t.payload.taskId}));n>-1&&(a[n]=Object(s.a)(Object(s.a)({},a[n]),t.payload.model))},setTasksAC:function(e,t){e[t.payload.todolistId]=t.payload.tasks}},extraReducers:function(e){e.addCase(H,(function(e,t){e[t.payload.id]=[]})),e.addCase(R,(function(e,t){delete e[t.payload]})),e.addCase(J,(function(e,t){t.payload.forEach((function(t){e[t.id]=[]}))}))}}),W=K.reducer,V=K.actions,Y=V.removeTaskAC,$=V.setTasksAC,_=V.addTaskAC,G=V.updateTaskAC,Q=function(e,t,a){return function(n,o){var i=o().tasks[a].find((function(t){return t.id===e}));if(i){var l=Object(s.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},t);h(a,e,l).then((function(o){if(0===o.data.resultCode){var i=G({taskId:e,model:t,todolistId:a});n(i)}else O(o.data,n)})).catch((function(e){T(e,n)}))}else console.warn("task not found in the state")}},X=a(54),Z=a(84),ee=Object(X.b)({tasks:W,todolists:D,app:x,auth:A}),te=Object(y.a)({reducer:ee,middleware:function(e){return e().prepend(Z.a)}});window.store=te;var ae=a(18),ne=(a(129),a(175)),oe=a(176),ie=a(177),le=a(167),re=a(134),ce=a(172),se=a(179),de=a(180),ue=a(178),me=a(185),fe=a(182);function pe(e){return o.a.createElement(fe.a,Object.assign({elevation:6,variant:"filled"},e))}function be(){var e=Object(ae.c)((function(e){return e.app.error})),t=Object(ae.b)(),a=function(e,a){"clickAway"!==a&&t(z(null))},n=null!==e;return o.a.createElement(me.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(pe,{onClose:a,severity:"error"},e))}var ge=a(52),ve=a(13),ke=a(168),he=a(186),Ee=a(169),Ce=a(170),je=a(181),Oe=a(171),Te=a(183),ye=a(91),Ie=function(){var e=Object(ae.b)(),t=Object(ae.c)((function(e){return e.auth.isLoggedIn})),a=Object(ye.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var a;e((a=t,function(e){e(P("loading")),E(a).then((function(t){0===t.data.resultCode?(e(w({value:!0})),e(P("succeeded"))):O(t.data,e)})).catch((function(t){T(t,e)}))}))}});return t?o.a.createElement(ve.a,{to:"/"}):o.a.createElement(ke.a,{container:!0,justify:"center"},o.a.createElement(ke.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(he.a,null,o.a.createElement(Ee.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(Ce.a,null,o.a.createElement(je.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(je.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(Oe.a,{label:"Remember me",control:o.a.createElement(Te.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(ce.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Ae=a(133),we=a(46),Se=a(173),xe=o.a.memo((function(e){var t=e.addItem,a=e.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var l=Object(n.useState)(""),r=Object(we.a)(l,2),c=r[0],s=r[1],d=Object(n.useState)(null),u=Object(we.a)(d,2),m=u[0],f=u[1],p=function(){""!==c.trim()?(t(c),s("")):f("Title is required")};return o.a.createElement("div",null,o.a.createElement(je.a,{variant:"outlined",disabled:i,error:!!m,value:c,onChange:function(e){s(e.currentTarget.value)},onKeyPress:function(e){null!==m&&f(null),13===e.charCode&&p()},label:"Title",helperText:m}),o.a.createElement(le.a,{color:"primary",onClick:p,disabled:i},o.a.createElement(Se.a,null)))})),Fe=a(92),Le=o.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(we.a)(t,2),i=a[0],l=a[1],r=Object(n.useState)(e.value),c=Object(we.a)(r,2),s=c[0],d=c[1];return i?o.a.createElement(je.a,{value:s,onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){l(!0),d(e.value)}},e.value)})),Pe=a(174),ze=o.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todolistId)}),[e.task.id,e.todolistId]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?r.Completed:r.New,e.todolistId)}),[e.task.id,e.todolistId]),i=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId]);return o.a.createElement("div",{key:e.task.id,className:e.task.status===r.Completed?"is-done":""},o.a.createElement(Te.a,{checked:e.task.status===r.Completed,color:"primary",onChange:a}),o.a.createElement(Le,{value:e.task.title,onChange:i}),o.a.createElement(le.a,{onClick:t},o.a.createElement(Pe.a,null)))})),Ne=o.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,i=Object(Fe.a)(e,["demo"]);console.log("Todolist called");var l=Object(ae.b)();Object(n.useEffect)((function(){if(!a){var e,t=(e=i.todolist.id,function(t){t(P("loading")),g(e).then((function(a){var n=a.data.items;t($({tasks:n,todolistId:e})),t(P("succeeded"))}))});l(t)}}),[a,i.todolist.id,l]);var c=Object(n.useCallback)((function(e){i.addTask(e,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(e){i.changeTodolistTitle(i.todolist.id,e)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),m=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=i.tasks;return"active"===i.todolist.filter&&(f=i.tasks.filter((function(e){return e.status===r.New}))),"completed"===i.todolist.filter&&(f=i.tasks.filter((function(e){return e.status===r.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(Le,{value:i.todolist.title,onChange:s}),o.a.createElement(le.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(Pe.a,null))),o.a.createElement(xe,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,f.map((function(e){return o.a.createElement(ze,{key:e.id,task:e,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(ce.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"default"},"All"),o.a.createElement(ce.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary"},"Active"),o.a.createElement(ce.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:m,color:"secondary"},"Completed")))})),De=function(e){var t=e.demo,a=void 0!==t&&t,i=Object(ae.c)((function(e){return e.todolists})),l=Object(ae.c)((function(e){return e.tasks})),r=Object(ae.c)((function(e){return e.auth.isLoggedIn})),c=Object(ae.b)();Object(n.useEffect)((function(){if(!a&&r){var e=function(e){e(P("loading")),m().then((function(t){e(J(t.data)),e(P("succeeded"))})).catch((function(t){T(t,e)}))};c(e)}}),[]);var s=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){v(t,e).then((function(){a(Y({taskId:e,todolistId:t}))}))}}(e,t);c(a)}),[]),d=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){a(P("loading")),k(t,e).then((function(e){0===e.data.resultCode?(a(_(e.data.data.item)),a(P("succeeded"))):O(e.data,a)})).catch((function(e){T(e,a)}))}}(e,t);c(a)}),[]),u=Object(n.useCallback)((function(e,t,a){var n=Q(e,{status:t},a);c(n)}),[]),g=Object(n.useCallback)((function(e,t,a){var n=Q(e,{title:t},a);c(n)}),[]),h=Object(n.useCallback)((function(e,t){var a=B({id:t,filter:e});c(a)}),[]),E=Object(n.useCallback)((function(e){var t,a=(t=e,function(e){e(P("loading")),e(U({id:t,entityStatus:"loading"})),p(t).then((function(){e(R(t)),e(P("succeeded"))}))});c(a)}),[]),C=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){b(e,t).then((function(){a(q({id:e,title:t}))}))}}(e,t);c(a)}),[]),j=Object(n.useCallback)((function(e){var t=function(e){return function(t){t(P("loading")),f(e).then((function(e){t(H(e.data.data.item)),t(P("succeeded"))}))}}(e);c(t)}),[c]);return r?o.a.createElement(o.a.Fragment,null,o.a.createElement(ke.a,{container:!0,style:{padding:"20px"}},o.a.createElement(xe,{addItem:j})),o.a.createElement(ke.a,{container:!0,spacing:3},i.map((function(e){var t=l[e.id];return o.a.createElement(ke.a,{item:!0,key:e.id},o.a.createElement(Ae.a,{style:{padding:"10px"}},o.a.createElement(Ne,{todolist:e,tasks:t,removeTask:s,changeFilter:h,addTask:d,changeTaskStatus:u,removeTodolist:E,changeTaskTitle:g,changeTodolistTitle:C,demo:a})))})))):o.a.createElement(ve.a,{to:"/login"})};var Me=function(e){var t=e.demo,a=void 0!==t&&t,i=Object(ae.c)((function(e){return e.app.status})),l=Object(ae.c)((function(e){return e.app.isInitialized})),r=Object(ae.c)((function(e){return e.auth.isLoggedIn})),c=Object(ae.b)();Object(n.useEffect)((function(){c((function(e){j().then((function(t){0===t.data.resultCode&&e(w({value:!0})),e(L({isInitialized:!0}))}))}))}),[c]);var s=Object(n.useCallback)((function(){c((function(e){e(P("loading")),C().then((function(t){0===t.data.resultCode?(e(w({value:!1})),e(P("succeeded"))):O(t.data,e)})).catch((function(t){T(t,e)}))}))}),[c]);return l?o.a.createElement(ge.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(be,null),o.a.createElement(oe.a,{position:"static"},o.a.createElement(ie.a,null,o.a.createElement(le.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(ue.a,null)),o.a.createElement(re.a,{variant:"h6"},"News"),r&&o.a.createElement(ce.a,{color:"inherit",onClick:s},"Log out")),"loading"===i&&o.a.createElement(se.a,null)),o.a.createElement(de.a,{fixed:!0},o.a.createElement(ve.b,{exact:!0,path:"/Todolist",render:function(){return o.a.createElement(De,{demo:a})}}),o.a.createElement(ve.b,{path:"/login",render:function(){return o.a.createElement(Ie,null)}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(ne.a,null))};l.a.render(o.a.createElement(ae.a,{store:te},o.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.7cba9fe5.chunk.js.map