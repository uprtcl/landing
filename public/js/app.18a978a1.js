(function(e){function t(t){for(var r,c,u=t[0],i=t[1],p=t[2],f=0,l=[];f<u.length;f++)c=u[f],a[c]&&l.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(l.length)l.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-landing-page")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("_Protocol")]),n("h2",[e._v(e._s(e.topSentence))]),n("p",[e._v(e._s(e.topSentenceSubpar))]),n("h3",[e._v(e._s(e.featuresTitle))]),e._l(e.keyFeatures,function(t){return n("p",[e._v(e._s(t))])})],2)},u=[],i=(n("7514"),{name:"LandingPage",props:{},data:function(){return{topSentence:"",topSentenceSubpar:"",keyFeatures:[]}},methods:{updateContent:function(){var e=this;this.axios.get("http://www.collectiveone.org/1/model/section/ac109cd2-6939-1811-8169-399a03130000",{params:{levels:2}}).then(function(t){var n=t.data.data.subsectionsCommon,r=n.find(function(e){return"Top Section"===e.title});e.topSentence=r.cardsWrappersCommon.find(function(e){return"Static sentence"===e.card.title}).card.text,e.topSentenceSubpar=r.cardsWrappersCommon.find(function(e){return"Static sub-sentence"===e.card.title}).card.text,e.featuresTitle=r.cardsWrappersCommon.find(function(e){return"Switching animation title"===e.card.title}).card.text,e.keyFeatures=[r.cardsWrappersCommon.find(function(e){return"Key Feature 1"===e.card.title}).card.text,r.cardsWrappersCommon.find(function(e){return"Key Feature 2"===e.card.title}).card.text,r.cardsWrappersCommon.find(function(e){return"Key Feature 3"===e.card.title}).card.text,r.cardsWrappersCommon.find(function(e){return"Key Feature 4"===e.card.title}).card.text]})}},created:function(){this.updateContent()}}),p=i,s=(n("a1b6"),n("2877")),f=Object(s["a"])(p,c,u,!1,null,"da42f60c",null),l=f.exports,d={name:"app",components:{"app-landing-page":l}},m=d,v=(n("034f"),Object(s["a"])(m,a,o,!1,null,null,null)),b=v.exports,h=n("bc3a"),y=n.n(h),g=n("a7fe"),_=n.n(g);r["a"].config.productionTip=!1,r["a"].use(_.a,y.a),new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,n){},"870b":function(e,t,n){},a1b6:function(e,t,n){"use strict";var r=n("870b"),a=n.n(r);a.a}});
//# sourceMappingURL=app.18a978a1.js.map