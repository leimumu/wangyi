!function(){if(!Function.prototype.bind)Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var i=Array.prototype.slice.call(arguments,1),t=this,n=function(){},r=function(){return t.apply(this instanceof n?this:e,i.concat(Array.prototype.slice.call(arguments)))};if(this.prototype)n.prototype=this.prototype;r.prototype=new n;return r};var e=function(){var e=navigator.userAgent.toLowerCase();var i=/msie/.test(e)&&!/opera/.test(e);var t=(e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1];var n={6:"2.0",7:"3.0",8:"4.0",9:"5.0",10:"6.0",11:"7.0"};var r=n[document.documentMode]||n[parseInt(t)];if(i&&parseInt(r,10)<4)return 1;else return 0};var i=function(e,i,t){if(window.addEventListener)e.addEventListener(i,t,!1);else e.attachEvent("on"+i,t)};var t=function(e,i,t){if(window.removeEventListener)e.removeEventListener(i,t);else e.detachEvent("on"+i,t)};var n=function(e){e=e||"";if((e.indexOf("passport.")>=0||e.indexOf("dl.reg.163.com")>=0||e.indexOf("reg.icourse163.org")>=0)&&e.indexOf("/webzj")>=0)e=e.replace(/\:\/\/[^\/]+\/webzj\//,function(e){return e+"b/"});else e=e.replace(/\:\/\/([^\/]+)/,function(e){return e+"/b"});return e};var r;var o={},a,s,c=[],d;o.flag=!1;o.getDiscoverCss=function(){var e="";if(this.__coverBackground&&this._$supportCss3("animation"))e=this.__coverBackground.indexOf("background:")!=-1?this.__coverBackground:"";return"position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:rgb(0,0,0); filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);-moz-opacity:0.6;-khtml-opacity:0.6;opacity:0.6;z-index:1000;"+e};o.getPanelCss=function(e,i){return"position:fixed;z-index:10000;left:50%;top:50%;width:"+e+"px;margin-left:-"+e/2+"px;height:"+i+"px;margin-top:-"+i/2+"px;"};o.getIframeCss=function(){var e=null;if(this.__iframeShowAnimation)e="-webkit-animation:"+this.__iframeShowAnimation+";-moz-animation:"+this.__iframeShowAnimation+";-ms-animation:"+this.__iframeShowAnimation+";-o-animation:"+this.__iframeShowAnimation+";animation:"+this.__iframeShowAnimation+";";return"width:100%;height:100%;border:none;background:none;"+(e?e:"")};o.setOpacity=function(e,i){e.style.opacity=i/100};o.setWh=function(e,i,t){e.style.cssText=this.getPanelCss(i,t)};o.addIframe=function(e,i){var t=document.getElementById("x-URS-iframe"),n=this._name||"";if(!t){try{t=document.createElement('<iframe  name="'+n+'" allowTransparency=true ></iframe>')}catch(r){t=document.createElement("iframe");t.allowTransparency=!0;t.name=n}t.frameBorder=0;t.id="x-URS-iframe";t.scrolling="no";t.style.cssText=this.getIframeCss()}if(i)e.appendChild(t);else{var a=420,s=408;if(o.frameSize){a=o.frameSize.width;s=o.frameSize.height}var c=document.getElementById("x-discover");if(!c){c=document.createElement("div");c.id="x-discover";c.style.cssText=this.getDiscoverCss()}var d=document.getElementById("x-panel");if(!d){d=document.createElement("div");d.id="x-panel";this._panel=d;d.style.cssText=this.getPanelCss(a,s)}d.appendChild(t);e.appendChild(c);e.appendChild(d);e.style.display="none"}};o.initIframe=function(e){r=this;var i=document.getElementById("x-URS-iframe");if(s.afterSetIframeSrc)s.afterSetIframeSrc(i);window.setTimeout(function(){r.__loadTime=(new Date).getTime();if(i)i.src=a},0);if(e!==-1){r.sto=clearTimeout(r.sto);if(window._$needUrsBgp)if(1!=e){r.sto=setTimeout(function(){r.sto=clearTimeout(r.sto);a=a.replace("webzj.reg.163.com","webzj2.reg.163.com");if(window._$passportNeedUrsBgp)a=a.replace("passport.","passport2.").replace("reg.icourse163.org","reg2.icourse163.org").replace("dl.reg.163.com","dl2.reg.163.com");if(s.wdaId)a=a.replace(/wdaId=([^&]+)/,"wdaId=UA1482833332087");o.initIframe.call(r,1)},s.bgpTime);return}r.sto=setTimeout(function(){r.sto=clearTimeout(r.sto);a="//hc.reg.163.com/webcomponent/guide.html";o.initIframe.call(r,-1)},s.bgpTime)}};o._$supportCss3=function(e){var i=["webkit","Moz","ms","o"],t,n=[],r=document.documentElement.style,o=function(e){return e.replace(/-(\w)/g,function(e,i){return i.toUpperCase()})};for(t in i)n.push(o(i[t]+"-"+e));n.push(o(e));for(t in n)if(n[t]in r)return!0;return!1};var f=function(){var e=document.getElementById("x-URS-iframe");var i=window.name||"_parent";var t={};t.data=s;t.data.from="URS|";t.data.topURL=location.href||"";t.origin="*";t.source=i;t.data.mv="base";t.data.loadTime=(new Date).getTime()-this.__loadTime;m(e.contentWindow,t)};var l=function(){var e=/^([\w]+?:\/\/.*?(?=\/|$))/i;return function(i){i=i||"";if(e.test(i))return RegExp.$1;else return"*"}}();var u=function(e,i){try{i=i.toLowerCase();if(null===e)return"null"==i;if(void 0===e)return"undefined"==i;else return Object.prototype.toString.call(e).toLowerCase()=="[object "+i+"]"}catch(t){return!1}};var p=function(e,i,t){if(!e)return"";var n=[];for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];if(o)if(!u(o,"function")){if(u(o,"date"))o=o.getTime();else if(u(o,"array"))o=o.join(",");else if(u(o,"object"))o=JSON.stringify(o);if(t)o=encodeURIComponent(o);n.push(encodeURIComponent(r)+"="+o)}else;else;}else;return n.join(i||",")};var m=function(){var e="MSG|";var i=function(i){var t={};i=i||{};t.origin=i.origin||"";t.ref=location.href;t.self=i.source;t.data=JSON.stringify(i.data);return e+p(t,"|",!0)};return function(e,t){if(window.postMessage){t=t||{};e.postMessage(JSON.stringify(t.data),l(t.origin))}else c.unshift({w:e,d:escape(i(t))})}}();var g=function(){var e=navigator.appName;if("Netscape"==e){var i=window.open("about:blank","_self");i.opener=null;i.close()}else if("Microsoft Internet Explorer"==e){window.opener=null;window.open("","_self");window.close()}};window.URS=function(p,m,h){r=this;1==this._$COM_NUM?this._$COM_NUM=1:this._$COM_NUM=2;if("object"==typeof p)h=p;if(e())h.needUrsBgp=0;if("0"==h.needUrsBgp){h.passportNeedUrsBgp=0;window._$needUrsBgp=0;window._$passportNeedUrsBgp=0}else{if(h.crossDomainUrl||h.cookieDomain){window._$passportNeedUrsBgp=1;h.passportNeedUrsBgp=1}window._$needUrsBgp=1;h.needUrsBgp=1}o.frameSize=h.frameSize;o.__coverBackground=h.coverBackground;o.__iframeShowAnimation=h.iframeShowAnimation;window.PTDOM=0!=h.isHttps?"https://":"http://";if(h.cssDomain&&h.cssFiles){if(h.cssDomain.indexOf("http://")!=-1)window.PTDOM="http://";o.__cssStr="cd="+encodeURIComponent(h.cssDomain)+"&cf="+encodeURIComponent(h.cssFiles)}this.isInclude=0;if(h.includeBox)if("string"==typeof h.includeBox)this.isInclude=document.getElementById(h.includeBox)||0;else this.isInclude=h.includeBox;o.needPrepare=h.needPrepare||0;var w,v;if("string"==typeof m)v=m;if("string"==typeof p)w=document.getElementById(p);else w=p;if(h.logincb)this.logincb=h.logincb;if(h.closecb)this.closecb=h.closecb;if(h.regcb)this.regcb=h.regcb;if(h.statecb)this.statecb=h.statecb;if(h.resize)this.resize=h.resize;if(h.changepage)this.changepage=h.changepage;if(h.initReady)this.initReady=h.initReady;if(h.otherRegSuccess)this.otherRegSuccess=h.otherRegSuccess;if(h.mbInitSuccess)this.mbInitSuccess=h.mbInitSuccess;if(h.mbChangeModule)this.mbChangeModule=h.mbChangeModule;if(h.loginInitSuccess)this.loginInitSuccess=h.loginInitSuccess;if(h.regInitSuccess)this.regInitSuccess=h.regInitSuccess;if(h.moduleResize)this.moduleResize=h.moduleResize;d=document.createElement("div");d.id="x-URS";document.body.appendChild(d);this.box=d;var y;if(3==h.version){y="index2.html";if(h.single){y="index_dl2.html";if("register"==h.page)y="index_reg2.html"}}else{y="index.html";if(h.single){y="index_dl.html";if("register"==h.page)y="index_reg.html"}}var I=h.crossDomainUrl||"webzj.reg.163.com/out/pub/";a=window.PTDOM+I+y;var S=parseInt(1e3*Math.random());h.pathB=0;if(window.URS._$pathBPercent)if(S<=window.URS._$pathBPercent)h.pathB=1;if(h.pathB)a=n(a);if(o.__cssStr)a+="?"+o.__cssStr+"&wdaId="+(h.wdaId||"");else a+="?wdaId="+(h.wdaId||"");s=h||{};s.bgpTime=s.bgpTime||1e4;a+="&pkid="+(s.promark||"")+"&product="+(s.product||"");try{JSON.stringify(s)}catch(b){return null}if(!this.isInclude&&w&&v)i(w,v,this.showIframe.bind(this));else this.includeBox=this.isInclude;if(o.needPrepare||this.isInclude)this.prepareIframe();var _=function(e){if(e)e.stopPropagation?e.stopPropagation():e.cancelBubble=!0};var R=function(e){_(e);var i=e.data||"{}";x({data:i,origin:l(e.origin)})};var x=function(e){var i=e.data;var n;if(r.isInclude)n=r.includeBox;else n=o._panel;if(i){if("string"==typeof i)try{i=JSON.parse(i)}catch(a){i={}}if(i["URS-READY"]){r.sto=clearTimeout(r.sto);if(r.initReady)r.initReady()}if(!i["URS-READY"]||!r.isInclude&&o.needPrepare){if(i["URS-READY"]&&!o._initReady)o._initReady=!0;if(i["URS-CM"]&&document.getElementById("x-URS-iframe"))if(!i["URS-CM-STATE"])if(!i||!i.fromOutLogin||i.toOpener){if("moduleResize"==i.type){if(r.moduleResize)r.moduleResize(i)}else if("regInitSuccess"==i.type){if(r.regInitSuccess)r.regInitSuccess()}else if("loginInitSuccess"==i.type){if(r.loginInitSuccess)r.loginInitSuccess()}else if("mbChangeModule"==i.type){if(r.mbChangeModule)r.mbChangeModule()}else if("mbInitSuccess"==i.type){if(r.mbInitSuccess)r.mbInitSuccess()}else if("otherRegSuccess"==i.type){if(r.otherRegSuccess)r.otherRegSuccess(i)}else if("success"==i.type){if(r.logincb)r.logincb(i.username,i.isOther,i);if(!this.isInclude){if(w&&v)t(w,v,r.showIframe.bind(r));r.closeIframe()}}else if("close"==i.type){if(r.closecb)r.closecb();r.closeIframe()}else if("resize"==i.type||"init"==i.type){n.style.width=i.width+"px";n.style.height=i.height+"px";if(!r.isInclude)n.style.marginLeft=-1*i.width/2+"px";if(r.resize)r.resize(i)}else if("register-success"==i.type){if(r.regcb)r.regcb(i.username,i.url)}else if("changepage"==i.type)if(r.changepage)r.changepage(i.page)}else{try{window.opener.$outLogin(i)}catch(a){}setTimeout(function(){g()},200)}else if(r.statecb)r.statecb(i["URS-CM-STATENAME"],i["URS-CM-STATE"])}else f.call(r)}};var U=function(){var e="MSG|";var i=function(e,i){var t=u(i,"function")?i:function(e){return e===i},n=null;for(var r=0,o=e.length-1,a;r<o;r++){a=e[r];if(t(a))n=r;
}return null!=n?n:-1};var t=function(){var e;var t=function(t,n,r){if(i(e,t.w)<0){e.push(t.w);r.splice(n,1);t.w.name=t.d}};return function(){e=[];if(c&&c.length)for(var i=c.length,n;i--;i>=0){n=c[i];t(n,i,c)}e=null}}();var n=function(){var i=unescape(window.name||"");if(i&&0==i.indexOf(e)){window.name="";var t=i.replace(e,""),n=t.split("|"),r=n.length,o={};for(var a=0;a<r;a++){var s=n[a].split("=");if(!s||!s.length)return;var c=s.shift();if(!c)return;o[decodeURIComponent(c)]=decodeURIComponent(s.join("="))}t=o;var d=(t.origin||"").toLowerCase();if(!d||"*"==d||0==location.href.toLowerCase().indexOf(d))x({data:t.data||"null",origin:l(t.ref||document.referrer)})}};return function(){setInterval(t,100);setInterval(n,20)}}();var B=function(){if(!window.__hasRun){if(window.postMessage)i(window,"message",R);else U();window.__hasRun=1}};return B()};window.URS.prototype.prepareIframe=function(){if(this.isInclude){o.addIframe(this.includeBox,1);o.initIframe.call(this);this.showIframe()}else{o.addIframe(d);o.initIframe.call(this)}};window.URS.prototype.showIframe=function(e){if(!this.isInclude)if(!o.needPrepare){o.addIframe(d);o.initIframe.call(this)}else if(!o._initReady)return;e=e||{};if(e.page){if(e.page!=s.page&&s.single){var i="index_dl.html";if("register"==e.page)i="index_reg.html";var t=e.crossDomainUrl||"webzj.reg.163.com/out/pub/";var r=parseInt(1e3*Math.random());e.pathB=0;if(window.URS._$pathBPercent)if(r<=window.URS._$pathBPercent)e.pathB=1;if(e.pathB)a=n(a);a=window.PTDOM+t+i;if(o.__cssStr)a+="?"+o.__cssStr+"&wdaId="+(e.wdaId||"");else a+="?wdaId="+(e.wdaId||"");a+="&pkid="+(e.promark||"")+"&product="+(e.product||"")}o.initIframe.call(this);s.page=e.page}if(o.needPrepare&&!this.isInclude)f.call(this);d.style.display="block"};window.URS.prototype.closeIframe=function(){if(!this.isInclude){d.style.display="none";if(this.sto)this.sto=clearTimeout(this.sto);if(!o.needPrepare){o.flag=!1;if(navigator.userAgent.indexOf("MSIE")>0){var e=document.getElementById("x-URS-iframe"),i=e.contentWindow;if(e){e.src="about:blank";try{i.document.write("");i.document.clear()}catch(t){}}var n=document.getElementById("x-panel");n.removeChild(e);window.CollectGarbage()}d.innerHTML=""}}else;};window.URS.setPkidAndPd=function(){var e=function(e){var i;if(e&&e.lgs){i=e.lgs;window.URS._$pathBPercent=parseInt(i)}};var i=function(i){var t=i.pkid||"";var n=i.pd||"";var r;if(void 0===i.mode)r="3";else r=i.mode;if("3"!=r&&"0"!=r){var o="URSJSONP"+(new Date).getTime();window[o]=e;var a="//dl.reg.163.com/getConf?callback="+o+"&pkid="+t+"&pd="+n+"&mode="+r;var s=document.createElement("script");s.type="text/javascript";s.id="urs-script-"+o;s.src=a;document.getElementsByTagName("head")[0].appendChild(s);setTimeout(function(){document.getElementsByTagName("head")[0].removeChild(s)},5e3)}};return function(e){i(e)}}()}();