(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0171":function(t,e,a){"use strict";var n=a("768b"),i=a("6723"),r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"0574":function(t,e){},1126:function(t,e,a){"use strict";var n=a("1664"),i=a.n(n);i.a},"14b6":function(t,e,a){},1664:function(t,e,a){},"2ef7":function(t,e,a){},"3c2c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=(a("45fc"),a("8c4f")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-feed"}},[a("v-row",[a("v-col",{staticClass:"pa-0"},[a("router-link",{attrs:{to:{name:"view-news",params:{news_id:t.news[0].news_id}}}},[a("v-img",{staticClass:"white--text align-end border-radius-full",attrs:{src:t.news[0].image,gradient:"to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)",height:"50vh"}},[a("v-card-title",{staticClass:"headline font-weight-bold",domProps:{textContent:t._s(t.news[0].title)}})],1)],1)],1)],1),t._l(t.news,(function(e){return a("v-row",{key:e.news_id,staticClass:"news-feed-list"},[a("v-col",{staticClass:"pa-0",attrs:{cols:"4",md:"4"}},[a("router-link",{attrs:{to:{name:"view-news",params:{news_id:e.news_id}}}},[a("v-img",{staticClass:"white--text align-end border-radius",attrs:{src:e.image,height:"140px"}})],1)],1),a("v-col",{staticClass:"pa-0",attrs:{cols:"8",md:"6"}},[a("router-link",{attrs:{to:{name:"view-news",params:{news_id:e.news_id}}}},[a("v-card-title",{staticClass:"subtitle-1 font-weight-bold",domProps:{textContent:t._s(e.title)}}),a("v-card-text",{staticClass:"overline"},[t._v(t._s(e.author))])],1)],1)],1)}))],2)},s=[],o=(a("4160"),a("159b"),a("8aa5")),l=a.n(o),c=(a("e71f"),a("588e"),{apiKey:"AIzaSyC582O3aTC-bSFN4qdtyd3yR-89_318L8s",authDomain:"nieuwslandschap.firebaseapp.com",databaseURL:"https://nieuwslandschap.firebaseio.com",projectId:"nieuwslandschap",storageBucket:"nieuwslandschap.appspot.com",messagingSenderId:"460870293258",appId:"1:460870293258:web:a1298be6923babed08ccf3",measurementId:"G-5X0C3YF9W5"}),u=l.a.initializeApp(c),d=u.firestore(),m={data:function(){return{news:[]}},created:function(){var t=this;d.collection("news").orderBy("news_id","desc").get().then((function(e){e.forEach((function(e){var a={news_id:e.data().news_id,author:e.data().author,title:e.data().title,text:e.data().text,image:e.data().image};t.news.push(a)}))}))}},f=m,h=a("2877"),p=a("6544"),v=a.n(p),g=a("99d9"),w=a("62ad"),b=a("adda"),k=a("0fd9"),_=Object(h["a"])(f,r,s,!1,null,null,null),C=_.exports;v()(_,{VCardText:g["b"],VCardTitle:g["c"],VCol:w["a"],VImg:b["a"],VRow:k["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"methode-een"}},[a("v-row",{staticClass:"no-padding"},[a("v-col",{staticClass:"no-padding"},[a("v-img",{staticClass:"white--text align-end border-radius-full",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-04-22%20at%2022.22.19.png?alt=media&token=fa7e28ee-b438-45ea-ba68-67acbf51bcd5",gradient:"to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)",height:"40vh"}},[a("v-card-title",{staticClass:"font-weight-bold",domProps:{textContent:t._s(this.title)}})],1)],1)],1),a("v-row",{staticClass:"full-height"},[a("iframe",{attrs:{src:"https://player.vimeo.com/video/410763543",width:"100%",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})])],1)},V=[],y={data:function(){return{title:"Methode 1"}}},N=y,j=(a("5a0e"),Object(h["a"])(N,x,V,!1,null,"583bfb44",null)),O=j.exports;v()(j,{VCardTitle:g["c"],VCol:w["a"],VImg:b["a"],VRow:k["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"methode-twee"}},[a("v-row",{staticClass:"no-padding"},[a("v-col",{staticClass:"no-padding"},[a("v-img",{staticClass:"white--text align-end border-radius-full",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-10-56.jpg?alt=media&token=fe00e1c5-c687-4a86-b53f-0aa33b0ebf42",gradient:"to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)",height:"40vh"}},[a("v-card-title",{staticClass:"font-weight-bold",domProps:{textContent:t._s(this.title)}})],1)],1),a("v-col",{staticClass:"pt-4",attrs:{cols:"12"}},[t._v(" "+t._s(this.text)+" ")]),a("v-img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-10-56.jpg?alt=media&token=fe00e1c5-c687-4a86-b53f-0aa33b0ebf42"}}),a("v-img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-13-48.jpg?alt=media&token=bce1b400-ead3-4dbb-8b53-4aa29a15ac4f"}}),a("v-img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-07-25.jpg?alt=media&token=7bf1bcc5-9cc9-427e-b1b1-a25a6a37feda"}})],1)],1)},R=[],T={data:function(){return{title:"Methode 2",text:"Om vanuit mijn methode ook daadwerkelijk data te verzamelen ben ik via Whatsapp mensen gaan benaderen om mijn methode uit te voeren. "}}},L=T,I=Object(h["a"])(L,F,R,!1,null,null,null),E=I.exports;v()(I,{VCardTitle:g["c"],VCol:w["a"],VImg:b["a"],VRow:k["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"methode-drie"}},[a("v-row",{staticClass:" pb-12"},t._l(t.methode,(function(e){return a("v-btn",{key:e.bron,staticClass:"bubble",class:e.bron,style:{height:e.punten+"px",width:e.punten+"px"}},[t._v(" "+t._s(e.bron)+" ")])})),1)],1)},$=[],S={data:function(){return{methode:[{bron:"HVNL",punten:55,color:"#453292;"},{bron:"AD",punten:100,color:"#453292;"},{bron:"CNN",punten:40,color:"#453292;"},{bron:"RTL",punten:190,color:"#453292;"},{bron:"NRC",punten:100,color:"#453292;"},{bron:"BBC",punten:110,color:"#453292;"},{bron:"NOS",punten:200,color:"#453292;"},{bron:"TELEGRAAF",punten:160,color:"#453292;"},{bron:"VOLKSKRANT",punten:180,color:"#453292;"},{bron:"NU",punten:175,color:"#453292;"},{bron:"GUARDIAN",punten:120,color:"#453292;"},{bron:"REUTERS",punten:40,color:"#453292;"}]}}},A=S,U=(a("d4d6"),a("8336")),q=Object(h["a"])(A,B,$,!1,null,"5e8f0977",null),W=q.exports;v()(q,{VBtn:U["a"],VRow:k["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"methode-een"}},[a("v-row",{staticClass:"no-padding"},[a("v-col",{staticClass:"no-padding"},[a("v-img",{staticClass:"white--text align-end border-radius-full",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-04-22%20at%2022.22.19.png?alt=media&token=fa7e28ee-b438-45ea-ba68-67acbf51bcd5",gradient:"to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)",height:"40vh"}},[a("v-card-title",{staticClass:"font-weight-bold"})],1)],1)],1),a("v-row",{staticClass:"full-height"},[a("v-col",{attrs:{cols:"12"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.saveNews(e)}}},[a("v-text-field",{attrs:{counter:20,label:"Naam",required:""},model:{value:t.naam,callback:function(e){t.naam=e},expression:"naam"}}),a("v-text-field",{attrs:{counter:2,label:"Leeftijd",required:"",type:"number"},model:{value:t.leeftijd,callback:function(e){t.leeftijd=e},expression:"leeftijd"}}),a("v-select",{attrs:{items:t.items,"menu-props":{top:!0,offsetY:!0},label:"Wie spreekt de waarheid over sport"},model:{value:t.sport,callback:function(e){t.sport=e},expression:"sport"}}),a("v-select",{attrs:{items:t.items,"menu-props":{top:!0,offsetY:!0},label:"Wie spreekt de waarheid over het klimaat"},model:{value:t.klimaat,callback:function(e){t.klimaat=e},expression:"klimaat"}}),a("v-select",{attrs:{items:t.items,"menu-props":{top:!0,offsetY:!0},label:"Wie spreekt de waarheid over de politiek"},model:{value:t.politiek,callback:function(e){t.politiek=e},expression:"politiek"}}),a("v-select",{attrs:{items:t.items,"menu-props":{top:!0,offsetY:!0},label:"Wie spreekt de waarheid over het koningshuis"},model:{value:t.koningshuis,callback:function(e){t.koningshuis=e},expression:"koningshuis"}}),a("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Submit")])],1)])],1)],1)},D=[],M={data:function(){return{items:["NOS","RTL","VOLKSKRANT","NU.NL"],naam:null,leeftijd:null,sport:null,klimaat:null,politiek:null,koningshuis:null}},methods:{saveNews:function(){d.collection("methode4").add({naam:this.naam,leeftijd:this.leeftijd,sport:this.sport,klimaat:this.klimaat,politiek:this.politiek,koningshuis:this.koningshuis}).then(this.$router.push("/"))}}},K=M,G=a("b974"),H=a("8654"),Y=Object(h["a"])(K,P,D,!1,null,null,null),z=Y.exports;v()(Y,{VBtn:U["a"],VCardTitle:g["c"],VCol:w["a"],VImg:b["a"],VRow:k["a"],VSelect:G["a"],VTextField:H["a"]});var J=a("0171"),X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-methode-vier"}},[a("v-row",{staticClass:"no-padding"},[a("v-col",{staticClass:"no-padding"},[a("sport"),a("politiek"),a("koningshuis"),a("klimaat")],1)],1)],1)},Q=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sport"}},[a("h5",[t._v("Wie spreekt de waarheid over sport?")]),a("v-row",{staticClass:"nos"},t._l(t.klimaatFilterNos,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.sport)+" ")])})),1),a("v-row",{staticClass:"volkskrant"},t._l(t.klimaatFilterVolkskrant,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.sport)+" ")])})),1),a("v-row",{staticClass:"nu"},t._l(t.klimaatFilterNu,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.sport)+" ")])})),1),a("v-row",{staticClass:"rtl"},t._l(t.klimaatFilterRtl,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.sport)+" ")])})),1)],1)},tt=[],et=(a("4de4"),{data:function(){return{methode4:[],nos:[]}},created:function(){var t=this;d.collection("methode4").get().then((function(e){e.forEach((function(e){var a={naam:e.data().naam,leeftijd:e.data().leeftijd,sport:e.data().sport,klimaat:e.data().klimaat,politiek:e.data().politiek,koningshuis:e.data().koningshuis};t.methode4.push(a)}))}))},computed:{klimaatFilterNos:function(){return this.methode4.filter((function(t){var e="NOS"==t.sport;return e}))},klimaatFilterVolkskrant:function(){return this.methode4.filter((function(t){var e="VOLKSKRANT"==t.sport;return e}))},klimaatFilterNu:function(){return this.methode4.filter((function(t){var e="NU.NL"==t.sport;return e}))},klimaatFilterRtl:function(){return this.methode4.filter((function(t){var e="RTL"==t.sport;return e}))}}}),at=et,nt=(a("d4cb"),Object(h["a"])(at,Z,tt,!1,null,"438fae7e",null)),it=nt.exports;v()(nt,{VCol:w["a"],VRow:k["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sport"}},[a("h5",[t._v("Wie spreekt de waarheid over politiek?")]),a("v-row",{staticClass:"nos"},t._l(t.politiekFilterNos,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.politiek)+" ")])})),1),a("v-row",{staticClass:"volkskrant"},t._l(t.politiekFilterVolkskrant,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.politiek)+" ")])})),1),a("v-row",{staticClass:"nu"},t._l(t.politiekFilterNu,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.politiek)+" ")])})),1),a("v-row",{staticClass:"rtl"},t._l(t.politiekFilterRtl,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.politiek)+" ")])})),1)],1)},st=[],ot={data:function(){return{methode4:[],nos:[]}},created:function(){var t=this;d.collection("methode4").get().then((function(e){e.forEach((function(e){var a={naam:e.data().naam,leeftijd:e.data().leeftijd,sport:e.data().sport,klimaat:e.data().klimaat,politiek:e.data().politiek,koningshuis:e.data().koningshuis};t.methode4.push(a)}))}))},computed:{politiekFilterNos:function(){return this.methode4.filter((function(t){var e="NOS"==t.politiek;return e}))},politiekFilterVolkskrant:function(){return this.methode4.filter((function(t){var e="VOLKSKRANT"==t.politiek;return e}))},politiekFilterNu:function(){return this.methode4.filter((function(t){var e="NU.NL"==t.politiek;return e}))},politiekFilterRtl:function(){return this.methode4.filter((function(t){var e="RTL"==t.politiek;return e}))}}},lt=ot,ct=(a("ec7f"),Object(h["a"])(lt,rt,st,!1,null,"2968bf28",null)),ut=ct.exports;v()(ct,{VCol:w["a"],VRow:k["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sport"}},[a("h5",[t._v("Wie spreekt de waarheid over koningshuis?")]),a("v-row",{staticClass:"nos"},t._l(t.koningshuisFilterNos,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.koningshuis)+" ")])})),1),a("v-row",{staticClass:"volkskrant"},t._l(t.koningshuisFilterVolkskrant,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.koningshuis)+" ")])})),1),a("v-row",{staticClass:"nu"},t._l(t.koningshuisFilterNu,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.koningshuis)+" ")])})),1),a("v-row",{staticClass:"rtl"},t._l(t.koningshuisFilterRtl,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.koningshuis)+" ")])})),1)],1)},mt=[],ft={data:function(){return{methode4:[],nos:[]}},created:function(){var t=this;d.collection("methode4").get().then((function(e){e.forEach((function(e){var a={naam:e.data().naam,leeftijd:e.data().leeftijd,sport:e.data().sport,klimaat:e.data().klimaat,politiek:e.data().politiek,koningshuis:e.data().koningshuis};t.methode4.push(a)}))}))},computed:{koningshuisFilterNos:function(){return this.methode4.filter((function(t){var e="NOS"==t.koningshuis;return e}))},koningshuisFilterVolkskrant:function(){return this.methode4.filter((function(t){var e="VOLKSKRANT"==t.koningshuis;return e}))},koningshuisFilterNu:function(){return this.methode4.filter((function(t){var e="NU.NL"==t.koningshuis;return e}))},koningshuisFilterRtl:function(){return this.methode4.filter((function(t){var e="RTL"==t.koningshuis;return e}))}}},ht=ft,pt=(a("7584"),Object(h["a"])(ht,dt,mt,!1,null,"03e3c28a",null)),vt=pt.exports;v()(pt,{VCol:w["a"],VRow:k["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sport"}},[a("h5",[t._v("Wie spreekt de waarheid over het klimaat?")]),a("v-row",{staticClass:"nos"},t._l(t.klimaatFilterNos,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.klimaat)+" ")])})),1),a("v-row",{staticClass:"volkskrant"},t._l(t.klimaatFilterVolkskrant,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.klimaat)+" ")])})),1),a("v-row",{staticClass:"nu"},t._l(t.klimaatFilterNu,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.klimaat)+" ")])})),1),a("v-row",{staticClass:"rtl"},t._l(t.klimaatFilterRtl,(function(e){return a("v-col",{key:e.naam,staticClass:"news-feed-list"},[t._v(" "+t._s(e.klimaat)+" ")])})),1)],1)},wt=[],bt={data:function(){return{methode4:[],nos:[]}},created:function(){var t=this;d.collection("methode4").get().then((function(e){e.forEach((function(e){var a={naam:e.data().naam,leeftijd:e.data().leeftijd,sport:e.data().sport,klimaat:e.data().klimaat,politiek:e.data().politiek,koningshuis:e.data().koningshuis};t.methode4.push(a)}))}))},computed:{klimaatFilterNos:function(){return this.methode4.filter((function(t){var e="NOS"==t.klimaat;return e}))},klimaatFilterVolkskrant:function(){return this.methode4.filter((function(t){var e="VOLKSKRANT"==t.klimaat;return e}))},klimaatFilterNu:function(){return this.methode4.filter((function(t){var e="NU.NL"==t.klimaat;return e}))},klimaatFilterRtl:function(){return this.methode4.filter((function(t){var e="RTL"==t.klimaat;return e}))}}},kt=bt,_t=(a("1126"),Object(h["a"])(kt,gt,wt,!1,null,"2bda08cf",null)),Ct=_t.exports;v()(_t,{VCol:w["a"],VRow:k["a"]});var xt={name:"view-methode-vier",components:{sport:it,politiek:ut,koningshuis:vt,klimaat:Ct}},Vt=xt,yt=Object(h["a"])(Vt,X,Q,!1,null,null,null),Nt=yt.exports;v()(yt,{VCol:w["a"],VRow:k["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"ma-12",attrs:{align:"center",justify:"center"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.saveNews(e)}}},[a("v-text-field",{attrs:{counter:20,label:"number",required:"",type:"number"},model:{value:t.news_id,callback:function(e){t.news_id=e},expression:"news_id"}}),a("v-text-field",{attrs:{counter:20,label:"author",required:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),a("input",{attrs:{type:"file",required:""},on:{change:t.uploadImage}}),a("label",[t._v("News Image1")]),a("input",{attrs:{type:"file"},on:{change:t.uploadImage1}}),a("label",[t._v("News Image2")]),a("input",{attrs:{type:"file"},on:{change:t.uploadImage2}}),a("label",[t._v("News Image2")]),a("v-text-field",{attrs:{counter:20,label:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Filled textarea",value:"Hier komt het verhaal",required:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Submit")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/news"}},[t._v("Cancel")])],1)])},Ot=[],Ft=(a("b0c0"),a("a9e3"),{data:function(){return{news_id:null,props:{Number:Number},author:null,image:null,image1:null,image2:null,title:null,text:null}},methods:{saveNews:function(){d.collection("news").add({news_id:this.news_id,author:this.author,image:this.image,image1:this.image1,image2:this.image2,title:this.title,text:this.text}).then(this.$router.push("/"))},uploadImage:function(t){var e=this;console.log(new l.a.firestore.Timestamp);var a=t.target.files[0],n=l.a.storage().ref("news/"+a.name),i=n.put(a);n.put(a),i.on("state_changed",(function(t){}),(function(t){}),(function(){i.snapshot.ref.getDownloadURL().then((function(t){e.image=t,console.log("File available at",t)}))}))},uploadImage1:function(t){var e=this;console.log(new l.a.firestore.Timestamp);var a=t.target.files[0],n=l.a.storage().ref("news/"+a.name),i=n.put(a);n.put(a),i.on("state_changed",(function(t){}),(function(t){}),(function(){i.snapshot.ref.getDownloadURL().then((function(t){e.image1=t,console.log("File available at",t)}))}))},uploadImage2:function(t){var e=this;console.log(new l.a.firestore.Timestamp);var a=t.target.files[0],n=l.a.storage().ref("news/"+a.name),i=n.put(a);n.put(a),i.on("state_changed",(function(t){}),(function(t){}),(function(){i.snapshot.ref.getDownloadURL().then((function(t){e.image2=t,console.log("File available at",t)}))}))}}}),Rt=Ft,Tt=a("a844"),Lt=Object(h["a"])(Rt,jt,Ot,!1,null,null,null),It=Lt.exports;v()(Lt,{VBtn:U["a"],VRow:k["a"],VTextField:H["a"],VTextarea:Tt["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-dashboard"}},[a("h3",[t._v("Dashboard News")]),a("ul",{staticClass:"collection with-header"},[t._m(0),t._l(t.news,(function(e){return a("li",{key:e.id,staticClass:"collection-item"},[t._v(" "+t._s(e.news_id)+" "+t._s(e.author)+" - "+t._s(e.title)+" - "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"edit-news",params:{news_id:e.news_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)}))],2)])},Bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"collection-header"},[a("h4",[t._v("newssss")])])}],$t={data:function(){return{news:[]}},created:function(){var t=this;d.collection("news").get().then((function(e){e.forEach((function(e){var a={id:e.id,news_id:e.data().news_id,author:e.data().author,title:e.data().title,text:e.data().text,image:e.data().image};t.news.push(a)}))}))}},St=$t,At=Object(h["a"])(St,Et,Bt,!1,null,null,null),Ut=At.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-dashboard"}},[a("v-row",{staticClass:"no-padding"},[a("v-col",{staticClass:"no-padding"},[a("v-img",{staticClass:"white--text align-end border-radius-full",attrs:{src:t.image,gradient:"to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)",height:"40vh"}},[a("v-card-title",{staticClass:"font-weight-bold",domProps:{textContent:t._s(this.title)}})],1)],1)],1),a("v-row",{staticClass:"ma-2"},[a("v-col",{staticClass:"pb-4",attrs:{cols:"12"}},[t._v(" "+t._s(this.author)+" ")]),a("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(this.text)+" ")]),a("v-col",{attrs:{cols:"12"}},[a("img",{attrs:{src:t.image1}})]),a("v-col",{attrs:{cols:"12"}},[a("img",{attrs:{src:t.image2}})])],1)],1)},Wt=[],Pt={data:function(){return{news_id:null,author:null,image:null,image1:null,image2:null,title:null,text:null,time:null}},beforeRouteEnter:function(t,e,a){d.collection("news").where("news_id","==",t.params.news_id).get().then((function(t){t.forEach((function(t){a((function(e){e.news_id=t.data().news_id,e.author=t.data().author,e.image=t.data().image,e.image1=t.data().image1,e.image2=t.data().image2,e.title=t.data().title,e.text=t.data().text,e.time=t.data().time}))}))}))}},Dt=Pt,Mt=Object(h["a"])(Dt,qt,Wt,!1,null,null,null),Kt=Mt.exports;v()(Mt,{VCardTitle:g["c"],VCol:w["a"],VImg:b["a"],VRow:k["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-news"}},[a("h3",[t._v("Create News Item")]),a("v-row",{staticClass:"pt-12",attrs:{align:"center",justify:"center"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.updateNews(e)}}},[a("v-text-field",{attrs:{counter:20,label:"number",required:"",type:"number"},model:{value:t.news_id,callback:function(e){t.news_id=e},expression:"news_id"}}),a("v-text-field",{attrs:{counter:20,label:"author",required:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),a("v-text-field",{attrs:{counter:20,label:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Filled textarea",value:"Hier komt het verhaal",required:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Submit")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/news"}},[t._v("Cancel")])],1)])],1)},Ht=[],Yt={dept:"new-employee",data:function(){return{news_id:null,author:null,title:null,text:null}},beforeRouteEnter:function(t,e,a){d.collection("news").where("news_id","==",t.params.news_id).get().then((function(t){t.forEach((function(t){a((function(e){e.news_id=t.data().news_id,e.author=t.data().author,e.title=t.data().title,e.text=t.data().text}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("news").where("news_id","==",this.$route.params.news_id).get().then((function(e){e.forEach((function(e){t.news_id=e.data().news_id,t.author=e.data().author,t.title=e.data().title,t.text=e.data().text}))}))},updateNews:function(){var t=this;d.collection("news").where("news_id","==",this.$route.params.news_id).get().then((function(e){e.forEach((function(e){e.ref.update({news_id:t.news_id,author:t.author,title:t.title,text:t.text}).then((function(){t.$router.push({name:"view-news",params:{news_id:t.news_id}})}))}))}))}}},zt=Yt,Jt=Object(h["a"])(zt,Gt,Ht,!1,null,null,null),Xt=Jt.exports;v()(Jt,{VBtn:U["a"],VRow:k["a"],VTextField:H["a"],VTextarea:Tt["a"]});var Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("v-row",{staticClass:"full-height",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Mail",name:"email",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Wachtwoord",name:"password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.login}},[t._v("Login")])],1)],1)],1)],1)],1)},Zt=[],te={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;l.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){alert("You are logged in as ${user.email}"),e.$router.push("/")}),(function(t){alert(t.message)})),t.preventDefault()}}},ee=te,ae=a("b0af"),ne=a("4bd4"),ie=a("2fa4"),re=a("71d9"),se=a("2a7f"),oe=Object(h["a"])(ee,Qt,Zt,!1,null,null,null),le=oe.exports;v()(oe,{VBtn:U["a"],VCard:ae["a"],VCardActions:g["a"],VCardText:g["b"],VCol:w["a"],VForm:ne["a"],VRow:k["a"],VSpacer:ie["a"],VTextField:H["a"],VToolbar:re["a"],VToolbarTitle:se["a"]});var ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-feed"}},[a("v-row",{staticClass:"full-height",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Mail",name:"email",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Wachtwoord",name:"password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.register}},[t._v("Login")])],1)],1)],1)],1)],1)},ue=[],de={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;l.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){alert("Account created for ${user.email}"),e.$router.go({path:e.$router.path})}),(function(t){alert(t.message)})),t.preventDefault()}}},me=de,fe=Object(h["a"])(me,ce,ue,!1,null,null,null),he=fe.exports;v()(fe,{VBtn:U["a"],VCard:ae["a"],VCardActions:g["a"],VCardText:g["b"],VCol:w["a"],VForm:ne["a"],VRow:k["a"],VSpacer:ie["a"],VTextField:H["a"],VToolbar:re["a"],VToolbarTitle:se["a"]}),n["a"].use(i["a"]);var pe=new i["a"]({routes:[{path:"/",name:"news-feed",component:C},{path:"/news",name:"news-dashboard",component:Ut,meta:{requiresAuth:!0}},{path:"/new-news",name:"new-news",component:It,meta:{requiresAuth:!0}},{path:"/news/:news_id",name:"view-news",component:Kt},{path:"/news/edit/:news_id",name:"edit-news",component:Xt,meta:{requiresAuth:!0}},{path:"/methode-1",name:"methode-een",component:O,meta:{requiresGuest:!0}},{path:"/methode-2",name:"methode-twee",component:E,meta:{requiresGuest:!0}},{path:"/methode-3",name:"methode-drie",component:W},{path:"/methode-4",name:"methode-vier",component:z,meta:{requiresGuest:!0}},{path:"/methode-4-results",name:"view-methode-vier",component:Nt},{path:"/methode-5",name:"methode-vijf",component:J["default"]},{path:"/login",name:"login",component:le,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:he,meta:{requiresGuest:!0}}]});pe.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?l.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some((function(t){return t.meta.requiresGuest}))&&l.a.auth().currentUser?a({path:"/news",query:{redirect:t.fullPath}}):a()}));var ve=pe,ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"myFont"},[a("Navbar",{key:t.$route.fullPath}),a("v-container",[a("router-view",{staticClass:"px-4"})],1),a("BottomBar",{key:t.$route.fullPath}),a("v-content",[a("v-snackbar",{staticClass:"snack",attrs:{timeout:t.timeout,bottom:"",left:""},model:{value:t.snackWithButtons,callback:function(e){t.snackWithButtons=e},expression:"snackWithButtons"}},[t._v(" Jeh "),a("v-spacer"),a("v-btn",{attrs:{dark:"",color:"#00f500"},nativeOn:{click:function(e){return t.refreshApp(e)}}},[t._v(" "+t._s(t.snackBtnText)+" ")]),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.snackWithButtons=!1}}},[a("v-icon",[t._v("close")])],1)],1)],1)],1)},we=[],be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"header-home",attrs:{relative:"",color:"#50b5f2"}},[a("v-btn",{attrs:{color:"white",dark:"",icon:"",medium:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",{attrs:{white:"",light:""}},[t._v("mdi-menu")])],1),a("v-spacer"),a("v-toolbar-title",[t._v("Nieuwslandschap")]),a("v-spacer"),t.isLoggedIn?a("v-btn",{staticClass:"white primary",on:{click:t.logout}},[t._v(" Logout ")]):t._e(),t.isLoggedIn?t._e():a("v-btn",{staticClass:"no-hover",attrs:{icon:"",medium:"",color:"white",dark:"",to:"/login"}},[a("v-icon",{attrs:{white:"",light:""}},[t._v("mdi-account-circle")])],1)],1),a("v-navigation-drawer",{staticClass:"primary white",attrs:{absolute:"",temporary:"",dark:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("div",{staticClass:"pa-2"},[t.isLoggedIn?a("v-btn",{staticClass:"dark",attrs:{block:""},on:{click:t.logout}},[t._v(" Logout ")]):t._e(),t.isLoggedIn?t._e():a("v-btn",{staticClass:"dark",attrs:{block:"",to:"/login"}},[t._v(" Login ")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Nieuwslandschap")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.key,attrs:{to:e.link,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},ke=[],_e={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1,drawer:!1,group:null,items:[{icon:"mdi-ab-testing",title:"Methode 3 Resultaten",link:"/methode-3",key:"methode3"},{icon:"mdi-chart-scatter-plot",title:"Methode 4 Resultaten",link:"/methode-4-results",key:"methode4"}]}},created:function(){l.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=l.a.auth().currentUser.email)},methods:{logout:function(){var t=this;l.a.auth().signOut().then((function(){t.$router.go({path:t.$router.path})}))}},watch:{group:function(){this.drawer=!1}}},Ce=_e,xe=(a("6f88"),a("40dc")),Ve=a("ce7e"),ye=a("132d"),Ne=a("8860"),je=a("da13"),Oe=a("5d23"),Fe=a("34c3"),Re=a("f774"),Te=Object(h["a"])(Ce,be,ke,!1,null,"c70bf29a",null),Le=Te.exports;v()(Te,{VAppBar:xe["a"],VBtn:U["a"],VDivider:Ve["a"],VIcon:ye["a"],VList:Ne["a"],VListItem:je["a"],VListItemContent:Oe["a"],VListItemIcon:Fe["a"],VListItemTitle:Oe["b"],VNavigationDrawer:Re["a"],VSpacer:ie["a"],VToolbarTitle:se["a"]});var Ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-navigation",{attrs:{dark:"",fixed:"",height:"80px"}},[t.isLoggedIn?a("LoggedInBar"):t._e(),t.isLoggedIn?t._e():a("GuestBar")],1)},Ee=[],Be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"logged-in"},t._l(t.menuItems,(function(e){return a("v-btn",{key:e.title,staticClass:"flex-column",attrs:{height:"70px",router:"",to:e.link}},[a("span",[t._v(t._s(e.title))]),a("v-icon",[t._v(t._s(e.icon))])],1)})),1)},$e=[],Se={data:function(){return{menuItems:[{icon:"mdi-home",title:"Nieuws",link:"/"},{icon:"mdi-newspaper-plus",title:"Nieuw Bericht",link:"/new-news"},{icon:"mdi-email-newsletter",title:"Bewerk Bericht",link:"/news"}]}}},Ae=Se,Ue=Object(h["a"])(Ae,Be,$e,!1,null,null,null),qe=Ue.exports;v()(Ue,{VBtn:U["a"],VIcon:ye["a"],VRow:k["a"]});var We=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",t._l(t.menuItems,(function(e){return a("v-btn",{key:e.title,staticClass:"flex-column",attrs:{height:"70px",router:"",to:e.link}},[a("span",[t._v(t._s(e.title))]),a("v-icon",[t._v(t._s(e.icon))])],1)})),1)},Pe=[],De={data:function(){return{menuItems:[{icon:"mdi-home",title:"Nieuws",link:"/"},{icon:"mdi-newspaper-variant-multiple",title:"Methode 2",link:"/methode-2"},{icon:"mdi-chart-scatter-plot",title:"Methode 3",link:"/methode-3"},{icon:"mdi-ab-testing",title:"Methode 4",link:"/methode-4"}]}}},Me=De,Ke=Object(h["a"])(Me,We,Pe,!1,null,null,null),Ge=Ke.exports;v()(Ke,{VBtn:U["a"],VIcon:ye["a"],VRow:k["a"]});var He={name:"bottombar",components:{LoggedInBar:qe,GuestBar:Ge},data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){l.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=l.a.auth().currentUser.email)}},Ye=He,ze=a("b81c"),Je=Object(h["a"])(Ye,Ie,Ee,!1,null,null,null),Xe=Je.exports;v()(Je,{VBottomNavigation:ze["a"]});var Qe={name:"App",components:{Navbar:Le,BottomBar:Xe},data:function(){return{refreshing:!1,registration:null,snackBtnText:"",snackWithBtnText:"",snackWithButtons:!0,timeout:0}},created:function(){var t=this;document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){t.refreshing||(t.refreshing=!0,window.location.reload())}))},methods:{showRefreshUI:function(t){this.registration=t.detail,this.snackBtnText="Refresh",this.snackWithBtnText="New version available!",this.snackWithButtons=!0},refreshApp:function(){this.snackWithButtons=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage("skipWaiting")}}},Ze=Qe,ta=(a("de21"),a("7496")),ea=a("a523"),aa=a("a75b"),na=a("2db4"),ia=Object(h["a"])(Ze,ge,we,!1,null,"b2ddb866",null),ra=ia.exports;v()(ia,{VApp:ta["a"],VBtn:U["a"],VContainer:ea["a"],VContent:aa["a"],VIcon:ye["a"],VSnackbar:na["a"],VSpacer:ie["a"]});var sa=a("f309");n["a"].use(sa["a"]);var oa,la=new sa["a"]({theme:{themes:{light:{primary:"#50b5f2",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),ca=(a("4795"),a("9483"));Object(ca["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(t){setInterval((function(){t.update()}),36e5)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){console.log("UpdateFound"),document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,l.a.auth().onAuthStateChanged((function(t){oa||(oa=new n["a"]({vuetify:la,router:ve,render:function(t){return t(ra)}}).$mount("#app"))}))},"5a0e":function(t,e,a){"use strict";var n=a("f749"),i=a.n(n);i.a},"5be2":function(t,e,a){},6723:function(t,e,a){"use strict";var n=a("0574"),i=a.n(n);e["default"]=i.a},"6f88":function(t,e,a){"use strict";var n=a("a603"),i=a.n(n);i.a},7584:function(t,e,a){"use strict";var n=a("2ef7"),i=a.n(n);i.a},"768b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"methode-vijf"}},[t._v(" Hello ")])},i=[]},"93d7":function(t,e,a){},a603:function(t,e,a){},d4cb:function(t,e,a){"use strict";var n=a("14b6"),i=a.n(n);i.a},d4d6:function(t,e,a){"use strict";var n=a("93d7"),i=a.n(n);i.a},de21:function(t,e,a){"use strict";var n=a("5be2"),i=a.n(n);i.a},ec7f:function(t,e,a){"use strict";var n=a("3c2c"),i=a.n(n);i.a},f749:function(t,e,a){}});
//# sourceMappingURL=app.f7bbc3c4.js.map