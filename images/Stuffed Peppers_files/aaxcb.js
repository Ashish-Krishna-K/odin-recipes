   try{
window.aax = window.aax|| {};
window.aax.isLoaded = true;
var aaxSettings = {"pub":"AAXV53D7Q","isiframe":false};
'use strict';(function(){function a(a){return typeof a==="function"}function b(b,d,c){if(a(d)){c=d;d=[]}if(b===void 0||b===""||b===null||Object.prototype.toString.call(d)!=="[object Array]"||!a(c))return false;l[b]=l[b]||{CF:d,callback:c}}function d(b,h){var c=[],f;for(f in b)if(b.hasOwnProperty(f)){var q=b[f];if(typeof q==="object"||typeof q==="undefined")c.push(q);else{k[q]===void 0&&(k[q]=d(l[q].CF,l[q].callback));c.push(k[q])}}return a(h)?h.apply(this,c):c}var k={},l={};var h=typeof global!==
"undefined"&&typeof module==="object"?global:window;h.__ar=h.__ar||d;h.__ad=h.__ad||b})();
'use strict';__ad("_",["pqus","uhv",window,document,{}],function(a,b,d,k){function l(a,b,c){b="evt_"+(b||"gbl");ba[b]=ba[b]||{};ba[b][a]=ba[b][a]||[];ba[b][a].push(c)}function h(a){if(m(a)){var b="evt_"+a;m(ba[b])&&!q(ba[b])&&ca(ba[b],function(a,c){ba[b][c]=[]})}}function f(b,c,d,e){e=e||(typeof d==="object"?d:{});d=typeof d==="boolean"?d:false;var f="evt_"+(c||"gbl");if(ba[f]!==void 0){var h=ba[f][b]||[],k={src:c};ba.evt_gbl&&ba.evt_gbl.gblEvt&&a.da(ba.evt_gbl.gblEvt[0],k,e);var m=0;for(c=h.length;m<
c;m++)g(h[m])&&a.da(h[m],k,e);!d&&h.length>0&&(ba[f][b]=[])}}function n(a){try{a=a.frameElement}catch(va){return true}return false}function c(a,b){return m(a)?m(b)&&a.indexOf(b)!==-1:false}function r(a,b){return e(a)?W(a,function(a){if(a===b)return true})||false:false}function q(a){for(var b in a)if(a.hasOwnProperty(b))return false;return true}function m(a){switch(typeof a){case "string":return a!==void 0&&a!==""&&a!==null;case "object":return a!==null;case "number":case "boolean":return true;default:return false}}
function g(a){return typeof a==="function"}function e(a){return Object.prototype.toString.call(a)==="[object Array]"}function p(a){return m(a)?encodeURIComponent(a):""}function t(a){if(!m(a))return"";try{return decodeURIComponent(a)}catch(va){return a}}function u(a){if(!m(a))return{};var b={};var c=a.indexOf("?");if(c===-1)return b;a=a.substring(c+1).split("&");for(c=a.length;c--;){var d=a[c].split("=");b[d[0]]=d[1]}return b}function v(a){this.url=a;this.map=u(this.url)}function x(){var a=false;try{typeof d.top===
"object"&&typeof d==="object"&&(a=d.top!=d)}catch(va){a=true}return a}function w(a,b){a=Math.floor(Math.random()*(b-a+1)+a);a>b&&(a=b);return a}function y(a,b,c){c=c||null;b=b||[];return function(){var d=b.slice(0);arguments.length>0&&Array.prototype.push.apply(d,Array.prototype.slice.call(arguments));return a.apply(c,d)}}function B(a){try{var b=z(a);return[b&&(b.document||b)||false,b,null]}catch(ua){return[false,null,"Access Denied"]}}function z(a){try{return a.contentWindow||a.contentDocument}catch(va){return null}}
function A(a){var b;a=a.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i);if(!a)return false;a[0]=0;for(b=1;b<5;b+=1){a[0]=a[0]+!!(a[b]||"").length;a[b]=parseInt(a[b],10)||0}a.push(256,256,256,256);a[4+a[0]]=a[4+a[0]]*Math.pow(256,4-a[0]);return a[1]>=a[5]||a[2]>=a[6]||a[3]>=a[7]||a[4]>=a[8]?false:a[1]*(a[0]===1||16777216)+a[2]*(a[0]<=2||65536)+a[3]*(a[0]<=3||256)+a[4]*1}function D(){return""+w(0,254)+
"."+w(0,254)+"."+w(0,254)+"."+w(0,254)}function J(a,b,c,d,e){c=c||S("@body:0");if(!c){Q("@body:0",100,y(J,[a,b,null,d,e]),false);return null}var f=(new F).set("marginWidth",0).set("marginHeight",0).set("scrolling","no").set("frameBorder",0).set("height",0).set("width",0).ko("display:none !important;").done();if(m(a))f.id=a;if(d)for(var h in d)f[h]=d[h];c.firstChild?c.insertBefore(f,c.firstChild):c.appendChild(f);b&&G(f,b);if(g(e))f.onload=e;return f}function G(b,c){if(b){var d=B(b),e;try{if(d[2]!==
null)throw d[2];if(e=d[0]){e.open();e.write(c);e.close()}}catch(La){d="javascript:var d=document.open();d.domain='"+k.domain+"';";b.src=d+"void(0);";try{var f=b.contentWindow.document;f.write(c);f.close()}catch(qa){b.src=d+'d.write("'+c.replace(/"/g,'\\"')+'");d.close();';a.aa(qa)}}}}function L(a,b,c){if(!m(a))return"";m(c)&&m(c.encode)&&c.encode===true&&(b=p(b));return"&"+a+"="+b}function H(){return/msie|rv:11\.0/.test(da.toLowerCase())}function N(a){a=a.split("&");var b=[];ca(a,function(a){a.indexOf("=")!==
-1&&(a!==""&&a.substring(0,18)!=="action_object_map="&&a.substring(0,16)!=="action_type_map="&&a.substring(0,15)!=="action_ref_map="&&a.substring(0,18)!=="action_action_map="&&a.substring(0,3)!=="fb_"&&a.substring(0,6)!=="fbclid"&&a.substring(0,5)!=="lcid="&&a.substring(0,13)!=="force_hbtest="&&a.substring(0,10)!=="mnet_test="&&a.substring(0,12)!=="force_hbprv="&&a.substring(0,2)!=="a="&&a.substring(0,6)!=="kwp_0"&&a.substring(0,4)!=="utm_"&&a.substring(0,5)!=="code="&&a.substring(0,4)!=="bcmt"&&
b.push(a))});return b.join("&")}function K(){if(c(da,"Trident")||c(da,"MSIE")){var a=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(da);if(m(a)&&m(a[1]))return parseFloat(a[1])}return-1}function C(a,b){var c=/interactive|complete|loaded/;k.attachEvent&&K()<=10&&(c=/complete|loaded/);if(c.test(k.readyState))a();else{b||I.W(d,"load",a);if(!b&&k.addEventListener)I.W(k,"DOMContentLoaded",a);else if((b=k.documentElement)&&b.doScroll)try{b.doScroll("left");a()}catch(wa){setTimeout(y(C,[a,true]),50)}}}function F(a){this.frame=
a?a.document.createElement("iframe"):k.createElement("iframe")}function S(a){try{var b=a.charAt(0),c=a.substr(1).split(":"),d=c[0],e=m(c[1])&&parseInt(c[1],10);switch(b){case "@":var f=k.getElementsByTagName(d);break;case "#":f=k.getElementById(d);break;case "$":f=k.getElementsByName(d);break;case ".":f=P(k,d);break;default:f=k.getElementById(a)}return e===false?f:f[e]}catch(qa){return null}}function Q(a,b,c,d){try{var e=S(a),f=Aa.mc().un();e||!d&&f?c.call(null,e||false):setTimeout(y(Q,[a,b,c,d]),
b)}catch(qa){setTimeout(y(Q,[a,b,c,d]),b)}}function P(a,b,c){if(g(k.getElementsByClassName))return a.getElementsByClassName(b);c=c||"*";b=new RegExp("(^|\\s)"+b+"(\\s|$)");a=a||k;c=c==="*"&&a.all?a.all:a.getElementsByTagName(c);a=[];var d=c.length,e;for(e=0;e<d;e++){var f=c[e];b.test(f.className)&&a.push(f)}return a}function T(){return m(da)&&/ip(hone|od|ad)|android|blackberry|kindle|symbian|wap|windows (ce|phone)|palm( os)|iemobile|nokia|mobile/i.test(da)}function aa(){if(c(da,"Gecko")&&!c(da,"Trident")&&
!c(da,"MSIE")||c(da,"webkit"))return true;if(c(da,"Trident")||c(da,"MSIE")){var a=K();if(a>=11)return true}return false}function K(){if(c(da,"Trident")||c(da,"MSIE")){var a=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(da);if(m(a)&&m(a[1]))return parseFloat(a[1])}return-1}function U(a){var b=a.toString(),c=b.indexOf(".");return c!==-1?parseFloat(b.substr(0,Math.min(c+3,b.length))).toFixed(2):parseFloat(a).toFixed(2)}function Y(a){return m(a)?!isFinite(a)||isNaN(a)?0:a:0}function Z(){return d.location.href.indexOf("aax_test=")!==
-1}function ia(a,b){if(b===null||typeof b!=="object"||!m(a))return b;ca(b,function(b,c){a[c]=ia(a[c],b)});return a}function ca(a,b){if(m(a)){var c=0,d=a.length;if(e(a))for(;c<d;c++)b.call(a[c],a[c],c,d);else for(c in a)a.hasOwnProperty(c)&&b.call(a[c],a[c],c,0)}}function W(a,b){if(m(a)){g(b)||(b=function(a,b){return!!a});var c=0,d=a.length;if(e(a))for(;c<d;c++){var f=b.call(a[c],a[c],c);if(m(f))return f}else for(c in a)if(a.hasOwnProperty(c)){f=b.call(a[c],a[c],c);if(m(f))return f}}}function E(a,
b){if(!m(a))return[];var c;g(b)||(b=function(a,b){return!!a});var d=0,f=a.length;if(e(a))for(c=[];d<f;d++)c.push(b.call(a[d],a[d],d));else{c={};for(d in a)a.hasOwnProperty(d)&&(c[d]=b.call(a[d],a[d],d))}return c}function M(a){return"CSS1Compat"==a.compatMode?a.documentElement:a.body}function X(a){if(m(a.innerHeight)&&m(a.innerWidth))return{width:a.innerWidth,height:a.innerHeight};var b=a.document,c=void 0,d=void 0;try{var e=M(b);if(!e){b.write('<div id="_mNTemp" style="display:none;"></div>');e=M(a.document);
var f=k.getElementById("_mNTemp");f.parentNode.removeChild(f)}if(e){c=e.clientWidth||void 0;d=e.clientHeight||void 0}}catch(qa){}return{width:c,height:d}}function ja(){return!!(d.JSON&&(d.JSON.parse&&typeof JSON.parse==="function")&&(d.JSON.stringify&&typeof JSON.stringify==="function"))}function O(){return(new Date).getTime()}function R(a,b,c){if(m(aaxSettings)&&!q(aaxSettings)&&m(aaxSettings.pub)&&aaxSettings.pub==="AAXBI2Y62"&&a.includes("https://htlb.casalemedia.com/cygnus")){a="";var d=0;if(c){a=
c.status;if(c=JSON.parse(c.response))d=c.id}d+="|"+w(1,5E5);na("https://l3.aaxads.com/log?___stu13p=1j1i1g49bxe3odqe1gncqvgbtbu1qf26wycb&lwbsh=AAX&oyo=1&flg=AAXBI2Y62&qdph="+b+"&vwdfn="+a+"|"+d)}}function ka(a,b){m(aaxSettings)&&!q(aaxSettings)&&m(aaxSettings.pub)&&aaxSettings.pub==="AAXBI2Y62"&&a.includes("https://htlb.casalemedia.com/cygnus")&&I.W(d,"unload",function(){d.aax.isexec[b]||R(a,"INDEX ADAPTER UNLOAD")})}function V(a,b,c){c=c||"0";for(a+="";a.length<b;)a+=c;return a}function fa(){try{var a=
k.cookie;return true}catch(va){return false}}function sa(a,b){a=parseInt(a);return!isFinite(a)||isNaN(a)?b:a}function xa(){return{TD:d.pageXOffset||d.scrollX,Lr:d.pageYOffset||d.scrollY}}function Ia(a){return a===null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||typeof a==="symbol"||typeof a==="undefined"}function la(a,b,c){la.count=la.count||0;la.threshold=la.threshold||c;setTimeout(function(){a.call(this);if(m(la.threshold)){la.count++;la.count<la.threshold&&la(a,b,c)}else la(a,
b,c)},b)}function Ha(a,b){ca(b,function(b,c){Ia(b)||e(b)||!a.hasOwnProperty(c)?a[c]=b:a[c]=Ha(a[c],b)});return a}function Ka(a){return W(a,function(a){if(a!==null&&typeof a==="object")return true})||false}function oa(a){if(!m(a))return a;var b=e(a)?[]:{};if(!Ka(a)){ca(a,function(a,c){b[c]=a});return b}ca(a,function(a,c){if(e(a)){var d=Ka(a)?oa(a):a.slice();b[c]=d}b[c]=a!==null&&typeof a==="object"?oa(a):a});return b}function Da(a){if(ja())return JSON.stringify(a);if(!m(a)||typeof a!=="object")return a===
null?a+"":a;var b="";ca(a,function(c,d){if(c!==void 0){typeof c==="object"&&(c=Da(c));b=e(a)?b+c:b+(d+":"+c);b+=","}});b=b.slice(0,b.length-1);return e(a)?"["+b+"]":"{"+b+"}"}function na(a){(new Image).src=a}function pa(){try{if("localStorage"in d&&d.localStorage!==null){d.localStorage.setItem("mntest","mntest");d.localStorage.removeItem("mntest");return ja()}}catch(ea){}return false}function ya(a,b){var c=0;E(a,function(a){b&&a[b]&&(c+=a[b])});return c}function ha(a){var b=S("@iframe");b=W(b,function(b){if(b.contentWindow===
a)return b.id});return S("#"+b)}var ba={},da=navigator.userAgent,za=Math.random(),I={W:function(a,b,c){a.addEventListener?a.addEventListener(b,c,false):a.attachEvent&&a.attachEvent("on"+b,c)},Lj:function(a,b,c){a.removeEventListener?a.removeEventListener(b,c):a.detachEvent&&a.detachEvent("on"+b,c)}};v.prototype.MH=function(a){return(a=this.map[a])&&t(a)||""};var Aa=function(){function b(){function b(){for(d=true;e.length>0;){var a=e.shift();a.call(null)}e=[]}function c(){a.da(b)}var e=[];this.pd=
function(a){e.push(a);e.length!==1||d?d&&c():C(c)};this.un=function(){return d}}var c=null,d=false;return{mc:function(){c===null&&(c=new b);return c}}}();F.prototype.set=function(a,b){this.frame[a]=b;return this};F.prototype.ko=function(a){this.frame.style.cssText=a;return this};F.prototype.done=function(){return this.frame};return{Kd:function ua(a){if(!fa())return null;var b=k.cookie.indexOf(a+"="),c=b+a.length+1;if(!b&&a!==k.cookie.substring(0,a.length)||b===-1)return null;a=k.cookie.indexOf(";",
c);if(a===-1)a=k.cookie.length;return unescape(k.cookie.substring(c,a))},Re:function Ja(a,b,c,d,e,f,g){if(fa()){var h=new Date;h.setTime(h.getTime());c&&(c*=864E5);g&&(c=g*6E4);g=new Date(h.getTime()+c);k.cookie=a+"="+escape(b)+(c?";expires="+g.toGMTString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")}},lo:V,O:p,dd:t,uw:function ma(a){return t(a)!==a},PM:function La(a){var b=da.toLowerCase();return c(b,a)},ZP:function qa(a){var b=a||"0123456789abcdefghijklmnopqrstuvwxyz";a=a.length;
for(b=b.split("");a;){var c=Math.floor(Math.random()*a);a-=1;var d=b[a];b[a]=b[c];b[c]=d}return b.join("")},jd:function Ma(a,b){if(!m(a)&&m(b))return null;return(a=(new RegExp("[?&]"+b+"=([^&#]*)","i")).exec(a))?a[1]:null},Gc:function Ma(a){a=t(a);return(a=a.match(/^http(?:s)?:\/\/([^/]+)/im))?a[1].toString():""},P:function Ma(){return m(d.location.href)?d.location.href:""},Ah:function Ga(a){return typeof a==="string"},ow:function Xa(a){return typeof a==="boolean"},K:function Sa(a){return m(a)},Ic:x(),
Sja:x,ua:w,gv:function Na(a,b,c){c=Math.pow(10,c||2);return w(a*c,b*c)/c},GH:function db(){var a=new Date;a=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()));var b=new Date(Date.UTC(a.getUTCFullYear(),0,1));a.setUTCDate(a.getUTCDate()+4-(a.getUTCDay()||7));return Math.ceil(((a-b)/864E5+1)/7)},Rm:u,NA:v,YE:function Na(a){return m(a)?a.search("^(http(s)?%253A%252F%252F)")!==-1?t(a):a.search("^(http(s)?://)")!==-1?p(a):a:""},Z:I,i:g,isArray:e,Xj:d.navigator.userAgent.toLowerCase(),UL:aa(),
sa:function hb(a,b,c){var d={};if(m(c)&&m(c.encode))d.encode=c.encode;c="";var f,g=!!b,h=g?b:a,k;for(f in h)if(h.hasOwnProperty(f)){g&&(f=b[f]);if(k=m(a[f])){k=a[f];k=typeof k!=="object"||k.SM!==false}if(k)if(e(a[f]))for(var l in a[f])c+=L(f+"[]",a[f][l],d);else{k=typeof a[f]==="object"?a[f].value:a[f];c+=L(f,k,d)}}return c},Ca:L,Uja:function Fb(a){switch(typeof a){case "string":return m(a)&&(a==="1"||a==="true");case "number":return a!==0;case "boolean":return a;default:return false}},$:r,ve:B,Zg:z,
B:y,rk:F,Zc:Q,kc:P,hw:A,iP:function hb(a){var b=a.lastIndexOf(".");return b===-1?"":a.substr(0,b+1)+"0"},Rb:c,M:S,nf:function Ya(a,b){a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)},Ax:function Ya(a){a.parentNode.removeChild(a)},bf:G,dka:function ib(a,b){G(a,'<!DOCTYPE html><html><head><script type="text/javascript">function makeCall(){var scriptElement = document.createElement(\'script\'), tag = document.getElementsByTagName("script")[0], status = false; scriptElement.type = \'text/javascript\'; scriptElement.async = true; scriptElement.onload = scriptElement.onreadystatechange = function () { if (!status && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { status = true; }};scriptElement.src = "'+
b+'"; tag.parentNode.insertBefore(scriptElement, tag);}\x3c/script></head><body onload="makeCall()"></body></html>')},$ka:function Gb(a,b){if(a!==void 0&&b!==void 0&&a[b]!==void 0)return a[b]},Sc:Aa,Tja:T,sM:function ib(){return m(da)&&/mac_powerpc|macintosh|mac\\sos|darwin\/|imac\/|macbookpro[\d]/i.test(da)},Cd:J,Ch:function Ib(b,c,d,e){if(m(b)){b.substr(0,4)!=="http"&&d===true&&(b=("https:"===k.location.protocol?"https:":"http:")+b);d=k.createElement("script");var f=k.getElementsByTagName("script")[0],
g=false;d.type="text/javascript";d.async=true;if(e&&e.crossOrigin)d.crossOrigin="anonymous";if(c&&typeof c==="function")d.onload=d.onreadystatechange=function(){if(!(g||this.readyState&&this.readyState!=="loaded"&&this.readyState!=="complete")){g=true;a.da(c)}};d.src=b;f.parentNode.insertBefore(d,f)}},wj:function xc(a){if(m(a)){var b=k.createElement("script"),c=k.getElementsByTagName("script")[0];b.type="text/javascript";b.appendChild(k.createTextNode(a));c.parentNode.insertBefore(b,c)}},bN:function jb(a,
b,c){if(m(a)){a.substr(0,4)!=="http"&&(a=("https:"===k.location.protocol?"https:":"http:")+a);var d="aax_if"+c;l("prvreq",c,b);a=J(d,'<!DOCTYPE html><html><head><script type="text/javascript">function makeCall(){var scriptElement = document.createElement(\'script\'), tag = document.getElementsByTagName("script")[0], status = false; scriptElement.type = \'text/javascript\'; scriptElement.async = true; scriptElement.onload = scriptElement.onreadystatechange = function () { if (!status && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { status = true; window.parent.__ar([\'_\'], function(util){util.triggerEvent(\'prvreq\', "'+
c+'", false, window);});}};scriptElement.src = "'+a+'"; tag.parentNode.insertBefore(scriptElement, tag);}if(("performance" in window) && ("PerformanceObserver" in window)) {var observer = new PerformanceObserver(function (entries) {try {window.parent.aax.processPrefetchPerformanceEntries(entries.getEntries());} catch (e) {}});observer.observe({entryTypes: [\'resource\']});} \x3c/script></head><body onload="makeCall()"></body></html>');return B(a)[1]}},triggerEvent:f,Cy:function kb(a,b,c,d){f("b:"+
a,b,c);f(a,b,c,d);f("a:"+a,b,c)},C:l,Ija:function kb(a,b,c){var d=false;if(e(a)&&m(b)&&m(c)){ca(a,function(e,f,g){if((new RegExp(b)).test(e)===true){d=true;a[f]=c}});d===false&&a.push(c)}},pa:U,uf:function jb(){Z()&&(d.console&&d.console.log(Array.prototype.slice.call(arguments)))},Pn:Z,jv:D,oia:function lb(a,b,c){var d=[],e,f=[],g={};if(a.length===0)return[""];if(m(c)&&m(c.encode))g.encode=c.encode;for(l in a[0])a[0].hasOwnProperty(l)&&d.push(l);var h="",k=H();var l=0;for(c=a.length;l<c;l++){var n=
"";var p=0;for(e=d.length;p<e;p++)n+=L(d[p]+"[]",a[l][d[p]],g);if(k&&m(b))if(n.length>b)f.push(n);else if((h+n).length>b){f.push(h);h=n}else h+=n;else h+=n}f.push(h);return f},Mi:function lb(a,b){var c="",d={};if(m(b)&&m(b.encode))d.encode=b.encode;ca(a,function(a,b){c+=L(b,a,d)});return c},u:function Za(a,b){a.tla=b;for(var c in b.prototype)a.prototype[c]=b.prototype[c];a.prototype.constructor=a},Fj:function Jb(a,b){b*=6E4;return O()-a>b?false:true},D:new function Za(){var a={},b,c=false;this.startTime=
function(){return b};this.start=function(){b=(new Date).getTime();c=true};this.stop=function(){(new Date).getTime();c=false};this.gd=function(){return(new Date).getTime()-b};this.ja=function(b){a[b]={};a[b].startTime=c?this.gd():-1};this.qa=function(b){if(a.hasOwnProperty(b))a[b].endTime=a[b].startTime===-1?-1:this.gd()};this.time=function(b){if(a.hasOwnProperty(b)){a[b].endTime||this.qa(b);return a[b].endTime-a[b].startTime}return-1};this.getTime=function(b){return a.hasOwnProperty(b)?this.gd()-
a[b].startTime:-1}},extend:function mb(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},ro:ia,Hb:function Kb(){try{return/loaded|complete/.test(k.readyState)}catch(mb){return false}},Via:function nb(a,b){b="evt_"+(b||"gbl");ba[b]&&ba[b][a]&&ba[b][a].length>0&&(ba[b][a]=[])},Tka:function Lb(){for(var a in ba)ba.hasOwnProperty(a)&&a.indexOf("evt_")!==-1&&(a.indexOf("cmd")===-1&&(ba[a]={}))},Uka:h,Vka:function nb(){h("gbl")},a:m,QL:function Mb(a){return typeof a!=="undefined"},trim:function Nb(a){return m(a)?
a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):""},H:q,Kc:function Ob(a){return typeof a==="object"&&a!==null&&!q(a)},As:function Pb(a){if(!e(a))return{};for(var b=0,c=a.length,d={};b<c;b++)d[a[b]]=b+1;return d},map:E,reduce:function ob(a,b,c){if(g(b)){if(e(a)){var d=0;var f=a.length;if(typeof c==="undefined"){for(;d<f&&!(d in a);)d++;if(d>=f)return;c=a[d++]}for(;d<f;d++)d in a&&(c=b(c,a[d],d,a));return c}c=c||"";for(d in a)a.hasOwnProperty(d)&&(c=b(c,a[d],d,a));return c}},filter:function ob(a,
b){if(!m(a))return[];var c;g(b)||(b=function(a,b){return!!a});var d=0,f=a.length;if(e(a))for(c=[];d<f;d++)b.call(a[d],a[d],d)&&c.push(a[d]);else{c={};for(d in a)a.hasOwnProperty(d)&&(b.call(a[d],a[d],d)&&(c[d]=a[d]))}return c},Sb:function pb(a,b){b=b.split(".");var c;for(c=0;c<b.length;++c){if(a[b[c]]===void 0)return;a=a[b[c]]}return a},A:W,some:function qb(a,b){if(!m(a))return false;g(b)||(b=function(a,b){return!!a});var c=0,d=a.length;if(e(a))for(;c<d;c++){var f=b.call(a[c],a[c],c);if(f===true)return f}else for(c in a)if(a.hasOwnProperty(c)){f=
b.call(a[c],a[c],c);if(f===true)return f}return false},c:ca,Ht:H,Ce:X,Sg:function pb(){return X(d).width},tm:function qb(){return X(d).height},lK:function Qb(){try{return d.screen.width+"x"+d.screen.height}catch(Rb){return""}},He:ja,ea:O,Lh:function rb(a,b){b=Math.pow(10,b);return Math.round(a*b)/b},gg:function rb(a){a=a||"";return a.replace(/\/$/,"")},hj:function Sb(a){if(g(Object.keys))return Object.keys(a);var b=[];ca(a,function(a,c){b.push(c)});return b},$I:function Ec(a){if(e(a)){a=Math.max.apply(null,
a);if(!isNaN(a))return a}},mka:function sb(a,b){if(typeof a!=="object"||typeof b!=="string")return false;if(typeof a.className==="string")return(new RegExp("(^|\\s)"+b+"(\\s|$)")).test(a.className)},Xd:function $a(a,b,c){var d=g(c)?c:Date.now,e=d();return function(){var c=d();if(c-e>=a){e=c;b.apply(null,arguments)}}},Oa:function $a(a,b){if(a.style[b])return a.style[b];if(a.currentStyle)return a.currentStyle[b];if(k.defaultView&&k.defaultView.getComputedStyle){b=b.replace(/([A-Z])/g,"-$1");b=b.toLowerCase();
return(a=k.defaultView.getComputedStyle(a,""))&&a.getPropertyValue(b)}return null},py:function $a(a){if(m(a))a.style.cssText=(a.style.cssText||"")+";display:block!important;"},Tv:function Tb(a){if(m(a))a.style.cssText=(a.style.cssText||"")+";display:none!important;"},xf:function ub(c,f,g,h){var k=0;if(!m(d.aax.isexec))d.aax.isexec=[];if(m(d.aax.isexec)&&e(d.aax.isexec))k=d.aax.isexec.length;d.aax.isexec[k]=false;var l=function(){},n=function(){R(f,"INDEX ADAPTER RESPONSE FALLBACK",r);var a=g.bm||
l;d.aax.isexec[k]=true;a()},p=function(){R(f,"INDEX ADAPTER RESPONSE",r);d.aax.isexec[k]=true;(g.onload||l)(r.response||r.responseText);R(f,"INDEX ADAPTER RESPONSE AFTER",r)},q=function(){R(f,"INDEX ADAPTER RESPONSE ERROR",r);d.aax.isexec[k]=true;(g.onerror||l)()};ka(f,k);if(!d.XMLHttpRequest){n();return null}var r=new XMLHttpRequest,t=false;R(f,"INDEX ADAPTER XHR CREATED");c=(c||b.Tz.t$).toUpperCase();if("withCredentials"in r){R(f,"INDEX ADAPTER BEFORE OPEN");r.open(c,f,true);r.withCredentials=m(g.withCredentials)?
g.withCredentials:true}else if(d.XDomainRequest){r=new XDomainRequest;try{r.open(c,f)}catch(bb){n();return null}}else{n();return null}r.onload=r.onreadystatechange=function(){if(!t&&r.readyState==4){R(f,"INDEX ADAPTER ONREADYSTATE",r);if(r.status==200){R(f,"INDEX ADAPTER STATUS200 BEFORE",r);try{a.da(p);R(f,"INDEX ADAPTER STATUS200 AFTER",r)}catch(bb){R(f,"INDEX ADAPTER STATUS200 ERROR",r)}}else{R(f,"INDEX ADAPTER NOTSTATUS200",r);q()}t=true}};r.onerror=q;r.onabort=q;r.ontimeout=q;r.onloadstart=function(){d.aax.isexec[k]=
true;R(f,"LOAD START EVENT")};r.onloadend=function(){d.aax.isexec[k]=true;R(f,"LOAD END EVENT")};g.contentType&&r.setRequestHeader("Content-Type",g.contentType);g.nx&&r.setRequestHeader("x-openrtb-version",g.nx);try{R(f,"INDEX ADAPTER BEFORE SEND");r.send(h)}catch(bb){R(f,"INDEX ADAPTER ERROR")}return true},Eu:K,Tm:function tb(a){var b;try{a&&a.data&&(typeof a.data==="string"&&ja()&&(b=JSON.parse(a.data)))}catch(ub){}return b},Vn:function tb(){return g(d.navigator.sendBeacon)?true:false},ML:function Ub(){return"withCredentials"in
new XMLHttpRequest||typeof XDomainRequest!="undefined"?true:false},CI:function vb(a){function b(a){a=a.match(/\d+/g);return a===null||a.length===0?"":a[0]}a=a.frameElement;var c=String(a.height||"0"),d=String(a.width||"0");if(c.indexOf("%")!==-1||d.indexOf("%")!==-1){d=a.getBoundingClientRect&&a.getBoundingClientRect()||{};c=Math.ceil(d.height||a.clientHeight)||0;d=Math.ceil(d.width||a.clientWidth)||0}else{c=b(c);d=b(d)}return d+"x"+c},BK:function vb(){try{var a=d.localStorage}catch(ab){}if(m(a)){a=
a.getItem("tpck");if(m(a))return a}return(d&&d.navigator&&d.navigator.cookieEnabled||navigator&&navigator.cookieEnabled)===false?0:""},pu:function ab(a){a=S("#"+a);var b={},c=xa().TD,d=xa().Lr,e={};m(a)&&g(a.getBoundingClientRect)&&(e=a.getBoundingClientRect());b.yla=sa(e.top,0);b.jia=sa(e.bottom,0);b.cka=sa(e.left,0);b.Xka=sa(e.right,0);b.top=sa(e.top+d,0);b.bottom=sa(e.bottom+d,0);b.left=sa(e.left+c,0);b.right=sa(e.right+c,0);b.offsetX=sa(c,0);b.offsetY=sa(d,0);return b},Ka:function ab(){var a=
Array.prototype.slice.call(arguments),b=a[0];a.shift();ca(a,function(a){e(a)?Array.prototype.push.apply(b,a):b.push(a)});return b},Xa:sa,Request:function Vb(a){var b={};this.input=function(a,c){b[a]=c;return this};this.get=function(a){return m(b[a])?b[a]:""};this.Ww=function(a){a&&(b=a);return this};this.freeze=function(){return b};this.deleteProperty=function(a){delete b[a]};a&&(b=a)},Qs:function Wb(a){if(!m(a))return"";var b=a.split("?")[0].split("#")[0];if(!m(b))return"";b=b.replace(/\/$/,"");
var c=a.indexOf("#"),d="";c>0&&(d=a.substring(c+1));var e=a.indexOf("?");c=c>0?c:a.length;var f="";e>0&&(f=a.substring(e+1,c));a=N(f);m(a)&&(b=b+"?"+a);d=N(d);m(d)&&(b=b+"#"+d);return b},KN:function bb(a,b){try{if(aa()){a.document.write(b);a.document.close()}else{a.hbContent="<!DOCTYPE html><html><head></head><body>"+b+"</body></html>";a.location.replace('javascript:window["hbContent"];')}return true}catch(Xb){return false}},je:function Pa(a,b,c){return(new F).set("marginWidth",0).set("marginHeight",
0).set("scrolling","no").set("frameBorder",0).set("height",c||0).set("width",b||0).set("id",a).set("allowtransparency","true").done()},Sn:Ia,pE:function Pa(a,b){m(b)||(b=0);return new Date(a.getTime()+b*6E4)},ON:la,N:function wb(b,c){return typeof b==="function"?y(a.da,[c||null,b]):b},ij:function Pa(){try{var a=d.document.body,b=d.document.documentElement;return Math.max(a.scrollHeight,a.offsetHeight,b.clientHeight,b.scrollHeight,b.offsetHeight)}catch(Yb){return 0}},yh:n,la:function wb(){return V(A(D()),
10)+""+w(1E6,9999999)+""+(new Date).getTime().toString()},Nb:function yb(a,b){return a*(1+b/100)},Lx:Y,getFloatValue:function yb(a){a=Y(a);a=U(a);return parseFloat(a)},qx:Ha,et:oa,Jb:function xb(a){return m(a)&&(a<1||a*za>1)},hh:function xb(){return("https:"===d.location.protocol?"https:":"http:")+"//"+d.location.hostname},rN:Da,zl:function $b(a){return a.substr(0,4)!=="http"?("https:"===k.location.protocol?"https:":"http:")+a+a:a},xQ:function ac(a,b){return a.length>b?a.substr(0,b):a},rJ:xa,EK:function ac(a){for(var b=
a.parent;b!==d.top;){a=a.parent;b=b.parent}return a},Wi:na,postMessage:function cc(a,b,c){var e=z(c);if(b&&m(e))if(d.postMessage&&g(e.postMessage))e.postMessage(a,"*");else if(b){if(typeof a==="object"){a=Da(a);a=escape(a)}b=b+"#"+k.location.href;c.src=b;e.location=b.replace(/#.*$/,"")+"#_CPM$"+a}},aM:function zb(){return!!d.EventSource},Ye:pa,tj:function bc(){return T()&&!pa()},KJ:function cb(a,b){if(b){var c=ya(a,b),d=w(0,100),e=0,f=null;if(c<1||c>100)return f;return f=W(a,function(a){if(a[b]){e+=
a[b];if(d<e)return a}})}},Ls:function Ab(a,b){return e(a)&&e(b)?W(a,function(a){return r(b,a)}):false},KK:function cb(){return d.navigator&&d.navigator.vendor},xh:function Ab(){if(navigator.userAgent.indexOf("CriOS")!==-1||navigator.userAgent.indexOf("FxiOS")!==-1)return false;var a=navigator.userAgent.toLowerCase(),b=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1||false;a=a.indexOf("safari")!==-1&&a.indexOf("chrome")===-1||false;return b||a},vI:function dc(a){var b=S("@head:0");if(b)return b.getAttribute(a)||
""},YH:function ec(a){return m(a)&&typeof a!=="undefined"?a.getAttribute("id")||a.id:""},Mj:function Bb(a,b,c){return a.replace(new RegExp(b,"g"),c)},Dm:function fc(a){for(var b=d,c;b;){try{if(b.frames[a]){c=b;break}}catch(Cb){}if(b===d.top)break;b=b.parent}return c},mI:function Bb(a){return n(a)?ha(a):a.frameElement},vM:function Mc(a){return typeof a==="object"&&a.constructor===Object},At:function gc(a,b,c){if(m(aaxSettings)&&!q(aaxSettings)&&m(aaxSettings.pub)&&aaxSettings.pub==="AAXBI2Y62"&&a.includes("https://htlb.casalemedia.com/cygnus")){a=
w(1,5E5);na("https://l3.aaxads.com/log?___stu13p=1j1i1g49bxe3odqe1gncqvgbtbu1qf26wycb&lwbsh=AAX&oyo=1&flg=AAXBI2Y62&qdph="+c+"&vwdfn="+a)}}}});
'use strict';__ad("pqus",[window,document,{}],function(a,b){function d(a){typeof a.logLevel==="undefined"&&(a={logLevel:3,errorVal:a});a.logLevel>=3&&m[a.logLevel-1].push(a)}function k(a,b,c){this.name=a;this.message=b;this.logLevel=c}function l(){var a=Array.prototype.slice.call(arguments),b=a.length,c=null,f=null;if(typeof a[b-1]==="object"&&a[b-1]!==null&&a[b-1].constructor===k){var g=a[b-1];b--}if(typeof a[0]==="function"){var h=a.shift();b--}else{c=a.shift();h=a.shift();b-=2}a=a.slice(0,b);try{return h.apply(c,
a)}catch(w){if(g){w.name=g.name+" ("+w.name+")";w.message=g.message+" ("+w.message+")";f=g.logLevel}d({logLevel:f||3,errorVal:w});return new k}}function h(b,c){if(typeof b==="function")return a.setTimeout(function(){l(b)},c)}var f="",n="",c="",r,q=encodeURIComponent(navigator.userAgent),m=[];for(r=0;r<3;r++)m[r]=[];var g=function(){var c,d=0;for(c=0;c<3;c++)d+=m[c].length;if(d!==0){var k=new Image,l=(b.location.protocol==="https:"?"https":"http")+"://l3.aaxads.com/nerrping.php",r="",x=0;for(c=2;c>=
0;c--){for(d=m[c].length;0<d;){var w=c===1?m[c][0]:{logLevel:m[c][0].logLevel,errorVal:{name:m[c][0].errorVal.name,type:f,svr:n,message:m[c][0].errorVal.message,line:m[c][0].errorVal.lineNumber,description:m[c][0].errorVal.description,stack:m[c][0].errorVal.stack}};w=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify(w):void 0;if(w.length+r.length<=1200||!r.length){r.length!==0&&(r+=",");r+=w;m[c].shift();d--}else{x=1;break}}if(x)break}r=encodeURIComponent("["+r+"]");c=l+"?d="+
r+"&userAgent="+q+"&requrl="+encodeURIComponent(a.location.href)+"&img=logo.gif";k.src=c}h(g,2500)};a.addEventListener("load",g);return{da:l,aa:d,dg:function t(a){f=a},Sx:function u(a){n=a},hy:function v(a){c=a},setTimeout:h}});
'use strict';__ad("srvwpf",function(){return{F:{},ee:{},cf:{}}});
'use strict';__ad("postdataconstants",function(){return{F:{}}});
'use strict';__ad("uhv",function(){return{Event:{},Sz:{},tA:{},WB:{},LD:{},xz:{},Rz:{},Ck:{},cf:{},DD:{}}});
'use strict';__ad("inmemdatasource",["_","uhv"],function(a,b){function d(){var b={};this.set=function(d,c){a.a(d)&&a.Sn(d)&&(b[d]=c);return this};this.get=function(a){return b[a]||""}}function k(b){if(!a.a(b)||!a.Sn(b))return null;b=b.toString();a.a(l[b])||(l[b]=new d);return l[b]}var l={},h={};return{set:function r(a,b){return k("primary_in_mem_resource").set(a,b)},get:function r(a){return k("primary_in_mem_resource").get(a)},GP:function m(a,b){h[a]=b},ph:function m(a){h[a]||(h[a]=[]);return h[a]},
for:k}});
'use strict';__ad("postdata",["_","postdataconstants"],function(a,b){function d(){var b={},d=this;this.get=function(a){return b[a]};this.set=function(a,d){b[a]=d;return this};this.S=function(){return a.extend({},b)};this.Tb=function(d){b=a.extend({},d);return this};this.id=function(b){a.a(b)&&d.set("pid",b);return d.get("pid")};this.gb=function(b){a.a(b)&&d.set("pfid",b);return d.get("pfid")};this.target=function(b){a.a(b)&&d.set("ptarget",b);return d.get("ptarget")};this.source=function(b){if(a.a(b))d.set("psource",
b);else return d.get("psource")};d.set("pid",k++)}var k=1;d.F=b.F;return d});
'use strict';__ad("apurtbhandler",["_","pqus","uhv","postdata","inmemdatasource","srvwpf"],function(a,b,d,k,l,h){function f(b,d){f.Bo||a.Ch("https://delivery.adrecover.com/arbidder/v1/adrecover.js");f.Bo=true;window.arBidder=window.arBidder||{};c(b,d,window.arBidder)}function n(b,d){n.Bo||a.Ch("https://delivery.adrecover.com/arbidder/v2/adrecover.js");n.Bo=true;window.arBidderV2=window.arBidderV2||{};c(b,d,window.arBidderV2)}function c(a,b,c){var d=r(a),e=q(d.cE,b);c.queue=c.queue||[];c.queue.push(function(){try{c.init(d.FE,
e)}catch(v){}})}function r(b){var c=[],d={adUnits:[],bidderTimeout:b.timeout,country:b.country,pageUrl:b.refererInfo.canonicalUrl};a.c(b.bids,function(a){var b={adUnitCode:a.adUnitCode+"_"+a.bidderRequestId,sizes:a.sizes};d.arSiteId=a.params.siteId;d.adUnits.push(b);c.push(b.adUnitCode)});return{FE:d,cE:c}}function q(b,c){return function(d){d=d||[];var e=[];a.c(d,function(c){a.c(b,function(a){c.adUnitCode===a&&e.push({arAuctionId:c.arAuctionId,ad:c.ad,cpm:c.cpm,creativeId:c.creativeId,currency:c.currency,
dealId:c.dealId,height:c.height,netRevenue:c.netRevenue,requestId:c.requestId,ttl:c.ttl,width:c.width,lpx:c.lpx})})});m(e,c)}}function m(a,b){var c=new k;c.set("response",a);c.set("uid",b);c.set("type","bidResponse");c.target(l.get("tarOg"));c.gb(l.get("fid"));window.top.postMessage(c.S(),c.target())}return{VK:f,WK:n}});
'use strict';__ad("clientframecore",["_","pqus","uhv","postdata","inmemdatasource","srvwpf","apurtbhandler"],function(a,b,d,k,l,h,f){function n(a){var b=a.get("nType"),g=a.get("nData");a=a.get("uid");switch(b){case "apurtb":f.VK(g,a);break;case "apurtbv2":f.WK(g,a);break;case "image":c(g.url,a);break;case "iframe":r(g.url,a);break;case "xhr":q(g.method,g.data,g.url,a,g.options)}}function c(a,b){var c=function(){m(null,b)},e=new Image;e.onload=c;e.onerror=c;e.src=a}function r(b,c){a.Cd("iframe"+c,
null,window.document.body,{src:b},function(){m(null,c)})}function q(b,c,d,f,q){a.At(d,c,"INDEX ADAPTER REQUEST");try{var e={onload:function(a){m(a,f)},onerror:function(){m("",f)},bm:function(){m("",f)}};if(a.a(q)&&a.a(q.contentType))e.contentType=q.contentType;if(a.a(q)&&a.a(q.customHeaders)&&a.a(q.customHeaders[h.Headers.Kr]))e.nx=q.customHeaders[h.Headers.Kr];if(b==="GET"){a.Kc(c)&&(c=a.sa(c,null,{encode:true}));if(a.K(c)){a.Rb(d,"?")||(d+="?");d+=c}}a.xf(b,d,e,c)}catch(x){a.At(d,c,"INDEX ADAPTER REQUEST ERROR")}}
function m(a,b){var c=new k;c.set("response",a);c.set("uid",b);c.set("type","bidResponse");c.target(l.get("tarOg"));c.gb(l.get("fid"));window.aaxSettings.isiframe===true&&window.top!==window.parent?window.parent.postMessage(c.S(),c.target()):window.top.postMessage(c.S(),c.target())}b.dg("AAX");(function e(){var c={};try{if(a.a(window.name)){var d=JSON.parse(window.name);a.extend(c,d)}}catch(u){b.aa("Failed to read window name")}a.c(c,function(a,b){l.set(b,a)})})();a.Z.W(window,"message",a.N(function t(c){if(c.data&&
c.origin===c.data.src&&c.data.id===a.Xa(l.get("fid"))){c=(new k).Tb(c.data);switch(c.get("type")){case "request":b.da(n,c)}}}));return{start:function t(){var a=(new k).set("phs",true);a.target(l.get("tarOg"));a.gb(l.get("fid"));window.aaxSettings.isiframe===true&&window.top!==window.parent?window.parent.postMessage(a.S(),a.target()):window.top.postMessage(a.S(),a.target())}}});window.__ar(["clientframecore"],function(a){a.start()});
} catch (err) {
    window.aax.err = err;
    window.aax.errConsts = {"name":null,"type":"AAX_CLIENT_IFRAME","svr":"2022090107_257","servname":"c8-web-24","message":" encountered an error","path":"\/nerrping.php","customerId":"AAXV53D7Q","hostName":"https:\/\/l3.aaxads.com","get":{"userAgent":"userAgent","requrl":"requrl","cid":"cid","img":"img","d":"d"}};'use strict';var ra=window.aax.err,ta=window.aax.errConsts;ta=ta||{};ta.get=ta.get||{};ra=ra||{};var Ba={},Ca="",Ea=encodeURIComponent(window.navigator.userAgent);Ca=ra.stack?ra.stack:ra.s?ra.s:ra.stacktrace?ra.stacktrace:"No StackTrace";var Fa="",Qa;for(Qa in ra)ra.hasOwnProperty&&ra.hasOwnProperty(Qa)&&(Fa+=Qa+" : '"+ra[Qa]+"',");Ba.logLevel=3;Ba.errorVal={};Ba.errorVal.name=ta.name;Ba.errorVal.type=ta.type;Ba.errorVal.svr=ta.svr;Ba.errorVal.servname=ta.servname;Ba.errorVal.message=ta.message;
Ba.errorVal.stack=Ca;Ba.errorVal.objTrace=Fa;var Ra="";Ra=typeof JSON==="object"&&typeof JSON.stringify!=="undefined"?JSON.stringify(Ba):Ba.errorVal.name+"@#@"+Ba.errorVal.type+"@#@"+Ca+"@#@"+Fa;Ra=encodeURIComponent("["+Ra+"]");var Ta=ta.hostName+ta.path+"?"+ta.get.userAgent+"="+Ea+"&"+ta.get.oO+"="+encodeURIComponent(window.location.href)+"&"+ta.get.cid+"="+ta.customerId+"&"+ta.get.kL+"=logo.gif&"+ta.get.d+"="+Ra;(new Image).src=Ta;
};