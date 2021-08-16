(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter__wrapper:"Filter_filter__wrapper__2S5gl",filter__label:"Filter_filter__label__131QO",filter__input:"Filter_filter__input__1ey-e"}},12:function(t,e,n){t.exports={contactList:"ContactList_contactList__3ef0_",contactList__item:"ContactList_contactList__item__YbO3i",contactList__button:"ContactList_contactList__button__Ih2Mi"}},33:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=n(9),o=n.n(i),s=n(3),l=n(17),b=n(2),u=n(4),_=n(5),d=n(18),j=n.n(d),m=n(7),f=n(19),O=n(35),p={addContact:Object(u.b)("contacts/add",(function(t,e){return{payload:{id:Object(O.a)(),name:t,number:e}}})),deleteContact:Object(u.b)("contacts/delete"),changeFilter:Object(u.b)("contacts/changeFilter")},h=Object(u.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(m.a)(c,p.addContact,(function(t,e){return[e.payload].concat(Object(f.a)(t))})),Object(m.a)(c,p.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),x=Object(u.c)("",Object(m.a)({},p.changeFilter,(function(t,e){return e.payload}))),C=Object(b.b)({items:h,filter:x}),g={key:"contacts",storage:j.a,blacklist:["filter"]},v=Object(b.b)({contacts:Object(_.g)(g,C)}),N=Object(u.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}}),y=Object(u.a)({reducer:v,middleware:N,devTools:!1}),L={store:y,persistor:Object(_.h)(y)},F=n(15),k=function(t){return t.contacts.items},w=function(t){return t.contacts.filter},A=function(t){var e=k(t),n=w(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},S=n(6),z=n.n(S),J=n(1),M=function(){var t=Object(a.useState)(""),e=Object(F.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(F.a)(r,2),o=i[0],l=i[1],b=Object(s.c)(k),u=Object(s.b)(),_=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":l(a);break;default:return}};return Object(J.jsxs)("form",{className:z.a.contact__form,onSubmit:function(t){t.preventDefault(),b.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(u(p.addContact(n,o)),c(""),l(""))},children:[Object(J.jsxs)("label",{className:z.a.label__form,children:["Name",Object(J.jsx)("input",{className:z.a.contact__input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:_})]}),Object(J.jsxs)("label",{className:z.a.label__form,children:["Number",Object(J.jsx)("input",{className:z.a.contact__input,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:_})]}),Object(J.jsx)("button",{className:z.a.button__submit,type:"submit",children:"Add contact"})]})},Y=n(11),Z=n.n(Y),q=function(){var t=Object(s.c)(w),e=Object(s.b)();return Object(J.jsx)("div",{className:Z.a.filter__wrapper,children:Object(J.jsxs)("label",{className:Z.a.filter__label,children:["Find contacts by name",Object(J.jsx)("input",{className:Z.a.filter__input,type:"text",name:"filter",value:t,onChange:function(t){return e(p.changeFilter(t.target.value))}})]})})},B=n(12),E=n.n(B),I=function(){var t=Object(s.c)(A),e=Object(s.b)();return Object(J.jsx)("ul",{className:E.a.contactList,children:t.map((function(t){return Object(J.jsxs)("li",{className:E.a.contactList__item,children:[t.name," ",t.number,Object(J.jsx)("button",{className:E.a.contactList__button,type:"button",onClick:function(){return n=t.id,e(p.deleteContact(n));var n},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})},T=function(){return Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(M,{}),Object(J.jsx)("h2",{children:"Contacts"}),Object(J.jsx)(q,{}),Object(J.jsx)(I,{})]})};o.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(s.a,{store:L.store,children:Object(J.jsx)(l.a,{loading:null,persistor:L.persistor,children:Object(J.jsx)(T,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contact__form:"ContactForm_contact__form__1iXY7",label__form:"ContactForm_label__form__3Urft",contact__input:"ContactForm_contact__input__3O6Y8",button__submit:"ContactForm_button__submit__1WnlC"}}},[[33,1,2]]]);
//# sourceMappingURL=main.45e7b531.chunk.js.map