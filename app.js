(function(e){function s(s){for(var a,i,r=s[0],l=s[1],d=s[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(s);while(p.length)p.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,s=0;s<o.length;s++){for(var t=o[s],a=!0,r=1;r<t.length;r++){var l=t[r];0!==n[l]&&(a=!1)}a&&(o.splice(s--,1),e=i(i.s=t[0]))}return e}var a={},n={app:0},o=[];function i(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)i.d(t,a,function(s){return e[s]}.bind(null,a));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var d=0;d<r.length;d++)s(r[d]);var c=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},4015:function(e,s,t){},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var s=o(e);return t(s)}function o(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);var a=t("2b0e"),n=function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"app"}},[s("p",[s("a",{attrs:{href:this.signin}},[s("button",{},[e._v("signin")])]),e._v(" "),s("a",{attrs:{href:this.login}},[s("button",{},[e._v("login")])])]),"login"===e.id?s("div",[s("form",{on:{submit:function(s){return s.preventDefault(),e.lsubmit.apply(null,arguments)}}},[s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.handle,expression:"handle"}],attrs:{placeholder:"user"},domProps:{value:e.handle},on:{input:function(s){s.target.composing||(e.handle=s.target.value)}}})]),s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),s("button",{attrs:{type:"lsubmit"}},[e._v("send")])])]):e._e(),null!==e.login_body?s("div",[s("p",[e._v(e._s(e.id=e.login_body.data.handle.split(".",1)[0]))]),s("p",[e._v(e._s(this.name="@"+this.id+".bsky.social"))]),null!==e.login_profile?s("div",{staticClass:"bluesky-avatar"},[s("p",[e._v("follows "+e._s(e.login_profile.data.followsCount)+" / followers "+e._s(e.login_profile.data.followersCount))]),s("p",[s("img",{attrs:{src:e.login_profile.data.avatar}})])]):e._e()]):e._e(),null!==e.login_body?s("div",[e._v(" "+e._s(e.timeline())+" "),s("form",{on:{submit:function(s){return s.preventDefault(),e.psubmit.apply(null,arguments)}}},[s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{placeholder:"text"},domProps:{value:e.text},on:{input:function(s){s.target.composing||(e.text=s.target.value)}}})]),s("button",{attrs:{type:"psubmit"}},[e._v("post")])]),null!==e.login_post?s("div",[e._v(" "+e._s(e.login_post.data)+" ")]):e._e(),s("form",{on:{submit:function(s){return s.preventDefault(),e.profile.apply(null,arguments)}}},[s("button",{attrs:{type:"profile"}},[e._v("profile")])]),s("form",{on:{submit:function(s){return s.preventDefault(),e.tl.apply(null,arguments)}}},[s("button",{attrs:{type:"tl"}},[e._v("timeline")])])]):e._e(),null!==e.login_tl?s("div",e._l(e.login_tl.data.feed,(function(t){return s("li",{staticClass:"bluesky-record"},[s("p",{staticClass:"tl-avatar"},[s("img",{attrs:{src:t.post.author.avatar}})]),s("p",[s("span",{staticClass:"name"},[e._v("@"+e._s(t.post.author.handle))])]),s("p",[s("span",{staticClass:"text"},[e._v(e._s(t.post.record.text))])]),s("p",[s("span",{staticClass:"time"},[s("a",{attrs:{href:t.post.uri}},[e._v(e._s(t.post.record.createdAt))])])])])})),0):e._e(),"signin"===e.id?s("div",[s("form",{on:{submit:function(s){return s.preventDefault(),e.ssubmit.apply(null,arguments)}}},[s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.handle,expression:"handle"}],attrs:{placeholder:"handle"},domProps:{value:e.handle},on:{input:function(s){s.target.composing||(e.handle=s.target.value)}}})]),s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"email"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})]),s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{placeholder:"code"},domProps:{value:e.code},on:{input:function(s){s.target.composing||(e.code=s.target.value)}}})]),s("button",{attrs:{type:"ssubmit"}},[e._v("send")])]),e._v(" "+e._s(e.signin_body)+" ")]):e._e(),"syui"===e.id?s("div",{staticClass:"bluesky-avatar"},[s("img",{attrs:{src:e.user.data.avatar}})]):e._e(),"syui"===e.id?s("div",{staticClass:"bluesky-user"},[s("p",[e._v(e._s(e.user.data.did))])]):e._e(),"login"!==e.id?s("div",["signin"!==e.id?s("div",["login"!==e.loc?s("div",[s("form",{on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],attrs:{placeholder:"id",value:"id"},domProps:{value:e.id},on:{input:function(s){s.target.composing||(e.id=s.target.value)}}}),s("input",{attrs:{type:"submit"}})])]):e._e()]):e._e()]):e._e(),"login"!==e.id?s("div",["signin"!==e.id?s("div",[s("p",[s("a",{attrs:{href:this.bskyurl}},[e._v(e._s(e.name))])])]):e._e()]):e._e(),e.avatar?s("div",{staticClass:"bluesky-avatar"},[s("img",{attrs:{src:e.avatar}})]):e._e(),e.record&&e.record.data.records[0].uri!==e.uri?s("div",{staticClass:"bluesky-record"},e._l(e.record.data.records,(function(t){return s("li",[s("p",[s("span",{staticClass:"name"},[e._v(e._s(e.name))])]),s("p",[s("span",{staticClass:"text"},[e._v(e._s(t.value.text))])]),s("p",[s("span",{staticClass:"time"},[s("a",{attrs:{href:t.uri}},[e._v(e._s(t.value.createdAt))])])])])})),0):e._e()])},o=[],i=t("bc3a"),r=t.n(i),l=t("c1df"),d=t.n(l);var c=window.location.pathname.split("/").slice(-1)[0],u=window.location.hash.split("/").slice(-1)[0];if(0==c.length||"bsky"===c)var p="syui";else p=c;if("#github"===u)var b="https://github.com/"+p+".png";var f={data(){return{uri:"did:plc:uqzpqmrjnptsxezjx4xuh2mn",name:"@"+p+".bsky.social",id:p,bskyurl:"https://bsky.app/profile/"+p+".bsky.social",user:null,record:null,appurl:c,login:"/login",signin:"/signin",avatar:b,handle:null,password:null,email:null,code:null,signin_body:null,login_body:null,login_post:null,time:d.a.utc().format(),text:null,did:null,token:null,json:null,parmas:null,uid:null,urecord:null,loc:window.location.pathname.split("/").slice(-1)[0],login_profile:null,login_tl:null}},mounted(){r.a.get("/json/syui.bsky.social.json").then(e=>this.user=e),r.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+".bsky.social&collection=app.bsky.feed.post").then(e=>this.record=e)},methods:{moment:function(e){return d.a.unix(e).format("HH:mm DD/MM/YYYY")},submit(){r.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+".bsky.social&collection=app.bsky.feed.post").then(e=>this.record=e),this.name="@"+this.id+".bsky.social",this.bskyurl="https://bsky.app/profile/"+this.id+".bsky.social",null!==this.uri?this.uri=this.record.data.records[0].uri:this.uri=null},ssubmit(){r.a.post("https://bsky.social/xrpc/com.atproto.account.create",{handle:this.handle+".bsky.social",password:this.password,email:this.email,inviteCode:this.code}).then(e=>this.signin_body=e)},lsubmit(){r.a.post("https://bsky.social/xrpc/com.atproto.session.create",{handle:this.handle+".bsky.social",password:this.password}).then(e=>this.login_body=e)},profile(){this.url="https://bsky.social/xrpc/app.bsky.actor.getProfile?actor="+this.login_body.data.handle,this.token="Bearer "+this.login_body.data.accessJwt,r.a.get(this.url,{headers:{Authorization:this.token}}).then(e=>this.login_profile=e)},psubmit(){this.json={did:this.login_body.data.did,collection:"app.bsky.feed.post",record:{text:this.text,createdAt:this.time,$type:"app.bsky.feed.post"}},this.token="Bearer "+this.login_body.data.accessJwt,r.a.post("https://bsky.social/xrpc/com.atproto.repo.createRecord",this.json,{headers:{Authorization:this.token}}).then(e=>this.login_post=e)},timeline(){r.a.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user="+this.id+".bsky.social&collection=app.bsky.feed.post").then(e=>this.record=e)},tl(){this.url="https://bsky.social/xrpc/app.bsky.feed.getTimeline",this.token="Bearer "+this.login_body.data.accessJwt,r.a.get(this.url,{headers:{Authorization:this.token}}).then(e=>this.login_tl=e)}}},m=f,h=(t("b9f1"),t("2877")),j=Object(h["a"])(m,n,o,!1,null,null,null),v=j.exports;a["a"].config.productionTip=!1,new a["a"]({render:e=>e(v)}).$mount("#app")},b9f1:function(e,s,t){"use strict";t("4015")}});
//# sourceMappingURL=app.js.map