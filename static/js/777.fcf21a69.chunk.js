"use strict";(self.webpackChunkShubham_Computers=self.webpackChunkShubham_Computers||[]).push([[777],{9777:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var r=s(3433),n=s(4165),l=s(5861),a=s(9439),i=s(2791),o=s(7689),c=s(1087),u=s(6907),d=s(7365),f=s(890),m=s(1614),p=s(4554),x=s(4925),h=s(5022),v=s(8096),g=s(7391),Z=s(7198),b=s(6151),y=s(168),S=s(184),j=i.lazy((function(){return Promise.all([s.e(87),s.e(957)]).then(s.bind(s,3957))})),w=function(){var e=(0,o.s0)(),t=(0,o.UO)().route,s=(0,c.lr)(),w=(0,a.Z)(s,1)[0],C=(0,i.useState)(JSON.parse(sessionStorage.getItem("allProducts"))||[]),P=(0,a.Z)(C,2),k=P[0],A=P[1],I=(0,i.useState)([]),z=(0,a.Z)(I,2),L=z[0],D=z[1],N=(0,i.useState)(sessionStorage.getItem("productsPerPage")||6),O=(0,a.Z)(N,2),B=O[0],T=O[1],E=(0,i.useState)(""),F=(0,a.Z)(E,2),G=F[0],_=F[1],R=i.useState([]),W=(0,a.Z)(R,2),H=W[0],J=W[1],Q=i.useState("allProducts"),q=(0,a.Z)(Q,2),K=q[0],U=q[1],X=i.useState([]),M=(0,a.Z)(X,2),V=M[0],Y=M[1],$=i.useState("all"),ee=(0,a.Z)($,2),te=ee[0],se=ee[1],re=(0,i.useState)("nameAsc"),ne=(0,a.Z)(re,2),le=ne[0],ae=ne[1],ie=i.useState("No products found. Please refine your search and try again."),oe=(0,a.Z)(ie,2),ce=oe[0],ue=oe[1],de=i.useState(!0),fe=(0,a.Z)(de,2),me=fe[0],pe=fe[1],xe=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var t,s,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=null,e.next=4,(0,d.Z)("/".concat("1ZvGw6Rj62R7tGGzCXn8GdiRQKOe0TrEWBlQSm2EPnCc","/values/products_format"));case 4:(s=e.sent).data.values.shift(),t=s.data.values.map((function(e,t){if(e.length){var s,r,n,l,a,i,o,c=null===(s=e[1])||void 0===s?void 0:s.split(/[.\r?\n]/).filter((function(e){return e})),u=null===(r=e[2])||void 0===r?void 0:r.split(/[.\r?\n]/).filter((function(e){return e})),d=null===(n=e[3])||void 0===n?void 0:n.split(/[.\r?\n]/).filter((function(e){return e})),f=null===(l=e[9])||void 0===l?void 0:l.split(/[\r?\n]/).filter((function(e){return e})),m=null===(a=e[10])||void 0===a?void 0:a.split(/[\r?\n]/).filter((function(e){return e})),p=null===(i=e[11])||void 0===i?void 0:i.split(/[.\r?\n]/).filter((function(e){return e}));return{name:e[0],seo_keywords:"".concat(e[0]," details"),features:null===d||void 0===d?void 0:d.map((function(e){return e.trim()})),price:e[5],link:e[4],categories:null===c||void 0===c?void 0:c.map((function(e){return e.trim().toLowerCase()})),subCategories:null===u||void 0===u?void 0:u.map((function(e){return e.trim().toLowerCase()})),keywords:null===(o=e[6])||void 0===o?void 0:o.split(" "),mainImg:{src:e[7],alt:e[8]},thumbnails:null===f||void 0===f?void 0:f.map((function(t,s){var r,n;return{src:null===t||void 0===t?void 0:t.trim(),alt:null===(r=m[s])||void 0===r?void 0:r.trim(),price:p?null===(n=p[s])||void 0===n?void 0:n.trim():e[5]}}))}}return null})),(r=t.filter((function(e){return null!=e}))).length&&(sessionStorage.setItem("allProducts",JSON.stringify(r)),A(r),ge(r),he(r),ve(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),he=function(e){var t=[];e.map((function(e){t.push.apply(t,(0,r.Z)(e.categories))})),J((0,r.Z)(new Set(t)))},ve=function(e){var t=[];e.map((function(e){t.push.apply(t,(0,r.Z)(e.subCategories))})),Y((0,r.Z)(new Set(t)))},ge=function(e){var s=[],n="All products";if(t){var l=t.replaceAll("-"," ");s=e.filter((function(e){return e.categories.includes(l)})),n=l}else if(w.get("search")){var a=w.get("search");s=e.filter((function(e){return[e.name].concat((0,r.Z)(e.keywords),(0,r.Z)(e.categories)).map((function(e){return e.toLowerCase()})).includes(a.toLowerCase())})),n=a}else s=e;D(s),_(n),pe(!1)},Ze=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var s,r,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=0,r=(new Date).getTime(),null!=(l=sessionStorage.getItem("productsSession"))){e.next=10;break}return sessionStorage.setItem("productsSession",r),e.next=7,xe();case 7:console.log("products session set"),e.next=21;break;case 10:if(!(r-l>60*s*60*1e3)){e.next=18;break}return sessionStorage.removeItem("productsSession"),sessionStorage.setItem("productsSession",r),e.next=15,xe();case 15:console.log("products session refreshed"),e.next=21;break;case 18:console.log("products session exists"),console.log("allProducts from session ",k),k.length&&(ge(k),he(k),ve(k),t&&U(t.replaceAll("-"," ")));case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){Ze()}),[]),(0,i.useEffect)((function(){k.length&&ge(k)}),[t,w]);var be=function(t,s){if("category"==s){var r="allProducts"==t.target.value?"":t.target.value.replaceAll(" ","-");U(t.target.value),se("all"),e("/products/".concat(r))}else{var n=k.filter((function(e){return"allProducts"==K?e:e.categories.includes(K)}));n=n.filter((function(e){return"all"==t.target.value?e:e.subCategories.includes(t.target.value)})),se(t.target.value),D(n)}};return(0,S.jsxs)("div",{children:[(0,S.jsxs)(u.ql,{children:[(0,S.jsx)("title",{children:"Shubham Computers - Our Products"}),(0,S.jsx)("meta",{name:"keywords",content:"Shubham Computers - Our Products"}),(0,S.jsx)("meta",{name:"description",content:"Shubham Computers - Our Products"})]}),(0,S.jsxs)(m.Z,{maxWidth:"xl",className:"products-page",children:[(0,S.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"start",flexDirection:{xs:"column",sm:"row"},pt:{xs:2,sm:2},px:{xs:0},pb:2},children:[(0,S.jsx)(f.Z,{variant:"h1",sx:{textAlign:{sm:"left"},fontSize:{xs:"1.5em",md:"2em"},flexBasis:{md:"70%"},textTransform:"uppercase"},children:G}),(0,S.jsx)(v.Z,{size:"small",sx:{flexBasis:{md:"30%"},display:{xs:"none",md:"flex"}},children:(0,S.jsx)(g.Z,{id:"outlined-search",label:"Search products on this page",type:"search",size:"small",onInput:function(e){var t=(L.length?L:k).filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));""===e.target.value?ge(k):t.length?D(t):(D([]),ue("No products were found for '".concat(e.target.value,"'. Please refine your search and try again.")))}})})]}),(0,S.jsxs)(p.Z,{sx:{display:"flex",width:{xs:"100%",sm:"100%"},flexDirection:"row",mt:{xs:0,sm:2},mb:{xs:2},justifyContent:"space-between"},children:[(0,S.jsxs)(v.Z,{size:"small",sx:{flexBasis:{xs:"48%",sm:"38%"},display:{xs:"none",sm:"flex"}},children:[(0,S.jsx)(x.Z,{id:"select-label",children:"Filter products by category"}),(0,S.jsxs)(Z.Z,{labelId:"select-label",id:"demo-select-small",value:K,onChange:function(e){return be(e,"category")},label:"Filter products by category",children:[(0,S.jsx)(h.Z,{value:"allProducts",children:"All Products"}),H.length>0&&H.map((function(e,t){return(0,S.jsx)(h.Z,{value:e,sx:{textTransform:"capitalize"},children:e},t)}))]})]}),(0,S.jsxs)(v.Z,{size:"small",sx:{flexBasis:{xs:"48%",sm:"38%"}},children:[(0,S.jsx)(x.Z,{id:"select-label",children:"Filter products by sub category"}),(0,S.jsxs)(Z.Z,{labelId:"select-label",id:"demo-select-small",value:te,onChange:function(e){return be(e,"subCategory")},label:"Filter products by sub category",children:[(0,S.jsx)(h.Z,{value:"all",children:"All sub categories"}),V.length>0&&V.map((function(e,t){return(0,S.jsx)(h.Z,{value:e,sx:{textTransform:"capitalize"},children:e},t)}))]})]}),(0,S.jsxs)(v.Z,{size:"small",sx:{flexBasis:{md:"20%"}},children:[(0,S.jsx)(x.Z,{id:"select-label",children:"Sort products by"}),(0,S.jsxs)(Z.Z,{labelId:"select-label",id:"demo-select-small",value:le,onChange:function(e){var t,s=e.target.value;switch(s){case"nameAsc":t=L.sort((function(e,t){if(e.name<t.name)return-1}));break;case"nameDesc":t=L.sort((function(e,t){if(e.name>t.name)return-1}));break;case"priceAsc":t=L.sort((function(e,t){if(e.price<t.price)return-1}));break;case"priceDesc":t=L.sort((function(e,t){if(e.price>t.price)return-1}))}ae(s),D(t)},label:"Sort products by",children:[(0,S.jsx)(h.Z,{value:"nameAsc",children:"Name - A to Z"}),(0,S.jsx)(h.Z,{value:"nameDesc",children:"Name - Z to A"}),(0,S.jsx)(h.Z,{value:"priceAsc",children:"Price - Low to High"}),(0,S.jsx)(h.Z,{value:"priceDesc",children:"Price - High to Low"})]})]})]}),(0,S.jsx)(p.Z,{sx:{display:"flex",gap:{xs:"14px",sm:"25px",md:"16px",lg:"30px"},mb:2,flexWrap:{xs:"wrap"}},children:me?(0,S.jsx)(y.Z,{message:"Loading products..."}):L.length>0?L.slice(0,B).map((function(e){return(0,S.jsx)(j,{product:e},e.name)})):(0,S.jsx)(f.Z,{variant:"body1",sx:{fontSize:{xs:"1em",md:"1.25em"}},children:ce})}),L.length>0&&(0,S.jsx)(p.Z,{sx:{display:"flex",justifyContent:"center",my:3},children:B<(null===L||void 0===L?void 0:L.length)&&(0,S.jsx)(b.Z,{variant:"contained",size:"large",onClick:function(){sessionStorage.setItem("productsPerPage",B+6),T(B+6)},children:"Show more products"})})]})]})},C=i.memo(w)}}]);
//# sourceMappingURL=777.fcf21a69.chunk.js.map