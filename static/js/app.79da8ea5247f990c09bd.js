webpackJsonp([1],{"7zck":function(e,n){},Ksl9:function(e,n){e.exports={menus:[{id:1,title:"Home",link:"/"},{id:2,title:"About Us",link:"/about"},{id:3,title:"Contact Us",link:"/contact"}],images:[{id:1,src:"../static/img/1.jpg",href:"http://ya.ru"},{id:2,src:"../static/img/2.jpg",href:"http://google.ru"},{id:3,src:"../static/img/3.jpg",href:"http://yahoo.ru"},{id:4,src:"../static/img/4.jpg",href:"http://mail.ru"},{id:5,src:"../static/img/5.jpg",href:"http://news.ru"},{id:6,src:"../static/img/6.jpg",href:"http://afisha.ru"}]}},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t("7+uW"),a=t("Ksl9"),r=t.n(a),i={data:function(){return{menus:r.a.menus,nav:{rightDrawer:!1,clipped:!1,drawer:!0,fixed:!1}}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-navigation-drawer",{attrs:{fixed:"","mini-variant":e.nav.miniVariant,clipped:e.nav.clipped,app:""},model:{value:e.nav.drawer,callback:function(n){e.$set(e.nav,"drawer",n)},expression:"nav.drawer"}},[t("v-list",e._l(e.menus,function(n){return t("v-list-tile",{key:n.id,attrs:{to:n.link}},[t("v-list-tile-content",[t("v-list-tile-title",{domProps:{textContent:e._s(n.title)}})],1)],1)}))],1),e._v(" "),t("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":e.nav.clipped}},[t("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),e.nav.drawer=!e.nav.drawer}}}),e._v(" "),t("v-toolbar-title",[e._v(e._s(this.$route.name))])],1)],1)},staticRenderFns:[]},l={data:function(){return{}},components:{leftmenu:t("VU/8")(i,o,!1,null,null,null).exports}},u={render:function(){var e=this.$createElement,n=this._self._c||e;return n("v-app",[n("leftmenu"),this._v(" "),n("v-content",[n("router-view")],1),this._v(" "),n("v-footer",{attrs:{app:""}},[n("span",[this._v("© Softex Lab")])])],1)},staticRenderFns:[]},c=t("VU/8")(l,u,!1,null,null,null).exports,m=t("/ocq"),v={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[t("h1",[e._v("Тестовое задание")]),e._v(" "),t("p",[e._v("\n    Целью задания является создание одностраничного приложения с использованием фреймворка Vue.\n    В приложении должен быть липкий (sticky) header и карусель картинок.\n    Должна быть реализована имитация формы обратной связи. Приложение должно быть отзывчивым (responsive). \n    Можно использовать Vue CLI, или любой другой шаблон / веб-пакет / подход. \n  ")]),e._v(" "),t("br"),e._v(" "),t("h2",[e._v("На странице будет следующее:")]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Заголовок")]),e._v(" "),t("p",[e._v('\n    Должен иметь 3 навигационных элемента "Home", "About Us" и "Contact Us".\n    Размер шрифта / шрифт / цвета - на ваше усмотрение.\n    Вы можете добавить пустое место в конце документа, чтобы можно было проверить липкость \n    на мобильных и настольных устройствах. \n  ')]),e._v(" "),t("strong",[e._v("Карусель")]),e._v(" "),t("p",[e._v('\n    Содержит набор картинок, которые являются ссылками. Должна быть возможность "свайпить" их, как на мобильных так и на настольных устройствах, при этом должна оставаться возможность перехода по ссылке.\n    Карусель должна быть отзывчивой и настраиваться, сколько картинок может отображаться на разных устройствах.\n    По умолчанию на настольных устройствах нужно отображать 3 картинки, на мобильных - одну.\n    Карусель должна поддерживать всю функциональность и на мобильных устройствах.\n    Выбор дизайна на ваше усмотрение.\n  ')]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Форма связи")]),e._v(" "),t("p",[e._v("\n    Сделать маршрут  /contact и разместить пункт меню для перехода к нему.\n    На странице сделать форму с полями. Поля для формы следует хранить в глобальном хранилище vuex\n    Name - заполнено значением по умолчанию из vuex, валидация - не короче 3 символов.\n    Phone - маска номера  телефона твоей страны, валидация - 11 символов начиная с цифры кода вашей страны.\n    Message - textarea со счетчиком введенных символов, максимум 250 символов.\n  ")]),e._v(" "),t("br"),e._v("\n    После отправки формы нужно обновить значения полей в глобальном хранилище.\n    Разместить json файл в котором будет ответ сервера об успешной отправке формы и сделать имитацию запроса к серверу. Ответ с сообщением об успешной отправке показать пользователю.\n  "),t("br"),e._v(" "),t("strong",[e._v("Рекомендации")]),e._v(" "),t("p",[e._v("\n    Можете использовать любые CSS / JS-библиотеки, изображения, структуру, любые mixins / sass / less, с которыми вам удобно работать.\n    При необходимости добавьте инструкции (например, сборка npm run)\n\n    Что мы ожидаем увидеть\n\n    Разместите где-то готовый собранный проект, чтобы можно было оценить визуально выполнение задания. \n    Учтено будет не только качество кода, но и проработку визуальной части.\n    Хочется увидеть симпатичную, “ровную” страничку без лишних артефактов и неадекватного поведения объектов.\n    И конечно чистый, читаемый, отформатированный код, с правильной архитектурой.\n    После завершения нужно разместить свой код на публичном git-репозитории, например, GitHub.\n    Разместить работающую страницу на любом подходящем сервисе, например, GitHub Pages.\n    Выслать информацию о том сколько времени потребовалось на задание и ссылки на репозиторий и готовую страницу.\n  ")]),e._v(" "),t("p",[e._v("\n    Целью задания является создание одностраничного приложения с использованием фреймворка Vue.\n    В приложении должен быть липкий (sticky) header и карусель картинок.\n    Должна быть реализована имитация формы обратной связи. Приложение должно быть отзывчивым (responsive). \n    Можно использовать Vue CLI, или любой другой шаблон / веб-пакет / подход. \n  ")]),e._v(" "),t("br"),e._v(" "),t("h2",[e._v("На странице будет следующее:")]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Заголовок")]),e._v(" "),t("p",[e._v('\n    Должен иметь 3 навигационных элемента "Home", "About Us" и "Contact Us".\n    Размер шрифта / шрифт / цвета - на ваше усмотрение.\n    Вы можете добавить пустое место в конце документа, чтобы можно было проверить липкость \n    на мобильных и настольных устройствах. \n  ')]),e._v(" "),t("strong",[e._v("Карусель")]),e._v(" "),t("p",[e._v('\n    Содержит набор картинок, которые являются ссылками. Должна быть возможность "свайпить" их, как на мобильных так и на настольных устройствах, при этом должна оставаться возможность перехода по ссылке.\n    Карусель должна быть отзывчивой и настраиваться, сколько картинок может отображаться на разных устройствах.\n    По умолчанию на настольных устройствах нужно отображать 3 картинки, на мобильных - одну.\n    Карусель должна поддерживать всю функциональность и на мобильных устройствах.\n    Выбор дизайна на ваше усмотрение.\n  ')]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Форма связи")]),e._v(" "),t("p",[e._v("\n    Сделать маршрут  /contact и разместить пункт меню для перехода к нему.\n    На странице сделать форму с полями. Поля для формы следует хранить в глобальном хранилище vuex\n    Name - заполнено значением по умолчанию из vuex, валидация - не короче 3 символов.\n    Phone - маска номера  телефона твоей страны, валидация - 11 символов начиная с цифры кода вашей страны.\n    Message - textarea со счетчиком введенных символов, максимум 250 символов.\n  ")]),e._v(" "),t("br"),e._v("\n    После отправки формы нужно обновить значения полей в глобальном хранилище.\n    Разместить json файл в котором будет ответ сервера об успешной отправке формы и сделать имитацию запроса к серверу. Ответ с сообщением об успешной отправке показать пользователю.\n  "),t("br"),e._v(" "),t("strong",[e._v("Рекомендации")]),e._v(" "),t("p",[e._v("\n    Можете использовать любые CSS / JS-библиотеки, изображения, структуру, любые mixins / sass / less, с которыми вам удобно работать.\n    При необходимости добавьте инструкции (например, сборка npm run)\n\n    Что мы ожидаем увидеть\n\n    Разместите где-то готовый собранный проект, чтобы можно было оценить визуально выполнение задания. \n    Учтено будет не только качество кода, но и проработку визуальной части.\n    Хочется увидеть симпатичную, “ровную” страничку без лишних артефактов и неадекватного поведения объектов.\n    И конечно чистый, читаемый, отформатированный код, с правильной архитектурой.\n    После завершения нужно разместить свой код на публичном git-репозитории, например, GitHub.\n    Разместить работающую страницу на любом подходящем сервисе, например, GitHub Pages.\n    Выслать информацию о том сколько времени потребовалось на задание и ссылки на репозиторий и готовую страницу.\n  ")])])},staticRenderFns:[]},p=t("VU/8")(null,v,!1,null,null,null).exports,d=t("NYxO"),f={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[t("v-flex",{attrs:{xs12:"",sm5:"",md3:""}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:"","error-count":"3"},model:{value:e.name,callback:function(n){e.name=n},expression:"name"}}),e._v(" "),t("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone number",required:"",mask:"(###)###-####",prefix:"+7",placeholder:"(###)###-####"},model:{value:e.phone,callback:function(n){e.phone=n},expression:"phone"}}),e._v(" "),t("v-textarea",{attrs:{name:"input-7-1",label:"Message",counter:250,rules:e.messageRules},model:{value:e.message,callback:function(n){e.message=n},expression:"message"}}),e._v(" "),t("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\n    submit\n  ")]),e._v(" "),t("v-btn",{on:{click:e.clear}},[e._v("clear")])],1),e._v(" "),t("v-alert",{attrs:{value:e.alert,dismissible:"",type:"success"}},[e._v("\n    "+e._s(this.$store.state.response)+"\n  ")])],1)],1)},staticRenderFns:[]},_=t("VU/8")({data:function(){return{valid:!0,name:"",defaultName:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>=3||"Name must be greater than 3 characters"}],phone:"",phoneRules:[function(e){return!!e||"Phone is required"},function(e){return e&&10==e.length||"Phone must be contain 11 characters"}],message:"",messageRules:[function(e){return!!e||"Message is required"},function(e){return e&&e.length<250||"Message must contain no more than 250 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("sendForm",{name:this.name,phone:this.phone,message:this.message})},clear:function(){this.$refs.form.reset()}},computed:{alert:function(){return""!=this.$store.state.response}},mounted:function(){this.name=this.$store.state.forma.name}},f,!1,null,null,null).exports,h=t("/kJX"),g={components:{Carousel:h.Carousel,Slide:h.Slide},data:function(){return{images:r.a.images,deskCount:3,mobileCount:1}},methods:{}},b={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[t("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[t("v-flex",{attrs:{xs3:"",sm1:"",md1:""}},[t("v-select",{attrs:{items:[1,2,3,4],"menu-props":"auto","hide-details":"","prepend-icon":"stay_current_portrait","single-line":""},model:{value:e.mobileCount,callback:function(n){e.mobileCount=n},expression:"mobileCount"}})],1),e._v(" "),t("v-flex",{attrs:{xs3:"",sm1:"",md1:""}},[t("v-select",{attrs:{items:[1,2,3,4],"menu-props":"auto","hide-details":"","prepend-icon":"desktop_windows","single-line":""},model:{value:e.deskCount,callback:function(n){e.deskCount=n},expression:"deskCount"}})],1)],1),e._v(" "),t("br"),e._v(" "),t("carousel",{staticClass:"row",attrs:{perPage:e.mobileCount,perPageCustom:[[1024,e.deskCount]],minSwipeDistance:2}},e._l(e.images,function(e){return t("slide",{key:e.id},[t("a",{attrs:{href:e.href}},[t("img",{attrs:{src:e.src,width:"95%"}})])])}))],1)},staticRenderFns:[]};var x=t("VU/8")(g,b,!1,function(e){t("RFcZ")},null,null).exports;s.default.use(m.a);var k=new m.a({routes:[{path:"/",name:"Home",component:p},{path:"/contact",name:"Contact Us",component:_},{path:"/about",name:"About Us",component:x}]}),C=t("3EgV"),w=t.n(C),y=(t("7zck"),t("mtWM")),R=t.n(y);s.default.use(d.a);var U=function(){return new d.a.Store({state:{forma:{name:"John",phone:0,message:""},response:""},mutations:{commitAnyThing:function(e,n){var t=n.type,s=n.items;e[t]=s}},actions:{sendForm:function(e,n){var t=this;e.commit,this.commit("commitAnyThing",{type:"response",items:""}),R.a.post("http://localhost:3000/responses",{name:n.name,phone:n.phone,message:n.message}).then(function(e){201==e.status&&(t.commit("commitAnyThing",{type:"response",items:"Sent successfully! :)"}),t.commit("commitAnyThing",{type:"forma",items:n}))})}}})};s.default.use(w.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:k,components:{App:c},template:"<App/>",store:U})},RFcZ:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.79da8ea5247f990c09bd.js.map