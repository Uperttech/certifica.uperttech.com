(this["webpackJsonpcertifica-facil"]=this["webpackJsonpcertifica-facil"]||[]).push([[0],{23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(11),i=a.n(r),c=(a(23),a(2)),s=a(3),l=a(8),m=a(4),u=a(9),d=a(15),p=a.n(d),b=a(0);function f(e){e.label,e.icon,e.className,e.style,e.ref,e.maskPlaceholder,e.mask;var t=Object(u.a)(e,["label","icon","className","style","ref","maskPlaceholder","mask"]);return x(Object(c.a)(Object(c.a)({},e),{},{input:Object(b.jsxs)("div",{className:"flex items-center rounded-md p-4 mt-3 bg-gray-100 w-full",children:[e.icon,e.mask?Object(b.jsx)(p.a,Object(c.a)(Object(c.a)({},t),{},{mask:e.mask,className:"focus:outline-none bg-gray-100 w-full"})):Object(b.jsx)("input",Object(c.a)(Object(c.a)({},t),{},{className:"focus:outline-none bg-gray-100 w-full"}))]})}))}function x(e){return Object(b.jsxs)("div",{className:e.className,style:e.style,children:[Object(b.jsx)("label",{htmlFor:e.name,className:"block font-medium text-gray-500",children:e.label}),e.input]})}var j,g,h=a(12),y=a(14),v=a(6),O=y.a.ul(j||(j=Object(h.a)(["\n  ","\n  border-bottom: #c5c5c5 solid .5px;\n  color: #707070;\n\n  li {\n    ","\n\n    button {\n      ","\n    }\n\n    &:not(:last-child) {\n      ","\n    }\n\n    &.active {\n      ","\n      border-bottom: #378BF3 solid 2px;\n\n      button {\n        ","\n      }\n    }\n  }\n"])),{display:"flex",width:"max-content"},{opacity:"0.5"},{":focus":{outline:"2px solid transparent",outlineOffset:"2px"},fontWeight:"300"},{marginRight:"0.75rem"},{opacity:"1"},{fontWeight:"500"}),N=y.a.ul(g||(g=Object(h.a)(["\n  ","\n\n  li {\n    ","\n\n    button {\n      ","\n    }\n\n    &:not(:last-child) {\n      ","\n    }\n\n    &.active {\n      ","\n\n      button {\n        ","\n      }\n    }\n  }\n"])),{display:"flex",flexWrap:"wrap"},{opacity:"0.5",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"0.75rem"},{whiteSpace:"nowrap",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},fontWeight:"500",display:"block",textAlign:"center","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(229, 231, 235, var(--tw-bg-opacity))",padding:"0.75rem",borderRadius:"0.375rem",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(209, 213, 219, var(--tw-bg-opacity))"},alignSelf:"flex-end"},{marginRight:"0.75rem"},{opacity:"1"},{":focus":{outline:"2px solid transparent",outlineOffset:"2px"},whiteSpace:"nowrap","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(96, 165, 250, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(96, 165, 250, var(--tw-bg-opacity))"}});function w(e){var t,a,n=e.options,r=e.onChangeOption,i=e.initialValue,l=void 0===i?0:i,m=e.buttons,d=void 0!==m&&m,p=e.asInput,f=Object(u.a)(e,["options","onChangeOption","initialValue","buttons","asInput"]),x=l<n.length&&l>0?l:0,j=o.a.useState(x),g=Object(s.a)(j,2),h=g[0],y=g[1],w=d?N:O;return Object(b.jsxs)(w,Object(c.a)(Object(c.a)({},(t=f,a=["as"],Object.keys(t).filter((function(e){return!a.includes(e)})).reduce((function(e,a){return Object(c.a)(Object(c.a)({},e),{},Object(v.a)({},a,t[a]))}),t))),{},{children:[p&&Object(b.jsx)("input",{type:"hidden",id:p,name:p,value:n[h]}),n.map((function(e,t){return Object(b.jsx)("li",{className:h===t?"active":"",children:Object(b.jsx)("button",{type:"button",onClick:function(){return function(e){y(e),r&&r(n[e],e)}(t)},children:e})},t)}))]}))}var S=a(13),C=a.n(S),k=a(17);function D(){return(D=Object(k.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/formResponse"),{method:"POST",body:a,mode:"no-cors"});case 2:if((n=e.sent).ok||"opaque"===n.type){e.next=5;break}throw new Error("N\xe3o foi poss\xedvel enviar sua mensagem, tente novamente");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q,F={type:"entry.1185172935",name:"entry.1123145975",email:"entry.688141577",phone:"entry.1883000013",postal_code:"entry.961962106",social_media:"entry.1523411598",legal_entity:"entry.105376195",occupation:"entry.939455264",machines:"entry.1621677435",renew:"entry.1154927299",recommendation:"entry.1662194686"},A=function(e){return function(e,t){return D.apply(this,arguments)}("https://docs.google.com/forms/d/e/1FAIpQLSdZg-peKegqWHAhc_-UsrT-nfeviZswG2wrz8xyFedmc2b-4Q",function(e,t){var a=new FormData;return Object(l.a)(e.entries()).forEach((function(e){var n=Object(s.a)(e,2),o=n[0],r=n[1];return t[o]&&a.set(t[o],r)})),a}(e,F))},I=["comprar","indicar"],E=["Quero comprar","Quero indicar"],P={comprar:{backgroundClass:"primary-gradient",sideInfo:{title:"Bem vindo a era dos certificados digitais",content:["N\xf3s facilitamos sua vida quando o assunto \xe9 digitalizar seu trabalho","Atrav\xe9s do Certifica F\xe1cil, empresas, contadores, advogados, m\xe9dicos e outros profissionais podem adquirir seu certificado digital de maneira r\xe1pida e simples"]},form:{title:"Informe seus dados de contato",onSubmit:function(e,t){var a=t.changeSlide;(0,t.mergeFormData)(e),a("comprar_necessidades")},submitButtonText:"Continuar",inputs:[Object(b.jsx)(_,{className:"mb-6"}),Object(b.jsx)(f,{label:"Nome completo",className:"my-3 text-sm",icon:Object(b.jsx)(m.e,{className:"mx-2 text-gray-500"}),type:"text",required:!0,autoFocus:!0,id:"name",name:"name",placeholder:"Jo\xe3o da Silva"}),Object(b.jsx)(f,{label:"E-mail",className:"my-3 text-sm",icon:Object(b.jsx)(m.b,{className:"mx-2 text-gray-500"}),type:"email",required:!0,id:"email",name:"email",placeholder:"joao.silva@empresa.com"}),Object(b.jsx)(f,{label:"Telefone",className:"my-3 text-sm",icon:Object(b.jsx)(m.c,{className:"mx-2 text-gray-500"}),type:"tel",required:!0,id:"phone",name:"phone",mask:"(99) 99999 9999",placeholder:"(67) 9999 9999"}),Object(b.jsx)(f,{label:"CEP",className:"my-3 text-sm",icon:Object(b.jsx)(m.a,{className:"mx-2 text-gray-500"}),type:"tel",required:!0,id:"postal_code",name:"postal_code",mask:"99999-999",pattern:"\\d{5}\\-\\d{3}",title:"CEPs v\xe1lidos devem possuir formato 55555-333",placeholder:"55555-333"})]}},comprar_necessidades:{backgroundClass:"primary-gradient",sideInfo:{title:"Solu\xe7\xf5es que se adequam as suas necessidades",content:["Atrav\xe9s das informa\xe7\xf5es coletadas, podemos oferecer uma experi\xeancia exclusiva para voc\xea, indicando certificados que melhor atendem \xe0s necessidades do seu empreendimento."]},form:{title:"Descreva sua necessidade",onSubmit:function(e,t){var a=t.changeSlide;(0,t.mergeFormData)(e),a("fim")},submitButtonText:"Solicitar certificado",inputs:[Object(b.jsx)(x,{label:"Eu sou uma",className:"my-3 text-sm",input:Object(b.jsx)(w,{className:"mt-3",buttons:!0,asInput:"legal_entity",name:"",options:["Pessoa f\xedsica","Pessoa jur\xeddica"]})}),Object(b.jsx)(x,{label:"Trabalho com",className:"my-3 text-sm",input:Object(b.jsx)(w,{className:"mt-3",buttons:!0,asInput:"occupation",options:["Medicina","Contabilidade","Advocacia","Gest\xe3o","Outro"]})}),Object(b.jsx)(x,{label:"Desejo utilizar meu cerficado",className:"my-3 text-sm",input:Object(b.jsx)(w,{className:"mt-3",buttons:!0,asInput:"machines",options:["Na minha m\xe1quina pessoal","Em mais de uma m\xe1quina","Em m\xe1quinas distantes (via internet)"]})}),Object(b.jsx)(x,{label:"Quero renovar meu cerficado daqui a",className:"my-3 text-sm",input:Object(b.jsx)(w,{className:"mt-3",buttons:!0,asInput:"renew",options:["1 ano","2 anos","3 anos"]})}),Object(b.jsx)(f,{label:"C\xf3digo de indica\xe7\xe3o",className:"my-3 text-sm w-max",icon:Object(b.jsx)(m.d,{className:"mx-2 text-gray-500"}),type:"text",required:!0,id:"recommendation",name:"recommendation",placeholder:"certificauper"})]}},fim:{backgroundClass:"primary-gradient",sideInfo:{title:"Voc\xea est\xe1 a um passo da digitaliza\xe7\xe3o do seu neg\xf3cio",content:["Verifique sua caixa de e-mail. Enviaremos uma proposta exclusiva para compra do seu certificado"]},onLoad:function(e){var t=e.formData;return A(t)}},indicar:{backgroundClass:"secondary-gradient",sideInfo:{title:"Ajude a promover a revolu\xe7\xe3o digital",content:["N\xf3s valorizamos parceiros que desejam crescer junto conosco","Ao tornar-se um indicador, voc\xea recebe uma comiss\xe3o a cada venda efetuada que utilizar seu c\xf3digo de indicador, al\xe9m de proporcionar descontos especiais para essas compras"]},form:{title:"Torne-se um indicador",submitButtonText:"Finalizar",submitButtonOverrideClasses:function(e){return e.replace("bg-blue-400","bg-purple-400")},onSubmit:function(e,t){var a=t.changeSlide;(0,t.mergeFormData)(e),a("fim")},inputs:[Object(b.jsx)(_,{className:"mb-6"}),Object(b.jsx)(f,{label:"Nome completo",className:"my-3 text-sm",icon:Object(b.jsx)(m.e,{className:"mx-2 text-gray-500"}),type:"text",required:!0,autoFocus:!0,id:"name",name:"name",placeholder:"Jo\xe3o da Silva"}),Object(b.jsx)(f,{label:"E-mail",className:"my-3 text-sm",icon:Object(b.jsx)(m.b,{className:"mx-2 text-gray-500"}),type:"email",required:!0,id:"email",name:"email",placeholder:"joao.silva@empresa.com"}),Object(b.jsx)(x,{label:"Qual o principal canal de comunica\xe7\xe3o que voc\xea pretende utilizar?",className:"my-3 text-sm",input:Object(b.jsx)(w,{className:"my-3",buttons:!0,asInput:"social_media",options:["Instagram","Facebook","WhatsApp"]})})]}}};function _(e){var t=L(),a=t.customerActions,n=t.customerActionsNames,o=t.initialCustomerAction,r=t.changeSlide;return Object(b.jsx)(w,Object(c.a)({asInput:"type",options:n,initialValue:a.indexOf(o),onChangeOption:function(e){return r(a[n.indexOf(e)])}},e))}!function(e){e[e.ChangeSlide=0]="ChangeSlide",e[e.MergeFormData=1]="MergeFormData"}(q||(q={}));var B=function(e){return function(t){return e({type:q.ChangeSlide,payload:{currentSlideName:t}})}},T=function(e){return function(t){return e({type:q.MergeFormData,payload:{formData:t}})}},z=function(e,t){var a,n,o;switch(t.type){case q.ChangeSlide:return Object(c.a)(Object(c.a)({},e),{},{currentSlideName:null===(a=t.payload)||void 0===a?void 0:a.currentSlideName,currentSlide:P[null===(n=t.payload)||void 0===n?void 0:n.currentSlideName]});case q.MergeFormData:return Object(c.a)(Object(c.a)({},e),{},{formData:W(e.formData,null===(o=t.payload)||void 0===o?void 0:o.formData)});default:throw new Error("Unknown action.type")}},W=function(){for(var e=new FormData,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach((function(t){return Object(l.a)(t.entries()).forEach((function(t){var a=Object(s.a)(t,2),n=a[0],o=a[1];return e.append(n,o)}))})),e},R=Object(n.createContext)({}),Q=function(e){var t=function(e){var t=e.actionParam,a=t&&I.includes(t)?t:I[0];return{currentSlideName:a,currentSlide:P[a],formData:new FormData}}({actionParam:(0,function(){var e=new URLSearchParams(window.location.search);return{get:function(t){return e.get(t)||void 0}}}().get)("action")}),a=Object(n.useReducer)(z,t),o=Object(s.a)(a,2),r=o[0],i=o[1],l=r.currentSlideName,m=r.currentSlide,u=r.formData;return Object(b.jsx)(R.Provider,Object(c.a)({value:{slides:P,currentSlide:m,currentSlideName:l,customerActions:I,customerActionsNames:E,initialCustomerAction:t.currentSlideName,formData:u,changeSlide:B(i),mergeFormData:T(i)}},e))};Q.Consumer=R.Consumer;var L=function(){return Object(n.useContext)(R)};function M(){var e,t=L(),a=t.currentSlide,n=o.a.useRef(null);a.onLoad&&a.onLoad(t);var r=(null===(e=a.form)||void 0===e?void 0:e.submitButtonOverrideClasses)||function(e){return e};return Object(b.jsxs)("main",{className:"relative w-full ".concat(a.form?"min-h-full":"min-h-screen"," gradient-main ").concat(a.backgroundClass),children:[Object(b.jsx)("div",{className:"absolute py-10 px-20 flex lg:justify-start justify-center w-full",children:Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("object",{type:"image/svg+xml",data:"certifica-facil-logo.svg",style:{pointerEvents:"none"},children:"Uperttech Certifica F\xe1cil"})})}),Object(b.jsxs)("div",{className:"flex lg:flex-row lg:h-full flex-col items-center max-w-screen-2xl w-full min-h-full m-auto",children:[Object(b.jsxs)("div",{className:"flex-1 items-center justify-center lg:block text-white text-lg m-5 lg:mx-12 lg:p-0 pt-28 px-16 w-full max-w-screen-lg fade-in",ref:n,children:[Object(b.jsx)("h1",{className:"text-5xl font-medium mb-5",children:a.sideInfo.title}),a.sideInfo.content.map((function(e,t){return Object(b.jsx)("p",{className:"mb-5 opacity-80",children:e},t)}))]}),a.form&&Object(b.jsxs)("div",{className:"bg-white shadow-lg lg:mx-12 max-w-2xl my-10 mx-5 rounded-3xl p-10 flex flex-col",style:{minHeight:"90%"},children:[Object(b.jsx)("h2",{className:"font-semibold text-3xl mt-8 mb-10",children:a.form.title}),Object(b.jsxs)("form",{onSubmit:function(e){var n;e.preventDefault();var o=new FormData(e.target);null===(n=a.form)||void 0===n||n.onSubmit(o,t)},className:"flex flex-1 flex-col",id:"form",children:[a.form.inputs.map((function(e,t){return o.a.cloneElement(e,{key:e.props.name||t})})),Object(b.jsx)("input",{type:"hidden",name:"_grct",id:"_grct"}),Object(b.jsxs)("div",{className:"flex-1 flex flex-col justify-end",children:[Object(b.jsx)("button",{className:r("g-recaptcha block text-center text-white bg-blue-400 py-3 px-5 duration-300 rounded-md hover:bg-blue-700 self-end focus:outline-none"),type:"submit",children:a.form.submitButtonText}),Object(b.jsxs)("div",{className:"mt-8 text-xs font-light text-gray-300",children:["Protegido por reCAPTCHA e sujeito \xe0","\xa0",Object(b.jsx)("a",{className:"text-gray-400 font-medium hover:text-gray-300",href:"https://policies.google.com/privacy",children:"Pol\xedtica de privacidade"}),"\xa0","e aos","\xa0",Object(b.jsx)("a",{className:"text-gray-400 font-medium hover:text-gray-300",href:"https://policies.google.com/terms",children:"Termos de servi\xe7o"}),"\xa0","do Google."]})]})]})]})]}),Object(b.jsx)("footer",{className:"absolute bottom-0 w-full flex justify-center text-white opacity-50",children:"\xa9 Uperttech 2021"})]})}function U(){return Object(b.jsx)(Q,{children:Object(b.jsx)(M,{})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(U,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ad09100b.chunk.js.map