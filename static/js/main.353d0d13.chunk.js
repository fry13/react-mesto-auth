(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/userpic.c3b119f7.png"},21:function(e,t,a){e.exports=a.p+"static/media/logo.2b1f7ee5.svg"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),i=a.n(r),c=a(5),s=(a(32),a(25)),l=a(11),p=a(1),u=a(2),m=a(21),d=a.n(m);var _=Object(u.h)((function(e){var t=e.email,a=e.onLogout,n=e.isLoggedIn,r=e.location;return o.a.createElement("header",{className:"header"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:d.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo"})),o.a.createElement("div",null,o.a.createElement("span",{className:"header__email"},t),n&&o.a.createElement(c.b,{to:"/sign-in",className:"header__link",onClick:a},"\u0412\u044b\u0445\u043e\u0434"),"/sign-up"===r.pathname&&o.a.createElement(c.b,{to:"/sign-in",className:"header__link"},"\u0412\u043e\u0439\u0442\u0438"),"/sign-in"===r.pathname&&o.a.createElement(c.b,{to:"/sign-up",className:"header__link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))}));var h=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,i=e.cardDeleteButtonClassName,c=e.cardLikeButtonClassName;return o.a.createElement("div",{className:"elements__card"},o.a.createElement("img",{src:t.link,alt:t.name,className:"elements__photo",onClick:function(){a(t)}}),o.a.createElement("div",{className:"elements__container"},o.a.createElement("p",{className:"elements__title"},t.name),o.a.createElement("div",{className:"elements__like-container"},o.a.createElement("button",{type:"button",onClick:function(){n(t)},className:c}),o.a.createElement("p",{className:"elements__counter"},t.likes.length))),o.a.createElement("button",{type:"button",onClick:function(){r(t)},className:"elements__trash-bin ".concat(i)}))},f=a(13),v=a.n(f),g=o.a.createContext();var E=function(e){var t=e.cards,a=e.onEditProfile,n=e.onAddPlace,r=e.onEditAvatar,i=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,l=o.a.useContext(g),p=l.avatar,u=l.name,m=l.about,d=l._id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile"},o.a.createElement("button",{className:"profile__button-avatar",onClick:r},o.a.createElement("img",{src:p||v.a,alt:"\u0412\u0430\u0448 \u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})),o.a.createElement("div",{className:"profile__name-container"},o.a.createElement("h1",{className:"profile__name"},u||"\u0418\u043c\u044f"),o.a.createElement("button",{type:"button",className:"profile__button-edit",onClick:a})),o.a.createElement("p",{className:"profile__bio"},m||"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),o.a.createElement("button",{type:"button",className:"profile__button-add",onClick:n})),o.a.createElement("main",{className:"elements"},t.map((function(e){var t=e.owner===d,a="elements__trash-bin ".concat(t?"elements__trash-bin_visible":"elements__trash-bin_hidden"),n=e.likes.some((function(e){return e===d})),r="elements__like ".concat(n?"elements__like_active":"elements__like");return o.a.createElement(h,{key:e._id,card:e,cardDeleteButtonClassName:a,cardLikeButtonClassName:r,onCardClick:i,onCardLike:c,onCardDelete:s})}))))};var b=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var k=function(e){var t=e.name,a=e.isOpen,n=e.onClose,r=e.onSubmit,i=e.children,c=e.formClassNameMod;return o.a.createElement("div",{className:"popup popup_type_".concat(t," ").concat(a?"popup_visibility_visible":"")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button",className:"popup__exit",onClick:n}),o.a.createElement("form",{noValidate:!0,className:"popup__form ".concat(c),onSubmit:r,name:t,method:"post",action:"#"},i)))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState(""),i=Object(p.a)(r,2),c=i[0],s=i[1],l=o.a.useState(""),u=Object(p.a)(l,2),m=u[0],d=u[1],_=o.a.useContext(g);return o.a.useEffect((function(){s(_.name),d(_.about)}),[_]),o.a.createElement(k,{name:"bioForm",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:c,about:m})},formClassNameMod:"popup__form_type_two-inputs"},o.a.createElement("fieldset",{className:"popup__input-container"},o.a.createElement("h2",{className:"popup__title"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement("input",{name:"name",onChange:function(e){s(e.target.value)},id:"name-input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0,minLength:"2",maxLength:"40",className:"popup__input popup__input_name"}),o.a.createElement("span",{id:"name-input-error",className:"popup__error"}),o.a.createElement("input",{name:"bio",onChange:function(e){d(e.target.value)},id:"bio-input",type:"text",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",className:"popup__input popup__input_bio"}),o.a.createElement("span",{id:"bio-input-error",className:"popup__error"}),o.a.createElement("button",{type:"submit",className:"popup__save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(k,{name:"avatarForm",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})},formClassNameMod:"popup__form_type_one-input"},o.a.createElement("fieldset",{className:"popup__input-container"},o.a.createElement("h2",{className:"popup__title"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"),o.a.createElement("input",{name:"avatar",ref:r,id:"avatar-input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,className:"popup__input popup__input_link"}),o.a.createElement("span",{id:"avatar-input-error",className:"popup__error"}),o.a.createElement("button",{type:"submit",className:"popup__save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useRef(),i=o.a.useRef();return o.a.createElement(k,{name:"cardForm",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:r.current.value,link:i.current.value})},submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",formClassNameMod:"popup__form_type_two-inputs"},o.a.createElement("fieldset",{className:"popup__input-container"},o.a.createElement("h2",{className:"popup__title"},"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),o.a.createElement("input",{name:"name",ref:r,id:"title-input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",className:"popup__input popup__input_title"}),o.a.createElement("span",{id:"title-input-error",className:"popup__error"}),o.a.createElement("input",{name:"link",ref:i,id:"link-input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,className:"popup__input popup__input_link"}),o.a.createElement("span",{id:"link-input-error",className:"popup__error"}),o.a.createElement("button",{type:"submit",className:"popup__save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.selectedCard;return o.a.createElement("div",{className:"popup popup_type_max-photo ".concat(t?"popup_visibility_visible":"")},o.a.createElement("div",{className:"popup__container popup__container_type_photo"},o.a.createElement("button",{type:"button",className:"popup__exit",onClick:a}),o.a.createElement("img",{src:n?n.link:"",alt:n.name,className:"popup__photo"}),o.a.createElement("h2",{className:"popup__photo-title"},n.name)))};var j=function(e){var t=e.isOpen,a=e.onClose,n=e.onDelete,r=e.selectedCard;return o.a.createElement(k,{name:"bio",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(r)},formClassNameMod:"popup__form_type_no-input"},o.a.createElement("fieldset",{className:"popup__input-container"},o.a.createElement("h2",{className:"popup__title"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"),o.a.createElement("button",{type:"submit",className:"popup__save"},"\u0414\u0430")))};var S=function(e){var t=e.onRegistration,a=o.a.useState(""),n=Object(p.a)(a,2),r=n[0],i=n[1],s=o.a.useState(""),l=Object(p.a)(s,2),u=l[0],m=l[1];return o.a.createElement("div",{className:"sign-in"},o.a.createElement("h2",{className:"sign-in__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("form",{name:"registrationForm",className:"sign-in__form",onSubmit:function(e){e.preventDefault(),t({email:r,password:u})},action:"#",noValidate:!0},o.a.createElement("input",{name:"registrationEmail",id:"registration-email",className:"sign-in__input",placeholder:"E-mail",minLength:"2",maxLength:"40",value:r,onChange:function(e){i(e.target.value)},type:"email",required:!0}),o.a.createElement("input",{name:"registrationPassword",id:"registration-password",className:"sign-in__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"40",value:u,onChange:function(e){m(e.target.value)},type:"password",required:!0}),o.a.createElement("button",{className:"sign-in__button",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o.a.createElement("p",{className:"sign-in__text"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",o.a.createElement(c.b,{className:"sign-in__link",to:"/sign-in"}," \u0412\u043e\u0439\u0442\u0438"))))},x=a(26),A=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return o.a.createElement(u.b,null,a.loggedIn?o.a.createElement(t,Object.assign({},a,{path:a.path})):o.a.createElement(u.a,{to:"/sign-in"}))};var w=function(e){var t=e.onLogin,a=o.a.useState(""),n=Object(p.a)(a,2),r=n[0],i=n[1],s=o.a.useState(""),l=Object(p.a)(s,2),u=l[0],m=l[1];return o.a.createElement("div",{className:"sign-in"},o.a.createElement("h2",{className:"sign-in__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement("form",{className:"sign-in__form",name:"loginForm",onSubmit:function(e){e.preventDefault(),t({email:r,password:u})},action:"#",noValidate:!0},o.a.createElement("input",{name:"loginEmail",id:"login-email",className:"sign-in__input",placeholder:"Email",minLength:"2",maxLength:"40",value:r,onChange:function(e){i(e.target.value)},type:"email",required:!0}),o.a.createElement("input",{name:"loginPassword",id:"login-password",className:"sign-in__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"40",value:u,onChange:function(e){m(e.target.value)},type:"password",required:!0}),o.a.createElement("button",{className:"sign-in__button",type:"submit"},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement("p",{className:"sign-in__text"},"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",o.a.createElement(c.b,{className:"sign-in__link",to:"/sign-up"}," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))};var L=function(e){var t=e.isOpen,a=e.onClose,n=e.text,r=e.pic,i=e.formClassNameMod;return o.a.createElement(k,{name:"tooltip",isOpen:t,onClose:a,formClassNameMod:i},o.a.createElement("div",{className:"popup__tooltip-".concat(r)}),o.a.createElement("p",{className:"popup__tooltip-text"},n))},I=a(23),T=a(24),R={url:"https://auth.nomoreparties.co",token:localStorage.token},D=new(function(){function e(t){t.token;var a=t.url;Object(I.a)(this,e),this._url=a}return Object(T.a)(e,[{key:"_handleResponse",value:function(e){if(e.ok)return e.json();console.error("Oops! Error: ".concat(e.status))}},{key:"getInitialCards",value:function(e){var t=e.token;return fetch("".concat(this._url,"/cards"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},method:"GET"}).then(this._handleResponse)}},{key:"createCard",value:function(e){var t=e.token,a=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({name:a,link:n}),method:"POST"}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){var t=e.token,a=e.id;return fetch("".concat(this._url,"/cards/").concat(a),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},method:"DELETE"}).then(this._handleResponse)}},{key:"likeCard",value:function(e){var t=e.token,a=e.cardId;return fetch("".concat(this._url,"/cards/").concat(a,"/likes"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},method:"PUT"}).then(this._handleResponse)}},{key:"dislikeCard",value:function(e){var t=e.token,a=e.cardId;return fetch("".concat(this._url,"/cards/").concat(a,"/likes"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},method:"DELETE"}).then(this._handleResponse)}},{key:"getUserInfo",value:function(e){var t=e.token;return fetch("".concat(this._url,"/users/me"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},method:"GET"}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.bio,n=e.token;return fetch("".concat(this._url,"/users/me"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify({name:t,about:a}),method:"PATCH"}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){var t=e.avatar,a=e.token;return fetch("".concat(this._url,"/users/me/avatar"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify({avatar:t}),method:"PATCH"}).then(this._handleResponse)}},{key:"signUp",value:function(e){var t=e.email,a=e.password;return fetch("".concat(this._url,"/signup"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:t,password:a})}).then(this._handleResponse)}},{key:"signIn",value:function(e){var t=e.email,a=e.password;return fetch("".concat(this._url,"/signin"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:t,password:a})}).then(this._handleResponse)}}]),e}())(R);var P=Object(u.h)((function(){var e=o.a.useState(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),i=Object(p.a)(r,2),c=i[0],m=i[1],d=o.a.useState(!1),h=Object(p.a)(d,2),f=h[0],k=h[1],x=o.a.useState(!1),I=Object(p.a)(x,2),T=I[0],R=I[1],P=o.a.useState(!1),B=Object(p.a)(P,2),U=B[0],M=B[1],q=o.a.useState({isOpen:!1,text:"test",pic:"ok"}),F=Object(p.a)(q,2),z=F[0],J=F[1],V=o.a.useState(""),G=Object(p.a)(V,2),H=G[0],W=G[1],$=o.a.useState({name:"\u0418\u043c\u044f",about:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",avatar:v.a}),K=Object(p.a)($,2),Q=K[0],X=K[1],Y=o.a.useState(""),Z=Object(p.a)(Y,2),ee=Z[0],te=Z[1],ae=o.a.useState([]),ne=Object(p.a)(ae,2),oe=ne[0],re=ne[1],ie=o.a.useState(!1),ce=Object(p.a)(ie,2),se=ce[0],le=ce[1],pe=Object(u.g)();function ue(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");D.getUserInfo({token:e}).then((function(e){e.data?(le(!0),te(e.data.email),pe.push("/")):(localStorage.removeItem("token"),le(!1),X({}),te(""))}))}}function me(e){console.error(e)}function de(){k(!1),document.avatarForm.reset(),n(!1),document.bioForm.reset(),m(!1),document.cardForm.reset(),R(!1),M(!1),J({isOpen:!1,text:"",pic:""}),setTimeout((function(){W("")}),200)}return o.a.useEffect((function(){ue()}),[]),o.a.useEffect((function(){se&&Promise.all([D.getUserInfo({token:localStorage.token}),D.getInitialCards({token:localStorage.token})]).then((function(e){var t=Object(p.a)(e,2),a=t[0].data,n=t[1].data;X(a),re(n.reverse())})).catch(me)}),[se]),o.a.createElement(g.Provider,{value:Q},o.a.createElement("div",{className:"page"},o.a.createElement(N,{isOpen:a,onClose:de,onUpdateUser:function(e){var t=e.name,a=e.about;D.setUserInfo({name:t,bio:a,token:localStorage.token}).then((function(){X(Object(l.a)(Object(l.a)({},Q),{},{name:t,about:a})),de()})).catch(me)}}),o.a.createElement(y,{isOpen:c,onClose:de,onAddPlace:function(e){var t=e.name,a=e.link;D.createCard({name:t,link:a,token:localStorage.token}).then((function(e){var t=e.data;re([t].concat(Object(s.a)(oe))),de()})).catch(me)}}),o.a.createElement(C,{isOpen:f,onClose:de,onUpdateAvatar:function(e){var t=e.avatar;D.setAvatar({avatar:t,token:localStorage.token}).then((function(){X(Object(l.a)(Object(l.a)({},Q),{},{avatar:t})),de()})).catch(me)}}),o.a.createElement(j,{name:"delete",isOpen:T,onClose:de,onDelete:function(e){D.deleteCard({id:e._id,token:localStorage.token}).then((function(){var t=oe.filter((function(t){return t!==e}));re(t),W(""),de()})).catch(me)},selectedCard:H}),o.a.createElement(O,{isOpen:U,onClose:de,selectedCard:H}),o.a.createElement(L,{text:z.text,pic:z.pic,isOpen:z.isOpen,onClose:de,formClassNameMod:"popup__form_type_one-input"}),o.a.createElement(_,{email:ee,onLogout:function(){localStorage.removeItem("token"),le(!1),X({}),te("")},isLoggedIn:se,history:pe}),o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/sign-in",exact:!0},o.a.createElement(w,{onLogin:function(e){var t=e.email,a=e.password;D.signIn({email:t,password:a}).then((function(e){e.token&&(localStorage.setItem("token",e.token),le(!0),ue())})).catch((function(e){console.error(e),J({isOpen:!0,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437",pic:"error"})}))}})),o.a.createElement(u.b,{path:"/sign-up",exact:!0},o.a.createElement(S,{onRegistration:function(e){var t=e.email,a=e.password;D.signUp({email:t,password:a}).then((function(e){e.data&&(J({isOpen:!0,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",pic:"ok"}),pe.push("/sign-in"))})).catch((function(e){console.error(e),J({isOpen:!0,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437",pic:"error"})}))}})),o.a.createElement(A,{component:E,loggedIn:se,cards:oe,onEditProfile:function(){n(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){k(!0)},onCardClick:function(e){W(e),M(!0)},onCardLike:function(e){function t(t){var a=t.data,n=oe.map((function(t){return t._id===e._id?a:t}));re(n)}e.likes.some((function(e){return e===Q._id}))?D.dislikeCard({cardId:e._id,token:localStorage.token}).then(t).catch(me):D.likeCard({cardId:e._id,token:localStorage.token}).then(t).catch(me)},onCardDelete:function(e){W(e),R(!0)}})),o.a.createElement(b,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null,o.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.353d0d13.chunk.js.map