(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,t,n){},155:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),s=(n.p,n(115),n(18)),c=n(203),u=n(191),d=n(194),l=n(9),h=n(97),m=Object(h.io)({autoConnect:!1});m.onAny((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];console.log("Catch-all listener",e,n)}));var p=m,g=n(2),j=Object(u.a)((function(e){return{button:{background:"#74b816",color:"white",width:"100%",fontSize:20,margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"84%"}}})),b=function(e){var t=e.username,n=j(),r=Object(l.f)(),o=Object(a.useState)(""),i=Object(s.a)(o,2),u=i[0],h=i[1],m=Object(a.useState)(!1),b=Object(s.a)(m,2),f=b[0],x=b[1];Object(a.useEffect)((function(){p.connect()}),[]);return Object(g.jsxs)("div",{children:[Object(g.jsx)(d.a,{variant:"contained",className:n.button,onClick:function(e){e.preventDefault(),""===t?alert("Please enter a username"):x(!f)},children:"Join a session"}),f?Object(g.jsxs)("div",{style:{marginBottom:10},children:[Object(g.jsx)(c.a,{label:"Classroom code",id:"margin-normal",name:"name",className:n.textField,onChange:function(e){h(e.target.value)},style:{width:"60%"}}),Object(g.jsx)(d.a,{type:"submit",variant:"contained",color:"default",onClick:function(e){e.preventDefault(),""===u?alert("Please enter a code!"):(alert("joining with "+u),p.emit("joining",{roomCode:u,username:t},(function(e){var n=e.error;n?alert(n):r.push("/room/".concat(u),{host:!1,username:t})})))},style:{marginTop:"10px",marginLeft:"50px",width:"20%",backgroundColor:"#d6336c",color:"white"},children:"Enter"})]}):null]})},f=Object(u.a)((function(e){return{button:{background:"#f76705",color:"white",width:"100%",fontSize:20,margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}})),x=function(e){var t=e.username,n=f(),r=Object(l.f)();Object(a.useEffect)((function(){p.connect(),p.once("create",(function(e){r.push("/room/".concat(e),{host:!0,username:t})}))}),[t]);var o=function(){p.emit("create",{username:t}),alert("creating")};return Object(g.jsx)(d.a,{variant:"contained",className:n.button,onClick:function(){""===t?alert("Please enter a username"):o()},children:"Create a new session"})},O=Object(u.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"}}})),v=function(e){var t=e.setUsername,n=O();Object(l.f)();return Object(a.useEffect)((function(){p.connect()}),[]),Object(g.jsx)("div",{children:Object(g.jsx)(c.a,{label:"Username",id:"margin-normal",name:"name",className:n.textField,onChange:function(e){t(e.target.value)}})})},C=n.p+"static/media/pavo.270dc62a.png",w=n(102),y=n.p+"static/media/peacockSound.72d272aa.m4a",S=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(w.a)(y),i=Object(s.a)(o,1)[0];return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:C,alt:"...",onClick:i,style:{width:"400px",height:"300px"}}),Object(g.jsx)(v,{setUsername:r}),Object(g.jsx)(b,{username:n}),Object(g.jsx)(x,{username:n})]})},k=n(197),I=(Object(u.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}})),n(198)),L=n(73),R=n.n(L),z=(n(155),Object(u.a)((function(e){return{button:{background:"#d6336c",color:"white",height:70,width:400,fontSize:30,margin:e.spacing(3)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}}))),F=function(e){var t=e.host,n=e.roomCode,a=e.users,r=e.content,o=e.currentUser,i=z();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)(k.a,{variant:"h2",style:{margin:10},children:["You are in room ",n]}),Object(g.jsxs)("div",{className:"leader",children:[Object(g.jsx)(k.a,{variant:"h3",style:{margin:10},children:"Session Leader"}),Object(g.jsx)("img",{src:C,style:{width:"50%",height:"50%",margin:30}}),Object(g.jsx)(k.a,{variant:"h3",children:" Name "})]}),Object(g.jsx)("div",{className:"users",children:Object(g.jsxs)(k.a,{variant:"h6",children:["Users in room: ",a," ",Object(g.jsx)("br",{}),"List of users:",Object(g.jsx)("ol",{children:r.length>0&&r.map(function(e){return function(t){return Object(g.jsxs)("li",{children:[t.username,e&&t.username!==o.username&&Object(g.jsx)(I.a,{edge:"end",onClick:function(){return function(e){p.emit("remove-user",{user:e,roomCode:n})}(t)},children:Object(g.jsx)(R.a,{})})]})}}(t))})]})}),t&&Object(g.jsx)(d.a,{type:"submit",variant:"contained",color:"default",size:"large",className:i.button,onClick:function(){p.emit("startSession",n)},children:"Start session"}),!t&&Object(g.jsx)(k.a,{variant:"h6",children:"Please wait for host to start meeting"})]})},E=n(103),U=n(51),W=n(63),N=n(64),B=n(66),D=n(65),P=n(50),M=n(199),T=function(e){Object(B.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(W.a)(this,n),(a=t.call(this,e)).isDrawing=!1,a.clearWhiteboard=function(){var e=document.getElementById("board-".concat(a.props.roomCode,"-").concat(a.props.username));e.getContext("2d").clearRect(0,0,e.width,e.height),p.emit("clear",{roomCode:a.props.roomCode,username:a.props.username})},a.state={shared:!1},p.on("canvas-data",(function(t){if(0===t.roomCode.localeCompare(e.roomCode)&&0===t.username.localeCompare(e.username))var n=this,a=setInterval((function(){if(!n.isDrawing){n.isDrawing=!0,clearInterval(a);var r=new Image,o=document.querySelector("#board-".concat(e.roomCode,"-").concat(e.username)).getContext("2d");r.onload=function(){o.drawImage(r,0,0),n.isDrawing=!1},r.src=t.image}}),200)})),p.on("clear",(function(t){if(t.roomCode===e.roomCode&&t.username===e.username){var n=document.getElementById("board-".concat(a.props.roomCode,"-").concat(a.props.username));n.getContext("2d").clearRect(0,0,n.width,n.height),console.log("coming into clear")}})),a.handleShare=a.handleShare.bind(Object(P.a)(a)),a.stopShare=a.stopShare.bind(Object(P.a)(a)),a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.drawOnCanvas(),this.initialiseImage()}},{key:"componentWillReceiveProps",value:function(e){this.ctx.strokeStyle=e.eraseMode?"#FFFFFF":e.color,this.ctx.lineWidth=e.size}},{key:"drawOnCanvas",value:function(){var e=document.querySelector("#board-".concat(this.props.roomCode,"-").concat(this.props.username));this.ctx=e.getContext("2d");var t=this.ctx,n=document.querySelector("#sketch-".concat(this.props.roomCode,"-").concat(this.props.username)),a=getComputedStyle(n);e.width=parseInt(a.getPropertyValue("width")),e.height=parseInt(a.getPropertyValue("height"));var r={x:0,y:0},o={x:0,y:0};e.addEventListener("mousemove",(function(e){o.x=r.x,o.y=r.y,r.x=e.pageX-this.offsetLeft,r.y=e.pageY-this.offsetTop}),!1),t.lineWidth=this.props.size,t.lineJoin="round",t.lineCap="round",t.strokeStyle=this.props.eraseMode?"#FFFFFF":this.props.color,e.addEventListener("mousedown",(function(t){e.addEventListener("mousemove",s,!1)}),!1),e.addEventListener("mouseup",(function(){e.removeEventListener("mousemove",s,!1)}),!1);var i=this,s=function(){t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(r.x,r.y),t.closePath(),t.stroke(),void 0!=i.timeout&&clearTimeout(i.timeout),i.timeout=setTimeout((function(){var t=e.toDataURL("image/png");p.emit("canvas-data",{image:t,roomCode:i.props.roomCode,username:i.props.username})}),1e3)}}},{key:"handleShare",value:function(){var e=document.querySelector("#board-".concat(this.props.roomCode,"-").concat(this.props.username)).toDataURL("image/png");p.emit("share-whiteboard",{image:e,roomCode:this.props.roomCode,username:this.props.username}),this.setState({shared:!0})}},{key:"stopShare",value:function(){p.emit("stop-share",{roomCode:this.props.roomCode,username:this.props.username}),this.setState({shared:!1})}},{key:"initialiseImage",value:function(){if(this.props.image){var e=new Image,t=document.getElementById("board-".concat(this.props.roomCode,"-").concat(this.props.username)).getContext("2d");e.onload=function(){t.drawImage(e,0,0)},e.src=this.props.image}var n=document.getElementById("board-".concat(this.props.roomCode,"-").concat(this.props.username));(t=n.getContext("2d")).fillStyle="white",t.fillRect(0,0,n.width,n.height)}},{key:"render",value:function(){return Object(g.jsxs)(M.a,{item:!0,xs:12,children:[Object(g.jsx)(k.a,{variant:"h5",children:this.props.username}),this.state.shared?Object(g.jsx)(d.a,{onClick:this.stopShare,children:"Stop sharing whiteboard"}):Object(g.jsx)(d.a,{onClick:this.handleShare,children:"Share whiteboard"}),Object(g.jsx)(d.a,{onClick:this.clearWhiteboard.bind(this),children:"Clear whiteboard"}),Object(g.jsx)("div",{class:"sketch",id:"sketch-".concat(this.props.roomCode,"-").concat(this.props.username),children:Object(g.jsx)("canvas",{className:"board",id:"board-".concat(this.props.roomCode,"-").concat(this.props.username),style:{border:"1px solid #000000"},width:"800",height:"800"})})]})}}]),n}(r.a.Component),J=n(196),q=n(200),V=function(e){return function(t){return Object(g.jsx)(M.a,{container:!0,spacing:2,justifyContent:"flex-start",children:Object(g.jsx)(T,{color:e.state.color,size:e.state.size,roomCode:e.props.roomCode,username:t.username,image:t.image,eraseMode:e.state.erase,currentUser:e.props.currentUser})})}},A=function(e){Object(B.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(W.a)(this,n),(a=t.call(this,e)).clearWhiteboard=function(){p.connect(),p.emit("clear",{roomCode:a.props.roomCode,username:a.props.username})},a.changeEraseMode=function(){a.setState(Object(U.a)(Object(U.a)({},a.state),{},{erase:!a.state.erase}))},a.state={color:"#000000",size:"5",erase:!1},a}return Object(N.a)(n,[{key:"changeColor",value:function(e){this.setState({color:e.target.value})}},{key:"changeSize",value:function(e){this.setState({size:e.target.value})}},{key:"render",value:function(){var e=this;return Object(g.jsxs)(M.a,{container:!0,spacing:2,alignItems:"center",children:[Object(g.jsx)(M.a,{item:!0,xs:1,children:Object(g.jsx)("div",{style:{border:"1px solid #000000",justifyContent:"center"},children:Object(g.jsxs)(J.a,{children:[Object(g.jsx)(q.a,{children:Object(g.jsxs)("div",{className:"color-picker-container",children:[Object(g.jsx)(k.a,{variant:"body1",children:"Brush Color : \xa0"}),Object(g.jsx)("input",{type:"color",value:this.state.color,onChange:this.changeColor.bind(this)})]})}),Object(g.jsx)(q.a,{children:Object(g.jsxs)("div",{className:"brushsize-container",children:[Object(g.jsx)(k.a,{variant:"body1",children:"Brush Size : \xa0"}),Object(g.jsxs)("select",{value:this.state.size,onChange:this.changeSize.bind(this),children:[Object(g.jsx)("option",{children:" 5 "}),Object(g.jsx)("option",{children:" 10 "}),Object(g.jsx)("option",{children:" 15 "}),Object(g.jsx)("option",{children:" 20 "}),Object(g.jsx)("option",{children:" 25 "}),Object(g.jsx)("option",{children:" 30 "})]})]})}),Object(g.jsx)(q.a,{children:Object(g.jsx)(d.a,{onClick:this.changeEraseMode.bind(this),children:this.state.erase?"Stop erasing":"Erase"})}),Object(g.jsx)(q.a,{children:this.props.host&&Object(g.jsx)(d.a,{onClick:function(){e.state.focus&&p.emit("get-whiteboards",{roomCode:e.props.roomCode,user:e.props.currentUser}),e.setState(Object(U.a)(Object(U.a)({},e.state),{},{focus:!e.state.focus}))},children:this.state.focus?"View all":"View yours"})})]})})}),Object(g.jsxs)(M.a,{item:!0,xs:10,children:[!this.props.host&&this.props.shareWhiteboards.map(V(this)),V(this)(this.props.currentUser),this.props.host&&!this.state.focus&&this.props.content.map(V(this))]})]})}}]),n}(r.a.Component),_=(Object(u.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}})),function(e){var t=e.host,n=e.roomCode,r=e.content,o=e.currentUser,i=Object(a.useState)([]),c=Object(s.a)(i,2),u=c[0],d=c[1];p.on("share-whiteboard",(function(e){-1===u.findIndex((function(t){return t.roomCode===e.roomCode&&t.username===e.username}))&&e.roomCode===n&&e.username!==o.username&&d([].concat(Object(E.a)(u),[e]))})),p.on("stop-share",(function(e){if(-1!==u.findIndex((function(t){return t.roomCode===e.roomCode&&t.username===e.username}))&&e.username!==o.username){var t=u.filter((function(t){return t.roomCode!==e.roomCode||t.username!==e.username}));console.log("new whiteboards are",t,"original",u),d(t)}}));var l=r.filter((function(e){return e.username!==o.username}));return Object(g.jsxs)(M.a,{container:!0,spacing:2,children:[Object(g.jsx)(M.a,{item:!0,xs:12,children:Object(g.jsxs)(k.a,{variant:"h3",children:["Room ",n]})}),Object(g.jsx)(M.a,{item:!0,xs:12,children:Object(g.jsx)(A,{host:t,roomCode:n,currentUser:o,shareWhiteboards:u,content:l})})]})}),G=(Object(u.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:320}}})),function(){var e=window.location.href.split("/").slice(-1)[0],t=Object(a.useState)(1),n=Object(s.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)({users:[]}),c=Object(s.a)(i,2),u=c[0],d=c[1],h=Object(a.useState)(!1),m=Object(s.a)(h,2),j=m[0],b=m[1],f=Object(l.g)(),x=f.state.host,O=f.state.username,v={username:O},C=Object(l.f)();return window.onbeforeunload=function(){p.emit("leave",v)},Object(a.useEffect)((function(){p.connect(),p.emit("userJoined",{roomCode:e,username:O},(function(e){var t=e.started;b(t)})),p.on("update_user",(function(e){o(e.users.length),d(e.users),console.log("content users",e.users,O),0!==O.length&&-1===e.users.findIndex((function(e){return e.username===O}))&&(C.push("/"),alert("Sorry, you have been removed by the host"))})),p.on("update_session_start",(function(e){b(e.start)}))}),[]),console.log("username outisde use effect",O),j?Object(g.jsx)(_,{host:x,roomCode:e,content:u,currentUser:v}):Object(g.jsx)(F,{host:x,roomCode:e,users:r,content:u,currentUser:v})}),Y=n(25),X=(n(201),n(202),Object(u.a)((function(e){return{icon:{color:"#ff5138",marginRight:e.spacing(2)},root:{flexGrow:1,marginBottom:e.spacing(1)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Object(u.a)((function(e){return{container:{justifyItems:"center"}}})));var H=function(){return X(),Object(g.jsx)(Y.a,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{exact:!0,path:"/",children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(S,{})})}),Object(g.jsx)(l.a,{path:"/room/:roomCode",children:Object(g.jsx)(G,{})})]})})};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(H,{})}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.8536a9d7.chunk.js.map