(function(t){function e(e){for(var r,s,i=e[0],o=e[1],l=e[2],f=0,u=[];f<i.length;f++)s=i[f],c[s]&&u.push(c[s][0]),c[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var o=a[i];0!==c[o]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},c={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),c=a.n(r);c.a},"3e07":function(t,e,a){t.exports=a.p+"img/feature-background.0c61e1d8.png"},"3ecb":function(t,e,a){t.exports=a.p+"img/tech-feature-3.fa497e36.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-landing-page")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[t.loading?r("div",{},[r("img",{staticClass:"loader-gif",attrs:{src:a("7cb9"),alt:""}})]):r("div",{},[r("div",{staticClass:"w3-row section first"},[r("div",{staticClass:"w3-row part top-banner"}),r("div",{staticClass:"w3-row center"},[r("div",{staticClass:"w3-col s12 m6 logo-col"},[r("div",{staticClass:"logo-container relative"},[t._m(0),r("div",{staticClass:"logo-txt-div"},[t._v("\n              "+t._s(t.projectName)+"\n            ")]),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49e695af0109",target:"_blank"}})])]),r("div",{staticClass:"w3-col s12 m6 top-sentence-col gray relative"},[r("div",{staticClass:"w3-row",domProps:{innerHTML:t._s(t.topSentence)}}),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac109cd2-6939-1811-8169-399c63db0062",target:"_blank"}})])]),r("div",{staticClass:"w3-row part bottom-banner"})]),r("div",{staticClass:"w3-row section second light-background"},[r("div",{staticClass:"w3-row top-subsentence relative"},[t._v("\n        "+t._s(t.topSubsentence)+"\n        "),r("a",{staticClass:"prtcl_-icon prtcl_-icon-grey",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac109cd2-6939-1811-8169-399dca610084",target:"_blank"}})]),r("div",{staticClass:"w3-row feature-row"},[r("div",{staticClass:"w3-row features-title relative"},[t._v("\n          "+t._s(t.featuresTitle)+"\n          "),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac109cd2-6939-1811-8169-39a0548e00a6",target:"_blank"}})]),r("div",{staticClass:"w3-row features-container"},[t._m(1),r("div",{staticClass:"feature-vert-container feature-text-container"},[r("div",{staticClass:"feature-text relative"},[t._v("\n              "+t._s(t.keyFeatures[t.keyFeatureIx])+"\n              "),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white features-icon",attrs:{href:t.keyFeaturesUrls[t.keyFeatureIx],target:"_blank"}})])]),r("div",{staticClass:"feature-vert-container feature-right-container",on:{click:function(e){return t.swipeLeft()}}},[r("img",{attrs:{src:a("c5d4"),alt:""}})]),r("div",{staticClass:"feature-vert-container feature-left-container",on:{click:function(e){return t.swipeRight()}}},[t._m(2)])])])]),r("div",{staticClass:"w3-row section third"},[t._m(3),r("div",{staticClass:"spec-feature-text relative"},[r("div",{domProps:{innerHTML:t._s(t.techFeatures[0])}}),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39a2cb1500e9",target:"_blank"}})])]),r("div",{staticClass:"w3-row section third light-background"},[t._m(4),r("div",{staticClass:"spec-feature-text relative"},[r("div",{domProps:{innerHTML:t._s(t.techFeatures[1])}}),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39a6516d010b",target:"_blank"}})])]),r("div",{staticClass:"w3-row section third"},[t._m(5),r("div",{staticClass:"spec-feature-text relative"},[r("div",{domProps:{innerHTML:t._s(t.techFeatures[2])}}),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39aef1b3016e",target:"_blank"}})])]),r("div",{staticClass:"w3-row section third light-background"},[t._m(6),r("div",{staticClass:"spec-feature-text relative"},[r("div",{domProps:{innerHTML:t._s(t.techFeatures[3])}}),r("a",{staticClass:"prtcl_-icon prtcl_-icon-white",attrs:{href:"https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39b9e46401d1",target:"_blank"}})])]),t._m(7)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo-img-div"},[r("img",{attrs:{src:a("cf05"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature-background"},[r("img",{attrs:{src:a("3e07"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arrow-row"},[r("img",{attrs:{src:a("c5d4"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spec-feature-graphic"},[r("img",{attrs:{src:a("a5db"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spec-feature-graphic"},[r("img",{attrs:{src:a("b9f0"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spec-feature-graphic"},[r("img",{attrs:{src:a("3ecb"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spec-feature-graphic"},[r("img",{attrs:{src:a("d7d4"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-row section contact"},[r("div",{staticClass:"w3-row text-div"},[t._v("\n        The underscore protocol is an initiative of\n      ")]),r("div",{staticClass:"w3-row"},[r("a",{attrs:{href:"http://www.collectiveone.org"}},[r("img",{attrs:{src:a("d929"),alt:""}})])]),r("div",{staticClass:"w3-row learn-more"},[r("a",{attrs:{href:"https://goo.gl/forms/gyIeT8LxnH0tVbFw2"}},[t._v("Learn more!")])])])}],o=(a("7514"),{name:"LandingPage",props:{},data:function(){return{loading:!0,projectName:"",topSentence:"",topSubsentence:"",featuresTitle:"",keyFeatures:[],keyFeatureIx:1,techFeatures:[],keyFeaturesUrls:[]}},methods:{swipeLeft:function(){this.keyFeatureIx=this.keyFeatureIx+1,this.keyFeatureIx>=this.keyFeatures.length&&(this.keyFeatureIx=0)},swipeRight:function(){this.keyFeatureIx=this.keyFeatureIx-1,this.keyFeatureIx<0&&(this.keyFeatureIx=this.keyFeatureIx=this.keyFeatures.length-1)},updateContent:function(){var t=this;this.loading=!0,this.axios.get("http://www.collectiveone.org/1/model/section/ac109cd2-6939-1811-8169-399a03130000",{params:{levels:2}}).then(function(e){t.loading=!1;var a=e.data.data.subsectionsCommon,r=a.find(function(t){return"Top Section"===t.title});t.projectName=r.cardsWrappersCommon.find(function(t){return"Name"===t.card.title}).card.text,t.topSentence=r.cardsWrappersCommon.find(function(t){return"Static sentence"===t.card.title}).card.text,t.topSubsentence=r.cardsWrappersCommon.find(function(t){return"Static subsentence"===t.card.title}).card.text,t.featuresTitle=r.cardsWrappersCommon.find(function(t){return"Switching animation title"===t.card.title}).card.text,t.keyFeatures=[r.cardsWrappersCommon.find(function(t){return"Key Feature 1"===t.card.title}).card.text,r.cardsWrappersCommon.find(function(t){return"Key Feature 2"===t.card.title}).card.text,r.cardsWrappersCommon.find(function(t){return"Key Feature 3"===t.card.title}).card.text,r.cardsWrappersCommon.find(function(t){return"Key Feature 4"===t.card.title}).card.text],t.keyFeaturesUrls=["https://www.collectiveone.org/#/app/inits/ac12cace-66f9-1475-8166-fcda2a0e0001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce11730001","https://www.collectiveone.org/#/app/inits/ac12cace-66f9-1475-8166-fcda2a0e0001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce378b0023","https://www.collectiveone.org/#/app/inits/ac12cace-66f9-1475-8166-fcda2a0e0001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce56f90045","https://www.collectiveone.org/#/app/inits/ac12cace-66f9-1475-8166-fcda2a0e0001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce76890067"];var c=a.find(function(t){return"Technical Section"===t.title});t.techFeatures=[c.cardsWrappersCommon.find(function(t){return"contexts"===t.card.title}).card.text,c.cardsWrappersCommon.find(function(t){return"perspectives"===t.card.title}).card.text,c.cardsWrappersCommon.find(function(t){return"relationships"===t.card.title}).card.text,c.cardsWrappersCommon.find(function(t){return"cocreation"===t.card.title}).card.text],document.title=t.projectName})}},created:function(){this.updateContent()}}),l=o,d=(a("fd19"),a("2877")),f=Object(d["a"])(l,s,i,!1,null,"7df3ff4f",null),u=f.exports,p={name:"app",components:{"app-landing-page":u}},g=p,w=(a("034f"),Object(d["a"])(g,c,n,!1,null,null,null)),m=w.exports,v=a("bc3a"),A=a.n(v),h=a("a7fe"),x=a.n(h);r["a"].config.productionTip=!1,r["a"].use(x.a,A.a),new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,a){},"7cb9":function(t,e,a){t.exports=a.p+"img/spinner-loop.23f2f1ea.gif"},"81df":function(t,e,a){},a5db:function(t,e,a){t.exports=a.p+"img/tech-feature-1.4efc708d.png"},b9f0:function(t,e,a){t.exports=a.p+"img/tech-feature-2.8e1ccca8.png"},c5d4:function(t,e){t.exports="data:image/png;base64,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"},cf05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABlCAYAAABZYl2IAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG4SURBVHic7d0xSgNBFIDh98yS0jZgLiABa3EPYOtF7LyHnZWnsBSsUuQKtjYSLG1SSDZjaWMxoLP+if9XDzMP/mVgm92cLfoSQjj66wH0xRggxgAxBogxQIwBYgwQY4AYA6SrWVQilhlx23qYQ5Ql5iXjrmZtVYws8fr2vHr42Vj/08nZxekwZNVarykQY4AYA8QYIMYAMQaIMUCMAWIMEGOAGAPEGCDGADEGiDFAjAFiDBBjgBgDxBggxgAxBogxQIwBYgwQY4AYA8QYIMYAMQaIMUCMAWIMEGOAGAPEGCDGADEGiDFAjAFiDBBjgBgDxBggxgAxBogxQIwBYgwQY4AYA8QYIMYAMQaIMUCqvmv7Gz4uj89zKHsfv+uGl3zcrJvs3WLT7+Qul5E5Heu8VrbbyU3EpsnXr/f+ST0kxgAxBogxQIwBYgwQY4AYA8QYIKO9gZeI68iYjHVeK6XkqtXeo8WYPr3fj3XWvvKaAjEGiDFAjAFiDBBjgBgDxBggxgAxBkjd/8Az5rNFf9V6mEO028Y86v5AHTlb9KXtOKrlNQViDBBjgBgDxBggxgAxBogxQIwB8glGBCjD2exV8gAAAABJRU5ErkJggg=="},d7d4:function(t,e,a){t.exports=a.p+"img/tech-feature-4.d0815660.png"},d929:function(t,e,a){t.exports=a.p+"img/c1-logo.c0e7e59e.png"},fd19:function(t,e,a){"use strict";var r=a("81df"),c=a.n(r);c.a}});
//# sourceMappingURL=app.5a56aee2.js.map