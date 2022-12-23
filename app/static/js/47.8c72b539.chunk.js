(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[47],{2110:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(17),o=n(269),a=n(1),c=n.p+"static/media/qrcode.fec1b6d8.svg",i=n(391),s=n(233),d=n.n(s),l=n(2140),b=n.n(l),j=n(5),u=n(268),O=Object(u.a)({heading:{padding:j.lg,justifyContent:"space-between",maxHeight:"75px",boxSizing:"border-box"},loaderContainer:{width:"100%",height:"100%"},close:{height:"25px",width:"25px",color:j.secondaryText},detailsContainer:{backgroundColor:j.background,maxHeight:"450px"},buttonRow:{height:"84px",justifyContent:"center"},button:{"&:last-child":{marginLeft:j.sm}}}),x=n(87),h=n(156),p=n(181),f=n(157),m=n(166),g=n(59),v=n(81),y=n(0),C=Object(o.a)(O),w=function(e){var t=e.isOpen,n=e.onClose,o=e.onScan,c=C(),s=Object(a.useState)(!1),l=Object(r.a)(s,2),j=l[0],u=l[1],O=Object(a.useState)(null),w=Object(r.a)(O,2),k=w[0],B=w[1],S=Object(a.useState)(!1),E=Object(r.a)(S,2),T=E[0],R=E[1],P=a.createRef(),I=a.useCallback((function(){P.current.openImageDialog()}),[P]);Object(a.useEffect)((function(){j||!T||k||(u(!0),I())}),[T,I,j,u,k]);var N=function(e,t){if(e)return console.error("QR code error",e),void("NotAllowedError"===e.name||"PermissionDismissedError"===e.name?(R(!0),u(!1)):B("The QR could not be read"));t?o(t):T&&B("The QR could not be read")};return Object(y.jsxs)(x.c,{description:"Receive Tokens Form",handleClose:n,open:t,title:"Receive Tokens",children:[Object(y.jsxs)(v.a,{align:"center",className:c.heading,grow:!0,children:[Object(y.jsx)(g.a,{noMargin:!0,size:"xl",children:"Scan QR"}),Object(y.jsx)(i.a,{disableRipple:!0,onClick:n,children:Object(y.jsx)(d.a,{className:c.close})})]}),Object(y.jsx)(m.a,{}),Object(y.jsxs)(f.a,{className:c.detailsContainer,layout:"column",middle:"xs",children:[k&&Object(y.jsx)(h.a,{padding:"md",margin:"md",children:k}),Object(y.jsx)(b.a,{legacyMode:T,onError:function(e){return N(e,null)},onScan:function(e){return N(null,e)},ref:P,style:{width:"400px",height:"400px"},facingMode:"user"})]}),Object(y.jsx)(m.a,{}),Object(y.jsxs)(v.a,{align:"center",className:c.buttonRow,children:[Object(y.jsx)(p.a,{className:c.button,color:"secondary",minWidth:154,onClick:n,children:"Close"}),Object(y.jsx)(p.a,{className:c.button,color:"primary",minWidth:154,onClick:function(){R(!0),B(null),u(!1)},variant:"contained",children:"Upload an image"})]})]})},k=n(126),B=Object(o.a)({qrCodeBtn:{cursor:"pointer"}}),S=function(e){var t=e.handleScan,n=e.testId,o=B(),i=Object(a.useState)(!1),s=Object(r.a)(i,2),d=s[0],l=s[1],b=function(){l(!1)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(k.a,{alt:"Scan QR",className:o.qrCodeBtn,height:20,onClick:function(){l(!0)},role:"button",src:c,testId:n||"qr-icon"}),d&&Object(y.jsx)(w,{isOpen:d,onClose:b,onScan:function(e){t(e,b)}})]})}},2129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(7),o=n(8),a=n(14),c=n(15),i=n(768),s=n(771),d=n(769),l=n(1060),b=n(1),j=n(0),u=function(e){if(e)return{maxWidth:"".concat(e,"px")}},O=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).changeSort=function(t,n){return function(){(0,e.props.onSort)(t,n)}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.columns,r=t.order,o=t.orderBy;return Object(j.jsx)(s.a,{children:Object(j.jsx)(d.a,{children:n.map((function(t){return Object(j.jsx)(i.a,{align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:o===t.id&&r,children:t.static?Object(j.jsx)("div",{style:t.style,children:t.label}):Object(j.jsx)(l.a,{active:o===t.id,direction:r,onClick:e.changeSort(t.id,t.order),style:t.style,children:t.label})},t.id)}))})})}}]),n}(b.PureComponent);t.b=O},2142:function(e,t,n){"use strict";var r,o=n(10),a=n(9),c=n(0),i=a.default.button(r||(r=Object(o.a)(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background-color 0.2s ease-in-out;\n  outline-color: transparent;\n  height: 24px;\n  width: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.separator}));t.a=function(e){var t=e.onClick,n=void 0===t?function(){}:t,r=e.children,o=e.dataTestId;return Object(c.jsx)(i,{onClick:n,type:"button","data-testid":o,children:r})}},2146:function(e,t,n){"use strict";var r=n(7),o=n(8),a=n(14),c=n(15),i=n(13),s=n(828),d=n(770),l=n(1058),b=n(23),j=n(1),u=n(2129),O=n(105),x=function(e,t,n,r,o){var a=r?"".concat(n,"Order"):n;return o(t[a])<o(e[a])?-1:o(t[a])>o(e[a])?1:0},h=n(81),p=n(5),f=n(0),m={root:{backgroundColor:"white",borderTopRightRadius:p.sm,borderTopLeftRadius:p.sm,boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)"},selectRoot:{lineHeight:p.xxl,backgroundColor:"white"},white:{backgroundColor:"white"},paginationRoot:{backgroundColor:"white",boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)",marginBottom:"90px",borderBottomRightRadius:p.sm,borderBottomLeftRadius:p.sm},loader:{boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)"}},g={"aria-label":"Previous Page"},v={"aria-label":"Next Page"},y=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).onSort=function(e,t){var n=o.state,r=n.order,a=n.orderBy,c=o.props.defaultOrder,i="desc";r&&a===e&&"desc"===r?i="asc":r||"desc"!==c||(i="asc"),o.setState((function(){return{order:i,orderBy:e,orderProp:t,fixed:!1}}))},o.getEmptyStyle=function(){return{height:"calc(100vh - ".concat(255,"px)"),borderTopRightRadius:p.sm,borderTopLeftRadius:p.sm,backgroundColor:"white",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},o.handleChangePage=function(e,t){o.setState({page:t})},o.handleChangeRowsPerPage=function(e){var t=Number(e.target.value);o.setState({rowsPerPage:t})},o.state={page:0,order:void 0,orderBy:void 0,fixed:void 0,orderProp:!1,rowsPerPage:void 0},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.columns,n=e.defaultOrderBy;n&&t&&(t.find((function(e){return e.id===n})).order&&this.setState({orderProp:!0}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,r=e.columns,o=e.data,a=e.defaultFixed,c=e.defaultOrder,b=e.defaultOrderBy,j=e.defaultRowsPerPage,p=e.disableLoadingOnEmptyTable,m=e.disablePagination,y=e.label,C=e.noBorder,w=e.size,k=this.state,B=k.fixed,S=k.order,E=k.orderBy,T=k.orderProp,R=k.page,P=k.rowsPerPage,I=E||b,N=S||c,z=P||j,D="undefined"!==typeof B?B:!!a,L={selectRoot:n.selectRoot,root:!C&&n.paginationRoot,input:n.white},A=r.find((function(e){return e.id===I})),M=function(e,t,n){var r=n?e.filter((function(e){return e.fixed})):Object(O.a)([]),o=(n?e.filter((function(e){return!e.fixed})):e).map((function(e,t){return[e,t]})),a=(o=o.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]}))).map((function(e){return e[0]}));return r.concat(a)}(o,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return"desc"===e?function(e,o){return x(e,o,t,n,r)}:function(e,o){return-x(e,o,t,n,r)}}(N,I,T,null===A||void 0===A?void 0:A.formatTypeSort),D);m||(M=M.slice(R*z,R*z+z));var H=0===w&&!p;return Object(f.jsxs)(f.Fragment,{children:[!H&&Object(f.jsxs)(s.a,{"aria-labelledby":y,className:C?"":n.root,children:[Object(f.jsx)(u.b,{columns:r,onSort:this.onSort,order:S,orderBy:I}),Object(f.jsx)(d.a,{children:t(M)})]}),H&&Object(f.jsx)(h.a,{className:n.loader,style:this.getEmptyStyle(),children:Object(f.jsx)(i.Loader,{size:"sm"})}),!m&&Object(f.jsx)(l.a,{backIconButtonProps:g,classes:L,component:"div",count:w,nextIconButtonProps:v,onPageChange:this.handleChangePage,onRowsPerPageChange:this.handleChangeRowsPerPage,page:R,rowsPerPage:z,rowsPerPageOptions:[5,10,25,50,100]})]})}}]),n}(j.Component);y.defaultProps={defaultOrder:"asc",disablePagination:!1,defaultRowsPerPage:5};t.a=Object(b.a)(m)(y)},2163:function(e,t,n){"use strict";var r=n(16),o=n(3),a=n(41),c=n(17),i=n(1),s=n(253),d=n(2141),l=n(833),b=n(819),j=n(255),u=n(158),O=n(82),x=n(34),h=n(46),p=n(78),f=n(29),m=n(183),g=n(0);t.a=function(e){var t=e.className,n=void 0===t?"":t,v=e.name,y=void 0===v?"recipientAddress":v,C=e.text,w=void 0===C?"Recipient*":C,k=e.placeholder,B=void 0===k?"Recipient*":k,S=e.fieldMutator,E=e.testId,T=e.inputAdornment,R=e.validators,P=void 0===R?[]:R,I=e.defaultValue,N=e.disabled,z=Object(i.useState)(""),D=Object(c.a)(z,2),L=D[0],A=D[1],M=Object(i.useState)({}),H=Object(c.a)(M,2),F=H[0],_=H[1],K=F[L],V=""===K,W=Object(i.useCallback)((function(e){var t=Object(m.b)(e);return u.d.apply(void 0,Object(a.a)(P))(t.address)}),[P]),Y=Object(i.useMemo)((function(){return Object(u.d)(u.p,u.k,W)}),[W]),U=Object(i.useCallback)((function(e){var t=Object(O.c)(e);if(A(e),Object(h.e)(t)||Object(h.d)(t))_((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,""))})),Object(x.b)(t).then((function(t){var n=Object(p.a)(t);_((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,n))}))})).catch((function(t){_((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,void 0))})),Object(f.c)(f.b._101,t.message)}));else if(!Object(u.k)(t)){var n=Object(m.b)(t),a=Object(p.a)(n.address)||n.address;S(a)}}),[A,_,S]);Object(i.useEffect)((function(){K&&U(K)}),[K,U]);var q=V?{endAdornment:Object(g.jsx)(l.a,{position:"end",children:Object(g.jsx)(b.a,{size:"16px"})})}:T;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(s.a,{className:n,component:j.a,defaultValue:I,disabled:N,inputAdornment:q,name:y,placeholder:B,label:w,spellCheck:!1,validate:Y,inputProps:{"data-testid":E}}),Object(g.jsx)(d.a,{name:y,children:U})]})}},3126:function(e,t,n){"use strict";n.r(t);var r,o,a,c,i,s,d,l,b=n(3),j=n(17),u=n(10),O=n(13),x=n(768),h=n(829),p=n(769),f=n(269),m=n(141),g=n.n(m),v=n(9),y=n(1),C=n(21),w=n(5),k=n(268),B=Object(k.a)({formContainer:{minHeight:"250px"},title:{padding:w.lg,paddingBottom:0},annotation:{paddingLeft:w.lg},hide:{"&:hover":{backgroundColor:"".concat(w.background)},"&:hover $actions":{visibility:"initial"}},actions:{justifyContent:"flex-end",alignItems:"center",visibility:"hidden",minWidth:"100px",gap:w.md},noBorderBottom:{"& > td":{borderBottom:"none"}},controlsRow:{backgroundColor:"white",padding:w.lg,borderRadius:w.sm},editEntryButton:{cursor:"pointer"},editEntryButtonNonOwner:{cursor:"pointer"},removeEntryButton:{cursor:"pointer"},removeEntryButtonDisabled:{cursor:"default"},removeEntryButtonNonOwner:{cursor:"pointer"},leftIcon:{marginRight:w.sm},iconSmall:{fontSize:16}}),S=n(22),E=n(2142),T=n(2146),R=n(2129),P=n(156),I=n(157),N=n(81),z=n(90),D=n(234),L=n(240),A=n(179),M=n(46),H=n(40),F=Object(f.a)(Object(k.a)({heading:{padding:w.lg,justifyContent:"space-between",boxSizing:"border-box",height:"74px"},manage:{fontSize:w.lg},container:{padding:"".concat(w.md," ").concat(w.lg)},close:{height:"35px",width:"35px"}})),_=n(87),K=n(2110),V=n(2163),W=n(254),Y=n(740),U=n(255),q=n(158),Q=n(0),X=["isNew"],J="create-entry-input-name",$="create-entry-input-address",G="save-new-entry-btn-id",Z={setOwnerAddress:function(e,t,n){n.changeValue(t,"address",(function(){return e[0]}))}},ee=function(e){var t=e.editEntryModalHandler,n=e.entryToEdit,r=e.isOpen,o=e.newEntryModalHandler,a=e.onClose,c=F(),i=n.entry,s=i.isNew,d=Object(H.a)(i,X),l=Object(C.d)(A.e),b=Object(q.q)(l);return Object(Q.jsxs)(_.b,{description:s?"Create new addressBook entry":"Edit addressBook entry",handleClose:a,open:r,title:s?"Create new entry":"Edit entry",children:[Object(Q.jsx)(_.b.Header,{onClose:a,children:Object(Q.jsx)(_.b.Header.Title,{children:s?"Create entry":"Edit entry"})}),Object(Q.jsx)(_.b.Body,{withoutPadding:!0,children:Object(Q.jsx)(Y.a,{formMutators:Z,onSubmit:function(e){s?o(e):t(e)},initialValues:d,children:function(){var e=arguments.length<=2?void 0:arguments[2],t=arguments.length<=3?void 0:arguments[3],n=function(e,n){var r=e;r.startsWith("ethereum:")&&(r=r.replace("ethereum:","")),t.setOwnerAddress(r),n()};return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(P.a,{className:c.container,children:[Object(Q.jsx)(N.a,{margin:"md",children:Object(Q.jsx)(I.a,{xs:11,children:Object(Q.jsx)(W.a,{component:U.a,name:"name",placeholder:"Name*",testId:J,label:"Name*",type:"text",validate:Object(q.d)(q.p,q.r)})})}),Object(Q.jsxs)(N.a,{margin:"md",children:[Object(Q.jsx)(I.a,{xs:11,children:Object(Q.jsx)(V.a,{disabled:!s,fieldMutator:t.setOwnerAddress,name:"address",placeholder:"Address*",testId:$,text:"Address*",validators:[function(e){return s?b(e):void 0}]})}),s?Object(Q.jsx)(I.a,{center:"xs",className:c,middle:"xs",xs:1,children:Object(Q.jsx)(K.a,{handleScan:n})}):null]})]}),Object(Q.jsx)(_.b.Footer,{children:Object(Q.jsx)(_.b.Footer.Buttons,{cancelButtonProps:{onClick:a},confirmButtonProps:{disabled:!e.valid,testId:G,text:s?"Create":"Save"}})})]})}})})]})},te=n(571),ne=n(2509),re=n(89),oe=n(140),ae=n(126),ce=Object(v.default)(O.Icon)(r||(r=Object(u.a)(["\n  svg {\n    position: relative;\n    top: 4px;\n    left: 4px;\n  }\n"]))),ie=function(){return Object(Q.jsxs)(O.Link,{href:"https://help.gnosis-safe.io/en/articles/5299068-address-book-export-and-import",target:"_blank",rel:"noreferrer",title:"Export & import info",children:[Object(Q.jsx)(O.Text,{size:"xl",as:"span",color:"primary",children:"Learn about the address book import and export"}),Object(Q.jsx)(ce,{size:"sm",type:"externalLink",color:"primary"})]})},se=n.p+"static/media/success.c34f5727.svg",de=n.p+"static/media/error.6e3e8294.svg",le=n.p+"static/media/wait.cd1cb151.svg",be=n(28),je=n(238),ue={EXPORT:{event:be.a.CLICK,action:"Export"},DOWNLOAD_BUTTON:{event:be.a.CLICK,action:"Download address book"},IMPORT:{event:be.a.CLICK,action:"Import"},IMPORT_BUTTON:{event:be.a.CLICK,action:"Import address book"},CREATE_ENTRY:{event:be.a.CLICK,action:"Create entry"},EDIT_ENTRY:{event:be.a.CLICK,action:"Edit entry"},DELETE_ENTRY:{event:be.a.CLICK,action:"Delete entry"},SEND:{event:be.a.CLICK,action:"Send to contact"}},Oe=Object(je.a)(ue,"address-book"),xe=n(107),he=Object(v.default)(N.a)(o||(o=Object(u.a)(["\n  padding: "," ",";\n  justify-content: center;\n"])),w.md,w.lg),pe=Object(v.default)(N.a)(a||(a=Object(u.a)(["\n  background-color: ",";\n  flex-direction: column;\n  justify-content: center;\n  padding: ",";\n  text-align: center;\n"])),w.background,w.lg),fe=v.default.div(c||(c=Object(u.a)(["\n  grid-row: 1;\n"]))),me=Object(v.default)(O.Loader)(i||(i=Object(u.a)(["\n  margin-right: 5px;\n"]))),ge=function(e){var t=e.isOpen,n=e.onClose,r=Object(C.c)(),o=Object(C.d)(A.c),a=Object(y.useState)(!0),c=Object(j.a)(a,2),i=c[0],s=c[1],d=Object(y.useState)(""),l=Object(j.a)(d,2),u=l[0],x=l[1],h=Object(y.useState)(""),p=Object(j.a)(h,2),f=p[0],m=p[1],g=Object(y.useState)(!1),v=Object(j.a)(g,2),w=v[0],k=v[1],B=Object(te.a)(new Date,"yyyy-MM-dd");return Object(y.useEffect)((function(){!function(){if(t||w){s(!0),x("");try{m(Object(ne.c)(o))}catch(e){return s(!1),void x(e.message)}s(!1),k(!1)}}()}),[o,t,w,f]),Object(Q.jsxs)(_.b,{description:"Export address book",handleClose:n,open:t,title:"Export address book",children:[Object(Q.jsx)(_.b.Header,{onClose:n,children:Object(Q.jsx)(_.b.Header.Title,{withoutMargin:!0,children:"Export address book"})}),Object(Q.jsxs)(_.b.Body,{withoutPadding:!0,children:[Object(Q.jsx)(he,{children:Object(Q.jsx)(fe,{children:Object(Q.jsx)(ae.a,{alt:"Export",height:92,src:u?de:i?le:se})})}),Object(Q.jsx)(pe,{children:Object(Q.jsx)(O.Text,{color:"primary",as:"p",size:"xl",children:u?Object(Q.jsx)(O.Text,{size:"xl",as:"span",children:"An error occurred while generating the address book CSV."}):Object(Q.jsxs)(O.Text,{size:"xl",as:"span",children:["You're about to export a CSV file with"," ",Object(Q.jsxs)(O.Text,{size:"xl",strong:!0,as:"span",children:[o.length," address book entries. ",Object(Q.jsx)("br",{}),Object(Q.jsx)(ie,{})]}),"."]})})})]}),Object(Q.jsxs)(_.b.Footer,{withoutBorder:!0,children:[Object(Q.jsx)(O.Button,{size:"md",variant:"outlined",onClick:n,children:"Cancel"}),u?Object(Q.jsx)(O.Button,{color:"primary",size:"md",disabled:i,onClick:function(){return k(!0)},children:"Retry"}):Object(Q.jsx)(ne.a,{data:f,bom:!0,filename:"gnosis-safe-address-book-".concat(B),type:"link",children:Object(Q.jsx)(xe.a,Object(b.a)(Object(b.a)({},Oe.DOWNLOAD_BUTTON),{},{label:o.length,children:Object(Q.jsxs)(O.Button,{color:"primary",size:"md",disabled:i,onClick:function(){s(!0),setTimeout((function(){!i&&u&&r(Object(re.h)(oe.a.ADDRESS_BOOK_EXPORT_ENTRIES_ERROR)),n()}),600)},children:[i&&Object(Q.jsx)(me,{color:"secondaryLight",size:"xs"}),"Download"]})}))})]})]})},ve=function(e){var t=e.deleteEntryModalHandler,n=e.entryToDelete,r=e.isOpen,o=e.onClose;return Object(Q.jsxs)(_.b,{description:"Delete entry",handleClose:o,open:r,title:"Delete entry",children:[Object(Q.jsx)(_.b.Header,{onClose:o,children:Object(Q.jsx)(_.b.Header.Title,{children:"Delete entry"})}),Object(Q.jsx)(Y.a,{onSubmit:function(){t()},children:function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(_.b.Body,{children:Object(Q.jsxs)(O.Text,{size:"xl",children:["This action will delete"," ",Object(Q.jsx)(O.Text,{size:"xl",strong:!0,as:"span",children:n.entry.name})," ","from the address book."]})}),Object(Q.jsx)(_.b.Footer,{children:Object(Q.jsx)(_.b.Footer.Buttons,{cancelButtonProps:{onClick:o},confirmButtonProps:{color:"error",testId:"delete-entry-btn-id",text:"Delete"}})})]})}})]})},ye=n(105),Ce="name",we="address",ke=n(479),Be=n(56),Se=n(78),Ee=n(104),Te=n(131),Re=["","text/csv","text/plain","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],Pe=/[^.]+\.(txt|csv|tsv|ods|xls|xlsx)$/,Ie=v.default.div(s||(s=Object(u.a)(["\n  flex-direction: column;\n  justify-content: center;\n  margin: 24px;\n  align-items: center;\n  min-height: 100px;\n  display: flex;\n"]))),Ne=v.default.div(d||(d=Object(u.a)(["\n  background-color: ",";\n  flex-direction: column;\n  justify-content: center;\n  padding: 24px;\n  text-align: center;\n  margin-top: 16px;\n"])),(function(e){return e.theme.colors.background})),ze=function(e){var t=e.importEntryModalHandler,n=e.isOpen,r=e.onClose,o=Object(y.useState)(!1),a=Object(j.a)(o,2),c=a[0],i=a[1],s=Object(y.useState)(""),d=Object(j.a)(s,2),l=d[0],u=d[1],x=Object(y.useState)([]),h=Object(j.a)(x,2),p=h[0],f=h[1],m=function(){i(!1),f([]),u(""),r()};return Object(Q.jsxs)(_.b,{description:"Import address book",handleClose:m,open:n,title:"Import address book",children:[Object(Q.jsx)(_.b.Header,{onClose:m,children:Object(Q.jsx)(_.b.Header.Title,{children:"Import address book"})}),Object(Q.jsxs)(_.b.Body,{withoutPadding:!0,children:[Object(Q.jsx)(Ie,{children:Object(Q.jsx)(ne.b,{onDrop:function(e,t){var n=e.slice(1),r=function(e){return Re.includes(e.type)&&Pe.test(e.name.toLowerCase())?e.size>=1e6?"The size of the file is over 1 MB":void 0:"Only CSV files are allowed"}(t);if(r)u(r);else{var o=[];n.forEach((function(e){(1!==e.data.length||e.data[0])&&o.push(e)}));var a=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=Object(j.a)(n.data,3),o=r[0],a=r[1],c=r[2];if(3!==n.data.length)return"Invalid amount of columns on row ".concat(t+1);if("string"!==typeof o||"string"!==typeof a||"string"!==typeof c)return"Invalid amount of columns on row ".concat(t+1);if(!o.trim()||!a.trim()||!c.trim())return"Invalid amount of columns on row ".concat(t+1);var i=o.toLowerCase();if(!Object(Te.a)(i))return"Invalid address on row ".concat(t+1);if(!Object(S.s)(c.trim()))return"Invalid chain id on row ".concat(t+1)}}(o);if(a)u(a);else{var c=o.map((function(e){var t=e.data;return{address:Object(Se.a)(t[0].trim()),name:t[1].trim(),chainId:t[2].trim()}}));f(c),u(""),i(!0)}}},onError:function(e){u(e.message)},addRemoveButton:!0,onRemoveFile:function(){i(!1),u("")},style:{dropArea:{borderColor:"#B2B5B2",borderRadius:8},dropAreaActive:{borderColor:"#008C73"},dropFile:{width:200,height:100,background:"#fff",boxShadow:"rgb(40 54 61 / 18%) 1px 2px 10px 0px",borderRadius:8},fileSizeInfo:{color:"#001428",lineHeight:1,position:"absolute",left:"10px",top:"12px"},fileNameInfo:{color:""===l?"#008C73":"#DB3A3D",backgroundColor:"#fff",fontSize:14,lineHeight:1.4,padding:"0 0.4em",margin:"1.2em 0 0.5em 0",maxHeight:"59px",overflow:"hidden"},progressBar:{backgroundColor:"#008C73"},removeButton:{color:"#DB3A3D"}},children:Object(Q.jsxs)(O.Text,{size:"xl",children:["Drop your CSV file here ",Object(Q.jsx)("br",{}),"or click to upload."]})})}),Object(Q.jsxs)(Ne,{children:[""!==l&&Object(Q.jsx)(O.Text,{size:"xl",color:"error",children:l}),!c&&""===l&&Object(Q.jsxs)(O.Text,{color:"text",as:"p",size:"xl",children:["Only CSV files exported from the Safe are allowed. ",Object(Q.jsx)("br",{}),Object(Q.jsx)(ie,{})]}),c&&""===l&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(O.Text,{size:"xl",as:"span",children:"You're about to import"}),Object(Q.jsx)(O.Text,{size:"xl",strong:!0,as:"span",children:" ".concat(p.length," entries to your address book")})]})]})]}),Object(Q.jsx)(_.b.Footer,{withoutBorder:!0,children:Object(Q.jsx)(_.b.Footer.Buttons,{cancelButtonProps:{onClick:function(){return m()}},confirmButtonProps:{color:"primary",disabled:!c||""!==l,onClick:function(){Object(be.d)(Object(b.a)(Object(b.a)({},Oe.IMPORT_BUTTON),{},{label:p.length})),i(!1),t(p)},text:"Import"}})})]})},De=n(65),Le=n(69),Ae=Object(v.default)(O.Button)(l||(l=Object(u.a)(["\n  &&.MuiButton-root {\n    margin: 4px 12px 4px 0px;\n    padding: 0 12px;\n    min-width: auto;\n  }\n\n  svg {\n    margin: 0 6px 0 0;\n  }\n"]))),Me=Object(f.a)(B);t.default=function(){var e,t,n=Me(),r=function(){var e={id:Ce,order:!1,disablePadding:!1,label:"Name",width:150,custom:!1,align:"left"},t={id:we,order:!1,disablePadding:!1,label:"Address",custom:!1,align:"left"},n={id:"actions",order:!1,disablePadding:!1,label:"",custom:!0};return Object(ye.a)([e,t,n])}(),o=r.filter((function(e){return!e.custom})),a=Object(C.c)(),c=Object(C.d)(Be.k),i=Object(C.d)(A.d),s=Object(C.d)(Le.a),d=Object(C.d)(Ee.b),l=Object(C.d)(Le.a),u={entry:{address:"",name:"",chainId:l,isNew:!0}},f=Object(y.useState)(u),m=Object(j.a)(f,2),v=m[0],w=m[1],k=Object(y.useState)(!1),B=Object(j.a)(k,2),H=B[0],F=B[1],_=Object(y.useState)(!1),K=Object(j.a)(_,2),V=K[0],W=K[1],Y=Object(y.useState)(!1),U=Object(j.a)(Y,2),q=U[0],X=U[1],J=Object(y.useState)(!1),$=Object(j.a)(J,2),G=$[0],Z=$[1],te=Object(y.useState)(!1),ne=Object(j.a)(te,2),re=ne[0],oe=ne[1],ae=Object(De.h)(),ce=Object.fromEntries(new URLSearchParams(ae.location.search)),ie=null===ce||void 0===ce?void 0:ce.entryAddress;Object(y.useEffect)((function(){ie&&F(!0)}),[ie]),Object(y.useEffect)((function(){if(Object(Te.a)(ie)){var e=Object(Se.a)(ie),t=i.findIndex((function(t){return Object(M.f)(t.address,e)}));w(t>=0?{entry:i[t],index:t}:{entry:{name:"",address:e,chainId:s,isNew:!0}})}}),[i,ie,s]);return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(O.Menu,{children:[Object(Q.jsx)(I.a,{start:"sm",sm:6,xs:12,children:Object(Q.jsx)(O.Breadcrumb,{children:Object(Q.jsx)(O.BreadcrumbElement,{iconType:"addressBook",text:"Address Book",counter:null===i||void 0===i?void 0:i.length.toString()})})}),Object(Q.jsxs)(I.a,{end:"sm",sm:6,xs:12,children:[Object(Q.jsx)(xe.a,Object(b.a)(Object(b.a)({},Oe.EXPORT),{},{children:Object(Q.jsx)(O.ButtonLink,{onClick:function(){w(u),Z(!0)},color:"primary",iconType:"exportImg",iconSize:"sm",textSize:"xl",children:"Export"})})),Object(Q.jsx)(xe.a,Object(b.a)(Object(b.a)({},Oe.IMPORT),{},{children:Object(Q.jsx)(O.ButtonLink,{onClick:function(){W(!0)},color:"primary",iconType:"importImg",iconSize:"sm",textSize:"xl",children:"Import"})})),Object(Q.jsx)(xe.a,Object(b.a)(Object(b.a)({},Oe.CREATE_ENTRY),{},{children:Object(Q.jsx)(O.ButtonLink,{onClick:function(){w(u),F(!0)},color:"primary",iconType:"add",iconSize:"sm",textSize:"xl",children:"Create entry"})}))]})]}),Object(Q.jsx)(P.a,{className:n.formContainer,children:Object(Q.jsx)(h.a,{children:Object(Q.jsx)(T.a,{columns:r,data:i,defaultFixed:!0,defaultOrderBy:Ce,defaultRowsPerPage:25,disableLoadingOnEmptyTable:!0,label:"Address Book",size:(null===i||void 0===i?void 0:i.length)||0,children:function(e){return e.map((function(t,r){var a=Object(M.c)(c,t.address),i=r>=3&&r===e.size-1&&n.noBorderBottom;return Object(Q.jsxs)(p.a,{className:g()(n.hide,i),"data-testid":"address-book-row",tabIndex:-1,children:[o.map((function(e){return Object(Q.jsx)(x.a,{align:e.align,component:"td",style:Object(R.a)(e.width),children:e.id===we?Object(Q.jsx)(P.a,{justify:"left",children:Object(Q.jsx)(z.a,{hash:t[e.id],showCopyBtn:!0,showAvatar:!0,explorerUrl:Object(S.i)(t[e.id])})}):t[e.id]},e.id)})),Object(Q.jsx)(x.a,{component:"td",children:Object(Q.jsxs)(N.a,{align:"end",className:n.actions,children:[Object(Q.jsx)(xe.a,Object(b.a)(Object(b.a)({},Oe.EDIT_ENTRY),{},{children:Object(Q.jsx)(E.a,{onClick:function(){w({entry:t,isOwnerAddress:a}),F(!0)},children:Object(Q.jsx)(O.Icon,{size:"sm",type:"edit",tooltip:"Edit entry",className:d?n.editEntryButton:n.editEntryButtonNonOwner})})})),Object(Q.jsx)(xe.a,Object(b.a)(Object(b.a)({},Oe.DELETE_ENTRY),{},{children:Object(Q.jsx)(E.a,{onClick:function(){w({entry:t}),X(!0)},children:Object(Q.jsx)(O.Icon,{size:"sm",type:"delete",color:"error",tooltip:"Delete entry",className:d?n.removeEntryButton:n.removeEntryButtonNonOwner})})})),d&&Object(Q.jsx)(xe.a,Object(b.a)(Object(b.a)({},Oe.SEND),{},{children:Object(Q.jsxs)(Ae,{color:"primary",onClick:function(){w({entry:t}),oe(!0)},size:"md",variant:"contained","data-testid":"send-entry-btn",children:[Object(Q.jsx)(O.FixedIcon,{type:"arrowSentWhite"}),Object(Q.jsx)(O.Text,{size:"xl",color:"white",children:"Send"})]})}))]})})]},r)}))}})})}),Object(Q.jsx)(ee,{editEntryModalHandler:function(e){w(u),F(!1),a(Object(L.b)(Object(D.b)(Object(b.a)(Object(b.a)({},e),{},{address:Object(Se.a)(e.address),chainId:l}))))},entryToEdit:v,isOpen:H,newEntryModalHandler:function(e){F(!1),a(Object(L.b)(Object(D.b)(Object(b.a)(Object(b.a)({},e),{},{address:Object(Se.a)(e.address),chainId:l}))))},onClose:function(){return F(!1)}}),Object(Q.jsx)(ve,{deleteEntryModalHandler:function(){w(u),X(!1),(null===v||void 0===v?void 0:v.entry)&&a(Object(L.e)(v.entry))},entryToDelete:v,isOpen:q,onClose:function(){return X(!1)}}),Object(Q.jsx)(ge,{isOpen:G,onClose:function(){return Z(!1)}}),Object(Q.jsx)(ze,{importEntryModalHandler:function(e){a(Object(L.d)(e)),W(!1)},isOpen:V,onClose:function(){return W(!1)}}),Object(Q.jsx)(ke.a,{activeScreenType:"chooseTxType",isOpen:re,onClose:function(){return oe(!1)},recipientAddress:null===v||void 0===v||null===(e=v.entry)||void 0===e?void 0:e.address,recipientName:null===v||void 0===v||null===(t=v.entry)||void 0===t?void 0:t.name})]})}}}]);
//# sourceMappingURL=47.8c72b539.chunk.js.map