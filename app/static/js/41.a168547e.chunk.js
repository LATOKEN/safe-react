(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[41],{2120:function(e,a,t){"use strict";var n=t(3),c=t(40),r=t(182),o=t.n(r),i=t(1),d=t(2132),l=t.n(d),s=t(108),u=["align","children","className","color","margin","tag","testId","truncate"],h=o.a.bind(l.a);a.a=function(e){var a=e.align,t=e.children,r=e.className,o=void 0===r?"":r,d=e.color,l=e.margin,f=e.tag,m=e.testId,_=e.truncate,b=Object(c.a)(e,u),p=h(o,"heading",a,f,l?Object(s.a)(l,"margin"):void 0,d,{truncate:_});return i.createElement(f,Object(n.a)(Object(n.a)({},b),{},{className:p,"data-testid":m||""}),t)}},2132:function(e,a,t){e.exports={heading:"Heading_heading__3Wz9P",h1:"Heading_h1__MXfCA",h2:"Heading_h2__3X6Ts",h3:"Heading_h3__1k2fD",h4:"Heading_h4__1YCmR",center:"Heading_center__28MHY",right:"Heading_right__1fQM1",truncate:"Heading_truncate__2Lq93",marginSm:"Heading_marginSm__13YwX",marginMd:"Heading_marginMd__2AnZN",marginLg:"Heading_marginLg__2ZfEq",marginXl:"Heading_marginXl__3RHt7",soft:"Heading_soft__2Zu43",medium:"Heading_medium__2X8Z-",dark:"Heading_dark__Ds2QB",fancy:"Heading_fancy__1Wx6l",warning:"Heading_warning__2lrZC",primary:"Heading_primary__2hOk2",secondary:"Heading_secondary__37lKs",disabled:"Heading_disabled__30DjG",error:"Heading_error__t5ujr",white:"Heading_white__2gkIK"}},3092:function(e,a,t){"use strict";var n=t(63),c=t(62);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var r=c(t(130)),o=c(t(138)),i=n(t(1)),d=(c(t(25)),c(t(18))),l=c(t(204)),s={root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}};a.styles=s;var u=i.forwardRef((function(e,a){var t=e.classes,n=e.className,c=e.row,l=void 0!==c&&c,s=(0,o.default)(e,["classes","className","row"]);return i.createElement("div",(0,r.default)({className:(0,d.default)(t.root,n,l&&t.row),ref:a},s))})),h=(0,l.default)(s,{name:"MuiFormGroup"})(u);a.default=h},3093:function(e,a,t){"use strict";var n=t(63),c=t(62);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var r=c(t(130)),o=c(t(138)),i=n(t(1)),d=(c(t(25)),c(t(18))),l=(t(38),c(t(1174))),s=c(t(3094)),u=c(t(3095)),h=t(362),f=c(t(3096)),m=c(t(410)),_=c(t(204)),b=function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,h.alpha)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,h.alpha)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}};a.styles=b;var p=i.createElement(u.default,null),j=i.createElement(s.default,null),g=i.createElement(f.default,null),v=i.forwardRef((function(e,a){var t=e.checkedIcon,n=void 0===t?p:t,c=e.classes,s=e.color,u=void 0===s?"secondary":s,h=e.icon,f=void 0===h?j:h,_=e.indeterminate,b=void 0!==_&&_,v=e.indeterminateIcon,O=void 0===v?g:v,x=e.inputProps,y=e.size,H=void 0===y?"medium":y,k=(0,o.default)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),E=b?O:f,P=b?O:n;return i.createElement(l.default,(0,r.default)({type:"checkbox",classes:{root:(0,d.default)(c.root,c["color".concat((0,m.default)(u))],b&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:u,inputProps:(0,r.default)({"data-indeterminate":b},x),icon:i.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===H?H:E.props.fontSize}),checkedIcon:i.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===H?H:P.props.fontSize}),ref:a},k))})),O=(0,_.default)(b,{name:"MuiCheckbox"})(v);a.default=O},3094:function(e,a,t){"use strict";var n=t(62),c=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=c(t(1)),o=(0,n(t(761)).default)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");a.default=o},3095:function(e,a,t){"use strict";var n=t(62),c=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=c(t(1)),o=(0,n(t(761)).default)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");a.default=o},3096:function(e,a,t){"use strict";var n=t(62),c=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=c(t(1)),o=(0,n(t(761)).default)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");a.default=o},3118:function(e,a,t){"use strict";t.r(a);var n,c,r=t(3),o=t(17),i=t(10),d=t(3092),l=t.n(d),s=t(3093),u=t.n(s),h=t(523),f=t.n(h),m=t(156),_=t(9),b=t(5),p=t(2120),j=t(59),g=t(265),v=t(21),O=t(1014),x=t(1013),y=t(90),H=t(1024),k=t(28),E=t(2128),P=t(71),w=t(0),C=Object(_.default)(m.a)(n||(n=Object(i.a)(["\n  padding: ",";\n"])),b.lg),S=Object(_.default)(y.a)(c||(c=Object(i.a)(["\n  margin-bottom: 1em;\n"])));a.default=function(){var e=Object(v.c)(),a=Object(v.d)(g.a),t=Object(v.d)(g.b),n=Object(P.a)().safeAddress,c=Object(H.a)(),i=Object(o.a)(c,2),d=i[0],s=i[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(C,{children:[Object(w.jsx)(p.a,{tag:"h2",children:"Use Chain-Specific Addresses"}),Object(w.jsx)(j.a,{children:"You can choose whether to prepend EIP-3770 short chain names across Safes."}),Object(w.jsx)(S,{hash:n}),Object(w.jsxs)(l.a,{children:[Object(w.jsx)(f.a,{control:Object(w.jsx)(u.a,{checked:t,onChange:function(a,t){e(Object(O.b)({showShortName:t})),Object(k.d)(Object(r.a)(Object(r.a)({},E.a.APPEARANCE.PREPEND_PREFIXES),{},{label:t}))},name:"showShortName"}),label:"Prepend addresses with chain prefix."}),Object(w.jsx)(f.a,{control:Object(w.jsx)(u.a,{checked:a,onChange:function(a,t){e(Object(x.b)({copyShortName:t})),Object(k.d)(Object(r.a)(Object(r.a)({},E.a.APPEARANCE.COPY_PREFIXES),{},{label:t}))},name:"copyShortName"}),label:"Copy addresses with chain prefix."})]})]}),Object(w.jsxs)(C,{children:[Object(w.jsx)(p.a,{tag:"h2",children:"Theme (experimental)"}),Object(w.jsx)(l.a,{children:Object(w.jsx)(f.a,{control:Object(w.jsx)(u.a,{checked:d,onChange:function(e,a){s(!d),Object(k.d)(Object(r.a)(Object(r.a)({},E.a.APPEARANCE.INVERT_COLORS),{},{label:a}))},name:"showShortName"}),label:"Inverted colors"})})]})]})}}}]);
//# sourceMappingURL=41.a168547e.chunk.js.map