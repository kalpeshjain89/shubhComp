"use strict";(self.webpackChunkShubham_Computers=self.webpackChunkShubham_Computers||[]).push([[184],{6184:function(e,n,i){i.r(n),i.d(n,{default:function(){return D}});var o=i(4942),r=i(4165),s=i(5861),t=i(9439),a=i(2791),c=i(6934),l=i(2065),h=i(7689),p=i(4395),u=i(4554),d=i(4663),x=i(3400),m=i(890),f=i(8008),b=i(1614),g=i(6151),j=i(5403),I=i(6098),A=i(4427),Z=i(4721),w=i(9953),C=i(493),y=i(2627),T=i(9900),v=i(5221),k=i(6409),q=i(2093),X=i(1880),F=i(1131),N=i(2885),L=i(6125),E=i(1087),R=i(184),S=[{id:"home",text:"Home",isExpandable:!1,routeTo:"/shubhComp"},{id:"products",text:"Products",isExpandable:!0,routeTo:"/products"},{id:"about",text:"About",isExpandable:!1,routeTo:"/about"},{id:"contact",text:"Contact",isExpandable:!1,routeTo:"/contact-us"}],U=function(e){var n=e.window,i=a.useState(!1),U=(0,t.Z)(i,2),D=U[0],P=U[1],K=a.useState(!1),V=(0,t.Z)(K,2),B=V[0],O=V[1],Y=a.useState(!1),G=(0,t.Z)(Y,2),Q=G[0],H=G[1],J=a.useRef(null),W=(0,h.s0)(),z=function(){P(!D),O(!1)},M=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.isExpandable){e.next=5;break}n.stopPropagation(),H(!Q),e.next=8;break;case 5:return e.next=7,P(!1);case 7:W("".concat(i.routeTo));case 8:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),_=(0,R.jsxs)(u.Z,{onClick:z,children:[(0,R.jsxs)(m.Z,{variant:"h6",sx:{my:2,pl:2},children:[(0,R.jsx)("img",{className:"branding-logo",src:A,alt:"logo",style:{verticalAlign:"top"}}),"Shubham Computers"]}),(0,R.jsx)(Z.Z,{}),(0,R.jsxs)(C.Z,{component:"nav",children:[(0,R.jsx)(y.Z,{sx:{pl:2},onClick:function(e){return M(e,S[0])},children:(0,R.jsx)(T.Z,{primary:S[0].text})}),(0,R.jsxs)(y.Z,{sx:{pl:2},onClick:function(e){return M(e,S[1])},children:[(0,R.jsx)(T.Z,{primary:S[1].text}),Q?(0,R.jsx)(N.Z,{}):(0,R.jsx)(F.Z,{})]}),(0,R.jsx)(L.Z,{in:Q,timeout:"auto",unmountOnExit:!0,children:(0,R.jsxs)(C.Z,{component:"div",disablePadding:!0,children:[(0,R.jsx)(y.Z,{sx:{pl:4},component:E.rU,to:"/products",children:(0,R.jsx)(T.Z,{primary:"All Products"})}),e.categories.map((function(e,n){return(0,R.jsx)(y.Z,{sx:{pl:4,textTransform:"capitalize"},component:E.rU,to:e.routeTo,children:(0,R.jsx)(T.Z,{primary:e.heading})},n)}))]})}),(0,R.jsx)(y.Z,{sx:{pl:2},onClick:function(e){return M(e,S[2])},children:(0,R.jsx)(T.Z,{primary:S[2].text})}),(0,R.jsx)(y.Z,{sx:{pl:2},onClick:function(e){return M(e,S[3])},children:(0,R.jsx)(T.Z,{primary:S[3].text})})]}),(0,R.jsx)(Z.Z,{}),(0,R.jsxs)("div",{className:"social-icons-wrapper",children:[(0,R.jsxs)("a",{href:"https://m.facebook.com/1171466706257889/",target:"_blank",rel:"noopener noreferrer",children:[(0,R.jsx)(q.Z,{}),"Facebook"]}),(0,R.jsxs)("a",{href:"//api.whatsapp.com/send?phone=919322249976&text=https://www.shubhamcomputers.com/%0A%0AI'm interested in your products and I have a few questions. Can you help?",target:"_blank",rel:"noopener noreferrer",children:[(0,R.jsx)(k.Z,{})," WhatsApp"]}),(0,R.jsxs)("a",{href:"https://instagram.com/shubhamcomputersbynaresh?igshid=YmMyMTA2M2Y=",target:"_blank",rel:"noopener noreferrer",children:[(0,R.jsx)(X.Z,{}),"Instagram"]}),(0,R.jsxs)("a",{href:"https://t.me/+RRCFqO62AcP8UUpR",target:"_blank",rel:"noopener noreferrer",children:[(0,R.jsx)(v.Z,{}),"Telegram"]})]})]}),$=void 0!==n?function(){return n().document.body}:void 0,ee=(0,c.ZP)("div")((function(e){var n,i=e.theme;return n={position:"relative",borderRadius:i.shape.borderRadius,backgroundColor:(0,l.Fq)(i.palette.common.white,.15),"&:hover":{backgroundColor:(0,l.Fq)(i.palette.common.white,.25)},marginLeft:0,width:"100%"},(0,o.Z)(n,i.breakpoints.only("xs"),{backgroundColor:(0,l.Fq)(i.palette.common.black,1)}),(0,o.Z)(n,i.breakpoints.up("sm"),{marginLeft:i.spacing(1),width:"auto"}),n})),ne=(0,c.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:"0",top:"0",cursor:"pointer"}})),ie=(0,c.ZP)(I.ZP)((function(e){var n=e.theme;return{color:"inherit","&":{width:"100%",paddingRight:"calc(1em + ".concat(n.spacing(5),")")},"& .MuiInputBase-input":{padding:n.spacing(1,1,1,2)}}})),oe=function(){var e=J.current.children[0].value.trim();e.length>0&&W({pathname:"/products",search:"?search=".concat(e)})};return(0,R.jsx)(p.Z,{position:"sticky",sx:{background:"#000"},children:(0,R.jsx)(b.Z,{maxWidth:"xl",children:(0,R.jsxs)(d.Z,{disableGutters:!0,children:[(0,R.jsx)(x.Z,{color:"inherit","aria-label":"open menu",edge:"start",onClick:z,sx:{mr:2,display:{md:"none"}},children:(0,R.jsx)(f.Z,{})}),(0,R.jsxs)(u.Z,{sx:{flexGrow:2,display:{xs:"none",sm:"flex"},alignItems:"center"},children:[(0,R.jsx)("img",{className:"branding-logo",src:A,alt:"logo"}),(0,R.jsx)(m.Z,{variant:"h5",noWrap:!0,component:E.rU,to:"/shubhComp",sx:{mr:2,display:{xs:"none",sm:"block"},color:"inherit",textDecoration:"none",fontSize:{sm:"1.25em",md:"1.5em"}},children:"Shubham Computers"})]}),(0,R.jsx)(u.Z,{component:"nav",children:(0,R.jsx)(w.ZP,{container:$,variant:"temporary",open:D,onClose:z,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",md:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:"300px"}},children:_})}),(0,R.jsxs)(u.Z,{sx:{display:{xs:"flex",sm:"none"},alignItems:"center",flexGrow:2},children:[(0,R.jsx)("img",{className:"branding-logo",src:A,alt:"logo"}),(0,R.jsx)(m.Z,{variant:"h5",noWrap:!0,component:E.rU,to:"/shubhComp",sx:{mr:2,display:{sm:"flex",md:"none"},color:"inherit",textDecoration:"none",fontSize:"1.25em"},children:"Shubham Computers"})]}),(0,R.jsx)(x.Z,{color:"inherit","aria-label":"open search",edge:"end",onClick:function(){O(!B)},sx:{display:{sm:"none"}},children:(0,R.jsx)(j.Z,{})}),(0,R.jsx)(u.Z,{sx:{flexGrow:1,display:{sm:"block"},mr:{md:3}},className:B?"search-wrapper show":"search-wrapper",children:(0,R.jsxs)(ee,{children:[(0,R.jsx)(ie,{placeholder:"Search Shubham Computers...",inputProps:{"aria-label":"search"},ref:J,onKeyDown:function(e){"Enter"!==e.key&&13!==e.which||oe()}}),(0,R.jsx)(ne,{children:(0,R.jsx)(j.Z,{onClick:oe})})]})}),(0,R.jsx)(u.Z,{sx:{display:{xs:"none",md:"block"}},children:S.slice(1).map((function(e){return(0,R.jsx)(g.Z,{sx:{color:"#fff"},component:E.rU,to:e.routeTo,children:e.text},e.id)}))})]})})})},D=a.memo(U)},4427:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=184.ba62369d.chunk.js.map