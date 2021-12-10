(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__36hlE",control:"Checkout_control__21BYp",actions:"Checkout_actions__1U2Pf",submit:"Checkout_submit__qs3AH",invalid:"Checkout_invalid__1dFV9"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vydAG",total:"Cart_total__38iFM",actions:"Cart_actions__3dE4v","button--alt":"Cart_button--alt__1rbXf",button:"Cart_button__3km1v"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__SLl9U",summary:"CartItem_summary__-MDQM",price:"CartItem_price__2J213",amount:"CartItem_amount__2JFpj",actions:"CartItem_actions__LHnPB"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3rJRx",icon:"HeaderCartButton_icon__2v033",badge:"HeaderCartButton_badge__1IzZF",bump:"HeaderCartButton_bump__3mwcT"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2hOfj",description:"MealItem_description__1l9qX",price:"MealItem_price__1Vvmo"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__156fu","meals-appear":"AvailableMeals_meals-appear__2grmo",isloading:"AvailableMeals_isloading__NKbE0",errorMessage:"AvailableMeals_errorMessage__3aFYs"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__hNOzC",modal:"Modal_modal__2DT4g","slide-down":"Modal_slide-down__19jAr"}},,,function(e,t,n){e.exports={header:"Header_header__39ARo","main-image":"Header_main-image__3u07B"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__p7ikl"}},function(e,t,n){e.exports={card:"Card_card__2avMB"}},function(e,t,n){e.exports={input:"Input_input__1yNFX"}},function(e,t,n){e.exports={form:"MealItemForm_form__1XTNi"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(28),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCartHandler:function(){}}),j=n(10),d=n.n(j),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u).items,j=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(d.a.button," ").concat(a?d.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:d.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:d.a.badge,children:j})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(18),h=n.n(O),x=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},f=n(20),p=n.n(f),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),N=n(12),g=n(21),y=n.n(g),A=function(e){return Object(o.jsx)("div",{className:y.a.card,children:e.children})},k=n(5),S=n(22),M=n.n(S),I=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:M.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),F=n(23),w=n.n(F),E=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(13),H=n.n(R),B=function(e){var t=Object(s.useContext)(u),n="\u20b9".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(E,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=n(14),T=n.n(D),P=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),l=i[0],u=i[1],j=Object(s.useState)(),d=Object(r.a)(j,2),m=d[0],b=d[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-41387-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something Went Wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("h2",{className:T.a.isloading,children:"Loading...."});if(m)return Object(o.jsx)("h2",{className:T.a.errorMessage,children:m});var O=n.map((function(e){return Object(o.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:T.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},V=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(P,{})]})},J=n(15),z=n.n(J),Y=function(e){return Object(o.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},L=function(e){return Object(o.jsx)("div",{className:z.a.modal,children:Object(o.jsx)("div",{className:z.a.content,children:e.children})})},X=document.getElementById("overlays"),q=function(e){return Object(o.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(o.jsx)(Y,{onClose:e.onClose}),X),c.a.createPortal(Object(o.jsx)(L,{children:e.children}),X)]})},U=n(7),W=n.n(U),G=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:W.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:W.a.summary,children:[Object(o.jsx)("span",{className:W.a.price,children:t}),Object(o.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(4),Q=n.n(K),Z=n(3),$=n.n(Z),ee=function(e){return""===e.trim()},te=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!0),l=Object(r.a)(i,2),u=l[0],j=l[1],d=Object(s.useState)(!0),m=Object(r.a)(d,2),b=m[0],O=m[1],h=Object(s.useState)(!0),x=Object(r.a)(h,2),f=x[0],p=x[1],_=Object(s.useRef)(),v=Object(s.useRef)(),C=Object(s.useRef)(),N=Object(s.useRef)(),g="".concat($.a.control," ").concat(a?"":$.a.invalid),y="".concat($.a.control," ").concat(u?"":$.a.invalid),A="".concat($.a.control," ").concat(b?"":$.a.invalid),k="".concat($.a.control," ").concat(f?"":$.a.invalid);return Object(o.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault();var n=_.current.value,a=v.current.value,r=N.current.value,s=C.current.value,i=!ee(n),o=!ee(a),l=!ee(r),u=6===s.trim().length;c(i),j(o),O(l),p(u),u&&l&&o&&i&&e.onConfirm({name:n,street:a,city:r,postalCode:s})},children:[Object(o.jsxs)("div",{className:g,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:_}),!a&&Object(o.jsx)("p",{children:"Enter a Valid Name"})]}),Object(o.jsxs)("div",{className:y,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:v}),!u&&Object(o.jsx)("p",{children:"Enter a valid Steet "})]}),Object(o.jsxs)("div",{className:k,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:C}),!f&&Object(o.jsx)("p",{children:"Enter a Valid Postal Code (5 Character)"})]}),Object(o.jsxs)("div",{className:A,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:N}),!b&&Object(o.jsx)("p",{children:"Enter a Valid City Name"})]}),Object(o.jsxs)("div",{className:$.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:$.a.submit,children:"Confirm"})]})]})},ne=n(16),ae=function(e){var t=Object(ne.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],l=Object(ne.useState)(!1),j=Object(r.a)(l,2),d=j[0],m=j[1],b=Object(ne.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],f=Object(s.useContext)(u),p="\u20b9".concat(f.totalAmount.toFixed(2)),_=f.items.length>0,v=function(e){f.removeItem(e)},g=function(e){f.addItem(e)},y=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-41387-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderItems:f.items})});case 3:m(!1),x(!0),f.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsxs)("div",{className:Q.a.actions,children:[Object(o.jsx)("button",{className:Q.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:Q.a.button,onClick:function(){c(!0)},children:"Order"})]}),k=Object(o.jsx)("ul",{className:Q.a["cart-items"],children:f.items.map((function(e){return Object(o.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),S=Object(o.jsxs)(i.a.Fragment,{children:[k,Object(o.jsxs)("div",{className:Q.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),a&&Object(o.jsx)(te,{onConfirm:y,onCancel:e.onClose}),!a&&A]}),M=Object(o.jsx)("p",{children:"Sending Order Details..."}),I=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("h3",{children:"Order Placed Successfully... Thankyou\ud83d\ude0a"}),Object(o.jsx)("div",{className:Q.a.actions,children:Object(o.jsx)("button",{className:Q.a["button--alt"],onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(q,{onClose:e.onClose,children:[!d&&!h&&S,d&&M,!d&&h&&I]})},ce=n(19),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+1});(n=Object(ce.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=j}return{items:i,totalAmount:u}}return t.type,re},ie=function(e){var t=Object(s.useReducer)(se,re),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ae,{onClose:function(){a(!1)}}),Object(o.jsx)(x,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(V,{})})]})};c.a.render(Object(o.jsx)(oe,{}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.cdc5f5ed.chunk.js.map