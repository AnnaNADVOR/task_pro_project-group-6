"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{7627:function(e,t,r){r.r(t),r.d(t,{default:function(){return me}});var s=r(9439),n=r(2791),a=r(4596),i={btnAddColumn:"AddBtnColumn_btnAddColumn__PKhFZ",btnPlus:"AddBtnColumn_btnPlus__wZkNB"},l=r(9321),o=r(7142),c="AddColumnForm_addColumnModalTitle__whRgL",d="AddColumnForm_addColumnForm__PHu-J",u="AddColumnForm_addColumnInput__6QVuw",h=r(3329),m=function(){var e=(0,n.useState)(""),t=(0,s.Z)(e,2),r=t[0],a=t[1];return(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:c,children:"Add column"}),(0,h.jsxs)("form",{className:d,children:[(0,h.jsx)("input",{className:u,name:"title",value:r,type:"text",placeholder:"Title",onChange:function(e){var t=e.target.value;a(t)},required:!0}),(0,h.jsx)(o.Z,{text:"Add"})]})]})},_=function(){var e=(0,n.useState)(!1),t=(0,s.Z)(e,2),r=t[0],o=t[1],c=function(){o((function(e){return!e}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("button",{className:i.btnAddColumn,type:"button",onClick:c,children:[(0,h.jsx)("div",{className:i.btnPlus,children:(0,h.jsx)("svg",{"aria-label":"plus",children:(0,h.jsx)("use",{href:"".concat(a.Z,"#plus-20")})})}),(0,h.jsx)("p",{className:i.btnText,children:"Add another column"})]}),r&&(0,h.jsx)(l.Z,{closeModal:c,children:(0,h.jsx)(m,{})})]})},p=r(5705),x=r(8007),j="CardForm_formTitle__UxmMR",v="CardForm_formText__Lrywy",g="CardForm_inputForm__Pjbp4",f="CardForm_errorField__u4Pnb",N="CardForm_label__yLVGx",b="CardForm_description__JlASz CardForm_inputForm__Pjbp4",C="CardForm_priorityWrapper__AUS8j",y="CardForm_deadlineWrapper__9e5ip",k="PriorityOptions_labelWrapper__Byxtu",w="PriorityOptions_label__MK2FN",F=function(e){var t=e.options,r=e.priority,s=e.active;return(0,h.jsx)("ul",{className:k,children:t.map((function(e){var t=e.value,n=e.color;return(0,h.jsx)("li",{children:(0,h.jsx)(p.gN,{as:"input",type:"radio",name:"priority",value:t,checked:r===t,className:w,style:{backgroundColor:n},onClick:s})},t)}))})},Z=r(9513),M=r.n(Z),D=(r(8639),{button:"Calendar_button__9bAG0"}),L=r(7890),S=function(e){var t=e.date,r=e.changeDate,s=(0,n.forwardRef)((function(e,t){var r=e.value,s=e.onClick;return(0,h.jsxs)("button",{type:"button",className:D.button,onClick:s,ref:t,children:[r,(0,h.jsx)("svg",{children:(0,h.jsx)("use",{href:"".concat(a.Z,"#select-menu-16")})})]})}));return(0,h.jsx)(M(),{className:D.picker,locale:L.Z,selected:t,onChange:r,minDate:new Date,dateFormat:function(e){var t=new Date,r=new Date;return r.setDate(t.getDate()+1),e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()?"'Today', MMMM dd":e.getDate()===r.getDate()&&e.getMonth()===r.getMonth()&&e.getFullYear()===r.getFullYear()?"'Tomorrow', MMMM dd":"EEEE, MMMM dd"}(t),onFocus:function(e){return e.target.blur()},onKeyDown:function(e){return e.preventDefault()},customInput:(0,h.jsx)(s,{})})},T=r(4420),B=r(9719),P=x.Ry().shape({title:x.Z_().required("Please enter the title").max(25,"Must be no more than 25 characters long"),description:x.Z_()}),I={title:"",description:""},A=function(e){var t=e.title,r=e.action,a=(e.taskTitle,e.taskDescription,e.taskPriority,e.taskDeadline,e.taskId,e.columnId),i=(0,n.useState)("without"),l=(0,s.Z)(i,2),c=l[0],d=l[1],u=(0,n.useState)(new Date),m=(0,s.Z)(u,2),_=m[0],x=m[1],k=(0,T.I0)();return(0,h.jsx)(p.J9,{validationSchema:P,initialValues:I,onSubmit:function(e,t){var r={column:a,title:e.title,description:e.description,priority:e.priority,deadline:_};k((0,B.g)(r)),t.resetForm()},children:(0,h.jsxs)(p.l0,{autoComplete:"off",children:[(0,h.jsx)("h4",{className:j,children:t}),(0,h.jsxs)("label",{className:N,htmlFor:"title",children:[(0,h.jsx)(p.gN,{className:g,as:"input",type:"text",name:"title",placeholder:"Title",required:!0,autoFocus:!0}),(0,h.jsx)("span",{className:f,children:(0,h.jsx)(p.Bc,{name:"title"})})]}),(0,h.jsx)("label",{htmlFor:"description",children:(0,h.jsx)(p.gN,{className:b,as:"textarea",type:"text",name:"description",placeholder:"Description",required:!0})}),(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)("p",{className:v,children:"Label color"}),(0,h.jsx)(F,{options:[{value:"low",color:"var(--priority-low-color)"},{value:"medium",color:"var(--priority-medium-color)"},{value:"high",color:"var(--priority-high-color)"},{value:"without",color:"var(--priority-color-without)"}],priority:c,active:function(e){d(e.target.value)}})]}),(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("p",{className:v,children:"Deadline"}),(0,h.jsx)(S,{date:_,changeDate:x})]}),(0,h.jsx)(o.Z,{text:r})]})})},E="ColumnsList_columnsListContainer__y1n-3",W="ColumnsList_columnList__Oh-td",H="ColumnsList_columnItem__fGEt7",O="ColumnsList_columnTitle__JgLbv",G="ColumnsList_btnIcon__dIt+m",J="ColumnsList_columnTitleIcon__cKKEZ",R=function(e){return console.log("select",e.tasks.tasksList),e.tasks.tasksList},U={card:"Card_card__9i1e0",cardTitle:"Card_cardTitle__WOpNK",cardDescription:"Card_cardDescription__asnRe",cardOptions:"Card_cardOptions__Jpn8u",optionsInfo:"Card_optionsInfo__Ur7lv",optonWrapper:"Card_optonWrapper__paaQk",optionTitle:"Card_optionTitle__Xwwk2",priorityMark:"Card_priorityMark__P5D5u",priorityLabel:"Card_priorityLabel__UV0uv",optionsBtnList:"Card_optionsBtnList__MCRS8",optionBtn:"Card_optionBtn__O+R+M",deadlineNotify:"Card_deadlineNotify__l71UH",btnItem:"Card_btnItem__tGlpJ",optionBtnSvg:"Card_optionBtnSvg__gpnjf",bell:"Card_bell__9Ck4Y",progressContainer:"Card_progressContainer__MLD9P"},q="Progress_popupMenu__BWCqT",K="Progress_progressList__kvm4P",V="Progress_progressListBtn__Hv5GC",Y="Progress_progressBtnSvg__15GWP",Q=function(e){var t=e.showMenu,r=e.handleProgressChange;e.toggleMenu;return t&&(0,h.jsx)("div",{className:q,children:(0,h.jsxs)("ul",{className:K,children:[(0,h.jsx)("li",{children:(0,h.jsxs)("button",{className:V,onClick:function(){return r("inProgress")},children:["In Progress"," ",(0,h.jsx)("span",{children:(0,h.jsx)("svg",{className:Y,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#remove-16")})})})]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("button",{className:V,onClick:function(){return r("done")},children:["Done",(0,h.jsx)("span",{children:(0,h.jsx)("svg",{className:Y,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#remove-16")})})})]})})]})})},z=function(e){var t=e.newCard,r=(0,n.useState)(!1),i=(0,s.Z)(r,2),o=i[0],c=i[1],d=function(){return c((function(e){return!e}))};console.log("new",t.newCard);var u,m=function(e){var t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return"".concat(s,"/").concat(r,"/").concat(t)}(new Date);switch(t.priority){case"Low":u="var(--priority-low-color)";break;case"Medium":u="#E09CB5";break;case"High":u="#BEDBB0";break;default:u="var(--priority-color-without)"}var _=(0,n.useState)(!1),p=(0,s.Z)(_,2),x=p[0],j=p[1],v=(0,n.useState)(""),g=(0,s.Z)(v,1)[0];(0,n.useEffect)((function(){var e=function(e){j(!1)},t=function(e){"Escape"===e.key&&j(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}}),[]);var f=function(){j(!x)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:U.card,style:{borderLeft:"4px solid ".concat(u)},children:[(0,h.jsx)("h4",{className:U.cardTitle,children:t.title}),(0,h.jsx)("p",{className:U.cardDescription,children:t.description}),(0,h.jsxs)("div",{className:U.cardOptions,children:[(0,h.jsxs)("div",{className:U.optionsInfo,children:[(0,h.jsxs)("div",{className:U.optionWrapper,children:[(0,h.jsx)("h5",{className:U.optionTitle,children:"Priority"}),(0,h.jsxs)("div",{className:U.priorityLabel,children:[(0,h.jsx)("span",{className:U.priorityMark,style:{backgroundColor:u}}),(0,h.jsx)("p",{children:t.priority})]})]}),(0,h.jsxs)("div",{className:U.optionWrapper,children:[(0,h.jsx)("h5",{className:U.optionTitle,children:"Deadline"}),(0,h.jsx)("p",{children:m})]})]}),(0,h.jsxs)("ul",{className:U.optionsBtnList,children:[(0,h.jsx)("li",{className:U.deadlineNotify,children:(0,h.jsx)("button",{className:U.optionBtn,type:"button",children:(0,h.jsx)("svg",{className:U.bell,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#bell-16")})})})}),(0,h.jsxs)("li",{children:[(0,h.jsx)("button",{className:U.optionBtn,type:"button",onClick:f,children:(0,h.jsx)("svg",{className:U.optionBtnSvg,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#remove-16")})})}),(0,h.jsx)("div",{className:U.progressContainer,children:x&&(0,h.jsx)(Q,{showMenu:x,handleProgressChange:function(e){g(e),j(!1)},toggleMenu:f})})]}),(0,h.jsx)("li",{className:U.btnItem,children:(0,h.jsx)("button",{className:U.optionBtn,type:"button",onClick:d,children:(0,h.jsx)("svg",{className:U.optionBtnSvg,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#pencil-16")})})})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:U.optionBtn,type:"button",children:(0,h.jsx)("svg",{className:U.optionBtnSvg,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#trash-16")})})})})]})]})]}),o&&(0,h.jsx)(l.Z,{closeModal:d,children:(0,h.jsx)(A,{title:"Edit card",action:"Edit"})})]})},X=function(){var e=(0,T.v9)(R);return console.log("card",e),(0,h.jsx)("ul",{children:e.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(z,{newCard:e})},e._id)}))})},$=function(){var e=(0,n.useState)(!1),t=(0,s.Z)(e,2),r=t[0],i=t[1],c=function(){i((function(e){return!e}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:E,children:(0,h.jsxs)("ul",{className:W,children:[(0,h.jsx)("li",{className:H,children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("p",{className:O,children:["To do",(0,h.jsx)("button",{className:G,children:(0,h.jsx)("svg",{className:J,width:16,height:16,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#pencil-16")})})}),(0,h.jsx)("button",{className:G,children:(0,h.jsx)("svg",{className:J,width:16,height:16,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#trash-16")})})})]}),(0,h.jsx)("div",{children:(0,h.jsx)(X,{})}),(0,h.jsx)(o.Z,{text:"Add another card",click:c})]})}),(0,h.jsx)("li",{className:H,children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("p",{className:O,children:["In progress",(0,h.jsx)("button",{className:G,children:(0,h.jsx)("svg",{className:J,width:16,height:16,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#pencil-16")})})}),(0,h.jsx)("button",{className:G,children:(0,h.jsx)("svg",{className:J,width:16,height:16,children:(0,h.jsx)("use",{href:"".concat(a.Z,"#trash-16")})})})]}),(0,h.jsx)("div",{}),(0,h.jsx)(o.Z,{text:"Add another card",click:c})]})})]})}),r&&(0,h.jsx)(l.Z,{closeModal:c,children:(0,h.jsx)(A,{title:"Add card",action:"Add",columnId:"gjfjfkfelkfelkfwekwfelk1"})})]})},ee="Screens_page_container__51p2p",te="Filter_filterTitle__5SDqd",re="Filter_filterWrap__xOHoa",se="Filter_filterContainer__8G57N",ne="Filter_textLeabel__QUz2b",ae="Filter_buttonLeabel__JxnC3",ie="Filter_leabelGroup__06GpO",le="Filter_label__vEd1E",oe="Filter_labeltext__wgxuo",ce=r(6965),de=function(){var e=(0,n.useState)("without"),t=(0,s.Z)(e,2),r=t[0],a=t[1],i=(0,n.useState)("00"),l=(0,s.Z)(i,2),o=l[0],c=l[1],d=(0,n.useState)(!1),u=(0,s.Z)(d,2),m=u[0],_=u[1],x=function(e){a(e.target.value)};return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:te,children:"Filters"}),(0,h.jsx)(p.J9,{initialValues:{background:"00",priority:""},children:(0,h.jsx)(p.l0,{onChange:x,children:(0,h.jsxs)("div",{className:se,children:[(0,h.jsxs)("div",{className:re,children:[(0,h.jsx)("p",{className:ne,children:"Label color"}),(0,h.jsx)("button",{type:"button",onClick:function(){_(!0)},disabled:m,className:ae,children:"Show all"})]}),(0,h.jsx)("ul",{children:[{value:"without",color:"var(--priority-color-without)",text:"Without priority"},{value:"low",color:"var(--priority-low-color)",text:"Low"},{value:"medium",color:"var(--priority-medium-color)",text:"Medium"},{value:"high",color:"var(--priority-high-color)",text:"High"}].map((function(e){var t=e.value,s=e.color,n=e.text;return(0,h.jsxs)("li",{className:ie,children:[(0,h.jsx)(p.gN,{as:"input",type:"radio",name:"priority",value:t,checked:r===t,style:{backgroundColor:s},onClick:x,className:le})," ",(0,h.jsxs)("span",{className:oe,children:[" ",n]})]},t)}))}),(0,h.jsx)(ce.Z,{backgroundName:o,onChangeImage:c})]})})})]})},ue={container:"HeaderDashboard_container__CSoUF",projectTitle:"HeaderDashboard_projectTitle__F-IyU",buttonFilter:"HeaderDashboard_buttonFilter__Ns8y8",modalStyle:"HeaderDashboard_modalStyle__jVe5R",filterTitle:"HeaderDashboard_filterTitle__trtwk"},he=function(){var e=(0,n.useState)(),t=(0,s.Z)(e,2),r=t[0],i=t[1],o=function(){i((function(e){return!e}))};return(0,h.jsxs)("div",{className:ue.container,children:[(0,h.jsx)("h2",{className:ue.projectTitle,children:"Name of project"}),(0,h.jsxs)("button",{className:ue.buttonFilter,type:" button",onClick:o,children:[(0,h.jsx)("svg",{className:ue.filterIcon,"aria-label":"filter icon",width:"16",height:"16",children:(0,h.jsx)("use",{href:"".concat(a.Z,"#filter-16")})}),(0,h.jsx)("p",{className:ue.filterTitle,children:"Filters"})]}),r&&(0,h.jsx)(l.Z,{style:ue.modalStyle,closeModal:o,children:(0,h.jsx)(de,{})})]})},me=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(he,{}),(0,h.jsxs)("div",{className:ee,children:[(0,h.jsx)($,{}),(0,h.jsx)(_,{})]})]})}}}]);
//# sourceMappingURL=608.440ad12c.chunk.js.map