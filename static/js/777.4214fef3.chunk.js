"use strict";(self.webpackChunkShubham_Computers=self.webpackChunkShubham_Computers||[]).push([[777],{9777:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var n=s(3433),r=s(4165),l=s(5861),a=s(9439),i=s(2791),o=s(7689),u=s(1087),c=s(6907),d=s(7365),f=s(890),m=s(1614),p=s(4554),x=s(4925),v=s(5022),h=s(8096),g=s(7391),Z=s(7198),b=s(6151),S=s(168),j=s(184),y=i.lazy((function(){return Promise.all([s.e(87),s.e(957)]).then(s.bind(s,3957))})),w=function(){var e=(0,o.s0)(),t=(0,o.UO)().route,s=(0,u.lr)(),w=(0,a.Z)(s,1)[0],C=(0,i.useState)(JSON.parse(sessionStorage.getItem("allProducts"))||[]),P=(0,a.Z)(C,2),k=P[0],A=P[1],I=(0,i.useState)([]),z=(0,a.Z)(I,2),L=z[0],D=z[1],N=(0,i.useState)(sessionStorage.getItem("productsPerPage")||6),B=(0,a.Z)(N,2),O=B[0],T=B[1],E=(0,i.useState)(""),F=(0,a.Z)(E,2),G=F[0],R=F[1],W=i.useState([]),H=(0,a.Z)(W,2),J=H[0],Q=H[1],_=i.useState("allProducts"),q=(0,a.Z)(_,2),K=q[0],U=q[1],X=i.useState([]),M=(0,a.Z)(X,2),V=M[0],Y=M[1],$=i.useState("all"),ee=(0,a.Z)($,2),te=ee[0],se=ee[1],ne=(0,i.useState)("nameAsc"),re=(0,a.Z)(ne,2),le=re[0],ae=re[1],ie=i.useState("No products found. Please refine your search and try again."),oe=(0,a.Z)(ie,2),ue=oe[0],ce=oe[1],de=i.useState(!0),fe=(0,a.Z)(de,2),me=fe[0],pe=fe[1],xe=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(){var t,s,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=null,e.next=4,(0,d.Z)("/".concat("1ZvGw6Rj62R7tGGzCXn8GdiRQKOe0TrEWBlQSm2EPnCc","/values/testData"));case 4:(s=e.sent).data.values.shift(),console.log("response.data.values ",s.data.values),t=s.data.values.map((function(e,t){if(e.length){var s,n,r,l,a,i,o,u=null===(s=e[1])||void 0===s?void 0:s.split(/[.\r?\n]/).filter((function(e){return e})),c=null===(n=e[2])||void 0===n?void 0:n.split(/[.\r?\n]/).filter((function(e){return e})),d=null===(r=e[3])||void 0===r?void 0:r.split(/[.\r?\n]/).filter((function(e){return e})),f=null===(l=e[9])||void 0===l?void 0:l.split(/[\r?\n]/).filter((function(e){return e})),m=null===(a=e[10])||void 0===a?void 0:a.split(/[\r?\n]/).filter((function(e){return e})),p=null===(i=e[11])||void 0===i?void 0:i.split(/[.\r?\n]/).filter((function(e){return e}));return{name:e[0],features:null===d||void 0===d?void 0:d.map((function(e){return e.trim()})),price:e[5],link:e[4],categories:null===u||void 0===u?void 0:u.map((function(e){return e.trim().toLowerCase()})),subCategories:null===c||void 0===c?void 0:c.map((function(e){return e.trim().toLowerCase()})),keywords:null===(o=e[6])||void 0===o?void 0:o.split(" "),mainImg:{src:e[7],alt:e[8]},thumbnails:null===f||void 0===f?void 0:f.map((function(t,s){var n,r;return{src:null===t||void 0===t?void 0:t.trim(),alt:null===(n=m[s])||void 0===n?void 0:n.trim(),price:p?null===(r=p[s])||void 0===r?void 0:r.trim():e[5]}}))}}return null})),(n=t.filter((function(e){return null!=e}))).length&&(sessionStorage.setItem("allProducts",JSON.stringify(n)),A(n),ge(n),ve(n),he(n)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),ve=function(e){var t=[];e.map((function(e){t.push.apply(t,(0,n.Z)(e.categories))})),Q((0,n.Z)(new Set(t)))},he=function(e){var t=[];e.map((function(e){t.push.apply(t,(0,n.Z)(e.subCategories))})),Y((0,n.Z)(new Set(t)))},ge=function(e){var s=[],n="All products";if(t){var r=t.replaceAll("-"," ");s=e.filter((function(e){return e.categories.includes(r)})),n=r}else if(w.get("search")){var l=w.get("search");s=e.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})),n=l}else s=e;D(s),R(n),pe(!1)},Ze=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(){var s,n,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=0,n=(new Date).getTime(),null!=(l=sessionStorage.getItem("productsSession"))){e.next=10;break}return sessionStorage.setItem("productsSession",n),e.next=7,xe();case 7:console.log("session set"),e.next=21;break;case 10:if(!(n-l>60*s*60*1e3)){e.next=18;break}return sessionStorage.removeItem("productsSession"),sessionStorage.setItem("productsSession",n),e.next=15,xe();case 15:console.log("session refreshed"),e.next=21;break;case 18:console.log("session exists"),console.log("allProducts from session ",k),k.length&&(ge(k),ve(k),he(k),t&&U(t.replaceAll("-"," ")));case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){Ze()}),[]),(0,i.useEffect)((function(){k.length&&ge(k)}),[t,w]);var be=function(t,s){if("category"==s){var n="allProducts"==t.target.value?"":t.target.value.replaceAll(" ","-");U(t.target.value),se("all"),e("/products/".concat(n))}else{var r=k.filter((function(e){return"allProducts"==K?e:e.categories.includes(K)}));r=r.filter((function(e){return"all"==t.target.value?e:e.subCategories.includes(t.target.value)})),se(t.target.value),D(r)}};return(0,j.jsxs)("div",{children:[(0,j.jsxs)(c.ql,{children:[(0,j.jsx)("title",{children:"Shubham Computers - Our Products"}),(0,j.jsx)("meta",{name:"description",content:"Shubham Computers - Our Products"})]}),(0,j.jsxs)(m.Z,{maxWidth:"xl",className:"products-page",children:[(0,j.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"start",flexDirection:{xs:"column",sm:"row"},pt:{xs:2,sm:2},px:{xs:0},pb:2},children:[(0,j.jsx)(f.Z,{variant:"h1",sx:{textAlign:{sm:"left"},fontSize:{xs:"1.5em",md:"2em"},flexBasis:{md:"70%"},textTransform:"uppercase"},children:G}),(0,j.jsx)(h.Z,{size:"small",sx:{flexBasis:{md:"30%"},display:{xs:"none",md:"flex"}},children:(0,j.jsx)(g.Z,{id:"outlined-search",label:"Search products on this page",type:"search",size:"small",onInput:function(e){var t=(L.length?L:k).filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));""===e.target.value?ge(k):t.length?D(t):(D([]),ce("No products were found for '".concat(e.target.value,"'. Please refine your search and try again.")))}})})]}),(0,j.jsxs)(p.Z,{sx:{display:"flex",width:{xs:"100%",sm:"100%"},flexDirection:"row",mt:{xs:0,sm:2},mb:{xs:2},justifyContent:"space-between"},children:[(0,j.jsxs)(h.Z,{size:"small",sx:{flexBasis:{xs:"48%",sm:"38%"},display:{xs:"none",sm:"flex"}},children:[(0,j.jsx)(x.Z,{id:"select-label",children:"Filter products by category"}),(0,j.jsxs)(Z.Z,{labelId:"select-label",id:"demo-select-small",value:K,onChange:function(e){return be(e,"category")},label:"Filter products by category",children:[(0,j.jsx)(v.Z,{value:"allProducts",children:"All Products"}),J.length>0&&J.map((function(e,t){return(0,j.jsx)(v.Z,{value:e,sx:{textTransform:"capitalize"},children:e},t)}))]})]}),(0,j.jsxs)(h.Z,{size:"small",sx:{flexBasis:{xs:"48%",sm:"38%"}},children:[(0,j.jsx)(x.Z,{id:"select-label",children:"Filter products by sub category"}),(0,j.jsxs)(Z.Z,{labelId:"select-label",id:"demo-select-small",value:te,onChange:function(e){return be(e,"subCategory")},label:"Filter products by sub category",children:[(0,j.jsx)(v.Z,{value:"all",children:"All sub categories"}),V.length>0&&V.map((function(e,t){return(0,j.jsx)(v.Z,{value:e,sx:{textTransform:"capitalize"},children:e},t)}))]})]}),(0,j.jsxs)(h.Z,{size:"small",sx:{flexBasis:{md:"20%"}},children:[(0,j.jsx)(x.Z,{id:"select-label",children:"Sort products by"}),(0,j.jsxs)(Z.Z,{labelId:"select-label",id:"demo-select-small",value:le,onChange:function(e){var t,s=e.target.value;switch(s){case"nameAsc":t=L.sort((function(e,t){if(e.name<t.name)return-1}));break;case"nameDesc":t=L.sort((function(e,t){if(e.name>t.name)return-1}));break;case"priceAsc":t=L.sort((function(e,t){if(e.price<t.price)return-1}));break;case"priceDesc":t=L.sort((function(e,t){if(e.price>t.price)return-1}))}ae(s),D(t)},label:"Sort products by",children:[(0,j.jsx)(v.Z,{value:"nameAsc",children:"Name - A to Z"}),(0,j.jsx)(v.Z,{value:"nameDesc",children:"Name - Z to A"}),(0,j.jsx)(v.Z,{value:"priceAsc",children:"Price - Low to High"}),(0,j.jsx)(v.Z,{value:"priceDesc",children:"Price - High to Low"})]})]})]}),(0,j.jsx)(p.Z,{sx:{display:"flex",gap:{xs:"14px",sm:"25px",md:"16px",lg:"30px"},mb:2,flexWrap:{xs:"wrap"}},children:me?(0,j.jsx)(S.Z,{message:"Loading products..."}):L.length>0?L.slice(0,O).map((function(e){return(0,j.jsx)(y,{product:e},e.name)})):(0,j.jsx)(f.Z,{variant:"body1",sx:{fontSize:{xs:"1em",md:"1.25em"}},children:ue})}),L.length>0&&(0,j.jsx)(p.Z,{sx:{display:"flex",justifyContent:"center",my:3},children:O<(null===L||void 0===L?void 0:L.length)&&(0,j.jsx)(b.Z,{variant:"contained",size:"large",onClick:function(){sessionStorage.setItem("productsPerPage",O+6),T(O+6)},children:"Show more products"})})]})]})},C=i.memo(w)}}]);
//# sourceMappingURL=777.4214fef3.chunk.js.map