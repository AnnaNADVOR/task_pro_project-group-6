"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[849],{8849:function(e,t,r){r.r(t),r.d(t,{default:function(){return we}});var n=r(4420),i=r(2729),a=r(9439),l=r(2791),s=r(9321),o=r(5705),c=r(8007),d=r(7142),u=r(8904),_="AddColumnForm_addColumnModalTitle__whRgL",m="AddColumnForm_addColumnInput__6QVuw",p=r(3329),h=c.Ry().shape({columnTitle:c.Z_().required("Please enter the title")}),x=function(e){var t=e.title,r=e.action,a=e.columnId,l=e.columnTitle,s=e.handleEditClose,c=e.handleClose,x=(0,n.v9)(i.ZO),j=(0,n.I0)(),g={columnTitle:""};return a&&(g.columnTitle=l),(0,p.jsx)(o.J9,{validationSchema:h,initialValues:g,onSubmit:function(e,t){a?(j((0,u.L9)({columnId:a,newColumnData:{board:x._id,title:e.columnTitle}})),t.resetForm(),s()):(j((0,u.Wf)({title:e.columnTitle,board:x._id})),t.resetForm(),c())},children:(0,p.jsxs)(o.l0,{autoComplete:"off",children:[(0,p.jsx)("h3",{className:_,children:t}),(0,p.jsx)(o.gN,{className:m,as:"input",type:"text",name:"columnTitle",placeholder:"Title",required:!0,autoFocus:!0}),(0,p.jsx)(d.Z,{text:r})]})})},j=r(4596),g={btnAddColumn:"AddBtnColumn_btnAddColumn__PKhFZ",btnPlus:"AddBtnColumn_btnPlus__wZkNB"},v=function(){var e=(0,l.useState)(!1),t=(0,a.Z)(e,2),r=t[0],n=t[1],i=function(){n((function(e){return!e}))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("button",{className:g.btnAddColumn,type:"button",onClick:i,children:[(0,p.jsx)("div",{className:g.btnPlus,children:(0,p.jsx)("svg",{"aria-label":"plus",children:(0,p.jsx)("use",{href:"".concat(j.Z,"#plus-20")})})}),(0,p.jsx)("p",{className:g.btnText,children:"Add another column"})]}),r&&(0,p.jsx)(s.Z,{closeModal:i,children:(0,p.jsx)(x,{title:"Add column",action:"Add",handleClose:i})})]})},b="PriorityOptions_labelWrapper__Byxtu",f="PriorityOptions_label__MK2FN",C=function(e){var t=e.options,r=e.priority,n=e.active;return(0,p.jsx)("ul",{className:b,children:t.map((function(e){var t=e.value,i=e.color;return(0,p.jsx)("li",{children:(0,p.jsx)(o.gN,{as:"input",type:"radio",name:"priority",value:t,checked:r===t,className:f,style:{backgroundColor:i},onClick:n})},t)}))})},N=r(9513),y=r.n(N),I=(r(8639),r(7890)),k={button:"Calendar_button__9bAG0"},F=function(e){var t=e.date,r=e.changeDate,n=(0,l.forwardRef)((function(e,t){var r=e.value,n=e.onClick;return(0,p.jsxs)("button",{type:"button",className:k.button,onClick:n,ref:t,children:[r,(0,p.jsx)("svg",{children:(0,p.jsx)("use",{href:"".concat(j.Z,"#select-menu-16")})})]})}));return(0,p.jsx)(y(),{className:k.picker,locale:I.Z,selected:t,onChange:r,minDate:new Date,dateFormat:function(e){var t=new Date,r=new Date;return r.setDate(t.getDate()+1),e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()?"'Today', MMMM dd":e.getDate()===r.getDate()&&e.getMonth()===r.getMonth()&&e.getFullYear()===r.getFullYear()?"'Tomorrow', MMMM dd":"EEEE, MMMM dd"}(t),onFocus:function(e){return e.target.blur()},onKeyDown:function(e){return e.preventDefault()},customInput:(0,p.jsx)(n,{})})},T="CardForm_formTitle__UxmMR",S="CardForm_formText__Lrywy",w="CardForm_inputForm__Pjbp4",M="CardForm_errorField__u4Pnb",L="CardForm_label__yLVGx",D="CardForm_description__JlASz CardForm_inputForm__Pjbp4",Z="CardForm_priorityWrapper__AUS8j",P="CardForm_deadlineWrapper__9e5ip",B=c.Ry().shape({cardTitle:c.Z_().required("Please enter the title").max(25,"Must be no more than 25 characters long"),description:c.Z_()}),W=function(e){var t=e.title,r=e.action,i=e.taskTitle,s=e.taskDescription,c=e.taskPriority,_=e.taskDeadline,m=e.taskId,h=e.columnId,x=e.handleClose,j={cardTitle:"",description:""},g=(0,l.useState)(c||"Without"),v=(0,a.Z)(g,2),b=v[0],f=v[1],N=(0,l.useState)(_?new Date(_):new Date),y=(0,a.Z)(N,2),I=y[0],k=y[1];m&&(j.cardTitle=i,j.description=s);var W=(0,n.I0)();return(0,p.jsx)(o.J9,{validationSchema:B,initialValues:j,onSubmit:function(e,t){var r={_id:m,column:h,title:e.cardTitle,description:e.description,priority:b,deadline:I.toISOString()},n={_id:m,column:h,title:e.cardTitle,description:e.description,priority:b,deadline:I.toISOString()};m?(W((0,u.eT)(n)),t.resetForm(),x()):(W((0,u.gI)(r)),t.resetForm(),x())},children:(0,p.jsxs)(o.l0,{autoComplete:"off",children:[(0,p.jsx)("h4",{className:T,children:t}),(0,p.jsxs)("label",{className:L,htmlFor:"cardTitle",children:[(0,p.jsx)(o.gN,{className:w,as:"input",type:"text",name:"cardTitle",placeholder:"Title",required:!0,autoFocus:!0}),(0,p.jsx)("span",{className:M,children:(0,p.jsx)(o.Bc,{name:"cardTitle"})})]}),(0,p.jsx)("label",{htmlFor:"description",children:(0,p.jsx)(o.gN,{className:D,as:"textarea",type:"text",name:"description",placeholder:"Description",required:!0})}),(0,p.jsxs)("div",{className:Z,children:[(0,p.jsx)("p",{className:S,children:"Label color"}),(0,p.jsx)(C,{options:[{value:"Low",color:"var(--priority-low-color)"},{value:"Medium",color:"var(--priority-medium-color)"},{value:"High",color:"var(--priority-high-color)"},{value:"Without",color:"var(--priority-color-without)"}],priority:b,active:function(e){f(e.target.value)}})]}),(0,p.jsxs)("div",{className:P,children:[(0,p.jsx)("p",{className:S,children:"Deadline"}),(0,p.jsx)(F,{date:I,changeDate:k})]}),(0,p.jsx)(d.Z,{text:r})]})})},E="Progress_popupMenu__BWCqT",A="Progress_progressList__kvm4P",O="Progress_progressListBtn__Hv5GC",H="Progress_progressBtnSvg__15GWP",G=function(e){var t=e.closeMenu,r=e.columnId,a=e.currentTask,s=(0,n.v9)(i.Wx).filter((function(e){return e._id!==r}));(0,l.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var o=(0,n.I0)();return(0,p.jsx)("div",{className:E,children:(0,p.jsx)("ul",{className:A,children:s.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsxs)("button",{className:O,onClick:function(){return t=e._id,void o((0,u.jT)({taskId:a._id,columnId:t,currentColumnId:r}));var t},type:"button",children:[e.title,(0,p.jsx)("svg",{className:H,children:(0,p.jsx)("use",{href:"".concat(j.Z,"#remove-16")})})]})},e.title)}))})})},J={card:"Card_card__9i1e0",cardTitle:"Card_cardTitle__WOpNK",cardDescription:"Card_cardDescription__asnRe",cardOptions:"Card_cardOptions__Jpn8u",optionsInfo:"Card_optionsInfo__Ur7lv",optonWrapper:"Card_optonWrapper__paaQk",optionTitle:"Card_optionTitle__Xwwk2",priorityMark:"Card_priorityMark__P5D5u",priorityLabel:"Card_priorityLabel__UV0uv",optionsBtnList:"Card_optionsBtnList__MCRS8",optionBtn:"Card_optionBtn__O+R+M",deadlineNotify:"Card_deadlineNotify__l71UH",btnItem:"Card_btnItem__tGlpJ",optionBtnSvg:"Card_optionBtnSvg__gpnjf",bell:"Card_bell__9Ck4Y",progressContainer:"Card_progressContainer__MLD9P",cardList:"Card_cardList__0WbY0"},K=function(e){var t,r=e.newCard,i=e.columnId,o=(0,l.useState)(!1),c=(0,a.Z)(o,2),d=c[0],_=c[1],m=(0,l.useState)(!1),h=(0,a.Z)(m,2),x=h[0],g=h[1],v=function(){return _((function(e){return!e}))},b=function(){return g((function(e){return!e}))},f=(0,n.I0)(),C=(new Date).toISOString().replace(/T.*/,"").split("-").reverse().join("/"),N=r.deadline.replace(/T.*/,"").split("-").reverse().join("/");switch(r.priority){case"Low":t="var(--priority-low-color)";break;case"Medium":t="var(--priority-medium-color)";break;case"High":t="var(--priority-high-color)";break;default:t="var(--priority-color-without)"}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:J.card,style:{borderLeft:"4px solid ".concat(t)},children:[(0,p.jsx)("h4",{className:J.cardTitle,children:r.title}),(0,p.jsx)("p",{className:J.cardDescription,children:r.description}),(0,p.jsxs)("div",{className:J.cardOptions,children:[(0,p.jsxs)("div",{className:J.optionsInfo,children:[(0,p.jsxs)("div",{className:J.optionWrapper,children:[(0,p.jsx)("h5",{className:J.optionTitle,children:"Priority"}),(0,p.jsxs)("div",{className:J.priorityLabel,children:[(0,p.jsx)("span",{className:J.priorityMark,style:{backgroundColor:t}}),(0,p.jsx)("p",{children:r.priority})]})]}),(0,p.jsxs)("div",{className:J.optionWrapper,children:[(0,p.jsx)("h5",{className:J.optionTitle,children:"Deadline"}),(0,p.jsx)("p",{children:N})]})]}),(0,p.jsxs)("ul",{className:J.optionsBtnList,children:[C===N&&(0,p.jsx)("li",{className:J.deadlineNotify,children:(0,p.jsx)("button",{className:J.optionBtn,type:"button",children:(0,p.jsx)("svg",{className:J.bell,children:(0,p.jsx)("use",{href:"".concat(j.Z,"#bell-16")})})})}),(0,p.jsxs)("li",{children:[(0,p.jsx)("button",{className:J.optionBtn,type:"button",onClick:b,children:(0,p.jsx)("svg",{className:J.optionBtnSvg,children:(0,p.jsx)("use",{href:"".concat(j.Z,"#remove-16")})})}),(0,p.jsx)("div",{className:J.progressContainer,children:x&&(0,p.jsx)(G,{closeMenu:b,columnId:i,currentTask:r})})]}),(0,p.jsx)("li",{className:J.btnItem,children:(0,p.jsx)("button",{className:J.optionBtn,type:"button",onClick:v,children:(0,p.jsx)("svg",{className:J.optionBtnSvg,children:(0,p.jsx)("use",{href:"".concat(j.Z,"#pencil-16")})})})}),(0,p.jsx)("li",{children:(0,p.jsx)("button",{className:J.optionBtn,onClick:function(){f((0,u._5)(r._id))},type:"button",children:(0,p.jsx)("svg",{className:J.optionBtnSvg,children:(0,p.jsx)("use",{href:"".concat(j.Z,"#trash-16")})})})})]})]})]}),d&&(0,p.jsx)(s.Z,{closeModal:v,children:(0,p.jsx)(W,{title:"Edit card",action:"Edit",taskTitle:r.title,taskDescription:r.description,taskId:r._id,taskPriority:r.priority,taskDeadline:r.deadline,columnId:r.columnId,handleClose:v})})]})},R=function(e){var t=e.columnId,r=(0,n.v9)(i.MP).filter((function(e){return e.columnId===t}));return(0,p.jsx)("ul",{className:J.cardList,children:r.length>0&&(0,p.jsx)(p.Fragment,{children:r.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(K,{newCard:e,columnId:t})},e._id)}))})})},q="ColumnsList_columnsListContainer__y1n-3",U="ColumnsList_columnList__Oh-td",V="ColumnsList_columnItem__fGEt7",Y="ColumnsList_columnTitle__JgLbv",Q="ColumnsList_btnIcon__dIt+m",z="ColumnsList_columnTitleIcon__cKKEZ",X="ColumnsList_cardContainer__c+bP9",$=function(e){var t=e.id,r=e.title,i=(0,l.useState)(!1),o=(0,a.Z)(i,2),c=o[0],_=o[1],m=(0,l.useState)(!1),h=(0,a.Z)(m,2),g=h[0],v=h[1],b=function(){_((function(e){return!e}))},f=function(){v((function(e){return!e}))},C=(0,n.I0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{className:Y,children:[r,(0,p.jsx)("button",{className:Q,onClick:f,type:"button",children:(0,p.jsx)("svg",{className:z,width:16,height:16,children:(0,p.jsx)("use",{href:"".concat(j.Z,"#pencil-16")})})}),(0,p.jsx)("button",{className:Q,onClick:function(){C((0,u.eA)(t))},type:"button",children:(0,p.jsx)("svg",{className:z,width:16,height:16,children:(0,p.jsx)("use",{href:"".concat(j.Z,"#trash-16")})})})]}),(0,p.jsx)("div",{className:X,children:(0,p.jsx)(R,{columnId:t})}),(0,p.jsx)(d.Z,{text:"Add another card",click:b}),c&&(0,p.jsx)(s.Z,{closeModal:b,children:(0,p.jsx)(W,{title:"Add card",action:"Add",columnId:t,handleClose:b})}),g&&(0,p.jsx)(s.Z,{closeModal:f,children:(0,p.jsx)(x,{title:"Edit column",action:"Edit",columnId:t,columnTitle:r,handleEditClose:f})})]})},ee=function(){var e=(0,n.v9)(i.Wx);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:q,children:[(0,p.jsx)("ul",{className:U,children:null===e||void 0===e?void 0:e.map((function(e){return(0,p.jsx)("li",{className:V,children:(0,p.jsx)($,{id:e._id,title:e.title,column:e})},e._id)}))}),(0,p.jsx)(v,{})]})})},te=r(1273),re="Filter_filterTitle__5SDqd",ne="Filter_filterWrap__xOHoa",ie="Filter_filterContainer__8G57N",ae="Filter_textLeabel__QUz2b",le="Filter_buttonLeabel__JxnC3",se="Filter_leabelGroup__06GpO",oe="Filter_label__vEd1E",ce="Filter_labeltext__wgxuo",de="Filter_filterForm__+l+6Q",ue=function(){var e=(0,n.I0)(),t=function(t){e((0,te.T)(t.currentTarget.value))},r=(0,l.useState)(""),i=(0,a.Z)(r,2),s=i[0],c=i[1],d=function(e){c(e.target.value)};return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:re,children:"Filters"}),(0,p.jsx)(o.J9,{initialValues:{background:"00",priority:""},children:(0,p.jsx)(o.l0,{onChange:d,className:de,children:(0,p.jsxs)("div",{className:ie,children:[(0,p.jsxs)("div",{className:ne,children:[(0,p.jsx)("p",{className:ae,children:"Label color"}),(0,p.jsx)("button",{type:"button",onClick:function(){c(""),e((0,te.T)(""))},className:le,children:"Show all"})]}),(0,p.jsx)("ul",{children:[{value:"Without",color:"var(--priority-color-without)",text:"Without priority"},{value:"Low",color:"var(--priority-low-color)",text:"Low"},{value:"Medium",color:"var(--priority-medium-color)",text:"Medium"},{value:"High",color:"var(--priority-high-color)",text:"High"}].map((function(e){var r=e.value,n=e.color,i=e.text;return(0,p.jsxs)("li",{className:se,children:[(0,p.jsx)(o.gN,{as:"input",type:"radio",name:"priority",value:r,checked:s===r,style:{backgroundColor:n},onClick:d,onChange:t,className:oe})," ",(0,p.jsxs)("span",{className:ce,children:[" ",i]})]},r)}))})]})})})]})},_e={container:"HeaderDashboard_container__CSoUF",projectTitle:"HeaderDashboard_projectTitle__F-IyU",buttonFilter:"HeaderDashboard_buttonFilter__Ns8y8",modalStyle:"HeaderDashboard_modalStyle__jVe5R",filterTitle:"HeaderDashboard_filterTitle__trtwk"},me=function(e){var t=e.title,r=(0,l.useState)(),n=(0,a.Z)(r,2),i=n[0],o=n[1],c=function(){o((function(e){return!e}))};return(0,p.jsxs)("div",{className:_e.container,children:[(0,p.jsx)("h2",{className:_e.projectTitle,children:t}),(0,p.jsxs)("button",{className:_e.buttonFilter,type:" button",onClick:c,children:[(0,p.jsx)("svg",{className:_e.filterIcon,"aria-label":"filter icon",width:"16",height:"16",children:(0,p.jsx)("use",{href:"".concat(j.Z,"#filter-16")})}),(0,p.jsx)("p",{className:_e.filterTitle,children:"Filters"})]}),i&&(0,p.jsx)(s.Z,{style:_e.modalStyle,closeModal:c,children:(0,p.jsx)(ue,{})})]})},pe="Screens_page_container__51p2p",he="Screens_page_bgImage1__OydW4",xe="Screens_page_bgImage2__fmZk6",je="Screens_page_bgImage3__t38vE",ge="Screens_page_bgImage4__0wNGd",ve="Screens_page_bgImage5__OhxDX",be="Screens_page_bgImage6__g7WiG",fe="Screens_page_bgImage7__rP--d",Ce="Screens_page_bgImage8__zQy49",Ne="Screens_page_bgImage9__-53iA",ye="Screens_page_bgImage10__Kt+5F",Ie="Screens_page_bgImage11__KiLH2",ke="Screens_page_bgImage12__Olz6K",Fe="Screens_page_bgImage13__jh2yT",Te="Screens_page_bgImage14__HbmEn",Se="Screens_page_bgImage15__JIqvf",we=function(){var e=(0,n.v9)(i.ZO),t=e.title,r=e.background,a="".concat(pe," ").concat(function(e){switch(e){case"01":return he;case"02":return xe;case"03":return je;case"04":return ge;case"05":return ve;case"06":return be;case"07":return fe;case"08":return Ce;case"09":return Ne;case"10":return ye;case"11":return Ie;case"12":return ke;case"13":return Fe;case"14":return Te;case"15":return Se}}(r));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(me,{title:t}),(0,p.jsx)("div",{className:a,children:(0,p.jsx)(ee,{})})]})}}}]);
//# sourceMappingURL=849.9093e3bc.chunk.js.map