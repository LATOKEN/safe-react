(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[65],{2162:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"d",(function(){return l})),t.d(n,"c",(function(){return s})),t.d(n,"e",(function(){return p})),t.d(n,"a",(function(){return b}));var i=t(37),r=t(426),a=function(e){return e[r.a]},o=function(e){return e[r.b]},c=Object(i.a)(a,(function(e){return e})),l=Object(i.a)(o,(function(e){return e.items})),s=Object(i.a)(o,(function(e){return e.loaded})),d=Object(i.a)(a,(function(e){return e?Object.values(e):[]})),u=Object(i.a)(l,(function(e){var n=e.map((function(e){return e.assetAddress})),t=new Set(n);return Array.from(t)})),p=Object(i.a)(l,(function(e){return e.sort((function(e,n){return e.name.localeCompare(n.name)}))})),b=Object(i.a)(d,u,(function(e,n){return e.sort((function(e,n){return e.name.localeCompare(n.name)})).filter((function(e){var t=e.address;return n.includes(t)}))}))},2205:function(e,n,t){"use strict";t.d(n,"a",(function(){return U})),t.d(n,"b",(function(){return G}));var i,r,a,o,c,l,s,d,u,p,b,x,j,f,m,g=t(10),h=t(21),O=t(88),v=t(9),y=t(3121),z=t(391),w=t(13),S=t(26),k=t(755),C=t(69),A=t(89),N=t(140),I=t(92),R=t(22),T=Object(v.keyframes)(i||(i=Object(g.a)(["\n0% {\n  background-position: 0% 54%;\n}\n50% {\n  background-position: 100% 47%;\n}\n100% {\n  background-position: 0% 54%;\n}\n"]))),F=v.default.div(r||(r=Object(g.a)(["\n  height: ",";\n  width: ",";\n  border-radius: 50%;\n  background-color: lightgrey;\n  background: linear-gradient(84deg, lightgrey, transparent);\n  background-size: 400% 400%;\n  animation: "," 1.5s ease infinite;\n"])),(function(e){return"lg"===e.size?"112px":"50px"}),(function(e){return"lg"===e.size?"112px":"50px"}),T),P=v.default.div(a||(a=Object(g.a)(["\n  height: 18px;\n  width: 160px;\n  margin: 8px 0;\n\n  background-color: lightgrey;\n  background: linear-gradient(84deg, lightgrey, transparent);\n  background-size: 400% 400%;\n  animation: "," 1.5s ease infinite;\n"])),T),D=v.default.div(o||(o=Object(g.a)(["\n  height: 12px;\n  width: 240px;\n  margin: 2px 0;\n\n  background-color: lightgrey;\n  background: linear-gradient(84deg, lightgrey, transparent);\n  background-size: 400% 400%;\n  animation: "," 1.5s ease infinite;\n"])),T),E=t(5),W=t(71),L=t(0),H=(n.c=function(e){var n=e.safeApp,t=e.size,i=e.togglePin,r=e.isPinned,a=e.isCustomSafeApp,o=e.onRemove,c=Object(h.d)(C.a),l=Object(h.c)(),s=Object(W.a)().safeAddress,d=Object(S.p)(S.i.APPS,{shortName:Object(R.q)(),safeAddress:s}),u="".concat(d,"?appUrl=").concat(encodeURI(n.url));return n.fetchStatus===I.a.LOADING?Object(L.jsx)(_,{size:t,children:Object(L.jsxs)(M,{size:t,children:[Object(L.jsx)(J,{size:t,children:Object(L.jsx)(F,{size:t})}),Object(L.jsxs)(V,{size:t,children:[Object(L.jsx)(P,{}),Object(L.jsx)(D,{}),Object(L.jsx)(D,{})]})]})}):Object(L.jsx)(_,{size:t,children:Object(L.jsx)(B,{to:u,"aria-label":"open ".concat(n.name," Safe App"),children:Object(L.jsxs)(M,{size:t,children:[Object(L.jsx)(J,{size:t,children:Object(L.jsx)(q,{size:t,src:n.iconUrl,alt:"".concat(n.name||"Safe App"," Logo"),onError:H})}),Object(L.jsxs)(V,{size:t,children:[Object(L.jsx)(X,{size:"xs",children:n.name}),Object(L.jsx)(K,{size:"lg",color:"inputFilled",children:n.description})]}),Object(L.jsxs)(Q,{onClick:function(e){return e.preventDefault()},children:[Object(L.jsx)(Y,{onClick:function(){!function(e){var n,t,i,r,a=document.createRange();function o(n){var t;null===(t=n.clipboardData)||void 0===t||t.setData("text/plain",e),n.preventDefault()}a.selectNodeContents(document.body),null===(n=document)||void 0===n||null===(t=n.getSelection())||void 0===t||t.addRange(a),document.addEventListener("copy",o),document.execCommand("copy"),document.removeEventListener("copy",o),null===(i=document)||void 0===i||null===(r=i.getSelection())||void 0===r||r.removeAllRanges()}(Object(S.t)(n.url,c)),l(Object(A.h)(N.a.SHARE_SAFE_APP_URL_COPIED))},"aria-label":"copy ".concat(n.name," Safe App share link to clipboard"),children:Object(L.jsx)(w.Icon,{size:"md",type:"share",tooltip:"Copy share link"})}),!a&&Object(L.jsx)(Y,{onClick:function(){return i(n)},"aria-label":"".concat(r?"Unpin":"Pin"," ").concat(n.name," Safe App"),children:r?Object(L.jsx)(Z,{size:"md",type:"bookmarkFilled",color:"primary",tooltip:"Unpin from the Safe Apps"}):Object(L.jsx)(Z,{size:"md",type:"bookmark",tooltip:"Pin from the Safe Apps"})}),a&&Object(L.jsx)(Y,{onClick:function(){return null===o||void 0===o?void 0:o(n)},"aria-label":"Remove ".concat(n.name," custom Safe App"),children:Object(L.jsx)(w.Icon,{size:"md",type:"delete",color:"error",tooltip:"Remove Custom Safe App"})})]})]})})})},function(e){e.currentTarget.onerror=null,e.currentTarget.src=k.a}),U=190,G=16,_=Object(v.default)(y.a.div).attrs({layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})(c||(c=Object(g.a)(["\n  position: relative;\n  display: flex;\n  height: ","px;\n\n  grid-column: span ",";\n"])),U,(function(e){return"lg"===e.size?"2":"1"})),B=Object(v.default)(O.a)(l||(l=Object(g.a)(["\n  display: flex;\n  flex: 1 0;\n  height: ","px;\n  text-decoration: none;\n"])),U),M=Object(v.default)(w.Card)(s||(s=Object(g.a)(["\n  flex: 1 1 100%;\n  padding: ","px;\n  display: flex;\n  flex-direction: ",";\n  box-shadow: none;\n  border: 2px solid transparent;\n\n  transition: all 0.3s ease-in-out 0s;\n  transition-property: border-color, background-color;\n\n  :hover {\n    background-color: ",";\n    border: 2px solid ",";\n  }\n"])),G,(function(e){return"lg"===e.size?"row":"column"}),E.primary200,E.primary300),J=v.default.div(d||(d=Object(g.a)(["\n  flex: 0 0;\n  flex-basis: ",";\n\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n"])),(function(e){return"lg"===e.size?"50%":"auto"}),(function(e){return"lg"===e.size?"center":"start"})),q=v.default.img(u||(u=Object(g.a)(["\n  height: ",";\n  width: ",";\n  object-fit: contain;\n"])),(function(e){return"lg"===e.size?"112px":"50px"}),(function(e){return"lg"===e.size?"112px":"50px"})),V=v.default.div(p||(p=Object(g.a)(["\n  flex: 0 0;\n\n  flex-basis: ",";\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])),(function(e){return"lg"===e.size?"50%":"auto"})),X=Object(v.default)(w.Title)(b||(b=Object(g.a)(["\n  margin: 8px 0px;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: bold;\n  color: initial;\n"]))),K=Object(v.default)(w.Text)(x||(x=Object(g.a)(["\n  margin: 0;\n  line-height: 22px;\n\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]))),Q=v.default.div(j||(j=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  margin: 16px 12px;\n"]))),Y=Object(v.default)(z.a)(f||(f=Object(g.a)(["\n  padding: 8px;\n\n  && svg {\n    width: 16px;\n    height: 16px;\n  }\n"]))),Z=Object(v.default)(w.Icon)(m||(m=Object(g.a)(["\n  padding-left: 2px;\n"])))},3135:function(e,n,t){"use strict";t.r(n);var i,r=t(3),a=t(17),o=t(16),c=t(1),l=t(3090),s=t(269),d=t(268),u=t(21),p=t(2081),b=t(141),x=t.n(b),j=t(181),f=t(104),m=t(5),g=t(0),h=Object(s.a)({item:{backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 0 10px 0 rgba(33, 48, 77, 0.10)",boxSizing:"border-box",cursor:function(e){return e.granted?"pointer":"default"},display:"flex",flexDirection:"column",flexGrow:"1",minHeight:"250px",minWidth:"0",position:"relative","&:hover .showOnHover":{opacity:"1"},"&:active .showOnHover":{opacity:"1"}},mainContent:{display:"flex",flexDirection:"column",flexGrow:"1",position:"relative",zIndex:"1"},extraContent:{alignItems:"center",backgroundColor:"rgba(255, 243, 226, 0.6)",bottom:"0",cursor:"pointer",display:"flex",justifyContent:"center",left:"0",opacity:"0",position:"absolute",right:"0",top:"0",transition:"opacity 0.15s ease-out",zIndex:"5"},image:{borderRadius:"8px",maxWidth:"200px",maxHeight:"200px",width:"100%",height:"100%",objectFit:"contain",margin:"12px 12px 0",alignSelf:"center"},textContainer:{boxSizing:"border-box",color:m.fontColor,flexShrink:"0",fontSize:"12px",lineHeight:"1.4",padding:"15px 22px 20px"},title:{fontWeight:"bold",margin:"0",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},text:{margin:"0",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},buttonIcon:{fontSize:16,marginRight:m.sm},sendButton:{borderRadius:m.xs,minWidth:"85px","& > span":{fontSize:"14px"}}}),O=function(e){var n=e.data,t=e.onSend,i=Object(u.d)(f.b),r=h({granted:i});return Object(g.jsxs)("div",{className:r.item,children:[Object(g.jsxs)("div",{className:r.mainContent,children:[Object(g.jsx)("img",{src:n.image,className:r.image,loading:"lazy"}),Object(g.jsxs)("div",{className:r.textContainer,children:[n.name&&Object(g.jsx)("h3",{className:r.title,title:n.name,children:n.name}),n.description&&Object(g.jsx)("p",{className:r.text,title:n.description,children:n.description})]})]}),i&&Object(g.jsx)("div",{className:x()(r.extraContent,"showOnHover"),children:Object(g.jsx)(j.a,{className:r.sendButton,color:"primary",onClick:t,size:"small",variant:"contained",children:"Send"})})]})},v=t(59),y=t(2162),z=t(479),w=t(28),S=t(2336),k=t(40),C=t(3101),A=["children","style"],N=function(e){["ResizeObserver loop completed with undelivered notifications.","ResizeObserver loop limit exceeded"].includes(e.message)&&e.stopImmediatePropagation()},I=function(e){var n=e.children,t=e.style,i=Object(k.a)(e,A);return Object(c.useEffect)((function(){return window.addEventListener("error",N),function(){return window.removeEventListener("error",N)}}),[]),Object(g.jsx)(C.a,Object(r.a)(Object(r.a)({style:Object(r.a)({height:"calc(100% - 54px)"},t)},i),{},{children:n}))},R=t(2086),T=t(279),F=function(e){var n=Object(T.a)("".concat(e.id,"Closed")),t=Object(a.a)(n,2),i=t[0],r=t[1];return i?null:Object(g.jsxs)(R.a,{severity:"info",onClose:function(){return r(!0)},style:{margin:"0 20px 26px 0"},children:[Object(g.jsx)(v.a,{style:{fontWeight:"bold",margin:"0 0 0.5em"},children:e.title}),Object(g.jsx)(v.a,{noMargin:!0,children:e.text})]})},P=t(2205),D=t(746),E=Object(s.a)(Object(d.a)({cardInner:{boxSizing:"border-box",maxWidth:"100%",padding:"52px 54px"},cardOuter:{boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)"},gridRow:(i={boxSizing:"border-box",columnGap:"30px",display:"grid",gridTemplateColumns:"1fr",marginBottom:"45px",maxWidth:"100%",rowGap:"45px","&:last-child":{marginBottom:"0"}},Object(o.a)(i,"@media (min-width: ".concat(m.screenXs,"px)"),{gridTemplateColumns:"1fr 1fr"}),Object(o.a)(i,"@media (min-width: ".concat(m.screenSm,"px)"),{gridTemplateColumns:"1fr 1fr 1fr 1fr"}),i),title:{alignItems:"center",display:"flex",margin:"18px"},titleImg:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",borderRadius:"50%",height:"45px",margin:"0 10px 0 0",width:"45px"},titleText:{color:m.fontColor,fontSize:"18px",fontWeight:"normal",lineHeight:"1.2",margin:"0"},titleFiller:{backgroundColor:"#e8e7e6",flexGrow:1,height:"2px",marginLeft:"40px"},noData:{fontSize:m.lg,textAlign:"center"}})),W=function(e){var n=e.children,t=E(),i=Object(c.useState)(),o=Object(a.a)(i,2),s=o[0],d=o[1],p=Object(c.useState)(!1),b=Object(a.a)(p,2),x=b[0],j=b[1],f=Object(u.d)(y.c),m=Object(u.d)(y.e),h=Object(u.d)(y.a),k=Object(c.useMemo)((function(){return m.length}),[m]);Object(c.useEffect)((function(){Object(w.d)(Object(r.a)(Object(r.a)({},S.a.NFT_AMOUNT),{},{label:k}))}),[k]);return 0===h.length?Object(g.jsxs)(c.Fragment,{children:[n,Object(g.jsx)(l.a,{className:t.cardOuter,children:Object(g.jsx)("div",{className:t.cardInner,children:Object(g.jsx)(v.a,{className:t.noData,children:f?"No NFTs available":"Loading NFTs..."})})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I,{data:h,itemContent:function(e,i){return i?Object(g.jsxs)(c.Fragment,{children:[0===e&&n,Object(g.jsxs)("div",{className:t.title,children:[Object(g.jsx)("div",{className:t.titleImg,style:{backgroundImage:"url(".concat(i.image||"",")")}}),Object(g.jsx)("h2",{className:t.titleText,children:i.name}),Object(g.jsx)("div",{className:t.titleFiller})]}),Object(g.jsx)("div",{className:t.gridRow,children:m.filter((function(e){var n=e.assetAddress;return i.address===n})).map((function(e,n){return Object(g.jsx)(O,{data:e,onSend:function(){return function(e){d(e),j(!0)}(e)}},"".concat(i.slug,"_").concat(e.tokenId,"_").concat(n))}))})]},i.slug):null}}),Object(g.jsx)(z.a,{activeScreenType:"sendCollectible",isOpen:x,onClose:function(){return j(!1)},selectedToken:s})]})};n.default=function(){var e=Object(D.a)(),n=e.allApps,t=e.pinnedSafeApps,i=e.togglePin,r=Object(c.useMemo)((function(){return n.filter((function(e){var n;return null===(n=e.tags)||void 0===n?void 0:n.includes("nft")}))}),[n]),a=Object(g.jsx)(F,{id:"collectiblesInfo",title:"Use Safe Apps to view your NFT portfolio",text:"Get the most optimal experience with Safe Apps. View your collections, buy or sell NFTs, and more."});return Object(g.jsxs)(W,{children:[r.length>0&&Object(g.jsxs)(g.Fragment,{children:[a,Object(g.jsx)("h3",{children:"NFT apps"}),Object(g.jsx)(p.a,{style:{marginBottom:"30px"},children:r.map((function(e){return Object(g.jsx)(p.a,{item:!0,xs:4,children:Object(g.jsx)(P.c,{safeApp:e,size:"md",togglePin:i,isPinned:t.some((function(n){return n.id===e.id}))})},e.id)}))})]}),Object(g.jsx)("h3",{children:"NFTs"})]})}}}]);
//# sourceMappingURL=65.04c9e1f9.chunk.js.map