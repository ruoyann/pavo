(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),s=(n(86),n.p,n(87),n(38)),o=n(161),l=n(156),j=n(162),m=n(8),u=n(74),g=Object(u.io)({autoConnect:!1}),p=n(6),d=Object(l.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}})),b=function(e){var t=e.username,n=d(),c=Object(m.f)(),i=Object(a.useState)(""),r=Object(s.a)(i,2),l=r[0],u=r[1];Object(a.useEffect)((function(){g.connect()}),[]);return Object(p.jsxs)("div",{children:[Object(p.jsx)(o.a,{label:"Classroom code",id:"margin-normal",name:"name",className:n.textField,onChange:function(e){u(e.target.value)}}),Object(p.jsx)(j.a,{type:"submit",variant:"contained",color:"default",className:n.button,onClick:function(e){e.preventDefault(),""===l&&alert("Please enter a code!"),""===t?alert("Please enter a username"):(alert("joining with "+l),g.emit("joining",{roomCode:l,username:t},(function(e){var n=e.error;n?alert(n):c.push("/room/".concat(l),{host:!1,username:t})})))},children:"Enter"})]})},f=Object(l.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}})),h=function(e){var t=e.username,n=f(),a=Object(m.f)();return Object(p.jsx)(j.a,{type:"submit",variant:"contained",color:"default",className:n.button,onClick:function(){""===t?alert("Please enter a username"):a.push("/createClassroom",{host:!0,username:t})},children:"Create classroom"})},x=n(160),O=Object(l.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}})),v=function(e){var t=e.setUsername,n=O();Object(m.f)();return Object(a.useEffect)((function(){g.connect()}),[]),Object(p.jsx)("div",{children:Object(p.jsx)(o.a,{label:"Username",id:"margin-normal",name:"name",className:n.textField,onChange:function(e){t(e.target.value)}})})},C=n.p+"static/media/pavo.270dc62a.png",w=n(75),S=n.p+"static/media/peacockSound.72d272aa.m4a",y=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(w.a)(S),r=Object(s.a)(i,1)[0];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("img",{src:C,alt:"...",onClick:r,style:{width:"400px",height:"300px"}}),Object(p.jsx)(v,{setUsername:c}),Object(p.jsx)(b,{username:n}),Object(p.jsx)(x.a,{variant:"h6",children:"or"}),Object(p.jsx)(h,{username:n})]})},I=function(){return Object(p.jsx)("div",{children:"Create classroom page"})},k=n(50);var L=function(){return Object(p.jsx)(k.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(m.c,{children:[Object(p.jsx)(m.a,{exact:!0,path:"/",children:Object(p.jsx)(y,{})}),Object(p.jsx)(m.a,{exact:!0,path:"/createClassroom",children:Object(p.jsx)(I,{})})]})})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))},86:function(e,t,n){},87:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.f7c3cdfc.chunk.js.map