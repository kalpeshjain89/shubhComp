"use strict";(self.webpackChunkShubham_Computers=self.webpackChunkShubham_Computers||[]).push([[35],{5035:function(i,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(4165),n=t(5861),s=t(9439),a=t(2791),o=t(6907),c=t(7689),u=t(4554),l=t(890),d=t(7365),m=t(7087),p=t(4427),f=t(184),h=function(){var i=(0,c.UO)().name,e=(0,c.TH)();console.log("location ",e);var t=(0,a.useState)(e.state||null),h=(0,s.Z)(t,2),v=h[0],g=h[1],I=(0,a.useState)(e.state?e.state.features.map((function(i,e){return(0,f.jsx)("li",{children:i},e)})):[]),A=(0,s.Z)(I,2),b=A[0],x=A[1],j=(0,a.useState)(e.state?{src:e.state.mainImg.src,alt:e.state.mainImg.alt,price:e.state.thumbnails[0].price||e.state.price}:{}),w=(0,s.Z)(j,2),T=w[0],q=w[1],C=(0,a.useState)(e.state?{backgroundImage:"url(/images/products/".concat(e.state.mainImg.src,")"),backgroundPosition:"0% 0%"}:{}),X=(0,s.Z)(C,2),N=X[0],F=X[1],L=(0,a.useState)(0),k=(0,s.Z)(L,2),S=k[0],E=k[1],R=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t,n,s,a,o,c,u,l,m,p,h,v,I,A,b,j,w,T;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("https://docs.google.com/spreadsheets/d/1ZvGw6Rj62R7tGGzCXn8GdiRQKOe0TrEWBlQSm2EPnCc/gviz/tq?tqx=out:csv&range=A2:M&sheet=testData&tq=SELECT%20*%20WHERE%20A%20=%20%27".concat(i,"%27"));case 3:h=e.sent,v=h.data.replace(/(\r\n|\n|\r|")/gm," ").split(" ,"),I=null===(t=v[3])||void 0===t?void 0:t.split(/[.\r?\n]/).filter((function(i){return i})),A=null===(n=v[1])||void 0===n?void 0:n.split(/[.\r?\n]/).filter((function(i){return i})),b=null===(s=v[9])||void 0===s?void 0:s.split(" ").filter((function(i){return i})),j=null===(a=v[10])||void 0===a?void 0:a.split(" ").filter((function(i){return i})),w=null===(o=v[11])||void 0===o?void 0:o.split(/[.\r?\n]/).filter((function(i){return i})),T={name:null===(c=v[0].toLowerCase())||void 0===c?void 0:c.trim(),features:null===I||void 0===I?void 0:I.map((function(i){return i.trim()})),price:v[5],link:v[4],categories:null===A||void 0===A?void 0:A.map((function(i){return i.trim().toLowerCase()})),keywords:null===(u=v[6])||void 0===u?void 0:u.split(" "),mainImg:{src:null===(l=v[7])||void 0===l?void 0:l.trim(),alt:null===(m=v[8])||void 0===m?void 0:m.trim(),price:w?null===(p=w[0])||void 0===p?void 0:p.trim():v[5]},thumbnails:null===b||void 0===b?void 0:b.map((function(i,e){var t,r;return{src:null===i||void 0===i?void 0:i.trim(),alt:null===(t=j[e])||void 0===t?void 0:t.trim(),price:w?null===(r=w[e])||void 0===r?void 0:r.trim():v[5]}}))},g(T),x(T.features.map((function(i,e){return(0,f.jsx)("li",{children:i},e)}))),q(T.mainImg),F({backgroundImage:"url(/images/products/".concat(T.mainImg.src,")"),backgroundPosition:"0% 0%"}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){null==e.state&&R()}),[]);var D=function(){var i=(0,n.Z)((0,r.Z)().mark((function i(e,t){return(0,r.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:E(t),q({src:e.src,alt:e.alt,price:e.price}),F({backgroundImage:"url(/images/products/".concat(e.src,")")});case 3:case"end":return i.stop()}}),i)})));return function(e,t){return i.apply(this,arguments)}}();return v&&(0,f.jsxs)("div",{children:[(0,f.jsxs)(o.ql,{children:[(0,f.jsxs)("title",{children:["Shubham Computers - ",v.name]}),(0,f.jsx)("meta",{name:"description",content:"Shubham Computers - Product Details"})]}),(0,f.jsx)(u.Z,{sx:{p:{sm:0,md:4},backgroundColor:"#FAFAFA"},children:(0,f.jsxs)("div",{className:"product-wrapper",children:[(0,f.jsxs)("div",{className:"product-image-wrapper",children:[(0,f.jsx)("div",{className:"product-image-main",onMouseMove:function(i){return function(i){var e=i.target.getBoundingClientRect(),t=e.left,r=e.top,n=e.width,s=e.height,a=(i.pageX-t)/n*100,o=(i.pageY-r)/s*100;F({backgroundImage:"url(/images/products/".concat(T.src,")"),backgroundPosition:"".concat(a,"% ").concat(o,"%")})}(i)},children:(0,f.jsx)("img",{src:"./images/products/".concat(null===T||void 0===T?void 0:T.src),alt:T.alt})}),(0,f.jsx)("div",{className:"zoomedImage",style:N,children:(0,f.jsx)("img",{className:"watermark",src:p,alt:""})}),v.thumbnails.length>0&&(0,f.jsx)("div",{className:"product-thumb-images-wrapper",children:v.thumbnails.map((function(i,e){return(0,f.jsx)("div",{className:S===e?"active":"",onClick:function(){return D(i,e)},children:(0,f.jsx)(m.LazyLoadImage,{src:"./images/products/".concat(null===i||void 0===i?void 0:i.src),alt:i.alt,placeholderSrc:p,effect:"blur"})},e)}))})]}),(0,f.jsxs)("div",{className:"product-details-wrapper",children:[(0,f.jsx)(l.Z,{gutterBottom:!0,variant:"h1",sx:{fontSize:{xs:"2em",md:"2.5em"},mb:0},children:v.name.toUpperCase()}),(0,f.jsxs)("div",{className:"product-price-wrapper",style:{fontSize:"1.5em"},children:["\u20b9 ",T.price]}),v.features.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{gutterBottom:!0,variant:"h3",sx:{fontSize:"1.25em",m:0},children:"Product description & features"}),(0,f.jsx)("ul",{className:"product-features-list",children:b})]}),v.link&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{gutterBottom:!0,variant:"h3",sx:{fontSize:"1.25em",m:0,mt:3},children:"Product link"}),(0,f.jsx)("div",{children:(0,f.jsx)("a",{href:v.link,target:"_blank",rel:"noopener noreferrer",children:v.link})})]})]})]})})]})},v=a.memo(h)},4427:function(i){i.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=35.a117328b.chunk.js.map