(this["webpackJsonprouter-student"]=this["webpackJsonprouter-student"]||[]).push([[0],{123:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),s=(a(123),a(18)),l=a(32),o=a(33),j=a.p+"static/media/saylani.d8a049ed.jpg",d=a(2);var b=function(){return Object(d.jsx)("img",{src:j,alt:"Saylani",width:"100%",height:"auto"})},h=a(71),u=a(5),O=a(174),x=a(187),p=a(172),m=a(180),g=a(188),f=a(173),v=a(133),y=a(179),w=a(87),C=a.n(w),S=a(88),N=a.n(S),k=a(178),P=a(204),A=a(175),B=Object(u.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(p.a),W=Object(u.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(f.a),F=Object(O.a)((function(e){return{fab:{margin:e.spacing(2)},absolute:{position:"absolute",bottom:e.spacing(2),right:e.spacing(3)}}}));function T(e){var t=e.student,a=e.index,n=e.deteleStudent,r=e.updateStudent,i=F();return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)(A.a,{className:i.table,"aria-label":"customized table",children:[Object(d.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(d.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(d.jsxs)(W,{children:[Object(d.jsx)(B,{align:"left",children:a+1}),Object(d.jsx)(B,{component:"th",scope:"row",children:t.name}),Object(d.jsx)(B,{align:"left",children:t.rollno}),Object(d.jsx)(B,{align:"left",children:t.batch}),Object(d.jsx)(B,{align:"left",children:t.phone}),Object(d.jsx)(B,{align:"left",children:t.address}),Object(d.jsxs)(B,{align:"left",children:[Object(d.jsx)(P.a,{title:"Delete",children:Object(d.jsx)(k.a,{"aria-label":"delete",onClick:function(){return n(a)},children:Object(d.jsx)(C.a,{})})}),Object(d.jsx)(P.a,{title:"Edit","aria-label":"edit",children:Object(d.jsx)(y.a,{color:"primary",className:i.fab,onClick:function(){return r(t,a)},children:Object(d.jsx)(N.a,{})})})]})]},t.name)]})})}var E=a(201),M=a(202),R=a(185),I=a(183),z=a(197),q=a(186),D=Object(u.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(p.a);function G(e,t,a,n,c,r){return{name:e,rollno:t,batch:a,phone:n,address:c,actions:r}}var L=[G("Ahmad",159,"A","03001231231","Peoples Colony No.1"),G("Anwar",237,"B","03001235675","Peoples Colony No.2"),G("Ehsan",262,"A","03001231235","Razabad"),G("Sajid",305,"C","03001237869","Peoples Colony No.1"),G("hamad",356,"C","03001231234","Gurajah")],H=Object(O.a)({table:{minWidth:700}}),Q=Object(O.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),J=Object(O.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),U=Object(O.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function V(){var e=H(),t=Q(),a=J(),r=U(),i=Object(n.useState)(L),l=Object(s.a)(i,2),o=l[0],j=l[1],b=Object(n.useState)(0),u=Object(s.a)(b,2),O=u[0],p=u[1],y=Object(n.useState)(""),w=Object(s.a)(y,2),C=w[0],S=w[1],N=Object(n.useState)(""),k=Object(s.a)(N,2),P=k[0],A=k[1],B=Object(n.useState)(""),W=Object(s.a)(B,2),F=W[0],G=W[1],V=Object(n.useState)(""),X=Object(s.a)(V,2),K=X[0],Y=X[1],Z=Object(n.useState)(""),$=Object(s.a)(Z,2),_=$[0],ee=$[1],te=Object(n.useState)(!1),ae=Object(s.a)(te,2),ne=ae[0],ce=ae[1],re=function(e){var t=o.filter((function(t,a){if(a!==e)return t}));j(Object(h.a)(t))},ie=function(e,t){p(t),S(e.name),A(e.rollno),G(e.batch),Y(e.phone),ee(e.address),ce(!0)};return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)(m.a,{component:v.a,children:[Object(d.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(d.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(d.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(d.jsx)(E.a,{value:C,required:!0,id:"standard-required",label:"Enter Student Name",onChange:function(e){return S(e.target.value)}}),Object(d.jsx)(E.a,{value:P,required:!0,id:"standard-required",label:"Enter Student Roll No",type:"number",onChange:function(e){return A(e.target.value)}}),Object(d.jsxs)(I.a,{className:a.formControl,children:[Object(d.jsx)(M.a,{id:"demo-simple-select-label",children:"Class"}),Object(d.jsxs)(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:F,onChange:function(e){return G(e.target.value)},children:[Object(d.jsx)(R.a,{value:"A",children:"A"}),Object(d.jsx)(R.a,{value:"B",children:"B"}),Object(d.jsx)(R.a,{value:"C",children:"C"})]})]}),Object(d.jsx)(E.a,{value:K,required:!0,id:"standard-number",label:"Enter Student Phone",type:"number",onChange:function(e){return Y(e.target.value)}}),Object(d.jsx)(E.a,{value:_,required:!0,id:"standard-required",label:"Enter Student Address",onChange:function(e){return ee(e.target.value)}}),Object(d.jsx)("div",{className:r.root,children:ne?Object(d.jsx)(q.a,{variant:"contained",color:"secondary",onClick:function(){var e={name:C,rollno:P,batch:F,phone:K,address:_},t=o.map((function(t,a){return O===a?e:t}));j(Object(h.a)(t)),S(""),A(""),G(""),Y(""),ee(""),ce(!1)},children:" Save Edit "}):Object(d.jsx)(q.a,{variant:"contained",color:"secondary",onClick:function(){var e={name:C,rollno:P,batch:F,phone:K,address:_};j([].concat(Object(h.a)(o),[e])),S(""),A(""),G(""),Y(""),ee("")},children:" Sumbit "})})]}),Object(d.jsxs)(x.a,{className:e.table,"aria-label":"customized table",children:[Object(d.jsx)(g.a,{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)(D,{align:"left",children:"No."}),Object(d.jsx)(D,{align:"left",children:"Name"}),Object(d.jsx)(D,{align:"left",children:"Roll No"}),Object(d.jsx)(D,{align:"left",children:"Batch"}),Object(d.jsx)(D,{align:"left",children:"Phone No"}),Object(d.jsx)(D,{align:"left",children:"Address"}),Object(d.jsx)(D,{align:"left",children:"Actions"})]})}),o.map((function(e,t){return Object(d.jsx)(T,{index:t,student:e,deteleStudent:re,updateStudent:ie})}))]})]})})}var X=a(203),K=[{id:"name",label:"Name",minWidth:150},{id:"rollno",label:"Roll No",minWidth:120},{id:"batch",label:"Batch",minWidth:110,align:"left",format:function(e){return e.toLocaleString("en-US")}},{id:"phone",label:"Phone",minWidth:120,align:"left",format:function(e){return e.toLocaleString("en-US")}},{id:"address",label:"Address",minWidth:120,align:"left",format:function(e){return e.toFixed(2)}}];function Y(e,t,a,n,c){return{name:e,rollno:t,batch:a,phone:n,address:c}}var Z=[Y("Ahmad",159,"A","03001231231","Peoples Colony No.1"),Y("Anwar",237,"B","03001235675","Peoples Colony No.2"),Y("Ehsan",262,"A","03001231235","Razabad"),Y("Sajid",305,"C","03001237869","Peoples Colony No.1"),Y("hamad",356,"C","03001231234","Gurajah")],$=Object(O.a)({root:{width:"100%"},container:{maxHeight:440}});function _(){var e=$(),t=c.a.useState(0),a=Object(s.a)(t,2),n=a[0],r=a[1],i=c.a.useState(10),l=Object(s.a)(i,2),o=l[0],j=l[1];return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)(v.a,{className:e.root,children:[Object(d.jsx)(m.a,{className:e.container,children:Object(d.jsxs)(x.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(g.a,{children:Object(d.jsx)(f.a,{children:K.map((function(e){return Object(d.jsx)(p.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(d.jsx)(A.a,{children:Z.slice(n*o,n*o+o).map((function(e){return Object(d.jsx)(f.a,{hover:!0,role:"checkbox",tabIndex:-1,children:K.map((function(t){var a=e[t.id];return Object(d.jsx)(p.a,{align:t.align,children:t.format&&"number"===typeof a?t.format(a):a},t.id)}))},e.code)}))})]})}),Object(d.jsx)(X.a,{rowsPerPageOptions:[10,25,100],component:"div",count:Z.length,rowsPerPage:o,page:n,onChangePage:function(e,t){r(t)},onChangeRowsPerPage:function(e){j(+e.target.value),r(0)}})]})})}var ee=a(96),te=a(190),ae=a(198),ne=a(191),ce=a(72),re=a(196);function ie(e){var t=e.children,a=e.value,n=e.index,c=Object(ee.a)(e,["children","value","index"]);return Object(d.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},c),{},{children:a===n&&Object(d.jsx)(re.a,{p:3,children:Object(d.jsx)(ce.a,{children:t})})}))}function se(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var le=Object(O.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function oe(){var e=le(),t=c.a.useState(0),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(te.a,{position:"static",color:"default",children:Object(d.jsxs)(ae.a,{value:n,onChange:function(e,t){r(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:[Object(d.jsx)(ne.a,Object(l.a)({label:"Question 1"},se(0))),Object(d.jsx)(ne.a,Object(l.a)({label:"Question 2"},se(1))),Object(d.jsx)(ne.a,Object(l.a)({label:"Question 3"},se(2))),Object(d.jsx)(ne.a,Object(l.a)({label:"Question 4"},se(3))),Object(d.jsx)(ne.a,Object(l.a)({label:"Question 5"},se(4)))]})}),Object(d.jsxs)(ie,{value:n,index:0,children:[Object(d.jsx)("h3",{children:"How Many Training Programs are there?"}),Object(d.jsxs)("p",{children:["It Contains 2 Training Programs.",Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Web and Mobile App Development."}),Object(d.jsx)("li",{children:"Graphic Design."})]})]})]}),Object(d.jsxs)(ie,{value:n,index:1,children:[Object(d.jsx)("h3",{children:"How many students are allow to Enter on these Training Programs?"}),Object(d.jsx)("p",{children:"Maximum 4000 Students are allowed to Enter in it."})]}),Object(d.jsxs)(ie,{value:n,index:2,children:[Object(d.jsx)("h3",{children:"What is the Fees for Registration?"}),Object(d.jsx)("p",{children:"There is no Registration Fees."})]}),Object(d.jsxs)(ie,{value:n,index:3,children:[Object(d.jsx)("h3",{children:"What is Monthly Fees for these Training Programs?"}),Object(d.jsx)("p",{children:"There is also no Monthly Fees for Training Programs as well it is totally Free."})]}),Object(d.jsxs)(ie,{value:n,index:4,children:[Object(d.jsx)("h3",{children:"What is the Duration of all Training Programs?"}),Object(d.jsx)("p",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"6 Months for Web and Mobile App Development"}),Object(d.jsx)("li",{children:"3 Months for Graphic Design"})]})})]})]})}var je=a.p+"static/media/logo.22bf7096.png",de=a(55),be=a(13),he=a(4),ue=a(15),Oe=a(200),xe=a(189),pe=a(184),me=a(192),ge=a(193),fe=a(89),ve=a.n(fe),ye=a(91),we=a.n(ye),Ce=a(90),Se=a.n(Ce),Ne=a(134),ke=a(194),Pe=a(195),Ae=a(92),Be=a.n(Ae),We=a(93),Fe=a.n(We),Te=a(94),Ee=a.n(Te),Me=a(95),Re=a.n(Me),Ie=240,ze=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Ie,width:"calc(100% - ".concat(Ie,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:Ie,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Ie,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(o.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));var qe=function(){var e,t,a=ze(),n=Object(ue.a)(),r=c.a.useState(!1),i=Object(s.a)(r,2),l=i[0],j=i[1];return Object(d.jsx)("div",{className:a.root,children:Object(d.jsxs)(de.a,{children:[Object(d.jsx)(me.a,{}),Object(d.jsx)(te.a,{position:"fixed",className:Object(he.a)(a.appBar,Object(o.a)({},a.appBarShift,l)),children:Object(d.jsxs)(xe.a,{children:[Object(d.jsx)(k.a,{color:"inherit","aria-label":"open drawer",onClick:function(){j(!0)},edge:"start",className:Object(he.a)(a.menuButton,Object(o.a)({},a.hide,l)),children:Object(d.jsx)(ve.a,{})}),Object(d.jsx)(ce.a,{variant:"h6",noWrap:!0,children:Object(d.jsx)("img",{src:je,alt:"Logo",width:"220px",height:"60px"})})]})}),Object(d.jsxs)(Oe.a,{variant:"permanent",className:Object(he.a)(a.drawer,(e={},Object(o.a)(e,a.drawerOpen,l),Object(o.a)(e,a.drawerClose,!l),e)),classes:{paper:Object(he.a)((t={},Object(o.a)(t,a.drawerOpen,l),Object(o.a)(t,a.drawerClose,!l),t))},children:[Object(d.jsx)("div",{className:a.toolbar,children:Object(d.jsx)(k.a,{onClick:function(){j(!1)},children:"rtl"===n.direction?Object(d.jsx)(Se.a,{}):Object(d.jsx)(we.a,{})})}),Object(d.jsx)(ge.a,{}),Object(d.jsx)(pe.a,{children:["Home"].map((function(e){return Object(d.jsxs)(Ne.a,{button:!0,children:[Object(d.jsx)(ke.a,{children:Object(d.jsx)(de.b,{to:"/",children:Object(d.jsx)(Be.a,{})})}),Object(d.jsx)(Pe.a,{primary:e})]},e)}))}),Object(d.jsx)(pe.a,{children:["Table"].map((function(e){return Object(d.jsxs)(Ne.a,{button:!0,children:[Object(d.jsx)(ke.a,{children:Object(d.jsx)(de.b,{to:"/table",children:Object(d.jsx)(Fe.a,{})})}),Object(d.jsx)(Pe.a,{primary:e})]},e)}))}),Object(d.jsx)(pe.a,{children:["Registration"].map((function(e){return Object(d.jsxs)(Ne.a,{button:!0,children:[Object(d.jsx)(ke.a,{children:Object(d.jsx)(de.b,{to:"/topics",children:Object(d.jsx)(Ee.a,{})})}),Object(d.jsx)(Pe.a,{primary:e})]},e)}))}),Object(d.jsx)(pe.a,{children:["About"].map((function(e){return Object(d.jsxs)(Ne.a,{button:!0,children:[Object(d.jsx)(ke.a,{children:Object(d.jsx)(de.b,{to:"/about",children:Object(d.jsx)(Re.a,{})})}),Object(d.jsx)(Pe.a,{primary:e})]},e)}))})]}),Object(d.jsxs)("main",{className:a.content,children:[Object(d.jsx)("div",{className:a.toolbar}),Object(d.jsx)("div",{children:Object(d.jsxs)(be.c,{children:[Object(d.jsx)(be.a,{path:"/about",children:Object(d.jsx)(oe,{})}),Object(d.jsx)(be.a,{path:"/topics",children:Object(d.jsx)(V,{})}),Object(d.jsx)(be.a,{path:"/table",children:Object(d.jsx)(_,{})}),Object(d.jsx)(be.a,{path:"/",children:Object(d.jsx)(b,{})})]})})]})]})})},De=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,207)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(qe,{})}),document.getElementById("root")),De()}},[[130,1,2]]]);
//# sourceMappingURL=main.def9365e.chunk.js.map