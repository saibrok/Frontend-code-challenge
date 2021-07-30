(function(e){function t(t){for(var i,s,a=t[0],c=t[1],u=t[2],l=0,m=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Frontend-code-challenge/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"228b":function(e,t,n){"use strict";n("a1f9")},"2be0":function(e,t,n){"use strict";n("f6f5")},"414f":function(e,t,n){"use strict";n("968e")},4697:function(e,t,n){},"4d5a":function(e,t,n){"use strict";n("835e")},5672:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"reminders"},[n("header",{staticClass:"reminders__header"},[n("h1",{staticClass:"reminders__title"},[e._v("Reminders")]),e.isAuthorized?n("TheButton",{staticClass:"reminders__login",on:{onClick:e.logout}},[e._v(" Выйти ")]):n("TheButton",{staticClass:"reminders__login",on:{onClick:e.login}},[e._v(" Войти ")])],1),n("TheWatch"),n("TheUser",{staticClass:"reminders__user"}),n("TheButton",{staticClass:"reminders__add",attrs:{disabled:!e.isAuthorized},on:{onClick:e.openPopup}},[e._v(" Добавить + ")]),n("ReminderList")],1),e.isOpenPopup?n("ThePopup",[n(e.popupContent,{tag:"component"})],1):e._e(),n("NotificationContainer")],1)},o=[],s=(n("b0c0"),n("5530")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification-container"},e._l(e.notifications,(function(e){return n("NotificationBar",{key:e.id,class:e.type,attrs:{notification:e}})})),1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide-fade",appear:""}},[n("div",{staticClass:"notification-bar"},[n("span",{staticClass:"notification-bar__title"},[e._v(" "+e._s(e.notification.message)+" ")]),n("TheButton",{staticClass:"notification-bar__button",on:{onClick:e.close}},[e._v(" 🗑️ ")])],1)])},d=[],l=n("2f62"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button",attrs:{type:e.type,disabled:e.disabled},on:{click:function(t){return t.stopPropagation(),e.onClick(t)}}},[e._t("default",[n("span",[e._v("OK")])])],2)},p=[],f={props:{disabled:Boolean,type:{type:String,default:"button"}},methods:{onClick:function(){this.$emit("onClick")}}},h=f,_=(n("9fe3"),n("2877")),v=Object(_["a"])(h,m,p,!1,null,"0eac516f",null),g=v.exports,R={components:{TheButton:g},props:{notification:{type:Object,required:!0}},data:function(){return{timeout:null}},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])("notification",["remove"])),{},{close:function(){this.remove(this.notification)}}),mounted:function(){var e=this;"attention"!==this.notification.type&&(this.timeout=setTimeout((function(){return e.remove(e.notification)}),5e3))},beforeDestroy:function(){clearTimeout(this.timeout)}},b=R,E=(n("d899"),Object(_["a"])(b,u,d,!1,null,"4e01e5ea",null)),C=E.exports,T={components:{NotificationBar:C},computed:Object(l["d"])("notification",["notifications"])},O=T,S=(n("5c5e"),Object(_["a"])(O,a,c,!1,null,"fdc9170e",null)),P=S.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"edit-popup",on:{submit:function(t){return t.preventDefault(),e.submitReminder(t)}}},[n("h2",{staticClass:"edit-popup__title"},[e._v("Новое напоминание")]),n("div",{staticClass:"edit-popup__input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.reminder.note,expression:"reminder.note"}],ref:"inputtext",staticClass:"edit-popup__input edit-popup__input-text",attrs:{type:"text",placeholder:"Введите текст напоминания",maxlength:e.maxLength},domProps:{value:e.reminder.note},on:{input:function(t){t.target.composing||e.$set(e.reminder,"note",t.target.value)}}}),n("span",{staticClass:"edit-popup__counter"},[e._v(" "+e._s(e.maxLength-e.reminder.note.length)+" ")])]),n("div",{staticClass:"edit-popup__input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.reminder.date,expression:"reminder.date"}],staticClass:"edit-popup__input edit-popup__input-date",attrs:{type:"datetime-local",min:e.minDate,max:e.maxDate,pattern:"[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"},domProps:{value:e.reminder.date},on:{input:function(t){t.target.composing||e.$set(e.reminder,"date",t.target.value)}}})]),e.isDataLoading?n("TheLoader",{staticClass:"loader"}):n("TheButton",{staticClass:"edit-popup__save-button",attrs:{type:"submit",disabled:e.disabled}},[e._v(" Сохранить ")])],1)},L=[],I=(n("498a"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lds-facebook"},[n("div"),n("div"),n("div")])}],y={},j=y,x=(n("4d5a"),Object(_["a"])(j,I,w,!1,null,"173f3282",null)),$=x.exports,N={components:{TheButton:g,TheLoader:$},data:function(){return{reminder:{id:"",note:"",date:""},maxLength:"200",minDate:"2020-01-01T00:00",maxDate:"2050-01-01T00:00"}},computed:Object(s["a"])(Object(s["a"])({},Object(l["d"])({isOpenPopup:"isOpenPopup",isDataLoading:"isDataLoading",currentReminder:function(e){return e.reminders.currentReminder}})),{},{disabled:function(){return!this.reminder.note.trim()||!this.reminder.date}}),methods:{submitReminder:function(){this.$store.dispatch("reminders/submitReminder",this.reminder)}},mounted:function(){this.$refs.inputtext.focus(),Object.assign(this.reminder,this.currentReminder)}},U=N,F=(n("2be0"),Object(_["a"])(U,D,L,!1,null,"73be5287",null)),k=F.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reminders__wrapper"},[e.isAuthorized?[n("FilterList",{on:{toggleFilter:e.toggleFilter}}),n("ul",{staticClass:"reminders__list"},e._l(e.filteredReminders,(function(e){return n("ReminderItem",{key:e.id,attrs:{reminder:e}})})),1)]:e._e(),e.isAuthorized&&e.filteredReminders.length<=0?n("div",{staticClass:"reminders__empty"},[e._v(" Список напоминаний пуст ")]):e._e(),e.isDataLoading?n("TheLoader",{staticClass:"loader"}):e._e()],2)},B=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"reminder",class:{expired:e.expired},on:{click:e.openReminderView}},[n("div",{staticClass:"reminder__text"},[e._v(e._s(e.reminder.note))]),n("div",{staticClass:"reminder__date"},[e._v(e._s(e._f("formatDate")(e.reminder.date)))]),n("div",{staticClass:"reminder__buttons"},[n("TheButton",{staticClass:"reminder__edit-button",on:{onClick:e.editReminder}},[e._v(" ✒️ ")]),n("TheButton",{staticClass:"reminder__delete-button",on:{onClick:function(t){return e.deleteReminder(e.reminder.id)}}},[e._v(" 🗑️ ")])],1)])},G=[],z=(n("fb6a"),function(e){return new Date(e).toLocaleString().slice(0,-3)}),V={components:{TheButton:g},props:{reminder:{type:Object}},data:function(){return{expired:!1,interval:null}},filters:{formatDate:z},methods:{editReminder:function(){var e=Object.assign({},this.reminder);this.$store.dispatch("reminders/setCurrentReminder",e),this.$store.dispatch("setPopupContent","ReminderEdit"),this.$store.dispatch("openPopup")},deleteReminder:function(e){this.$store.dispatch("reminders/deleteReminder",e)},openReminderView:function(){var e=Object.assign({},this.reminder);this.$store.dispatch("reminders/setCurrentReminder",e),this.$store.dispatch("setPopupContent","ReminderView"),this.$store.dispatch("openPopup")}},mounted:function(){var e=this;+new Date(this.reminder.date)<Date.now()&&(this.expired=!0);var t={type:"attention",message:this.reminder.note};!1===this.expired&&(this.interval=setInterval((function(){+new Date(e.reminder.date)<Date.now()&&(e.$store.dispatch("notification/add",t,{root:!0}),e.expired=!0,clearInterval(e.interval))}),1e3))},updated:function(){+new Date(this.reminder.date)<Date.now()?this.expired=!0:this.expired=!1},beforeDestroy:function(){clearInterval(this.interval)}},q=V,J=(n("bbd2"),Object(_["a"])(q,M,G,!1,null,"162d8d4d",null)),H=J.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filters"},e._l(e.filters,(function(t){return n("TheButton",{key:t.name,staticClass:"filter-button",class:{active:e.activeFilter===""+t.name},on:{onClick:function(n){return e.toggleFilter(t.name)}}},[e._v(" "+e._s(t.title)+" ")])})),1)},W=[],Q={components:{TheButton:g},data:function(){return{activeFilter:"all",filters:[{name:"all",title:"Все"},{name:"active",title:"Активные"},{name:"overdue",title:"Просроченные"}]}},methods:{toggleFilter:function(e){this.activeFilter=e,this.$emit("toggleFilter",e)}}},X=Q,Y=(n("228b"),Object(_["a"])(X,K,W,!1,null,"676716ea",null)),Z=Y.exports,ee={components:{ReminderItem:H,FilterList:Z,TheLoader:$},computed:Object(s["a"])(Object(s["a"])({},Object(l["c"])({all:"reminders/allReminders",active:"reminders/activeReminders",overdue:"reminders/overdueReminders",isAuthorized:"user/isAuthorized"})),Object(l["d"])({reminders:function(e){return e.reminders.reminders},filteredReminders:function(e){return e.reminders.filteredReminders},isDataLoading:function(e){return e.isDataLoading}})),methods:{toggleFilter:function(e){this.$store.dispatch("reminders/setFilter",e),this.$store.dispatch("reminders/filterReminders",e)}}},te=ee,ne=(n("6ebe"),Object(_["a"])(te,A,B,!1,null,"39c9ca0c",null)),ie=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reminder-view"},[n("div",{staticClass:"reminder-view__text"},[e._v(" "+e._s(e.currentReminder.note)+" ")]),n("div",{staticClass:"reminder-view__input-date"},[e._v(" "+e._s(e._f("formatDate")(e.currentReminder.date))+" ")])])},oe=[],se={filters:{formatDate:z},computed:Object(s["a"])({},Object(l["d"])({currentReminder:function(e){return e.reminders.currentReminder}}))},ae=se,ce=(n("9a17"),Object(_["a"])(ae,re,oe,!1,null,"27218d10",null)),ue=ce.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"popup__wrapper",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[n("div",{staticClass:"popup"},[e._t("default"),n("TheButton",{staticClass:"popup__close-button",on:{onClick:e.closePopup}},[e._v(" ❌ ")])],2)])},le=[],me={components:{TheButton:g},methods:{closePopup:function(){this.$store.dispatch("closePopup")}}},pe=me,fe=(n("414f"),Object(_["a"])(pe,de,le,!1,null,"5ac856c6",null)),he=fe.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user"},[n("div",{staticClass:"user__info user__name"},[e._v(" Name: "),n("span",[e._v(" "+e._s(e.user.name))])]),n("div",{staticClass:"user__info user__id"},[e._v(" ID: "),n("span",[e._v(e._s(e.user.id))])])])},ve=[],ge={computed:Object(l["d"])({user:function(e){return e.user.user}})},Re=ge,be=(n("c6b9"),Object(_["a"])(Re,_e,ve,!1,null,"7171b1f6",null)),Ee=be.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"watch"},[e._v(e._s(e.currentTime))])},Te=[],Oe=n("bc3a"),Se=n.n(Oe),Pe={data:function(){return{currentTime:(new Date).toLocaleString()}},mounted:function(){var e=this;setInterval((function(){e.currentTime=(new Date).toLocaleString()}),1e3),Se.a.get("http://localhost:3000/reminders?userId=saVbqGn68f6qsJ2m").then((function(e){return 2*e.status})).then((function(e){return Se.a.get("http://localhost:3000/reminders?userId=".concat(e))})).then((function(e){return console.log("res3",e)}))}},De=Pe,Le=(n("5988"),Object(_["a"])(De,Ce,Te,!1,null,"3150c4a0",null)),Ie=Le.exports,we={name:"App",components:{TheUser:Ee,ReminderList:ie,TheButton:g,ReminderView:ue,ReminderEdit:k,NotificationContainer:P,ThePopup:he,TheWatch:Ie},data:function(){return{user:this.$store.state.user.user}},computed:Object(s["a"])(Object(s["a"])({},Object(l["c"])("user",["isAuthorized"])),Object(l["d"])(["isOpenPopup","popupContent"])),methods:{login:function(){this.$store.dispatch("user/login")},logout:function(){this.$store.dispatch("user/logout")},openPopup:function(){this.$store.dispatch("setPopupContent","ReminderEdit"),this.$store.dispatch("openPopup")}},mounted:function(){localStorage.name&&localStorage.id?this.$store.dispatch("user/setUser"):this.$store.dispatch("user/logout")}},ye=we,je=(n("5c0b"),Object(_["a"])(ye,r,o,!1,null,null,null)),xe=je.exports,$e=(n("4de4"),n("4160"),n("159b"),n("99af"),"http://localhost:3000/"),Ne=Se.a.create({baseURL:$e,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),Ue={auth:function(){return Ne.get("/auth")},getReminders:function(e){return Ne.get("/reminders?userId=".concat(e))},createReminder:function(e){var t=e.userId,n=e.reminder;return Ne.post("/reminders?userId=".concat(t),n)},editReminder:function(e){var t=e.userId,n=e.reminderId,i=e.newReminder;return Ne.put("/reminders/".concat(n,"?userId=").concat(t),i)},deleteReminder:function(e){var t=e.userId,n=e.reminderId;return Ne.delete("/reminders/".concat(n,"?userId=").concat(t))}},Fe={reminders:[],filteredReminders:[],currentFilter:"all",currentReminder:{id:"",note:"",date:""}},ke={allReminders:function(e){return e.reminders},activeReminders:function(e){return e.reminders.filter((function(e){return new Date(e.date)>new Date}))},overdueReminders:function(e){return e.reminders.filter((function(e){return new Date(e.date)<=new Date}))}},Ae={SET_REMINDERS:function(e,t){e.reminders=t},SET_FILTER:function(e,t){e.currentFilter=t},SET_FILTERED_REMINDERS:function(e,t){e.filteredReminders=t},CLEAR_REMINDERS:function(e){e.reminders=[],e.filteredReminders=[]},SET_CURRENT_REMINDER:function(e,t){e.currentReminder=t},CLEAR_CURRENT_REMINDER:function(e){e.currentReminder.id="",e.currentReminder.note="",e.currentReminder.date=""}},Be={fetchReminders:function(e){var t=e.commit,n=e.rootGetters,i=e.dispatch;i("setLoadingStatus",!0,{root:!0});var r=n["user/getUserId"];Ue.getReminders(r).then((function(e){var n=e.data;i("sortAndFormatReminders",n),t("SET_REMINDERS",n),i("filterReminders"),i("setLoadingStatus",!1,{root:!0});var r={type:"success",message:"Напоминания обновлены"};i("notification/add",r,{root:!0})})).catch((function(e){console.error(e),i("setLoadingStatus",!1,{root:!0});var t={type:"error",message:"Problem "+e.message};i("notification/add",t,{root:!0})}))},createReminder:function(e,t){var n=e.rootGetters,i=e.dispatch;i("setLoadingStatus",!0,{root:!0});var r=n["user/getUserId"],o=new Date(t.date);o.setTime(o.getTime()-60*o.getTimezoneOffset()*1e3),t.date=o,Ue.createReminder({userId:r,reminder:t}).then((function(){i("fetchReminders"),i("setLoadingStatus",!1,{root:!0}),i("closePopup",null,{root:!0});var e={type:"success",message:"Напоминание создано"};i("notification/add",e,{root:!0})})).catch((function(e){console.error(e),i("setLoadingStatus",!1,{root:!0});var t={type:"error",message:"Problem "+e.message};i("notification/add",t,{root:!0})}))},editReminder:function(e,t){var n=e.rootGetters,i=e.dispatch,r=t.reminderId,o=t.newReminder;i("setLoadingStatus",!0,{root:!0});var s=n["user/getUserId"],a=new Date(o.date);a.setTime(a.getTime()-60*a.getTimezoneOffset()*1e3),o.date=a,Ue.editReminder({userId:s,reminderId:r,newReminder:o}).then((function(){i("fetchReminders"),i("setLoadingStatus",!1,{root:!0}),i("closePopup",null,{root:!0});var e={type:"success",message:"Напоминание изменено"};i("notification/add",e,{root:!0})})).catch((function(e){console.error(e),i("setLoadingStatus",!1,{root:!0});var t={type:"error",message:"Problem "+e.message};i("notification/add",t,{root:!0})}))},deleteReminder:function(e,t){var n=e.rootGetters,i=e.dispatch;i("setLoadingStatus",!0,{root:!0});var r=n["user/getUserId"];Ue.deleteReminder({userId:r,reminderId:t}).then((function(){Fe.reminders=Fe.reminders.filter((function(e){return e.id!==t})),i("filterReminders"),i("setLoadingStatus",!1,{root:!0});var e={type:"success",message:"Напоминание удалено"};i("notification/add",e,{root:!0})})).catch((function(e){console.error(e),i("setLoadingStatus",!1,{root:!0});var t={type:"error",message:"Problem "+e.message};i("notification/add",t,{root:!0})}))},submitReminder:function(e,t){var n=e.dispatch,i={note:t.note,date:t.date},r=t.id;""===t.id?n("createReminder",i):n("editReminder",{reminderId:r,newReminder:i})},clearReminders:function(e){var t=e.commit;t("CLEAR_REMINDERS")},setCurrentReminder:function(e,t){var n=e.commit;n("SET_CURRENT_REMINDER",t)},clearCurrentReminder:function(e){var t=e.commit;t("CLEAR_CURRENT_REMINDER")},sortAndFormatReminders:function(e,t){t.forEach((function(e){e.date=new Date(e.date).toISOString().slice(0,-8)})),t.sort((function(e,t){return e["date"]>t["date"]?1:-1}))},setFilter:function(e,t){var n=e.commit,i=e.dispatch;n("SET_FILTER",t),i("filterReminders")},filterReminders:function(e){var t=e.commit;"all"===Fe.currentFilter?t("SET_FILTERED_REMINDERS",Fe.reminders):"active"===Fe.currentFilter?t("SET_FILTERED_REMINDERS",Fe.reminders.filter((function(e){return new Date(e.date)>new Date}))):"overdue"===Fe.currentFilter&&t("SET_FILTERED_REMINDERS",Fe.reminders.filter((function(e){return new Date(e.date)<=new Date})))}},Me={namespaced:!0,state:Fe,getters:ke,actions:Be,mutations:Ae},Ge={user:{id:"",name:""}},ze={isAuthorized:function(e){return!!e.user.id},getUserId:function(e){return e.user.id}},Ve={LOGIN:function(e,t){localStorage.name=t.name,localStorage.id=t.id},SET_USER:function(e){e.user.name=localStorage.name,e.user.id=localStorage.id},LOGOUT:function(e){e.user.name="",e.user.id="",localStorage.name="",localStorage.id=""}},qe={login:function(e){var t=e.commit,n=e.dispatch;n("setLoadingStatus",!0,{root:!0}),Ue.auth().then((function(e){t("LOGIN",e.data)})).then((function(){n("setUser");var e={type:"success",message:"Вход выполнен"};n("notification/add",e,{root:!0})})).catch((function(e){console.error(e),n("setLoadingStatus",!1,{root:!0});var t={type:"error",message:"Problem: "+e.message};n("notification/add",t,{root:!0})}))},logout:function(e){var t=e.commit,n=e.dispatch;t("LOGOUT"),n("reminders/clearReminders",null,{root:!0}),n("reminders/setFilter","all",{root:!0});var i={type:"success",message:"Выход выполнен"};n("notification/add",i,{root:!0})},setUser:function(e){var t=e.commit,n=e.dispatch;t("SET_USER"),n("reminders/fetchReminders",null,{root:!0})}},Je={namespaced:!0,state:Ge,getters:ze,mutations:Ve,actions:qe},He=0,Ke={notifications:[{id:132,type:"error",message:"example: Problem"},{id:133,type:"success",message:"example: It's OK"},{id:134,type:"attention",message:"example: Текст напоминания"}]},We={PUSH:function(e,t){e.notifications.push(Object(s["a"])(Object(s["a"])({},t),{},{id:He++}))},DELETE:function(e,t){e.notifications=e.notifications.filter((function(e){return e.id!==t.id}))}},Qe={add:function(e,t){var n=e.commit;n("PUSH",t)},remove:function(e,t){var n=e.commit;n("DELETE",t)}},Xe={namespaced:!0,state:Ke,actions:Qe,mutations:We};i["a"].use(l["a"]);var Ye=new l["a"].Store({state:{isDataLoading:!1,isOpenPopup:!1,popupContent:"ReminderEdit"},mutations:{SET_LOADING_STATUS:function(e,t){e.isDataLoading=t},SET_POPUP_CONTENT:function(e,t){e.popupContent=t},OPEN_POPUP:function(e){e.isOpenPopup=!0},CLOSE_POPUP:function(e){e.isOpenPopup=!1}},actions:{setLoadingStatus:function(e,t){var n=e.commit;n("SET_LOADING_STATUS",t)},setPopupContent:function(e,t){var n=e.commit;n("SET_POPUP_CONTENT",t)},openPopup:function(e){var t=e.commit;t("OPEN_POPUP")},closePopup:function(e){var t=e.commit,n=e.dispatch;t("CLOSE_POPUP"),n("reminders/clearCurrentReminder")}},modules:{reminders:Me,user:Je,notification:Xe}});i["a"].config.productionTip=!1,new i["a"]({store:Ye,render:function(e){return e(xe)}}).$mount("#app")},5988:function(e,t,n){"use strict";n("710c")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5c5e":function(e,t,n){"use strict";n("4697")},"6ebe":function(e,t,n){"use strict";n("74fb")},"710c":function(e,t,n){},"74fb":function(e,t,n){},"835e":function(e,t,n){},"8eb4":function(e,t,n){},"968e":function(e,t,n){},"99e0":function(e,t,n){},"9a17":function(e,t,n){"use strict";n("99e0")},"9c0c":function(e,t,n){},"9fe3":function(e,t,n){"use strict";n("5672")},a1f9:function(e,t,n){},b149:function(e,t,n){},bbd2:function(e,t,n){"use strict";n("8eb4")},c6b9:function(e,t,n){"use strict";n("e47f")},d899:function(e,t,n){"use strict";n("b149")},e47f:function(e,t,n){},f6f5:function(e,t,n){}});
//# sourceMappingURL=app.05b38843.js.map