(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{304:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3kpqx",dialogsItem:"Dialogs_dialogsItem__354R2",active:"Dialogs_active__l6Up6",messages:"Dialogs_messages__17YoE"}},309:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(94),c=t(304),r=t.n(c),m=t(302),o=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(m.a,{to:a},e.name))},l=function(e){return s.a.createElement("div",{className:r.a.message},e.text)},u=t(123),g=t(124),d=t(59),p=t(71),b=Object(p.a)(50),f=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit}," ",s.a.createElement("div",{className:r.a.messages},s.a.createElement(u.a,{component:d.b,name:"newMessageBody",placeholder:"Enter a massege",validate:[p.b,b]}),s.a.createElement("div",null,s.a.createElement("button",null,"Send"))))})),E=function(e){var a=e.messagePage.dialogsData.map((function(e){return s.a.createElement(o,{key:e.id,name:e.name,id:e.id})})),t=e.messagePage.messgeData.map((function(e){return s.a.createElement(l,{key:e.id,text:e.message})}));e.messagePage.newMessageBody;return s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItem},a),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,t)),s.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},h=t(14),v=t(17),_=t(18),j=t(20),O=t(19),y=t(21),k=t(300),A=function(e){return{isAuth:e.auth.isAuth}},D=function(e){var a=function(a){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,a),Object(_.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(k.a,{to:"/login"})}}]),t}(s.a.Component);return Object(h.b)(A)(a)},M=t(7),N=D(E);a.default=Object(M.d)(Object(h.b)((function(e){return{messagePage:e.messagePage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),D)(N)}}]);
//# sourceMappingURL=4.0c635f8c.chunk.js.map