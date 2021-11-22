(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contact_list:"ContactList_contact_list__19rLf",contact_list__head:"ContactList_contact_list__head__ESvCN",contact_list__body:"ContactList_contact_list__body__3ve0T",contact_list__body_line:"ContactList_contact_list__body_line__3Ll68"}},,function(t,e,n){t.exports={contact_form:"ContactForm_contact_form__2-TJy",contact_form__label:"ContactForm_contact_form__label__3u7da",contact_form__input:"ContactForm_contact_form__input__2za5e",contact_form__button:"ContactForm_contact_form__button__2Go88"}},,function(t,e,n){t.exports={contact_line:"Contact_contact_line__16eYL",contact_btn:"Contact_contact_btn__MQBA7"}},,,function(t,e,n){t.exports={App:"App_App__3g1cF",App_title:"App_App_title__3wmX5",App_content:"App_App_content__2BAFl"}},,,function(t,e,n){t.exports={filter_form__label:"Filter_filter_form__label__3k4Ys",filter_form__input:"Filter_filter_form__input__3oZMI"}},function(t,e,n){t.exports={section:"Section_section__3CZOG",section_title:"Section_section_title__3N-6U"}},,,,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(7),r=n.n(o),s=(n(20),n(15)),i=n(3),_=n(26),l=n(10),u=n(14),b=n.n(u),m=(n(22),n(9)),d=n.n(m),j=function(t,e){var n=Object(c.useState)((function(){var n;return null!==(n=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){throw new Error(n)}}(t))&&void 0!==n?n:e})),a=Object(i.a)(n,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){!function(t,e){try{window.localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error(n)}}(t,o)}),[t,o]),[o,r]},f=n(4),h=n.n(f),p=n(1);function O(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),o=a[0],r=a[1],s=Object(c.useState)(""),_=Object(i.a)(s,2),l=_[0],u=_[1],b=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":u(c);break;default:throw new Error}},m=function(){r(""),u("")};return Object(p.jsxs)("form",{className:h.a.contact_form,onSubmit:function(t){t.preventDefault(),e(o,l),m()},children:[Object(p.jsxs)("label",{className:h.a.contact_form__label,children:[" Name",Object(p.jsx)("input",{type:"text",className:h.a.contact_form__input,name:"name",value:o,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:h.a.contact_form__label,children:[" Telephone number",Object(p.jsx)("input",{type:"tel",name:"number",value:l,className:h.a.contact_form__input,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:h.a.contact_form__button,children:"Add to contacts"})]})}var x=n(2),N=n.n(x),v=n(6),C=n.n(v);function g(t){var e=t.deleteBtn,n=t.name,c=t.number;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("td",{className:C.a.contact_line,children:n}),Object(p.jsx)("td",{className:C.a.contact_line,children:c}),Object(p.jsx)("td",{className:C.a.contact_line,children:Object(p.jsx)("button",{className:C.a.contact_btn,onClick:e,children:"Delete"})})]})}function y(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsxs)("table",{className:N.a.contact_list,children:[Object(p.jsx)("thead",{className:N.a.contact_list__head,children:Object(p.jsxs)("tr",{className:N.a.contact_list__head_line,children:[Object(p.jsx)("th",{className:N.a.contact_list__head_column,children:"Name"}),Object(p.jsx)("th",{className:N.a.contact_list__head_column,children:"Number"}),Object(p.jsx)("th",{className:N.a.contact_list__head_column,children:"Edit"})]})}),Object(p.jsx)("tbody",{className:N.a.contact_list__body,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(p.jsx)("tr",{className:N.a.contact_list__body_line,children:Object(p.jsx)(g,{name:c,number:a,deleteBtn:function(){return n(e)}})},e)}))})]})}var A=n(12),w=n.n(A);function S(t){var e=t.onHandleFilter;return Object(p.jsxs)("label",{className:w.a.filter_form__label,children:[" Find a contact",Object(p.jsx)("input",{type:"text",className:w.a.filter_form__input,name:"filter",onChange:e})]})}var F=n(13),k=n.n(F);function L(t){var e=t.title,n=t.children;return Object(p.jsxs)("section",{className:k.a.section,children:[Object(p.jsxs)("h2",{className:k.a.section_title,children:[" ",e]}),n]})}function E(){var t=j("contacts",{}),e=Object(i.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),u=r[0],m=r[1],f=function(){return n.filter((function(t){return t.name.toLowerCase().includes(u.toLowerCase())}))};Object(c.useEffect)((function(){return 0===f().length&&n.length&&h(),function(){h.cancel()}}),[u]);var h=Object(c.useMemo)((function(){return b()((function(){return l.b.error("No matches are found")}),700)}),[]);return Object(p.jsxs)("div",{className:d.a.App,children:[Object(p.jsx)("h1",{className:d.a.App_title,children:"Phonebook"}),Object(p.jsxs)("div",{className:d.a.App_content,children:[Object(p.jsx)(L,{title:"Create a new Contact",children:Object(p.jsx)(O,{onSubmit:function(t,e){if(n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return l.b.info("This contact already in the addressbook");a((function(n){return[].concat(Object(s.a)(n),[{id:Object(_.a)(),name:t,number:e}])}))}})}),Object(p.jsx)(L,{title:"Your contacts",children:0===n.length?Object(p.jsx)("p",{children:"You don't have any contacts yet, please add one to the form on the left"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{onHandleFilter:function(t){m(t.currentTarget.value)}}),!(0===f().length)&&Object(p.jsx)(y,{contacts:u?f():n,onDeleteContact:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}),Object(p.jsx)(l.a,{})]})]})}L.defaultPropTypes={title:""},r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.c362367e.chunk.js.map