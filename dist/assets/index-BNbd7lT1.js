var $1=Object.defineProperty;var Q1=(t,e,r)=>e in t?$1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var H=(t,e,r)=>Q1(t,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Za(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rm={exports:{}},$c={},Pm={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),Z1=Symbol.for("react.portal"),J1=Symbol.for("react.fragment"),ey=Symbol.for("react.strict_mode"),ty=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),ny=Symbol.for("react.context"),iy=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),ay=Symbol.for("react.lazy"),bh=Symbol.iterator;function ly(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Om={};function ws(t,e,r){this.props=t,this.context=e,this.refs=Om,this.updater=r||zm}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mm(){}Mm.prototype=ws.prototype;function Of(t,e,r){this.props=t,this.context=e,this.refs=Om,this.updater=r||zm}var Mf=Of.prototype=new Mm;Mf.constructor=Of;Lm(Mf,ws.prototype);Mf.isPureReactComponent=!0;var _h=Array.isArray,Dm=Object.prototype.hasOwnProperty,Df={current:null},Im={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Dm.call(e,n)&&!Im.hasOwnProperty(n)&&(i[n]=e[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:Ja,type:t,key:o,ref:s,props:i,_owner:Df.current}}function cy(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function uy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var kh=/\/+/g;function yu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uy(""+t.key):e.toString(36)}function Wl(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ja:case Z1:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+yu(s,0):n,_h(i)?(r="",t!=null&&(r=t.replace(kh,"$&/")+"/"),Wl(i,e,r,"",function(u){return u})):i!=null&&(If(i)&&(i=cy(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(kh,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",_h(t))for(var a=0;a<t.length;a++){o=t[a];var l=n+yu(o,a);s+=Wl(o,e,r,l,i)}else if(l=ly(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=n+yu(o,a++),s+=Wl(o,e,r,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function dl(t,e,r){if(t==null)return t;var n=[],i=0;return Wl(t,n,"","",function(o){return e.call(r,o,i++)}),n}function dy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},Ul={transition:null},fy={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:Df};function Bm(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:dl,forEach:function(t,e,r){dl(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=ws;oe.Fragment=J1;oe.Profiler=ty;oe.PureComponent=Of;oe.StrictMode=ey;oe.Suspense=oy;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;oe.act=Bm;oe.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Lm({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Df.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dm.call(e,l)&&!Im.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:Ja,type:t.type,key:i,ref:o,props:n,_owner:s}};oe.createContext=function(t){return t={$$typeof:ny,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ry,_context:t},t.Consumer=t};oe.createElement=Fm;oe.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:iy,render:t}};oe.isValidElement=If;oe.lazy=function(t){return{$$typeof:ay,_payload:{_status:-1,_result:t},_init:dy}};oe.memo=function(t,e){return{$$typeof:sy,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};oe.unstable_act=Bm;oe.useCallback=function(t,e){return Ut.current.useCallback(t,e)};oe.useContext=function(t){return Ut.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Ut.current.useEffect(t,e)};oe.useId=function(){return Ut.current.useId()};oe.useImperativeHandle=function(t,e,r){return Ut.current.useImperativeHandle(t,e,r)};oe.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Ut.current.useMemo(t,e)};oe.useReducer=function(t,e,r){return Ut.current.useReducer(t,e,r)};oe.useRef=function(t){return Ut.current.useRef(t)};oe.useState=function(t){return Ut.current.useState(t)};oe.useSyncExternalStore=function(t,e,r){return Ut.current.useSyncExternalStore(t,e,r)};oe.useTransition=function(){return Ut.current.useTransition()};oe.version="18.3.1";Pm.exports=oe;var b=Pm.exports;const $i=Za(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=b,hy=Symbol.for("react.element"),gy=Symbol.for("react.fragment"),my=Object.prototype.hasOwnProperty,xy=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vy={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)my.call(e,n)&&!vy.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:hy,type:t,key:o,ref:s,props:i,_owner:xy.current}}$c.Fragment=gy;$c.jsx=Hm;$c.jsxs=Hm;Rm.exports=$c;var c=Rm.exports,dd={},Wm={exports:{}},kr={},Um={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,D){var S=z.length;z.push(D);e:for(;0<S;){var X=S-1>>>1,le=z[X];if(0<i(le,D))z[X]=D,z[S]=le,S=X;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var D=z[0],S=z.pop();if(S!==D){z[0]=S;e:for(var X=0,le=z.length,xt=le>>>1;X<xt;){var fe=2*(X+1)-1,He=z[fe],ke=fe+1,we=z[ke];if(0>i(He,S))ke<le&&0>i(we,He)?(z[X]=we,z[ke]=S,X=ke):(z[X]=He,z[fe]=S,X=fe);else if(ke<le&&0>i(we,S))z[X]=we,z[ke]=S,X=ke;else break e}}return D}function i(z,D){var S=z.sortIndex-D.sortIndex;return S!==0?S:z.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var D=r(u);D!==null;){if(D.callback===null)n(u);else if(D.startTime<=z)n(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=r(u)}}function _(z){if(g=!1,y(z),!m)if(r(l)!==null)m=!0,ee(k);else{var D=r(u);D!==null&&G(_,D.startTime-z)}}function k(z,D){m=!1,g&&(g=!1,v(T),T=-1),h=!0;var S=p;try{for(y(D),f=r(l);f!==null&&(!(f.expirationTime>D)||z&&!M());){var X=f.callback;if(typeof X=="function"){f.callback=null,p=f.priorityLevel;var le=X(f.expirationTime<=D);D=t.unstable_now(),typeof le=="function"?f.callback=le:f===r(l)&&n(l),y(D)}else n(l);f=r(l)}if(f!==null)var xt=!0;else{var fe=r(u);fe!==null&&G(_,fe.startTime-D),xt=!1}return xt}finally{f=null,p=S,h=!1}}var E=!1,C=null,T=-1,j=5,N=-1;function M(){return!(t.unstable_now()-N<j)}function R(){if(C!==null){var z=t.unstable_now();N=z;var D=!0;try{D=C(!0,z)}finally{D?V():(E=!1,C=null)}}else E=!1}var V;if(typeof x=="function")V=function(){x(R)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,K=U.port2;U.port1.onmessage=R,V=function(){K.postMessage(null)}}else V=function(){w(R,0)};function ee(z){C=z,E||(E=!0,V())}function G(z,D){T=w(function(){z(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,ee(k))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var S=p;p=D;try{return z()}finally{p=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var S=p;p=z;try{return D()}finally{p=S}},t.unstable_scheduleCallback=function(z,D,S){var X=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?X+S:X):S=X,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=S+le,z={id:d++,callback:D,priorityLevel:z,startTime:S,expirationTime:le,sortIndex:-1},S>X?(z.sortIndex=S,e(u,z),r(l)===null&&z===r(u)&&(g?(v(T),T=-1):g=!0,G(_,S-X))):(z.sortIndex=le,e(l,z),m||h||(m=!0,ee(k))),z},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(z){var D=p;return function(){var S=p;p=D;try{return z.apply(this,arguments)}finally{p=S}}}})(Ym);Um.exports=Ym;var yy=Um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=b,wr=yy;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Sa={};function xo(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Sa[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,by=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},Th={};function _y(t){return fd.call(Th,t)?!0:fd.call(Sh,t)?!1:by.test(t)?Th[t]=!0:(Sh[t]=!0,!1)}function ky(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sy(t,e,r,n){if(e===null||typeof e>"u"||ky(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,r,n,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function Bf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ff,Bf);mt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ff,Bf);mt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ff,Bf);mt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hf(t,e,r,n){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sy(e,r,i,n)&&(r=null),n||i===null?_y(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var Un=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Po=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,wu;function Us(t){if(wu===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var bu=!1;function _u(t,e){if(!t||bu)return"";bu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{bu=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Us(t):""}function Ty(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=_u(t.type,!1),t;case 11:return t=_u(t.type.render,!1),t;case 1:return t=_u(t.type,!0),t;default:return""}}function md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zo:return"Fragment";case Po:return"Portal";case pd:return"Profiler";case Wf:return"StrictMode";case hd:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Gm:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yf:return e=t.displayName||null,e!==null?e:md(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return md(t(e))}catch{}}return null}function Cy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===Wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ey(t){var e=Km(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=Ey(t))}function $m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Km(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xd(t,e){var r=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Eh(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=ki(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qm(t,e){e=e.checked,e!=null&&Hf(t,"checked",e,!1)}function vd(t,e){Qm(t,e);var r=ki(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yd(t,e.type,r):e.hasOwnProperty("defaultValue")&&yd(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function yd(t,e,r){(e!=="number"||fc(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ys=Array.isArray;function qo(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+ki(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nh(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(L(92));if(Ys(r)){if(1<r.length)throw Error(L(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:ki(r)}}function Zm(t,e){var r=ki(e.value),n=ki(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,e0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jy=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){jy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function t0(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=t0(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var Ny=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(Ny[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,Xo=null,Ko=null;function Rh(t){if(t=rl(t)){if(typeof Td!="function")throw Error(L(280));var e=t.stateNode;e&&(e=tu(e),Td(t.stateNode,t.type,e))}}function n0(t){Xo?Ko?Ko.push(t):Ko=[t]:Xo=t}function i0(){if(Xo){var t=Xo,e=Ko;if(Ko=Xo=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function o0(t,e){return t(e)}function s0(){}var ku=!1;function a0(t,e,r){if(ku)return t(e,r);ku=!0;try{return o0(t,e,r)}finally{ku=!1,(Xo!==null||Ko!==null)&&(s0(),i0())}}function Ca(t,e){var r=t.stateNode;if(r===null)return null;var n=tu(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(L(231,e,typeof r));return r}var Cd=!1;if(Mn)try{var As={};Object.defineProperty(As,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Cd=!1}function Ay(t,e,r,n,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var ra=!1,pc=null,hc=!1,Ed=null,Ry={onError:function(t){ra=!0,pc=t}};function Py(t,e,r,n,i,o,s,a,l){ra=!1,pc=null,Ay.apply(Ry,arguments)}function zy(t,e,r,n,i,o,s,a,l){if(Py.apply(this,arguments),ra){if(ra){var u=pc;ra=!1,pc=null}else throw Error(L(198));hc||(hc=!0,Ed=u)}}function vo(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function l0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ph(t){if(vo(t)!==t)throw Error(L(188))}function Ly(t){var e=t.alternate;if(!e){if(e=vo(t),e===null)throw Error(L(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Ph(i),t;if(o===n)return Ph(i),e;o=o.sibling}throw Error(L(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(r.alternate!==n)throw Error(L(190))}if(r.tag!==3)throw Error(L(188));return r.stateNode.current===r?t:e}function c0(t){return t=Ly(t),t!==null?u0(t):null}function u0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u0(t);if(e!==null)return e;t=t.sibling}return null}var d0=wr.unstable_scheduleCallback,zh=wr.unstable_cancelCallback,Oy=wr.unstable_shouldYield,My=wr.unstable_requestPaint,Ge=wr.unstable_now,Dy=wr.unstable_getCurrentPriorityLevel,Gf=wr.unstable_ImmediatePriority,f0=wr.unstable_UserBlockingPriority,gc=wr.unstable_NormalPriority,Iy=wr.unstable_LowPriority,p0=wr.unstable_IdlePriority,Qc=null,fn=null;function Fy(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var $r=Math.clz32?Math.clz32:Wy,By=Math.log,Hy=Math.LN2;function Wy(t){return t>>>=0,t===0?32:31-(By(t)/Hy|0)|0}var gl=64,ml=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,s=r&268435455;if(s!==0){var a=s&~i;a!==0?n=Vs(a):(o&=s,o!==0&&(n=Vs(o)))}else s=r&~i,s!==0?n=Vs(s):o!==0&&(n=Vs(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-$r(e),i=1<<r,n|=t[r],e&=~i;return n}function Uy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yy(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-$r(o),a=1<<s,l=i[s];l===-1?(!(a&r)||a&n)&&(i[s]=Uy(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Su(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function el(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$r(e),t[e]=r}function Vy(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-$r(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function qf(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-$r(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var he=0;function g0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,Xf,x0,v0,y0,Nd=!1,xl=[],di=null,fi=null,pi=null,Ea=new Map,ja=new Map,ri=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function Rs(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qy(t,e,r,n,i){switch(e){case"focusin":return di=Rs(di,t,e,r,n,i),!0;case"dragenter":return fi=Rs(fi,t,e,r,n,i),!0;case"mouseover":return pi=Rs(pi,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return Ea.set(o,Rs(Ea.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,ja.set(o,Rs(ja.get(o)||null,t,e,r,n,i)),!0}return!1}function w0(t){var e=Vi(t.target);if(e!==null){var r=vo(e);if(r!==null){if(e=r.tag,e===13){if(e=l0(r),e!==null){t.blockedOn=e,y0(t.priority,function(){x0(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Sd=n,r.target.dispatchEvent(n),Sd=null}else return e=rl(r),e!==null&&Xf(e),t.blockedOn=r,!1;e.shift()}return!0}function Oh(t,e,r){Yl(t)&&r.delete(e)}function Xy(){Nd=!1,di!==null&&Yl(di)&&(di=null),fi!==null&&Yl(fi)&&(fi=null),pi!==null&&Yl(pi)&&(pi=null),Ea.forEach(Oh),ja.forEach(Oh)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,wr.unstable_scheduleCallback(wr.unstable_NormalPriority,Xy)))}function Na(t){function e(i){return Ps(i,t)}if(0<xl.length){Ps(xl[0],t);for(var r=1;r<xl.length;r++){var n=xl[r];n.blockedOn===t&&(n.blockedOn=null)}}for(di!==null&&Ps(di,t),fi!==null&&Ps(fi,t),pi!==null&&Ps(pi,t),Ea.forEach(e),ja.forEach(e),r=0;r<ri.length;r++)n=ri[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<ri.length&&(r=ri[0],r.blockedOn===null);)w0(r),r.blockedOn===null&&ri.shift()}var $o=Un.ReactCurrentBatchConfig,xc=!0;function Ky(t,e,r,n){var i=he,o=$o.transition;$o.transition=null;try{he=1,Kf(t,e,r,n)}finally{he=i,$o.transition=o}}function $y(t,e,r,n){var i=he,o=$o.transition;$o.transition=null;try{he=4,Kf(t,e,r,n)}finally{he=i,$o.transition=o}}function Kf(t,e,r,n){if(xc){var i=Ad(t,e,r,n);if(i===null)Lu(t,e,n,vc,r),Lh(t,n);else if(qy(i,t,e,r,n))n.stopPropagation();else if(Lh(t,n),e&4&&-1<Gy.indexOf(t)){for(;i!==null;){var o=rl(i);if(o!==null&&m0(o),o=Ad(t,e,r,n),o===null&&Lu(t,e,n,vc,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Lu(t,e,n,null,r)}}var vc=null;function Ad(t,e,r,n){if(vc=null,t=Vf(n),t=Vi(t),t!==null)if(e=vo(t),e===null)t=null;else if(r=e.tag,r===13){if(t=l0(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function b0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dy()){case Gf:return 1;case f0:return 4;case gc:case Iy:return 16;case p0:return 536870912;default:return 16}default:return 16}}var ii=null,$f=null,Vl=null;function _0(){if(Vl)return Vl;var t,e=$f,r=e.length,n,i="value"in ii?ii.value:ii.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[o-n];n++);return Vl=i.slice(t,1<n?1-n:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Mh(){return!1}function Sr(t){function e(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vl:Mh,this.isPropagationStopped=Mh,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qf=Sr(bs),tl=Me({},bs,{view:0,detail:0}),Qy=Sr(tl),Tu,Cu,zs,Zc=Me({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Tu=t.screenX-zs.screenX,Cu=t.screenY-zs.screenY):Cu=Tu=0,zs=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Dh=Sr(Zc),Zy=Me({},Zc,{dataTransfer:0}),Jy=Sr(Zy),ew=Me({},tl,{relatedTarget:0}),Eu=Sr(ew),tw=Me({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),rw=Sr(tw),nw=Me({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iw=Sr(nw),ow=Me({},bs,{data:0}),Ih=Sr(ow),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lw[t])?!!e[t]:!1}function Zf(){return cw}var uw=Me({},tl,{key:function(t){if(t.key){var e=sw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dw=Sr(uw),fw=Me({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=Sr(fw),pw=Me({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),hw=Sr(pw),gw=Me({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),mw=Sr(gw),xw=Me({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vw=Sr(xw),yw=[9,13,27,32],Jf=Mn&&"CompositionEvent"in window,na=null;Mn&&"documentMode"in document&&(na=document.documentMode);var ww=Mn&&"TextEvent"in window&&!na,k0=Mn&&(!Jf||na&&8<na&&11>=na),Bh=" ",Hh=!1;function S0(t,e){switch(t){case"keyup":return yw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lo=!1;function bw(t,e){switch(t){case"compositionend":return T0(e);case"keypress":return e.which!==32?null:(Hh=!0,Bh);case"textInput":return t=e.data,t===Bh&&Hh?null:t;default:return null}}function _w(t,e){if(Lo)return t==="compositionend"||!Jf&&S0(t,e)?(t=_0(),Vl=$f=ii=null,Lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k0&&e.locale!=="ko"?null:e.data;default:return null}}var kw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kw[t.type]:e==="textarea"}function C0(t,e,r,n){n0(n),e=yc(e,"onChange"),0<e.length&&(r=new Qf("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var ia=null,Aa=null;function Sw(t){D0(t,0)}function Jc(t){var e=Do(t);if($m(e))return t}function Tw(t,e){if(t==="change")return e}var E0=!1;if(Mn){var ju;if(Mn){var Nu="oninput"in document;if(!Nu){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Nu=typeof Uh.oninput=="function"}ju=Nu}else ju=!1;E0=ju&&(!document.documentMode||9<document.documentMode)}function Yh(){ia&&(ia.detachEvent("onpropertychange",j0),Aa=ia=null)}function j0(t){if(t.propertyName==="value"&&Jc(Aa)){var e=[];C0(e,Aa,t,Vf(t)),a0(Sw,e)}}function Cw(t,e,r){t==="focusin"?(Yh(),ia=e,Aa=r,ia.attachEvent("onpropertychange",j0)):t==="focusout"&&Yh()}function Ew(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Aa)}function jw(t,e){if(t==="click")return Jc(e)}function Nw(t,e){if(t==="input"||t==="change")return Jc(e)}function Aw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zr=typeof Object.is=="function"?Object.is:Aw;function Ra(t,e){if(Zr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!fd.call(e,i)||!Zr(t[i],e[i]))return!1}return!0}function Vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gh(t,e){var r=Vh(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vh(r)}}function N0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A0(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=fc(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rw(t){var e=A0(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&N0(r.ownerDocument.documentElement,r)){if(n!==null&&ep(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=Gh(r,o);var s=Gh(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pw=Mn&&"documentMode"in document&&11>=document.documentMode,Oo=null,Rd=null,oa=null,Pd=!1;function qh(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Pd||Oo==null||Oo!==fc(n)||(n=Oo,"selectionStart"in n&&ep(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),oa&&Ra(oa,n)||(oa=n,n=yc(Rd,"onSelect"),0<n.length&&(e=new Qf("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Oo)))}function yl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Mo={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Au={},R0={};Mn&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function eu(t){if(Au[t])return Au[t];if(!Mo[t])return t;var e=Mo[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in R0)return Au[t]=e[r];return t}var P0=eu("animationend"),z0=eu("animationiteration"),L0=eu("animationstart"),O0=eu("transitionend"),M0=new Map,Xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(t,e){M0.set(t,e),xo(e,[t])}for(var Ru=0;Ru<Xh.length;Ru++){var Pu=Xh[Ru],zw=Pu.toLowerCase(),Lw=Pu[0].toUpperCase()+Pu.slice(1);Ni(zw,"on"+Lw)}Ni(P0,"onAnimationEnd");Ni(z0,"onAnimationIteration");Ni(L0,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(O0,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function Kh(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,zy(n,e,void 0,t),t.currentTarget=null}function D0(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Kh(i,a,u),o=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Kh(i,a,u),o=l}}}if(hc)throw t=Ed,hc=!1,Ed=null,t}function be(t,e){var r=e[Dd];r===void 0&&(r=e[Dd]=new Set);var n=t+"__bubble";r.has(n)||(I0(e,t,2,!1),r.add(n))}function zu(t,e,r){var n=0;e&&(n|=4),I0(r,t,n,e)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[wl]){t[wl]=!0,Vm.forEach(function(r){r!=="selectionchange"&&(Ow.has(r)||zu(r,!1,t),zu(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wl]||(e[wl]=!0,zu("selectionchange",!1,e))}}function I0(t,e,r,n){switch(b0(e)){case 1:var i=Ky;break;case 4:i=$y;break;default:i=Kf}r=i.bind(null,e,r,t),i=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Lu(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Vi(a),s===null)return;if(l=s.tag,l===5||l===6){n=o=s;continue e}a=a.parentNode}}n=n.return}a0(function(){var u=o,d=Vf(r),f=[];e:{var p=M0.get(t);if(p!==void 0){var h=Qf,m=t;switch(t){case"keypress":if(Gl(r)===0)break e;case"keydown":case"keyup":h=dw;break;case"focusin":m="focus",h=Eu;break;case"focusout":m="blur",h=Eu;break;case"beforeblur":case"afterblur":h=Eu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=hw;break;case P0:case z0:case L0:h=rw;break;case O0:h=mw;break;case"scroll":h=Qy;break;case"wheel":h=vw;break;case"copy":case"cut":case"paste":h=iw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fh}var g=(e&4)!==0,w=!g&&t==="scroll",v=g?p!==null?p+"Capture":null:p;g=[];for(var x=u,y;x!==null;){y=x;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,v!==null&&(_=Ca(x,v),_!=null&&g.push(za(x,_,y)))),w)break;x=x.return}0<g.length&&(p=new h(p,m,null,r,d),f.push({event:p,listeners:g}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&r!==Sd&&(m=r.relatedTarget||r.fromElement)&&(Vi(m)||m[Dn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(m=r.relatedTarget||r.toElement,h=u,m=m?Vi(m):null,m!==null&&(w=vo(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(g=Dh,_="onMouseLeave",v="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(g=Fh,_="onPointerLeave",v="onPointerEnter",x="pointer"),w=h==null?p:Do(h),y=m==null?p:Do(m),p=new g(_,x+"leave",h,r,d),p.target=w,p.relatedTarget=y,_=null,Vi(d)===u&&(g=new g(v,x+"enter",m,r,d),g.target=y,g.relatedTarget=w,_=g),w=_,h&&m)t:{for(g=h,v=m,x=0,y=g;y;y=ko(y))x++;for(y=0,_=v;_;_=ko(_))y++;for(;0<x-y;)g=ko(g),x--;for(;0<y-x;)v=ko(v),y--;for(;x--;){if(g===v||v!==null&&g===v.alternate)break t;g=ko(g),v=ko(v)}g=null}else g=null;h!==null&&$h(f,p,h,g,!1),m!==null&&w!==null&&$h(f,w,m,g,!0)}}e:{if(p=u?Do(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=Tw;else if(Wh(p))if(E0)k=Nw;else{k=Ew;var E=Cw}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=jw);if(k&&(k=k(t,u))){C0(f,k,r,d);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&yd(p,"number",p.value)}switch(E=u?Do(u):window,t){case"focusin":(Wh(E)||E.contentEditable==="true")&&(Oo=E,Rd=u,oa=null);break;case"focusout":oa=Rd=Oo=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,qh(f,r,d);break;case"selectionchange":if(Pw)break;case"keydown":case"keyup":qh(f,r,d)}var C;if(Jf)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Lo?S0(t,r)&&(T="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(k0&&r.locale!=="ko"&&(Lo||T!=="onCompositionStart"?T==="onCompositionEnd"&&Lo&&(C=_0()):(ii=d,$f="value"in ii?ii.value:ii.textContent,Lo=!0)),E=yc(u,T),0<E.length&&(T=new Ih(T,t,null,r,d),f.push({event:T,listeners:E}),C?T.data=C:(C=T0(r),C!==null&&(T.data=C)))),(C=ww?bw(t,r):_w(t,r))&&(u=yc(u,"onBeforeInput"),0<u.length&&(d=new Ih("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=C))}D0(f,e)})}function za(t,e,r){return{instance:t,listener:e,currentTarget:r}}function yc(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ca(t,r),o!=null&&n.unshift(za(t,o,i)),o=Ca(t,e),o!=null&&n.push(za(t,o,i))),t=t.return}return n}function ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,r,n,i){for(var o=e._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,i?(l=Ca(r,o),l!=null&&s.unshift(za(r,l,a))):i||(l=Ca(r,o),l!=null&&s.push(za(r,l,a)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var Mw=/\r\n?/g,Dw=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(Mw,`
`).replace(Dw,"")}function bl(t,e,r){if(e=Qh(e),Qh(t)!==e&&r)throw Error(L(425))}function wc(){}var zd=null,Ld=null;function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,Iw=typeof clearTimeout=="function"?clearTimeout:void 0,Zh=typeof Promise=="function"?Promise:void 0,Fw=typeof queueMicrotask=="function"?queueMicrotask:typeof Zh<"u"?function(t){return Zh.resolve(null).then(t).catch(Bw)}:Md;function Bw(t){setTimeout(function(){throw t})}function Ou(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Na(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Na(e)}function hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var _s=Math.random().toString(36).slice(2),ln="__reactFiber$"+_s,La="__reactProps$"+_s,Dn="__reactContainer$"+_s,Dd="__reactEvents$"+_s,Hw="__reactListeners$"+_s,Ww="__reactHandles$"+_s;function Vi(t){var e=t[ln];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Dn]||r[ln]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Jh(t);t!==null;){if(r=t[ln])return r;t=Jh(t)}return e}t=r,r=t.parentNode}return null}function rl(t){return t=t[ln]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Do(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function tu(t){return t[La]||null}var Id=[],Io=-1;function Ai(t){return{current:t}}function _e(t){0>Io||(t.current=Id[Io],Id[Io]=null,Io--)}function ye(t,e){Io++,Id[Io]=t.current,t.current=e}var Si={},At=Ai(Si),$t=Ai(!1),ao=Si;function as(t,e){var r=t.type.contextTypes;if(!r)return Si;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function bc(){_e($t),_e(At)}function eg(t,e,r){if(At.current!==Si)throw Error(L(168));ye(At,e),ye($t,r)}function F0(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(L(108,Cy(t)||"Unknown",i));return Me({},r,n)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,ao=At.current,ye(At,t),ye($t,$t.current),!0}function tg(t,e,r){var n=t.stateNode;if(!n)throw Error(L(169));r?(t=F0(t,e,ao),n.__reactInternalMemoizedMergedChildContext=t,_e($t),_e(At),ye(At,t)):_e($t),ye($t,r)}var jn=null,ru=!1,Mu=!1;function B0(t){jn===null?jn=[t]:jn.push(t)}function Uw(t){ru=!0,B0(t)}function Ri(){if(!Mu&&jn!==null){Mu=!0;var t=0,e=he;try{var r=jn;for(he=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}jn=null,ru=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),d0(Gf,Ri),i}finally{he=e,Mu=!1}}return null}var Fo=[],Bo=0,kc=null,Sc=0,Er=[],jr=0,lo=null,Rn=1,Pn="";function Bi(t,e){Fo[Bo++]=Sc,Fo[Bo++]=kc,kc=t,Sc=e}function H0(t,e,r){Er[jr++]=Rn,Er[jr++]=Pn,Er[jr++]=lo,lo=t;var n=Rn;t=Pn;var i=32-$r(n)-1;n&=~(1<<i),r+=1;var o=32-$r(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Rn=1<<32-$r(e)+i|r<<i|n,Pn=o+t}else Rn=1<<o|r<<i|n,Pn=t}function tp(t){t.return!==null&&(Bi(t,1),H0(t,1,0))}function rp(t){for(;t===kc;)kc=Fo[--Bo],Fo[Bo]=null,Sc=Fo[--Bo],Fo[Bo]=null;for(;t===lo;)lo=Er[--jr],Er[jr]=null,Pn=Er[--jr],Er[jr]=null,Rn=Er[--jr],Er[jr]=null}var vr=null,hr=null,Ee=!1,Xr=null;function W0(t,e){var r=Rr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function rg(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vr=t,hr=hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vr=t,hr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=lo!==null?{id:Rn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Rr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,vr=t,hr=null,!0):!1;default:return!1}}function Fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bd(t){if(Ee){var e=hr;if(e){var r=e;if(!rg(t,e)){if(Fd(t))throw Error(L(418));e=hi(r.nextSibling);var n=vr;e&&rg(t,e)?W0(n,r):(t.flags=t.flags&-4097|2,Ee=!1,vr=t)}}else{if(Fd(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ee=!1,vr=t}}}function ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vr=t}function _l(t){if(t!==vr)return!1;if(!Ee)return ng(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Od(t.type,t.memoizedProps)),e&&(e=hr)){if(Fd(t))throw U0(),Error(L(418));for(;e;)W0(t,e),e=hi(e.nextSibling)}if(ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){hr=hi(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}hr=null}}else hr=vr?hi(t.stateNode.nextSibling):null;return!0}function U0(){for(var t=hr;t;)t=hi(t.nextSibling)}function ls(){hr=vr=null,Ee=!1}function np(t){Xr===null?Xr=[t]:Xr.push(t)}var Yw=Un.ReactCurrentBatchConfig;function Ls(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(L(309));var n=r.stateNode}if(!n)throw Error(L(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(L(284));if(!r._owner)throw Error(L(290,t))}return t}function kl(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ig(t){var e=t._init;return e(t._payload)}function Y0(t){function e(v,x){if(t){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function r(v,x){if(!t)return null;for(;x!==null;)e(v,x),x=x.sibling;return null}function n(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function i(v,x){return v=vi(v,x),v.index=0,v.sibling=null,v}function o(v,x,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function s(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,x,y,_){return x===null||x.tag!==6?(x=Uu(y,v.mode,_),x.return=v,x):(x=i(x,y),x.return=v,x)}function l(v,x,y,_){var k=y.type;return k===zo?d(v,x,y.props.children,_,y.key):x!==null&&(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ei&&ig(k)===x.type)?(_=i(x,y.props),_.ref=Ls(v,x,y),_.return=v,_):(_=Jl(y.type,y.key,y.props,null,v.mode,_),_.ref=Ls(v,x,y),_.return=v,_)}function u(v,x,y,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Yu(y,v.mode,_),x.return=v,x):(x=i(x,y.children||[]),x.return=v,x)}function d(v,x,y,_,k){return x===null||x.tag!==7?(x=Zi(y,v.mode,_,k),x.return=v,x):(x=i(x,y),x.return=v,x)}function f(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Uu(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fl:return y=Jl(x.type,x.key,x.props,null,v.mode,y),y.ref=Ls(v,null,x),y.return=v,y;case Po:return x=Yu(x,v.mode,y),x.return=v,x;case ei:var _=x._init;return f(v,_(x._payload),y)}if(Ys(x)||Ns(x))return x=Zi(x,v.mode,y,null),x.return=v,x;kl(v,x)}return null}function p(v,x,y,_){var k=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(v,x,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return y.key===k?l(v,x,y,_):null;case Po:return y.key===k?u(v,x,y,_):null;case ei:return k=y._init,p(v,x,k(y._payload),_)}if(Ys(y)||Ns(y))return k!==null?null:d(v,x,y,_,null);kl(v,y)}return null}function h(v,x,y,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(y)||null,a(x,v,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:return v=v.get(_.key===null?y:_.key)||null,l(x,v,_,k);case Po:return v=v.get(_.key===null?y:_.key)||null,u(x,v,_,k);case ei:var E=_._init;return h(v,x,y,E(_._payload),k)}if(Ys(_)||Ns(_))return v=v.get(y)||null,d(x,v,_,k,null);kl(x,_)}return null}function m(v,x,y,_){for(var k=null,E=null,C=x,T=x=0,j=null;C!==null&&T<y.length;T++){C.index>T?(j=C,C=null):j=C.sibling;var N=p(v,C,y[T],_);if(N===null){C===null&&(C=j);break}t&&C&&N.alternate===null&&e(v,C),x=o(N,x,T),E===null?k=N:E.sibling=N,E=N,C=j}if(T===y.length)return r(v,C),Ee&&Bi(v,T),k;if(C===null){for(;T<y.length;T++)C=f(v,y[T],_),C!==null&&(x=o(C,x,T),E===null?k=C:E.sibling=C,E=C);return Ee&&Bi(v,T),k}for(C=n(v,C);T<y.length;T++)j=h(C,v,T,y[T],_),j!==null&&(t&&j.alternate!==null&&C.delete(j.key===null?T:j.key),x=o(j,x,T),E===null?k=j:E.sibling=j,E=j);return t&&C.forEach(function(M){return e(v,M)}),Ee&&Bi(v,T),k}function g(v,x,y,_){var k=Ns(y);if(typeof k!="function")throw Error(L(150));if(y=k.call(y),y==null)throw Error(L(151));for(var E=k=null,C=x,T=x=0,j=null,N=y.next();C!==null&&!N.done;T++,N=y.next()){C.index>T?(j=C,C=null):j=C.sibling;var M=p(v,C,N.value,_);if(M===null){C===null&&(C=j);break}t&&C&&M.alternate===null&&e(v,C),x=o(M,x,T),E===null?k=M:E.sibling=M,E=M,C=j}if(N.done)return r(v,C),Ee&&Bi(v,T),k;if(C===null){for(;!N.done;T++,N=y.next())N=f(v,N.value,_),N!==null&&(x=o(N,x,T),E===null?k=N:E.sibling=N,E=N);return Ee&&Bi(v,T),k}for(C=n(v,C);!N.done;T++,N=y.next())N=h(C,v,T,N.value,_),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?T:N.key),x=o(N,x,T),E===null?k=N:E.sibling=N,E=N);return t&&C.forEach(function(R){return e(v,R)}),Ee&&Bi(v,T),k}function w(v,x,y,_){if(typeof y=="object"&&y!==null&&y.type===zo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:e:{for(var k=y.key,E=x;E!==null;){if(E.key===k){if(k=y.type,k===zo){if(E.tag===7){r(v,E.sibling),x=i(E,y.props.children),x.return=v,v=x;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ei&&ig(k)===E.type){r(v,E.sibling),x=i(E,y.props),x.ref=Ls(v,E,y),x.return=v,v=x;break e}r(v,E);break}else e(v,E);E=E.sibling}y.type===zo?(x=Zi(y.props.children,v.mode,_,y.key),x.return=v,v=x):(_=Jl(y.type,y.key,y.props,null,v.mode,_),_.ref=Ls(v,x,y),_.return=v,v=_)}return s(v);case Po:e:{for(E=y.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){r(v,x.sibling),x=i(x,y.children||[]),x.return=v,v=x;break e}else{r(v,x);break}else e(v,x);x=x.sibling}x=Yu(y,v.mode,_),x.return=v,v=x}return s(v);case ei:return E=y._init,w(v,x,E(y._payload),_)}if(Ys(y))return m(v,x,y,_);if(Ns(y))return g(v,x,y,_);kl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(r(v,x.sibling),x=i(x,y),x.return=v,v=x):(r(v,x),x=Uu(y,v.mode,_),x.return=v,v=x),s(v)):r(v,x)}return w}var cs=Y0(!0),V0=Y0(!1),Tc=Ai(null),Cc=null,Ho=null,ip=null;function op(){ip=Ho=Cc=null}function sp(t){var e=Tc.current;_e(Tc),t._currentValue=e}function Hd(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Qo(t,e){Cc=t,ip=Ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function Mr(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},Ho===null){if(Cc===null)throw Error(L(308));Ho=t,Cc.dependencies={lanes:0,firstContext:t}}else Ho=Ho.next=t;return e}var Gi=null;function ap(t){Gi===null?Gi=[t]:Gi.push(t)}function G0(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,ap(e)):(r.next=i.next,i.next=r),e.interleaved=r,In(t,n)}function In(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var ti=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ue&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,In(t,r)}return i=n.interleaved,i===null?(e.next=e,ap(n)):(e.next=i.next,i.next=e),n.interleaved=e,In(t,r)}function ql(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,qf(t,r)}}function og(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ec(t,e,r,n){var i=t.updateQueue;ti=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var p=a.lane,h=a.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,g=a;switch(p=e,h=r,g.tag){case 1:if(m=g.payload,typeof m=="function"){f=m.call(h,f,p);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,p=typeof m=="function"?m.call(h,f,p):m,p==null)break e;f=Me({},f,p);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);uo|=s,t.lanes=s,t.memoizedState=f}}function sg(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(L(191,i));i.call(n)}}}var nl={},pn=Ai(nl),Oa=Ai(nl),Ma=Ai(nl);function qi(t){if(t===nl)throw Error(L(174));return t}function cp(t,e){switch(ye(Ma,e),ye(Oa,t),ye(pn,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}_e(pn),ye(pn,e)}function us(){_e(pn),_e(Oa),_e(Ma)}function X0(t){qi(Ma.current);var e=qi(pn.current),r=bd(e,t.type);e!==r&&(ye(Oa,t),ye(pn,r))}function up(t){Oa.current===t&&(_e(pn),_e(Oa))}var Re=Ai(0);function jc(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function dp(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var Xl=Un.ReactCurrentDispatcher,Iu=Un.ReactCurrentBatchConfig,co=0,Le=null,et=null,at=null,Nc=!1,sa=!1,Da=0,Vw=0;function _t(){throw Error(L(321))}function fp(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Zr(t[r],e[r]))return!1;return!0}function pp(t,e,r,n,i,o){if(co=o,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?Kw:$w,t=r(n,i),sa){o=0;do{if(sa=!1,Da=0,25<=o)throw Error(L(301));o+=1,at=et=null,e.updateQueue=null,Xl.current=Qw,t=r(n,i)}while(sa)}if(Xl.current=Ac,e=et!==null&&et.next!==null,co=0,at=et=Le=null,Nc=!1,e)throw Error(L(300));return t}function hp(){var t=Da!==0;return Da=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Le.memoizedState=at=t:at=at.next=t,at}function Dr(){if(et===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?Le.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(L(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?Le.memoizedState=at=t:at=at.next=t}return at}function Ia(t,e){return typeof e=="function"?e(t):e}function Fu(t){var e=Dr(),r=e.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=t;var n=et,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((co&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=n):l=l.next=f,Le.lanes|=d,uo|=d}u=u.next}while(u!==null&&u!==o);l===null?s=n:l.next=a,Zr(n,e.memoizedState)||(Kt=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,Le.lanes|=o,uo|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Bu(t){var e=Dr(),r=e.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Zr(o,e.memoizedState)||(Kt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function K0(){}function $0(t,e){var r=Le,n=Dr(),i=e(),o=!Zr(n.memoizedState,i);if(o&&(n.memoizedState=i,Kt=!0),n=n.queue,gp(J0.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||at!==null&&at.memoizedState.tag&1){if(r.flags|=2048,Fa(9,Z0.bind(null,r,n,i,e),void 0,null),lt===null)throw Error(L(349));co&30||Q0(r,e,i)}return i}function Q0(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Z0(t,e,r,n){e.value=r,e.getSnapshot=n,ex(e)&&tx(t)}function J0(t,e,r){return r(function(){ex(e)&&tx(t)})}function ex(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Zr(t,r)}catch{return!0}}function tx(t){var e=In(t,1);e!==null&&Qr(e,t,1,-1)}function ag(t){var e=on();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=Xw.bind(null,Le,t),[e.memoizedState,t]}function Fa(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function rx(){return Dr().memoizedState}function Kl(t,e,r,n){var i=on();Le.flags|=t,i.memoizedState=Fa(1|e,r,void 0,n===void 0?null:n)}function nu(t,e,r,n){var i=Dr();n=n===void 0?null:n;var o=void 0;if(et!==null){var s=et.memoizedState;if(o=s.destroy,n!==null&&fp(n,s.deps)){i.memoizedState=Fa(e,r,o,n);return}}Le.flags|=t,i.memoizedState=Fa(1|e,r,o,n)}function lg(t,e){return Kl(8390656,8,t,e)}function gp(t,e){return nu(2048,8,t,e)}function nx(t,e){return nu(4,2,t,e)}function ix(t,e){return nu(4,4,t,e)}function ox(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sx(t,e,r){return r=r!=null?r.concat([t]):null,nu(4,4,ox.bind(null,e,t),r)}function mp(){}function ax(t,e){var r=Dr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&fp(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function lx(t,e){var r=Dr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&fp(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function cx(t,e,r){return co&21?(Zr(r,e)||(r=h0(),Le.lanes|=r,uo|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=r)}function Gw(t,e){var r=he;he=r!==0&&4>r?r:4,t(!0);var n=Iu.transition;Iu.transition={};try{t(!1),e()}finally{he=r,Iu.transition=n}}function ux(){return Dr().memoizedState}function qw(t,e,r){var n=xi(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},dx(t))fx(e,r);else if(r=G0(t,e,r,n),r!==null){var i=Wt();Qr(r,t,n,i),px(r,e,n)}}function Xw(t,e,r){var n=xi(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(dx(t))fx(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,r);if(i.hasEagerState=!0,i.eagerState=a,Zr(a,s)){var l=e.interleaved;l===null?(i.next=i,ap(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=G0(t,e,i,n),r!==null&&(i=Wt(),Qr(r,t,n,i),px(r,e,n))}}function dx(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function fx(t,e){sa=Nc=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function px(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,qf(t,r)}}var Ac={readContext:Mr,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Kw={readContext:Mr,useCallback:function(t,e){return on().memoizedState=[t,e===void 0?null:e],t},useContext:Mr,useEffect:lg,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Kl(4194308,4,ox.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Kl(4,2,t,e)},useMemo:function(t,e){var r=on();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=on();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=qw.bind(null,Le,t),[n.memoizedState,t]},useRef:function(t){var e=on();return t={current:t},e.memoizedState=t},useState:ag,useDebugValue:mp,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=ag(!1),e=t[0];return t=Gw.bind(null,t[1]),on().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Le,i=on();if(Ee){if(r===void 0)throw Error(L(407));r=r()}else{if(r=e(),lt===null)throw Error(L(349));co&30||Q0(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,lg(J0.bind(null,n,o,t),[t]),n.flags|=2048,Fa(9,Z0.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=on(),e=lt.identifierPrefix;if(Ee){var r=Pn,n=Rn;r=(n&~(1<<32-$r(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Da++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Vw++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$w={readContext:Mr,useCallback:ax,useContext:Mr,useEffect:gp,useImperativeHandle:sx,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:lx,useReducer:Fu,useRef:rx,useState:function(){return Fu(Ia)},useDebugValue:mp,useDeferredValue:function(t){var e=Dr();return cx(e,et.memoizedState,t)},useTransition:function(){var t=Fu(Ia)[0],e=Dr().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:$0,useId:ux,unstable_isNewReconciler:!1},Qw={readContext:Mr,useCallback:ax,useContext:Mr,useEffect:gp,useImperativeHandle:sx,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:lx,useReducer:Bu,useRef:rx,useState:function(){return Bu(Ia)},useDebugValue:mp,useDeferredValue:function(t){var e=Dr();return et===null?e.memoizedState=t:cx(e,et.memoizedState,t)},useTransition:function(){var t=Bu(Ia)[0],e=Dr().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:$0,useId:ux,unstable_isNewReconciler:!1};function Gr(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Wd(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Me({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var iu={isMounted:function(t){return(t=t._reactInternals)?vo(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Wt(),i=xi(t),o=Ln(n,i);o.payload=e,r!=null&&(o.callback=r),e=gi(t,o,i),e!==null&&(Qr(e,t,i,n),ql(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Wt(),i=xi(t),o=Ln(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=gi(t,o,i),e!==null&&(Qr(e,t,i,n),ql(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Wt(),n=xi(t),i=Ln(r,n);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,n),e!==null&&(Qr(e,t,n,r),ql(e,t,n))}};function cg(t,e,r,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ra(r,n)||!Ra(i,o):!0}function hx(t,e,r){var n=!1,i=Si,o=e.contextType;return typeof o=="object"&&o!==null?o=Mr(o):(i=Qt(e)?ao:At.current,n=e.contextTypes,o=(n=n!=null)?as(t,i):Si),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function ug(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function Ud(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},lp(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Mr(o):(o=Qt(e)?ao:At.current,i.context=as(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Wd(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&iu.enqueueReplaceState(i,i.state,null),Ec(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,e){try{var r="",n=e;do r+=Ty(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Hu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Yd(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Zw=typeof WeakMap=="function"?WeakMap:Map;function gx(t,e,r){r=Ln(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Pc||(Pc=!0,ef=n),Yd(t,e)},r}function mx(t,e,r){r=Ln(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Yd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Yd(t,e),typeof n!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function dg(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new Zw;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=fb.bind(null,t,e,r),e.then(t,t))}function fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pg(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Ln(-1,1),e.tag=2,gi(r,e,1))),r.lanes|=1),t)}var Jw=Un.ReactCurrentOwner,Kt=!1;function Dt(t,e,r,n){e.child=t===null?V0(e,null,r,n):cs(e,t.child,r,n)}function hg(t,e,r,n,i){r=r.render;var o=e.ref;return Qo(e,i),n=pp(t,e,r,n,o,i),r=hp(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ee&&r&&tp(e),e.flags|=1,Dt(t,e,n,i),e.child)}function gg(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!Sp(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,xx(t,e,o,n,i)):(t=Jl(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ra,r(s,n)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=vi(o,n),t.ref=e.ref,t.return=e,e.child=t}function xx(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(Ra(o,n)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return Vd(t,e,r,n,i)}function vx(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Uo,lr),lr|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Uo,lr),lr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ye(Uo,lr),lr|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,ye(Uo,lr),lr|=n;return Dt(t,e,i,r),e.child}function yx(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Vd(t,e,r,n,i){var o=Qt(r)?ao:At.current;return o=as(e,o),Qo(e,i),r=pp(t,e,r,n,o,i),n=hp(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ee&&n&&tp(e),e.flags|=1,Dt(t,e,r,i),e.child)}function mg(t,e,r,n,i){if(Qt(r)){var o=!0;_c(e)}else o=!1;if(Qo(e,i),e.stateNode===null)$l(t,e),hx(e,r,n),Ud(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Mr(u):(u=Qt(r)?ao:At.current,u=as(e,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==u)&&ug(e,s,n,u),ti=!1;var p=e.memoizedState;s.state=p,Ec(e,n,s,i),l=e.memoizedState,a!==n||p!==l||$t.current||ti?(typeof d=="function"&&(Wd(e,r,d,n),l=e.memoizedState),(a=ti||cg(e,r,a,n,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),s.props=n,s.state=l,s.context=u,n=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,q0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Gr(e.type,a),s.props=u,f=e.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Mr(l):(l=Qt(r)?ao:At.current,l=as(e,l));var h=r.getDerivedStateFromProps;(d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&ug(e,s,n,l),ti=!1,p=e.memoizedState,s.state=p,Ec(e,n,s,i);var m=e.memoizedState;a!==f||p!==m||$t.current||ti?(typeof h=="function"&&(Wd(e,r,h,n),m=e.memoizedState),(u=ti||cg(e,r,u,n,p,m,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=m),s.props=n,s.state=m,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),n=!1)}return Gd(t,e,r,n,o,i)}function Gd(t,e,r,n,i,o){yx(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&tg(e,r,!1),Fn(t,e,o);n=e.stateNode,Jw.current=e;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=cs(e,t.child,null,o),e.child=cs(e,null,a,o)):Dt(t,e,a,o),e.memoizedState=n.state,i&&tg(e,r,!0),e.child}function wx(t){var e=t.stateNode;e.pendingContext?eg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eg(t,e.context,!1),cp(t,e.containerInfo)}function xg(t,e,r,n,i){return ls(),np(i),e.flags|=256,Dt(t,e,r,n),e.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function bx(t,e,r){var n=e.pendingProps,i=Re.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Re,i&1),t===null)return Bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=au(s,n,0,null),t=Zi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Xd(r),e.memoizedState=qd,t):xp(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eb(t,e,s,n,a,i,r);if(o){o=n.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=vi(i,l),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=vi(a,o):(o=Zi(o,s,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?Xd(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~r,e.memoizedState=qd,n}return o=t.child,t=o.sibling,n=vi(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function xp(t,e){return e=au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sl(t,e,r,n){return n!==null&&np(n),cs(e,t.child,null,r),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eb(t,e,r,n,i,o,s){if(r)return e.flags&256?(e.flags&=-257,n=Hu(Error(L(422))),Sl(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=au({mode:"visible",children:n.children},i,0,null),o=Zi(o,i,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&cs(e,t.child,null,s),e.child.memoizedState=Xd(s),e.memoizedState=qd,o);if(!(e.mode&1))return Sl(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,o=Error(L(419)),n=Hu(o,n,void 0),Sl(t,e,s,n)}if(a=(s&t.childLanes)!==0,Kt||a){if(n=lt,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,In(t,i),Qr(n,t,i,-1))}return kp(),n=Hu(Error(L(421))),Sl(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pb.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,hr=hi(i.nextSibling),vr=e,Ee=!0,Xr=null,t!==null&&(Er[jr++]=Rn,Er[jr++]=Pn,Er[jr++]=lo,Rn=t.id,Pn=t.overflow,lo=e),e=xp(e,n.children),e.flags|=4096,e)}function vg(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Hd(t.return,e,r)}function Wu(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function _x(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(Dt(t,e,n.children,r),n=Re.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,r,e);else if(t.tag===19)vg(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ye(Re,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&jc(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Wu(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jc(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Wu(e,!0,r,null,o);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),uo|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,r=vi(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=vi(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function tb(t,e,r){switch(e.tag){case 3:wx(e),ls();break;case 5:X0(e);break;case 1:Qt(e.type)&&_c(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;ye(Tc,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ye(Re,Re.current&1),e.flags|=128,null):r&e.child.childLanes?bx(t,e,r):(ye(Re,Re.current&1),t=Fn(t,e,r),t!==null?t.sibling:null);ye(Re,Re.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return _x(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Re,Re.current),n)break;return null;case 22:case 23:return e.lanes=0,vx(t,e,r)}return Fn(t,e,r)}var kx,Kd,Sx,Tx;kx=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Kd=function(){};Sx=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,qi(pn.current);var o=null;switch(r){case"input":i=xd(t,i),n=xd(t,n),o=[];break;case"select":i=Me({},i,{value:void 0}),n=Me({},n,{value:void 0}),o=[];break;case"textarea":i=wd(t,i),n=wd(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=wc)}_d(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var l=n[u];if(a=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Tx=function(t,e,r,n){r!==n&&(e.flags|=4)};function Os(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function rb(t,e,r){var n=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return Qt(e.type)&&bc(),kt(e),null;case 3:return n=e.stateNode,us(),_e($t),_e(At),dp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xr!==null&&(nf(Xr),Xr=null))),Kd(t,e),kt(e),null;case 5:up(e);var i=qi(Ma.current);if(r=e.type,t!==null&&e.stateNode!=null)Sx(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(L(166));return kt(e),null}if(t=qi(pn.current),_l(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[ln]=e,n[La]=o,t=(e.mode&1)!==0,r){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(i=0;i<Gs.length;i++)be(Gs[i],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":Eh(n,o),be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},be("invalid",n);break;case"textarea":Nh(n,o),be("invalid",n)}_d(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?n.textContent!==a&&(o.suppressHydrationWarning!==!0&&bl(n.textContent,a,t),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&bl(n.textContent,a,t),i=["children",""+a]):Sa.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&be("scroll",n)}switch(r){case"input":pl(n),jh(n,o,!0);break;case"textarea":pl(n),Ah(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=wc)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[ln]=e,t[La]=n,kx(t,e,!1,!1),e.stateNode=t;e:{switch(s=kd(r,n),r){case"dialog":be("cancel",t),be("close",t),i=n;break;case"iframe":case"object":case"embed":be("load",t),i=n;break;case"video":case"audio":for(i=0;i<Gs.length;i++)be(Gs[i],t);i=n;break;case"source":be("error",t),i=n;break;case"img":case"image":case"link":be("error",t),be("load",t),i=n;break;case"details":be("toggle",t),i=n;break;case"input":Eh(t,n),i=xd(t,n),be("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Me({},n,{value:void 0}),be("invalid",t);break;case"textarea":Nh(t,n),i=wd(t,n),be("invalid",t);break;default:i=n}_d(r,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?r0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e0(t,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Sa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&be("scroll",t):l!=null&&Hf(t,o,l,s))}switch(r){case"input":pl(t),jh(t,n,!1);break;case"textarea":pl(t),Ah(t);break;case"option":n.value!=null&&t.setAttribute("value",""+ki(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?qo(t,!!n.multiple,o,!1):n.defaultValue!=null&&qo(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Tx(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(L(166));if(r=qi(Ma.current),qi(pn.current),_l(e)){if(n=e.stateNode,r=e.memoizedProps,n[ln]=e,(o=n.nodeValue!==r)&&(t=vr,t!==null))switch(t.tag){case 3:bl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ln]=e,e.stateNode=n}return kt(e),null;case 13:if(_e(Re),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&hr!==null&&e.mode&1&&!(e.flags&128))U0(),ls(),e.flags|=98560,o=!1;else if(o=_l(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(L(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[ln]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),o=!1}else Xr!==null&&(nf(Xr),Xr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?rt===0&&(rt=3):kp())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return us(),Kd(t,e),t===null&&Pa(e.stateNode.containerInfo),kt(e),null;case 10:return sp(e.type._context),kt(e),null;case 17:return Qt(e.type)&&bc(),kt(e),null;case 19:if(_e(Re),o=e.memoizedState,o===null)return kt(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)Os(o,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=jc(t),s!==null){for(e.flags|=128,Os(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ye(Re,Re.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ge()>fs&&(e.flags|=128,n=!0,Os(o,!1),e.lanes=4194304)}else{if(!n)if(t=jc(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Os(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ee)return kt(e),null}else 2*Ge()-o.renderingStartTime>fs&&r!==1073741824&&(e.flags|=128,n=!0,Os(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(r=o.last,r!==null?r.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ge(),e.sibling=null,r=Re.current,ye(Re,n?r&1|2:r&1),e):(kt(e),null);case 22:case 23:return _p(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?lr&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function nb(t,e){switch(rp(e),e.tag){case 1:return Qt(e.type)&&bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),_e($t),_e(At),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return up(e),null;case 13:if(_e(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Re),null;case 4:return us(),null;case 10:return sp(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var Tl=!1,Ct=!1,ib=typeof WeakSet=="function"?WeakSet:Set,I=null;function Wo(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Fe(t,e,n)}else r.current=null}function $d(t,e,r){try{r()}catch(n){Fe(t,e,n)}}var yg=!1;function ob(t,e){if(zd=xc,t=A0(),ep(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,p=null;t:for(;;){for(var h;f!==r||i!==0&&f.nodeType!==3||(a=s+i),f!==o||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===t)break t;if(p===r&&++u===i&&(a=s),p===o&&++d===n&&(l=s),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ld={focusedElem:t,selectionRange:r},xc=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,w=m.memoizedState,v=e.stateNode,x=v.getSnapshotBeforeUpdate(e.elementType===e.type?g:Gr(e.type,g),w);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(_){Fe(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return m=yg,yg=!1,m}function aa(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&$d(e,r,o)}i=i.next}while(i!==n)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function Qd(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Cx(t){var e=t.alternate;e!==null&&(t.alternate=null,Cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[La],delete e[Dd],delete e[Hw],delete e[Ww])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ex(t){return t.tag===5||t.tag===3||t.tag===4}function wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=wc));else if(n!==4&&(t=t.child,t!==null))for(Zd(t,e,r),t=t.sibling;t!==null;)Zd(t,e,r),t=t.sibling}function Jd(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Jd(t,e,r),t=t.sibling;t!==null;)Jd(t,e,r),t=t.sibling}var ft=null,qr=!1;function Qn(t,e,r){for(r=r.child;r!==null;)jx(t,e,r),r=r.sibling}function jx(t,e,r){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Qc,r)}catch{}switch(r.tag){case 5:Ct||Wo(r,e);case 6:var n=ft,i=qr;ft=null,Qn(t,e,r),ft=n,qr=i,ft!==null&&(qr?(t=ft,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):ft.removeChild(r.stateNode));break;case 18:ft!==null&&(qr?(t=ft,r=r.stateNode,t.nodeType===8?Ou(t.parentNode,r):t.nodeType===1&&Ou(t,r),Na(t)):Ou(ft,r.stateNode));break;case 4:n=ft,i=qr,ft=r.stateNode.containerInfo,qr=!0,Qn(t,e,r),ft=n,qr=i;break;case 0:case 11:case 14:case 15:if(!Ct&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$d(r,e,s),i=i.next}while(i!==n)}Qn(t,e,r);break;case 1:if(!Ct&&(Wo(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){Fe(r,e,a)}Qn(t,e,r);break;case 21:Qn(t,e,r);break;case 22:r.mode&1?(Ct=(n=Ct)||r.memoizedState!==null,Qn(t,e,r),Ct=n):Qn(t,e,r);break;default:Qn(t,e,r)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ib),e.forEach(function(n){var i=hb.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Yr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,qr=!1;break e;case 3:ft=a.stateNode.containerInfo,qr=!0;break e;case 4:ft=a.stateNode.containerInfo,qr=!0;break e}a=a.return}if(ft===null)throw Error(L(160));jx(o,s,i),ft=null,qr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nx(e,t),e=e.sibling}function Nx(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yr(e,t),rn(t),n&4){try{aa(3,t,t.return),ou(3,t)}catch(g){Fe(t,t.return,g)}try{aa(5,t,t.return)}catch(g){Fe(t,t.return,g)}}break;case 1:Yr(e,t),rn(t),n&512&&r!==null&&Wo(r,r.return);break;case 5:if(Yr(e,t),rn(t),n&512&&r!==null&&Wo(r,r.return),t.flags&32){var i=t.stateNode;try{Ta(i,"")}catch(g){Fe(t,t.return,g)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=r!==null?r.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Qm(i,o),kd(a,s);var u=kd(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?r0(i,f):d==="dangerouslySetInnerHTML"?e0(i,f):d==="children"?Ta(i,f):Hf(i,d,f,u)}switch(a){case"input":vd(i,o);break;case"textarea":Zm(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?qo(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?qo(i,!!o.multiple,o.defaultValue,!0):qo(i,!!o.multiple,o.multiple?[]:"",!1))}i[La]=o}catch(g){Fe(t,t.return,g)}}break;case 6:if(Yr(e,t),rn(t),n&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){Fe(t,t.return,g)}}break;case 3:if(Yr(e,t),rn(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(g){Fe(t,t.return,g)}break;case 4:Yr(e,t),rn(t);break;case 13:Yr(e,t),rn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wp=Ge())),n&4&&bg(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Ct=(u=Ct)||d,Yr(e,t),Ct=u):Yr(e,t),rn(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(I=t,d=t.child;d!==null;){for(f=I=d;I!==null;){switch(p=I,h=p.child,p.tag){case 0:case 11:case 14:case 15:aa(4,p,p.return);break;case 1:Wo(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){n=p,r=p.return;try{e=n,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(g){Fe(n,r,g)}}break;case 5:Wo(p,p.return);break;case 22:if(p.memoizedState!==null){kg(f);continue}}h!==null?(h.return=p,I=h):kg(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=t0("display",s))}catch(g){Fe(t,t.return,g)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Fe(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yr(e,t),rn(t),n&4&&bg(t);break;case 21:break;default:Yr(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Ex(r)){var n=r;break e}r=r.return}throw Error(L(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ta(i,""),n.flags&=-33);var o=wg(t);Jd(t,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,a=wg(t);Zd(t,a,s);break;default:throw Error(L(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sb(t,e,r){I=t,Ax(t)}function Ax(t,e,r){for(var n=(t.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Tl;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ct;a=Tl;var u=Ct;if(Tl=s,(Ct=l)&&!u)for(I=i;I!==null;)s=I,l=s.child,s.tag===22&&s.memoizedState!==null?Sg(i):l!==null?(l.return=s,I=l):Sg(i);for(;o!==null;)I=o,Ax(o),o=o.sibling;I=i,Tl=a,Ct=u}_g(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):_g(t)}}function _g(t){for(;I!==null;){var e=I;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ct||ou(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Ct)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Gr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&sg(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}sg(e,s,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ct||e.flags&512&&Qd(e)}catch(p){Fe(e,e.return,p)}}if(e===t){I=null;break}if(r=e.sibling,r!==null){r.return=e.return,I=r;break}I=e.return}}function kg(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var r=e.sibling;if(r!==null){r.return=e.return,I=r;break}I=e.return}}function Sg(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ou(4,e)}catch(l){Fe(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){Fe(e,i,l)}}var o=e.return;try{Qd(e)}catch(l){Fe(e,o,l)}break;case 5:var s=e.return;try{Qd(e)}catch(l){Fe(e,s,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var ab=Math.ceil,Rc=Un.ReactCurrentDispatcher,vp=Un.ReactCurrentOwner,Lr=Un.ReactCurrentBatchConfig,ue=0,lt=null,Qe=null,ht=0,lr=0,Uo=Ai(0),rt=0,Ba=null,uo=0,su=0,yp=0,la=null,Xt=null,wp=0,fs=1/0,Cn=null,Pc=!1,ef=null,mi=null,Cl=!1,oi=null,zc=0,ca=0,tf=null,Ql=-1,Zl=0;function Wt(){return ue&6?Ge():Ql!==-1?Ql:Ql=Ge()}function xi(t){return t.mode&1?ue&2&&ht!==0?ht&-ht:Yw.transition!==null?(Zl===0&&(Zl=h0()),Zl):(t=he,t!==0||(t=window.event,t=t===void 0?16:b0(t.type)),t):1}function Qr(t,e,r,n){if(50<ca)throw ca=0,tf=null,Error(L(185));el(t,r,n),(!(ue&2)||t!==lt)&&(t===lt&&(!(ue&2)&&(su|=r),rt===4&&ni(t,ht)),Zt(t,n),r===1&&ue===0&&!(e.mode&1)&&(fs=Ge()+500,ru&&Ri()))}function Zt(t,e){var r=t.callbackNode;Yy(t,e);var n=mc(t,t===lt?ht:0);if(n===0)r!==null&&zh(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&zh(r),e===1)t.tag===0?Uw(Tg.bind(null,t)):B0(Tg.bind(null,t)),Fw(function(){!(ue&6)&&Ri()}),r=null;else{switch(g0(n)){case 1:r=Gf;break;case 4:r=f0;break;case 16:r=gc;break;case 536870912:r=p0;break;default:r=gc}r=Ix(r,Rx.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Rx(t,e){if(Ql=-1,Zl=0,ue&6)throw Error(L(327));var r=t.callbackNode;if(Zo()&&t.callbackNode!==r)return null;var n=mc(t,t===lt?ht:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Lc(t,n);else{e=n;var i=ue;ue|=2;var o=zx();(lt!==t||ht!==e)&&(Cn=null,fs=Ge()+500,Qi(t,e));do try{ub();break}catch(a){Px(t,a)}while(!0);op(),Rc.current=o,ue=i,Qe!==null?e=0:(lt=null,ht=0,e=rt)}if(e!==0){if(e===2&&(i=jd(t),i!==0&&(n=i,e=rf(t,i))),e===1)throw r=Ba,Qi(t,0),ni(t,n),Zt(t,Ge()),r;if(e===6)ni(t,n);else{if(i=t.current.alternate,!(n&30)&&!lb(i)&&(e=Lc(t,n),e===2&&(o=jd(t),o!==0&&(n=o,e=rf(t,o))),e===1))throw r=Ba,Qi(t,0),ni(t,n),Zt(t,Ge()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(L(345));case 2:Hi(t,Xt,Cn);break;case 3:if(ni(t,n),(n&130023424)===n&&(e=wp+500-Ge(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Md(Hi.bind(null,t,Xt,Cn),e);break}Hi(t,Xt,Cn);break;case 4:if(ni(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-$r(n);o=1<<s,s=e[s],s>i&&(i=s),n&=~o}if(n=i,n=Ge()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ab(n/1960))-n,10<n){t.timeoutHandle=Md(Hi.bind(null,t,Xt,Cn),n);break}Hi(t,Xt,Cn);break;case 5:Hi(t,Xt,Cn);break;default:throw Error(L(329))}}}return Zt(t,Ge()),t.callbackNode===r?Rx.bind(null,t):null}function rf(t,e){var r=la;return t.current.memoizedState.isDehydrated&&(Qi(t,e).flags|=256),t=Lc(t,e),t!==2&&(e=Xt,Xt=r,e!==null&&nf(e)),t}function nf(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function lb(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Zr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ni(t,e){for(e&=~yp,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-$r(e),n=1<<r;t[r]=-1,e&=~n}}function Tg(t){if(ue&6)throw Error(L(327));Zo();var e=mc(t,0);if(!(e&1))return Zt(t,Ge()),null;var r=Lc(t,e);if(t.tag!==0&&r===2){var n=jd(t);n!==0&&(e=n,r=rf(t,n))}if(r===1)throw r=Ba,Qi(t,0),ni(t,e),Zt(t,Ge()),r;if(r===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hi(t,Xt,Cn),Zt(t,Ge()),null}function bp(t,e){var r=ue;ue|=1;try{return t(e)}finally{ue=r,ue===0&&(fs=Ge()+500,ru&&Ri())}}function fo(t){oi!==null&&oi.tag===0&&!(ue&6)&&Zo();var e=ue;ue|=1;var r=Lr.transition,n=he;try{if(Lr.transition=null,he=1,t)return t()}finally{he=n,Lr.transition=r,ue=e,!(ue&6)&&Ri()}}function _p(){lr=Uo.current,_e(Uo)}function Qi(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Iw(r)),Qe!==null)for(r=Qe.return;r!==null;){var n=r;switch(rp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&bc();break;case 3:us(),_e($t),_e(At),dp();break;case 5:up(n);break;case 4:us();break;case 13:_e(Re);break;case 19:_e(Re);break;case 10:sp(n.type._context);break;case 22:case 23:_p()}r=r.return}if(lt=t,Qe=t=vi(t.current,null),ht=lr=e,rt=0,Ba=null,yp=su=uo=0,Xt=la=null,Gi!==null){for(e=0;e<Gi.length;e++)if(r=Gi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}Gi=null}return t}function Px(t,e){do{var r=Qe;try{if(op(),Xl.current=Ac,Nc){for(var n=Le.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Nc=!1}if(co=0,at=et=Le=null,sa=!1,Da=0,vp.current=null,r===null||r.return===null){rt=1,Ba=e,Qe=null;break}e:{var o=t,s=r.return,a=r,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=fg(s);if(h!==null){h.flags&=-257,pg(h,s,a,o,e),h.mode&1&&dg(o,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var g=new Set;g.add(l),e.updateQueue=g}else m.add(l);break e}else{if(!(e&1)){dg(o,u,e),kp();break e}l=Error(L(426))}}else if(Ee&&a.mode&1){var w=fg(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),pg(w,s,a,o,e),np(ds(l,a));break e}}o=l=ds(l,a),rt!==4&&(rt=2),la===null?la=[o]:la.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=gx(o,l,e);og(o,v);break e;case 1:a=l;var x=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(mi===null||!mi.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=mx(o,a,e);og(o,_);break e}}o=o.return}while(o!==null)}Ox(r)}catch(k){e=k,Qe===r&&r!==null&&(Qe=r=r.return);continue}break}while(!0)}function zx(){var t=Rc.current;return Rc.current=Ac,t===null?Ac:t}function kp(){(rt===0||rt===3||rt===2)&&(rt=4),lt===null||!(uo&268435455)&&!(su&268435455)||ni(lt,ht)}function Lc(t,e){var r=ue;ue|=2;var n=zx();(lt!==t||ht!==e)&&(Cn=null,Qi(t,e));do try{cb();break}catch(i){Px(t,i)}while(!0);if(op(),ue=r,Rc.current=n,Qe!==null)throw Error(L(261));return lt=null,ht=0,rt}function cb(){for(;Qe!==null;)Lx(Qe)}function ub(){for(;Qe!==null&&!Oy();)Lx(Qe)}function Lx(t){var e=Dx(t.alternate,t,lr);t.memoizedProps=t.pendingProps,e===null?Ox(t):Qe=e,vp.current=null}function Ox(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=nb(r,e),r!==null){r.flags&=32767,Qe=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Qe=null;return}}else if(r=rb(r,e,lr),r!==null){Qe=r;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);rt===0&&(rt=5)}function Hi(t,e,r){var n=he,i=Lr.transition;try{Lr.transition=null,he=1,db(t,e,r,n)}finally{Lr.transition=i,he=n}return null}function db(t,e,r,n){do Zo();while(oi!==null);if(ue&6)throw Error(L(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(Vy(t,o),t===lt&&(Qe=lt=null,ht=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Cl||(Cl=!0,Ix(gc,function(){return Zo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Lr.transition,Lr.transition=null;var s=he;he=1;var a=ue;ue|=4,vp.current=null,ob(t,r),Nx(r,t),Rw(Ld),xc=!!zd,Ld=zd=null,t.current=r,sb(r),My(),ue=a,he=s,Lr.transition=o}else t.current=r;if(Cl&&(Cl=!1,oi=t,zc=i),o=t.pendingLanes,o===0&&(mi=null),Fy(r.stateNode),Zt(t,Ge()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Pc)throw Pc=!1,t=ef,ef=null,t;return zc&1&&t.tag!==0&&Zo(),o=t.pendingLanes,o&1?t===tf?ca++:(ca=0,tf=t):ca=0,Ri(),null}function Zo(){if(oi!==null){var t=g0(zc),e=Lr.transition,r=he;try{if(Lr.transition=null,he=16>t?16:t,oi===null)var n=!1;else{if(t=oi,oi=null,zc=0,ue&6)throw Error(L(331));var i=ue;for(ue|=4,I=t.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:aa(8,d,o)}var f=d.child;if(f!==null)f.return=d,I=f;else for(;I!==null;){d=I;var p=d.sibling,h=d.return;if(Cx(d),d===u){I=null;break}if(p!==null){p.return=h,I=p;break}I=h}}}var m=o.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:aa(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,I=v;break e}I=o.return}}var x=t.current;for(I=x;I!==null;){s=I;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,I=y;else e:for(s=x;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(k){Fe(a,a.return,k)}if(a===s){I=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,I=_;break e}I=a.return}}if(ue=i,Ri(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Qc,t)}catch{}n=!0}return n}finally{he=r,Lr.transition=e}}return!1}function Cg(t,e,r){e=ds(r,e),e=gx(t,e,1),t=gi(t,e,1),e=Wt(),t!==null&&(el(t,1,e),Zt(t,e))}function Fe(t,e,r){if(t.tag===3)Cg(t,t,r);else for(;e!==null;){if(e.tag===3){Cg(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(mi===null||!mi.has(n))){t=ds(r,t),t=mx(e,t,1),e=gi(e,t,1),t=Wt(),e!==null&&(el(e,1,t),Zt(e,t));break}}e=e.return}}function fb(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&r,lt===t&&(ht&r)===r&&(rt===4||rt===3&&(ht&130023424)===ht&&500>Ge()-wp?Qi(t,0):yp|=r),Zt(t,e)}function Mx(t,e){e===0&&(t.mode&1?(e=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):e=1);var r=Wt();t=In(t,e),t!==null&&(el(t,e,r),Zt(t,r))}function pb(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Mx(t,r)}function hb(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(L(314))}n!==null&&n.delete(e),Mx(t,r)}var Dx;Dx=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Kt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Kt=!1,tb(t,e,r);Kt=!!(t.flags&131072)}else Kt=!1,Ee&&e.flags&1048576&&H0(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;$l(t,e),t=e.pendingProps;var i=as(e,At.current);Qo(e,r),i=pp(null,e,n,t,i,r);var o=hp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(n)?(o=!0,_c(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lp(e),i.updater=iu,e.stateNode=i,i._reactInternals=e,Ud(e,n,t,r),e=Gd(null,e,n,!0,o,r)):(e.tag=0,Ee&&o&&tp(e),Dt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch($l(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=mb(n),t=Gr(n,t),i){case 0:e=Vd(null,e,n,t,r);break e;case 1:e=mg(null,e,n,t,r);break e;case 11:e=hg(null,e,n,t,r);break e;case 14:e=gg(null,e,n,Gr(n.type,t),r);break e}throw Error(L(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Gr(n,i),Vd(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Gr(n,i),mg(t,e,n,i,r);case 3:e:{if(wx(e),t===null)throw Error(L(387));n=e.pendingProps,o=e.memoizedState,i=o.element,q0(t,e),Ec(e,n,null,r);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ds(Error(L(423)),e),e=xg(t,e,n,r,i);break e}else if(n!==i){i=ds(Error(L(424)),e),e=xg(t,e,n,r,i);break e}else for(hr=hi(e.stateNode.containerInfo.firstChild),vr=e,Ee=!0,Xr=null,r=V0(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ls(),n===i){e=Fn(t,e,r);break e}Dt(t,e,n,r)}e=e.child}return e;case 5:return X0(e),t===null&&Bd(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Od(n,i)?s=null:o!==null&&Od(n,o)&&(e.flags|=32),yx(t,e),Dt(t,e,s,r),e.child;case 6:return t===null&&Bd(e),null;case 13:return bx(t,e,r);case 4:return cp(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=cs(e,null,n,r):Dt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Gr(n,i),hg(t,e,n,i,r);case 7:return Dt(t,e,e.pendingProps,r),e.child;case 8:return Dt(t,e,e.pendingProps.children,r),e.child;case 12:return Dt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ye(Tc,n._currentValue),n._currentValue=s,o!==null)if(Zr(o.value,s)){if(o.children===i.children&&!$t.current){e=Fn(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Ln(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Hd(o.return,r,e),a.lanes|=r;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Hd(s,r,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Dt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Qo(e,r),i=Mr(i),n=n(i),e.flags|=1,Dt(t,e,n,r),e.child;case 14:return n=e.type,i=Gr(n,e.pendingProps),i=Gr(n.type,i),gg(t,e,n,i,r);case 15:return xx(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Gr(n,i),$l(t,e),e.tag=1,Qt(n)?(t=!0,_c(e)):t=!1,Qo(e,r),hx(e,n,i),Ud(e,n,i,r),Gd(null,e,n,!0,t,r);case 19:return _x(t,e,r);case 22:return vx(t,e,r)}throw Error(L(156,e.tag))};function Ix(t,e){return d0(t,e)}function gb(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rr(t,e,r,n){return new gb(t,e,r,n)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mb(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===Yf)return 14}return 2}function vi(t,e){var r=t.alternate;return r===null?(r=Rr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Jl(t,e,r,n,i,o){var s=2;if(n=t,typeof t=="function")Sp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case zo:return Zi(r.children,i,o,e);case Wf:s=8,i|=8;break;case pd:return t=Rr(12,r,e,i|2),t.elementType=pd,t.lanes=o,t;case hd:return t=Rr(13,r,e,i),t.elementType=hd,t.lanes=o,t;case gd:return t=Rr(19,r,e,i),t.elementType=gd,t.lanes=o,t;case Xm:return au(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gm:s=10;break e;case qm:s=9;break e;case Uf:s=11;break e;case Yf:s=14;break e;case ei:s=16,n=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Rr(s,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function Zi(t,e,r,n){return t=Rr(7,t,n,e),t.lanes=r,t}function au(t,e,r,n){return t=Rr(22,t,n,e),t.elementType=Xm,t.lanes=r,t.stateNode={isHidden:!1},t}function Uu(t,e,r){return t=Rr(6,t,null,e),t.lanes=r,t}function Yu(t,e,r){return e=Rr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xb(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tp(t,e,r,n,i,o,s,a,l){return t=new xb(t,e,r,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Rr(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(o),t}function vb(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Fx(t){if(!t)return Si;t=t._reactInternals;e:{if(vo(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var r=t.type;if(Qt(r))return F0(t,r,e)}return e}function Bx(t,e,r,n,i,o,s,a,l){return t=Tp(r,n,!0,t,i,o,s,a,l),t.context=Fx(null),r=t.current,n=Wt(),i=xi(r),o=Ln(n,i),o.callback=e??null,gi(r,o,i),t.current.lanes=i,el(t,i,n),Zt(t,n),t}function lu(t,e,r,n){var i=e.current,o=Wt(),s=xi(i);return r=Fx(r),e.context===null?e.context=r:e.pendingContext=r,e=Ln(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=gi(i,e,s),t!==null&&(Qr(t,i,s,o),ql(t,i,s)),s}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Cp(t,e){Eg(t,e),(t=t.alternate)&&Eg(t,e)}function yb(){return null}var Hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ep(t){this._internalRoot=t}cu.prototype.render=Ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));lu(t,e,null,null)};cu.prototype.unmount=Ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fo(function(){lu(null,t,null,null)}),e[Dn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=v0();t={blockedOn:null,target:t,priority:e};for(var r=0;r<ri.length&&e!==0&&e<ri[r].priority;r++);ri.splice(r,0,t),r===0&&w0(t)}};function jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function wb(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Oc(s);o.call(u)}}var s=Bx(e,n,t,0,null,!1,!1,"",jg);return t._reactRootContainer=s,t[Dn]=s.current,Pa(t.nodeType===8?t.parentNode:t),fo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var u=Oc(l);a.call(u)}}var l=Tp(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=l,t[Dn]=l.current,Pa(t.nodeType===8?t.parentNode:t),fo(function(){lu(e,l,r,n)}),l}function du(t,e,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Oc(s);a.call(l)}}lu(e,s,t,i)}else s=wb(r,e,t,i,n);return Oc(s)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Vs(e.pendingLanes);r!==0&&(qf(e,r|1),Zt(e,Ge()),!(ue&6)&&(fs=Ge()+500,Ri()))}break;case 13:fo(function(){var n=In(t,1);if(n!==null){var i=Wt();Qr(n,t,1,i)}}),Cp(t,1)}};Xf=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var r=Wt();Qr(e,t,134217728,r)}Cp(t,134217728)}};x0=function(t){if(t.tag===13){var e=xi(t),r=In(t,e);if(r!==null){var n=Wt();Qr(r,t,e,n)}Cp(t,e)}};v0=function(){return he};y0=function(t,e){var r=he;try{return he=t,e()}finally{he=r}};Td=function(t,e,r){switch(e){case"input":if(vd(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=tu(n);if(!i)throw Error(L(90));$m(n),vd(n,i)}}}break;case"textarea":Zm(t,r);break;case"select":e=r.value,e!=null&&qo(t,!!r.multiple,e,!1)}};o0=bp;s0=fo;var bb={usingClientEntryPoint:!1,Events:[rl,Do,tu,n0,i0,bp]},Ms={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_b={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance||yb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Qc=El.inject(_b),fn=El}catch{}}kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bb;kr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(e))throw Error(L(200));return vb(t,e,null,r)};kr.createRoot=function(t,e){if(!jp(t))throw Error(L(299));var r=!1,n="",i=Hx;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tp(t,1,!1,null,null,r,!1,n,i),t[Dn]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Ep(e)};kr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=c0(e),t=t===null?null:t.stateNode,t};kr.flushSync=function(t){return fo(t)};kr.hydrate=function(t,e,r){if(!uu(e))throw Error(L(200));return du(null,t,e,!0,r)};kr.hydrateRoot=function(t,e,r){if(!jp(t))throw Error(L(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Hx;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Bx(e,null,t,1,r??null,i,!1,o,s),t[Dn]=e.current,Pa(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new cu(e)};kr.render=function(t,e,r){if(!uu(e))throw Error(L(200));return du(null,t,e,!1,r)};kr.unmountComponentAtNode=function(t){if(!uu(t))throw Error(L(40));return t._reactRootContainer?(fo(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};kr.unstable_batchedUpdates=bp;kr.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!uu(r))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return du(t,e,r,!1,n)};kr.version="18.3.1-next-f1338f8080-20240426";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(t){console.error(t)}}Wx(),Wm.exports=kr;var kb=Wm.exports,Ng=kb;dd.createRoot=Ng.createRoot,dd.hydrateRoot=Ng.hydrateRoot;/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ag="popstate";function Rg(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Sb(t={}){function e(n,i){var u;let o=(u=i.state)==null?void 0:u.masked,{pathname:s,search:a,hash:l}=o||n.location;return of("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",o?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function r(n,i){return typeof i=="string"?i:Ha(i)}return Cb(e,r,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tb(){return Math.random().toString(36).substring(2,10)}function Pg(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function of(t,e,r=null,n,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ks(e):e,state:r,key:e&&e.key||n||Tb(),unstable_mask:i}}function Ha({pathname:t="/",search:e="",hash:r=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ks(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substring(r),t=t.substring(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substring(n),t=t.substring(0,n)),t&&(e.pathname=t)}return e}function Cb(t,e,r,n={}){let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,a="POP",l=null,u=d();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function d(){return(s.state||{idx:null}).idx}function f(){a="POP";let w=d(),v=w==null?null:w-u;u=w,l&&l({action:a,location:g.location,delta:v})}function p(w,v){a="PUSH";let x=Rg(w)?w:of(g.location,w,v);u=d()+1;let y=Pg(x,u),_=g.createHref(x.unstable_mask||x);try{s.pushState(y,"",_)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(_)}o&&l&&l({action:a,location:g.location,delta:1})}function h(w,v){a="REPLACE";let x=Rg(w)?w:of(g.location,w,v);u=d();let y=Pg(x,u),_=g.createHref(x.unstable_mask||x);s.replaceState(y,"",_),o&&l&&l({action:a,location:g.location,delta:0})}function m(w){return Eb(w)}let g={get action(){return a},get location(){return t(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ag,f),l=w,()=>{i.removeEventListener(Ag,f),l=null}},createHref(w){return e(i,w)},createURL:m,encodeLocation(w){let v=m(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:h,go(w){return s.go(w)}};return g}function Eb(t,e=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:Ha(t);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Ux(t,e,r="/"){return jb(t,e,r,!1)}function jb(t,e,r,n){let i=typeof e=="string"?ks(e):e,o=Bn(i.pathname||"/",r);if(o==null)return null;let s=Yx(t);Nb(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=Bb(o);a=Ib(s[l],u,n)}return a}function Yx(t,e=[],r=[],n="",i=!1){let o=(s,a,l=i,u)=>{let d={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&l)return;Oe(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let f=hn([n,d.relativePath]),p=r.concat(d);s.children&&s.children.length>0&&(Oe(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Yx(s.children,e,p,f,l)),!(s.path==null&&!s.index)&&e.push({path:f,score:Mb(f,s.index),routesMeta:p})};return t.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))o(s,a);else for(let u of Vx(s.path))o(s,a,!0,u)}),e}function Vx(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let s=Vx(n.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Nb(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Db(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Ab=/^:[\w-]+$/,Rb=3,Pb=2,zb=1,Lb=10,Ob=-2,zg=t=>t==="*";function Mb(t,e){let r=t.split("/"),n=r.length;return r.some(zg)&&(n+=Ob),e&&(n+=Pb),r.filter(i=>!zg(i)).reduce((i,o)=>i+(Ab.test(o)?Rb:o===""?zb:Lb),n)}function Db(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function Ib(t,e,r=!1){let{routesMeta:n}=t,i={},o="/",s=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=o==="/"?e:e.slice(o.length)||"/",f=Mc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f&&u&&r&&!n[n.length-1].route.index&&(f=Mc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:hn([o,f.pathname]),pathnameBase:Yb(hn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=hn([o,f.pathnameBase]))}return s}function Mc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=Fb(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:n.reduce((u,{paramName:d,isOptional:f},p)=>{if(d==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const h=a[p];return f&&!h?u[d]=void 0:u[d]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Fb(t,e=!1,r=!0){mn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l,u,d)=>{if(n.push({paramName:a,isOptional:l!=null}),l){let f=d.charAt(u+s.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Bb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Bn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}var Hb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Wb(t,e="/"){let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?ks(t):t,o;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?o=Lg(r.substring(1),"/"):o=Lg(r,e)):o=e,{pathname:o,search:Vb(n),hash:Gb(i)}}function Lg(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Vu(t,e,r,n){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ub(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Gx(t){let e=Ub(t);return e.map((r,n)=>n===e.length-1?r.pathname:r.pathnameBase)}function Np(t,e,r,n=!1){let i;typeof t=="string"?i=ks(t):(i={...t},Oe(!i.pathname||!i.pathname.includes("?"),Vu("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Vu("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Vu("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=r;else{let f=e.length-1;if(!n&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=Wb(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var hn=t=>t.join("/").replace(/\/\/+/g,"/"),Yb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Vb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Gb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,qb=class{constructor(t,e,r,n=!1){this.status=t,this.statusText=e||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Xb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Kb(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var qx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xx(t,e){let r=t;if(typeof r!="string"||!Hb.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(qx)try{let o=new URL(window.location.href),s=r.startsWith("//")?new URL(o.protocol+r):new URL(r),a=Bn(s.pathname,e);s.origin===o.origin&&a!=null?r=a+s.search+s.hash:i=!0}catch{mn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Kx=["POST","PUT","PATCH","DELETE"];new Set(Kx);var $b=["GET",...Kx];new Set($b);var Ss=b.createContext(null);Ss.displayName="DataRouter";var fu=b.createContext(null);fu.displayName="DataRouterState";var Qb=b.createContext(!1),$x=b.createContext({isTransitioning:!1});$x.displayName="ViewTransition";var Zb=b.createContext(new Map);Zb.displayName="Fetchers";var Jb=b.createContext(null);Jb.displayName="Await";var Ir=b.createContext(null);Ir.displayName="Navigation";var il=b.createContext(null);il.displayName="Location";var vn=b.createContext({outlet:null,matches:[],isDataRoute:!1});vn.displayName="Route";var Ap=b.createContext(null);Ap.displayName="RouteError";var Qx="REACT_ROUTER_ERROR",e2="REDIRECT",t2="ROUTE_ERROR_RESPONSE";function r2(t){if(t.startsWith(`${Qx}:${e2}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function n2(t){if(t.startsWith(`${Qx}:${t2}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new qb(e.status,e.statusText,e.data)}catch{}}function i2(t,{relative:e}={}){Oe(ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=b.useContext(Ir),{hash:i,pathname:o,search:s}=sl(t,{relative:e}),a=o;return r!=="/"&&(a=o==="/"?r:hn([r,o])),n.createHref({pathname:a,search:s,hash:i})}function ol(){return b.useContext(il)!=null}function yn(){return Oe(ol(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(il).location}var Zx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Jx(t){b.useContext(Ir).static||b.useLayoutEffect(t)}function Yn(){let{isDataRoute:t}=b.useContext(vn);return t?x2():o2()}function o2(){Oe(ol(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(Ss),{basename:e,navigator:r}=b.useContext(Ir),{matches:n}=b.useContext(vn),{pathname:i}=yn(),o=JSON.stringify(Gx(n)),s=b.useRef(!1);return Jx(()=>{s.current=!0}),b.useCallback((l,u={})=>{if(mn(s.current,Zx),!s.current)return;if(typeof l=="number"){r.go(l);return}let d=Np(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:hn([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,i,t])}b.createContext(null);function ev(){let{matches:t}=b.useContext(vn),e=t[t.length-1];return e?e.params:{}}function sl(t,{relative:e}={}){let{matches:r}=b.useContext(vn),{pathname:n}=yn(),i=JSON.stringify(Gx(r));return b.useMemo(()=>Np(t,JSON.parse(i),n,e==="path"),[t,i,n,e])}function s2(t,e){return tv(t,e)}function tv(t,e,r){var w;Oe(ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=b.useContext(Ir),{matches:i}=b.useContext(vn),o=i[i.length-1],s=o?o.params:{},a=o?o.pathname:"/",l=o?o.pathnameBase:"/",u=o&&o.route;{let v=u&&u.path||"";nv(a,!u||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let d=yn(),f;if(e){let v=typeof e=="string"?ks(e):e;Oe(l==="/"||((w=v.pathname)==null?void 0:w.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${v.pathname}" was given in the \`location\` prop.`),f=v}else f=d;let p=f.pathname||"/",h=p;if(l!=="/"){let v=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let m=Ux(t,{pathname:h});mn(u||m!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),mn(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=d2(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:hn([l,n.encodeLocation?n.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:hn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),i,r);return e&&g?b.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},g):g}function a2(){let t=m2(),e=Xb(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:o},"ErrorBoundary")," or"," ",b.createElement("code",{style:o},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),r?b.createElement("pre",{style:i},r):null,s)}var l2=b.createElement(a2,null),rv=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=n2(t.digest);r&&(t=r)}let e=t!==void 0?b.createElement(vn.Provider,{value:this.props.routeContext},b.createElement(Ap.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(c2,{error:t},e):e}};rv.contextType=Qb;var Gu=new WeakMap;function c2({children:t,error:e}){let{basename:r}=b.useContext(Ir);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=r2(e.digest);if(n){let i=Gu.get(e);if(i)throw i;let o=Xx(n.location,r);if(qx&&!Gu.get(e))if(o.isExternal||n.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:n.replace}));throw Gu.set(e,s),s}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return t}function u2({routeContext:t,match:e,children:r}){let n=b.useContext(Ss);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(vn.Provider,{value:t},r)}function d2(t,e=[],r){let n=r==null?void 0:r.state;if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n==null?void 0:n.errors;if(o!=null){let d=i.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);Oe(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let s=!1,a=-1;if(r&&n){s=n.renderFallback;for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(a=d),f.route.id){let{loaderData:p,errors:h}=n,m=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!h||h[f.route.id]===void 0);if(f.route.lazy||m){r.isStatic&&(s=!0),a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}}let l=r==null?void 0:r.onError,u=n&&l?(d,f)=>{var p,h;l(d,{location:n.location,params:((h=(p=n.matches)==null?void 0:p[0])==null?void 0:h.params)??{},unstable_pattern:Kb(n.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,p)=>{let h,m=!1,g=null,w=null;n&&(h=o&&f.route.id?o[f.route.id]:void 0,g=f.route.errorElement||l2,s&&(a<0&&p===0?(nv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,w=null):a===p&&(m=!0,w=f.route.hydrateFallbackElement||null)));let v=e.concat(i.slice(0,p+1)),x=()=>{let y;return h?y=g:m?y=w:f.route.Component?y=b.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,b.createElement(u2,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(rv,{location:n.location,revalidation:n.revalidation,component:g,error:h,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:u}):x()},null)}function Rp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function f2(t){let e=b.useContext(Ss);return Oe(e,Rp(t)),e}function p2(t){let e=b.useContext(fu);return Oe(e,Rp(t)),e}function h2(t){let e=b.useContext(vn);return Oe(e,Rp(t)),e}function Pp(t){let e=h2(t),r=e.matches[e.matches.length-1];return Oe(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function g2(){return Pp("useRouteId")}function m2(){var n;let t=b.useContext(Ap),e=p2("useRouteError"),r=Pp("useRouteError");return t!==void 0?t:(n=e.errors)==null?void 0:n[r]}function x2(){let{router:t}=f2("useNavigate"),e=Pp("useNavigate"),r=b.useRef(!1);return Jx(()=>{r.current=!0}),b.useCallback(async(i,o={})=>{mn(r.current,Zx),r.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...o}))},[t,e])}var Og={};function nv(t,e,r){!e&&!Og[t]&&(Og[t]=!0,mn(!1,r))}b.memo(v2);function v2({routes:t,future:e,state:r,isStatic:n,onError:i}){return tv(t,void 0,{state:r,isStatic:n,onError:i})}function qs(t){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function y2({basename:t="/",children:e=null,location:r,navigationType:n="POP",navigator:i,static:o=!1,unstable_useTransitions:s}){Oe(!ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:i,static:o,unstable_useTransitions:s,future:{}}),[a,i,o,s]);typeof r=="string"&&(r=ks(r));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:h="default",unstable_mask:m}=r,g=b.useMemo(()=>{let w=Bn(u,a);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:h,unstable_mask:m},navigationType:n}},[a,u,d,f,p,h,n,m]);return mn(g!=null,`<Router basename="${a}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:b.createElement(Ir.Provider,{value:l},b.createElement(il.Provider,{children:e,value:g}))}function w2({children:t,location:e}){return s2(sf(t),e)}function sf(t,e=[]){let r=[];return b.Children.forEach(t,(n,i)=>{if(!b.isValidElement(n))return;let o=[...e,i];if(n.type===b.Fragment){r.push.apply(r,sf(n.props.children,o));return}Oe(n.type===qs,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=sf(n.props.children,o)),r.push(s)}),r}var ec="get",tc="application/x-www-form-urlencoded";function pu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function b2(t){return pu(t)&&t.tagName.toLowerCase()==="button"}function _2(t){return pu(t)&&t.tagName.toLowerCase()==="form"}function k2(t){return pu(t)&&t.tagName.toLowerCase()==="input"}function S2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function T2(t,e){return t.button===0&&(!e||e==="_self")&&!S2(t)}var jl=null;function C2(){if(jl===null)try{new FormData(document.createElement("form"),0),jl=!1}catch{jl=!0}return jl}var E2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qu(t){return t!=null&&!E2.has(t)?(mn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tc}"`),null):t}function j2(t,e){let r,n,i,o,s;if(_2(t)){let a=t.getAttribute("action");n=a?Bn(a,e):null,r=t.getAttribute("method")||ec,i=qu(t.getAttribute("enctype"))||tc,o=new FormData(t)}else if(b2(t)||k2(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(n=l?Bn(l,e):null,r=t.getAttribute("formmethod")||a.getAttribute("method")||ec,i=qu(t.getAttribute("formenctype"))||qu(a.getAttribute("enctype"))||tc,o=new FormData(a,t),!C2()){let{name:u,type:d,value:f}=t;if(d==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,f)}}else{if(pu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ec,n=null,i=tc,s=t}return o&&i==="text/plain"&&(s=o,o=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function N2(t,e,r,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:e&&Bn(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function A2(t,e){if(t.id in e)return e[t.id];try{let r=await import(t.module);return e[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function R2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function P2(t,e,r){let n=await Promise.all(t.map(async i=>{let o=e.routes[i.route.id];if(o){let s=await A2(o,r);return s.links?s.links():[]}return[]}));return M2(n.flat(1).filter(R2).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Mg(t,e,r,n,i,o){let s=(l,u)=>r[u]?l.route.id!==r[u].route.id:!0,a=(l,u)=>{var d;return r[u].pathname!==l.pathname||((d=r[u].route.path)==null?void 0:d.endsWith("*"))&&r[u].params["*"]!==l.params["*"]};return o==="assets"?e.filter((l,u)=>s(l,u)||a(l,u)):o==="data"?e.filter((l,u)=>{var f;let d=n.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function z2(t,e,{includeHydrateFallback:r}={}){return L2(t.map(n=>{let i=e.routes[n.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function L2(t){return[...new Set(t)]}function O2(t){let e={},r=Object.keys(t).sort();for(let n of r)e[n]=t[n];return e}function M2(t,e){let r=new Set;return new Set(e),t.reduce((n,i)=>{let o=JSON.stringify(O2(i));return r.has(o)||(r.add(o),n.push({key:o,link:i})),n},[])}function iv(){let t=b.useContext(Ss);return zp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function D2(){let t=b.useContext(fu);return zp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Lp=b.createContext(void 0);Lp.displayName="FrameworkContext";function ov(){let t=b.useContext(Lp);return zp(t,"You must render this element inside a <HydratedRouter> element"),t}function I2(t,e){let r=b.useContext(Lp),[n,i]=b.useState(!1),[o,s]=b.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=e,p=b.useRef(null);b.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let g=v=>{v.forEach(x=>{s(x.isIntersecting)})},w=new IntersectionObserver(g,{threshold:.5});return p.current&&w.observe(p.current),()=>{w.disconnect()}}},[t]),b.useEffect(()=>{if(n){let g=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(g)}}},[n]);let h=()=>{i(!0)},m=()=>{i(!1),s(!1)};return r?t!=="intent"?[o,p,{}]:[o,p,{onFocus:Ds(a,h),onBlur:Ds(l,m),onMouseEnter:Ds(u,h),onMouseLeave:Ds(d,m),onTouchStart:Ds(f,h)}]:[!1,p,{}]}function Ds(t,e){return r=>{t&&t(r),r.defaultPrevented||e(r)}}function F2({page:t,...e}){let{router:r}=iv(),n=b.useMemo(()=>Ux(r.routes,t,r.basename),[r.routes,t,r.basename]);return n?b.createElement(H2,{page:t,matches:n,...e}):null}function B2(t){let{manifest:e,routeModules:r}=ov(),[n,i]=b.useState([]);return b.useEffect(()=>{let o=!1;return P2(t,e,r).then(s=>{o||i(s)}),()=>{o=!0}},[t,e,r]),n}function H2({page:t,matches:e,...r}){let n=yn(),{future:i,manifest:o,routeModules:s}=ov(),{basename:a}=iv(),{loaderData:l,matches:u}=D2(),d=b.useMemo(()=>Mg(t,e,u,o,n,"data"),[t,e,u,o,n]),f=b.useMemo(()=>Mg(t,e,u,o,n,"assets"),[t,e,u,o,n]),p=b.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let g=new Set,w=!1;if(e.forEach(x=>{var _;let y=o.routes[x.route.id];!y||!y.hasLoader||(!d.some(k=>k.route.id===x.route.id)&&x.route.id in l&&((_=s[x.route.id])!=null&&_.shouldRevalidate)||y.hasClientLoader?w=!0:g.add(x.route.id))}),g.size===0)return[];let v=N2(t,a,i.unstable_trailingSlashAwareDataRequests,"data");return w&&g.size>0&&v.searchParams.set("_routes",e.filter(x=>g.has(x.route.id)).map(x=>x.route.id).join(",")),[v.pathname+v.search]},[a,i.unstable_trailingSlashAwareDataRequests,l,n,o,d,e,t,s]),h=b.useMemo(()=>z2(f,o),[f,o]),m=B2(f);return b.createElement(b.Fragment,null,p.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...r})),h.map(g=>b.createElement("link",{key:g,rel:"modulepreload",href:g,...r})),m.map(({key:g,link:w})=>b.createElement("link",{key:g,nonce:r.nonce,...w,crossOrigin:w.crossOrigin??r.crossOrigin})))}function W2(...t){return e=>{t.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var U2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{U2&&(window.__reactRouterVersion="7.13.2")}catch{}function Y2({basename:t,children:e,unstable_useTransitions:r,window:n}){let i=b.useRef();i.current==null&&(i.current=Sb({window:n,v5Compat:!0}));let o=i.current,[s,a]=b.useState({action:o.action,location:o.location}),l=b.useCallback(u=>{r===!1?a(u):b.startTransition(()=>a(u))},[r]);return b.useLayoutEffect(()=>o.listen(l),[o,l]),b.createElement(y2,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:o,unstable_useTransitions:r})}var sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,av=b.forwardRef(function({onClick:e,discover:r="render",prefetch:n="none",relative:i,reloadDocument:o,replace:s,unstable_mask:a,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p,unstable_defaultShouldRevalidate:h,...m},g){let{basename:w,navigator:v,unstable_useTransitions:x}=b.useContext(Ir),y=typeof d=="string"&&sv.test(d),_=Xx(d,w);d=_.to;let k=i2(d,{relative:i}),E=yn(),C=null;if(a){let K=Np(a,[],E.unstable_mask?E.unstable_mask.pathname:"/",!0);w!=="/"&&(K.pathname=K.pathname==="/"?w:hn([w,K.pathname])),C=v.createHref(K)}let[T,j,N]=I2(n,m),M=X2(d,{replace:s,unstable_mask:a,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p,unstable_defaultShouldRevalidate:h,unstable_useTransitions:x});function R(K){e&&e(K),K.defaultPrevented||M(K)}let V=!(_.isExternal||o),U=b.createElement("a",{...m,...N,href:(V?C:void 0)||_.absoluteURL||k,onClick:V?R:e,ref:W2(g,j),target:u,"data-discover":!y&&r==="render"?"true":void 0});return T&&!y?b.createElement(b.Fragment,null,U,b.createElement(F2,{page:k})):U});av.displayName="Link";var V2=b.forwardRef(function({"aria-current":e="page",caseSensitive:r=!1,className:n="",end:i=!1,style:o,to:s,viewTransition:a,children:l,...u},d){let f=sl(s,{relative:u.relative}),p=yn(),h=b.useContext(fu),{navigator:m,basename:g}=b.useContext(Ir),w=h!=null&&J2(f)&&a===!0,v=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,x=p.pathname,y=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(x=x.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&g&&(y=Bn(y,g)||y);const _=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let k=x===v||!i&&x.startsWith(v)&&x.charAt(_)==="/",E=y!=null&&(y===v||!i&&y.startsWith(v)&&y.charAt(v.length)==="/"),C={isActive:k,isPending:E,isTransitioning:w},T=k?e:void 0,j;typeof n=="function"?j=n(C):j=[n,k?"active":null,E?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let N=typeof o=="function"?o(C):o;return b.createElement(av,{...u,"aria-current":T,className:j,ref:d,style:N,to:s,viewTransition:a},typeof l=="function"?l(C):l)});V2.displayName="NavLink";var G2=b.forwardRef(({discover:t="render",fetcherKey:e,navigate:r,reloadDocument:n,replace:i,state:o,method:s=ec,action:a,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:p,...h},m)=>{let{unstable_useTransitions:g}=b.useContext(Ir),w=Q2(),v=Z2(a,{relative:u}),x=s.toLowerCase()==="get"?"get":"post",y=typeof a=="string"&&sv.test(a),_=k=>{if(l&&l(k),k.defaultPrevented)return;k.preventDefault();let E=k.nativeEvent.submitter,C=(E==null?void 0:E.getAttribute("formmethod"))||s,T=()=>w(E||k.currentTarget,{fetcherKey:e,method:C,navigate:r,replace:i,state:o,relative:u,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:p});g&&r!==!1?b.startTransition(()=>T()):T()};return b.createElement("form",{ref:m,method:x,action:v,onSubmit:n?l:_,...h,"data-discover":!y&&t==="render"?"true":void 0})});G2.displayName="Form";function q2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lv(t){let e=b.useContext(Ss);return Oe(e,q2(t)),e}function X2(t,{target:e,replace:r,unstable_mask:n,state:i,preventScrollReset:o,relative:s,viewTransition:a,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let d=Yn(),f=yn(),p=sl(t,{relative:s});return b.useCallback(h=>{if(T2(h,e)){h.preventDefault();let m=r!==void 0?r:Ha(f)===Ha(p),g=()=>d(t,{replace:m,unstable_mask:n,state:i,preventScrollReset:o,relative:s,viewTransition:a,unstable_defaultShouldRevalidate:l});u?b.startTransition(()=>g()):g()}},[f,d,p,r,n,i,e,t,o,s,a,l,u])}var K2=0,$2=()=>`__${String(++K2)}__`;function Q2(){let{router:t}=lv("useSubmit"),{basename:e}=b.useContext(Ir),r=g2(),n=t.fetch,i=t.navigate;return b.useCallback(async(o,s={})=>{let{action:a,method:l,encType:u,formData:d,body:f}=j2(o,e);if(s.navigate===!1){let p=s.fetcherKey||$2();await n(p,r,s.action||a,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||l,formEncType:s.encType||u,flushSync:s.flushSync})}else await i(s.action||a,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||l,formEncType:s.encType||u,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,i,e,r])}function Z2(t,{relative:e}={}){let{basename:r}=b.useContext(Ir),n=b.useContext(vn);Oe(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),o={...sl(t||".",{relative:e})},s=yn();if(t==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(d=>d==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let d=a.toString();o.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:hn([r,o.pathname])),Ha(o)}function J2(t,{relative:e}={}){let r=b.useContext($x);Oe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=lv("useViewTransitionState"),i=sl(t,{relative:e});if(!r.isTransitioning)return!1;let o=Bn(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Bn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Mc(i.pathname,s)!=null||Mc(i.pathname,o)!=null}var Dg="1.3.21";function cv(t,e,r){return Math.max(t,Math.min(e,r))}function e_(t,e,r){return(1-r)*t+r*e}function t_(t,e,r,n){return e_(t,e,1-Math.exp(-r*n))}function r_(t,e){return(t%e+e)%e}var n_=class{constructor(){H(this,"isRunning",!1);H(this,"value",0);H(this,"from",0);H(this,"to",0);H(this,"currentTime",0);H(this,"lerp");H(this,"duration");H(this,"easing");H(this,"onUpdate")}advance(t){var r;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const n=cv(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=t_(this.value,this.to,this.lerp*60,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:r,duration:n,easing:i,onStart:o,onUpdate:s}){this.from=this.value=t,this.to=e,this.lerp=r,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function i_(t,e){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{r=void 0,t.apply(this,n)},e)}}var o_=class{constructor(t,e,{autoResize:r=!0,debounce:n=250}={}){H(this,"width",0);H(this,"height",0);H(this,"scrollHeight",0);H(this,"scrollWidth",0);H(this,"debouncedResize");H(this,"wrapperResizeObserver");H(this,"contentResizeObserver");H(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});H(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});H(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,r&&(this.debouncedResize=i_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},uv=class{constructor(){H(this,"events",{})}emit(t,...e){var n;const r=this.events[t]||[];for(let i=0,o=r.length;i<o;i++)(n=r[i])==null||n.call(r,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(n=>e!==n)}}off(t,e){var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(n=>e!==n)}destroy(){this.events={}}};const s_=100/6,Zn={passive:!1};function Ig(t,e){return t===1?s_:t===2?e:1}var a_=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){H(this,"touchStart",{x:0,y:0});H(this,"lastDelta",{x:0,y:0});H(this,"window",{width:0,height:0});H(this,"emitter",new uv);H(this,"onTouchStart",t=>{const{clientX:e,clientY:r}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});H(this,"onTouchMove",t=>{const{clientX:e,clientY:r}=t.targetTouches?t.targetTouches[0]:t,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=r,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:t})});H(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});H(this,"onWheel",t=>{let{deltaX:e,deltaY:r,deltaMode:n}=t;const i=Ig(n,this.window.width),o=Ig(n,this.window.height);e*=i,r*=o,e*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:r,event:t})});H(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Zn),this.element.addEventListener("touchstart",this.onTouchStart,Zn),this.element.addEventListener("touchmove",this.onTouchMove,Zn),this.element.addEventListener("touchend",this.onTouchEnd,Zn)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Zn),this.element.removeEventListener("touchstart",this.onTouchStart,Zn),this.element.removeEventListener("touchmove",this.onTouchMove,Zn),this.element.removeEventListener("touchend",this.onTouchEnd,Zn)}};const Fg=t=>Math.min(1,1.001-2**(-10*t));var l_=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:r=t,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:u=.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:p=f==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:g=!0,prevent:w,virtualScroll:v,overscroll:x=!0,autoRaf:y=!1,anchors:_=!1,autoToggle:k=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:T=C,stopInertiaOnNavigate:j=!1}={}){H(this,"_isScrolling",!1);H(this,"_isStopped",!1);H(this,"_isLocked",!1);H(this,"_preventNextNativeScrollEvent",!1);H(this,"_resetVelocityTimeout",null);H(this,"_rafId",null);H(this,"isTouching");H(this,"time",0);H(this,"userData",{});H(this,"lastVelocity",0);H(this,"velocity",0);H(this,"direction",0);H(this,"options");H(this,"targetScroll");H(this,"animatedScroll");H(this,"animate",new n_);H(this,"emitter",new uv);H(this,"dimensions");H(this,"virtualScroll");H(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});H(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});H(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});H(this,"onClick",t=>{const e=t.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),r=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>r.host===i.host&&r.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${n.hash.split("#")[1]}`;this.scrollTo(o,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>r.host===n.host&&r.pathname!==n.pathname)){this.reset();return}});H(this,"onPointerDown",t=>{t.button===1&&this.reset()});H(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:r,event:n}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),o=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&r===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,d=Math.abs(e)>=Math.abs(r)?"horizontal":"vertical";if(l.find(m=>{var g,w,v,x,y;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent"))||d==="vertical"&&((w=m.hasAttribute)==null?void 0:w.call(m,"data-lenis-prevent-vertical"))||d==="horizontal"&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-horizontal"))||i&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-touch"))||o&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=r;this.options.gestureOrientation==="both"?f=Math.abs(r)>Math.abs(e)?r:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const p=i&&this.options.syncTouch,h=i&&n.type==="touchend";h&&(f=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...p?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});H(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});H(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Dg,window.lenis||(window.lenis={}),window.lenis.version=Dg,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!t||t===document.documentElement)&&(t=window),typeof a=="number"&&typeof l!="function"?l=Fg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:t,content:e,eventsTarget:r,smoothWheel:n,syncTouch:i,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:u,infinite:d,gestureOrientation:p,orientation:f,touchMultiplier:h,wheelMultiplier:m,autoResize:g,prevent:w,virtualScroll:v,overscroll:x,autoRaf:y,anchors:_,autoToggle:k,allowNestedScroll:E,naiveDimensions:T,stopInertiaOnNavigate:j},this.dimensions=new o_(t,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new a_(r,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:r=!1,lock:n=!1,programmatic:i=!0,lerp:o=i?this.options.lerp:void 0,duration:s=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:u,force:d=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!d)return;let p=t,h=e;if(typeof p=="string"&&["top","left","start","#"].includes(p))p=0;else if(typeof p=="string"&&["bottom","right","end"].includes(p))p=this.limit;else{let m=null;if(typeof p=="string"?(m=document.querySelector(p),m||(p==="#top"?p=0:console.warn("Lenis: Target not found",p))):p instanceof HTMLElement&&(p!=null&&p.nodeType)&&(m=p),m){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?_.left:_.top}const g=m.getBoundingClientRect(),w=getComputedStyle(m),v=this.isHorizontal?Number.parseFloat(w.scrollMarginLeft):Number.parseFloat(w.scrollMarginTop),x=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);p=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(v)?0:v)-(Number.isNaN(y)?0:y)}}if(typeof p=="number"){if(p+=h,p=Math.round(p),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const m=p-this.animatedScroll;m>this.limit/2?p-=this.limit:m<-this.limit/2&&(p+=this.limit)}}else p=cv(0,p,this.limit);if(p===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=f??{},r){this.animatedScroll=this.targetScroll=p,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=p),typeof s=="number"&&typeof a!="function"?a=Fg:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,p,{duration:s,easing:a,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),g||this.emit(),g&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:r}){const n=Date.now();t._lenis||(t._lenis={});const i=t._lenis;let o,s,a,l,u,d,f,p,h,m;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(t);if(i.computedStyle=E,o=["auto","overlay","scroll"].includes(E.overflowX),s=["auto","overlay","scroll"].includes(E.overflowY),u=["auto"].includes(E.overscrollBehaviorX),d=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=o,i.hasOverflowY=s,!(o||s))return!1;f=t.scrollWidth,p=t.scrollHeight,h=t.clientWidth,m=t.clientHeight,a=f>h,l=p>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=p,i.clientWidth=h,i.clientHeight=m,i.hasOverscrollBehaviorX=u,i.hasOverscrollBehaviorY=d}else a=i.isScrollableX,l=i.isScrollableY,o=i.hasOverflowX,s=i.hasOverflowY,f=i.scrollWidth,p=i.scrollHeight,h=i.clientWidth,m=i.clientHeight,u=i.hasOverscrollBehaviorX,d=i.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const g=Math.abs(e)>=Math.abs(r)?"horizontal":"vertical";let w,v,x,y,_,k;if(g==="horizontal")w=Math.round(t.scrollLeft),v=f-h,x=e,y=o,_=a,k=u;else if(g==="vertical")w=Math.round(t.scrollTop),v=p-m,x=r,y=s,_=l,k=d;else return!1;return!k&&(w>=v||w<=0)?!0:(x>0?w<v:w>0)&&y&&_}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?r_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function En(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ps={duration:.5,overwrite:!1,delay:0},Op,gt,je,Pr=1e8,xe=1/Pr,af=Math.PI*2,c_=af/4,u_=0,fv=Math.sqrt,d_=Math.cos,f_=Math.sin,ct=function(e){return typeof e=="string"},Be=function(e){return typeof e=="function"},Hn=function(e){return typeof e=="number"},Mp=function(e){return typeof e>"u"},xn=function(e){return typeof e=="object"},Jt=function(e){return e!==!1},Dp=function(){return typeof window<"u"},Nl=function(e){return Be(e)||ct(e)},pv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,p_=/random\([^)]+\)/g,h_=/,\s*/g,Bg=/(?:-?\.?\d|\.)+/gi,hv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gv=/[+-]=-?[.\d]+/,g_=/[^,'"\[\]\s]+/gi,m_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,sn,lf,Ip,br={},Dc={},mv,xv=function(e){return(Dc=hs(e,br))&&nr},Fp=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},Wa=function(e,r){return!r&&console.warn(e)},vv=function(e,r){return e&&(br[e]=r)&&Dc&&(Dc[e]=r)||br},Ua=function(){return 0},x_={suppressEvents:!0,isStart:!0,kill:!1},rc={suppressEvents:!0,kill:!1},v_={suppressEvents:!0},Bp={},yi=[],cf={},yv,ur={},Ku={},Hg=30,nc=[],Hp="",Wp=function(e){var r=e[0],n,i;if(xn(r)||Be(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=nc.length;i--&&!nc[i].targetTest(r););n=nc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Uv(e[i],n)))||e.splice(i,1);return e},Ji=function(e){return e._gsap||Wp(zr(e))[0]._gsap},wv=function(e,r,n){return(n=e[r])&&Be(n)?e[r]():Mp(n)&&e.getAttribute&&e.getAttribute(r)||n},er=function(e,r){return(e=e.split(",")).forEach(r)||e},Ve=function(e){return Math.round(e*1e5)/1e5||0},Ae=function(e){return Math.round(e*1e7)/1e7||0},Jo=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},y_=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},Ic=function(){var e=yi.length,r=yi.slice(0),n,i;for(cf={},yi.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Up=function(e){return!!(e._initted||e._startAt||e.add)},bv=function(e,r,n,i){yi.length&&!gt&&Ic(),e.render(r,n,!!(gt&&r<0&&Up(e))),yi.length&&!gt&&Ic()},_v=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(g_).length<2?r:ct(e)?e.trim():e},kv=function(e){return e},_r=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},w_=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},hs=function(e,r){for(var n in r)e[n]=r[n];return e},Wg=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xn(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},Fc=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},ua=function(e){var r=e.parent||Pe,n=e.keyframes?w_(Nt(e.keyframes)):_r;if(Jt(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},b_=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},Sv=function(e,r,n,i,o){var s=e[i],a;if(o)for(a=r[o];s&&s[o]>a;)s=s._prev;return s?(r._next=s._next,s._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=s,r.parent=r._dp=e,r},hu=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=r._prev,s=r._next;o?o._next=s:e[n]===r&&(e[n]=s),s?s._prev=o:e[i]===r&&(e[i]=o),r._next=r._prev=r.parent=null},Ti=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},eo=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},__=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},uf=function(e,r,n,i){return e._startAt&&(gt?e._startAt.revert(rc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},k_=function t(e){return!e||e._ts&&t(e.parent)},Ug=function(e){return e._repeat?gs(e._tTime,e=e.duration()+e._rDelay)*e:0},gs=function(e,r){var n=Math.floor(e=Ae(e/r));return e&&n===e?n-1:n},Bc=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},gu=function(e){return e._end=Ae(e._start+(e._tDur/Math.abs(e._ts||e._rts||xe)||0))},mu=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ae(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),gu(e),n._dirty||eo(n,e)),e},Tv=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=Bc(e.rawTime(),r),(!r._dur||al(0,r.totalDuration(),n)-r._tTime>xe)&&r.render(n,!0)),eo(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xe}},cn=function(e,r,n,i){return r.parent&&Ti(r),r._start=Ae((Hn(n)?n:n||e!==Pe?Cr(e,n,r):e._time)+r._delay),r._end=Ae(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Sv(e,r,"_first","_last",e._sort?"_start":0),df(r)||(e._recent=r),i||Tv(e,r),e._ts<0&&mu(e,e._tTime),e},Cv=function(e,r){return(br.ScrollTrigger||Fp("scrollTrigger",r))&&br.ScrollTrigger.create(r,e)},Ev=function(e,r,n,i,o){if(Vp(e,r,o),!e._initted)return 1;if(!n&&e._pt&&!gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yv!==fr.frame)return yi.push(e),e._lazy=[o,i],1},S_=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},df=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},T_=function(e,r,n,i){var o=e.ratio,s=r<0||!r&&(!e._start&&S_(e)&&!(!e._initted&&df(e))||(e._ts<0||e._dp._ts<0)&&!df(e))?0:1,a=e._rDelay,l=0,u,d,f;if(a&&e._repeat&&(l=al(0,e._tDur,r),d=gs(l,a),e._yoyo&&d&1&&(s=1-s),d!==gs(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||gt||i||e._zTime===xe||!r&&e._zTime){if(!e._initted&&Ev(e,r,i,n,l))return;for(f=e._zTime,e._zTime=r||(n?xe:0),n||(n=r&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,u=e._pt;u;)u.r(s,u.d),u=u._next;r<0&&uf(e,r,n,!0),e._onUpdate&&!n&&gr(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&gr(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===s&&(s&&Ti(e,1),!n&&!gt&&(gr(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},C_=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},ms=function(e,r,n,i){var o=e._repeat,s=Ae(r)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Ae(s*(o+1)+e._rDelay*o):s,a>0&&!i&&mu(e,e._tTime=e._tDur*a),e.parent&&gu(e),n||eo(e.parent,e),e},Yg=function(e){return e instanceof Bt?eo(e):ms(e,e._dur)},E_={_start:0,endTime:Ua,totalDuration:Ua},Cr=function t(e,r,n){var i=e.labels,o=e._recent||E_,s=e.duration()>=Pr?o.endTime(!1):e._dur,a,l,u;return ct(r)&&(isNaN(r)||r in i)?(l=r.charAt(0),u=r.substr(-1)==="%",a=r.indexOf("="),l==="<"||l===">"?(a>=0&&(r=r.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(r.substr(1))||0)*(u?(a<0?o:n).totalDuration()/100:1)):a<0?(r in i||(i[r]=s),i[r]):(l=parseFloat(r.charAt(a-1)+r.substr(a+1)),u&&n&&(l=l/100*(Nt(n)?n[0]:n).totalDuration()),a>1?t(e,r.substr(0,a-1),n)+l:s+l)):r==null?s:+r},da=function(e,r,n){var i=Hn(r[1]),o=(i?2:1)+(e<2?0:1),s=r[o],a,l;if(i&&(s.duration=r[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Jt(l.vars.inherit)&&l.parent;s.immediateRender=Jt(a.immediateRender),e<2?s.runBackwards=1:s.startAt=r[o-1]}return new $e(r[0],s,r[o+1])},Pi=function(e,r){return e||e===0?r(e):r},al=function(e,r,n){return n<e?e:n>r?r:n},Et=function(e,r){return!ct(e)||!(r=m_.exec(e))?"":r[1]},j_=function(e,r,n){return Pi(n,function(i){return al(e,r,i)})},ff=[].slice,jv=function(e,r){return e&&xn(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&xn(e[0]))&&!e.nodeType&&e!==sn},N_=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var o;return ct(i)&&!r||jv(i,1)?(o=n).push.apply(o,zr(i)):n.push(i)})||n},zr=function(e,r,n){return je&&!r&&je.selector?je.selector(e):ct(e)&&!n&&(lf||!xs())?ff.call((r||Ip).querySelectorAll(e),0):Nt(e)?N_(e,n):jv(e)?ff.call(e,0):e?[e]:[]},pf=function(e){return e=zr(e)[0]||Wa("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return zr(r,n.querySelectorAll?n:n===e?Wa("Invalid scope")||Ip.createElement("div"):e)}},Nv=function(e){return e.sort(function(){return .5-Math.random()})},Av=function(e){if(Be(e))return e;var r=xn(e)?e:{each:e},n=to(r.ease),i=r.from||0,o=parseFloat(r.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,u=r.axis,d=i,f=i;return ct(i)?d=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(d=i[0],f=i[1]),function(p,h,m){var g=(m||r).length,w=s[g],v,x,y,_,k,E,C,T,j;if(!w){if(j=r.grid==="auto"?0:(r.grid||[1,Pr])[1],!j){for(C=-Pr;C<(C=m[j++].getBoundingClientRect().left)&&j<g;);j<g&&j--}for(w=s[g]=[],v=l?Math.min(j,g)*d-.5:i%j,x=j===Pr?0:l?g*f/j-.5:i/j|0,C=0,T=Pr,E=0;E<g;E++)y=E%j-v,_=x-(E/j|0),w[E]=k=u?Math.abs(u==="y"?_:y):fv(y*y+_*_),k>C&&(C=k),k<T&&(T=k);i==="random"&&Nv(w),w.max=C-T,w.min=T,w.v=g=(parseFloat(r.amount)||parseFloat(r.each)*(j>g?g-1:u?u==="y"?g/j:j:Math.max(j,g/j))||0)*(i==="edges"?-1:1),w.b=g<0?o-g:o,w.u=Et(r.amount||r.each)||0,n=n&&g<0?Bv(n):n}return g=(w[p]-w.min)/w.max||0,Ae(w.b+(n?n(g):g)*w.v)+w.u}},hf=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ae(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(Hn(n)?0:Et(n))}},Rv=function(e,r){var n=Nt(e),i,o;return!n&&xn(e)&&(i=n=e.radius||Pr,e.values?(e=zr(e.values),(o=!Hn(e[0]))&&(i*=i)):e=hf(e.increment)),Pi(r,n?Be(e)?function(s){return o=e(s),Math.abs(o-s)<=i?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),u=Pr,d=0,f=e.length,p,h;f--;)o?(p=e[f].x-a,h=e[f].y-l,p=p*p+h*h):p=Math.abs(e[f]-a),p<u&&(u=p,d=f);return d=!i||u<=i?e[d]:s,o||d===s||Hn(s)?d:d+Et(s)}:hf(e))},Pv=function(e,r,n,i){return Pi(Nt(e)?!r:n===!0?!!(n=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},A_=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(o,s){return s(o)},i)}},R_=function(e,r){return function(n){return e(parseFloat(n))+(r||Et(n))}},P_=function(e,r,n){return Lv(e,r,0,1,n)},zv=function(e,r,n){return Pi(n,function(i){return e[~~r(i)]})},z_=function t(e,r,n){var i=r-e;return Nt(e)?zv(e,t(0,e.length),r):Pi(n,function(o){return(i+(o-e)%i)%i+e})},L_=function t(e,r,n){var i=r-e,o=i*2;return Nt(e)?zv(e,t(0,e.length-1),r):Pi(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>i?o-s:s)})},Ya=function(e){return e.replace(p_,function(r){var n=r.indexOf("[")+1,i=r.substring(n||7,n?r.indexOf("]"):r.length-1).split(h_);return Pv(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Lv=function(e,r,n,i,o){var s=r-e,a=i-n;return Pi(o,function(l){return n+((l-e)/s*a||0)})},O_=function t(e,r,n,i){var o=isNaN(e+r)?0:function(h){return(1-h)*e+h*r};if(!o){var s=ct(e),a={},l,u,d,f,p;if(n===!0&&(i=1)&&(n=null),s)e={p:e},r={p:r};else if(Nt(e)&&!Nt(r)){for(d=[],f=e.length,p=f-2,u=1;u<f;u++)d.push(t(e[u-1],e[u]));f--,o=function(m){m*=f;var g=Math.min(p,~~m);return d[g](m-g)},n=r}else i||(e=hs(Nt(e)?[]:{},e));if(!d){for(l in r)Yp.call(a,e,l,"get",r[l]);o=function(m){return Xp(m,a)||(s?e.p:e)}}}return Pi(n,o)},Vg=function(e,r,n){var i=e.labels,o=Pr,s,a,l;for(s in i)a=i[s]-r,a<0==!!n&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},gr=function(e,r,n){var i=e.vars,o=i[r],s=je,a=e._ctx,l,u,d;if(o)return l=i[r+"Params"],u=i.callbackScope||e,n&&yi.length&&Ic(),a&&(je=a),d=l?o.apply(u,l):o.call(u),je=s,d},Xs=function(e){return Ti(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gt),e.progress()<1&&gr(e,"onInterrupt"),e},Vo,Ov=[],Mv=function(e){if(e)if(e=!e.name&&e.default||e,Dp()||e.headless){var r=e.name,n=Be(e),i=r&&!n&&e.init?function(){this._props=[]}:e,o={init:Ua,render:Xp,add:Yp,kill:Q_,modifier:$_,rawVars:0},s={targetTest:0,get:0,getSetter:qp,aliases:{},register:0};if(xs(),e!==i){if(ur[r])return;_r(i,_r(Fc(e,o),s)),hs(i.prototype,hs(o,Fc(e,s))),ur[i.prop=r]=i,e.targetTest&&(nc.push(i),Bp[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}vv(r,i),e.register&&e.register(nr,i,tr)}else Ov.push(e)},me=255,Ks={aqua:[0,me,me],lime:[0,me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,me],navy:[0,0,128],white:[me,me,me],olive:[128,128,0],yellow:[me,me,0],orange:[me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[me,0,0],pink:[me,192,203],cyan:[0,me,me],transparent:[me,me,me,0]},$u=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*me+.5|0},Dv=function(e,r,n){var i=e?Hn(e)?[e>>16,e>>8&me,e&me]:0:Ks.black,o,s,a,l,u,d,f,p,h,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ks[e])i=Ks[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&me,i&me,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&me,e&me]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Bg),!r)l=+i[0]%360/360,u=+i[1]/100,d=+i[2]/100,s=d<=.5?d*(u+1):d+u-d*u,o=d*2-s,i.length>3&&(i[3]*=1),i[0]=$u(l+1/3,o,s),i[1]=$u(l,o,s),i[2]=$u(l-1/3,o,s);else if(~e.indexOf("="))return i=e.match(hv),n&&i.length<4&&(i[3]=1),i}else i=e.match(Bg)||Ks.transparent;i=i.map(Number)}return r&&!m&&(o=i[0]/me,s=i[1]/me,a=i[2]/me,f=Math.max(o,s,a),p=Math.min(o,s,a),d=(f+p)/2,f===p?l=u=0:(h=f-p,u=d>.5?h/(2-f-p):h/(f+p),l=f===o?(s-a)/h+(s<a?6:0):f===s?(a-o)/h+2:(o-s)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},Iv=function(e){var r=[],n=[],i=-1;return e.split(wi).forEach(function(o){var s=o.match(Yo)||[];r.push.apply(r,s),n.push(i+=s.length+1)}),r.c=n,r},Gg=function(e,r,n){var i="",o=(e+i).match(wi),s=r?"hsla(":"rgba(",a=0,l,u,d,f;if(!o)return e;if(o=o.map(function(p){return(p=Dv(p,r,1))&&s+(r?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(d=Iv(e),l=n.c,l.join(i)!==d.c.join(i)))for(u=e.replace(wi,"1").split(Yo),f=u.length-1;a<f;a++)i+=u[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(d.length?d:o.length?o:n).shift());if(!u)for(u=e.split(wi),f=u.length-1;a<f;a++)i+=u[a]+o[a];return i+u[f]},wi=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ks)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),M_=/hsl[a]?\(/,Fv=function(e){var r=e.join(" "),n;if(wi.lastIndex=0,wi.test(r))return n=M_.test(r),e[1]=Gg(e[1],n),e[0]=Gg(e[0],n,Iv(e[1])),!0},Va,fr=function(){var t=Date.now,e=500,r=33,n=t(),i=n,o=1e3/240,s=o,a=[],l,u,d,f,p,h,m=function g(w){var v=t()-i,x=w===!0,y,_,k,E;if((v>e||v<0)&&(n+=v-r),i+=v,k=i-n,y=k-s,(y>0||x)&&(E=++f.frame,p=k-f.time*1e3,f.time=k=k/1e3,s+=y+(y>=o?4:o-y),_=1),x||(l=u(g)),_)for(h=0;h<a.length;h++)a[h](k,p,E,w)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(w){return p/(1e3/(w||60))},wake:function(){mv&&(!lf&&Dp()&&(sn=lf=window,Ip=sn.document||{},br.gsap=nr,(sn.gsapVersions||(sn.gsapVersions=[])).push(nr.version),xv(Dc||sn.GreenSockGlobals||!sn.gsap&&sn||{}),Ov.forEach(Mv)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=d||function(w){return setTimeout(w,s-f.time*1e3+1|0)},Va=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Va=0,u=Ua},lagSmoothing:function(w,v){e=w||1/0,r=Math.min(v||33,e)},fps:function(w){o=1e3/(w||240),s=f.time*1e3+o},add:function(w,v,x){var y=v?function(_,k,E,C){w(_,k,E,C),f.remove(y)}:w;return f.remove(w),a[x?"unshift":"push"](y),xs(),y},remove:function(w,v){~(v=a.indexOf(w))&&a.splice(v,1)&&h>=v&&h--},_listeners:a},f}(),xs=function(){return!Va&&fr.wake()},ae={},D_=/^[\d.\-M][\d.\-,\s]/,I_=/["']/g,F_=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],o=1,s=n.length,a,l,u;o<s;o++)l=n[o],a=o!==s-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),r[i]=isNaN(u)?u.replace(I_,"").trim():+u,i=l.substr(a+1).trim();return r},B_=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},H_=function(e){var r=(e+"").split("("),n=ae[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[F_(r[1])]:B_(e).split(",").map(_v)):ae._CE&&D_.test(e)?ae._CE("",e):n},Bv=function(e){return function(r){return 1-e(1-r)}},Hv=function t(e,r){for(var n=e._first,i;n;)n instanceof Bt?t(n,r):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==r&&(n.timeline?t(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},to=function(e,r){return e&&(Be(e)?e:ae[e]||H_(e))||r},yo=function(e,r,n,i){n===void 0&&(n=function(l){return 1-r(1-l)}),i===void 0&&(i=function(l){return l<.5?r(l*2)/2:1-r((1-l)*2)/2});var o={easeIn:r,easeOut:n,easeInOut:i},s;return er(e,function(a){ae[a]=br[a]=o,ae[s=a.toLowerCase()]=n;for(var l in o)ae[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=o[l]}),o},Wv=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},Qu=function t(e,r,n){var i=r>=1?r:1,o=(n||(e?.3:.45))/(r<1?r:1),s=o/af*(Math.asin(1/i)||0),a=function(d){return d===1?1:i*Math.pow(2,-10*d)*f_((d-s)*o)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Wv(a);return o=af/o,l.config=function(u,d){return t(e,u,d)},l},Zu=function t(e,r){r===void 0&&(r=1.70158);var n=function(s){return s?--s*s*((r+1)*s+r)+1:0},i=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:Wv(n);return i.config=function(o){return t(e,o)},i};er("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;yo(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;yo("Elastic",Qu("in"),Qu("out"),Qu());(function(t,e){var r=1/e,n=2*r,i=2.5*r,o=function(a){return a<r?t*a*a:a<n?t*Math.pow(a-1.5/e,2)+.75:a<i?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};yo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);yo("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});yo("Circ",function(t){return-(fv(1-t*t)-1)});yo("Sine",function(t){return t===1?1:-d_(t*c_)+1});yo("Back",Zu("in"),Zu("out"),Zu());ae.SteppedEase=ae.steps=br.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),o=r?1:0,s=1-xe;return function(a){return((i*al(0,s,a)|0)+o)*n}}};ps.ease=ae["quad.out"];er("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Hp+=t+","+t+"Params,"});var Uv=function(e,r){this.id=u_++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:wv,this.set=r?r.getSetter:qp},Ga=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,ms(this,+r.duration,1,1),this.data=r.data,je&&(this._ctx=je,je.data.push(this)),Va||fr.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(xs(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(mu(this,n),!o._dp||o.parent||Tv(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bv(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ug(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ug(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,i):this._repeat?gs(this._tTime,o)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?Bc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xe?0:this._rts,this.totalTime(al(-Math.abs(this._delay),this.totalDuration(),o),i!==!1),gu(this),__(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xe&&(this._tTime-=xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ae(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&cn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=v_);var i=gt;return gt=n,Up(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gt=i,this},e.globalTime=function(n){for(var i=this,o=arguments.length?n:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Cr(this,n),Jt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jt(i)),this._dur||(this._zTime=-xe),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=i&&o<this.endTime(!0)-xe)},e.eventCallback=function(n,i,o){var s=this.vars;return arguments.length>1?(i?(s[n]=i,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this,o=i._prom;return new Promise(function(s){var a=Be(n)?n:kv,l=function(){var d=i.then;i.then=null,o&&o(),Be(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=d),s(a),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Xs(this)},t}();_r(Ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var Bt=function(t){dv(e,t);function e(n,i){var o;return n===void 0&&(n={}),o=t.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Jt(n.sortChildren),Pe&&cn(n.parent||Pe,En(o),i),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Cv(En(o),n.scrollTrigger),o}var r=e.prototype;return r.to=function(i,o,s){return da(0,arguments,this),this},r.from=function(i,o,s){return da(1,arguments,this),this},r.fromTo=function(i,o,s,a){return da(2,arguments,this),this},r.set=function(i,o,s){return o.duration=0,o.parent=this,ua(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new $e(i,o,Cr(this,s),1),this},r.call=function(i,o,s){return cn(this,$e.delayedCall(0,i,o),s)},r.staggerTo=function(i,o,s,a,l,u,d){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=u,s.onCompleteParams=d,s.parent=this,new $e(i,s,Cr(this,l)),this},r.staggerFrom=function(i,o,s,a,l,u,d){return s.runBackwards=1,ua(s).immediateRender=Jt(s.immediateRender),this.staggerTo(i,o,s,a,l,u,d)},r.staggerFromTo=function(i,o,s,a,l,u,d,f){return a.startAt=s,ua(a).immediateRender=Jt(a.immediateRender),this.staggerTo(i,o,a,l,u,d,f)},r.render=function(i,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,d=i<=0?0:Ae(i),f=this._zTime<0!=i<0&&(this._initted||!u),p,h,m,g,w,v,x,y,_,k,E,C;if(this!==Pe&&d>l&&i>=0&&(d=l),d!==this._tTime||s||f){if(a!==this._time&&u&&(d+=this._time-a,i+=this._time-a),p=d,_=this._start,y=this._ts,v=!y,f&&(u||(a=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,w=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(w*100+i,o,s);if(p=Ae(d%w),d===l?(g=this._repeat,p=u):(k=Ae(d/w),g=~~k,g&&g===k&&(p=u,g--),p>u&&(p=u)),k=gs(this._tTime,w),!a&&this._tTime&&k!==g&&this._tTime-k*w-this._dur<=0&&(k=g),E&&g&1&&(p=u-p,C=1),g!==k&&!this._lock){var T=E&&k&1,j=T===(E&&g&1);if(g<k&&(T=!T),a=T?0:d%u?u:d,this._lock=1,this.render(a||(C?0:Ae(g*w)),o,!u)._lock=0,this._tTime=d,!o&&this.parent&&gr(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,k=g),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,j&&(this._lock=2,a=T?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Hv(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=C_(this,Ae(a),Ae(p)),x&&(d-=p-(p=x._start))),this._tTime=d,this._time=p,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&u&&!o&&!k&&(gr(this,"onStart"),this._tTime!==d))return this;if(p>=a&&i>=0)for(h=this._first;h;){if(m=h._next,(h._act||p>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,o,s),p!==this._time||!this._ts&&!v){x=0,m&&(d+=this._zTime=-xe);break}}h=m}else{h=this._last;for(var N=i<0?i:p;h;){if(m=h._prev,(h._act||N<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(N-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(N-h._start)*h._ts,o,s||gt&&Up(h)),p!==this._time||!this._ts&&!v){x=0,m&&(d+=this._zTime=N?-xe:xe);break}}h=m}}if(x&&!o&&(this.pause(),x.render(p>=a?0:-xe)._zTime=p>=a?1:-1,this._ts))return this._start=_,gu(this),this.render(i,o,s);this._onUpdate&&!o&&gr(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&a)&&(_===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ti(this,1),!o&&!(i<0&&!a)&&(d||a||!l)&&(gr(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,o){var s=this;if(Hn(o)||(o=Cr(this,o,i)),!(i instanceof Ga)){if(Nt(i))return i.forEach(function(a){return s.add(a,o)}),this;if(ct(i))return this.addLabel(i,o);if(Be(i))i=$e.delayedCall(0,i);else return this}return this!==i?cn(this,i,o):this},r.getChildren=function(i,o,s,a){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-Pr);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof $e?o&&l.push(u):(s&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,o,s)))),u=u._next;return l},r.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},r.remove=function(i){return ct(i)?this.removeLabel(i):Be(i)?this.killTweensOf(i):(i.parent===this&&hu(this,i),i===this._recent&&(this._recent=this._last),eo(this))},r.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(fr.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},r.addLabel=function(i,o){return this.labels[i]=Cr(this,o),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,o,s){var a=$e.delayedCall(0,o||Ua,s);return a.data="isPause",this._hasPause=1,cn(this,a,Cr(this,i))},r.removePause=function(i){var o=this._first;for(i=Cr(this,i);o;)o._start===i&&o.data==="isPause"&&Ti(o),o=o._next},r.killTweensOf=function(i,o,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)si!==a[l]&&a[l].kill(i,o);return this},r.getTweensOf=function(i,o){for(var s=[],a=zr(i),l=this._first,u=Hn(o),d;l;)l instanceof $e?y_(l._targets,a)&&(u?(!si||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(d=l.getTweensOf(a,o)).length&&s.push.apply(s,d),l=l._next;return s},r.tweenTo=function(i,o){o=o||{};var s=this,a=Cr(s,i),l=o,u=l.startAt,d=l.onStart,f=l.onStartParams,p=l.immediateRender,h,m=$e.to(s,_r({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(u&&"time"in u?u.time:s._time))/s.timeScale())||xe,onStart:function(){if(s.pause(),!h){var w=o.duration||Math.abs((a-(u&&"time"in u?u.time:s._time))/s.timeScale());m._dur!==w&&ms(m,w,0,1).render(m._time,!0,!0),h=1}d&&d.apply(m,f||[])}},o));return p?m.render(0):m},r.tweenFromTo=function(i,o,s){return this.tweenTo(o,_r({startAt:{time:Cr(this,i)}},s))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),Vg(this,Cr(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),Vg(this,Cr(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xe)},r.shiftChildren=function(i,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,u;for(i=Ae(i);a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(o)for(u in l)l[u]>=s&&(l[u]+=i);return eo(this)},r.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),eo(this)},r.totalDuration=function(i){var o=0,s=this,a=s._last,l=Pr,u,d,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(f=s.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),d=a._start,d>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,cn(s,a,d-a._delay,1)._lock=0):l=d,d<0&&a._ts&&(o-=d,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=Ae(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=u;ms(s,s===Pe&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(Pe._ts&&(bv(Pe,Bc(i,Pe)),yv=fr.frame),fr.frame>=Hg){Hg+=yr.autoSleep||120;var o=Pe._first;if((!o||!o._ts)&&yr.autoSleep&&fr._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||fr.sleep()}}},e}(Ga);_r(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var W_=function(e,r,n,i,o,s,a){var l=new tr(this._pt,e,r,0,1,Kv,null,o),u=0,d=0,f,p,h,m,g,w,v,x;for(l.b=n,l.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=Ya(i)),s&&(x=[n,i],s(x,e,r),n=x[0],i=x[1]),p=n.match(Xu)||[];f=Xu.exec(i);)m=f[0],g=i.substring(u,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),m!==p[d++]&&(w=parseFloat(p[d-1])||0,l._pt={_next:l._pt,p:g||d===1?g:",",s:w,c:m.charAt(1)==="="?Jo(w,m)-w:parseFloat(m)-w,m:h&&h<4?Math.round:0},u=Xu.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(gv.test(i)||v)&&(l.e=0),this._pt=l,l},Yp=function(e,r,n,i,o,s,a,l,u,d){Be(i)&&(i=i(o||0,e,s));var f=e[r],p=n!=="get"?n:Be(f)?u?e[r.indexOf("set")||!Be(e["get"+r.substr(3)])?r:"get"+r.substr(3)](u):e[r]():f,h=Be(f)?u?q_:qv:Gp,m;if(ct(i)&&(~i.indexOf("random(")&&(i=Ya(i)),i.charAt(1)==="="&&(m=Jo(p,i)+(Et(p)||0),(m||m===0)&&(i=m))),!d||p!==i||gf)return!isNaN(p*i)&&i!==""?(m=new tr(this._pt,e,r,+p||0,i-(p||0),typeof f=="boolean"?K_:Xv,0,h),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!f&&!(r in e)&&Fp(r,i),W_.call(this,e,r,p,i,h,l||yr.stringFilter,u))},U_=function(e,r,n,i,o){if(Be(e)&&(e=fa(e,o,r,n,i)),!xn(e)||e.style&&e.nodeType||Nt(e)||pv(e))return ct(e)?fa(e,o,r,n,i):e;var s={},a;for(a in e)s[a]=fa(e[a],o,r,n,i);return s},Yv=function(e,r,n,i,o,s){var a,l,u,d;if(ur[e]&&(a=new ur[e]).init(o,a.rawVars?r[e]:U_(r[e],i,o,s,n),n,i,s)!==!1&&(n._pt=l=new tr(n._pt,o,e,0,1,a.render,a,0,a.priority),n!==Vo))for(u=n._ptLookup[n._targets.indexOf(o)],d=a._props.length;d--;)u[a._props[d]]=l;return a},si,gf,Vp=function t(e,r,n){var i=e.vars,o=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,d=i.runBackwards,f=i.yoyoEase,p=i.keyframes,h=i.autoRevert,m=e._dur,g=e._startAt,w=e._targets,v=e.parent,x=v&&v.data==="nested"?v.vars.targets:w,y=e._overwrite==="auto"&&!Op,_=e.timeline,k,E,C,T,j,N,M,R,V,U,K,ee,G;if(_&&(!p||!o)&&(o="none"),e._ease=to(o,ps.ease),e._yEase=f?Bv(to(f===!0?o:f,ps.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!_&&!!i.runBackwards,!_||p&&!i.stagger){if(R=w[0]?Ji(w[0]).harness:0,ee=R&&i[R.prop],k=Fc(i,Bp),g&&(g._zTime<0&&g.progress(1),r<0&&d&&a&&!h?g.render(-1,!0):g.revert(d&&m?rc:x_),g._lazy=0),s){if(Ti(e._startAt=$e.set(w,_r({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&Jt(l),startAt:null,delay:0,onUpdate:u&&function(){return gr(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(gt||!a&&!h)&&e._startAt.revert(rc),a&&m&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(d&&m&&!g){if(r&&(a=!1),C=_r({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Jt(l),immediateRender:a,stagger:0,parent:v},k),ee&&(C[R.prop]=ee),Ti(e._startAt=$e.set(w,C)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(gt?e._startAt.revert(rc):e._startAt.render(-1,!0)),e._zTime=r,!a)t(e._startAt,xe,xe);else if(!r)return}for(e._pt=e._ptCache=0,l=m&&Jt(l)||l&&!m,E=0;E<w.length;E++){if(j=w[E],M=j._gsap||Wp(w)[E]._gsap,e._ptLookup[E]=U={},cf[M.id]&&yi.length&&Ic(),K=x===w?E:x.indexOf(j),R&&(V=new R).init(j,ee||k,e,K,x)!==!1&&(e._pt=T=new tr(e._pt,j,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(z){U[z]=T}),V.priority&&(N=1)),!R||ee)for(C in k)ur[C]&&(V=Yv(C,k,e,K,j,x))?V.priority&&(N=1):U[C]=T=Yp.call(e,j,C,"get",k[C],K,x,0,i.stringFilter);e._op&&e._op[E]&&e.kill(j,e._op[E]),y&&e._pt&&(si=e,Pe.killTweensOf(j,U,e.globalTime(r)),G=!e.parent,si=0),e._pt&&l&&(cf[M.id]=1)}N&&$v(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!G,p&&r<=0&&_.render(Pr,!0,!0)},Y_=function(e,r,n,i,o,s,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[r],d,f,p,h;if(!u)for(u=e._ptCache[r]=[],p=e._ptLookup,h=e._targets.length;h--;){if(d=p[h][r],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==r&&d.fp!==r;)d=d._next;if(!d)return gf=1,e.vars[r]="+=0",Vp(e,a),gf=0,l?Wa(r+" not eligible for reset"):1;u.push(d)}for(h=u.length;h--;)f=u[h],d=f._pt||f,d.s=(i||i===0)&&!o?i:d.s+(i||0)+s*d.c,d.c=n-d.s,f.e&&(f.e=Ve(n)+Et(f.e)),f.b&&(f.b=d.s+Et(f.b))},V_=function(e,r){var n=e[0]?Ji(e[0]).harness:0,i=n&&n.aliases,o,s,a,l;if(!i)return r;o=hs({},r);for(s in i)if(s in o)for(l=i[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},G_=function(e,r,n,i){var o=r.ease||i||"power1.inOut",s,a;if(Nt(r))a=n[e]||(n[e]=[]),r.forEach(function(l,u){return a.push({t:u/(r.length-1)*100,v:l,e:o})});else for(s in r)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:r[s],e:o})},fa=function(e,r,n,i,o){return Be(e)?e.call(r,n,i,o):ct(e)&&~e.indexOf("random(")?Ya(e):e},Vv=Hp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gv={};er(Vv+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Gv[t]=1});var $e=function(t){dv(e,t);function e(n,i,o,s){var a;typeof i=="number"&&(o.duration=i,i=o,o=null),a=t.call(this,s?i:ua(i))||this;var l=a.vars,u=l.duration,d=l.delay,f=l.immediateRender,p=l.stagger,h=l.overwrite,m=l.keyframes,g=l.defaults,w=l.scrollTrigger,v=l.yoyoEase,x=i.parent||Pe,y=(Nt(n)||pv(n)?Hn(n[0]):"length"in i)?[n]:zr(n),_,k,E,C,T,j,N,M;if(a._targets=y.length?Wp(y):Wa("GSAP target "+n+" not found. https://gsap.com",!yr.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||p||Nl(u)||Nl(d)){if(i=a.vars,_=a.timeline=new Bt({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:y}),_.kill(),_.parent=_._dp=En(a),_._start=0,p||Nl(u)||Nl(d)){if(C=y.length,N=p&&Av(p),xn(p))for(T in p)~Vv.indexOf(T)&&(M||(M={}),M[T]=p[T]);for(k=0;k<C;k++)E=Fc(i,Gv),E.stagger=0,v&&(E.yoyoEase=v),M&&hs(E,M),j=y[k],E.duration=+fa(u,En(a),k,j,y),E.delay=(+fa(d,En(a),k,j,y)||0)-a._delay,!p&&C===1&&E.delay&&(a._delay=d=E.delay,a._start+=d,E.delay=0),_.to(j,E,N?N(k,j,y):0),_._ease=ae.none;_.duration()?u=d=0:a.timeline=0}else if(m){ua(_r(_.vars.defaults,{ease:"none"})),_._ease=to(m.ease||i.ease||"none");var R=0,V,U,K;if(Nt(m))m.forEach(function(ee){return _.to(y,ee,">")}),_.duration();else{E={};for(T in m)T==="ease"||T==="easeEach"||G_(T,m[T],E,m.easeEach);for(T in E)for(V=E[T].sort(function(ee,G){return ee.t-G.t}),R=0,k=0;k<V.length;k++)U=V[k],K={ease:U.e,duration:(U.t-(k?V[k-1].t:0))/100*u},K[T]=U.v,_.to(y,K,R),R+=K.duration;_.duration()<u&&_.to({},{duration:u-_.duration()})}}u||a.duration(u=_.duration())}else a.timeline=0;return h===!0&&!Op&&(si=En(a),Pe.killTweensOf(y),si=0),cn(x,En(a),o),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!u&&!m&&a._start===Ae(x._time)&&Jt(f)&&k_(En(a))&&x.data!=="nested")&&(a._tTime=-xe,a.render(Math.max(0,-d)||0)),w&&Cv(En(a),w),a}var r=e.prototype;return r.render=function(i,o,s){var a=this._time,l=this._tDur,u=this._dur,d=i<0,f=i>l-xe&&!d?l:i<xe?0:i,p,h,m,g,w,v,x,y,_;if(!u)T_(this,i,o,s);else if(f!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(p=f,y=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+i,o,s);if(p=Ae(f%g),f===l?(m=this._repeat,p=u):(w=Ae(f/g),m=~~w,m&&m===w?(p=u,m--):p>u&&(p=u)),v=this._yoyo&&m&1,v&&(_=this._yEase,p=u-p),w=gs(this._tTime,g),p===a&&!s&&this._initted&&m===w)return this._tTime=f,this;m!==w&&(y&&this._yEase&&Hv(y,v),this.vars.repeatRefresh&&!v&&!this._lock&&p!==g&&this._initted&&(this._lock=s=1,this.render(Ae(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(Ev(this,d?i:p,s,o,f))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&m!==w))return this;if(u!==this._dur)return this.render(i,o,s)}if(this._tTime=f,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(_||this._ease)(p/u),this._from&&(this.ratio=x=1-x),!a&&f&&!o&&!w&&(gr(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;y&&y.render(i<0?i:y._dur*y._ease(p/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(d&&uf(this,i,o,s),gr(this,"onUpdate")),this._repeat&&m!==w&&this.vars.onRepeat&&!o&&this.parent&&gr(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&uf(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ti(this,1),!o&&!(d&&!a)&&(f||a||v)&&(gr(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,o,s,a,l){Va||fr.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Vp(this,u),d=this._ease(u/this._dur),Y_(this,i,o,s,a,d,u,l)?this.resetTo(i,o,s,a,1):(mu(this,0),this.parent||Sv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Xs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,si&&si.vars.overwrite!==!0)._first||Xs(this),this.parent&&s!==this.timeline.totalDuration()&&ms(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?zr(i):a,u=this._ptLookup,d=this._pt,f,p,h,m,g,w,v;if((!o||o==="all")&&b_(a,l))return o==="all"&&(this._pt=0),Xs(this);for(f=this._op=this._op||[],o!=="all"&&(ct(o)&&(g={},er(o,function(x){return g[x]=1}),o=g),o=V_(a,o)),v=a.length;v--;)if(~l.indexOf(a[v])){p=u[v],o==="all"?(f[v]=o,m=p,h={}):(h=f[v]=f[v]||{},m=o);for(g in m)w=p&&p[g],w&&((!("kill"in w.d)||w.d.kill(g)===!0)&&hu(this,w,"_pt"),delete p[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&d&&Xs(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return da(1,arguments)},e.delayedCall=function(i,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,o,s){return da(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,s){return Pe.killTweensOf(i,o,s)},e}(Ga);_r($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});er("staggerTo,staggerFrom,staggerFromTo",function(t){$e[t]=function(){var e=new Bt,r=ff.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var Gp=function(e,r,n){return e[r]=n},qv=function(e,r,n){return e[r](n)},q_=function(e,r,n,i){return e[r](i.fp,n)},X_=function(e,r,n){return e.setAttribute(r,n)},qp=function(e,r){return Be(e[r])?qv:Mp(e[r])&&e.setAttribute?X_:Gp},Xv=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},K_=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Kv=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},Xp=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},$_=function(e,r,n,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(e,r,n),o=s},Q_=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?hu(this,r,"_pt"):r.dep||(n=1),r=i;return!n},Z_=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},$v=function(e){for(var r=e._pt,n,i,o,s;r;){for(n=r._next,i=o;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:s)?r._prev._next=r:o=r,(r._next=i)?i._prev=r:s=r,r=n}e._pt=o},tr=function(){function t(r,n,i,o,s,a,l,u,d){this.t=n,this.s=o,this.c=s,this.p=i,this.r=a||Xv,this.d=l||this,this.set=u||Gp,this.pr=d||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,o){this.mSet=this.mSet||this.set,this.set=Z_,this.m=n,this.mt=o,this.tween=i},t}();er(Hp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return Bp[t]=1});br.TweenMax=br.TweenLite=$e;br.TimelineLite=br.TimelineMax=Bt;Pe=new Bt({sortChildren:!1,defaults:ps,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yr.stringFilter=Fv;var ro=[],ic={},J_=[],qg=0,e5=0,Ju=function(e){return(ic[e]||J_).map(function(r){return r()})},mf=function(){var e=Date.now(),r=[];e-qg>2&&(Ju("matchMediaInit"),ro.forEach(function(n){var i=n.queries,o=n.conditions,s,a,l,u;for(a in i)s=sn.matchMedia(i[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,u=1);u&&(n.revert(),l&&r.push(n))}),Ju("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qg=e,Ju("matchMedia"))},Qv=function(){function t(r,n){this.selector=n&&pf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=e5++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,o){Be(n)&&(o=i,i=n,n=Be);var s=this,a=function(){var u=je,d=s.selector,f;return u&&u!==s&&u.data.push(s),o&&(s.selector=pf(o)),je=s,f=i.apply(s,arguments),Be(f)&&s._r.push(f),je=u,s.selector=d,s.isReverted=!1,f};return s.last=a,n===Be?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var i=je;je=null,n(this),je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof $e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var o=this;if(n?function(){for(var a=o.getTweens(),l=o.data.length,u;l--;)u=o.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(d){return a.splice(a.indexOf(d),1)}));for(a.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=o.data.length;l--;)u=o.data[l],u instanceof Bt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof $e)&&u.revert&&u.revert(n);o._r.forEach(function(d){return d(n,o)}),o.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=ro.length;s--;)ro[s].id===this.id&&ro.splice(s,1)},e.revert=function(n){this.kill(n||{})},t}(),t5=function(){function t(r){this.contexts=[],this.scope=r,je&&je.data.push(this)}var e=t.prototype;return e.add=function(n,i,o){xn(n)||(n={matches:n});var s=new Qv(0,o||this.scope),a=s.conditions={},l,u,d;je&&!s.selector&&(s.selector=je.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(u in n)u==="all"?d=1:(l=sn.matchMedia(n[u]),l&&(ro.indexOf(s)<0&&ro.push(s),(a[u]=l.matches)&&(d=1),l.addListener?l.addListener(mf):l.addEventListener("change",mf)));return d&&i(s,function(f){return s.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),Hc={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return Mv(i)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,r){return Pe.getTweensOf(e,r)},getProperty:function(e,r,n,i){ct(e)&&(e=zr(e)[0]);var o=Ji(e||{}).get,s=n?kv:_v;return n==="native"&&(n=""),e&&(r?s((ur[r]&&ur[r].get||o)(e,r,n,i)):function(a,l,u){return s((ur[a]&&ur[a].get||o)(e,a,l,u))})},quickSetter:function(e,r,n){if(e=zr(e),e.length>1){var i=e.map(function(d){return nr.quickSetter(d,r,n)}),o=i.length;return function(d){for(var f=o;f--;)i[f](d)}}e=e[0]||{};var s=ur[r],a=Ji(e),l=a.harness&&(a.harness.aliases||{})[r]||r,u=s?function(d){var f=new s;Vo._pt=0,f.init(e,n?d+n:d,Vo,0,[e]),f.render(1,f),Vo._pt&&Xp(1,Vo)}:a.set(e,l);return s?u:function(d){return u(e,l,n?d+n:d,a,1)}},quickTo:function(e,r,n){var i,o=nr.to(e,_r((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),s=function(l,u,d){return o.resetTo(r,l,u,d)};return s.tween=o,s},isTweening:function(e){return Pe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=to(e.ease,ps.ease)),Wg(ps,e||{})},config:function(e){return Wg(yr,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,o=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ur[a]&&!br[a]&&Wa(r+" effect requires "+a+" plugin.")}),Ku[r]=function(a,l,u){return n(zr(a),_r(l||{},o),u)},s&&(Bt.prototype[r]=function(a,l,u){return this.add(Ku[r](a,xn(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,r){ae[e]=to(r)},parseEase:function(e,r){return arguments.length?to(e,r):ae},getById:function(e){return Pe.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new Bt(e),i,o;for(n.smoothChildTiming=Jt(e.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)o=i._next,(r||!(!i._dur&&i instanceof $e&&i.vars.onComplete===i._targets[0]))&&cn(n,i,i._start-i._delay),i=o;return cn(Pe,n,0),n},context:function(e,r){return e?new Qv(e,r):je},matchMedia:function(e){return new t5(e)},matchMediaRefresh:function(){return ro.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||mf()},addEventListener:function(e,r){var n=ic[e]||(ic[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=ic[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:z_,wrapYoyo:L_,distribute:Av,random:Pv,snap:Rv,normalize:P_,getUnit:Et,clamp:j_,splitColor:Dv,toArray:zr,selector:pf,mapRange:Lv,pipe:A_,unitize:R_,interpolate:O_,shuffle:Nv},install:xv,effects:Ku,ticker:fr,updateRoot:Bt.updateRoot,plugins:ur,globalTimeline:Pe,core:{PropTween:tr,globals:vv,Tween:$e,Timeline:Bt,Animation:Ga,getCache:Ji,_removeLinkedListItem:hu,reverting:function(){return gt},context:function(e){return e&&je&&(je.data.push(e),e._ctx=je),je},suppressOverwrites:function(e){return Op=e}}};er("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Hc[t]=$e[t]});fr.add(Bt.updateRoot);Vo=Hc.to({},{duration:0});var r5=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},n5=function(e,r){var n=e._targets,i,o,s;for(i in r)for(o=n.length;o--;)s=e._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=r5(s,i)),s&&s.modifier&&s.modifier(r[i],e,n[o],i))},ed=function(e,r){return{name:e,headless:1,rawVars:1,init:function(i,o,s){s._onInit=function(a){var l,u;if(ct(o)&&(l={},er(o,function(d){return l[d]=1}),o=l),r){l={};for(u in o)l[u]=r(o[u]);o=l}n5(a,o)}}}},nr=Hc.registerPlugin({name:"attr",init:function(e,r,n,i,o){var s,a,l;this.tween=n;for(s in r)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",r[s],i,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,r){for(var n=r._pt;n;)gt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},ed("roundProps",hf),ed("modifiers"),ed("snap",Rv))||Hc;$e.version=Bt.version=nr.version="3.14.2";mv=1;Dp()&&xs();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xg,ai,es,Kp,Xi,Kg,$p,i5=function(){return typeof window<"u"},Wn={},Wi=180/Math.PI,ts=Math.PI/180,So=Math.atan2,$g=1e8,Qp=/([A-Z])/g,o5=/(left|right|width|margin|padding|x)/i,s5=/[\s,\(]\S/,un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xf=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},a5=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},l5=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},c5=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},u5=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},Zv=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},Jv=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},d5=function(e,r,n){return e.style[r]=n},f5=function(e,r,n){return e.style.setProperty(r,n)},p5=function(e,r,n){return e._gsap[r]=n},h5=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},g5=function(e,r,n,i,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},m5=function(e,r,n,i,o){var s=e._gsap;s[r]=n,s.renderTransform(o,s)},ze="transform",rr=ze+"Origin",x5=function t(e,r){var n=this,i=this.target,o=i.style,s=i._gsap;if(e in Wn&&o){if(this.tfm=this.tfm||{},e!=="transform")e=un[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Nn(i,a)}):this.tfm[e]=s.x?s[e]:Nn(i,e),e===rr&&(this.tfm.zOrigin=s.zOrigin);else return un.transform.split(",").forEach(function(a){return t.call(n,a,r)});if(this.props.indexOf(ze)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(rr,r,"")),e=ze}(o||r)&&this.props.push(e,r,o[e])},e1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},v5=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?r[e[o]](e[o+2]):r[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Qp,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),o=$p(),(!o||!o.isStart)&&!n[ze]&&(e1(n),i.zOrigin&&n[rr]&&(n[rr]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},t1=function(e,r){var n={target:e,props:[],revert:v5,save:x5};return e._gsap||nr.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(i){return n.save(i)}),n},r1,vf=function(e,r){var n=ai.createElementNS?ai.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ai.createElement(e);return n&&n.style?n:ai.createElement(e)},mr=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(Qp,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,vs(r)||r,1)||""},Qg="O,Moz,ms,Ms,Webkit".split(","),vs=function(e,r,n){var i=r||Xi,o=i.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Qg[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Qg[s]:"")+e},yf=function(){i5()&&window.document&&(Xg=window,ai=Xg.document,es=ai.documentElement,Xi=vf("div")||{style:{}},vf("div"),ze=vs(ze),rr=ze+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",r1=!!vs("perspective"),$p=nr.core.reverting,Kp=1)},Zg=function(e){var r=e.ownerSVGElement,n=vf("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),o;i.style.display="block",n.appendChild(i),es.appendChild(n);try{o=i.getBBox()}catch{}return n.removeChild(i),es.removeChild(n),o},Jg=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},n1=function(e){var r,n;try{r=e.getBBox()}catch{r=Zg(e),n=1}return r&&(r.width||r.height)||n||(r=Zg(e)),r&&!r.width&&!r.x&&!r.y?{x:+Jg(e,["x","cx","x1"])||0,y:+Jg(e,["y","cy","y1"])||0,width:0,height:0}:r},i1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&n1(e))},Ci=function(e,r){if(r){var n=e.style,i;r in Wn&&r!==rr&&(r=ze),n.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(i==="--"?r:r.replace(Qp,"-$1").toLowerCase())):n.removeAttribute(r)}},li=function(e,r,n,i,o,s){var a=new tr(e._pt,r,n,0,1,s?Jv:Zv);return e._pt=a,a.b=i,a.e=o,e._props.push(n),a},em={deg:1,rad:1,turn:1},y5={grid:1,flex:1},Ei=function t(e,r,n,i){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",a=Xi.style,l=o5.test(r),u=e.tagName.toLowerCase()==="svg",d=(u?"client":"offset")+(l?"Width":"Height"),f=100,p=i==="px",h=i==="%",m,g,w,v;if(i===s||!o||em[i]||em[s])return o;if(s!=="px"&&!p&&(o=t(e,r,n,"px")),v=e.getCTM&&i1(e),(h||s==="%")&&(Wn[r]||~r.indexOf("adius")))return m=v?e.getBBox()[l?"width":"height"]:e[d],Ve(h?o/m*f:o/100*m);if(a[l?"width":"height"]=f+(p?s:i),g=i!=="rem"&&~r.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ai||!g.appendChild)&&(g=ai.body),w=g._gsap,w&&h&&w.width&&l&&w.time===fr.time&&!w.uncache)return Ve(o/w.width*f);if(h&&(r==="height"||r==="width")){var x=e.style[r];e.style[r]=f+i,m=e[d],x?e.style[r]=x:Ci(e,r)}else(h||s==="%")&&!y5[mr(g,"display")]&&(a.position=mr(e,"position")),g===e&&(a.position="static"),g.appendChild(Xi),m=Xi[d],g.removeChild(Xi),a.position="absolute";return l&&h&&(w=Ji(g),w.time=fr.time,w.width=g[d]),Ve(p?m*o/f:m&&o?f/m*o:0)},Nn=function(e,r,n,i){var o;return Kp||yf(),r in un&&r!=="transform"&&(r=un[r],~r.indexOf(",")&&(r=r.split(",")[0])),Wn[r]&&r!=="transform"?(o=Xa(e,i),o=r!=="transformOrigin"?o[r]:o.svg?o.origin:Uc(mr(e,rr))+" "+o.zOrigin+"px"):(o=e.style[r],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=Wc[r]&&Wc[r](e,r,n)||mr(e,r)||wv(e,r)||(r==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Ei(e,r,o,n)+n:o},w5=function(e,r,n,i){if(!n||n==="none"){var o=vs(r,e,1),s=o&&mr(e,o,1);s&&s!==n?(r=o,n=s):r==="borderColor"&&(n=mr(e,"borderTopColor"))}var a=new tr(this._pt,e.style,r,0,1,Kv),l=0,u=0,d,f,p,h,m,g,w,v,x,y,_,k;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mr(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[r],e.style[r]=i,i=mr(e,r)||i,g?e.style[r]=g:Ci(e,r)),d=[n,i],Fv(d),n=d[0],i=d[1],p=n.match(Yo)||[],k=i.match(Yo)||[],k.length){for(;f=Yo.exec(i);)w=f[0],x=i.substring(l,f.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),w!==(g=p[u++]||"")&&(h=parseFloat(g)||0,_=g.substr((h+"").length),w.charAt(1)==="="&&(w=Jo(h,w)+_),v=parseFloat(w),y=w.substr((v+"").length),l=Yo.lastIndex-y.length,y||(y=y||yr.units[r]||_,l===i.length&&(i+=y,a.e+=y)),_!==y&&(h=Ei(e,r,g,y)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:h,c:v-h,m:m&&m<4||r==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=r==="display"&&i==="none"?Jv:Zv;return gv.test(i)&&(a.e=0),this._pt=a,a},tm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b5=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=tm[n]||n,r[1]=tm[i]||i,r.join(" ")},_5=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,o=r.u,s=n._gsap,a,l,u;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),u=o.length;--u>-1;)a=o[u],Wn[a]&&(l=1,a=a==="transformOrigin"?rr:ze),Ci(n,a);l&&(Ci(n,ze),s&&(s.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xa(n,1),s.uncache=1,e1(i)))}},Wc={clearProps:function(e,r,n,i,o){if(o.data!=="isFromStart"){var s=e._pt=new tr(e._pt,r,n,0,0,_5);return s.u=i,s.pr=-10,s.tween=o,e._props.push(n),1}}},qa=[1,0,0,1,0,0],o1={},s1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rm=function(e){var r=mr(e,ze);return s1(r)?qa:r.substr(7).match(hv).map(Ve)},Zp=function(e,r){var n=e._gsap||Ji(e),i=e.style,o=rm(e),s,a,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?qa:o):(o===qa&&!e.offsetParent&&e!==es&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,es.appendChild(e)),o=rm(e),l?i.display=l:Ci(e,"display"),u&&(a?s.insertBefore(e,a):s?s.appendChild(e):es.removeChild(e))),r&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},wf=function(e,r,n,i,o,s){var a=e._gsap,l=o||Zp(e,!0),u=a.xOrigin||0,d=a.yOrigin||0,f=a.xOffset||0,p=a.yOffset||0,h=l[0],m=l[1],g=l[2],w=l[3],v=l[4],x=l[5],y=r.split(" "),_=parseFloat(y[0])||0,k=parseFloat(y[1])||0,E,C,T,j;n?l!==qa&&(C=h*w-m*g)&&(T=_*(w/C)+k*(-g/C)+(g*x-w*v)/C,j=_*(-m/C)+k*(h/C)-(h*x-m*v)/C,_=T,k=j):(E=n1(e),_=E.x+(~y[0].indexOf("%")?_/100*E.width:_),k=E.y+(~(y[1]||y[0]).indexOf("%")?k/100*E.height:k)),i||i!==!1&&a.smooth?(v=_-u,x=k-d,a.xOffset=f+(v*h+x*g)-v,a.yOffset=p+(v*m+x*w)-x):a.xOffset=a.yOffset=0,a.xOrigin=_,a.yOrigin=k,a.smooth=!!i,a.origin=r,a.originIsAbsolute=!!n,e.style[rr]="0px 0px",s&&(li(s,a,"xOrigin",u,_),li(s,a,"yOrigin",d,k),li(s,a,"xOffset",f,a.xOffset),li(s,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",_+" "+k)},Xa=function(e,r){var n=e._gsap||new Uv(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,o=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),u=mr(e,rr)||"0",d,f,p,h,m,g,w,v,x,y,_,k,E,C,T,j,N,M,R,V,U,K,ee,G,z,D,S,X,le,xt,fe,He;return d=f=p=g=w=v=x=y=_=0,h=m=1,n.svg=!!(e.getCTM&&i1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),C=Zp(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),u=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!r&&e.getAttribute("data-svg-origin"),wf(e,G||u,!!G||n.originIsAbsolute,n.smooth!==!1,C)),k=n.xOrigin||0,E=n.yOrigin||0,C!==qa&&(M=C[0],R=C[1],V=C[2],U=C[3],d=K=C[4],f=ee=C[5],C.length===6?(h=Math.sqrt(M*M+R*R),m=Math.sqrt(U*U+V*V),g=M||R?So(R,M)*Wi:0,x=V||U?So(V,U)*Wi+g:0,x&&(m*=Math.abs(Math.cos(x*ts))),n.svg&&(d-=k-(k*M+E*V),f-=E-(k*R+E*U))):(He=C[6],xt=C[7],S=C[8],X=C[9],le=C[10],fe=C[11],d=C[12],f=C[13],p=C[14],T=So(He,le),w=T*Wi,T&&(j=Math.cos(-T),N=Math.sin(-T),G=K*j+S*N,z=ee*j+X*N,D=He*j+le*N,S=K*-N+S*j,X=ee*-N+X*j,le=He*-N+le*j,fe=xt*-N+fe*j,K=G,ee=z,He=D),T=So(-V,le),v=T*Wi,T&&(j=Math.cos(-T),N=Math.sin(-T),G=M*j-S*N,z=R*j-X*N,D=V*j-le*N,fe=U*N+fe*j,M=G,R=z,V=D),T=So(R,M),g=T*Wi,T&&(j=Math.cos(T),N=Math.sin(T),G=M*j+R*N,z=K*j+ee*N,R=R*j-M*N,ee=ee*j-K*N,M=G,K=z),w&&Math.abs(w)+Math.abs(g)>359.9&&(w=g=0,v=180-v),h=Ve(Math.sqrt(M*M+R*R+V*V)),m=Ve(Math.sqrt(ee*ee+He*He)),T=So(K,ee),x=Math.abs(T)>2e-4?T*Wi:0,_=fe?1/(fe<0?-fe:fe):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!s1(mr(e,ze)),G&&e.setAttribute("transform",G))),Math.abs(x)>90&&Math.abs(x)<270&&(o?(h*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),r=r||n.uncache,n.x=d-((n.xPercent=d&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=p+s,n.scaleX=Ve(h),n.scaleY=Ve(m),n.rotation=Ve(g)+a,n.rotationX=Ve(w)+a,n.rotationY=Ve(v)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=_+s,(n.zOrigin=parseFloat(u.split(" ")[2])||!r&&n.zOrigin||0)&&(i[rr]=Uc(u)),n.xOffset=n.yOffset=0,n.force3D=yr.force3D,n.renderTransform=n.svg?S5:r1?a1:k5,n.uncache=0,n},Uc=function(e){return(e=e.split(" "))[0]+" "+e[1]},td=function(e,r,n){var i=Et(r);return Ve(parseFloat(r)+parseFloat(Ei(e,"x",n+"px",i)))+i},k5=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,a1(e,r)},Ii="0deg",Is="0px",Fi=") ",a1=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.z,u=n.rotation,d=n.rotationY,f=n.rotationX,p=n.skewX,h=n.skewY,m=n.scaleX,g=n.scaleY,w=n.transformPerspective,v=n.force3D,x=n.target,y=n.zOrigin,_="",k=v==="auto"&&e&&e!==1||v===!0;if(y&&(f!==Ii||d!==Ii)){var E=parseFloat(d)*ts,C=Math.sin(E),T=Math.cos(E),j;E=parseFloat(f)*ts,j=Math.cos(E),s=td(x,s,C*j*-y),a=td(x,a,-Math.sin(E)*-y),l=td(x,l,T*j*-y+y)}w!==Is&&(_+="perspective("+w+Fi),(i||o)&&(_+="translate("+i+"%, "+o+"%) "),(k||s!==Is||a!==Is||l!==Is)&&(_+=l!==Is||k?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Fi),u!==Ii&&(_+="rotate("+u+Fi),d!==Ii&&(_+="rotateY("+d+Fi),f!==Ii&&(_+="rotateX("+f+Fi),(p!==Ii||h!==Ii)&&(_+="skew("+p+", "+h+Fi),(m!==1||g!==1)&&(_+="scale("+m+", "+g+Fi),x.style[ze]=_||"translate(0, 0)"},S5=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,s=n.x,a=n.y,l=n.rotation,u=n.skewX,d=n.skewY,f=n.scaleX,p=n.scaleY,h=n.target,m=n.xOrigin,g=n.yOrigin,w=n.xOffset,v=n.yOffset,x=n.forceCSS,y=parseFloat(s),_=parseFloat(a),k,E,C,T,j;l=parseFloat(l),u=parseFloat(u),d=parseFloat(d),d&&(d=parseFloat(d),u+=d,l+=d),l||u?(l*=ts,u*=ts,k=Math.cos(l)*f,E=Math.sin(l)*f,C=Math.sin(l-u)*-p,T=Math.cos(l-u)*p,u&&(d*=ts,j=Math.tan(u-d),j=Math.sqrt(1+j*j),C*=j,T*=j,d&&(j=Math.tan(d),j=Math.sqrt(1+j*j),k*=j,E*=j)),k=Ve(k),E=Ve(E),C=Ve(C),T=Ve(T)):(k=f,T=p,E=C=0),(y&&!~(s+"").indexOf("px")||_&&!~(a+"").indexOf("px"))&&(y=Ei(h,"x",s,"px"),_=Ei(h,"y",a,"px")),(m||g||w||v)&&(y=Ve(y+m-(m*k+g*C)+w),_=Ve(_+g-(m*E+g*T)+v)),(i||o)&&(j=h.getBBox(),y=Ve(y+i/100*j.width),_=Ve(_+o/100*j.height)),j="matrix("+k+","+E+","+C+","+T+","+y+","+_+")",h.setAttribute("transform",j),x&&(h.style[ze]=j)},T5=function(e,r,n,i,o){var s=360,a=ct(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?Wi:1),u=l-i,d=i+u+"deg",f,p;return a&&(f=o.split("_")[1],f==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),f==="cw"&&u<0?u=(u+s*$g)%s-~~(u/s)*s:f==="ccw"&&u>0&&(u=(u-s*$g)%s-~~(u/s)*s)),e._pt=p=new tr(e._pt,r,n,i,u,a5),p.e=d,p.u="deg",e._props.push(n),p},nm=function(e,r){for(var n in r)e[n]=r[n];return e},C5=function(e,r,n){var i=nm({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,u,d,f,p,h,m;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),s[ze]=r,a=Xa(n,1),Ci(n,ze),n.setAttribute("transform",u)):(u=getComputedStyle(n)[ze],s[ze]=r,a=Xa(n,1),s[ze]=u);for(l in Wn)u=i[l],d=a[l],u!==d&&o.indexOf(l)<0&&(h=Et(u),m=Et(d),f=h!==m?Ei(n,l,u,m):parseFloat(u),p=parseFloat(d),e._pt=new tr(e._pt,a,l,f,p-f,xf),e._pt.u=m||0,e._props.push(l));nm(a,i)};er("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",o="Left",s=(e<3?[r,n,i,o]:[r+o,r+n,i+n,i+o]).map(function(a){return e<2?t+a:"border"+a+t});Wc[e>1?"border"+t:t]=function(a,l,u,d,f){var p,h;if(arguments.length<4)return p=s.map(function(m){return Nn(a,m,u)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(d+"").split(" "),h={},s.forEach(function(m,g){return h[m]=p[g]=p[g]||p[(g-1)/2|0]}),a.init(l,h,f)}});var l1={name:"css",register:yf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,o){var s=this._props,a=e.style,l=n.vars.startAt,u,d,f,p,h,m,g,w,v,x,y,_,k,E,C,T,j;Kp||yf(),this.styles=this.styles||t1(e),T=this.styles.props,this.tween=n;for(g in r)if(g!=="autoRound"&&(d=r[g],!(ur[g]&&Yv(g,r,n,i,e,o)))){if(h=typeof d,m=Wc[g],h==="function"&&(d=d.call(n,i,e,o),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=Ya(d)),m)m(this,e,g,d,n)&&(C=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",wi.lastIndex=0,wi.test(u)||(w=Et(u),v=Et(d),v?w!==v&&(u=Ei(e,g,u,v)+v):w&&(d+=w)),this.add(a,"setProperty",u,d,i,o,0,0,g),s.push(g),T.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(n,i,e,o):l[g],ct(u)&&~u.indexOf("random(")&&(u=Ya(u)),Et(u+"")||u==="auto"||(u+=yr.units[g]||Et(Nn(e,g))||""),(u+"").charAt(1)==="="&&(u=Nn(e,g))):u=Nn(e,g),p=parseFloat(u),x=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),x&&(d=d.substr(2)),f=parseFloat(d),g in un&&(g==="autoAlpha"&&(p===1&&Nn(e,"visibility")==="hidden"&&f&&(p=0),T.push("visibility",0,a.visibility),li(this,a,"visibility",p?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=un[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Wn,y){if(this.styles.save(g),j=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=mr(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=d,d=mr(e,"perspective"),N?e.style.perspective=N:Ci(e,"perspective")}f=parseFloat(d)}if(_||(k=e._gsap,k.renderTransform&&!r.parseTransform||Xa(e,r.parseTransform),E=r.smoothOrigin!==!1&&k.smooth,_=this._pt=new tr(this._pt,a,ze,0,1,k.renderTransform,k,0,-1),_.dep=1),g==="scale")this._pt=new tr(this._pt,k,"scaleY",k.scaleY,(x?Jo(k.scaleY,x+f):f)-k.scaleY||0,xf),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){T.push(rr,0,a[rr]),d=b5(d),k.svg?wf(e,d,0,E,0,this):(v=parseFloat(d.split(" ")[2])||0,v!==k.zOrigin&&li(this,k,"zOrigin",k.zOrigin,v),li(this,a,g,Uc(u),Uc(d)));continue}else if(g==="svgOrigin"){wf(e,d,1,E,0,this);continue}else if(g in o1){T5(this,k,g,p,x?Jo(p,x+d):d);continue}else if(g==="smoothOrigin"){li(this,k,"smooth",k.smooth,d);continue}else if(g==="force3D"){k[g]=d;continue}else if(g==="transform"){C5(this,d,e);continue}}else g in a||(g=vs(g)||g);if(y||(f||f===0)&&(p||p===0)&&!s5.test(d)&&g in a)w=(u+"").substr((p+"").length),f||(f=0),v=Et(d)||(g in yr.units?yr.units[g]:w),w!==v&&(p=Ei(e,g,u,v)),this._pt=new tr(this._pt,y?k:a,g,p,(x?Jo(p,x+f):f)-p,!y&&(v==="px"||g==="zIndex")&&r.autoRound!==!1?u5:xf),this._pt.u=v||0,y&&j!==d?(this._pt.b=u,this._pt.e=j,this._pt.r=c5):w!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=l5);else if(g in a)w5.call(this,e,g,u,x?x+d:d);else if(g in e)this.add(e,g,u||e[g],x?x+d:d,i,o);else if(g!=="parseTransform"){Fp(g,d);continue}y||(g in a?T.push(g,0,a[g]):typeof e[g]=="function"?T.push(g,2,e[g]()):T.push(g,1,u||e[g])),s.push(g)}}C&&$v(this)},render:function(e,r){if(r.tween._time||!$p())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:Nn,aliases:un,getSetter:function(e,r,n){var i=un[r];return i&&i.indexOf(",")<0&&(r=i),r in Wn&&r!==rr&&(e._gsap.x||Nn(e,"x"))?n&&Kg===n?r==="scale"?h5:p5:(Kg=n||{})&&(r==="scale"?g5:m5):e.style&&!Mp(e.style[r])?d5:~r.indexOf("-")?f5:qp(e,r)},core:{_removeProperty:Ci,_getMatrix:Zp}};nr.utils.checkPrefix=vs;nr.core.getStyleSaver=t1;(function(t,e,r,n){var i=er(t+","+e+","+r,function(o){Wn[o]=1});er(e,function(o){yr.units[o]="deg",o1[o]=1}),un[i[13]]=t+","+e,er(n,function(o){var s=o.split(":");un[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");er("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){yr.units[t]="px"});nr.registerPlugin(l1);var P=nr.registerPlugin(l1)||nr;P.core.Tween;function E5(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j5(t,e,r){return e&&E5(t.prototype,e),t}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pt,oc,pr,ci,ui,rs,c1,Ui,pa,u1,zn,Vr,d1,f1=function(){return pt||typeof window<"u"&&(pt=window.gsap)&&pt.registerPlugin&&pt},p1=1,Go=[],ne=[],gn=[],ha=Date.now,bf=function(e,r){return r},N5=function(){var e=pa.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ne),i.push.apply(i,gn),ne=n,gn=i,bf=function(s,a){return r[s](a)}},bi=function(e,r){return~gn.indexOf(e)&&gn[gn.indexOf(e)+1][r]},ga=function(e){return!!~u1.indexOf(e)},Ot=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:i!==!1,capture:!!o})},Lt=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Al="scrollLeft",Rl="scrollTop",_f=function(){return zn&&zn.isPressed||ne.cache++},Yc=function(e,r){var n=function i(o){if(o||o===0){p1&&(pr.history.scrollRestoration="manual");var s=zn&&zn.isPressed;o=i.v=Math.round(o)||(zn&&zn.iOS?1:0),e(o),i.cacheID=ne.cache,s&&bf("ss",o)}else(r||ne.cache!==i.cacheID||bf("ref"))&&(i.cacheID=ne.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Ht={s:Al,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yc(function(t){return arguments.length?pr.scrollTo(t,tt.sc()):pr.pageXOffset||ci[Al]||ui[Al]||rs[Al]||0})},tt={s:Rl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ht,sc:Yc(function(t){return arguments.length?pr.scrollTo(Ht.sc(),t):pr.pageYOffset||ci[Rl]||ui[Rl]||rs[Rl]||0})},qt=function(e,r){return(r&&r._ctx&&r._ctx.selector||pt.utils.toArray)(e)[0]||(typeof e=="string"&&pt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},A5=function(e,r){for(var n=r.length;n--;)if(r[n]===e||r[n].contains(e))return!0;return!1},ji=function(e,r){var n=r.s,i=r.sc;ga(e)&&(e=ci.scrollingElement||ui);var o=ne.indexOf(e),s=i===tt.sc?1:2;!~o&&(o=ne.push(e)-1),ne[o+s]||Ot(e,"scroll",_f);var a=ne[o+s],l=a||(ne[o+s]=Yc(bi(e,n),!0)||(ga(e)?i:Yc(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,a||(l.smooth=pt.getProperty(e,"scrollBehavior")==="smooth"),l},kf=function(e,r,n){var i=e,o=e,s=ha(),a=s,l=r||50,u=Math.max(500,l*3),d=function(m,g){var w=ha();g||w-s>l?(o=i,i=m,a=s,s=w):n?i+=m:i=o+(m-o)/(w-a)*(s-a)},f=function(){o=i=n?0:i,a=s=0},p=function(m){var g=a,w=o,v=ha();return(m||m===0)&&m!==i&&d(m),s===a||v-a>u?0:(i+(n?w:-w))/((n?v:s)-g)*1e3};return{update:d,reset:f,getVelocity:p}},Fs=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},im=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},h1=function(){pa=pt.core.globals().ScrollTrigger,pa&&pa.core&&N5()},g1=function(e){return pt=e||f1(),!oc&&pt&&typeof document<"u"&&document.body&&(pr=window,ci=document,ui=ci.documentElement,rs=ci.body,u1=[pr,ci,ui,rs],pt.utils.clamp,d1=pt.core.context||function(){},Ui="onpointerenter"in rs?"pointer":"mouse",c1=qe.isTouch=pr.matchMedia&&pr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in pr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Vr=qe.eventTypes=("ontouchstart"in ui?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ui?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return p1=0},500),h1(),oc=1),oc};Ht.op=tt;ne.cache=0;var qe=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){oc||g1(pt)||console.warn("Please gsap.registerPlugin(Observer)"),pa||h1();var i=n.tolerance,o=n.dragMinimum,s=n.type,a=n.target,l=n.lineHeight,u=n.debounce,d=n.preventDefault,f=n.onStop,p=n.onStopDelay,h=n.ignore,m=n.wheelSpeed,g=n.event,w=n.onDragStart,v=n.onDragEnd,x=n.onDrag,y=n.onPress,_=n.onRelease,k=n.onRight,E=n.onLeft,C=n.onUp,T=n.onDown,j=n.onChangeX,N=n.onChangeY,M=n.onChange,R=n.onToggleX,V=n.onToggleY,U=n.onHover,K=n.onHoverEnd,ee=n.onMove,G=n.ignoreCheck,z=n.isNormalizer,D=n.onGestureStart,S=n.onGestureEnd,X=n.onWheel,le=n.onEnable,xt=n.onDisable,fe=n.onClick,He=n.scrollSpeed,ke=n.capture,we=n.allowClicks,Rt=n.lockAxis,vt=n.onLockAxis;this.target=a=qt(a)||ui,this.vars=n,h&&(h=pt.utils.toArray(h)),i=i||1e-9,o=o||0,m=m||1,He=He||1,s=s||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(pr.getComputedStyle(rs).lineHeight)||22);var Vn,Pt,zt,ce,We,Vt,ir,A=this,or=0,wn=0,Gn=n.passive||!d&&n.passive!==!1,De=ji(a,Ht),bn=ji(a,tt),qn=De(),zi=bn(),nt=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Vr[0]==="pointerdown",Xn=ga(a),Ue=a.ownerDocument||ci,Fr=[0,0,0],Tr=[0,0,0],_n=0,Ts=function(){return _n=ha()},Xe=function(q,de){return(A.event=q)&&h&&A5(q.target,h)||de&&nt&&q.pointerType!=="touch"||G&&G(q,de)},ll=function(){A._vx.reset(),A._vy.reset(),Pt.pause(),f&&f(A)},kn=function(){var q=A.deltaX=im(Fr),de=A.deltaY=im(Tr),O=Math.abs(q)>=i,$=Math.abs(de)>=i;M&&(O||$)&&M(A,q,de,Fr,Tr),O&&(k&&A.deltaX>0&&k(A),E&&A.deltaX<0&&E(A),j&&j(A),R&&A.deltaX<0!=or<0&&R(A),or=A.deltaX,Fr[0]=Fr[1]=Fr[2]=0),$&&(T&&A.deltaY>0&&T(A),C&&A.deltaY<0&&C(A),N&&N(A),V&&A.deltaY<0!=wn<0&&V(A),wn=A.deltaY,Tr[0]=Tr[1]=Tr[2]=0),(ce||zt)&&(ee&&ee(A),zt&&(w&&zt===1&&w(A),x&&x(A),zt=0),ce=!1),Vt&&!(Vt=!1)&&vt&&vt(A),We&&(X(A),We=!1),Vn=0},wo=function(q,de,O){Fr[O]+=q,Tr[O]+=de,A._vx.update(q),A._vy.update(de),u?Vn||(Vn=requestAnimationFrame(kn)):kn()},bo=function(q,de){Rt&&!ir&&(A.axis=ir=Math.abs(q)>Math.abs(de)?"x":"y",Vt=!0),ir!=="y"&&(Fr[2]+=q,A._vx.update(q,!0)),ir!=="x"&&(Tr[2]+=de,A._vy.update(de,!0)),u?Vn||(Vn=requestAnimationFrame(kn)):kn()},Kn=function(q){if(!Xe(q,1)){q=Fs(q,d);var de=q.clientX,O=q.clientY,$=de-A.x,Y=O-A.y,Q=A.isDragging;A.x=de,A.y=O,(Q||($||Y)&&(Math.abs(A.startX-de)>=o||Math.abs(A.startY-O)>=o))&&(zt||(zt=Q?2:1),Q||(A.isDragging=!0),bo($,Y))}},Li=A.onPress=function(J){Xe(J,1)||J&&J.button||(A.axis=ir=null,Pt.pause(),A.isPressed=!0,J=Fs(J),or=wn=0,A.startX=A.x=J.clientX,A.startY=A.y=J.clientY,A._vx.reset(),A._vy.reset(),Ot(z?a:Ue,Vr[1],Kn,Gn,!0),A.deltaX=A.deltaY=0,y&&y(A))},ie=A.onRelease=function(J){if(!Xe(J,1)){Lt(z?a:Ue,Vr[1],Kn,!0);var q=!isNaN(A.y-A.startY),de=A.isDragging,O=de&&(Math.abs(A.x-A.startX)>3||Math.abs(A.y-A.startY)>3),$=Fs(J);!O&&q&&(A._vx.reset(),A._vy.reset(),d&&we&&pt.delayedCall(.08,function(){if(ha()-_n>300&&!J.defaultPrevented){if(J.target.click)J.target.click();else if(Ue.createEvent){var Y=Ue.createEvent("MouseEvents");Y.initMouseEvent("click",!0,!0,pr,1,$.screenX,$.screenY,$.clientX,$.clientY,!1,!1,!1,!1,0,null),J.target.dispatchEvent(Y)}}})),A.isDragging=A.isGesturing=A.isPressed=!1,f&&de&&!z&&Pt.restart(!0),zt&&kn(),v&&de&&v(A),_&&_(A,O)}},Oi=function(q){return q.touches&&q.touches.length>1&&(A.isGesturing=!0)&&D(q,A.isDragging)},Br=function(){return(A.isGesturing=!1)||S(A)},Hr=function(q){if(!Xe(q)){var de=De(),O=bn();wo((de-qn)*He,(O-zi)*He,1),qn=de,zi=O,f&&Pt.restart(!0)}},Wr=function(q){if(!Xe(q)){q=Fs(q,d),X&&(We=!0);var de=(q.deltaMode===1?l:q.deltaMode===2?pr.innerHeight:1)*m;wo(q.deltaX*de,q.deltaY*de,0),f&&!z&&Pt.restart(!0)}},Mi=function(q){if(!Xe(q)){var de=q.clientX,O=q.clientY,$=de-A.x,Y=O-A.y;A.x=de,A.y=O,ce=!0,f&&Pt.restart(!0),($||Y)&&bo($,Y)}},_o=function(q){A.event=q,U(A)},Sn=function(q){A.event=q,K(A)},Cs=function(q){return Xe(q)||Fs(q,d)&&fe(A)};Pt=A._dc=pt.delayedCall(p||.25,ll).pause(),A.deltaX=A.deltaY=0,A._vx=kf(0,50,!0),A._vy=kf(0,50,!0),A.scrollX=De,A.scrollY=bn,A.isDragging=A.isGesturing=A.isPressed=!1,d1(this),A.enable=function(J){return A.isEnabled||(Ot(Xn?Ue:a,"scroll",_f),s.indexOf("scroll")>=0&&Ot(Xn?Ue:a,"scroll",Hr,Gn,ke),s.indexOf("wheel")>=0&&Ot(a,"wheel",Wr,Gn,ke),(s.indexOf("touch")>=0&&c1||s.indexOf("pointer")>=0)&&(Ot(a,Vr[0],Li,Gn,ke),Ot(Ue,Vr[2],ie),Ot(Ue,Vr[3],ie),we&&Ot(a,"click",Ts,!0,!0),fe&&Ot(a,"click",Cs),D&&Ot(Ue,"gesturestart",Oi),S&&Ot(Ue,"gestureend",Br),U&&Ot(a,Ui+"enter",_o),K&&Ot(a,Ui+"leave",Sn),ee&&Ot(a,Ui+"move",Mi)),A.isEnabled=!0,A.isDragging=A.isGesturing=A.isPressed=ce=zt=!1,A._vx.reset(),A._vy.reset(),qn=De(),zi=bn(),J&&J.type&&Li(J),le&&le(A)),A},A.disable=function(){A.isEnabled&&(Go.filter(function(J){return J!==A&&ga(J.target)}).length||Lt(Xn?Ue:a,"scroll",_f),A.isPressed&&(A._vx.reset(),A._vy.reset(),Lt(z?a:Ue,Vr[1],Kn,!0)),Lt(Xn?Ue:a,"scroll",Hr,ke),Lt(a,"wheel",Wr,ke),Lt(a,Vr[0],Li,ke),Lt(Ue,Vr[2],ie),Lt(Ue,Vr[3],ie),Lt(a,"click",Ts,!0),Lt(a,"click",Cs),Lt(Ue,"gesturestart",Oi),Lt(Ue,"gestureend",Br),Lt(a,Ui+"enter",_o),Lt(a,Ui+"leave",Sn),Lt(a,Ui+"move",Mi),A.isEnabled=A.isPressed=A.isDragging=!1,xt&&xt(A))},A.kill=A.revert=function(){A.disable();var J=Go.indexOf(A);J>=0&&Go.splice(J,1),zn===A&&(zn=0)},Go.push(A),z&&ga(a)&&(zn=A),A.enable(g)},j5(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();qe.version="3.14.2";qe.create=function(t){return new qe(t)};qe.register=g1;qe.getAll=function(){return Go.slice()};qe.getById=function(t){return Go.filter(function(e){return e.vars.id===t})[0]};f1()&&pt.registerPlugin(qe);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var F,Ao,re,ve,dr,pe,Jp,Vc,Ka,ma,$s,Pl,St,xu,Sf,It,om,sm,Ro,m1,rd,x1,Mt,Tf,v1,y1,Jn,Cf,eh,ns,th,xa,Ef,nd,zl=1,Tt=Date.now,id=Tt(),Or=0,Qs=0,am=function(e,r,n){var i=cr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},lm=function(e,r){return r&&(!cr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},R5=function t(){return Qs&&requestAnimationFrame(t)},cm=function(){return xu=1},um=function(){return xu=0},an=function(e){return e},Zs=function(e){return Math.round(e*1e5)/1e5||0},w1=function(){return typeof window<"u"},b1=function(){return F||w1()&&(F=window.gsap)&&F.registerPlugin&&F},po=function(e){return!!~Jp.indexOf(e)},_1=function(e){return(e==="Height"?th:re["inner"+e])||dr["client"+e]||pe["client"+e]},k1=function(e){return bi(e,"getBoundingClientRect")||(po(e)?function(){return uc.width=re.innerWidth,uc.height=th,uc}:function(){return An(e)})},P5=function(e,r,n){var i=n.d,o=n.d2,s=n.a;return(s=bi(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(r?_1(o):e["client"+o])||0}},z5=function(e,r){return!r||~gn.indexOf(e)?k1(e):function(){return uc}},dn=function(e,r){var n=r.s,i=r.d2,o=r.d,s=r.a;return Math.max(0,(n="scroll"+i)&&(s=bi(e,n))?s()-k1(e)()[o]:po(e)?(dr[n]||pe[n])-_1(i):e[n]-e["offset"+i])},Ll=function(e,r){for(var n=0;n<Ro.length;n+=3)(!r||~r.indexOf(Ro[n+1]))&&e(Ro[n],Ro[n+1],Ro[n+2])},cr=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Js=function(e){return typeof e=="number"},Yi=function(e){return typeof e=="object"},Bs=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},od=function(e,r){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return r(e)}):r(e);n&&n.totalTime&&(e.callbackAnimation=n)}},To=Math.abs,S1="left",T1="top",rh="right",nh="bottom",no="width",io="height",va="Right",ya="Left",wa="Top",ba="Bottom",Ke="padding",Nr="margin",ys="Width",ih="Height",Je="px",Ar=function(e){return re.getComputedStyle(e)},L5=function(e){var r=Ar(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},dm=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},An=function(e,r){var n=r&&Ar(e)[Sf]!=="matrix(1, 0, 0, 1, 0, 0)"&&F.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Gc=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},C1=function(e){var r=[],n=e.labels,i=e.duration(),o;for(o in n)r.push(n[o]/i);return r},O5=function(e){return function(r){return F.utils.snap(C1(e),r)}},oh=function(e){var r=F.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return n?function(i,o,s){s===void 0&&(s=.001);var a;if(!o)return r(i);if(o>0){for(i-=s,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=s;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,o,s){s===void 0&&(s=.001);var a=r(i);return!o||Math.abs(a-i)<s||a-i<0==o<0?a:r(o<0?i-e:i+e)}},M5=function(e){return function(r,n){return oh(C1(e))(r,n.direction)}},Ol=function(e,r,n,i){return n.split(",").forEach(function(o){return e(r,o,i)})},st=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:!i,capture:!!o})},ot=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Ml=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},fm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Dl={toggleActions:"play",anticipatePin:0},qc={top:0,left:0,center:.5,bottom:1,right:1},sc=function(e,r){if(cr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in qc?qc[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Il=function(e,r,n,i,o,s,a,l){var u=o.startColor,d=o.endColor,f=o.fontSize,p=o.indent,h=o.fontWeight,m=ve.createElement("div"),g=po(n)||bi(n,"pinType")==="fixed",w=e.indexOf("scroller")!==-1,v=g?pe:n,x=e.indexOf("start")!==-1,y=x?u:d,_="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((w||l)&&g?"fixed;":"absolute;"),(w||l||!g)&&(_+=(i===tt?rh:nh)+":"+(s+parseFloat(p))+"px;"),a&&(_+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),m.style.cssText=_,m.innerText=r||r===0?e+"-"+r:e,v.children[0]?v.insertBefore(m,v.children[0]):v.appendChild(m),m._offset=m["offset"+i.op.d2],ac(m,0,i,x),m},ac=function(e,r,n,i){var o={display:"block"},s=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,o[n.a+"Percent"]=i?-100:0,o[n.a]=i?"1px":0,o["border"+s+ys]=1,o["border"+a+ys]=0,o[n.p]=r+"px",F.set(e,o)},te=[],jf={},$a,pm=function(){return Tt()-Or>34&&($a||($a=requestAnimationFrame(On)))},Co=function(){(!Mt||!Mt.isPressed||Mt.startX>pe.clientWidth)&&(ne.cache++,Mt?$a||($a=requestAnimationFrame(On)):On(),Or||go("scrollStart"),Or=Tt())},sd=function(){y1=re.innerWidth,v1=re.innerHeight},ea=function(e){ne.cache++,(e===!0||!St&&!x1&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!Tf||y1!==re.innerWidth||Math.abs(re.innerHeight-v1)>re.innerHeight*.25))&&Vc.restart(!0)},ho={},D5=[],E1=function t(){return ot(B,"scrollEnd",t)||Ki(!0)},go=function(e){return ho[e]&&ho[e].map(function(r){return r()})||D5},ar=[],j1=function(e){for(var r=0;r<ar.length;r+=5)(!e||ar[r+4]&&ar[r+4].query===e)&&(ar[r].style.cssText=ar[r+1],ar[r].getBBox&&ar[r].setAttribute("transform",ar[r+2]||""),ar[r+3].uncache=1)},N1=function(){return ne.forEach(function(e){return jt(e)&&++e.cacheID&&(e.rec=e())})},sh=function(e,r){var n;for(It=0;It<te.length;It++)n=te[It],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));xa=!0,r&&j1(r),r||go("revert")},A1=function(e,r){ne.cache++,(r||!Ft)&&ne.forEach(function(n){return jt(n)&&n.cacheID++&&(n.rec=0)}),cr(e)&&(re.history.scrollRestoration=eh=e)},Ft,oo=0,hm,I5=function(){if(hm!==oo){var e=hm=oo;requestAnimationFrame(function(){return e===oo&&Ki(!0)})}},R1=function(){pe.appendChild(ns),th=!Mt&&ns.offsetHeight||re.innerHeight,pe.removeChild(ns)},gm=function(e){return Ka(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},Ki=function(e,r){if(dr=ve.documentElement,pe=ve.body,Jp=[re,ve,dr,pe],Or&&!e&&!xa){st(B,"scrollEnd",E1);return}R1(),Ft=B.isRefreshing=!0,xa||N1();var n=go("refreshInit");m1&&B.sort(),r||sh(),ne.forEach(function(i){jt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),xa=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-s),i.refresh()}}),Ef=1,gm(!0),te.forEach(function(i){var o=dn(i.scroller,i._dir),s=i.vars.end==="max"||i._endClamp&&i.end>o,a=i._startClamp&&i.start>=o;(s||a)&&i.setPositions(a?o-1:i.start,s?Math.max(a?o:i.start+1,o):i.end,!0)}),gm(!1),Ef=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){jt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),A1(eh,1),Vc.pause(),oo++,Ft=2,On(2),te.forEach(function(i){return jt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ft=B.isRefreshing=!1,go("refresh")},Nf=0,lc=1,_a,On=function(e){if(e===2||!Ft&&!xa){B.isUpdating=!0,_a&&_a.update(0);var r=te.length,n=Tt(),i=n-id>=50,o=r&&te[0].scroll();if(lc=Nf>o?-1:1,Ft||(Nf=o),i&&(Or&&!xu&&n-Or>200&&(Or=0,go("scrollEnd")),$s=id,id=n),lc<0){for(It=r;It-- >0;)te[It]&&te[It].update(0,i);lc=1}else for(It=0;It<r;It++)te[It]&&te[It].update(0,i);B.isUpdating=!1}$a=0},Af=[S1,T1,nh,rh,Nr+ba,Nr+va,Nr+wa,Nr+ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],cc=Af.concat([no,io,"boxSizing","max"+ys,"max"+ih,"position",Nr,Ke,Ke+wa,Ke+va,Ke+ba,Ke+ya]),F5=function(e,r,n){is(n);var i=e._gsap;if(i.spacerIsNative)is(i.spacerState);else if(e._gsap.swappedIn){var o=r.parentNode;o&&(o.insertBefore(e,r),o.removeChild(r))}e._gsap.swappedIn=!1},ad=function(e,r,n,i){if(!e._gsap.swappedIn){for(var o=Af.length,s=r.style,a=e.style,l;o--;)l=Af[o],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),a[nh]=a[rh]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[no]=Gc(e,Ht)+Je,s[io]=Gc(e,tt)+Je,s[Ke]=a[Nr]=a[T1]=a[S1]="0",is(i),a[no]=a["max"+ys]=n[no],a[io]=a["max"+ih]=n[io],a[Ke]=n[Ke],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},B5=/([A-Z])/g,is=function(e){if(e){var r=e.t.style,n=e.length,i=0,o,s;for((e.t._gsap||F.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],o=e[i],s?r[o]=s:r[o]&&r.removeProperty(o.replace(B5,"-$1").toLowerCase())}},Fl=function(e){for(var r=cc.length,n=e.style,i=[],o=0;o<r;o++)i.push(cc[o],n[cc[o]]);return i.t=e,i},H5=function(e,r,n){for(var i=[],o=e.length,s=n?8:0,a;s<o;s+=2)a=e[s],i.push(a,a in r?r[a]:e[s+1]);return i.t=e.t,i},uc={left:0,top:0},mm=function(e,r,n,i,o,s,a,l,u,d,f,p,h,m){jt(e)&&(e=e(l)),cr(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?sc("0"+e.substr(3),n):0));var g=h?h.time():0,w,v,x;if(h&&h.seek(0),isNaN(e)||(e=+e),Js(e))h&&(e=F.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,p,e)),a&&ac(a,n,i,!0);else{jt(r)&&(r=r(l));var y=(e||"0").split(" "),_,k,E,C;x=qt(r,l)||pe,_=An(x)||{},(!_||!_.left&&!_.top)&&Ar(x).display==="none"&&(C=x.style.display,x.style.display="block",_=An(x),C?x.style.display=C:x.style.removeProperty("display")),k=sc(y[0],_[i.d]),E=sc(y[1]||"0",n),e=_[i.p]-u[i.p]-d+k+o-E,a&&ac(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=e||-.001,e<0&&(e=0)),s){var T=e+n,j=s._isStart;w="scroll"+i.d2,ac(s,T,i,j&&T>20||!j&&(f?Math.max(pe[w],dr[w]):s.parentNode[w])<=T+1),f&&(u=An(a),f&&(s.style[i.op.p]=u[i.op.p]-i.op.m-s._offset+Je))}return h&&x&&(w=An(x),h.seek(p),v=An(x),h._caScrollDist=w[i.p]-v[i.p],e=e/h._caScrollDist*p),h&&h.seek(g),h?e:Math.round(e)},W5=/(webkit|moz|length|cssText|inset)/i,xm=function(e,r,n,i){if(e.parentNode!==r){var o=e.style,s,a;if(r===pe){e._stOrig=o.cssText,a=Ar(e);for(s in a)!+s&&!W5.test(s)&&a[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=a[s]);o.top=n,o.left=i}else o.cssText=e._stOrig;F.core.getCache(e).uncache=1,r.appendChild(e)}},P1=function(e,r,n){var i=r,o=i;return function(s){var a=Math.round(e());return a!==i&&a!==o&&Math.abs(a-i)>3&&Math.abs(a-o)>3&&(s=a,n&&n()),o=i,i=Math.round(s),i}},Bl=function(e,r,n){var i={};i[r.p]="+="+n,F.set(e,i)},vm=function(e,r){var n=ji(e,r),i="_scroll"+r.p2,o=function s(a,l,u,d,f){var p=s.tween,h=l.onComplete,m={};u=u||n();var g=P1(n,u,function(){p.kill(),s.tween=0});return f=d&&f||0,d=d||a-u,p&&p.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return g(u+d*p.ratio+f*p.ratio*p.ratio)},l.onUpdate=function(){ne.cache++,s.tween&&On()},l.onComplete=function(){s.tween=0,h&&h.call(p)},p=s.tween=F.to(e,l),p};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},st(e,"wheel",n.wheelHandler),B.isTouch&&st(e,"touchmove",n.wheelHandler),o},B=function(){function t(r,n){Ao||t.register(F)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Cf(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qs){this.update=this.refresh=this.kill=an;return}n=dm(cr(n)||Js(n)||n.nodeType?{trigger:n}:n,Dl);var o=n,s=o.onUpdate,a=o.toggleClass,l=o.id,u=o.onToggle,d=o.onRefresh,f=o.scrub,p=o.trigger,h=o.pin,m=o.pinSpacing,g=o.invalidateOnRefresh,w=o.anticipatePin,v=o.onScrubComplete,x=o.onSnapComplete,y=o.once,_=o.snap,k=o.pinReparent,E=o.pinSpacer,C=o.containerAnimation,T=o.fastScrollEnd,j=o.preventOverlaps,N=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ht:tt,M=!f&&f!==0,R=qt(n.scroller||re),V=F.core.getCache(R),U=po(R),K=("pinType"in n?n.pinType:bi(R,"pinType")||U&&"fixed")==="fixed",ee=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=M&&n.toggleActions.split(" "),z="markers"in n?n.markers:Dl.markers,D=U?0:parseFloat(Ar(R)["border"+N.p2+ys])||0,S=this,X=n.onRefreshInit&&function(){return n.onRefreshInit(S)},le=P5(R,U,N),xt=z5(R,U),fe=0,He=0,ke=0,we=ji(R,N),Rt,vt,Vn,Pt,zt,ce,We,Vt,ir,A,or,wn,Gn,De,bn,qn,zi,nt,Xn,Ue,Fr,Tr,_n,Ts,Xe,ll,kn,wo,bo,Kn,Li,ie,Oi,Br,Hr,Wr,Mi,_o,Sn;if(S._startClamp=S._endClamp=!1,S._dir=N,w*=45,S.scroller=R,S.scroll=C?C.time.bind(C):we,Pt=we(),S.vars=n,i=i||n.animation,"refreshPriority"in n&&(m1=1,n.refreshPriority===-9999&&(_a=S)),V.tweenScroll=V.tweenScroll||{top:vm(R,tt),left:vm(R,Ht)},S.tweenTo=Rt=V.tweenScroll[N.p],S.scrubDuration=function(O){Oi=Js(O)&&O,Oi?ie?ie.duration(O):ie=F.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Oi,paused:!0,onComplete:function(){return v&&v(S)}}):(ie&&ie.progress(1).kill(),ie=0)},i&&(i.vars.lazy=!1,i._initted&&!S.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),S.animation=i.pause(),i.scrollTrigger=S,S.scrubDuration(f),Kn=0,l||(l=i.vars.id)),_&&((!Yi(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in pe.style&&F.set(U?[pe,dr]:R,{scrollBehavior:"auto"}),ne.forEach(function(O){return jt(O)&&O.target===(U?ve.scrollingElement||dr:R)&&(O.smooth=!1)}),Vn=jt(_.snapTo)?_.snapTo:_.snapTo==="labels"?O5(i):_.snapTo==="labelsDirectional"?M5(i):_.directional!==!1?function(O,$){return oh(_.snapTo)(O,Tt()-He<500?0:$.direction)}:F.utils.snap(_.snapTo),Br=_.duration||{min:.1,max:2},Br=Yi(Br)?ma(Br.min,Br.max):ma(Br,Br),Hr=F.delayedCall(_.delay||Oi/2||.1,function(){var O=we(),$=Tt()-He<500,Y=Rt.tween;if(($||Math.abs(S.getVelocity())<10)&&!Y&&!xu&&fe!==O){var Q=(O-ce)/De,it=i&&!M?i.totalProgress():Q,se=$?0:(it-Li)/(Tt()-$s)*1e3||0,Ye=F.utils.clamp(-Q,1-Q,To(se/2)*se/.185),yt=Q+(_.inertia===!1?0:Ye),Ie,Se,ge=_,Ur=ge.onStart,Ne=ge.onInterrupt,sr=ge.onComplete;if(Ie=Vn(yt,S),Js(Ie)||(Ie=yt),Se=Math.max(0,Math.round(ce+Ie*De)),O<=We&&O>=ce&&Se!==O){if(Y&&!Y._initted&&Y.data<=To(Se-O))return;_.inertia===!1&&(Ye=Ie-Q),Rt(Se,{duration:Br(To(Math.max(To(yt-it),To(Ie-it))*.185/se/.05||0)),ease:_.ease||"power3",data:To(Se-O),onInterrupt:function(){return Hr.restart(!0)&&Ne&&Ne(S)},onComplete:function(){S.update(),fe=we(),i&&!M&&(ie?ie.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),Kn=Li=i&&!M?i.totalProgress():S.progress,x&&x(S),sr&&sr(S)}},O,Ye*De,Se-O-Ye*De),Ur&&Ur(S,Rt.tween)}}else S.isActive&&fe!==O&&Hr.restart(!0)}).pause()),l&&(jf[l]=S),p=S.trigger=qt(p||h!==!0&&h),Sn=p&&p._gsap&&p._gsap.stRevert,Sn&&(Sn=Sn(S)),h=h===!0?p:qt(h),cr(a)&&(a={targets:p,className:a}),h&&(m===!1||m===Nr||(m=!m&&h.parentNode&&h.parentNode.style&&Ar(h.parentNode).display==="flex"?!1:Ke),S.pin=h,vt=F.core.getCache(h),vt.spacer?bn=vt.pinState:(E&&(E=qt(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),vt.spacerIsNative=!!E,E&&(vt.spacerState=Fl(E))),vt.spacer=nt=E||ve.createElement("div"),nt.classList.add("pin-spacer"),l&&nt.classList.add("pin-spacer-"+l),vt.pinState=bn=Fl(h)),n.force3D!==!1&&F.set(h,{force3D:!0}),S.spacer=nt=vt.spacer,bo=Ar(h),Ts=bo[m+N.os2],Ue=F.getProperty(h),Fr=F.quickSetter(h,N.a,Je),ad(h,nt,bo),zi=Fl(h)),z){wn=Yi(z)?dm(z,fm):fm,A=Il("scroller-start",l,R,N,wn,0),or=Il("scroller-end",l,R,N,wn,0,A),Xn=A["offset"+N.op.d2];var Cs=qt(bi(R,"content")||R);Vt=this.markerStart=Il("start",l,Cs,N,wn,Xn,0,C),ir=this.markerEnd=Il("end",l,Cs,N,wn,Xn,0,C),C&&(_o=F.quickSetter([Vt,ir],N.a,Je)),!K&&!(gn.length&&bi(R,"fixedMarkers")===!0)&&(L5(U?pe:R),F.set([A,or],{force3D:!0}),ll=F.quickSetter(A,N.a,Je),wo=F.quickSetter(or,N.a,Je))}if(C){var J=C.vars.onUpdate,q=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){S.update(0,0,1),J&&J.apply(C,q||[])})}if(S.previous=function(){return te[te.indexOf(S)-1]},S.next=function(){return te[te.indexOf(S)+1]},S.revert=function(O,$){if(!$)return S.kill(!0);var Y=O!==!1||!S.enabled,Q=St;Y!==S.isReverted&&(Y&&(Wr=Math.max(we(),S.scroll.rec||0),ke=S.progress,Mi=i&&i.progress()),Vt&&[Vt,ir,A,or].forEach(function(it){return it.style.display=Y?"none":"block"}),Y&&(St=S,S.update(Y)),h&&(!k||!S.isActive)&&(Y?F5(h,nt,bn):ad(h,nt,Ar(h),Xe)),Y||S.update(Y),St=Q,S.isReverted=Y)},S.refresh=function(O,$,Y,Q){if(!((St||!S.enabled)&&!$)){if(h&&O&&Or){st(t,"scrollEnd",E1);return}!Ft&&X&&X(S),St=S,Rt.tween&&!Y&&(Rt.tween.kill(),Rt.tween=0),ie&&ie.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function($n){return $n.vars.immediateRender&&$n.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var it=le(),se=xt(),Ye=C?C.duration():dn(R,N),yt=De<=.01||!De,Ie=0,Se=Q||0,ge=Yi(Y)?Y.end:n.end,Ur=n.endTrigger||p,Ne=Yi(Y)?Y.start:n.start||(n.start===0||!p?0:h?"0 0":"0 100%"),sr=S.pinnedContainer=n.pinnedContainer&&qt(n.pinnedContainer,S),Jr=p&&Math.max(0,te.indexOf(S))||0,ut=Jr,dt,wt,Di,cl,bt,Ze,en,vu,wh,Es,tn,js,ul;for(z&&Yi(Y)&&(js=F.getProperty(A,N.p),ul=F.getProperty(or,N.p));ut-- >0;)Ze=te[ut],Ze.end||Ze.refresh(0,1)||(St=S),en=Ze.pin,en&&(en===p||en===h||en===sr)&&!Ze.isReverted&&(Es||(Es=[]),Es.unshift(Ze),Ze.revert(!0,!0)),Ze!==te[ut]&&(Jr--,ut--);for(jt(Ne)&&(Ne=Ne(S)),Ne=am(Ne,"start",S),ce=mm(Ne,p,it,N,we(),Vt,A,S,se,D,K,Ye,C,S._startClamp&&"_startClamp")||(h?-.001:0),jt(ge)&&(ge=ge(S)),cr(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(cr(Ne)?Ne.split(" ")[0]:"")+ge:(Ie=sc(ge.substr(2),it),ge=cr(Ne)?Ne:(C?F.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,ce):ce)+Ie,Ur=p)),ge=am(ge,"end",S),We=Math.max(ce,mm(ge||(Ur?"100% 0":Ye),Ur,it,N,we()+Ie,ir,or,S,se,D,K,Ye,C,S._endClamp&&"_endClamp"))||-.001,Ie=0,ut=Jr;ut--;)Ze=te[ut]||{},en=Ze.pin,en&&Ze.start-Ze._pinPush<=ce&&!C&&Ze.end>0&&(dt=Ze.end-(S._startClamp?Math.max(0,Ze.start):Ze.start),(en===p&&Ze.start-Ze._pinPush<ce||en===sr)&&isNaN(Ne)&&(Ie+=dt*(1-Ze.progress)),en===h&&(Se+=dt));if(ce+=Ie,We+=Ie,S._startClamp&&(S._startClamp+=Ie),S._endClamp&&!Ft&&(S._endClamp=We||-.001,We=Math.min(We,dn(R,N))),De=We-ce||(ce-=.01)&&.001,yt&&(ke=F.utils.clamp(0,1,F.utils.normalize(ce,We,Wr))),S._pinPush=Se,Vt&&Ie&&(dt={},dt[N.a]="+="+Ie,sr&&(dt[N.p]="-="+we()),F.set([Vt,ir],dt)),h&&!(Ef&&S.end>=dn(R,N)))dt=Ar(h),cl=N===tt,Di=we(),Tr=parseFloat(Ue(N.a))+Se,!Ye&&We>1&&(tn=(U?ve.scrollingElement||dr:R).style,tn={style:tn,value:tn["overflow"+N.a.toUpperCase()]},U&&Ar(pe)["overflow"+N.a.toUpperCase()]!=="scroll"&&(tn.style["overflow"+N.a.toUpperCase()]="scroll")),ad(h,nt,dt),zi=Fl(h),wt=An(h,!0),vu=K&&ji(R,cl?Ht:tt)(),m?(Xe=[m+N.os2,De+Se+Je],Xe.t=nt,ut=m===Ke?Gc(h,N)+De+Se:0,ut&&(Xe.push(N.d,ut+Je),nt.style.flexBasis!=="auto"&&(nt.style.flexBasis=ut+Je)),is(Xe),sr&&te.forEach(function($n){$n.pin===sr&&$n.vars.pinSpacing!==!1&&($n._subPinOffset=!0)}),K&&we(Wr)):(ut=Gc(h,N),ut&&nt.style.flexBasis!=="auto"&&(nt.style.flexBasis=ut+Je)),K&&(bt={top:wt.top+(cl?Di-ce:vu)+Je,left:wt.left+(cl?vu:Di-ce)+Je,boxSizing:"border-box",position:"fixed"},bt[no]=bt["max"+ys]=Math.ceil(wt.width)+Je,bt[io]=bt["max"+ih]=Math.ceil(wt.height)+Je,bt[Nr]=bt[Nr+wa]=bt[Nr+va]=bt[Nr+ba]=bt[Nr+ya]="0",bt[Ke]=dt[Ke],bt[Ke+wa]=dt[Ke+wa],bt[Ke+va]=dt[Ke+va],bt[Ke+ba]=dt[Ke+ba],bt[Ke+ya]=dt[Ke+ya],qn=H5(bn,bt,k),Ft&&we(0)),i?(wh=i._initted,rd(1),i.render(i.duration(),!0,!0),_n=Ue(N.a)-Tr+De+Se,kn=Math.abs(De-_n)>1,K&&kn&&qn.splice(qn.length-2,2),i.render(0,!0,!0),wh||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),rd(0)):_n=De,tn&&(tn.value?tn.style["overflow"+N.a.toUpperCase()]=tn.value:tn.style.removeProperty("overflow-"+N.a));else if(p&&we()&&!C)for(wt=p.parentNode;wt&&wt!==pe;)wt._pinOffset&&(ce-=wt._pinOffset,We-=wt._pinOffset),wt=wt.parentNode;Es&&Es.forEach(function($n){return $n.revert(!1,!0)}),S.start=ce,S.end=We,Pt=zt=Ft?Wr:we(),!C&&!Ft&&(Pt<Wr&&we(Wr),S.scroll.rec=0),S.revert(!1,!0),He=Tt(),Hr&&(fe=-1,Hr.restart(!0)),St=0,i&&M&&(i._initted||Mi)&&i.progress()!==Mi&&i.progress(Mi||0,!0).render(i.time(),!0,!0),(yt||ke!==S.progress||C||g||i&&!i._initted)&&(i&&!M&&(i._initted||ke||i.vars.immediateRender!==!1)&&i.totalProgress(C&&ce<-.001&&!ke?F.utils.normalize(ce,We,0):ke,!0),S.progress=yt||(Pt-ce)/De===ke?0:ke),h&&m&&(nt._pinOffset=Math.round(S.progress*_n)),ie&&ie.invalidate(),isNaN(js)||(js-=F.getProperty(A,N.p),ul-=F.getProperty(or,N.p),Bl(A,N,js),Bl(Vt,N,js-(Q||0)),Bl(or,N,ul),Bl(ir,N,ul-(Q||0))),yt&&!Ft&&S.update(),d&&!Ft&&!Gn&&(Gn=!0,d(S),Gn=!1)}},S.getVelocity=function(){return(we()-zt)/(Tt()-$s)*1e3||0},S.endAnimation=function(){Bs(S.callbackAnimation),i&&(ie?ie.progress(1):i.paused()?M||Bs(i,S.direction<0,1):Bs(i,i.reversed()))},S.labelToScroll=function(O){return i&&i.labels&&(ce||S.refresh()||ce)+i.labels[O]/i.duration()*De||0},S.getTrailing=function(O){var $=te.indexOf(S),Y=S.direction>0?te.slice(0,$).reverse():te.slice($+1);return(cr(O)?Y.filter(function(Q){return Q.vars.preventOverlaps===O}):Y).filter(function(Q){return S.direction>0?Q.end<=ce:Q.start>=We})},S.update=function(O,$,Y){if(!(C&&!Y&&!O)){var Q=Ft===!0?Wr:S.scroll(),it=O?0:(Q-ce)/De,se=it<0?0:it>1?1:it||0,Ye=S.progress,yt,Ie,Se,ge,Ur,Ne,sr,Jr;if($&&(zt=Pt,Pt=C?we():Q,_&&(Li=Kn,Kn=i&&!M?i.totalProgress():se)),w&&h&&!St&&!zl&&Or&&(!se&&ce<Q+(Q-zt)/(Tt()-$s)*w?se=1e-4:se===1&&We>Q+(Q-zt)/(Tt()-$s)*w&&(se=.9999)),se!==Ye&&S.enabled){if(yt=S.isActive=!!se&&se<1,Ie=!!Ye&&Ye<1,Ne=yt!==Ie,Ur=Ne||!!se!=!!Ye,S.direction=se>Ye?1:-1,S.progress=se,Ur&&!St&&(Se=se&&!Ye?0:se===1?1:Ye===1?2:3,M&&(ge=!Ne&&G[Se+1]!=="none"&&G[Se+1]||G[Se],Jr=i&&(ge==="complete"||ge==="reset"||ge in i))),j&&(Ne||Jr)&&(Jr||f||!i)&&(jt(j)?j(S):S.getTrailing(j).forEach(function(Di){return Di.endAnimation()})),M||(ie&&!St&&!zl?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",se,i._tTime/i._tDur):(ie.vars.totalProgress=se,ie.invalidate().restart())):i&&i.totalProgress(se,!!(St&&(He||O)))),h){if(O&&m&&(nt.style[m+N.os2]=Ts),!K)Fr(Zs(Tr+_n*se));else if(Ur){if(sr=!O&&se>Ye&&We+1>Q&&Q+1>=dn(R,N),k)if(!O&&(yt||sr)){var ut=An(h,!0),dt=Q-ce;xm(h,pe,ut.top+(N===tt?dt:0)+Je,ut.left+(N===tt?0:dt)+Je)}else xm(h,nt);is(yt||sr?qn:zi),kn&&se<1&&yt||Fr(Tr+(se===1&&!sr?_n:0))}}_&&!Rt.tween&&!St&&!zl&&Hr.restart(!0),a&&(Ne||y&&se&&(se<1||!nd))&&Ka(a.targets).forEach(function(Di){return Di.classList[yt||y?"add":"remove"](a.className)}),s&&!M&&!O&&s(S),Ur&&!St?(M&&(Jr&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),s&&s(S)),(Ne||!nd)&&(u&&Ne&&od(S,u),ee[Se]&&od(S,ee[Se]),y&&(se===1?S.kill(!1,1):ee[Se]=0),Ne||(Se=se===1?1:3,ee[Se]&&od(S,ee[Se]))),T&&!yt&&Math.abs(S.getVelocity())>(Js(T)?T:2500)&&(Bs(S.callbackAnimation),ie?ie.progress(1):Bs(i,ge==="reverse"?1:!se,1))):M&&s&&!St&&s(S)}if(wo){var wt=C?Q/C.duration()*(C._caScrollDist||0):Q;ll(wt+(A._isFlipped?1:0)),wo(wt)}_o&&_o(-Q/C.duration()*(C._caScrollDist||0))}},S.enable=function(O,$){S.enabled||(S.enabled=!0,st(R,"resize",ea),U||st(R,"scroll",Co),X&&st(t,"refreshInit",X),O!==!1&&(S.progress=ke=0,Pt=zt=fe=we()),$!==!1&&S.refresh())},S.getTween=function(O){return O&&Rt?Rt.tween:ie},S.setPositions=function(O,$,Y,Q){if(C){var it=C.scrollTrigger,se=C.duration(),Ye=it.end-it.start;O=it.start+Ye*O/se,$=it.start+Ye*$/se}S.refresh(!1,!1,{start:lm(O,Y&&!!S._startClamp),end:lm($,Y&&!!S._endClamp)},Q),S.update()},S.adjustPinSpacing=function(O){if(Xe&&O){var $=Xe.indexOf(N.d)+1;Xe[$]=parseFloat(Xe[$])+O+Je,Xe[1]=parseFloat(Xe[1])+O+Je,is(Xe)}},S.disable=function(O,$){if(O!==!1&&S.revert(!0,!0),S.enabled&&(S.enabled=S.isActive=!1,$||ie&&ie.pause(),Wr=0,vt&&(vt.uncache=1),X&&ot(t,"refreshInit",X),Hr&&(Hr.pause(),Rt.tween&&Rt.tween.kill()&&(Rt.tween=0)),!U)){for(var Y=te.length;Y--;)if(te[Y].scroller===R&&te[Y]!==S)return;ot(R,"resize",ea),U||ot(R,"scroll",Co)}},S.kill=function(O,$){S.disable(O,$),ie&&!$&&ie.kill(),l&&delete jf[l];var Y=te.indexOf(S);Y>=0&&te.splice(Y,1),Y===It&&lc>0&&It--,Y=0,te.forEach(function(Q){return Q.scroller===S.scroller&&(Y=1)}),Y||Ft||(S.scroll.rec=0),i&&(i.scrollTrigger=null,O&&i.revert({kill:!1}),$||i.kill()),Vt&&[Vt,ir,A,or].forEach(function(Q){return Q.parentNode&&Q.parentNode.removeChild(Q)}),_a===S&&(_a=0),h&&(vt&&(vt.uncache=1),Y=0,te.forEach(function(Q){return Q.pin===h&&Y++}),Y||(vt.spacer=0)),n.onKill&&n.onKill(S)},te.push(S),S.enable(!1,!1),Sn&&Sn(S),i&&i.add&&!De){var de=S.update;S.update=function(){S.update=de,ne.cache++,ce||We||S.refresh()},F.delayedCall(.01,S.update),De=.01,ce=We=0}else S.refresh();h&&I5()},t.register=function(n){return Ao||(F=n||b1(),w1()&&window.document&&t.enable(),Ao=Qs),Ao},t.defaults=function(n){if(n)for(var i in n)Dl[i]=n[i];return Dl},t.disable=function(n,i){Qs=0,te.forEach(function(s){return s[i?"kill":"disable"](n)}),ot(re,"wheel",Co),ot(ve,"scroll",Co),clearInterval(Pl),ot(ve,"touchcancel",an),ot(pe,"touchstart",an),Ol(ot,ve,"pointerdown,touchstart,mousedown",cm),Ol(ot,ve,"pointerup,touchend,mouseup",um),Vc.kill(),Ll(ot);for(var o=0;o<ne.length;o+=3)Ml(ot,ne[o],ne[o+1]),Ml(ot,ne[o],ne[o+2])},t.enable=function(){if(re=window,ve=document,dr=ve.documentElement,pe=ve.body,F&&(Ka=F.utils.toArray,ma=F.utils.clamp,Cf=F.core.context||an,rd=F.core.suppressOverwrites||an,eh=re.history.scrollRestoration||"auto",Nf=re.pageYOffset||0,F.core.globals("ScrollTrigger",t),pe)){Qs=1,ns=document.createElement("div"),ns.style.height="100vh",ns.style.position="absolute",R1(),R5(),qe.register(F),t.isTouch=qe.isTouch,Jn=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Tf=qe.isTouch===1,st(re,"wheel",Co),Jp=[re,ve,dr,pe],F.matchMedia?(t.matchMedia=function(u){var d=F.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},F.addEventListener("matchMediaInit",function(){N1(),sh()}),F.addEventListener("matchMediaRevert",function(){return j1()}),F.addEventListener("matchMedia",function(){Ki(0,1),go("matchMedia")}),F.matchMedia().add("(orientation: portrait)",function(){return sd(),sd})):console.warn("Requires GSAP 3.11.0 or later"),sd(),st(ve,"scroll",Co);var n=pe.hasAttribute("style"),i=pe.style,o=i.borderTopStyle,s=F.core.Animation.prototype,a,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=An(pe),tt.m=Math.round(a.top+tt.sc())||0,Ht.m=Math.round(a.left+Ht.sc())||0,o?i.borderTopStyle=o:i.removeProperty("border-top-style"),n||(pe.setAttribute("style",""),pe.removeAttribute("style")),Pl=setInterval(pm,250),F.delayedCall(.5,function(){return zl=0}),st(ve,"touchcancel",an),st(pe,"touchstart",an),Ol(st,ve,"pointerdown,touchstart,mousedown",cm),Ol(st,ve,"pointerup,touchend,mouseup",um),Sf=F.utils.checkPrefix("transform"),cc.push(Sf),Ao=Tt(),Vc=F.delayedCall(.2,Ki).pause(),Ro=[ve,"visibilitychange",function(){var u=re.innerWidth,d=re.innerHeight;ve.hidden?(om=u,sm=d):(om!==u||sm!==d)&&ea()},ve,"DOMContentLoaded",Ki,re,"load",Ki,re,"resize",ea],Ll(st),te.forEach(function(u){return u.enable(0,1)}),l=0;l<ne.length;l+=3)Ml(ot,ne[l],ne[l+1]),Ml(ot,ne[l],ne[l+2])}},t.config=function(n){"limitCallbacks"in n&&(nd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Pl)||(Pl=i)&&setInterval(pm,i),"ignoreMobileResize"in n&&(Tf=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ll(ot)||Ll(st,n.autoRefreshEvents||"none"),x1=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var o=qt(n),s=ne.indexOf(o),a=po(o);~s&&ne.splice(s,a?6:2),i&&(a?gn.unshift(re,i,pe,i,dr,i):gn.unshift(o,i))},t.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,o){var s=(cr(n)?qt(n):n).getBoundingClientRect(),a=s[o?no:io]*i||0;return o?s.right-a>0&&s.left+a<re.innerWidth:s.bottom-a>0&&s.top+a<re.innerHeight},t.positionInViewport=function(n,i,o){cr(n)&&(n=qt(n));var s=n.getBoundingClientRect(),a=s[o?no:io],l=i==null?a/2:i in qc?qc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return o?(s.left+l)/re.innerWidth:(s.top+l)/re.innerHeight},t.killAll=function(n){if(te.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var i=ho.killAll||[];ho={},i.forEach(function(o){return o()})}},t}();B.version="3.14.2";B.saveStyles=function(t){return t?Ka(t).forEach(function(e){if(e&&e.style){var r=ar.indexOf(e);r>=0&&ar.splice(r,5),ar.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),F.core.getCache(e),Cf())}}):ar};B.revert=function(t,e){return sh(!t,e)};B.create=function(t,e){return new B(t,e)};B.refresh=function(t){return t?ea(!0):(Ao||B.register())&&Ki(!0)};B.update=function(t){return++ne.cache&&On(t===!0?2:0)};B.clearScrollMemory=A1;B.maxScroll=function(t,e){return dn(t,e?Ht:tt)};B.getScrollFunc=function(t,e){return ji(qt(t),e?Ht:tt)};B.getById=function(t){return jf[t]};B.getAll=function(){return te.filter(function(t){return t.vars.id!=="ScrollSmoother"})};B.isScrolling=function(){return!!Or};B.snapDirectional=oh;B.addEventListener=function(t,e){var r=ho[t]||(ho[t]=[]);~r.indexOf(e)||r.push(e)};B.removeEventListener=function(t,e){var r=ho[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};B.batch=function(t,e){var r=[],n={},i=e.interval||.016,o=e.batchMax||1e9,s=function(u,d){var f=[],p=[],h=F.delayedCall(i,function(){d(f,p),f=[],p=[]}).pause();return function(m){f.length||h.restart(!0),f.push(m.trigger),p.push(m),o<=f.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&jt(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return jt(o)&&(o=o(),st(B,"refresh",function(){return o=e.batchMax()})),Ka(t).forEach(function(l){var u={};for(a in n)u[a]=n[a];u.trigger=l,r.push(B.create(u))}),r};var ym=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},ld=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(qe.isTouch?" pinch-zoom":""):"none",e===dr&&t(pe,r)},Hl={auto:1,scroll:1},U5=function(e){var r=e.event,n=e.target,i=e.axis,o=(r.changedTouches?r.changedTouches[0]:r).target,s=o._gsap||F.core.getCache(o),a=Tt(),l;if(!s._isScrollT||a-s._isScrollT>2e3){for(;o&&o!==pe&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(Hl[(l=Ar(o)).overflowY]||Hl[l.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==n&&!po(o)&&(Hl[(l=Ar(o)).overflowY]||Hl[l.overflowX]),s._isScrollT=a}(s._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},z1=function(e,r,n,i){return qe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&U5,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&st(ve,qe.eventTypes[0],bm,!1,!0)},onDisable:function(){return ot(ve,qe.eventTypes[0],bm,!0)}})},Y5=/(input|label|select|textarea)/i,wm,bm=function(e){var r=Y5.test(e.target.tagName);(r||wm)&&(e._gsapAllow=!0,wm=r)},V5=function(e){Yi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,o=r.allowNestedScroll,s=r.onRelease,a,l,u=qt(e.target)||dr,d=F.core.globals().ScrollSmoother,f=d&&d.get(),p=Jn&&(e.content&&qt(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=ji(u,tt),m=ji(u,Ht),g=1,w=(qe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,v=0,x=jt(i)?function(){return i(a)}:function(){return i||2.8},y,_,k=z1(u,e.type,!0,o),E=function(){return _=!1},C=an,T=an,j=function(){l=dn(u,tt),T=ma(Jn?1:0,l),n&&(C=ma(0,dn(u,Ht))),y=oo},N=function(){p._gsap.y=Zs(parseFloat(p._gsap.y)+h.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},M=function(){if(_){requestAnimationFrame(E);var z=Zs(a.deltaY/2),D=T(h.v-z);if(p&&D!==h.v+h.offset){h.offset=D-h.v;var S=Zs((parseFloat(p&&p._gsap.y)||0)-h.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",p._gsap.y=S+"px",h.cacheID=ne.cache,On()}return!0}h.offset&&N(),_=!0},R,V,U,K,ee=function(){j(),R.isActive()&&R.vars.scrollY>l&&(h()>l?R.progress(1)&&h(l):R.resetTo("scrollY",l))};return p&&F.set(p,{y:"+=0"}),e.ignoreCheck=function(G){return Jn&&G.type==="touchmove"&&M()||g>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){_=!1;var G=g;g=Zs((re.visualViewport&&re.visualViewport.scale||1)/w),R.pause(),G!==g&&ld(u,g>1.01?!0:n?!1:"x"),V=m(),U=h(),j(),y=oo},e.onRelease=e.onGestureStart=function(G,z){if(h.offset&&N(),!z)K.restart(!0);else{ne.cache++;var D=x(),S,X;n&&(S=m(),X=S+D*.05*-G.velocityX/.227,D*=ym(m,S,X,dn(u,Ht)),R.vars.scrollX=C(X)),S=h(),X=S+D*.05*-G.velocityY/.227,D*=ym(h,S,X,dn(u,tt)),R.vars.scrollY=T(X),R.invalidate().duration(D).play(.01),(Jn&&R.vars.scrollY>=l||S>=l-1)&&F.to({},{onUpdate:ee,duration:D})}s&&s(G)},e.onWheel=function(){R._ts&&R.pause(),Tt()-v>1e3&&(y=0,v=Tt())},e.onChange=function(G,z,D,S,X){if(oo!==y&&j(),z&&n&&m(C(S[2]===z?V+(G.startX-G.x):m()+z-S[1])),D){h.offset&&N();var le=X[2]===D,xt=le?U+G.startY-G.y:h()+D-X[1],fe=T(xt);le&&xt!==fe&&(U+=fe-xt),h(fe)}(D||z)&&On()},e.onEnable=function(){ld(u,n?!1:"x"),B.addEventListener("refresh",ee),st(re,"resize",ee),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),k.enable()},e.onDisable=function(){ld(u,!0),ot(re,"resize",ee),B.removeEventListener("refresh",ee),k.kill()},e.lockAxis=e.lockAxis!==!1,a=new qe(e),a.iOS=Jn,Jn&&!h()&&h(1),Jn&&F.ticker.add(an),K=a._dc,R=F.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:P1(h,h(),function(){return R.pause()})},onUpdate:On,onComplete:K.vars.onComplete}),a};B.sort=function(t){if(jt(t))return te.sort(t);var e=re.pageYOffset||0;return B.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+re.innerHeight}),te.sort(t||function(r,n){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};B.observe=function(t){return new qe(t)};B.normalizeScroll=function(t){if(typeof t>"u")return Mt;if(t===!0&&Mt)return Mt.enable();if(t===!1){Mt&&Mt.kill(),Mt=t;return}var e=t instanceof qe?t:V5(t);return Mt&&Mt.target===e.target&&Mt.kill(),po(e.target)&&(Mt=e),e};B.core={_getVelocityProp:kf,_inputObserver:z1,_scrollers:ne,_proxies:gn,bridge:{ss:function(){Or||go("scrollStart"),Or=Tt()},ref:function(){return St}}};b1()&&F.registerPlugin(B);const G5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABedJREFUeJztmm2IVUUYx/+zq+uurOYrhppQ6WZZpJRBQZjpmlghvlSgiWlQSGURCX0IhCgSI6MM26RCsUjTQoJSK8QyojIy3DAF00zNypfyZXfVbffXh5nN4/Xec8/LHK/W/j4t95x5nuc/Z3bmmWdGaqed/zWm1AGkBegoaYSkayX1l9QoaZ+kDcaYraWMLVOAamAu8CeFqQcmlDpW7wA1wLYQ4bmsBDqXOm4vAFcDf8UQ38bnQKdSx58KoCuwM4H4NupKrSEVwLMpxAO0AteVWkcigCrgWEzBS7HzxZHAb8tLrSURwB0xxS8ByoAxQEvg96ME5oIOGQXbT9IYSddL6iPphKTfJX0taa0x5mgCs3GG7lJJMyWNlrRaUlngWRdJNZLqE8QQDjAQWA40h3yZE8DLQO+Ytuty7GwGHgMaQr58Y4EYxmQhfmaeYMI4AIyIYX9hTvv1QDlwa8BvFPEAI32LfyKG8CCngNsj+ngyT/u3A51QF1E8wCCf4m/nzEkmLkeAKyP4ualA+7eAcvdOFPH7AD97IKAzsDuF+DY+ieCrDPilQPtVwENAUwRfL3kR74Ka5UF8G7dE8Hd/Sh8NQF8fwvsCn1L4iyRhUQS/5c5vUh5OLd4F0gP4iPDlLi47YvjeksC+v6EfCGa6M/4NdkZPw0kiTk5AF+z/fRSagNnexbtAVgN7sUOzBzAD+NCJSULXmP5HAesK+DuAXRovCbOReDlwX+u4pNeNMY/mPOsmabykyZJqJUXZh/8tqZMxpjVBLBdJGiKbdjdL2iup3hjTEtdWHKe9XE8/Uiw44F43WsKWqQurfofN+wGmxmjTBZgCvM/ZCcsqXEJzQYCtzgA8nrB9tRsZQX4DFgHDfMebCdg8YFWK9jc64dOBu4AVwHFgk884MwN4BVul6ZmwfZ2bF7oHfqtyk9r5DzAYmwzFTjKAq5z4xVnEds7AFjdagckx2nTHZnMHgT5Zxpc5QAWwEZsJzorwfg22mnMSqD0XMWaOW94+cBPal8AEck5isAcaC7A7soPA2FLFmwnY/foMYI/riBPALuz53CH3WzO2bBWanp5LvJ8Ou2TmZkmjJA2QVCVbEd4saY0xZr9vn+2kINYIAKolTZE0UrZOXy7pkKT1klYYYzZ7j/B8weXwv1KYFmBZMKn5z0D+knQhfgQuTemvioTZpXfckhaXn4h58pPjc4kbUd8C84DRQKVPXVED6YVds5OwlgT1d2BaAXuN2OrPHGBoEtuxAZ5JKL6NGTH9XUH0I/A/gHewpfIBWYivAA6n7IA9RLyWAlQC36fwtR14Oq7OspBnt0lKO6P3lz2mjsILslfdkjJIkr86AvBiyq/fxm4g9B4CMMmDnwXexLugNnoIqo2JIX4GcHqvkJRNQIVP8eXY0pQv1hXw0wG7e0zDMaDGm3gX2OWpJZ9JKzAwj5/nPdi+26t4F1htjADGA89FeG9+jo9x2I7JR9SbJq95F++CeyBiAABTsSXysDu7YNftTs5+P+zRVT7WYEvm+4rY2wJUpdVaaBm8LIaNOZKOSSp2C7O3pEnu7zck9Srk2xhzXNLKEFsNku4xxjTFiDM6wLvRBwAAY4E+FL+h8Zmz/2aR94Zx+swgH/dlIjzQAZuiawdgvWu3OMK7Q4AbsCWzQswDDPBznmfLMhXvhCRZl4djK77FLkwtdD7K3fsTgaew9wvrsdXina4D5ue03Y4tymQqvlsC8QArXfv3irzXjD0InQtMxh6udAj474g9NKlwzz7GjpYmYKhvvWdtKbEHk98lsNUiabCknpK+itn2lKRtkrbKXmHdKukHSbuMMS3Yq7fXGGPWJogrHqTLy+ucjQ0pbARpwN44GZ658EAHzEkRcBN2NRjnQ32O3UyOzPPlAWnqeZWSZktaIzuEfVEpaZpHe/+SrwPiJEH5mCWpWlLs4kQRGj3bk5R/EqyV1C2l3S+MMfuxc8KDKW1J0mFJQ40xezzYOoPMC4uuQ++UdHFCEzskvZqF+HbaaUf/AAh8F515yko7AAAAAElFTkSuQmCC",q5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAB1JJREFUeJzlm2uIVVUUx9cZGzPfQo6joqJhOSpI5YdMRbN0ShFDrTA/BH1J8wGmoAiRZZpBIGSU3wI1NUtSMwg0J9OyUEcnx8DSiMqxxHy/Hf31Ya/d3Z4559xz7muO9IfLuXfttdZea5213/uKFBBABbAYOABcJBwXgVrl7VxIG5oNwGTgfITTYTgHTGxu+/OCOn9LHdoEjADaRPC3AUYCW1Tm5h0bBE17++bn5yC/UGXPAvcWw8aiQtsxwKY8dGxVHYsKaFppABxU40fkoWOU6thfSNtKAuCCGt82Dx3tVMf5QtpWEtiuPC16ksLLV0GRjf7a87zHiqhfyoqp/E7AXYVS5HleXtlkMylfPUnxv8+AMhERoCXwNtAQMFU9DiwDWsZVqjO9EcACYDPwt342Ky1yplhyqIPZsCxE1mIqsALYD9yIoe+G8q5Q2eYbBYDjItJNRIZ6nvedz8FhIrJLRBo8z+vuVxBidKOI1InIHhH5Xp8iIkNE5BF9DpKAPqjUfYANQGQHFFXuBGCzGEf3iMg+z/MuR1UMtBaRwWKCMUREJkTZUFRkS7+ocjILoXZ51N9edZzLVUeusKNAgxoyzM8ADHd5AmDpPfKwo2eWOooGG4DV+tzl76lE5BstWxWiY58+R+dhh5Xdm4eO3IEZBpdhhjw/IodB4BnlOwS0yKHuFsBh1TEpf28KgCRDElAO/KIiM3Koa7bKHgHKk1tbBCQdk4GnVeQa8HgCuSeA65jttPG5WZsniJ4FxmoGqsdOpq4BM6Oag6b9bHUeYElxvIsB4s0CLQJng6qnzKerHpgDDATa6mcg8AqZNn8LWAo035qETMf3aATPMJsJMfRNAH6OEcwjNFfa+wwGsrd3oAaoiamzHLNVvhr4CbNtdkG/rwImUYQOD+gPfAacBv7R71XZhGIFIES2HzANWA/8CXyVJJ212WwH/gDWAS8B/XK0pUod9+MU8ECUYOwAOA6vA06EpHZ1AqOrQ3Q0JA0IsFZlNwKVQFfMIQ3AmijByAAAA4CVBI8SJ/TtTwOWWwMSBGCjyiwnk0lBgW0AFkfo6QhcwSyxKx16N5VvBHYCzyYKAPACt6/tXYerfLyVmGHtOtBVaV0xJz9H9LPQV2b5K326qgICcjjExh6YjRaALwLK/dP792MFAHgYc2Z3C3gPGBBkgE/mU1W3St/udZriupat0t9ZMwbo6w+S0nc6es8Q0tY12DOAS8o7Nk4AbPt5K5uBjsyYEGer9RMUlNh9RkB92zBbbeuB+2Lwz9Q6t7vEsADY+UGTXaCICsqA3cBRnHT38dhmcVR5s44aPpldce0J0FOhPp10iWEBCKSXEsAgTLNy+6Hdeei7cwIATMGsK/xNqczh2QmcBDYAfWPotE1gm0tMXQCA+4GrasKHBHSAyrfNyYwzhMwZaNoJPukWpjEAH2j1G2LwdsdMeSF4GPyW2/GunyFVAQDuJjOlzTr0qkx7MhOhLg69l+ppxKxlmu44pTAAdnPlQEK5j1Xuc6An0Bv4UmmrowTTFoBPtOp5CeX6YFaAfvwF9IkSTE0AgA6ayjdJMP9w5HtrJpzHTJDWRjqvQmkKwIta7fbs3IVB2o7Hp+rzo5LVmJYMwCxdG7UJdCxVvWnKgCki0kJEtnqedzaJIGZne4q2/2OYGeQF/b4WGBglnJYMqNUqJySUmwz8HtD7u3g9SkGzBwCzmQlmGIt1EwXwMJcrLOow090qoBXQWvU+B3RQmU7AONwVaEoCsESrW5lAxjp/BbN7FHmvALMSPKQyb7oFOQWA23djCok4p1CTlPcqMNKhd0LfdoTzYHa5Rqc1ABZhd5LKgd+U52WldQd2OLIHgbnK6zpfD7ym3/cBXrM0gSjdZDmFAp7X8jq0LTvOXyKz5EUdt8dw9RqMMicgw1MXgGzlZBY9M/V3B/19WR0sx2yc1DuBOAxUODpmKX1pmuYBcTFYn/aYrkxEEHMz7ZTneTdEpFZpFrdE5Izze4c+H4rKAHsNvltBzZesb9geZgRemCKzTdbGodn/LFQDnZ0UP+RkwlyHv7XSaqMCUKNFif8Gkw1ZArBAiwMXRGTaeGuHNk9p9T7nK8gcvx10+G0AfnC3v4f5Khqv9GvA/EJmQlAA9M3Pd97w2BDZY1re36GVc/swdwht85hO7wJm6OuoNDvx2iiEX5CoITNBKTXeiAjeeuWZ5dAqyPT2YDKhGuN8JWayBNBe+e3u8By7kAi6IVajzOMwx965/CcwCc5jjsoD37zjrL2VVo9x0D/OH3V0XiSTUducjKjDbLpkPU1KHTCbpnYitIimbb4d8CqZm2uNmH3Cbio/XenhR+ZpBzDRlz3/tXkfX3uglfN7FKY5nAZ6ldbqAgN4xwnAIiLOGDXtp6vzjeRxIJsaqFOLyfxltx7TuQ3ADHP3YHr7mcCPynMaGNPcthcUmMuWe4nGTWBNUNqX/m5+EYDZCxgqIk+JyIMi0kVEbojIcTF/9tjied6vQbL/Ahk//XtT8uP2AAAAAElFTkSuQmCC",X5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAB79JREFUeJztmn+QllUVxz9HfiWBTWhrZelEkjAgZepoLTpT2fpjHQFJSZAZLV1LHQZnIh0xs6Q0qQyVMcYaAmmjNqIQS6WoIYwGzKYpwzUtcwRFC2GBhYWFb3+c87pPzz67+/7etd7vzDvPufeee+95znvuueee+0ANNdRQQw01/N/CqjGJpGnATQXOt8HM5lRIpNdRLQUsB2YCu4DDeXQ5CthnZiMrKhgwuNITpDDezLb2xSRpMzC2CvJUXQFIGg2cE8XlZtYuaQpQBzxnZr+qtkwVh6Tlchwn6VJ14e3RvjHKzVHeLGl3NWSrugUATwDXBN0Wz68RFpDgGyKpqY+xXjKzh8osX/mRtIA8+Tcrf4wuRbb+sIB80QHM6qX9CuACYEQpk5SsAElnAY19sJ2S4B8LTI7ifWa2V9Is4J3AFjNbHW2dZtYiaQQw2Mx2ShoODMO30/pSZS8LJP2pAHMtxAnuCXq1pH1B3xt8x0r6VtATS5G/HEtgKLADaOiF53bg/KA3ApcGvTOe84CjgRcy+j4O5HaEPwItwP4S5M0PkgZLmiBpsqTzJY2R1C1ylLRF0st9jFWME9zTB09ZLOCIjIGPkHQDsBX4M/BT4OfAM0CrpIt7EeozkuYFPV3SnZIGsqPtrgBgCfBNYAiwCPgsMAdoBt4NrAwFZWEGcF3QjcCNwKAkg6SJoZg7JY2MumujfFl6QEn1OaVLOkXSJZLeVOiL5gVJ54VZbZJ0dEb7GEkvSDqQM+fkEpB0mnxXQNJ4SeeERRUTCfaLE/xIPG82s3+nmc3sb5K+DiwEzgZ+kGp/IkE/BTwVgifZ1gKnBZ2b40rgzbgzTWMR8LOgV+DLsi2DryikFTA8nr05tX/Fs6gAxMxeA/6Qqnu6F/5HE/Tj+K6QVmrRKMVBXSPp48BxQHsINRd4m5l9XtKVwJl0+YRKYYGkXYlyO7DGzH5c8EiJNTahF54Z6o6cD1gvaVvQy6JtWMoHnCppcfyOCt6bonxVlJM+4DpJ9wX9yVy/hA/oCTPzeeesXSBf3ACMwrfHHK4Gzgv6VnytH0j1ey/QFL/ckpsc5Y9mzHMu8Omg64PvyET7WSFH7ndG1F+Yz0uUsgTazew1SYdyFWbWmqCfB56Hbuv1YVwJAK/G8xN4jJ8V/CRf+EvA3XT5IYC28CvEXM8GOTSflyh7kCJpCHAx8JZE9ZgEPRxYgOf9kso5DNwF5DJCg5XIB0jqAFaZ2d9T/UpCJaK0Bny76gkfxhWUhZfoUsAwYHGqvQ5XXl6QNA64HPgn8F0zO5TmqYQCctvjA/ieDzAbmBR07jwxx8wWhqAnEMslgWQ+YBxu/oVsvR8ANiX6NEianlZCKU6wLzxpZi1m1oL/A4WiM9H/N0X0H40reybwS2AacL9SB7pKKqC/8KkEPcvMmvEltxnfpW5PMv/PKECSSbqD//YR35PUaGa78cNZKzBP0hk9DVJIINQU5b9KOiRpR/z2RPveRF1H1O2UtDujfWfUdUS5U9LhRHtbtO9L1O2PuomSBkl6IMpPSxorP2G2B9/7Q9YvpoOkcjjBB/H11R94BfcvLcBU3Mwb8QzSimhbA9wh6RE8OHsZeDRztGIsoD8hD4nXhTxrJY2QdKKk53IBkaTfhzVJ0ouSxifHeMP6AEl1wK/xI3wLHvqeBGzAd4DFkgbhGWTDQ/ZJcUx/HVVJV0m6EN/TC7mNPgwsNbNfZIz3HtyMxwDfBq7HFfETPNJsApbh+YoG/Ph9gZm90pegFVkCkr6v4rAkY6wJkrZG+5ejbrrcge6TNCWWwtrgWac4dWahWgnLWcAtFGYBIhVASaoHHsLPGbPN7F5Js/EDUhtwEbAFWAecjlvEDDPryG/GAewEJTXKt84DIYNJ+krIslXSyZKOl+coJel34QN6xYBOWecg37eXAAfx3MFj+Npvwm+Uz8WPvxvwzDX4zXG3w08aA34XkDQHjzV2Ax/DzwWr8JffhKfdjgF+C7wLmF/I+OW4HL0E33YKwUHgQTN7tScG+aFlPnAz8CKeadqGnzDrgUfwRMokYCV+fL4CD3xuyVeQkhQgv/VZgqe0C0Ub8J1e2nOXMq24iR/C/+XxwHL80DMNWAp0AlPNbI2kUYUIUZICzKxTfjFRqAXsxy9JMyHpVPzlAUbi//JXgeOBbwBz8WzzQjzQucjMNhQoQ+bEA2IXkHRPzLFCftCSPJz9XLTfFnXbJJ2c6jsq2lbmM1ePFhCmdDpwYvC1UlxioiBIGgpchqfHLgd+BPwQ/6eXSloEXAs8CzSY2T/KOXnOAlap67iZxA5JD1fSAiRNjfHvStTdGnXb4/mkpGN76F8WC5iC5+ia8a+6jgQ+CFyFf5dTSeQ+nlgm6a34HWQdHhnW4VY4xcx2ZXcvDD0p4DFgspklv8RolrQAWA+8L6uTpBvx/blYbMdNH9zsT6Lren1P1F2fkqsk9KSA+VmTmNl2SXcD9+N7eRod+D9V7DfIB4DbgBPwT2XX40fedcAmM8uas3yQ9IVYP9N74RkpaW6Y54BDoT4g3XmcpIPyzMmZFZCv4pB0TNFO0My2yGPve4CNkp7Bw9B8PnEfKHhHPP+SD3PmWpX0ITzaOhv/fO2NhL3AauBqM9vb38LUUEMNNdRQwwDGfwCDZMaNrc1F5wAAAABJRU5ErkJggg==",K5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACqhJREFUeJzVm32Q1lUVx7+XXVZcRRAY8N1EfME2MQHNfElXScdJrZRyLJFEsSxTk8RQS7M0yzRtnAmtkbRJJZkwIEkz8gWtJCYcSfEFBsRCQHmRjV1e9tMf5/zmd/fH8/Lb5bfP1pl55nnuufe83HPvPffcc+8TVEMAekk6RtKnJDVLOsyrlkj6k6TZkv4WQmivpV7dCsAewFhgGrCajrDBPzGs9rZjgT16Wv8uAXAIcDXwR2BL1Lk24CngKmBY1H6Y457yNglscR5XA4f0ZJ8qAlAHnAD8AFiQGdE1wHRgHNAvB69G4CxgKvBOhtdbjj8LaKhF3yopOtCn6YPAuoyii90YpwH1Gbqkgz8DXvVP0qnGTNtewEhgMvA80B7J2ATMAiYCe9eq00OBK32qbo2U+Y/jrgT2L0F3APAVYI63TWCbf2I+c7ztASX4DPaZNB3YGNFtx2beTW6wUFSH+/go3g0sz4zyKh/9scDuGbpk5G5yxcqN3F7AAOcx1XnG8JbLPg3oXYRueTodgPNcyZbMaM0HvgUcWYJuN9K1+68KHSm7djFfEhsuhrWkvqR/CdojXbf5dJxVLd6X88gzM4DbI+J1wKPAhcCgEm2H+kjOoqP33oqt2cnA4TnsXk6XD0X8WzODkfAfWYJukOv8KB39063VBA5y5VcDn2RHBxZ7+8WZEeqUt+8s0HF3WJmRvZTUke6Soav3vqzBttWBlYSMdobTM0YZD/yGjkFLOzZNb3a6XkV3uoKevVzmzezoYza4ruOJZq3jAEZXYnysN3rEy4Mxp5XAJmAmcCmwTw36mguAfVynmSX0HextHnHcsZUYZQ3Q5OXXgDOAPjXqU5cB2x3OcJ0Bmhxf0gB5p+0bIYS5IYTWwjUuGEIIrSGEuZLeyNO+vnqTroEvkTGSPiypVdILkp6sdtLDDkBnSRopqY+kFZJmhxBe6Q49u8UAwHWSbpC0W6bqZeDzIYTXytCNk3SnpKynvhV4TNLEEML6InUt3ADAFEnfl9Qi6Q5JL0nqK2mcpJMkPQuMDiEsz9BdJekuSdsk/VKWG2iR1CTpckljJQ0Hjg8hbCxa70SJck5wVk76g31Leh8YnqkLwE+d34xM3ZFYcLMJOKkE392AJ5z2/py6zCrSCeaFiyUFSbeEEF6NK0IISJok6d+Szgb2jKonSaqTdG0I4dks0xBCi6TzJa2R9CVgSFEKF22ATZKWSnqoVGUIoU3SM7KlF4fIYyS1yaZ+SQghbJD0iMxQzQXpW6wBQgi3hRAODiGsrdAsOQxtlyxUlTRE0kof6UqQOM/9dk7TFGoWvkoSdkZolm2Lix1dL1s2W3OwSNoUlg2qZfzeRzbF+0t6KMdo1wS6LRBKADhXFtScL+kgSa9LmtzdcvNCNQOsVurYOg3AQZIei1DbJH0uhLCuK/y6AyoaIISw2k9TXToDhBCWARdJGiHpM7IZMAc4LoTwdld4Fg1VfUAIYbPv4V2CEMKDIYRrZNveA5L2lTStq/yKhooGABqw9PXZOysohLBF0kRJr0hqBo7eWZ5FQLUZMEzSZZIuycMMmACcXq4+hLBNaZD0iVwadjNUc4KJgapmUz2guV/Sq7IjcDlY5d9JZneLzDnuWk2GpOTipLAtNDsDtvh3Q5lyWfDRfVfSMKBvhaZH+PdKp2uXtEzS/jli/FH+/WY1fVS+Dx0CrqwBNvh3vzLlajDHBV1fqtI7OEE24nOjqpmuy5RyjIHDZEfiDbKr9GqQHLaSLbdfplxSyEA/Mi7wckOSE8whUMCBWPq5HcvZN0R1TcA/nN/dGbrBwHsRXV2mvgl402kn5dTldW/f4OXkomVAJaJ6b/RmhNsIrCfnfRtwCun931pgHrCINHX9BJncvdM1Ax94myXYTdJ3/Vyf3EP+Ko8eWO5hA7A+wi3F7hB7V6IVsAJLTjR6eb4LH5rHAE5zBDAD2EwKS4CvZUc3Q9eEvQfIwmqnzTsIw5zuOS83euer+w7gd0482sv3evncnP2Pee2CLYsdrtWq0B0IfBq73jqezA1VDvqxrvM9Xk4ufB7Pti3FeJEsKztCls9b4PgTJc0o0b4seAJkedWGO9It7wpdBCf490L/Ti5zF5do2xGAc9xaD3p5iC+Jt/NOwZ4EX/8rfMrv5bgkH3hmHgaN2JXyOlIP+pwzGJWDvhcwArvmHlyivg5LvtZ7eXei+zpgVOR/6oCP+RQu6zsy/I9xXZ+JeLyHOebGavQJk8edyWle/rqXq2ZkgcsyDmw6sGtU/x3H3+TlOxMfg93hg13R7w4sjPi8QonXJyXk/8Lbf9XLp3h5dq7OO9F4J5rm5b4+I1qp8h4H+LbTvgS84b9v8Lo60odP73i5GdsiVwHv+u+TgS9EfOY5vuL5AVuum7EtcA/H/dr5jOuMARqxPbwt6TDwI2f0wyq0N3q7CcB+/nuh151JRzjT8fdFuKmOO8PLbdhDh5Nz6J3oeLuXB/mgvU/e6R8xu82Zfc/Le2OBSisV3uxlDFCHOdBlXpfc0Sff0x3fz0duM9HjCiwqXONtW4CPVJB7qBtrYzRo45z2x53qvBPv6wzXk96xT3aGcyrQ3eBtrgAu99+zfDTiZzS4MQc43Xrg/YjPJVjkd3g0Q26sIDe5OfpmhBsATKHSq5AqRrjLmd7n5QbSe/fLytBcn+nkFuDEyBhrsEdTa2I+2Lp9L+IzjR2h5DaGPasD+CdFPqAE+mNh6Hb8MRK2JbVh28oO535sG3sRO3w8jN/1YWt6EXColw/38hgvPwD8POLT240533lNKKNjk+vSFuk4Eluu1xZhhEvduovx7Qy41nFLKbHX1wqwZZWc+q5xXF/S3Wd8EUIC6U3rvY7rhXlmgBeI9vlaAbZT/cV1eBiPUoGHHNepsL2asCHYPt0OXOC4PthbPYA/09kXmTunTyP2NBcsSu3j+MTrL6fj7XMhQsdg5/JW4ATHDSSN1p6uhRF8is9zmX9POgqc6rptTfTrDuETXfBa4AjH9Qf+6viXKfHIuUD5+3inccMPdPwobP9vBy7tLvmJEslT2lWREfpFU3IlcFw3yP04aRj9JB4wAcNJt9TripZbSpGApasSIxzl+N7A/Y5vw57O7/Tx2eVdTfrPk6mkJ8njos53PtrbSaV+4oI3El2GYI4oeWX+HJbN7aqcoaQpss3AlVHdOZGcO4owdlcUnOLrbitwRYQ/ijQD3AJcQ87zvNPXAZNIk6sL8Sf6bvxvYGeM7bFRegSAC0iTnw/jOwFpJJc8c18AVH3bg3nzxNFtdiMnU35P4LdR3Xnd3b9cAByNRYVgcX5zVDecNF4AO7QcVYLHR4E/RO2eJ/qvAbbel3ndEmBErfqXC3x0kmNuO3aCSzx18i+UJV6/Hcs+n+SfWaT3Bq9h2aEksusL3OM0YAmOSldvPQuufPLfn7eBc6K6euDLWNIyC8uxOKM+av9Z0v8DrQUu7JledRKw4Ghq1LkXgROj+t7AFzG/sABLf/WO6o/GwusEptODh64uA3A6Fh0my2IG/nS1TPtjsT89JMthEZ6Y/b8F7OR4UTSV24HfY8nQ4J9T6XgltgI7hufeOv/nATs9XkHqycGSlfG/upYAF9PTf4vtTsAc4fnY6fED/zyN3efV9OWqJP0XRHcTyRrohccAAAAASUVORK5CYII=",xr="#1B3A6B",W="#5BC728",ah="#399e14",$5="#f4f8f0",_i="#5c6778",Eo=(t,e,r)=>`https://picsum.photos/id/${t}/${e}/${r}`,mo={aboutBg:Eo(338,1200,800),processL2:Eo(1043,1900,1100),testiMain:Eo(338,1400,900),testiL2:Eo(48,1400,900),contactBg:Eo(218,1900,1100),contactL2:Eo(380,1900,1100)},_m=[{n:"01",t:"Free Inspection",ic:G5,type:"img",d:"..."},{n:"02",t:"Custom Plan",ic:X5,type:"img",d:"..."},{n:"03",t:"Treatment Day",ic:q5,type:"img",d:"..."},{n:"04",t:"30-Day Follow-Up",ic:K5,type:"img",d:"..."}],lh="/assets/rat-Cw3G2m7_.jpg",ch="/assets/cockroach-D2KOD6N0.png",uh="/assets/bedbug-CoUdDANc.jpg",dh="/assets/mosquito-Cbhr9S3E.jpg",fh="/assets/housefly-Tu0PbL7h.jpg",ph="/assets/termit-D8SFntUp.png",hh="/assets/wood-BLzuL2-0.jpg",gh="/assets/honeybee-D7tJMYwA.jpg",mh="/assets/snake-DIpJH9lR.jpg",xh="/assets/deepcleaning-CZk5YBEy.jpg",vh="/assets/distincfection-Di96BVJo.jpg",yh="/assets/terminate-CDbcuqLc.jpg",L1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABhFJREFUWIW9lmtwVVcVx3/rnHPPfSY3LxJKoRMSCCVSGktaa1tntFNlrFqVkdoq9JN2po4ZTGl5jNZhxsygTC0KIyo60w/WPsg4QKvFOqUzFos6YNuQgtBQkIdYII+bcJ/n3rOXH3Iv5sUjxPb/5ey9nv+9ztrrHKGIbFf7zy1oMsL60MKNr/IhwSotgv3xNlXZKvBT7+32p3TbUvvDICBjBbr/4YjnRp9Gsd2F8ftF1pkPkoCV7n50VvZAe4P2tAUBpHVr2j18+msKtbnuwW99kMkBJHeg/fcoTUAtsAeVZ9ybyzu97gtNGH/3iR1dbcaXTzvh+AzHcSMGBkVln1H/ucY1nSenTKC00IPr3Fx+6DOWaLtRgmf+eHhH7V2z159745hTSBXSgWh1ZMwL81SkY/Zjz3eIoFMmUMLxdZ8MSSyyL5fILHBiQfyUh+VGsIPRCQOoyPcbHn/+B9dKwBq5URDP59lcIrMAoJDMoapYtnPpE6h+9+SPHpjxfyHwxtrPrkXly6V9dyZOxtjo+EKNRNBHF0+ZwOrVa78ZtOgYqezJlZFWG/QKr1h02rUSEIBVq1a1uuje5e7+wEilIgiKFQjhhMsvGaTq9oV9sdnXb7Kyzk9k7rKhyRAoVsDaWMA+4as1OJrd8MlNIYvqxPPIcgOEZ9ZV48TXUDu/SwfeapkUgZUrV9aAnMnlcwsd9BFfbH09uIidoU8xYBVPreBnLjD+sgkVi+Zjh6uwIvVhsOqx2K1DbzddLYFR3dXR0XF9BG93RkLzAFq8w8zxT13U28Gosd2ohYA4NpWLmok2zsKONYOMuil7Jf7RO6+awIYNG6Z7XmGDCF8BwoCpM30H7sh11dn41410cKuqKGtoJHZjA040hAQqscI3jI+seqtU3LL/SgQcgHQ63eu67i+NkZcsS3Oq+vdvPPHjswA937u70YjMwPhadefHKitvmr9zZOXEmXhA+Sf+/IL38ldf9G2zKby48/hlKzAZFE7+erN6g98GQYKVWJFGxCkbT+DIi5jefwLkQbYESKyWe3flxtpZ4zyvAH/g4HSTOo1JncIfeg812fFG+TQmcay0C4CuyGv89bNbPtcwJQKZgytuAJZcFBRS+O+/plrIXBRpNkHh0DYojDisQu+xodtyGX+3/mHp9GsmYBXsrxd9TqIsAfpVc6qZE0+Q99oK77xA4c1focmzF338vOHskQR+wVA3L16fF2uXvvSFyDURAF1efP422LJxu+sw1xSsBnvmgx289uRWHfyXT2lgKaT7svy7q49gWYC6eVWG8hhUV7f4MxufLEW86ib0uttb1bCvGHxBsGXjwXE2Lz9w3Phan+7PMngmje1YVNWX4VbHoDKOWhZqlP43+7ME7C/NeOjpVy79nR0Lw7Liav9EybMH2+f0vvruqXQiWx+qcKlpKCdYFkBjMTQ+fEtMQel/qx8nZocqmyvWAK9csQK6f2VNPmC+qLARKFNkRejmpzZd1CviHfjODpD71GhK+gai4hUbMBxCqyqHq5PwSHQnCE8PUTZ3eMSLMbddtgLa0xb00qYHqCiKkkE//9xIm9w7K+8RzH0AYkmUaZWQGIJMFq2IYzzDhWNJsueyVC6owK1y/+dsWw9etgll7uYc6M+ATuA3liWL5ZbN50fZGFNsTA4AfwVB4+Vk80ESh4Y4t/c8VkCYdkfNqOQm59P7t/P3THoSjoR2PRb18N8HYqL6UCDqb0udNz9MvpdcoXkjwdoI4evCWM7oNIW0T/8/+ojMjCSvvgknQF4LSxCJAalAwNsuc7fkgPbcn5Y3UVdz70Q+qVMpLhy9QEVznND0sJkSAaA0F34nH9mSLAndsL/ME/6C0lySZc9nSR5LIrYw7ePTsEM2KD2T/haU4HU9eruK3A2glv3MSJ184tkBo/bn8wnv5NC7Q5zbc5bU8SRljWVUt1YPJwdQ3TnpHsh2P94oprAduKkoOu0eOV0v93f6Y22Prl86J95Yvis6KzLHjowptnDI9VK3TroClsnHgeIfiJ5R0YcnSg4wZ23n0RqGbnTCziMKe4ABhP8o/MIleJe0bk3/F5GEgEG2j9ZfAAAAAElFTkSuQmCC",Q5="/assets/LoGoLogo-DsfZdOKE.png",Z5=[lh,ch,uh,dh,fh,ph,hh,gh,mh,xh,vh,yh,L1];function J5({onComplete:t}){const e=b.useRef(null),r=b.useRef(null),n=b.useRef(null),i=b.useRef(null),o=b.useRef(null),s=b.useRef(null),a=b.useRef(null),l=b.useRef(null),u=b.useRef(null),d=b.useRef(null),f=b.useRef(null),p=b.useRef(null),h=b.useRef(null),m=b.useRef([]);b.useEffect(()=>{let w;document.body.style.overflow="hidden",P.set(o.current,{opacity:1,scale:1,y:0});const v=P.timeline({delay:.2});v.from([u.current,l.current,a.current],{scale:0,autoAlpha:0,duration:1,ease:"elastic.out(1, 0.6)",stagger:.15,transformOrigin:"center center"}),v.from(o.current,{y:-30,scale:.6,duration:.9,ease:"back.out(1.7)"},"-=0.6"),v.from(s.current,{autoAlpha:0,scale:.3,duration:.6},"-=0.4"),v.from(h.current,{autoAlpha:0,duration:.3},"-=0.2"),v.from([d.current,f.current],{y:16,duration:.6,ease:"power3.out",stagger:.12},"-=0.2"),v.from(p.current,{y:10,duration:.5,ease:"power3.out"},"-=0.3"),P.to(a.current,{rotation:360,duration:8,repeat:-1,ease:"none",transformOrigin:"center center"}),P.to(l.current,{rotation:-360,duration:14,repeat:-1,ease:"none",transformOrigin:"center center"}),P.to(s.current,{scale:1.3,opacity:.15,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"}),P.to(h.current,{y:180,duration:1.8,ease:"none",repeat:-1,yoyo:!0}),m.current.forEach(R=>{R&&P.to(R,{y:-(30+Math.random()*50),x:(Math.random()-.5)*30,opacity:0,duration:2+Math.random()*2,delay:Math.random()*2,repeat:-1,ease:"power1.out"})});const x=Array.from(document.querySelectorAll("img")),y=Z5.map(R=>{const V=new window.Image;return V.src=R,V}),_=new Set(x.map(R=>R.src)),k=y.filter(R=>!_.has(R.src)),E=[...x,...k],C=E.length||1;let T=0,j=!1;const N=()=>{if(j)return;T=Math.min(T+1,C);const R=Math.round(T/C*100);r.current&&P.to(r.current,{width:R+"%",duration:.35,ease:"power2.out"}),i.current&&n.current&&P.to(i.current,{textContent:R,duration:.3,ease:"none",snap:{textContent:1},onUpdate(){n.current&&i.current&&(n.current.textContent=Math.round(i.current.textContent)+"%")}}),T>=C&&M()};E.forEach(R=>{R.complete&&R.naturalWidth>0?N():(R.addEventListener("load",N,{once:!0}),R.addEventListener("error",N,{once:!0}))});function M(){if(j)return;j=!0,w&&clearTimeout(w);const R=P.timeline({onComplete(){document.body.style.overflow="",e.current&&(e.current.style.display="none"),window.dispatchEvent(new Event("loaderDone")),t==null||t()}});r.current&&R.to(r.current,{width:"100%",duration:.4,ease:"power2.out"}),R.to({},{duration:1.2}),R.to([a.current,l.current,u.current,s.current,h.current,d.current,f.current,p.current],{autoAlpha:0,duration:.5,ease:"power2.in",stagger:.04}),R.to(o.current,{scale:1.15,duration:.3,ease:"power2.in"}),R.to(o.current,{scale:8,autoAlpha:0,duration:.55,ease:"power3.in"}),e.current&&R.to(e.current,{yPercent:-100,duration:1.1,ease:"expo.inOut"},"-=0.05")}return w=setTimeout(M,6e3),()=>{w&&clearTimeout(w),document.body.style.overflow=""}},[t]);const g=b.useRef(Array.from({length:14},()=>({left:`${10+Math.random()*80}%`,top:`${10+Math.random()*80}%`,size:2+Math.random()*3}))).current;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700;900&display=swap');

        .og-loader-wrap {
          position: fixed; inset: 0; z-index: 99999;
          background: #04091a;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }
        .og-loader-wrap::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.03) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none; z-index: 0;
        }
        .og-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, ${W}, transparent);
          opacity: 0.9; z-index: 2;
        }
        .og-corner {
          position: absolute; width: 44px; height: 44px;
          pointer-events: none; z-index: 2;
        }
        .og-corner::before, .og-corner::after {
          content: ''; position: absolute;
          background: ${W}; opacity: 0.6;
        }
        .og-corner::before { width: 100%; height: 2px; top: 0; left: 0; }
        .og-corner::after  { width: 2px; height: 100%; top: 0; left: 0; }
        .og-corner.tl { top: 28px; left: 28px; }
        .og-corner.tr { top: 28px; right: 28px; transform: scaleX(-1); }
        .og-corner.bl { bottom: 28px; left: 28px; transform: scaleY(-1); }
        .og-corner.br { bottom: 28px; right: 28px; transform: scale(-1); }

        .og-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          display: flex; flex-direction: column;
          align-items: center;
          z-index: 3;
        }

        .og-rings-wrap {
          position: absolute;
          width: 180px; height: 180px;
          top: 0; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .og-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .og-logo-wrap {
          position: relative;
          width: 180px; height: 180px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
          flex-shrink: 0;
          z-index: 4;
        }
        .og-logo-glow {
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.1) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }
        .og-logo-img {
          width: 180px; height: 180px;
          object-fit: contain;
          position: relative; z-index: 2;
          display: block;
          opacity: 1 !important;
        }
        .og-scan {
          position: absolute;
          width: 180px; height: 2px;
          background: linear-gradient(90deg, transparent, ${W}, transparent);
          opacity: 0.55;
          top: 0; left: 0; z-index: 3;
          pointer-events: none;
          border-radius: 1px;
        }

        .og-brand {
          font-size: 11px; font-weight: 900;
          letter-spacing: 5px; text-transform: uppercase;
          color: rgba(255,255,255,.9);
          margin-bottom: 6px; text-align: center;
        }
        .og-tag {
          font-size: 9px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: ${W}; opacity: 0.8;
          margin-bottom: 36px; text-align: center;
        }

        .og-bar-wrap {
          width: 220px;
          display: flex; flex-direction: column; align-items: center;
        }
        .og-pct {
          align-self: flex-end;
          font-size: 11px; font-weight: 900;
          color: ${W}; letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .og-bar-track {
          width: 100%; height: 2px;
          background: rgba(255,255,255,.07);
          border-radius: 2px; overflow: hidden;
        }
        .og-bar-fill {
          height: 100%; width: 0%;
          background: linear-gradient(90deg, ${W}, #8ef55a);
          border-radius: 2px;
          box-shadow: 0 0 12px rgba(91,199,40,.7);
          position: relative;
        }
        .og-bar-fill::after {
          content: '';
          position: absolute; top: 0; right: -20px;
          width: 40px; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent);
          animation: og-shimmer 1.1s ease-in-out infinite;
        }
        @keyframes og-shimmer {
          0%   { transform: translateX(-40px); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(40px); opacity: 0; }
        }
        .og-loading-label {
          margin-top: 14px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          color: rgba(255,255,255,.35);
        }
        .og-status-dots {
          display: flex; gap: 6px;
          margin-top: 18px;
          align-items: center; justify-content: center;
        }
        .og-sdot {
          width: 5px; height: 5px; border-radius: 50%;
          background: ${W};
          animation: og-sdot 1.4s ease-in-out infinite;
        }
        .og-sdot:nth-child(2) { animation-delay: 0.2s; }
        .og-sdot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes og-sdot {
          0%,100% { opacity: 0.2; transform: scale(0.8); }
          50%     { opacity: 1;   transform: scale(1.3); }
        }
      `}),c.jsxs("div",{ref:e,className:"og-loader-wrap",children:[c.jsx("div",{className:"og-top-line"}),c.jsx("div",{className:"og-corner tl"}),c.jsx("div",{className:"og-corner tr"}),c.jsx("div",{className:"og-corner bl"}),c.jsx("div",{className:"og-corner br"}),g.map((w,v)=>c.jsx("div",{ref:x=>m.current[v]=x,style:{position:"absolute",left:w.left,top:w.top,width:w.size,height:w.size,borderRadius:"50%",background:W,opacity:.3,pointerEvents:"none",zIndex:1}},v)),c.jsxs("div",{className:"og-center",children:[c.jsxs("div",{className:"og-rings-wrap",children:[c.jsx("div",{ref:u,className:"og-ring",style:{width:380,height:380,border:"1px solid rgba(91,199,40,.06)"}}),c.jsx("div",{ref:l,className:"og-ring",style:{width:290,height:290,border:"1px dashed rgba(91,199,40,.11)"}}),c.jsx("div",{ref:a,className:"og-ring",style:{width:220,height:220,border:"1.5px solid rgba(91,199,40,.22)"}})]}),c.jsxs("div",{ref:o,className:"og-logo-wrap",children:[c.jsx("div",{ref:s,className:"og-logo-glow"}),c.jsx("img",{src:Q5,alt:"OnGuard",className:"og-logo-img"}),c.jsx("div",{ref:h,className:"og-scan"})]}),c.jsx("div",{ref:d,className:"og-brand",style:{opacity:1},children:"OnGuard Pest Control"}),c.jsx("div",{ref:f,className:"og-tag",style:{opacity:1},children:"Always On Guard · Kerala"}),c.jsxs("div",{ref:p,className:"og-bar-wrap",style:{opacity:1},children:[c.jsx("div",{className:"og-pct",ref:n,children:"0%"}),c.jsx("div",{className:"og-bar-track",children:c.jsx("div",{ref:r,className:"og-bar-fill"})}),c.jsx("div",{className:"og-loading-label",children:"Securing your space"}),c.jsxs("div",{className:"og-status-dots",children:[c.jsx("div",{className:"og-sdot"}),c.jsx("div",{className:"og-sdot"}),c.jsx("div",{className:"og-sdot"})]})]})]}),c.jsx("span",{ref:i,style:{display:"none"}})]})]})}const ek="/assets/bg-remove-Logo-Cl97S2ql.png",tk="/assets/Logo%20Variation-02-Teqzw514.png";function O1({tc:t="#fff",white:e=!1}){return c.jsxs("div",{style:{position:"relative",height:70,width:130},children:[c.jsx("img",{src:ek,alt:"OnGuard Logo",className:"LogoStyle",style:{position:"absolute",top:0,left:0,opacity:e?0:1,transition:"opacity 0.4s ease",pointerEvents:e?"none":"auto"}}),c.jsx("img",{src:tk,alt:"OnGuard Logo",className:"LogoStyle",style:{position:"absolute",top:0,left:0,opacity:e?1:0,transition:"opacity 0.4s ease",pointerEvents:e?"auto":"none"}})]})}function rk(){const t=b.useRef(),e=b.useRef([]),r=b.useRef(),n=b.useRef(!0),[i,o]=b.useState(!1),[s,a]=b.useState(!1),[l,u]=b.useState(""),d=["home","about","services","process","blog","review","contact"],f=Yn();b.useEffect(()=>{P.set(t.current,{y:-80,autoAlpha:0});const h=P.timeline({delay:.4});h.to(t.current,{y:0,autoAlpha:1,duration:1,ease:"expo.out"}),h.fromTo(e.current,{y:-12,autoAlpha:0},{y:0,autoAlpha:1,duration:.5,ease:"power3.out",stagger:.07},"-=0.55"),h.fromTo(r.current,{scale:.82,autoAlpha:0},{scale:1,autoAlpha:1,duration:.55,ease:"back.out(1.8)"},"-=0.35");const m=()=>{n.current=!1};window.addEventListener("loaderDone",m,{once:!0});const g=()=>o(window.scrollY>80);window.addEventListener("scroll",g,{passive:!0});const w=["home",...d],v=[];return w.forEach(x=>{const y=document.getElementById(x);if(!y)return;const _=new IntersectionObserver(([k])=>{k.isIntersecting&&(u(x),window.history.replaceState(null,"",`#${x}`))},{rootMargin:"-40% 0px -55% 0px",threshold:0});_.observe(y),v.push(_)}),()=>{window.removeEventListener("scroll",g),window.removeEventListener("loaderDone",m),v.forEach(x=>x.disconnect()),h.kill()}},[]);const p=h=>{a(!1),f(`#${h}`,{replace:!0});const m=document.getElementById(h);m&&(n.current?(n.current=!1,setTimeout(()=>m.scrollIntoView({behavior:"smooth"}),120)):m.scrollIntoView({behavior:"smooth"}))};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        .og-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 2000;
          height: 70px;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 56px;
        }
        .og-nav.scrolled {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(22px);
          box-shadow: 0 2px 32px rgba(27,58,107,0.09);
          border-bottom: 1px solid rgba(27,58,107,0.07);
        }
        .og-nav.transparent {
          background: transparent;
        }

        /* ── Logo area ── */
        .og-nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          flex-shrink: 0;
        }

        /* ── Kerala tag ── */
        .og-kerala-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Lato', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
          transition: all 0.3s;
        }
        .og-nav.scrolled .og-kerala-tag {
          background: rgba(91,199,40,0.1);
          color: ${W};
          border: 1px solid rgba(91,199,40,0.25);
        }
        .og-nav.transparent .og-kerala-tag {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.18);
        }

        /* ── Desktop links wrapper ── */
        .og-desktop-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .og-nav-link {
          background: none;
          border: none;
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          padding: 4px 0;
          transition: all 0.25s;
          letter-spacing: 0.3px;
          position: relative;
        }
        .og-nav-link:hover {
          color: ${W} !important;
          border-bottom-color: ${W} !important;
        }
        .og-nav-link.active-link {
          color: ${W} !important;
          border-bottom-color: ${W} !important;
        }

        /* ── CTA button ── */
        .og-cta-btn {
          background: ${W};
          color: #fff;
          border: none;
          border-radius: 50px;
          font-family: 'Lato', sans-serif;
          font-size: 13px;
          font-weight: 900;
          padding: 12px 30px;
          cursor: pointer;
          letter-spacing: 0.4px;
          box-shadow: 0 10px 36px rgba(91,199,40,0.22);
          transition: all 0.3s;
          white-space: nowrap;
        }
        .og-cta-btn:hover {
          background: ${ah};
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 18px 44px rgba(91,199,40,0.4);
        }

        /* ── Hamburger ── */
        .og-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .og-hamburger span {
          display: block;
          width: 25px;
          height: 2.5px;
          border-radius: 2px;
          transition: all 0.3s;
        }

        /* ── Mobile dropdown ── */
        .og-mobile-menu {
          position: fixed;
          top: 70px; left: 0; right: 0;
          z-index: 1999;
          background: #fff;
          padding: 22px 40px 30px;
          box-shadow: 0 18px 55px rgba(27,58,107,0.14);
          border-top: 3px solid ${W};
          animation: og-slideDown 0.3s ease forwards;
        }
        @keyframes og-slideDown {
          from { transform: translateY(-12px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }

        .og-mobile-link {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Lato', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: ${xr};
          padding: 9px 0;
          width: 100%;
          text-align: left;
          transition: color 0.2s;
        }
        .og-mobile-link:hover { color: ${W}; }
        .og-mobile-link.active { color: ${W}; }

        .og-mobile-kerala {
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: ${_i};
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(27,58,107,0.07);
        }

        /* ── Responsive — pure CSS only, no Bootstrap ── */
        @media (max-width: 860px) {
          .og-nav {
            padding: 0 24px;
          }
          .og-desktop-links {
            display: none !important;
          }
          .og-hamburger {
            display: flex !important;
          }
          .og-kerala-tag {
            display: none !important;
          }
        }
      `}),c.jsxs("nav",{ref:t,className:`og-nav ${i?"scrolled":"transparent"}`,children:[c.jsx("div",{className:"og-nav-logo",onClick:()=>p("home"),children:c.jsx(O1,{tc:i?xr:"#fff",white:!i})}),c.jsxs("div",{className:"og-desktop-links",children:[d.map((h,m)=>c.jsx("button",{ref:g=>e.current[m]=g,className:`og-nav-link${l===h?" active-link":""}`,onClick:()=>p(h),style:{color:i?_i:"rgba(255,255,255,0.84)"},children:h[0].toUpperCase()+h.slice(1)},h)),c.jsx("button",{ref:r,className:"og-cta-btn",onClick:()=>p("contact"),children:"Free Inspection"})]}),c.jsx("button",{className:"og-hamburger",onClick:()=>a(!s),"aria-label":"Toggle menu",children:[0,1,2].map(h=>c.jsx("span",{style:{background:i?xr:"#fff"}},h))})]}),s&&c.jsxs("div",{className:"og-mobile-menu",children:[d.map(h=>c.jsx("button",{className:`og-mobile-link${l===h?" active":""}`,onClick:()=>p(h),children:h[0].toUpperCase()+h.slice(1)},h)),c.jsx("div",{className:"og-mobile-kerala",children:"🌴 Serving all of Kerala — Trivandrum · Kochi · Kozhikode · Thrissur & more"})]})]})}const nk="/assets/HomeBanner1-B5rsHteK.jpeg",ik="/assets/kerala-BcuaNgKT.png",ok="/assets/ladybug-DcxrmZSG.png",sk="/assets/happy-CiQMjEjO.png",ak="/assets/24-hours-BmEr6iWs.png",lk="/assets/badge-CHbo3yS_.png";P.registerPlugin(B);const ck=()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[c.jsx("path",{d:"M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z",fill:"currentColor",opacity:".18"}),c.jsx("path",{d:"M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinejoin:"round"}),c.jsx("path",{d:"M9 12l2 2 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),uk=()=>c.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"#F5A623",children:c.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),dk=()=>c.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"currentColor",opacity:".18"}),c.jsx("path",{d:"M8 12l3 3 5-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});function fk(){const t=b.useRef(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef(),o=b.useRef(),s=b.useRef(),a=b.useRef(),l=b.useRef(),u=b.useRef(),d=b.useRef(),f=b.useRef(),p=b.useRef([]),h=b.useRef(),m=b.useRef(),g=b.useRef(),w=b.useRef(),v=b.useRef([]),x=b.useRef([]);b.useEffect(()=>{const j=[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(N=>new window.bootstrap.Tooltip(N,{trigger:"hover"}));return()=>j.forEach(N=>N.dispose())},[]),b.useEffect(()=>{P.set([f.current,h.current,m.current,g.current],{autoAlpha:0,y:22}),P.set(p.current,{autoAlpha:0,y:70,rotateX:-28}),P.set(x.current,{autoAlpha:0,x:55,y:18}),P.set(w.current,{autoAlpha:0,y:55}),P.set(v.current,{autoAlpha:0,y:24}),P.set([s.current,a.current,l.current],{autoAlpha:0,scale:.5}),P.set(r.current,{opacity:1});const T=P.timeline({delay:.2});return T.to(r.current,{opacity:.85,duration:1.6,ease:"power2.inOut"}),T.to([s.current,a.current,l.current],{autoAlpha:1,scale:1,duration:1.4,ease:"expo.out",stagger:.15},"-=1.2"),T.to(f.current,{autoAlpha:1,y:0,duration:.6,ease:"back.out(1.7)"},"-=0.9"),T.to(m.current,{autoAlpha:1,y:0,duration:.6,ease:"back.out(1.7)"},"-=0.9"),T.to(p.current,{autoAlpha:1,y:0,rotateX:0,duration:.75,ease:"expo.out",stagger:.09},"-=0.3"),T.to(h.current,{autoAlpha:1,y:0,duration:.6,ease:"power3.out"},"-=0.25"),T.to(g.current,{autoAlpha:1,y:0,duration:.55,ease:"power3.out"},"-=0.35"),T.to(x.current,{autoAlpha:1,x:0,y:0,duration:.75,ease:"expo.out",stagger:.12},"-=0.9"),T.to(w.current,{autoAlpha:1,y:0,duration:.65,ease:"power3.out"},"-=0.5"),T.to(v.current,{autoAlpha:1,y:0,duration:.45,ease:"back.out(1.5)",stagger:.1},"-=0.5"),()=>T.kill()},[]),b.useEffect(()=>{const T={x:0,y:0},j=M=>{T.x=(M.clientX/window.innerWidth-.5)*2,T.y=(M.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",j);const N=P.context(()=>{const M=window.innerHeight;B.create({trigger:t.current,start:"top top",end:"bottom top",scrub:1.3,onUpdate:R=>{const V=R.progress,U=V*M;P.set(e.current,{y:U*.55}),P.set(n.current,{y:-U*.5+T.y*28,x:T.x*55}),P.set(i.current,{y:-U*.35+T.y*18,x:T.x*-38}),P.set(o.current,{y:-U*.45+T.y*22,x:T.x*30}),P.set(s.current,{y:-U*.6+T.y*-14,x:T.x*24}),P.set(l.current,{y:-U*.7+T.y*10,x:T.x*-18}),P.set(u.current,{y:U*.22+T.y*9,x:T.x*10}),P.set(d.current,{y:U*.1,opacity:Math.max(1-V*1.7,0)})}})},t);return()=>{window.removeEventListener("mousemove",j),N.revert()}},[]);const y=T=>{var j;return(j=document.getElementById(T))==null?void 0:j.scrollIntoView({behavior:"smooth"})},_=[["Best","#fff"],["Pest","#fff"],["Control","#fff"],["in","#fff"],["Trivandrum",W]],k=[[ik,"15+","Years in Kerala"],[ok,"10K+","Pests Eliminated"],[sk,"500+","Happy Families"],[ak,"24 Hrs","Always Open"]],E=[[5,"85%"],[4,"10%"],[3,"4%"],[2,"1%"],[1,"0%"]],C=["Cockroach Treatment","Termite Control","Rodent Management","Mosquito Fogging"];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900&display=swap');

        @keyframes pulse       { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.22;transform:scale(2.3)} }
        @keyframes floatA      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-9px)} }
        @keyframes floatB      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-6px)} }
        @keyframes floatC      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-11px)} }
        @keyframes floatD      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-5px)} }
        @keyframes rotateSlow  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes rotateSlow2 { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes shimmer     { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes liveGlow    { 0%,100%{box-shadow:0 0 0 0 rgba(91,199,40,.5)} 50%{box-shadow:0 0 0 7px rgba(91,199,40,0)} }

        /* ── BASE ───────────────────────────────────────── */
        #home {
          position:relative; height:100vh; min-height:700px;
          overflow:hidden; display:flex; align-items:center;
        }
        .hero-layer { position:absolute; will-change:transform; }
        .hero-bg    { inset:0; width:100%; height:100%; overflow:hidden; }
        .hero-bg img{ width:100%; height:100%; object-fit:cover; transform:scale(1.13); will-change:transform; }
        .hero-orb   { position:absolute; border-radius:50%; pointer-events:none; will-change:transform; }
        .hero-ring  { position:absolute; border-radius:50%; pointer-events:none; will-change:transform; }

        .hero-txt { position:relative; z-index:8; will-change:transform,opacity; }

        .hero-badge {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(91,199,40,.13); border:1px solid rgba(91,199,40,.45);
          border-radius:50px; padding:8px 22px; backdrop-filter:blur(14px);
        }
        .hero-pulse-dot { width:7px;height:7px;border-radius:50%;background:#fff;animation:pulse 2s infinite; }

        .hero-h1 { font-family:'Lato',sans-serif;font-weight:900;line-height:.9;perspective:600px; }
        .hw      { display:inline-block;margin-right:.2em;transform-style:preserve-3d; }
        .hw-shimmer {
          background:linear-gradient(90deg,#fff 0%,#fff 28%,${W} 48%,#fff 68%,#fff 100%);
          background-size:200% auto;
          -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
          animation:shimmer 4.5s linear infinite;animation-delay:2.5s;
        }

        /* ── CTAs ───────────────────────────────────────── */
        .btn-primary-og {
          background:${W};color:#fff;border:none;border-radius:50px;
          font-family:'Lato',sans-serif;font-size:15px;font-weight:900;
          padding:17px 44px;letter-spacing:.3px;cursor:pointer;
          box-shadow:0 12px 40px rgba(91,199,40,.35);transition:all .35s;
        }
        .btn-primary-og:hover { background:${ah};transform:translateY(-4px) scale(1.04);box-shadow:0 22px 54px rgba(91,199,40,.5); }
        .btn-outline-og {
          background:rgba(255,255,255,.08);color:#fff;cursor:pointer;
          border:1.5px solid rgba(255,255,255,.28);border-radius:50px;
          font-family:'Lato',sans-serif;font-size:15px;font-weight:700;
          padding:17px 44px;backdrop-filter:blur(10px);transition:all .35s;
        }
        .btn-outline-og:hover { background:rgba(255,255,255,.18);border-color:#fff; }

        /* ── AVAILABILITY TAG ───────────────────────────── */
        .kerala-avail {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2);
          border-radius:6px; padding:7px 16px;
          font-family:'Lato',sans-serif; font-size:11px; font-weight:700;
          color:rgba(255,255,255,.82); letter-spacing:.8px; text-transform:uppercase;
          backdrop-filter:blur(8px);
        }
        .kerala-dot { width:6px;height:6px;border-radius:50%;background:${W};animation:pulse 2s infinite; }

        /* ── DATA CARDS ─────────────────────────────────── */
        .hc-panel {
          display:grid; gap:10px;
          width:465px; grid-template-columns:1fr 1fr;
        }
        .hc-card {
          background:rgba(6,16,44,.74);
          backdrop-filter:blur(24px) saturate(160%);
          border:1px solid rgba(255,255,255,.1);
          border-radius:18px; overflow:hidden; position:relative;
        }
        .hc-card::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(138deg,rgba(255,255,255,.07) 0%,transparent 58%);
          pointer-events:none;
        }

        /* Card 1 — Live Protection */
        .hc-live { padding:18px 20px; }
        .hc-live-top { display:flex;justify-content:space-between;align-items:center;margin-bottom:16px; }
        .hc-live-badge {
          display:inline-flex;align-items:center;gap:6px;
          background:rgba(91,199,40,.16);border:1px solid rgba(91,199,40,.38);
          border-radius:50px;padding:5px 12px;
          font-family:'Lato',sans-serif;font-size:10px;font-weight:900;
          color:${W};letter-spacing:1.1px;text-transform:uppercase;
          animation:liveGlow 2.5s ease-in-out infinite;
        }
        .hc-live-dot  { width:6px;height:6px;border-radius:50%;background:${W};animation:pulse 1.8s infinite; }
        .hc-stat-row  { display:flex;align-items:flex-end;gap:14px;margin-bottom:14px; }
        .hc-big-num   { font-family:'Lato',sans-serif;font-size:46px;font-weight:900;color:#fff;line-height:1;letter-spacing:-2px; }
        .hc-big-num em{ font-size:22px;color:${W};font-style:normal; }
        .hc-num-label { font-family:'Lato',sans-serif;font-size:11px;color:rgba(255,255,255,.45);line-height:1.5;padding-bottom:4px; }
        .hc-services  { display:flex;flex-direction:column;gap:6px; }
        .hc-svc       { display:flex;align-items:center;gap:8px;font-family:'Lato',sans-serif;font-size:11px;color:rgba(255,255,255,.68);font-weight:700; }
        .hc-svc svg   { color:${W};flex-shrink:0; }

        /* Card 2 — Rating */
        .hc-rating { padding:15px 18px; }
        .hc-stars  { display:flex;gap:2px;margin-bottom:6px; }
        .hc-rnum   { font-family:'Lato',sans-serif;font-size:30px;font-weight:900;color:#fff;line-height:1;letter-spacing:-1px; }
        .hc-rsub   { font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.4);margin-top:3px; }
        .hc-bars   { margin-top:12px;display:flex;flex-direction:column;gap:5px; }
        .hc-bar-row{ display:flex;align-items:center;gap:7px; }
        .hc-bar-lbl{ font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.38);width:10px;text-align:right; }
        .hc-bar-track{ flex:1;height:4px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden; }
        .hc-bar-fill { height:100%;border-radius:2px;background:${W}; }
        .hc-bar-pct  { font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.28);width:26px; }

        /* Card 4 — Cert */
        .hc-cert { padding:13px 17px;display:flex;align-items:center;gap:13px; }
        .hc-cert-icon {
          width:44px;height:44px;border-radius:11px;flex-shrink:0;
          background:linear-gradient(135deg,rgba(91,199,40,.25),rgba(91,199,40,.08));
          border:1px solid rgba(91,199,40,.32);
          display:flex;align-items:center;justify-content:center;font-size:20px;
        }
        .hc-cert-name{ font-family:'Lato',sans-serif;font-size:13px;font-weight:900;color:#fff; }
        .hc-cert-sub { font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.4);margin-top:3px;line-height:1.4; }

        /* ── STATS BAR ──────────────────────────────────── */
        .stats-bar {
          position:absolute; bottom:0; left:0; right:0; z-index:10;
          background:rgba(255,255,255,.97); backdrop-filter:blur(22px);
          border-top:3px solid ${W};
        }
        .stat-item { border-right:1px solid rgba(27,58,107,.07); transition:background .3s; }
        .stat-item:last-child { border-right:none; }
        .stat-item:hover { background:rgba(91,199,40,.05); }

        /* ── DECORATIVE ─────────────────────────────────── */
        .ring-spin  { animation:rotateSlow  34s linear infinite; }
        .ring-spin2 { animation:rotateSlow2 24s linear infinite; }
        .fa { animation:floatA 4.8s ease-in-out infinite; }
        .fb { animation:floatB 6.4s ease-in-out infinite .7s; }
        .fc { animation:floatC 5.4s ease-in-out infinite 1.3s; }
        .fd { animation:floatD 7.2s ease-in-out infinite .4s; margin-bottom:12px; }

        /* ══════════════════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════════════════ */
@media(min-width:1200px) and (max-width:1600px){
.hero-h1{
font-size: clamp(36px, 6.8vw, 78px) !important;
}
.hero-sub-p{
margin-bottom: 17px !important;
}
}
        /* ── Laptop  861–1100px ─────────────────────────── */
        @media(max-width:1100px){
          .hero-cards-panel { right:1%!important; }
          .hc-panel         { width:360px!important; }
          .hc-big-num       { font-size:34px!important; }
          .hc-big-num em    { font-size:18px!important; }
          .hc-rnum          { font-size:22px!important; }
          .hc-live          { padding:14px 14px!important; }
          .hc-rating        { padding:12px 14px!important; }
          .hc-cert          { padding:10px 12px!important; }
          .hc-cert-icon     { width:36px!important; height:36px!important; font-size:16px!important; }
          .hc-cert-name     { font-size:11px!important; }
          .hc-cert-sub      { font-size:9px!important; }
        }

        /* ── Tablet  601–860px ──────────────────────────── */
        @media(max-width:860px){
          #hero              { height:auto; min-height:100svh; align-items:flex-start; padding-top:130px; padding-bottom:100px; }
          .hero-txt          { padding:0 40px!important; max-width:100%!important; }
          .hero-h1           { letter-spacing:-1px!important; }
          .hero-cards-panel  { display:none!important; }
          .stats-bar         { display:none;}
          .greenStrip {display:none;}
        }

        /* ── Mobile  ≤600px ─────────────────────────────── */
        @media(max-width:600px){
          #hero              { padding-top:110px; padding-bottom:0; }
          .hero-txt          { padding:0 20px!important; }

          .hero-badge        { padding:6px 14px; }
          .hero-badge span:last-child { font-size:9px!important; letter-spacing:1px!important; }

          .kerala-avail      { font-size:9px; padding:6px 12px; letter-spacing:.5px; }

          .hero-h1           { letter-spacing:-1px!important; line-height:1!important; }
          .hw                { margin-right:.15em!important; }

          .hero-sub-p        { font-size:13px!important; line-height:1.75!important; margin-bottom:28px!important; }

          .hero-cta-wrap     { flex-direction:column!important; gap:12px!important; }
          .btn-primary-og,
          .btn-outline-og    { width:100%; text-align:center; padding:15px 24px; font-size:14px; }

          .hero-cards-panel  { display:none!important; }

          /* rings & orbs — tone down on mobile */
          .hero-ring         { display:none!important; }

          .stats-bar         { display:none; }
          .greenStrip {display:none;}
        }

        /* ── Stats 2-col on small mobile ────────────────── */
        @media(max-width:480px){
          .stat-item         { border-right:1px solid rgba(27,58,107,.07)!important; }
          .stat-item:nth-child(even){ border-right:none!important; }
          .stat-item         { border-bottom:1px solid rgba(27,58,107,.06); }
        }
          .hc-clickable {
  cursor: pointer;
  transition: transform .25s, border-color .25s, box-shadow .25s;
}
.hc-clickable:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(91,199,40,.45) !important;
  box-shadow: 0 12px 32px rgba(91,199,40,.18);
}
.hc-clickable:hover .hc-rsub {
  color: rgba(91,199,40,.8) !important;
}
  .og-review-tooltip .tooltip-inner {
  background: rgba(10, 20, 50, 0.95) !important;
  border: 1px solid rgba(91,199,40,.45) !important;
  color: #fff !important;
  font-family: 'Lato', sans-serif !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  letter-spacing: .3px !important;
  padding: 7px 14px !important;
  border-radius: 8px !important;
  backdrop-filter: blur(10px) !important;
}
.og-review-tooltip .tooltip-arrow::before {
  border-top-color: rgba(91,199,40,.45) !important;
}
      `}),c.jsxs("section",{id:"home",ref:t,children:[c.jsx("div",{ref:e,className:"hero-layer hero-bg",style:{zIndex:0},children:c.jsx("img",{src:nk,alt:"Pest control service in Trivandrum by OnGuard technicians"})}),c.jsx("h2",{style:{display:"none"},children:"Pest Control Services in Trivandrum Kerala – Termite, Mosquito, Rodent Control"}),c.jsx("div",{className:"hero-layer",style:{inset:0,zIndex:2,pointerEvents:"none",background:"radial-gradient(ellipse 65% 85% at 16% 58%,rgba(0,70,40,.3) 0%,transparent 62%)"}}),c.jsx("div",{ref:r,className:"hero-layer",style:{inset:0,zIndex:3,background:"linear-gradient(108deg,rgba(4,10,28,.97) 0%,rgba(8,32,68,.78) 50%,rgba(4,10,28,.16) 100%)"}}),c.jsx("div",{className:"hero-layer",style:{inset:0,zIndex:4,opacity:.025,pointerEvents:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"200px"}}),c.jsx("div",{className:"hero-layer greenStrip",style:{bottom:82,left:0,width:"40%",height:"3px",zIndex:7,pointerEvents:"none",background:`linear-gradient(90deg,${W} 0%,rgba(91,199,40,0) 100%)`}}),c.jsx("div",{ref:n,className:"hero-orb",style:{top:"5%",right:"3%",width:520,height:520,zIndex:5,background:"radial-gradient(circle,rgba(91,199,40,.13) 0%,transparent 65%)"}}),c.jsx("div",{ref:i,className:"hero-orb",style:{bottom:"15%",left:"2%",width:330,height:330,zIndex:5,background:"radial-gradient(circle,rgba(0,90,50,.2) 0%,transparent 65%)"}}),c.jsx("div",{ref:o,className:"hero-orb",style:{top:"42%",right:"32%",width:210,height:210,zIndex:5,background:"radial-gradient(circle,rgba(27,58,107,.18) 0%,transparent 65%)"}}),c.jsx("div",{ref:s,className:"hero-ring ring-spin",style:{top:"11%",right:"15%",width:300,height:300,zIndex:5,border:"1px dashed rgba(91,199,40,.2)"}}),c.jsx("div",{ref:a,className:"hero-ring ring-spin2",style:{top:"9%",right:"13%",width:355,height:355,zIndex:5,border:"0.5px solid rgba(255,255,255,.06)"}}),c.jsx("div",{ref:l,className:"hero-ring",style:{bottom:"23%",right:"7%",width:80,height:80,zIndex:5,border:"1.5px solid rgba(91,199,40,.22)"}}),c.jsxs("div",{ref:u,className:"hero-layer hero-cards-panel",style:{position:"absolute",right:"4%",top:"50%",transform:"translateY(-50%)",zIndex:9},children:[c.jsx("div",{children:c.jsxs("div",{ref:T=>x.current[3]=T,className:"hc-card hc-cert fd",children:[c.jsx("div",{className:"hc-cert-icon",children:c.jsx("img",{src:lk,alt:"medal",style:{height:28,width:28}})}),c.jsxs("div",{children:[c.jsx("div",{className:"hc-cert-name",children:"Govt. Certified"}),c.jsxs("div",{className:"hc-cert-sub",children:["Kerala PCO Licence · ISO 9001:2015",c.jsx("br",{}),"Eco-friendly & Child-safe Treatments"]})]})]})}),c.jsxs("div",{className:"hc-panel",children:[c.jsxs("div",{ref:T=>x.current[0]=T,className:"hc-card hc-live fa",children:[c.jsxs("div",{className:"hc-live-top",children:[c.jsxs("div",{className:"hc-live-badge",children:[c.jsx("span",{className:"hc-live-dot"})," Live Protection"]}),c.jsx("span",{style:{color:W},children:c.jsx(ck,{})})]}),c.jsxs("div",{className:"hc-stat-row",children:[c.jsxs("div",{className:"hc-big-num",children:["98",c.jsx("em",{children:"%"})]}),c.jsxs("div",{className:"hc-num-label",children:["Elimination",c.jsx("br",{}),"Success Rate"]})]}),c.jsx("div",{className:"hc-services",children:C.map(T=>c.jsxs("div",{className:"hc-svc",children:[c.jsx(dk,{})," ",T]},T))})]}),c.jsx("a",{href:"https://share.google/x6J8uG4oOYX1t0p7j",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},"data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"og-review-tooltip",title:"Click to view our Google Reviews ↗",children:c.jsxs("div",{ref:T=>x.current[1]=T,className:"hc-card hc-rating fb hc-clickable",children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("div",{className:"hc-stars",children:[1,2,3,4,5].map(T=>c.jsx(uk,{},T))}),c.jsx("div",{className:"hc-rnum",children:"5.0"}),c.jsx("div",{className:"hc-rsub",children:"388+ reviews on Google ↗"})]}),c.jsxs("div",{style:{background:"rgba(91,199,40,.15)",borderRadius:10,border:"1px solid rgba(91,199,40,.3)",padding:"8px 12px",textAlign:"center",flexShrink:0},children:[c.jsx("div",{style:{fontFamily:"'Lato',sans-serif",fontSize:18,fontWeight:900,color:W},children:"397"}),c.jsx("div",{style:{fontFamily:"'Lato',sans-serif",fontSize:9,color:"rgba(255,255,255,.4)",marginTop:2},children:"Reviews"})]})]}),c.jsx("div",{className:"hc-bars",children:E.map(([T,j])=>c.jsxs("div",{className:"hc-bar-row",children:[c.jsx("div",{className:"hc-bar-lbl",children:T}),c.jsx("div",{className:"hc-bar-track",children:c.jsx("div",{className:"hc-bar-fill",style:{width:j}})}),c.jsx("div",{className:"hc-bar-pct",children:j})]},T))})]})})]})]}),c.jsxs("div",{ref:d,className:"hero-txt",style:{padding:"0 68px",maxWidth:800,zIndex:8,position:"relative"},children:[c.jsxs("div",{ref:f,className:"hero-badge mb-3",children:[c.jsx("span",{className:"hero-pulse-dot"}),c.jsx("span",{style:{color:"rgba(255,255,255,.9)",fontFamily:"'Lato',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.8},children:"KERALA'S #1 PEST CONTROL · EST. 2010"})]}),c.jsxs("div",{ref:m,className:"kerala-avail mb-4",children:[c.jsx("span",{className:"kerala-dot"}),"All over Kerala & South Tamil Nadu — Open 24 Hours"]}),c.jsx("h1",{className:"hero-h1 mb-4",style:{fontSize:"clamp(36px,6.8vw,96px)",letterSpacing:-2,color:"#fff"},children:_.map(([T,j],N)=>c.jsx("span",{ref:M=>p.current[N]=M,className:`hw${N===0?" hw-shimmer":""}`,style:N!==0?{color:j}:{},children:T},N))}),c.jsx("p",{ref:h,className:"hero-sub-p",style:{color:"rgba(255,255,255,.56)",fontFamily:"'Lato',sans-serif",fontSize:"clamp(13px,1.6vw,17px)",lineHeight:1.95,maxWidth:490,fontWeight:300,marginBottom:44},children:"Looking for reliable pest control in Trivandrum? OnGuard Pest Controls offers expert termite, mosquito, cockroach, and rodent control services with eco-friendly and safe treatments across Kerala."}),c.jsxs("div",{ref:g,className:"hero-cta-wrap d-flex flex-wrap gap-3 align-items-center",children:[c.jsx("button",{className:"btn-primary-og",onClick:()=>y("contact"),children:"Get Free Inspection"}),c.jsx("button",{className:"btn-outline-og",onClick:()=>y("services"),children:"View Services →"})]})]}),c.jsx("div",{ref:w,className:"stats-bar",children:c.jsx("div",{className:"row g-0",children:k.map(([T,j,N],M)=>c.jsxs("div",{ref:R=>v.current[M]=R,className:"col-6 col-sm-3 stat-item text-center py-3",children:[c.jsx("div",{children:c.jsx("img",{src:T,alt:"",style:{width:26,height:26,objectFit:"contain"}})}),c.jsx("div",{style:{fontFamily:"'Lato',sans-serif",fontSize:"clamp(18px,2.4vw,28px)",fontWeight:900,color:xr,lineHeight:1},children:j}),c.jsx("div",{style:{fontFamily:"'Lato',sans-serif",fontSize:11,color:_i},children:N})]},M))})})]})]})}const pk={"rodent-control":{heroImg:lh,slug:"rodent-control",title:"Rodent Control Services",icon:"🐭",tagline:"Complete elimination of rats & mice using safe, proven methods",heroColor:"#1a2f50",intro:"Rodent infestations are one of the most common and challenging pest problems faced by homeowners and businesses. Whether rats in a warehouse, mice in a kitchen, or rodents nesting in false ceilings — their presence leads to serious health risks, structural damage, and contamination. OnGuard Pest Controls eliminates infestations effectively through a strategic, scientific approach.",whyImportant:[{title:"Health Hazards",desc:"Rodents carry diseases like Leptospirosis, Salmonella, and Hantavirus, spread through urine, droppings, saliva, and contaminated food."},{title:"Property Damage",desc:"Rodents gnaw on electrical wires (fire hazard), wooden structures, plastic pipes — causing costly structural damage."},{title:"Food Contamination",desc:"In homes and commercial kitchens, rodents contaminate food supplies, leading to health risks and financial losses."},{title:"Reputation Damage",desc:"For restaurants, hotels, and offices, a rodent sighting can severely damage reputation and customer trust."}],signs:["Droppings near food storage areas","Gnaw marks on furniture, wires, or packaging","Scratching noises in ceilings or walls","Nests made of paper, fabric, or insulation","Grease marks along walls and entry points"],methods:[{name:"Baiting System",desc:"Rodenticide baits placed in secure bait stations to attract and eliminate rodents safely — designed to prevent access by children and pets."},{name:"Trapping Methods",desc:"Snap traps, glue boards for monitoring, and live traps depending on the situation and severity."},{name:"Proofing & Exclusion",desc:"Sealing holes and cracks, installing mesh on vents and drains, blocking entry points around pipes and cables to prevent re-entry."},{name:"Advanced Monitoring",desc:"Rodent monitoring devices, scheduled inspections, and digital tracking systems for commercial and industrial clients."},{name:"Sanitation Guidance",desc:"Clients advised on proper waste management, safe food storage, and eliminating clutter to reduce rodent attraction."}],sectors:["Residential homes & apartments","Restaurants, hotels & offices","Factories & warehouses","Hospitals, schools & institutions"],preventiveTips:["Keep surroundings clean","Store food in airtight containers","Dispose of garbage regularly","Seal cracks and gaps in walls","Avoid clutter"]},"cockroach-control":{heroImg:ch,slug:"cockroach-control",title:"Cockroach Control Services",icon:"🪳",tagline:"Odorless, eco-friendly cockroach elimination for homes & offices",heroColor:"#1a2f18",intro:"Cockroaches are among the most resilient and troublesome pests found in homes, offices, restaurants, and industrial facilities. Their ability to survive harsh conditions, reproduce rapidly, and spread harmful pathogens makes them a major health concern. In Kerala, where humidity is high, cockroach infestations are particularly common. OnGuard offers specialized control services with scientifically proven methods.",whyImportant:[{title:"Health Risks",desc:"Cockroaches carry bacteria spreading food poisoning, gastroenteritis, and triggering allergies and asthma. They contaminate food and surfaces from drains and waste areas."},{title:"Rapid Infestation",desc:"A small problem can turn into a full-blown infestation within weeks if not addressed promptly."},{title:"Unhygienic Environment",desc:"Their presence creates an unsanitary environment, especially in kitchens and food preparation areas."},{title:"Business Impact",desc:"For restaurants, hotels, and food industries: failed health inspections, loss of customers, and damage to brand reputation."}],signs:["Live cockroaches sighted (especially at night)","Droppings resembling black pepper or coffee grounds","Unpleasant, musty odor","Egg cases (oothecae) in hidden areas","Smear marks on walls and surfaces"],methods:[{name:"Gel Bait Treatment",desc:"Applied in cracks and hiding spots — cockroaches consume bait and carry it back to nests, eliminating the entire colony. Odourless, no need to vacate premises."},{name:"Spray Treatment",desc:"Immediate knockdown for severe infestations and open areas, covering large areas and targeting visible and hidden cockroaches."},{name:"Dust Treatment",desc:"Insecticidal dust applied in electrical outlets, wall voids, and hard-to-reach areas for long-lasting control in hidden spaces."},{name:"Trap Monitoring",desc:"Sticky traps used to monitor cockroach activity, identify infestation levels, and evaluate treatment effectiveness."},{name:"Drain Treatment",desc:"Specialized drain cleaning treatments and anti-cockroach solutions for pipelines, targeting breeding sites."}],sectors:["Residential homes & apartments","Offices & retail spaces","Restaurants & food industry","Factories & warehouses"],preventiveTips:["Keep kitchens clean","Store food in sealed containers","Fix leaks and reduce moisture","Dispose of garbage regularly","Seal cracks and crevices"]},"bed-bug-control":{heroImg:uh,slug:"bed-bug-control",title:"Bed Bug Control Services",icon:"🛏️",tagline:"Advanced heat & chemical treatment for complete bed bug eradication",heroColor:"#2a1a3f",intro:"Bed bugs are among the most frustrating and persistent pests that invade homes, hotels, hostels, and commercial spaces. Their ability to hide in tiny cracks, reproduce rapidly, and feed on human blood makes them extremely difficult to eliminate. OnGuard Pest Controls offers specialized services to completely eradicate infestations and restore comfort, hygiene, and peace of mind.",whyImportant:[{title:"Health & Skin Reactions",desc:"Bed bug bites cause itching, irritation, red swollen marks, and allergic reactions in some individuals."},{title:"Sleep Disturbance",desc:"Bed bugs feed at night, causing insomnia, anxiety, stress, and reduced quality of life."},{title:"Rapid Infestation Growth",desc:"A small infestation quickly becomes severe due to their fast reproduction rate."},{title:"Business Impact",desc:"In hotels and rental properties, infestations can damage reputation, lead to negative reviews, and result in financial losses."}],signs:["Small blood stains on bedsheets","Dark spots (fecal matter) on mattresses and walls","Shed skins and eggshells","Musty odor in heavily infested areas","Bite marks in clusters or lines on the skin"],methods:[{name:"Chemical Treatment",desc:"Specialized insecticides applied to mattresses, furniture, and cracks — killing bed bugs instantly and providing residual protection."},{name:"Heat Treatment",desc:"Raising temperature of infested areas to lethal levels. Chemical-free, kills all life stages, highly effective for severe infestations."},{name:"Steam Treatment",desc:"High-temperature steam applied to mattresses, upholstery, and curtains to kill bed bugs hidden deep within fabrics."},{name:"Vacuuming & Cleaning",desc:"Pre-treatment preparation: vacuuming infested areas, removing visible bugs and eggs, reducing infestation load."},{name:"Crack & Crevice Treatment",desc:"Special attention to wall joints, furniture gaps, and electrical outlets — common hiding spots."}],sectors:["Residential homes & apartments","Hotels & hospitality","Hostels & PG accommodations","Offices & commercial spaces"],preventiveTips:["Inspect hotel rooms while traveling","Avoid used furniture without checking","Wash clothes after travel","Regularly clean and inspect sleeping areas"]},"mosquito-control":{heroImg:dh,slug:"mosquito-control",title:"Mosquito Control Services",icon:"🦟",tagline:"Fogging & larval treatment to prevent mosquito breeding across Kerala",heroColor:"#0d2918",intro:"Mosquitoes are among the most dangerous disease carriers in the world. In tropical regions like Kerala, where humidity and rainfall create ideal breeding conditions, mosquito infestations are a constant concern. OnGuard Pest Controls offers professional services to reduce mosquito populations, prevent breeding, and protect families and communities from harmful diseases including dengue, malaria, chikungunya, and Zika.",whyImportant:[{title:"Disease Prevention",desc:"Mosquitoes are vectors of dengue fever, malaria, chikungunya, and Zika virus. Effective control significantly reduces risk."},{title:"Improved Quality of Life",desc:"Mosquito bites cause itching, allergic reactions, and disturbed sleep affecting daily wellbeing."},{title:"Public Health Safety",desc:"Controlling mosquito populations protects entire communities and reduces burden on healthcare systems."},{title:"Business Impact",desc:"For hotels, resorts, and outdoor businesses, mosquito infestations negatively impact customer experience and reputation."}],signs:["Frequent mosquito bites indoors or outdoors","Presence of stagnant water around the property","Mosquito larvae (wrigglers) in water","Increased mosquito activity during dawn and dusk"],methods:[{name:"Fogging Treatment",desc:"Thermal fogging and ULV (Ultra Low Volume) fogging for immediate reduction of adult mosquitoes across large outdoor areas."},{name:"Larvicidal Treatment",desc:"Targets mosquito larvae in stagnant water, drains, ponds and tanks — prevents mosquitoes from reaching adulthood."},{name:"Residual Spray",desc:"Insecticides applied to walls, vegetation, and dark corners where mosquitoes rest, providing ongoing protection."},{name:"Source Reduction",desc:"Eliminating breeding sites — removing stagnant water, cleaning drains and gutters, covering water storage containers."},{name:"Repellent Treatments",desc:"Special treatments applied to outdoor areas to repel mosquitoes from gardens and open spaces."}],sectors:["Residential homes & apartments","Hotels, resorts & outdoor businesses","Factories, schools & hospitals","Offices & commercial spaces"],preventiveTips:["Avoid stagnant water around property","Clean surroundings regularly","Use mosquito nets and screens","Maintain drainage systems","Trim vegetation near buildings"]},"housefly-control":{heroImg:fh,slug:"housefly-control",title:"Housefly Control Services",icon:"🪰",tagline:"Effective fly control solutions for homes & commercial spaces",heroColor:"#2a1f00",intro:"Houseflies are among the most common and unhygienic pests found in residential, commercial, and industrial environments. Known carriers of Salmonella, E. coli, and cholera-causing bacteria, houseflies transfer pathogens from waste to food and surfaces. A single pair of flies can multiply into thousands within a short time. OnGuard Pest Controls offers professional control services to eliminate infestations and maintain long-term cleanliness.",whyImportant:[{title:"Disease Transmission",desc:"Houseflies carry Salmonella, E. coli, and cholera-causing bacteria — transferring these pathogens from waste to food and surfaces."},{title:"Food Contamination",desc:"Flies contaminate food by landing on it after contact with waste, regurgitating digestive fluids, and leaving behind fecal matter."},{title:"Hygiene Issues",desc:"Their presence indicates poor sanitation and leads to unhealthy living conditions."},{title:"Business Impact",desc:"For restaurants, hotels, and food industries: customer complaints, regulatory violations, and damage to brand reputation."}],signs:["Frequent fly sightings indoors","Presence of maggots (larvae) in waste areas","Fly buzzing sounds","Dark spots (fly droppings) on walls and surfaces"],methods:[{name:"Residual Spray Treatment",desc:"Insecticides applied to walls, ceilings, and garbage areas where flies rest — providing long-lasting reduction in fly population."},{name:"Fly Baiting",desc:"Special baits used to attract and kill flies with targeted approach and quick results."},{name:"UV Fly Catcher Machines",desc:"Electronic devices installed in strategic locations — attract flies using UV light, trap using glue boards or electric grids. Ideal for restaurants and food units."},{name:"Larvicidal Treatment",desc:"Targets fly larvae in garbage bins, drains, and organic waste areas — preventing future generations of flies."},{name:"Sanitation & Waste Management",desc:"Proper waste disposal, cleaning of drains and bins, eliminating organic buildup as a key part of fly control."}],sectors:["Residential homes & apartments","Offices & retail spaces","Restaurants & food industry","Factories & warehouses"],preventiveTips:["Dispose of waste regularly","Keep garbage bins covered","Clean food spills immediately","Maintain proper drainage","Install window screens"]},"termite-control":{heroImg:ph,slug:"termite-control",title:"Termite Control Services",icon:"🐜",tagline:"Long-lasting anti-termite protection for buildings & furniture",heroColor:"#3f1a00",intro:"Termites are among the most destructive pests affecting homes, commercial buildings, and industrial structures. Often called 'silent destroyers,' termites cause extensive structural damage without immediate visible signs. By the time an infestation is detected, significant harm may already be done. In Kerala, subterranean termites are the most common due to high humidity and soil conditions. OnGuard offers advanced detection, elimination, and long-term protection.",whyImportant:[{title:"Structural Damage",desc:"Termites feed on doors, windows, furniture, wooden beams and flooring — weakening the structural integrity of buildings over time."},{title:"Financial Loss",desc:"Repairing termite damage can be extremely expensive, especially if the infestation goes unnoticed for long."},{title:"Hidden Infestation",desc:"Termites remain hidden inside walls, floors, and furniture, making early detection extremely difficult."},{title:"Property Value Impact",desc:"Termite damage can significantly reduce the market value of a property."}],signs:["Mud tubes on walls or foundations","Hollow-sounding wood","Discarded wings near windows or doors","Cracked or bubbling paint","Presence of termite droppings (frass)"],methods:[{name:"Pre-Construction Treatment",desc:"Applied during building construction — soil treatment before foundation, chemical barrier under slabs, treatment around pipes. Prevents infestation from the start."},{name:"Post-Construction Treatment",desc:"For existing buildings — drilling holes in floors and walls, injecting termiticides into soil, creating a chemical barrier."},{name:"Soil Treatment",desc:"Targets subterranean termites in the soil, forming a protective barrier that prevents termite entry with long-lasting effect."},{name:"Wood Treatment",desc:"Direct protective chemical application on wood for both preventive and curative treatment of wooden structures."},{name:"Baiting Systems",desc:"Modern baiting — termites consume bait, carry it to the colony, and eliminate the entire colony over time."}],sectors:["Residential homes & apartments","Offices & commercial buildings","Factories & warehouses","Schools, hospitals & institutions"],preventiveTips:["Avoid wood-to-soil contact","Fix leaks and reduce moisture","Store wood away from buildings","Conduct regular inspections"]},"wood-borer-control":{heroImg:hh,slug:"wood-borer-control",title:"Wood Borer Control Services",icon:"🪵",tagline:"Specialized treatment to protect wooden furniture from borers",heroColor:"#2a1500",intro:"Wood borers are one of the most damaging yet often overlooked pests that attack wooden structures, furniture, and fixtures. Unlike termites, wood borers silently destroy wood from the inside — making early detection extremely difficult. By the time visible signs appear, damage is often extensive. OnGuard provides professional wood borer control services to eliminate infestations, restore integrity of wooden items, and prevent future damage.",whyImportant:[{title:"Structural Damage",desc:"Wood borers hollow out furniture, wooden beams, doors and frames from the inside, compromising their strength."},{title:"Expensive Repairs",desc:"Replacing damaged wood can be costly, especially if the infestation spreads to multiple items."},{title:"Spread of Infestation",desc:"If not treated, wood borers can spread to other wooden items throughout the property."},{title:"Aesthetic Damage",desc:"Visible holes and powder residue can ruin the appearance of furniture and interiors."}],signs:["Tiny round exit holes in wood","Fine powder (sawdust-like frass) near wooden items","Weak or brittle wood","Presence of beetles near wooden surfaces"],methods:[{name:"Injection Treatment",desc:"Specialized insecticides injected directly into exit holes and infested wooden areas — targeting larvae hidden deep inside wood."},{name:"Surface Spray Treatment",desc:"Chemical solutions applied to wooden surfaces to kill active insects and prevent further infestation."},{name:"Wood Preservation Treatment",desc:"Protective chemicals applied to strengthen wood and prevent future attacks."},{name:"Fumigation",desc:"For heavy infestations — fumigation eliminates all life stages and penetrates deep into wood."}],sectors:["Residential homes & furniture","Offices & showrooms","Factories & warehouses","Antique & heritage protection"],preventiveTips:["Use treated wood for new installations","Apply protective coatings","Keep wooden items dry","Avoid moisture buildup","Inspect furniture regularly"]},"honey-bee-removal":{heroImg:gh,slug:"honey-bee-removal",title:"Honey Bee Removal Service",icon:"🐝",tagline:"Safe and eco-friendly relocation of honey bee colonies",heroColor:"#2a1f00",intro:"Honey bees play a vital role in the ecosystem as pollinators. However, when bee colonies establish hives in residential or commercial spaces, they pose safety risks and inconvenience. Managing such situations requires a careful, humane, and professional approach. OnGuard Pest Controls offers specialized honey bee removal services that prioritize safety, environmental responsibility, and effective relocation of bee colonies wherever possible.",whyImportant:[{title:"Safety Risks",desc:"Bee stings can cause painful reactions, allergic responses, and severe conditions like anaphylaxis in sensitive individuals."},{title:"Structural Concerns",desc:"Hives built inside walls or roofs can weaken structures, cause honey leakage, and attract other pests."},{title:"Disturbance & Fear",desc:"Large bee colonies create anxiety and discomfort for residents or employees."},{title:"Business Impact",desc:"For hotels and restaurants, bee infestations can affect customer experience, lead to complaints, and impact reputation."}],signs:["Visible bee movement in and out of a specific area","Buzzing sounds inside walls or ceilings","Presence of honeycomb structures","Sweet or sticky substances (honey leakage)"],methods:[{name:"Live Hive Removal",desc:"Carefully opening the affected area, extracting the hive and bees, and relocating them to a safer environment — eco-friendly and preserving bee population."},{name:"Smoke Application",desc:"Smoke used to calm bees, reduce aggression, and facilitate safe removal."},{name:"Protective Equipment",desc:"Technicians use bee suits, specialized tools, and safe handling techniques throughout the process."},{name:"Structural Access & Repair",desc:"For hives inside walls — controlled access created, hive removed, and area sealed after treatment."}],sectors:["Residential homes & gardens","Offices & retail spaces","Hotels & resorts","Factories, schools & hospitals"],preventiveTips:["Seal gaps and openings in roofs and walls","Regularly inspect roofs and walls","Avoid leaving sugary substances exposed","Maintain outdoor areas"]},"snake-control":{heroImg:mh,slug:"snake-control",title:"Snake Control Service",icon:"🐍",tagline:"Professional snake rescue and relocation services across Kerala",heroColor:"#0d2a1a",intro:"Snakes are essential to the ecosystem, helping control rodent populations and maintain ecological balance. However, when snakes enter residential areas, commercial properties, or industrial premises, they pose a serious safety concern. In Kerala, where lush greenery, water bodies, and humid conditions provide ideal habitats, snake sightings are relatively common. OnGuard provides professional snake control services focused on safe removal, relocation, and long-term prevention.",whyImportant:[{title:"Safety Risks",desc:"Snake bites can be life-threatening, especially if the snake is venomous — requiring immediate medical attention."},{title:"Fear & Anxiety",desc:"The presence of snakes causes panic and distress among residents and employees."},{title:"Risk to Pets & Children",desc:"Children and pets are particularly vulnerable to snake encounters."},{title:"Property Concerns",desc:"Snakes hiding in gardens, basements, or storage areas create ongoing safety issues."}],signs:["Shed snake skins","Snake tracks or trails","Unusual pet behavior","Rodent infestation (which attracts snakes)","Visual sightings in or around the property"],methods:[{name:"Manual Capture",desc:"Trained experts use snake hooks, snake tongs, and protective gear for safe handling and removal."},{name:"Habitat Modification",desc:"Clearing dense vegetation, removing debris and clutter, controlling rodent populations to reduce snake attraction."},{name:"Entry Point Sealing",desc:"Sealing gaps and openings prevents snakes from entering buildings in the future."},{name:"Emergency Response",desc:"Quick response team available for immediate snake sightings — safe capture and immediate relocation."},{name:"Repellent Measures",desc:"Natural and chemical repellents used to deter snakes from the property perimeter."}],sectors:["Residential homes & gardens","Offices & business spaces","Factories & warehouses","Schools, hospitals & public buildings"],preventiveTips:["Keep surroundings clean and clutter-free","Remove debris and wood piles","Control rodent populations","Install proper fencing","Maintain gardens regularly"]},"deep-cleaning":{heroImg:xh,slug:"deep-cleaning",title:"Deep Cleaning Services",icon:"🧹",tagline:"Complete deep cleaning for homes, offices & commercial areas",heroColor:"#003a4a",intro:"While routine cleaning helps manage daily dirt, it often fails to eliminate deeply embedded dust, bacteria, allergens, and hidden contaminants. OnGuard Pest Controls offers professional deep cleaning services designed to thoroughly clean, sanitize, and restore hygiene in residential, commercial, and industrial spaces — going beyond regular cleaning to target areas that are often overlooked.",whyImportant:[{title:"Health & Hygiene",desc:"Deep cleaning removes bacteria and viruses, allergens such as dust mites, and mold and mildew — reducing risk of illnesses and allergies."},{title:"Improved Indoor Air Quality",desc:"Dust and pollutants accumulate over time affecting air quality. Deep cleaning improves airflow and freshness."},{title:"Pest Prevention",desc:"Clean environments reduce the chances of pest infestations significantly."},{title:"Increased Productivity",desc:"In offices, a clean environment boosts employee morale and efficiency."}],signs:["Moving into a new home or office","After construction or renovation work","Before or after special events","Periodic maintenance every 3–6 months","After pest control treatment"],methods:[{name:"Home Deep Cleaning",desc:"Kitchen (chimney, cabinets, tiles), bathroom (tiles, fixtures, disinfecting), bedrooms, living areas, floor scrubbing and polishing."},{name:"Kitchen Deep Cleaning",desc:"Degreasing surfaces, cleaning all appliances, sanitizing food preparation areas."},{name:"Sofa & Carpet Cleaning",desc:"Removal of dust, stains, and allergens through shampooing and vacuuming."},{name:"Office Deep Cleaning",desc:"Workstations, furniture, floors, carpets, and sanitization of common areas."},{name:"Post-Construction Cleaning",desc:"Removal of dust and debris, cleaning paint marks and residues, polishing surfaces."}],sectors:["Residential homes & apartments","Offices & retail spaces","Hotels & restaurants","Factories & warehouses"],preventiveTips:["Maintain daily cleaning routines","Avoid clutter","Clean spills immediately","Schedule regular deep cleaning every 3–6 months"]},"disinfection-sanitization":{heroImg:vh,slug:"disinfection-sanitization",title:"Disinfection & Sanitization",icon:"🧴",tagline:"Advanced hygiene solutions to eliminate germs, bacteria & viruses",heroColor:"#002a3a",intro:"With the increasing awareness of infectious diseases, bacteria, and viruses, regular cleaning alone is no longer sufficient. Professional disinfection and sanitization services are essential to ensure harmful microorganisms are effectively eliminated. OnGuard Pest Controls provides advanced disinfection and sanitization services designed to create safer, healthier environments for individuals, families, and businesses.",whyImportant:[{title:"Disease Prevention",desc:"Harmful pathogens can survive on surfaces for hours or days. Disinfection helps prevent spread of viral infections, bacterial infections, and respiratory illnesses."},{title:"Improved Health & Safety",desc:"Regular sanitization reduces infection risk and promotes a healthier living and working environment."},{title:"Increased Confidence",desc:"In commercial spaces, visible hygiene practices build trust among customers and employees."},{title:"Regulatory Compliance",desc:"Businesses in healthcare and food industries must follow strict hygiene standards — professional disinfection ensures compliance."}],signs:["After infectious illness in the premises","High footfall commercial spaces","Healthcare and food industry requirements","Post-construction or renovation","Regular scheduled preventive disinfection"],methods:[{name:"ULV Fogging",desc:"Ultra Low Volume fogging disperses disinfectant as fine mist — covers large areas quickly, reaches hidden corners, effective against airborne pathogens."},{name:"Spray Disinfection",desc:"Manual spraying for high-touch surfaces, furniture, equipment, walls, and floors."},{name:"Surface Wiping",desc:"Critical surfaces cleaned using disinfectant wipes for maximum effectiveness on high-contact areas."},{name:"Electrostatic Spraying",desc:"Charged particles ensure uniform coating on all surfaces for thorough and even disinfection coverage."}],sectors:["Residential homes & apartments","Hospitals, clinics & healthcare","Schools & educational institutions","Hotels, restaurants & factories"],preventiveTips:["Maintain regular cleaning routines","Wash hands frequently","Avoid clutter","Ensure proper ventilation in all areas"]},"ant-control":{heroImg:yh,slug:"ant-control",title:"Ant Control Services",icon:"🐜",tagline:"Effective solutions to eliminate ants & prevent infestations",heroColor:"#1f2a00",intro:"Ant infestations are one of the most common pest problems faced by households, offices, and commercial establishments. In regions like Kerala, where humidity and warmth create ideal breeding conditions, ant infestations are frequent and difficult to control without professional help. OnGuard Pest Controls offers expert ant control services designed to eliminate colonies effectively and provide long-term prevention.",whyImportant:[{title:"Food Contamination",desc:"Ants invade food supplies, making them unsafe for consumption."},{title:"Structural Damage",desc:"Carpenter ants can damage wooden structures significantly."},{title:"Health Concerns",desc:"Ants carry bacteria and contaminate surfaces, posing hygiene risks."},{title:"Persistent Infestation",desc:"Ant colonies are difficult to eliminate completely without targeting the queen."}],signs:["Visible trails of ants","Presence of nests in walls or soil","Food contamination","Small piles of dirt or debris near entry points"],methods:[{name:"Gel Bait Treatment",desc:"Ants consume bait and carry it back to the colony — the entire colony including the queen is eliminated. Highly effective, targeted, minimal disruption."},{name:"Spray Treatment",desc:"Used for immediate control of visible ants across large areas."},{name:"Dust Treatment",desc:"Applied in wall voids and cracks and crevices, providing long-lasting protection in hidden spaces."},{name:"Barrier Treatment",desc:"Creates a protective barrier around the property to prevent ant entry."},{name:"Nest Treatment",desc:"Direct treatment of nests for complete elimination of the entire colony."}],sectors:["Residential homes & apartments","Offices & commercial spaces","Restaurants & food industry","Factories & warehouses"],preventiveTips:["Keep food sealed and stored properly","Maintain cleanliness throughout","Fix moisture issues and leaks","Seal cracks and gaps in walls"]}},M1={"Rodent Control Services":"rodent-control","Cockroach Control Services":"cockroach-control","Bed Bug Control Services":"bed-bug-control","Mosquito Control Services":"mosquito-control","Housefly Services":"housefly-control","Termite Control Services":"termite-control","Wood Borer Control":"wood-borer-control","Honey Bee Removal Service":"honey-bee-removal","Snake Control Service":"snake-control","Deep Cleaning Services":"deep-cleaning","Disinfection & Sanitization":"disinfection-sanitization","Ant Control Services":"ant-control"};P.registerPlugin(B);const cd=[{t:"Rodent Control Services",d:"Professional rodent control services in Trivandrum to eliminate rats and mice using safe and effective pest control methods.",img:lh,ic:"🐭",type:"icon"},{t:"Cockroach Control Services",d:"Odorless and eco-friendly cockroach elimination for homes and offices.",img:ch,ic:"🪳",type:"icon"},{t:"Bed Bug Control Services",d:"Advanced heat and chemical treatment for complete bed bug removal.",img:uh,ic:"🛏️",type:"icon"},{t:"Mosquito Control Services",d:"Expert mosquito control services in Trivandrum using fogging and larval treatment to prevent breeding and ensure a safe environment.",img:dh,ic:"🦟",type:"icon"},{t:"Housefly Services",d:"Effective control solutions for flies in homes and commercial spaces.",img:fh,ic:"🪰",type:"icon"},{t:"Termite Control Services",d:"Long-lasting anti-termite protection for buildings and furniture.",img:ph,ic:L1,type:"image"},{t:"Wood Borer Control",d:"Specialized treatment to protect wooden furniture from borers.",img:hh,ic:"🪵",type:"icon"},{t:"Honey Bee Removal Service",d:"Safe relocation of honey bees without harming the ecosystem.",img:gh,ic:"🐝",type:"icon"},{t:"Snake Control Service",d:"Professional snake rescue and relocation services across Kerala.",img:mh,ic:"🐍",type:"icon"},{t:"Deep Cleaning Services",d:"Complete deep cleaning for homes, offices, and commercial areas.",img:xh,ic:"🧼",type:"icon"},{t:"Disinfection & Sanitization",d:"Professional sanitization services to eliminate germs, bacteria, and viruses from your space.",img:vh,ic:"🧴",type:"icon"},{t:"Ant Control Services",d:"Effective solutions to eliminate ants and prevent infestations in residential and commercial areas.",img:yh,ic:"🐜",type:"icon"}],km="svc-card-styles";function hk(t,e,r){if(document.getElementById(km))return;const n=document.createElement("style");n.id=km,n.textContent=`
    /* ── Card ── */
    .svc-card {
      border-radius: 20px;
      overflow: hidden;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 5px 25px rgba(0,0,0,0.08);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      will-change: transform;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .svc-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 30px 60px rgba(0,0,0,0.14);
    }

    /* ── Image — clean, no overflow tricks ── */
    .svc-card__img-wrap {
      height: 200px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .svc-card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    .svc-card:hover .svc-card__img {
      transform: scale(1.07);
    }

    /* ── Body ── */
    .svc-card__body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .svc-card__title {
      font-size: 17px;
      font-weight: 900;
      color: ${t};
      margin-top: 8px;
      margin-bottom: 0;
      font-family: 'Lato', sans-serif;
    }
    .svc-card__desc {
      font-size: 13px;
      color: ${r};
      margin-top: 10px;
      line-height: 1.7;
      font-family: 'Lato', sans-serif;
      flex: 1;
    }
    .svc-card__btn {
      margin-top: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: ${e};
      font-weight: 700;
      font-size: 14px;
      font-family: 'Lato', sans-serif;
      transition: gap 0.25s ease;
      align-self: flex-start;
    }
    .svc-card__btn:hover { gap: 10px; }

    /* ══════════════════════════════════════
       MOBILE  — horizontal snap carousel
    ══════════════════════════════════════ */
    @media (max-width: 767px) {
      #services {
        padding: 60px 0 80px !important;
      }
      .svc-section-inner {
        padding: 0 20px;
      }
      .svc-track-wrapper {
        /* stretch past the padded inner container */
        margin-left: -20px;
        margin-right: -20px;
      }
      .svc-carousel-track {
        display: flex !important;
        grid-template-columns: unset !important;
        gap: 14px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        padding: 8px 20px 16px 20px;
      }
      .svc-carousel-track::-webkit-scrollbar { display: none; }

      .svc-carousel-item {
        flex: 0 0 78vw;
        max-width: 290px;
        scroll-snap-align: start;
      }

      /* dots */
      .svc-carousel-dots {
        display: flex;
        justify-content: center;
        gap: 7px;
        margin-top: 4px;
        padding: 0 20px;
        flex-wrap: wrap;
      }
      .svc-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #d0d0d0;
        border: none;
        padding: 0;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;
      }
      .svc-dot.active {
        background: ${e};
        transform: scale(1.4);
      }
    }

    /* ══════════════════════════════════════
       DESKTOP — responsive grid
    ══════════════════════════════════════ */
    @media (min-width: 768px) {
      .svc-carousel-track {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
      }
      .svc-carousel-item {
        width: 100%;
      }
      .svc-carousel-dots { display: none; }
    }
  `,document.head.appendChild(n)}function gk({s:t}){const e=Yn(),r=n=>{var o;n.stopPropagation();const i=M1[t.t];i?e(`/services/${i}`):(o=document.getElementById("contact"))==null||o.scrollIntoView({behavior:"smooth"})};return c.jsxs("div",{className:"svc-card",children:[c.jsx("h2",{style:{display:"none"},children:"Pest Control Services in Trivandrum Kerala including Termite, Mosquito, Cockroach, Rodent Control"}),c.jsx("div",{className:"svc-card__img-wrap",children:c.jsx("img",{src:t.img,alt:`${t.t} in Trivandrum Kerala`,loading:"eager",decoding:"async",className:"svc-card__img"})}),c.jsxs("div",{className:"svc-card__body",children:[c.jsx("div",{children:t.type==="image"?c.jsx("img",{src:t.ic,alt:`${t.t} in Trivandrum Kerala`,style:{width:28,height:28,objectFit:"contain"}}):c.jsx("span",{style:{fontSize:28},children:t.ic})}),c.jsx("h3",{className:"svc-card__title",children:t.t}),c.jsx("p",{className:"svc-card__desc",children:t.d}),c.jsxs("button",{className:"svc-card__btn",onClick:r,children:["Learn More About Service",c.jsx("span",{children:"→"})]})]})]})}function mk(){const t=b.useRef(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef([]);b.useEffect(()=>{hk(xr,W,_i)},[]),b.useEffect(()=>{const s=n.current;if(!s)return;const a=()=>{if(window.innerWidth>=768)return;const l=s.querySelectorAll(".svc-carousel-item");if(!l.length)return;const u=l[0].offsetWidth+14,d=Math.min(Math.round(s.scrollLeft/u),cd.length-1);i.current.forEach((f,p)=>{f&&f.classList.toggle("active",p===d)})};return s.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),a(),()=>{s.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]);const o=s=>{const a=n.current;if(!a)return;const l=a.querySelectorAll(".svc-carousel-item");l[s]&&l[s].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})};return b.useEffect(()=>{const s=e.current,a=r.current;if(!s||!a)return;let l,u;function d(){B.refresh(),P.set(a,{y:40,opacity:0}),l=B.create({trigger:a,start:"top 88%",once:!0,onEnter:()=>{P.to(a,{y:0,opacity:1,duration:.65,ease:"power3.out",clearProps:"transform,opacity"})}}),P.set(s.children,{y:30,autoAlpha:0}),u=B.create({trigger:s,start:"top 85%",once:!0,onEnter:()=>{P.to(s.children,{y:0,autoAlpha:1,stagger:.1,duration:.7,ease:"power3.out",clearProps:"transform,opacity,visibility"})}})}const f=document.readyState==="complete"&&document.body.style.overflow==="";let p;return f?p=setTimeout(d,80):window.addEventListener("loaderDone",d,{once:!0}),()=>{clearTimeout(p),window.removeEventListener("loaderDone",d),l==null||l.kill(),u==null||u.kill()}},[]),c.jsx("section",{ref:t,id:"services",style:{padding:"80px 60px 100px",background:$5},children:c.jsxs("div",{className:"svc-section-inner",style:{maxWidth:1400,margin:"0 auto"},children:[c.jsxs("div",{ref:e,className:"mb-5",children:[c.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[c.jsx("div",{style:{width:44,height:3,background:W,borderRadius:2}}),c.jsx("span",{style:{fontFamily:"'Lato', sans-serif",fontSize:12,fontWeight:700,letterSpacing:2.2,color:W,textTransform:"uppercase"},children:"What We Do"})]}),c.jsxs("h2",{style:{fontFamily:"'Lato', sans-serif",fontSize:"clamp(32px, 4.8vw, 66px)",fontWeight:900,color:xr,margin:0,lineHeight:1.04},children:["Complete Pest Control ",c.jsx("span",{style:{color:W},children:"Services"})]}),c.jsx("p",{style:{fontFamily:"'Lato', sans-serif",fontSize:15,color:_i,marginTop:16,maxWidth:510,lineHeight:1.8},children:"Certified solutions for every pest — latest technology, safe chemicals, expert professionals."})]}),c.jsxs("div",{ref:r,children:[c.jsx("div",{className:"svc-track-wrapper",children:c.jsx("div",{ref:n,className:"svc-carousel-track mt-2",children:cd.map((s,a)=>c.jsx("div",{className:"svc-carousel-item",children:c.jsx(gk,{s})},a))})}),c.jsx("div",{className:"svc-carousel-dots",children:cd.map((s,a)=>c.jsx("button",{ref:l=>i.current[a]=l,className:`svc-dot${a===0?" active":""}`,"aria-label":`Go to service ${a+1}`,onClick:()=>o(a)},a))})]})]})})}const xk="/assets/about1-EHpDRst-.webp",vk="/assets/about2-DYfNJZjk.jpg";P.registerPlugin(B);function yk(){const t=Yn(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef(),o=b.useRef(),s=b.useRef(),a=b.useRef(),l=b.useRef();b.useEffect(()=>{const f=[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(p=>new window.bootstrap.Tooltip(p,{trigger:"hover",html:!0}));return()=>f.forEach(p=>p.dispose())},[]),b.useEffect(()=>{const d=()=>{if(!e.current)return;const f=e.current.getBoundingClientRect(),p=window.innerHeight/2-f.top-f.height/2;r.current&&P.set(r.current,{y:p*.12}),n.current&&P.set(n.current,{y:p*-.06}),i.current&&P.set(i.current,{y:p*-.18}),o.current&&P.set(o.current,{y:p*.08}),s.current&&P.set(s.current,{y:p*.2}),a.current&&P.set(a.current,{y:p*-.14})};return window.addEventListener("scroll",d,{passive:!0}),P.fromTo(l.current.children,{x:70,opacity:0},{x:0,opacity:1,duration:.9,stagger:.09,ease:"power3.out",scrollTrigger:{trigger:e.current,start:"top 72%"}}),P.fromTo([n.current,o.current],{scale:1.07,opacity:0},{scale:1,opacity:1,duration:1.2,stagger:.18,ease:"power3.out",scrollTrigger:{trigger:e.current,start:"top 75%"}}),P.fromTo(a.current,{scale:.7,opacity:0},{scale:1,opacity:1,duration:.8,ease:"back.out(1.7)",scrollTrigger:{trigger:e.current,start:"top 65%"}}),()=>window.removeEventListener("scroll",d)},[]);const u=[{icon:"🏛️",text:"Govt. Certified & Licensed Technicians"},{icon:"🌿",text:"Eco-Friendly Treatments — Safe for Family & Pets"},{icon:"📋",text:"AMC (Annual Maintenance Contracts) Available"},{icon:"⚡",text:"Same-Day Emergency Pest Response Across Kerala"}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
.about-map-clickable {
  cursor: pointer;
  transition: background .25s, box-shadow .25s, transform .2s;
}
.about-map-clickable:hover {
     background: rgb(0 71 123) !important;
    box-shadow: 0 4px 16px rgba(91, 199, 40, .15) !important;
    transform: translateY(-2px) !important;
}
    .about-map-clickable:hover .subLocation{
    color:#fff !important;
    } 

.og-map-tooltip .tooltip-inner {
  background: rgba(10,20,50,.95) !important;
  border: 1px solid rgba(91,199,40,.45) !important;
  color: #fff !important;
  font-family: 'Lato', sans-serif !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: .3px !important;
  padding: 8px 14px !important;
  border-radius: 8px !important;
  max-width: 260px !important;
  text-align: center !important;
  backdrop-filter: blur(10px) !important;
}
.og-map-tooltip .tooltip-arrow::before {
  border-top-color: rgba(91,199,40,.45) !important;
}
        @keyframes bob {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-14px) rotate(0deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* ── Section ── */
        #about {
          background: #f8f9f4;
           padding: clamp(70px, 8vw, 130px) clamp(16px, 5vw, 60px);
          overflow: hidden;
          position: relative;
        }

        /* ── Subtle grid texture ── */
        #about::before {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.06) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        /* ── Large BG number watermark ── */
        .about-watermark {
          position: absolute;
          top: -40px; left: -20px; z-index: 1;
          font-family: Lato, serif;
          font-size: clamp(160px, 18vw, 280px);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(91,199,40,.1);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* ── Image cluster ── */
        .about-cluster {
          position: relative;
           height: clamp(320px, 55vw, 620px);
        }

        /* Main image */
        .about-img-main {
          position: absolute; top: 0; left: 0;
          width: 70%;
  height: 70%;
          border-radius: 4px 28px 4px 28px;
          overflow: hidden;
          box-shadow: 0 50px 110px rgba(27,58,107,.22);
          will-change: transform;
        }
        .about-img-main::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(160deg, transparent 45%, rgba(8,20,50,.35) 100%);
        }
        .about-img-main img {
          width: 100%; height: 170%;
          object-fit: cover;
          position: absolute; top: -35%; left: 0;
          will-change: transform;
        }

        /* Sub image */
        .about-img-sub {
          position: absolute; bottom: 0; right: 0;
          width: 60%;
  height: 55%;
          border-radius: 28px 4px 28px 4px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(27,58,107,.28);
          border: 6px solid #f8f9f4;
          will-change: transform;
        }
        .about-img-sub img {
          width: 100%; height: 170%;
          object-fit: cover;
          position: absolute; top: -35%; left: 0;
          will-change: transform;
        }

        /* Cert tag on main image */
        .about-cert {
          position: absolute; top: 20px; right: 20px; z-index: 4;
          background: rgba(8,20,50,.82);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(91,199,40,.4);
          border-radius: 10px;
          padding: 9px 16px;
          display: flex; align-items: center; gap: 8px;
        }
        .about-cert-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #5bc728;
          box-shadow: 0 0 8px rgba(91,199,40,.8);
          animation: certPulse 2s ease-in-out infinite;
        }
        @keyframes certPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.5); }
        }

        /* Float badge */
        .about-badge {
          position: absolute;     top: 65%;
  left: 30%;
          transform: translate(-50%,-50%) ;
          z-index: 6;
          will-change: transform;
          animation: bob 5.5s ease-in-out infinite;
        }
          @media (max-width: 992px) {
  .about-badge {
    top: 70%;
    left: 40%;
    transform: translate(-50%, -50%) scale(0.9);
  }
}

@media (max-width: 576px) {
  .about-badge {
    display: none;
  }
}
        .about-badge-inner {
          background: linear-gradient(135deg, #5bc728 0%, #3fa81a 100%);
          border-radius: 20px;
          padding: 22px 26px;
          text-align: center;
          box-shadow:
            0 28px 70px rgba(91,199,40,.45),
            inset 0 1px 0 rgba(255,255,255,.25);
          position: relative; overflow: hidden;
        }
        .about-badge-inner::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg,
            transparent 0%, rgba(255,255,255,.15) 50%, transparent 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .about-badge-num {
          font-family: 'Playfair Display', serif;
          font-size: 52px; font-weight: 900;
          color: #fff; line-height: 1;
          position: relative; z-index: 1;
        }
        .about-badge-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 700;
          color: rgba(255,255,255,.9);
          letter-spacing: 1.5px; text-transform: uppercase;
          margin-top: 6px; line-height: 1.5;
          position: relative; z-index: 1;
        }

        /* Deco corners — anchored to section, not cluster */
        .about-deco-tl {
          position: absolute;top: -20px;
    left: 4px;
          width: 50px; height: 50px; z-index: 3;
          border-top: 3px solid #5bc728;
          border-left: 3px solid #5bc728;
          border-radius: 6px 0 0 0;
          pointer-events: none;
        }
        .about-deco-br {
          position: absolute;bottom: -28px;
    left: calc(50% + 273px);

          width: 38px; height: 38px; z-index: 3;
          border-bottom: 3px solid ${xr};
          border-right: 3px solid ${xr};
          border-radius: 0 0 6px 0;
          pointer-events: none;
        }

        /* Kerala leaf accent */
        .about-kerala-tag {
          position: absolute; bottom: 58%; left: -18px; z-index: 7;
          background: #fff;
          border-radius: 10px;
          padding: 10px 16px 10px 14px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 12px 40px rgba(0,0,0,.12);
          border-left: 3px solid #5bc728;
        }

        /* ── Text side ── */
        .about-label-line {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 16px;
        }
        .about-label-bar {
          height: 3px; width: 36px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          border-radius: 2px;
        }

        .about-heading {
          font-family: 'Lato', serif;
          font-size: clamp(30px, 3.8vw, 58px);
          font-weight: 900;
          color: #0a1628;
          line-height: 1.08;
          letter-spacing: -0.5px;
          margin: 0 0 24px;
        }
        .about-heading em {
          font-style: normal;
          color: #5bc728;
          position: relative;
        }
        .about-heading em::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #5bc728, transparent);
          border-radius: 2px;
        }

        .about-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: #5a6476;
          line-height: 1.9; margin-bottom: 14px;
        }

        /* Feature rows */
        .about-feat {
          display: flex; align-items: center; gap: 14px;
          padding: 11px 0;
          border-bottom: 1px solid rgba(0,0,0,.05);
        }
        .about-feat:last-of-type { border-bottom: none; }
        .about-feat-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(91,199,40,.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; flex-shrink: 0;
          border: 1px solid rgba(91,199,40,.2);
        }
        .about-feat-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          color: #1a2540;
        }

        /* CTA */
        .about-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #0a1628; color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 700;
          padding: 16px 36px;
          border: none; cursor: pointer; border-radius: 50px;
          box-shadow: 0 12px 32px rgba(10,22,40,.25);
          transition: all .3s; text-decoration: none;
          letter-spacing: 0.3px;
        }
        .about-cta:hover {
          background: #5bc728; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(91,199,40,.35);
        }
        .about-cta-arrow { transition: transform .3s; }
        .about-cta:hover .about-cta-arrow { transform: translateX(5px); }

        /* Kerala stats strip */
        .about-stats-strip {
          display: flex; gap: 0;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
          overflow: hidden;
          margin-top: 32px;
        }
        .about-stat-cell {
          flex: 1; padding: 18px 20px; text-align: center;
          border-right: 1px solid rgba(0,0,0,.06);
          transition: background .2s;
        }
        .about-stat-cell:last-child { border-right: none; }
        .about-stat-cell:hover { background: rgba(91,199,40,.05); }
        .about-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 26px; font-weight: 900;
          color: #0a1628; line-height: 1;
        }
        .about-stat-num span { color: #5bc728; }
        .about-stat-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.2px;
          color: #9aa5b8; margin-top: 4px;
        }

        @media (max-width: 992px) { .about-cluster { height: 420px; } }
        @media (max-width: 768px) { .about-cluster { display: none; } }
        @media (max-width: 600px) { 
        #about { padding: 80px 20px !important;  }
        .about-stat-lbl{
        font-size: 7.5px;} 
        }
        .about-stat-cell{
        padding: 18px 15px !important;
        }
        .og-map-tooltip .tooltip-inner {
  text-align: center;
  line-height: 1.5;
}
.og-map-tooltip .tooltip-inner span {
  color: #5bc728;
  font-weight: 600;
}
      `}),c.jsxs("section",{id:"about",ref:e,children:[c.jsx("div",{className:"about-watermark",children:"15"}),c.jsx("div",{ref:r,style:{position:"absolute",inset:"-18% 0",zIndex:0,opacity:.035,overflow:"hidden",willChange:"transform"},children:c.jsx("img",{src:mo.aboutBg,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),c.jsx("div",{style:{position:"absolute",top:"10%",right:0,width:500,height:600,background:"radial-gradient(ellipse at right, rgba(220,242,200,.65) 0%, transparent 68%)",pointerEvents:"none",zIndex:1}}),c.jsx("div",{style:{maxWidth:1220,margin:"0 auto",position:"relative",zIndex:2},children:c.jsxs("div",{className:"row align-items-center g-5",children:[c.jsxs("div",{className:"col-lg-6",style:{position:"relative"},children:[c.jsx("div",{className:"about-deco-tl"}),c.jsx("div",{className:"about-deco-br"}),c.jsxs("div",{className:"about-cluster",children:[c.jsxs("div",{ref:n,className:"about-img-main",children:[c.jsx("img",{ref:i,src:xk,alt:"Pest control inspection service in Trivandrum Kerala"}),c.jsxs("div",{className:"about-cert",children:[c.jsx("div",{className:"about-cert-dot"}),c.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,fontWeight:700,color:"#fff"},children:"Govt. Licensed"})]})]}),c.jsx("div",{ref:o,className:"about-img-sub",children:c.jsx("img",{ref:s,src:vk,alt:"OnGuard pest control team in Trivandrum"})}),c.jsx("h3",{style:{display:"none"},children:"Termite Control | Mosquito Control | Cockroach Control in Trivandrum Kerala"}),c.jsx("div",{ref:a,className:"about-badge",children:c.jsxs("div",{className:"about-badge-inner",children:[c.jsx("div",{className:"about-badge-num",children:"15+"}),c.jsxs("div",{className:"about-badge-lbl",children:["Years of",c.jsx("br",{}),"Excellence"]})]})}),c.jsx("a",{href:"https://www.google.com/maps/dir//OnGuard+Pest+Controls,+Sri,+Narasimha+shopping+complex,+near+Govt+Secretariat,+opposite+YMCA+Road,+Statue,+Palayam,+Thiruvananthapuram,+Kerala+695001/@8.4996555,76.9242809,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x417860831dc4e6b9:0xd9244f4df3b987de!2m2!1d76.9496642!2d8.4958291?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},"data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"og-map-tooltip",title:`
  <div style="text-align:center">
    📍 Sri Narasimhavilasam Complex<br/>
    Opp. YMCA Road, Statue, Palayam<br/>
    Thiruvananthapuram<br/>
    <span style="color:#5bc728;">Click to open in Maps</span>
  </div>
`,children:c.jsxs("div",{className:"about-kerala-tag about-map-clickable",children:[c.jsx("span",{style:{fontSize:16},children:"📍"}),c.jsxs("div",{children:[c.jsx("div",{className:"subLocation",style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,fontWeight:700,color:"#0a1628",lineHeight:1.2},children:"Serving Trivandrum, Kochi & All Kerala"}),c.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:"#9aa5b8",marginTop:2},children:"Kochi · Trivandrum · Calicut"})]})]})})]})]}),c.jsx("div",{className:"col-lg-6",children:c.jsxs("div",{ref:l,children:[c.jsxs("div",{className:"about-label-line",children:[c.jsx("div",{className:"about-label-bar"}),c.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,fontWeight:700,letterSpacing:2.5,color:"#5bc728",textTransform:"uppercase"},children:"Who We Are"})]}),c.jsxs("h2",{className:"about-heading",children:["Kerala's Most ",c.jsx("em",{children:"Trusted"}),c.jsx("br",{}),"Pest Control Partner"]}),c.jsx("p",{className:"about-body",children:"OnGuard Pest Controls is a leading pest control company in Trivandrum, Kerala, providing professional pest management services since 2010. We specialize in termite control, mosquito control, cockroach removal, and rodent control for homes, offices, and commercial spaces."}),c.jsx("p",{className:"about-body",style:{marginBottom:28},children:"Our expert team uses eco-friendly and safe pest control methods to ensure long-term protection. Whether you need residential or commercial pest control in Trivandrum, we deliver reliable and effective solutions tailored to your needs."}),c.jsx("div",{style:{marginBottom:28},children:u.map((d,f)=>c.jsxs("div",{className:"about-feat",children:[c.jsx("div",{className:"about-feat-icon",children:d.icon}),c.jsx("span",{className:"about-feat-text",children:d.text})]},f))}),c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center",marginBottom:0},children:[c.jsxs("a",{href:"#contact",className:"about-cta",children:["Book Free Inspection",c.jsx("span",{className:"about-cta-arrow",children:"→"})]}),c.jsxs("button",{onClick:()=>t("/about-us"),style:{display:"inline-flex",alignItems:"center",gap:10,background:"transparent",color:"#0a1628",border:"2px solid #0a1628",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:700,padding:"15px 35px",borderRadius:"50px",letterSpacing:"0.3px",transition:"all .3s"},onMouseEnter:d=>{d.currentTarget.style.background="#5bc728",d.currentTarget.style.color="#fff",d.currentTarget.style.borderColor="#5bc728",d.currentTarget.style.boxShadow="0 18px 40px rgba(91,199,40,.35)",d.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:d=>{d.currentTarget.style.background="transparent",d.currentTarget.style.color="#0a1628",d.currentTarget.style.borderColor="#0a1628",d.currentTarget.style.boxShadow="none",d.currentTarget.style.transform="none"},children:["View More About Us",c.jsx("span",{style:{transition:"transform .3s"},children:"→"})]})]}),c.jsx("div",{className:"about-stats-strip",children:[{val:"15",sfx:"+",lbl:"Years Experience"},{val:"13",sfx:"+",lbl:"Services Offered"},{val:"6",sfx:"+",lbl:"Sectors Served"},{val:"24",sfx:"/7",lbl:"Support"}].map((d,f)=>c.jsxs("div",{className:"about-stat-cell",children:[c.jsxs("div",{className:"about-stat-num",children:[d.val,c.jsx("span",{children:d.sfx})]}),c.jsx("div",{className:"about-stat-lbl",children:d.lbl})]},f))})]})})]})})]})]})}const wk="/assets/processbg-DuIsOrFV.png";P.registerPlugin(B);function bk(){const t=b.useRef(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef(),o=b.useRef(),s=b.useRef([]),a=b.useRef(),[l,u]=b.useState(null);return b.useEffect(()=>{const d=()=>{if(!t.current)return;const f=t.current.getBoundingClientRect(),p=window.innerHeight/2-f.top-f.height/2;P.set(e.current,{y:p*.22}),P.set(r.current,{y:p*.14}),P.set(n.current,{y:p*-.18,rotate:p*.008}),P.set(i.current,{y:p*-.12,rotate:-p*.006}),P.set(o.current,{y:p*-.24,x:p*.01})};return window.addEventListener("scroll",d,{passive:!0}),P.fromTo(a.current,{scaleX:0},{scaleX:1,duration:1.4,ease:"power2.inOut",transformOrigin:"left center",scrollTrigger:{trigger:t.current,start:"top 60%"}}),s.current.forEach((f,p)=>{f&&P.fromTo(f,{y:70,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",delay:p*.14,scrollTrigger:{trigger:t.current,start:"top 65%"}})}),()=>window.removeEventListener("scroll",d)},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
      

        /* ── Section ── */
        #process {
          position: relative;
          padding: 140px 60px;
          overflow: hidden;
          min-height: 700px;
        }

        /* ── BG layers ── */
        .proc-layer {
          position: absolute;
          inset: -28% 0;
          will-change: transform;
        }
        .proc-layer img { width: 100%; height: 100%; object-fit: cover; }

        /* ── Multi-stop overlay for depth ── */
        .proc-overlay {
          position: absolute; inset: 0; z-index: 2;
          background:
            radial-gradient(ellipse 70% 60% at 50% 40%, rgba(5,40,12,.55) 0%, transparent 70%),
            linear-gradient(180deg,
              rgba(3,8,20,.96) 0%,
              rgba(3,8,20,.88) 40%,
              rgba(3,8,20,.94) 100%
            );
        }

        /* ── Scanline texture ── */
        .proc-scanlines {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,.06) 3px,
            rgba(0,0,0,.06) 4px
          );
        }

        /* ── Rings ── */
        .proc-ring {
          position: absolute; border-radius: 50%;
          pointer-events: none; will-change: transform; z-index: 3;
        }

        /* ── Content ── */
        .proc-content {
          position: relative; z-index: 5;
          max-width: 1240px; margin: 0 auto;
        }

        /* ── Header ── */
        .proc-label {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 18px;
        }
        .proc-label-bar {
          height: 2px; width: 36px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          border-radius: 2px;
        }
        .proc-label-text {
          font-family: 'Lato', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #5bc728;
        }
        .proc-heading {
          font-family: 'Lato', sans-serif;
          font-size: clamp(36px, 5vw, 72px);
          font-weight: 900; color: #fff;
          letter-spacing: -1px; line-height: 0.95;
          text-transform: uppercase; margin: 0 0 8px;
        }
        .proc-heading span { color: #5bc728; }
        .proc-sub {
          font-family: 'Lato', sans-serif;
          font-size: 14px; color: rgba(255,255,255,.42);
          max-width: 480px; line-height: 1.75;
        }

        /* ── Connector line (desktop) ── */
        .proc-connector {
          display: none;
        }
        @media (min-width: 992px) {
          .proc-connector {
            display: block;
            position: absolute;
            top: 52px; left: calc(12.5% + 44px); right: calc(12.5% + 44px);
            height: 1px; z-index: 10;
            background: linear-gradient(90deg,
              transparent 0%,
              rgba(91,199,40,.3) 15%,
              rgba(91,199,40,.3) 85%,
              transparent 100%
            );
            transform-origin: left center;
          }
          .proc-connector::before {
            content: '';
            position: absolute; inset: -1px;
            background: inherit;
            filter: blur(3px); opacity: 0.5;
          }
        }

        /* ── Step number badge ── */
        .proc-num {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(91,199,40,.12);
          border: 1.5px solid rgba(91,199,40,.4);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 900;
          color: #5bc728; margin: 0 auto 20px;
          position: relative; z-index: 2;
          transition: all .3s;
        }
        .proc-num::after {
          content: '';
          position: absolute; inset: -5px;
          border-radius: 50%;
          border: 1px dashed rgba(91,199,40,.2);
        }

        /* ── Icon circle ── */
        .proc-icon {
          width: 80px; height: 80px; border-radius: 50%;
          margin: 0 auto 22px;
          display: flex; align-items: center; justify-content: center;
          font-size: 32px;
          position: relative;
          transition: all .35s;
        }
        .proc-icon.filled {
          background: linear-gradient(135deg, #5bc728 0%, #3fa81a 100%);
          box-shadow: 0 0 0 0 rgba(91,199,40,.4);
        }
        .step-card:hover .proc-icon.filled {
          box-shadow: 0 0 0 10px rgba(91,199,40,.12), 0 0 40px rgba(91,199,40,.4);
        }
        .proc-icon.outline {
          background: rgba(91,199,40,.06);
          border: 1.5px solid rgba(91,199,40,.35);
        }
        .proc-icon-ring {
          position: absolute; inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(91,199,40,.15);
          transition: all .4s;
        }
        .step-card:hover .proc-icon-ring {
          inset: -14px;
          border-color: rgba(91,199,40,.3);
        }

        /* ── Card ── */
        .step-card {
          background: rgba(255,255,255,.033);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 20px;
          padding: 36px 24px 32px;
          text-align: center;
          backdrop-filter: blur(16px);
          transition: all .4s cubic-bezier(.25,.46,.45,.94);
          height: 100%;
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        /* Card top glow on hover */
        .step-card::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(91,199,40,.6), transparent);
          opacity: 0; transition: opacity .4s;
        }
        .step-card:hover::before { opacity: 1; }

        /* Card bottom gradient fill on hover */
        .step-card::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 120%, rgba(91,199,40,.09) 0%, transparent 70%);
          opacity: 0; transition: opacity .4s;
          pointer-events: none;
        }
        .step-card:hover::after { opacity: 1; }

        .step-card:hover {
          transform: translateY(-10px);
          border-color: rgba(91,199,40,.3);
          box-shadow: 0 40px 80px rgba(0,0,0,.4), 0 0 0 1px rgba(91,199,40,.1);
        }

        /* Active card */
        .step-card.active {
          border-color: rgba(91,199,40,.45);
          background: rgba(91,199,40,.07);
        }

        .step-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px; font-weight: 700;
          color: #fff; text-transform: uppercase;
          letter-spacing: 0.3px;
          margin: 0 0 11px;
        }
        .step-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: rgba(255,255,255,.42);
          line-height: 1.82; margin: 0;
        }

        /* Arrow between cards (desktop) */
        .proc-arrow {
          display: none;
        }
        @media (min-width: 992px) {
          .proc-arrow {
            display: flex; align-items: center; justify-content: center;
            position: absolute; top: 50px; right: -14px; z-index: 11;
            color: rgba(91,199,40,.5); font-size: 18px;
          }
        }

        /* ── Bottom CTA strip ── */
        .proc-cta-strip {
          margin-top: 56px;
          display: flex; align-items: center; justify-content: center;
          gap: 20px; flex-wrap: wrap;
        }
        .proc-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #5bc728; color: #030814;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px; font-weight: 900;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 15px 34px;
          border: none; cursor: pointer; border-radius: 50px;
          box-shadow: 0 12px 32px rgba(91,199,40,.4);
          transition: all .3s; text-decoration: none;
        }
        .proc-cta-btn:hover {
          background: #6fe030; transform: translateY(-2px);
          box-shadow: 0 18px 44px rgba(91,199,40,.5);
          color: #030814;
        }
        .proc-cta-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: rgba(255,255,255,.35);
        }
        .proc-cta-note strong {
          color: rgba(255,255,255,.65); font-weight: 600;
        }

        @media (max-width: 768px) {
          #process { padding: 90px 20px !important; }
          .proc-connector { display: none; }
        }
           @media (max-width: 600px){
           .proc-cta-btn{
           font-size:12px !important;
           }}
      `}),c.jsxs("section",{id:"process",ref:t,children:[c.jsx("div",{ref:e,className:"proc-layer",style:{zIndex:0},children:c.jsx("img",{src:wk,alt:"Pest control process in Trivandrum Kerala"})}),c.jsx("h2",{style:{display:"none"},children:"Pest Control Process in Trivandrum Kerala – Inspection, Treatment and Prevention"}),c.jsx("div",{ref:r,className:"proc-layer",style:{zIndex:1,mixBlendMode:"multiply",opacity:.45},children:c.jsx("img",{src:mo.processL2,alt:"Professional pest control service workflow"})}),c.jsx("div",{className:"proc-overlay"}),c.jsx("div",{className:"proc-scanlines"}),c.jsx("div",{ref:n,className:"proc-ring",style:{top:"6%",right:"7%",width:220,height:220,border:"1px dashed rgba(91,199,40,.18)"}}),c.jsx("div",{ref:i,className:"proc-ring",style:{bottom:"10%",left:"5%",width:160,height:160,border:"1px dashed rgba(255,255,255,.06)"}}),c.jsx("div",{ref:o,className:"proc-ring",style:{top:"38%",left:"16%",width:90,height:90,border:"1.5px solid rgba(91,199,40,.08)"}}),c.jsxs("div",{className:"proc-content",children:[c.jsxs("div",{className:"row align-items-end mb-5",children:[c.jsxs("div",{className:"col-lg-6",children:[c.jsxs("div",{className:"proc-label",children:[c.jsx("div",{className:"proc-label-bar"}),c.jsx("span",{className:"proc-label-text",children:"How It Works"})]}),c.jsxs("h2",{className:"proc-heading",children:["Our Simple",c.jsx("br",{}),c.jsx("span",{children:"4-Step"})," Process"]})]}),c.jsx("div",{className:"col-lg-6",children:c.jsx("p",{className:"proc-sub ms-lg-auto",style:{marginBottom:0},children:"Our pest control process in Trivandrum ensures safe, effective, and long-lasting solutions for termite, mosquito, cockroach, and rodent problems using modern techniques."})})]}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx("div",{ref:a,className:"proc-connector"}),c.jsx("div",{className:"row g-4",children:_m.map((d,f)=>c.jsx("div",{className:"col-12 col-sm-6 col-lg-3",style:{position:"relative"},children:c.jsxs("div",{className:`step-card${l===f?" active":""}`,ref:p=>s.current[f]=p,onMouseEnter:()=>u(f),onMouseLeave:()=>u(null),children:[c.jsxs("div",{className:"proc-num",children:["0",f+1]}),c.jsxs("div",{className:`proc-icon ${d.type==="img"?"outline":"filled"}`,children:[c.jsx("div",{className:"proc-icon-ring"}),d.type==="img"?c.jsx("img",{src:d.ic,alt:d.t,style:{width:38}}):d.ic]}),c.jsx("h3",{className:"step-title",children:d.t}),c.jsx("p",{className:"step-desc",children:d.d}),f<_m.length-1&&c.jsx("div",{className:"proc-arrow",children:"›"})]})},f))})]}),c.jsx("div",{className:"proc-cta-strip",children:c.jsx("a",{href:"#contact",className:"proc-cta-btn",children:"Start Your Free Inspection →"})})]})]})]})}const jo="#3ade6e";function _k(){const t=b.useRef(),[e,r]=b.useState(!1);return b.useEffect(()=>{const n=new IntersectionObserver(([i])=>{i.isIntersecting&&(r(!0),n.disconnect())},{threshold:.2});return t.current&&n.observe(t.current),()=>n.disconnect()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

        /* ── Wrapper ── */
        .s2w-wrap {
          font-family: 'Lato', sans-serif;
          background: #f8f9f4;
          padding: 64px 48px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        /* ── Orbs ── */
        .s2w-orb1 {
          position: absolute; right: -80px; top: -80px;
          width: 380px; height: 380px; border-radius: 50%;
          background: rgba(58,222,110,.06); pointer-events: none;
        }
        .s2w-orb2 {
          position: absolute; left: -40px; bottom: -60px;
          width: 240px; height: 240px; border-radius: 50%;
          background: rgba(58,222,110,.04); pointer-events: none;
        }

        /* ── Inner layout ── */
        .s2w-inner {
          display: flex;
          align-items: center;
          gap: 48px;
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Badge ── */
        .s2w-badge {
          flex-shrink: 0;
          width: 130px; height: 130px;
          border-radius: 50%;
          border: 2.5px solid ${jo};
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          position: relative;
          background: #fff;
          opacity: 0;
          transform: scale(.72) rotate(-10deg);
          transition: opacity .65s .1s, transform .65s .1s cubic-bezier(.34,1.56,.64,1);
        }
        .s2w-badge.in { opacity: 1; transform: scale(1) rotate(0deg); }
        .s2w-badge::before {
          content: ''; position: absolute; inset: -7px;
          border-radius: 50%; border: 1px solid rgba(58,222,110,.2);
        }
        .s2w-badge::after {
          content: ''; position: absolute; inset: -14px;
          border-radius: 50%; border: 1px dashed rgba(58,222,110,.12);
        }
        .s2w-num {
          font-size: 44px; font-weight: 900;
          color: ${jo}; line-height: 1;
          letter-spacing: -2px;
        }
        .s2w-unit {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #999; margin-top: 3px;
        }

        /* ── Divider ── */
        .s2w-div {
          width: 1px; height: 110px; flex-shrink: 0;
          background: linear-gradient(180deg, transparent, #d8d8d8, transparent);
        }

        /* ── Text block ── */
        .s2w-text {
          flex: 1;
          opacity: 0; transform: translateX(24px);
          transition: opacity .75s .3s, transform .75s .3s cubic-bezier(.22,1,.36,1);
        }
        .s2w-text.in { opacity: 1; transform: translateX(0); }

        .s2w-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: ${jo}; margin-bottom: 13px;
        }
        .s2w-eyebrow::before {
          content: ''; display: block;
          width: 24px; height: 1.5px; background: ${jo};
        }

        .s2w-headline {
          font-size: clamp(20px, 3vw, 40px);
          font-weight: 900; color: #0a0f0a;
          line-height: 1.1; letter-spacing: -.5px;
          margin: 0 0 18px;
        }
        .s2w-headline em { font-style: normal; color: ${jo}; }

        /* ── Card ── */
        .s2w-card {
          display: inline-flex; align-items: flex-start; gap: 10px;
          padding: 12px 16px;
          border: 1px solid #d6f2e0;
          border-radius: 8px;
          background: #f4fdf7;
          max-width: 100%;
        }
        .s2w-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: ${jo}; margin-top: 5px; flex-shrink: 0;
          animation: s2wpulse 1.8s ease-in-out infinite;
        }
        @keyframes s2wpulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.5); opacity: .5; }
        }
        .s2w-card p {
          font-size: 13px; color: #555;
          line-height: 1.6; margin: 0 !important;
        }
        .s2w-card strong { color: #1a1a1a; font-weight: 700; }

        /* ── Trust bar ── */
        .s2w-trustbar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px 24px;
          max-width: 860px;
          margin: 28px auto 0;
          padding-top: 26px;
          border-top: 1px solid #f0f0f0;
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(12px);
          transition: opacity .7s .55s, transform .7s .55s ease;
        }
        .s2w-trustbar.in { opacity: 1; transform: translateY(0); }

        .s2w-trust {
          display: flex; align-items: center; gap: 9px;
          font-size: 12px; font-weight: 700;
          color: #888; letter-spacing: .2px;
          white-space: nowrap;
        }
        .s2w-trust-ico {
          width: 28px; height: 28px; border-radius: 50%;
          background: #f4fdf7; border: 1px solid #cceedd;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .s2w-sep {
          width: 1px; height: 20px;
          background: #ebebeb; flex-shrink: 0;
        }

        /* ══════════════════════════════
           TABLET  768px – 1023px
        ══════════════════════════════ */
        @media (max-width: 1023px) {
          .s2w-wrap { padding: 56px 36px; }
          .s2w-inner { gap: 36px; }
          .s2w-badge { width: 116px; height: 116px; }
          .s2w-num { font-size: 38px; }
        }

        /* ══════════════════════════════
           MOBILE  ≤ 767px
        ══════════════════════════════ */
        @media (max-width: 767px) {
          .s2w-wrap { padding: 48px 20px; }

          /* Stack badge above text */
          .s2w-inner {
            flex-direction: column;
            text-align: center;
            gap: 28px;
          }
          .s2w-div { display: none; }

          /* Badge — centered, slightly smaller */
          .s2w-badge {
            width: 108px; height: 108px;
          }
          .s2w-num { font-size: 36px; }

          /* Text — centered */
          .s2w-text { transform: translateY(20px); }
          .s2w-text.in { transform: translateY(0); }
          .s2w-eyebrow { justify-content: center; }
          .s2w-headline { font-size: clamp(22px, 5.5vw, 32px); }

          /* Card — full width on very small screens */
          .s2w-card { width: 100%; box-sizing: border-box; }

          /* Trust bar — stack items, hide separators */
          .s2w-trustbar {
            flex-direction: column;
            align-items: center;
            gap: 14px;
          }
          .s2w-sep { display: none; }
          .s2w-trust { font-size: 13px; }
          .s2w-orb1{
              width: 200px;
    height: 200px;
          }
        }

        /* ══════════════════════════════
           SMALL MOBILE  ≤ 380px
        ══════════════════════════════ */
        @media (max-width: 380px) {
          .s2w-wrap { padding: 40px 16px; }
          .s2w-badge { width: 96px; height: 96px; }
          .s2w-num { font-size: 32px; }
          .s2w-headline { font-size: 20px; }
        }
      `}),c.jsxs("div",{className:"s2w-wrap",ref:t,children:[c.jsx("div",{className:"s2w-orb1"}),c.jsx("div",{className:"s2w-orb2"}),c.jsxs("div",{className:"s2w-inner",children:[c.jsxs("div",{className:`s2w-badge${e?" in":""}`,children:[c.jsx("span",{className:"s2w-num",children:"30"}),c.jsx("span",{className:"s2w-unit",children:"Days"})]}),c.jsx("div",{className:"s2w-div"}),c.jsx("h3",{style:{display:"none"},children:"Affordable Pest Control Services in Trivandrum Kerala with Guarantee and Free Re-Treatment"}),c.jsxs("div",{className:`s2w-text${e?" in":""}`,children:[c.jsx("div",{className:"s2w-eyebrow",children:"Pest Control Guarantee"}),c.jsxs("h3",{className:"s2w-headline",children:["Pests return? We re-treat",c.jsx("br",{}),"at absolutely ",c.jsx("em",{children:"zero cost."})]}),c.jsxs("div",{className:"s2w-card",children:[c.jsx("span",{className:"s2w-dot"}),c.jsxs("p",{children:[c.jsx("strong",{children:"No questions asked."})," No extra charges.  That's the OnGuard guarantee."]})]})]})]}),c.jsxs("div",{className:`s2w-trustbar${e?" in":""}`,children:[c.jsxs("div",{className:"s2w-trust",children:[c.jsx("div",{className:"s2w-trust-ico",children:c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:c.jsx("path",{d:"M7 1L9 5.5H13.5L9.75 8.25L11.25 13L7 10L2.75 13L4.25 8.25L0.5 5.5H5L7 1Z",fill:"#3ade6e"})})}),"Trusted pest control services in Trivandrum by 10,000+ homes"]}),c.jsx("div",{className:"s2w-sep"}),c.jsxs("div",{className:"s2w-trust",children:[c.jsx("div",{className:"s2w-trust-ico",children:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[c.jsx("rect",{x:"2",y:"4",width:"10",height:"8",rx:"1.5",stroke:"#3ade6e",strokeWidth:"1"}),c.jsx("path",{d:"M5 4V3C5 1.9 5.9 1 7 1C8.1 1 9 1.9 9 3V4",stroke:"#3ade6e",strokeWidth:"1",strokeLinecap:"round"}),c.jsx("circle",{cx:"7",cy:"8",r:"1",fill:"#3ade6e"})]})}),"Certified pest control company in Kerala"]}),c.jsx("div",{className:"s2w-sep"}),c.jsxs("div",{className:"s2w-trust",children:[c.jsx("div",{className:"s2w-trust-ico",children:c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:c.jsx("path",{d:"M7 1.5L8.5 5H12L9 7.5L10 11L7 9L4 11L5 7.5L2 5H5.5L7 1.5Z",stroke:"#3ade6e",strokeWidth:"1",fill:"none"})})}),"4.9 / 5 customer rating"]})]})]})]})}const Sm="/assets/whytrust-mcxr9hjE.png";P.registerPlugin(B);const Rf="#3ade6e",kk=[{n:15,suf:"+",label:"Years Experience",sub:"Serving Kerala homes & businesses since 2009",bar:75},{n:1e4,suf:"+",label:"Pests Eliminated",sub:"Across homes & commercial spaces",bar:100},{n:500,suf:"+",label:"Happy Clients",sub:"With 4.9★ average rating",bar:82},{n:98,suf:"%",label:"Success Rate",sub:"First-treatment guarantee",bar:98}];function Sk({to:t,suf:e=""}){const[r,n]=b.useState(0),i=b.useRef(),o=b.useRef(!1);return b.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&!o.current&&(o.current=!0,P.to({n:0},{n:t,duration:2.5,onUpdate:function(){n(Math.round(this.targets()[0].n))}}))},{threshold:.5});return s.observe(i.current),()=>s.disconnect()},[t]),c.jsxs("span",{ref:i,children:[r.toLocaleString(),e]})}function Tk({pct:t}){const[e,r]=b.useState(0),n=b.useRef();return b.useEffect(()=>{const i=new IntersectionObserver(([o])=>{o.isIntersecting&&r(t)});return i.observe(n.current),()=>i.disconnect()},[t]),c.jsx("div",{ref:n,style:{height:3,background:"rgba(255,255,255,0.1)",marginTop:15,borderRadius:2},children:c.jsx("div",{style:{width:`${e}%`,height:"100%",background:Rf,borderRadius:2,transition:"width 1.5s ease"}})})}function Ck(){const t=b.useRef(),e=b.useRef(),r=b.useRef();return b.useEffect(()=>{const n=i=>{const o=i.clientX/window.innerWidth-.5,s=i.clientY/window.innerHeight-.5;P.to(e.current,{x:o*40,y:s*40,scale:1.1,duration:1.2}),P.to(r.current,{x:o*20,y:s*20,scale:1.05,duration:1.2})};return window.addEventListener("mousemove",n),P.to(e.current,{yPercent:15,scrollTrigger:{trigger:t.current,scrub:!0}}),P.to(r.current,{yPercent:8,scrollTrigger:{trigger:t.current,scrub:!0}}),P.to(e.current,{y:"+=20",duration:6,repeat:-1,yoyo:!0}),P.to(r.current,{y:"-=15",duration:5,repeat:-1,yoyo:!0}),()=>window.removeEventListener("mousemove",n)},[]),b.useEffect(()=>{const n=document.querySelector(".st9-cursor-glow");if(!n)return;const i=o=>{P.to(n,{x:o.clientX,y:o.clientY,duration:.3})};return window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        #stats9 {
          position: relative;
          padding: 120px 40px;
          overflow: hidden;
          color: #fff;
          background: #05091a;
        }

        /* ── background layers ── */
        .st9-layer {
          position: absolute;
          inset: -20%;
          pointer-events: none;
        }
        .st9-layer img {
          width: 110%;
          height: 110%;
          object-fit: cover;
        }

        /* ── dark overlay ── */
        .st9-overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 9, 26, 0.94);
          pointer-events: none;
        }

        /* ── cursor glow ── */
        .st9-cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(58,222,110,0.2), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }

        /* ── content wrapper ── */
        .st9-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .st9-content h2 {
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 60px;
        }

        /* ── cards grid ── */
        .st9-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 0;
        }

        .st9-card {
          padding: 30px;
          border-radius: 12px;
          background: rgba(91, 199, 40, 0.08);
          border: 1px solid rgba(91, 199, 40, 0.16);
          text-align: center;
        }

        .st9-num {
          font-size: 40px;
          font-weight: 700;
          color: ${Rf};
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .st9-card-title {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin: 8px 0 6px;
        }

        .st9-card-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .st9-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          #stats9 { padding: 80px 20px; }
          .st9-cards { grid-template-columns: 1fr; }
          .st9-num { font-size: 32px; }
        }
      `}),c.jsxs("section",{id:"stats9",ref:t,children:[c.jsx("div",{ref:e,className:"st9-layer",children:c.jsx("img",{src:Sm,alt:""})}),c.jsx("div",{ref:r,className:"st9-layer",children:c.jsx("img",{src:Sm,alt:""})}),c.jsx("div",{className:"st9-overlay"}),c.jsx("div",{className:"st9-cursor-glow"}),c.jsxs("div",{className:"st9-content",children:[c.jsxs("h2",{children:["Why Kerala Trusts"," ",c.jsx("span",{style:{color:Rf},children:"OnGuard"})]}),c.jsx("div",{className:"st9-cards",children:kk.map((n,i)=>c.jsxs("div",{className:"st9-card",children:[c.jsx("div",{className:"st9-num",children:c.jsx(Sk,{to:n.n,suf:n.suf})}),c.jsx("h4",{className:"st9-card-title",children:n.label}),c.jsx("p",{className:"st9-card-sub",children:n.sub}),c.jsx(Tk,{pct:n.bar})]},i))})]})]})]})}P.registerPlugin(B);const nn=[{name:"Fahad F",role:"Google Review",date:"Mar 2026",stars:5,text:"Good services and good quality. Nice behaviour. Highly recommended!",av:"FF"},{name:"Akash Jayaprakash",role:"Google Review",date:"Feb 2026",stars:5,text:"Very nice service and affordable rate, also customer friendly.",av:"AJ"},{name:"Hari Hari",role:"Google Review",date:"Feb 2026",stars:5,text:"Very good company. Service is good.",av:"HH"},{name:"Anseer Anseer",role:"Google Review",date:"Dec 2025",stars:5,text:"Best service, amazing customer dealing. Very good technicians. Friendly guys, best price. Thank you OnGuard Pest Control!",av:"AA"},{name:"RE J IN",role:"Google Review",date:"Dec 2025",stars:5,text:"Very good service, best price. Best pest control of Trivandrum.",av:"RJ"},{name:"Akash Mohan",role:"Google Review",date:"Nov 2025",stars:5,text:"Best service and affordable. Highly recommended!",av:"AM"},{name:"Archana Aravind",role:"Google Review",date:"Nov 2025",stars:5,text:"Best termite control service in Trivandrum.",av:"AA"},{name:"Jiyas Jiya",role:"Google Review",date:"Nov 2025",stars:5,text:"Best service in Trivandrum. Customer friendly, very good behavior. Thank you OnGuard Pest Control. Highly recommend this company!",av:"JJ"},{name:"Ansi Fathima",role:"Google Review",date:"Nov 2025",stars:5,text:"Best service! Really satisfied with the results. Will definitely use OnGuard again.",av:"AF"},{name:"Alfina bn",role:"Google Review",date:"Nov 2025",stars:5,text:"Best service. Very professional team and excellent results.",av:"AB"}];function Ek(){const t=b.useRef(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef(),o=b.useRef([]),[s,a]=b.useState(0),[l,u]=b.useState(!0),[d,f]=b.useState(!1);b.useEffect(()=>{const m=()=>f(window.innerWidth<768);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),b.useEffect(()=>{if(d)return;const m=setInterval(()=>{u(!1),setTimeout(()=>{a(g=>(g+1)%nn.length),u(!0)},220)},5500);return()=>clearInterval(m)},[d]),b.useEffect(()=>{const m=()=>{if(!t.current)return;const g=t.current.getBoundingClientRect(),w=window.innerHeight/2-g.top-g.height/2;e.current&&P.set(e.current,{y:w*.42}),r.current&&P.set(r.current,{y:w*.22})};return window.addEventListener("scroll",m,{passive:!0}),n.current&&P.fromTo(n.current,{y:72,opacity:0},{y:0,opacity:1,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:t.current,start:"top 75%"}}),()=>window.removeEventListener("scroll",m)},[]),b.useEffect(()=>{const m=i.current;if(!m)return;const g=()=>{if(window.innerWidth>=768)return;const w=m.querySelectorAll(".trev-item");if(!w.length)return;const x=w[0].offsetWidth+16,y=Math.min(Math.round(m.scrollLeft/x),nn.length-1);o.current.forEach((_,k)=>{_&&_.classList.toggle("trev-dot-active",k===y)})};return m.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g),g(),()=>{m.removeEventListener("scroll",g),window.removeEventListener("resize",g)}},[]);const p=m=>{var v;const g=i.current;if(!g)return;(v=g.querySelectorAll(".trev-item")[m])==null||v.scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"}),a(m)},h=()=>c.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),c.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),c.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),c.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]});return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        #review {
          position: relative;
          padding: 140px 60px;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* ── Parallax layers ── */
        .testi-layer {
          position: absolute; inset: -22% 0 -22%;
          will-change: transform;
        }
        .testi-layer img { width: 100%; height: 100%; object-fit: cover; }
        .testi-overlay {
          position: absolute; inset: 0;
          background: rgba(238,245,230,.97); z-index: 2;
        }

        /* ── Content wrapper ── */
        .testi-content {
          position: relative; z-index: 3;
          max-width: 900px; margin: 0 auto; text-align: center;
        }

        /* ══════════════════════════════════════
           DESKTOP — single rotating card
        ══════════════════════════════════════ */
        @media (min-width: 768px) {
          .trev-carousel   { display: none; }
          .trev-dots-wrap  { display: none; }
          .trev-desktop    { display: block; }
        }

        /* ══════════════════════════════════════
           MOBILE — horizontal snap carousel
        ══════════════════════════════════════ */
        @media (max-width: 767px) {
          #review { padding: 72px 0 80px; }

          .trev-desktop { display: none; }

          .trev-carousel {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 8px 20px 16px 20px;
          }
          .trev-carousel::-webkit-scrollbar { display: none; }

          .trev-item {
            flex: 0 0 84vw;
            max-width: 340px;
            scroll-snap-align: start;
          }

          /* dots */
          .trev-dots-wrap {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 7px;
            margin-top: 14px;
            padding: 0 20px;
          }
          .trev-dot {
            width: 7px; height: 7px;
            border-radius: 50%;
            background: rgba(27,58,107,.18);
            border: none; padding: 0;
            cursor: pointer;
            transition: background .3s, transform .3s;
          }
          .trev-dot-active {
            background: ${W};
            transform: scale(1.4);
          }

          .testi-content { max-width: 100%; }
          .trev-header { padding: 0 20px; }
        }

        /* ── Review card (shared) ── */
        .review-card {
          background: #fff;
          border-radius: 24px;
          padding: 48px 52px;
          box-shadow: 0 28px 90px rgba(27,58,107,.1);
          position: relative;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (max-width: 767px) {
          .review-card { padding: 28px 24px; }
        }

        .review-quote {
          position: absolute; top: 16px; left: 28px;
          font-size: 96px; color: ${W};
          font-family: Georgia, serif;
          line-height: .7; opacity: .07;
          font-weight: 900; pointer-events: none;
        }

        /* ── Stars ── */
        .rev-stars { display: flex; gap: 3px; margin-bottom: 16px; }
        .rev-star  { color: #F5A623; font-size: 18px; }

        /* ── Quote text ── */
        .rev-text {
          font-size: clamp(13px, 1.6vw, 16px);
          color: #0a1628;
          line-height: 1.85;
          font-style: italic;
          font-weight: 300;
          margin: 0 0 28px;
          flex: 1;
        }

        /* ── Author row ── */
        .rev-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .rev-author-left { display: flex; align-items: center; gap: 12px; }

        .avatar {
          width: 48px; height: 48px; border-radius: 50%;
          background: linear-gradient(135deg, ${xr}, ${W});
          display: flex; align-items: center; justify-content: center;
          font-family: 'Lato', sans-serif;
          font-size: 15px; font-weight: 900; color: #fff;
          box-shadow: 0 6px 20px rgba(27,58,107,.3);
          flex-shrink: 0;
        }
        .rev-name {
          font-size: 14px; font-weight: 900;
          color: ${xr}; font-family: 'Lato', sans-serif;
        }
        .rev-meta {
          font-size: 11px; color: #8a9ab0;
          font-family: 'Lato', sans-serif;
          margin-top: 2px;
        }

        /* Google badge */
        .rev-google {
          display: flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 700;
          color: #8a9ab0; font-family: 'Lato', sans-serif;
          flex-shrink: 0;
        }

        /* ── Desktop dot nav ── */
        .dot-nav { display: flex; justify-content: center; gap: 8px; margin-top: 32px; }
        .dot-nav button {
          border: none; cursor: pointer; border-radius: 5px; height: 10px;
          transition: all .42s cubic-bezier(.25,.46,.45,.94);
        }

        /* ── Rating summary ── */
        .rev-summary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff; border-radius: 50px;
          padding: 10px 20px;
          box-shadow: 0 6px 24px rgba(27,58,107,.08);
          margin-bottom: 40px;
          font-family: 'Lato', sans-serif;
        }
          .rev-summary {
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.25s ease;
}
.rev-summary:hover {
  box-shadow: 0 10px 32px rgba(27,58,107,.15);
  transform: translateY(-2px);
}
        .rev-summary-score {
          font-size: 20px; font-weight: 900; color: ${xr};
        }
        .rev-summary-label {
          font-size: 11px; color: #8a9ab0; font-weight: 600;
          letter-spacing: .5px;
        }
        .rev-summary-stars { display: flex; gap: 2px; }
        .rev-summary-star  { color: #F5A623; font-size: 15px; }
        .rev-google {
  transition: opacity 0.2s ease;
}
.rev-google:hover {
  opacity: 0.7;
}
      `}),c.jsxs("section",{id:"review",ref:t,children:[c.jsx("div",{ref:e,className:"testi-layer",style:{zIndex:0},children:c.jsx("img",{src:mo.testiMain,alt:""})}),c.jsx("div",{ref:r,className:"testi-layer",style:{zIndex:1,mixBlendMode:"luminosity",opacity:.3},children:c.jsx("img",{src:mo.testiL2,alt:""})}),c.jsx("div",{className:"testi-overlay"}),c.jsxs("div",{ref:n,className:"testi-content",children:[c.jsxs("div",{className:"trev-header",children:[c.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-3 mb-3",children:[c.jsx("div",{style:{width:44,height:3,background:W,borderRadius:2}}),c.jsx("span",{style:{fontFamily:"'Lato',sans-serif",fontSize:12,fontWeight:700,letterSpacing:2.2,color:W,textTransform:"uppercase"},children:"Client Stories"}),c.jsx("div",{style:{width:44,height:3,background:W,borderRadius:2}})]}),c.jsxs("h2",{style:{fontFamily:"'Lato',sans-serif",fontSize:"clamp(26px,4vw,56px)",fontWeight:900,color:xr,margin:"0 0 28px",letterSpacing:-.7},children:["What Our Clients ",c.jsx("span",{style:{color:W},children:"Say"})]}),c.jsx("div",{className:"d-flex justify-content-center mb-2",children:c.jsxs("div",{className:"rev-summary",onClick:()=>window.open("https://www.google.com/maps/search/OnGuard+Pest+Controls+Reviews","_blank"),style:{cursor:"pointer"},children:[c.jsx(h,{}),c.jsx("div",{className:"rev-summary-score",children:"5.0"}),c.jsx("div",{className:"rev-summary-stars",children:[...Array(5)].map((m,g)=>c.jsx("span",{className:"rev-summary-star",children:"★"},g))}),c.jsx("div",{className:"rev-summary-label",children:"388+ Google Reviews"})]})})]}),c.jsxs("div",{className:"trev-desktop",children:[c.jsxs("div",{className:"review-card",style:{opacity:l?1:0,transition:"opacity .22s"},children:[c.jsx("div",{className:"review-quote",children:'"'}),c.jsx("div",{className:"rev-stars",children:[...Array(nn[s].stars)].map((m,g)=>c.jsx("span",{className:"rev-star",children:"★"},g))}),c.jsxs("p",{className:"rev-text",children:['"',nn[s].text,'"']}),c.jsxs("div",{className:"rev-author",children:[c.jsxs("div",{className:"rev-author-left",children:[c.jsx("div",{className:"avatar",children:nn[s].av}),c.jsxs("div",{children:[c.jsx("div",{className:"rev-name",children:nn[s].name}),c.jsx("div",{className:"rev-meta",children:nn[s].date})]})]}),c.jsx("div",{className:"rev-google",children:c.jsxs("a",{href:"https://www.google.com/maps/search/OnGuard+Pest+Controls+Reviews",target:"_blank",rel:"noopener noreferrer",className:"rev-google",style:{textDecoration:"none"},children:[c.jsx(h,{})," Google"]})})]})]}),c.jsx("div",{className:"dot-nav",children:nn.map((m,g)=>c.jsx("button",{onClick:()=>{a(g),u(!0)},style:{width:g===s?32:10,background:g===s?W:"rgba(27,58,107,.18)"}},g))})]}),c.jsx("div",{ref:i,className:"trev-carousel",children:nn.map((m,g)=>c.jsx("div",{className:"trev-item",children:c.jsxs("div",{className:"review-card",children:[c.jsx("div",{className:"review-quote",children:'"'}),c.jsx("div",{className:"rev-stars",children:[...Array(m.stars)].map((w,v)=>c.jsx("span",{className:"rev-star",children:"★"},v))}),c.jsxs("p",{className:"rev-text",children:['"',m.text,'"']}),c.jsxs("div",{className:"rev-author",children:[c.jsxs("div",{className:"rev-author-left",children:[c.jsx("div",{className:"avatar",children:m.av}),c.jsxs("div",{children:[c.jsx("div",{className:"rev-name",children:m.name}),c.jsx("div",{className:"rev-meta",children:m.date})]})]}),c.jsxs("a",{href:"https://www.google.com/maps/search/OnGuard+Pest+Controls+Reviews",target:"_blank",rel:"noopener noreferrer",className:"rev-google",style:{textDecoration:"none"},children:[c.jsx(h,{})," Google"]})]})]})},g))}),c.jsx("div",{className:"trev-dots-wrap",children:nn.map((m,g)=>c.jsx("button",{ref:w=>o.current[g]=w,className:`trev-dot${g===0?" trev-dot-active":""}`,"aria-label":`Review ${g+1}`,onClick:()=>p(g)},g))})]})]})]})}const D1="/assets/phone-call--D1Vtx5W.png",I1="/assets/map-C9faDhnE.png",F1="/assets/gmail-4Sl8ZAiE.png",B1="/assets/clock-VxTT37Sj.png",H1="/assets/pin-Co34plHx.png";P.registerPlugin(B);function jk(){const t=b.useRef(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef(),[o,s]=b.useState(!1),[a,l]=b.useState({name:"",phone:"",svc:"",msg:""});b.useEffect(()=>{const h=()=>{if(!t.current)return;const m=t.current.getBoundingClientRect(),g=window.innerHeight/2-m.top-m.height/2;P.set(e.current,{y:g*.48}),P.set(r.current,{y:g*.28})};return window.addEventListener("scroll",h,{passive:!0}),P.fromTo(n.current.children,{x:-82,opacity:0},{x:0,opacity:1,duration:1,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:t.current,start:"top 70%"}}),P.fromTo(i.current,{x:82,opacity:0,scale:.95},{x:0,opacity:1,scale:1,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:t.current,start:"top 70%"}}),()=>window.removeEventListener("scroll",h)},[]);const u={width:"100%",background:"rgba(255,255,255,.94)",border:"1.5px solid rgba(27,58,107,.1)",borderRadius:10,padding:"14px 18px",fontFamily:"'Lato',sans-serif",fontSize:14,color:"#0a1628",outline:"none",transition:"border-color .3s,box-shadow .3s,background .3s"},d=h=>{h.target.style.borderColor=W,h.target.style.boxShadow="0 0 0 3.5px rgba(91,199,40,.13)",h.target.style.background="#fff"},f=h=>{h.target.style.borderColor="rgba(27,58,107,.1)",h.target.style.boxShadow="none",h.target.style.background="rgba(255,255,255,.94)"},p=[[D1,"Call Pest Control Experts","+91 79074 96956","tel:+917907496956"],[F1,"Email","Onguardpestcontrols@gmail.com","mailto:Onguardpestcontrols@gmail.com"],[I1,"Head Office",`KOTTOOR PLAZA
TC 24/1033, Third Floor
Thycaud P.O
Thiruvananthapuram – 695014`,"https://maps.google.com/?q=KOTTOOR+PLAZA+TC+24/1033+Thycaud+Thiruvananthapuram"],[H1,"Branch Office",`Sri Narasimha Shopping Complex
Near Govt. Secretariat, Opp. YMCA Road
Statue, Palayam
Thiruvananthapuram – 695001`,"https://maps.google.com/?q=Narasimha+Shopping+Complex+Palayam+Thiruvananthapuram"],[B1,"Hours","Mon–Sun | 24/7 service available ",null]];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        #contact { position:relative; overflow:hidden; }

        .contact-layer { position:absolute; inset:-22% 0 -22%; will-change:transform; }
        .contact-layer img { width:100%; height:100%; object-fit:cover; }
        .contact-overlay { position:absolute; inset:0; background:rgba(5,9,26,.94); z-index:2; }
        .contact-glow {
          position:absolute; top:12%; left:8%; width:380px; height:380px;
          border-radius:50%; z-index:3; pointer-events:none;
          background:radial-gradient(circle,rgba(91,199,40,.07) 0%,transparent 68%);
        }
        .contact-content { position:relative; z-index:4; padding:140px 60px; }

        .info-icon {
          width:50px; height:50px; border-radius:13px; flex-shrink:0;
          background:rgba(91,199,40,.12); border:1px solid rgba(91,199,40,.28);
          display:flex; align-items:center; justify-content:center;
          font-size:20px; transition:all .3s;
        }
        .info-icon:hover {
          background:rgba(91,199,40,.24);
          transform:scale(1.1);
        }

        .form-card {
          background:rgba(255,255,255,.97); border-radius:22px;
          padding:52px 46px; box-shadow:0 44px 110px rgba(0,0,0,.34);
        }
        .form-label-og {
          display:block; font-family:'Lato',sans-serif; font-size:11px;
          font-weight:700; letter-spacing:1px; color:${_i};
          margin-bottom:8px; text-transform:uppercase;
        }
        .form-submit-btn {
          width:100%; background:${W}; color:#fff; border:none;
          border-radius:50px; font-family:'Lato',sans-serif;
          font-size:15px; font-weight:900; padding:17px;
          box-shadow:0 10px 34px rgba(91,199,40,.46);
          transition:all .35s; letter-spacing:.3px; cursor:pointer;
        }
        .form-submit-btn:hover {
          background:${ah};
          transform:translateY(-3px) scale(1.02);
        }

        .success-card {
          background:#fff; border-radius:22px; padding:72px;
          text-align:center; box-shadow:0 44px 110px rgba(0,0,0,.34);
        }
.info-row:hover .info-icon {
  background: rgba(91,199,40,.24);
  transform: scale(1.1);
}
        @media(max-width:960px){ .contact-grid{ flex-direction:column !important; } }
        @media(max-width:600px){ .contact-content{ padding:80px 20px !important; } }
      `}),c.jsxs("section",{id:"contact",ref:t,children:[c.jsx("div",{ref:e,className:"contact-layer",style:{zIndex:0},children:c.jsx("img",{src:mo.contactBg,alt:"Pest control service in Trivandrum Kerala"})}),c.jsx("div",{ref:r,className:"contact-layer",style:{zIndex:1,mixBlendMode:"multiply",opacity:.4},children:c.jsx("img",{src:mo.contactL2,alt:"Professional pest control team working"})}),c.jsx("div",{className:"contact-overlay"}),c.jsx("div",{className:"contact-glow"}),c.jsx("div",{className:"contact-content",children:c.jsx("div",{style:{maxWidth:1220,margin:"0 auto"},children:c.jsxs("div",{className:"row g-5 align-items-start",children:[c.jsx("div",{className:"col-lg-6",children:c.jsxs("div",{ref:n,children:[c.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[c.jsx("div",{style:{width:44,height:3,background:W,borderRadius:2}}),c.jsx("span",{style:{fontFamily:"'Lato',sans-serif",fontSize:12,fontWeight:700,letterSpacing:2.2,color:W,textTransform:"uppercase"},children:"Reach Out"})]}),c.jsxs("h2",{style:{fontFamily:"'Lato',sans-serif",fontSize:"clamp(28px,3.8vw,58px)",fontWeight:900,color:"#fff",margin:"0 0 18px",lineHeight:1.05,letterSpacing:-.8},children:["Book Pest Control ",c.jsx("span",{style:{color:W},children:"in "}),c.jsx("br",{}),"Trivandrum Today"]}),c.jsx("p",{style:{fontFamily:"'Lato',sans-serif",fontSize:15,color:"rgba(255,255,255,.5)",lineHeight:1.88,margin:"0 0 15px"},children:"Looking for pest control in Trivandrum? Book a free inspection today. We provide termite control, mosquito control, cockroach removal, and rodent control services with safe and effective solutions."}),c.jsx("h2",{style:{display:"none"},children:"Pest Control Contact in Trivandrum Kerala – Book Free Inspection for Termite, Mosquito, Cockroach and Rodent Control"}),p.map(([h,m,g,w],v)=>c.jsxs("div",{className:"d-flex gap-3 mb-4",onClick:()=>w&&window.open(w,"_blank"),style:{cursor:w?"pointer":"default"},children:[c.jsx("div",{className:"info-icon",style:m==="Branch Office"?{background:"rgba(91,199,40,.07)",border:"1px solid rgba(91,199,40,.18)"}:{},children:c.jsx("img",{src:h,alt:"logo",style:{width:20,height:20}})}),c.jsxs("div",{children:[c.jsx("div",{style:{fontFamily:"'Lato',sans-serif",fontSize:10,fontWeight:700,letterSpacing:1.8,color:W,marginBottom:4,textTransform:"uppercase"},children:m}),c.jsx("div",{style:{fontFamily:"'Lato',sans-serif",fontSize:14,color:"rgba(255,255,255,.78)",lineHeight:1.7,textDecoration:"none",transition:"color .2s, text-decoration .2s"},onMouseEnter:x=>{w&&(x.currentTarget.style.textDecoration="underline",x.currentTarget.style.textDecorationColor="rgba(91,199,40,.5)",x.currentTarget.style.textUnderlineOffset="3px",x.currentTarget.style.color="rgba(255,255,255,1)")},onMouseLeave:x=>{x.currentTarget.style.textDecoration="none",x.currentTarget.style.color="rgba(255,255,255,.78)"},children:g})]})]},v))]})}),c.jsx("div",{className:"col-lg-6",children:c.jsx("div",{ref:i,children:o?c.jsxs("div",{className:"success-card",children:[c.jsx("div",{style:{fontSize:68,marginBottom:18},children:"🎉"}),c.jsx("h3",{style:{fontFamily:"'Lato',sans-serif",fontSize:28,fontWeight:900,color:W,margin:"0 0 12px"},children:"Inspection Booked!"}),c.jsx("p",{style:{fontFamily:"'Lato',sans-serif",fontSize:15,color:_i},children:"We'll call within 2 hours to confirm your free slot."})]}):c.jsxs("div",{className:"form-card",children:[c.jsx("h3",{style:{fontFamily:"'Lato',sans-serif",fontSize:23,fontWeight:900,color:xr,margin:"0 0 30px",letterSpacing:-.3},children:"Schedule Free Inspection"}),c.jsx("div",{className:"row g-3 mb-3",children:[["Full Name *","text","Your Name","name"],["Phone *","tel","+91 XXXXX XXXXX","phone"]].map(([h,m,g,w])=>c.jsxs("div",{className:"col-12 col-sm-6",children:[c.jsx("label",{className:"form-label-og",children:h}),c.jsx("input",{required:!0,type:m,placeholder:g,value:a[w],onChange:v=>l({...a,[w]:v.target.value}),style:u,onFocus:d,onBlur:f})]},w))}),c.jsxs("div",{className:"mb-3",children:[c.jsx("label",{className:"form-label-og",children:"Service Needed"}),c.jsxs("select",{value:a.svc,onChange:h=>l({...a,svc:h.target.value}),style:{...u,appearance:"none",cursor:"pointer"},onFocus:d,onBlur:f,children:[c.jsx("option",{value:"",children:"Select a service..."}),c.jsx("option",{children:"🐭 Rodent Control Services"}),c.jsx("option",{children:"🪳 Cockroach Control Services"}),c.jsx("option",{children:"🛏️ Bed Bug Control Services"}),c.jsx("option",{children:"🦟 Mosquito Control Services"}),c.jsx("option",{children:"🪰 Housefly Services"}),c.jsx("option",{children:"🐛 Termite Control Services"}),c.jsx("option",{children:"🪵 Wood Borer Control"}),c.jsx("option",{children:"🐝 Honey Bee Removal Service"}),c.jsx("option",{children:"🐍 Snake Control Service"}),c.jsx("option",{children:"🧼 Deep Cleaning Services"}),c.jsx("option",{children:"🧴 Disinfection & Sanitization"}),c.jsx("option",{children:"🐜 Ant Control Services"})]})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"form-label-og",children:"Message"}),c.jsx("textarea",{placeholder:"Describe your pest problem...",rows:4,value:a.msg,onChange:h=>l({...a,msg:h.target.value}),style:{...u,resize:"vertical"},onFocus:d,onBlur:f})]}),c.jsx("button",{className:"form-submit-btn",onClick:()=>{if(!a.name||!a.phone){alert("Please enter your name and phone number.");return}const h=encodeURIComponent(`Hello OnGuard! 👋

I'd like to book a Free Inspection.

*Name:* ${a.name}
*Phone:* ${a.phone}
*Service:* ${a.svc||"Not specified"}
*Message:* ${a.msg||"—"}`);window.open(`https://wa.me/917907496956?text=${h}`,"_blank")},children:"Book Free Pest Control Inspection"}),c.jsx("p",{style:{textAlign:"center",fontFamily:"'Lato',sans-serif",fontSize:12,color:_i,marginTop:16},children:"100% confidential. No spam, ever."})]})})})]})})})]})]})}const Nk="/assets/facebook-DwJsftEt.png",Ak="/assets/instagram-Cy4EnDvP.png",Rk="/assets/town-CigLFIWM.jpg",Pk="/assets/quick-Cj4ORE7H.jpg",zk="/assets/whatsapp-Bv3ceAgd.png";function Lk(){const t=Yn(),e=["🐭 Rodent Control Services","🪳 Cockroach Control Services","🦟 Mosquito Control Services","🪰 Housefly Services","🐛 Termite Control Services","🐜 Ant Control Services"],r=[{label:"About Us",action:()=>{t("/about-us"),setTimeout(()=>{var s;return(s=document.getElementById("about"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},100)}},{label:"Our Process",action:()=>{t("#process"),setTimeout(()=>{var s;return(s=document.getElementById("process"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},100)}},{label:"Review",action:()=>{t("#review"),setTimeout(()=>{var s;return(s=document.getElementById("review"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},100)}},{label:"Blog",action:()=>{t("#blog"),setTimeout(()=>{var s;return(s=document.getElementById("blog"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},100)}}],n=[{ic:D1,label:"+91 79074 96956",href:"tel:+917907496956"},{ic:F1,label:"Onguardpestcontrols@gmail.com",href:"mailto:Onguardpestcontrols@gmail.com"},{ic:I1,label:`KOTTOOR PLAZA, TC 24/1033
Third Floor, Thycaud P.O
Thiruvananthapuram – 695014`,href:"https://maps.google.com/?q=KOTTOOR+PLAZA+TC+24/1033+Thycaud+Thiruvananthapuram"},{ic:H1,label:`Sri Narasimha Shopping Complex
Opp. YMCA Road, Statue, Palayam
Thiruvananthapuram – 695001`,href:"https://maps.google.com/?q=Narasimha+Shopping+Complex+Palayam+Thiruvananthapuram"},{ic:B1,label:"Mon–Sun | 24/7 service available",href:null}],i=[{img:Nk,href:"https://www.facebook.com/onguardpestcontrols",label:"Facebook"},{img:Ak,href:"https://www.instagram.com/onguardpestcontrols/",label:"Instagram"},{img:Rk,href:"https://townin.com/Thiruvananthapuram/search/48399/onguard-pest-controls",label:"Townscript"},{img:Pk,href:"https://www.quickerala.com/trivandrum/palayam/onguard-pest-controls/461055",label:"Quick Kerala"}],o={fontFamily:"'Lato',sans-serif",fontSize:13,color:"rgba(255,255,255,.28)",marginBottom:11,cursor:"pointer",display:"block",transition:"color .25s,transform .25s",fontWeight:400};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @keyframes ripple {
          0%  { box-shadow: 0 0 0 0 rgba(91,199,40,.65); }
          70% { box-shadow: 0 0 0 24px rgba(91,199,40,0); }
          100%{ box-shadow: 0 0 0 0 rgba(91,199,40,0); }
        }

        #footer {
          background: #04091a;
          border-top: 3px solid ${W};
          padding: 76px 60px 34px;
          position: relative; overflow: hidden;
        }
        #footer::after {
          content: ''; position: absolute; bottom: 0; right: 0;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(27,58,107,.28) 0%, transparent 68%);
          pointer-events: none;
        }

        .footer-col-title {
          font-family: 'Lato',sans-serif; font-size: 13px; font-weight: 900;
          color: #fff; margin-bottom: 20px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(91,199,40,.18); letter-spacing: .3px;
        }

        .social-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-family: 'Lato',sans-serif; font-size: 11px;
          font-weight: 900; color: rgba(255,255,255,.28);
          transition: all .3s; text-decoration: none;
        }
        .social-icon:hover {
          background: ${W}; color: #fff !important;
          border-color: ${W}; transform: translateY(-3px);
        }

        .footer-link:hover {
          color: ${W} !important;
          transform: translateX(5px) !important;
        }

        .footer-contact-item {
          display: flex; gap: 10px; align-items: flex-start;
          margin-bottom: 14px; cursor: pointer;
          transition: opacity .25s;
        }
        .footer-contact-item:hover { opacity: 1 !important; }
        .footer-contact-item:hover .footer-contact-text {
          color: ${W} !important;
        }
        .footer-contact-ic {
          font-size: 15px; flex-shrink: 0; margin-top: 1px;
        }
        .footer-contact-text {
          font-family: 'Lato',sans-serif; font-size: 13px;
          color: rgba(255,255,255,.28); line-height: 1.7;
          white-space: pre-line;
          transition: color .25s;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,.05);
          padding-top: 26px; margin-top: 56px;
        }

        .call-fab {
          position: fixed; bottom: 32px; right: 32px; z-index: 9999;
          width: 62px; height: 62px; border-radius: 50%;
          background: ${W}; display: flex; align-items: center;
          justify-content: center; font-size: 28px; text-decoration: none;
          animation: ripple 2.5s infinite;
          box-shadow: 0 10px 38px rgba(91,199,40,.58);
          transition: transform .5s cubic-bezier(.34,1.56,.64,1);
        }
        .call-fab:hover { transform: scale(1.1); }

        @media (max-width: 960px) {
          #footer { padding: 52px 24px 26px !important; }
        }
      `}),c.jsx("footer",{id:"footer",children:c.jsxs("div",{style:{maxWidth:1220,margin:"0 auto",position:"relative",zIndex:1},children:[c.jsxs("div",{className:"row g-5 mb-4",children:[c.jsxs("div",{className:"col-lg-3",children:[c.jsx("div",{className:"mb-3",children:c.jsx(O1,{tc:"#fff",white:!0})}),c.jsx("p",{style:{fontFamily:"'Lato',sans-serif",fontSize:13,color:"rgba(255,255,255,.27)",lineHeight:1.9,maxWidth:238,marginBottom:24},children:"Kerala's trusted pest control experts since 2010. Eco-friendly, certified, always on guard."}),c.jsx("div",{className:"d-flex gap-2",children:i.map(s=>c.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"social-icon",title:s.label,children:c.jsx("img",{src:s.img,alt:s.label,style:{width:20,height:20,objectFit:"contain",borderRadius:"4px",opacity:.6,transition:"opacity .3s"}})},s.label))})]}),c.jsxs("div",{className:"col-6 col-lg-3",children:[c.jsx("div",{className:"footer-col-title",children:"Services"}),c.jsx("div",{children:e.map(s=>{const a=s.replace(/^\S+\s/,""),l=M1[a];return c.jsx("div",{className:"footer-link",style:o,onClick:()=>{l&&(t(`/services/${l}`),window.scrollTo({top:0,behavior:"smooth"}))},children:s},s)})})]}),c.jsxs("div",{className:"col-6 col-lg-2",children:[c.jsx("div",{className:"footer-col-title",children:"Company"}),r.map(s=>c.jsx("div",{className:"footer-link",style:o,onClick:s.action,children:s.label},s.label))]}),c.jsxs("div",{className:"col-lg-4",children:[c.jsx("div",{className:"footer-col-title",children:"Contact"}),n.map((s,a)=>c.jsxs("div",{className:"footer-contact-item",onClick:()=>s.href&&window.open(s.href,"_blank"),style:{cursor:s.href?"pointer":"default"},children:[c.jsx("img",{src:s.ic,alt:"",style:{width:18,height:18,objectFit:"contain",flexShrink:0,marginTop:2,opacity:.3}}),c.jsx("span",{className:"footer-contact-text",children:s.label})]},a))]})]}),c.jsxs("div",{className:"footer-bottom d-flex justify-content-between flex-wrap gap-3",children:[c.jsx("span",{style:{fontFamily:"'Lato',sans-serif",fontSize:12,color:"rgba(255,255,255,.15)"},children:"© 2025 OnGuard Pest Controls. All rights reserved."}),c.jsx("div",{className:"d-flex gap-4",children:["Privacy Policy","Terms","Sitemap"].map(s=>c.jsx("span",{style:{fontFamily:"'Lato',sans-serif",fontSize:12,color:"rgba(255,255,255,.15)",cursor:"pointer",transition:"color .25s"},onMouseEnter:a=>a.target.style.color=W,onMouseLeave:a=>a.target.style.color="rgba(255,255,255,.15)",children:s},s))})]})]})}),c.jsx("a",{href:"https://wa.me/917907496956",target:"_blank",rel:"noopener noreferrer",className:"call-fab",title:"Chat on WhatsApp",children:c.jsx("img",{src:zk,alt:"WhatsApp",style:{width:34,height:34,objectFit:"contain"}})})]})}P.registerPlugin(B);function Ok(){const t=Yn(),e=b.useRef(),r=b.useRef([]);b.useEffect(()=>(window.scrollTo(0,0),P.fromTo(e.current,{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:"power3.out"}),r.current.forEach(l=>{l&&P.fromTo(l,{opacity:0,y:50},{opacity:1,y:0,duration:.75,ease:"power3.out",scrollTrigger:{trigger:l,start:"top 82%"}})}),()=>B.getAll().forEach(l=>l.kill())),[]);const n=l=>u=>{r.current[l]=u},i=[{icon:"🪳",name:"General Pest Control",desc:"Protection against common household pests"},{icon:"🐀",name:"Rodent Control",desc:"Effective elimination of rats and mice"},{icon:"🪲",name:"Cockroach Control",desc:"Advanced gel and spray treatments"},{icon:"🐜",name:"Termite Control",desc:"Pre- and post-construction solutions"},{icon:"🛏️",name:"Bed Bug Treatment",desc:"Complete eradication methods"},{icon:"🦟",name:"Mosquito Control",desc:"Fogging and larval control"},{icon:"🐝",name:"Ant Control",desc:"Colony elimination and prevention"},{icon:"🪰",name:"Housefly Control",desc:"Hygiene-focused fly management"},{icon:"🪵",name:"Wood Borer Treatment",desc:"Protection for wooden structures"},{icon:"🐝",name:"Honey Bee Removal",desc:"Safe and eco-friendly relocation"},{icon:"🐍",name:"Snake Control",desc:"Humane capture and removal services"},{icon:"🧹",name:"Deep Cleaning Services",desc:"Thorough cleaning for homes and businesses"},{icon:"🧴",name:"Disinfection & Sanitization",desc:"Advanced hygiene solutions"}],o=[{step:"01",title:"Inspection",desc:"Detailed assessment of the problem area and infestation level."},{step:"02",title:"Identification",desc:"Understanding the pest type, species, and severity of the problem."},{step:"03",title:"Customized Plan",desc:"Tailored treatment strategy designed for your specific environment."},{step:"04",title:"Execution",desc:"Safe, precise, and effective application of treatments."},{step:"05",title:"Follow-Up",desc:"Ongoing monitoring and preventive support for long-term protection."}],s=[{icon:"👷",title:"Professional Expertise",desc:"Trained technicians with in-depth knowledge of pest behavior and control methods."},{icon:"🔬",title:"Advanced Techniques",desc:"Use of modern tools, eco-friendly products, and scientifically proven methods."},{icon:"🎯",title:"Customized Solutions",desc:"Services tailored to suit different environments and infestation levels."},{icon:"🛡️",title:"Safety & Compliance",desc:"Use of approved chemicals and strict safety protocols for people and pets."},{icon:"⭐",title:"Customer Satisfaction",desc:"Focus on delivering reliable service, timely response, and lasting results."}],a=[{icon:"🏠",label:"Residential Homes & Apartments"},{icon:"🏢",label:"Offices & Corporate Spaces"},{icon:"🍽️",label:"Restaurants & Hotels"},{icon:"🏥",label:"Hospitals & Healthcare Facilities"},{icon:"🏫",label:"Schools & Educational Institutions"},{icon:"🏭",label:"Factories & Warehouses"}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');

        .ap-root {
          background: #f8f9f4;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Top nav bar ── */
        .ap-topbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,.07);
          padding: 14px 48px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ap-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          font-weight: 700; color: #0a1628;
              padding: 5px 13px;border-radius: 50px;
          transition: all .25s;background: rgba(91,199,40,.1); color: #5bc728 !important;
        }
        .ap-back-btn:hover {    background: rgb(91 199 40 / 79%);
    color: #f8f9fa !important; }
        .ap-topbar-logo {
          font-family: 'Lato', sans-serif; font-size: 18px;
          font-weight: 900; color: #0a1628; letter-spacing: -0.5px;
        }
        .ap-topbar-logo span { color: #5bc728; }

        /* ── Hero ── */
        .ap-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a2f50 60%, #0d2010 100%);
          padding: 100px 48px 80px;
          position: relative; overflow: hidden;
        }
        .ap-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.04) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }
        .ap-hero-glow {
          position: absolute; top: -80px; right: -80px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .ap-hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 2; }
        .ap-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(91,199,40,.15); border: 1px solid rgba(91,199,40,.4);
          border-radius: 50px; padding: 7px 18px; margin-bottom: 24px;
          font-size: 11px; font-weight: 700; color: #5bc728;
          letter-spacing: 2px; text-transform: uppercase;
        }
        .ap-hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #5bc728; }
        .ap-hero-h1 {
          font-family: 'Lato', sans-serif; font-size: clamp(36px, 5vw, 64px);
          font-weight: 900; color: #fff; line-height: 1.05;
          letter-spacing: -1px; margin: 0 0 20px;
        }
        .ap-hero-h1 em { font-style: normal; color: #5bc728; }
        .ap-hero-sub {
          font-size: 16px; color: rgba(255,255,255,.6);
          line-height: 1.85; max-width: 640px; font-weight: 300;
        }
        .ap-hero-stats {
          display: flex; gap: 48px; margin-top: 48px; flex-wrap: wrap;
        }
        .ap-hero-stat-num {
          font-family: 'Playfair Display', sans-serif;
          font-size: 36px; font-weight: 900; color: #fff; line-height: 1;
        }
        .ap-hero-stat-num span { color: #5bc728; }
        .ap-hero-stat-lbl {
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,.4);
          letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px;
        }

        /* ── Main content ── */
        .ap-content { max-width: 1100px; margin: 0 auto; padding: 0 48px 100px; }

        /* ── Section blocks ── */
        .ap-section { margin-top: 80px; }
        .ap-section-label {
          display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
        }
        .ap-section-bar {
          height: 3px; width: 32px;
          background: linear-gradient(90deg, #5bc728, #3fa81a); border-radius: 2px;
        }
        .ap-section-tag {
          font-size: 11px; font-weight: 700; color: #5bc728;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .ap-section-h2 {
          font-family: 'Lato', sans-serif; font-size: clamp(24px, 3vw, 38px);
          font-weight: 900; color: #0a1628; letter-spacing: -0.5px; margin: 0 0 16px;
        }
        .ap-section-body {
          font-size: 15px; color: #5a6476; line-height: 1.9; max-width: 720px;
        }

        /* ── Overview card ── */
        .ap-overview-card {
          background: #fff; border-radius: 20px;
          padding: 40px 44px; margin-top: 24px;
          box-shadow: 0 8px 40px rgba(0,0,0,.06);
          border-left: 4px solid #5bc728;
        }
        .ap-overview-card p {
          font-size: 15px; color: #5a6476; line-height: 1.95; margin: 0 0 16px;
        }
        .ap-overview-card p:last-child { margin: 0; }

        /* ── Service grid ── */
        .ap-services-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px; margin-top: 28px;
        }
        .ap-service-card {
          background: #fff; border-radius: 14px; padding: 20px 22px;
          display: flex; align-items: flex-start; gap: 14px;
          box-shadow: 0 4px 20px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05);
          transition: all .25s;
        }
        .ap-service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(91,199,40,.15);
          border-color: rgba(91,199,40,.25);
        }
        .ap-service-icon {
          width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
          background: rgba(91,199,40,.1); border: 1px solid rgba(91,199,40,.2);
          display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .ap-service-name {
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          color: #0a1628; line-height: 1.3;
        }
        .ap-service-desc {
          font-size: 12px; color: #9aa5b8; margin-top: 3px; line-height: 1.5;
        }

        /* ── Approach steps ── */
        .ap-steps { display: flex; flex-direction: column; gap: 0; margin-top: 28px; }
        .ap-step {
          display: flex; gap: 24px; padding: 24px 0;
          border-bottom: 1px solid rgba(0,0,0,.06); position: relative;
        }
        .ap-step:last-child { border-bottom: none; }
        .ap-step-num {
          font-family: 'Playfair Display', sans-serif;
          font-size: 36px; font-weight: 900; color: rgba(91,199,40,.2);
          line-height: 1; flex-shrink: 0; width: 56px;
          transition: color .25s;
        }
        .ap-step:hover .ap-step-num { color: #5bc728; }
        .ap-step-content {}
        .ap-step-title {
          font-family: 'DM Sans', sans-serif; font-size: 16px;
          font-weight: 700; color: #0a1628; margin-bottom: 6px;
        }
        .ap-step-desc { font-size: 14px; color: #5a6476; line-height: 1.7; }

        /* ── Key features ── */
        .ap-features-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px; margin-top: 28px;
        }
        .ap-feat-card {
          background: #fff; border-radius: 16px; padding: 24px 26px;
          box-shadow: 0 4px 24px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05);
          transition: all .25s;
        }
        .ap-feat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(91,199,40,.12);
        }
        .ap-feat-icon-wrap {
          width: 48px; height: 48px; border-radius: 13px; margin-bottom: 14px;
          background: linear-gradient(135deg, rgba(91,199,40,.15), rgba(91,199,40,.05));
          border: 1px solid rgba(91,199,40,.2);
          display: flex; align-items: center; justify-content: center; font-size: 22px;
        }
        .ap-feat-title {
          font-family: 'DM Sans', sans-serif; font-size: 15px;
          font-weight: 700; color: #0a1628; margin-bottom: 8px;
        }
        .ap-feat-desc { font-size: 13px; color: #5a6476; line-height: 1.7; }

        /* ── Industries ── */
        .ap-industries-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px; margin-top: 28px;
        }
        .ap-industry-pill {
          background: #fff; border-radius: 12px; padding: 16px 20px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 3px 16px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05);
          transition: all .2s;
        }
        .ap-industry-pill:hover {
          border-color: rgba(91,199,40,.3);
          background: rgba(91,199,40,.04);
        }
        .ap-industry-icon { font-size: 20px; }
        .ap-industry-label {
          font-size: 13px; font-weight: 600; color: #1a2540; line-height: 1.3;
        }

        /* ── Mission / Vision ── */
        .ap-mv-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
          margin-top: 28px;
        }
        .ap-mv-card {
          border-radius: 18px; padding: 32px 34px; position: relative; overflow: hidden;
        }
        .ap-mv-card.mission {
          background: linear-gradient(135deg, #0a1628, #1a2f50);
        }
        .ap-mv-card.vision {
          background: linear-gradient(135deg, #3fa81a, #5bc728);
        }
        .ap-mv-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .ap-mv-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; margin-bottom: 14px;
          position: relative; z-index: 1;
        }
        .ap-mv-card.mission .ap-mv-label { color: #5bc728; }
        .ap-mv-card.vision  .ap-mv-label { color: rgba(255,255,255,.7); }
        .ap-mv-text {
          font-family: 'DM Sans', sans-serif; font-size: 15px;
          line-height: 1.85; font-weight: 400;
          position: relative; z-index: 1;
        }
        .ap-mv-card.mission .ap-mv-text { color: rgba(255,255,255,.75); }
        .ap-mv-card.vision  .ap-mv-text { color: rgba(255,255,255,.9); }

        /* ── CTA band ── */
        .ap-cta-band {
          background: linear-gradient(135deg, #5bc728 0%, #3fa81a 100%);
          border-radius: 20px; padding: 48px 52px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; margin-top: 72px;
          box-shadow: 0 24px 64px rgba(91,199,40,.3);
          flex-wrap: wrap;
        }
        .ap-cta-title {
          font-family: 'Lato', sans-serif; font-size: 28px;
          font-weight: 900; color: #fff; margin-bottom: 8px;
        }
        .ap-cta-sub { font-size: 14px; color: rgba(255,255,255,.8); }
        .ap-cta-btn {
          background: #fff; color: #3fa81a; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          padding: 16px 36px; border-radius: 50px;
          box-shadow: 0 8px 28px rgba(0,0,0,.15);
          transition: all .3s; white-space: nowrap;
        }
        .ap-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,.2); }

        @media (max-width: 768px) {
          .ap-hero { padding: 70px 24px 60px; }
          .ap-content { padding: 0 24px 80px; }
          .ap-topbar { padding: 12px 24px; }
          .ap-mv-grid { grid-template-columns: 1fr; }
          .ap-cta-band { padding: 36px 28px; }
          .ap-hero-stats { gap: 28px; }
        }
          @media (max-width: 600px){
          .ap-topbar{
          display:block;
          }
          .ap-topbar-logo{
              text-align: center;
          }
          
          }
      `}),c.jsxs("div",{className:"ap-root",children:[c.jsxs("div",{className:"ap-topbar",children:[c.jsx("button",{className:"ap-back-btn",onClick:()=>t("/#about"),children:"← Home"}),c.jsxs("div",{className:"ap-topbar-logo",children:["OnGuard ",c.jsx("span",{children:"Pest Controls"})]}),c.jsx("div",{style:{width:120}})," "]}),c.jsxs("div",{className:"ap-hero",ref:e,children:[c.jsx("div",{className:"ap-hero-glow"}),c.jsxs("div",{className:"ap-hero-inner",children:[c.jsxs("div",{className:"ap-hero-tag",children:[c.jsx("span",{className:"ap-hero-dot"}),"Company Overview"]}),c.jsxs("h1",{className:"ap-hero-h1",children:["About ",c.jsx("em",{children:"OnGuard"}),c.jsx("br",{}),"Pest Controls"]}),c.jsx("p",{className:"ap-hero-sub",children:"A professional pest management and hygiene service provider based in Kerala, serving residential, commercial, and industrial clients since 2010 with modern techniques, trained expertise, and customer-focused service."}),c.jsx("div",{className:"ap-hero-stats",children:[["15","+","Years Experience"],["13","+","Services Offered"],["6","+","Sectors Served"],["24"," Hrs","Always Open"]].map(([l,u,d])=>c.jsxs("div",{children:[c.jsxs("div",{className:"ap-hero-stat-num",children:[l,c.jsx("span",{children:u})]}),c.jsx("div",{className:"ap-hero-stat-lbl",children:d})]},d))})]})]}),c.jsxs("div",{className:"ap-content",children:[c.jsxs("div",{className:"ap-section",ref:n(0),children:[c.jsxs("div",{className:"ap-section-label",children:[c.jsx("div",{className:"ap-section-bar"}),c.jsx("span",{className:"ap-section-tag",children:"Who We Are"})]}),c.jsx("h2",{className:"ap-section-h2",children:"Kerala's Most Trusted Pest Control Partner"}),c.jsxs("div",{className:"ap-overview-card",children:[c.jsx("p",{children:"OnGuard Pest Controls is a professional pest management and hygiene service provider based in Kerala, offering reliable and effective solutions for residential, commercial, and industrial clients since 2010. The company is dedicated to creating safe, healthy, and pest-free environments through modern techniques, trained expertise, and customer-focused service."}),c.jsx("p",{children:"OnGuard Pest Controls specializes in comprehensive pest control and cleaning services tailored to meet the unique needs of each client. With a strong focus on quality, safety, and long-term results, the company has built a reputation for delivering dependable and efficient pest management solutions."}),c.jsx("p",{children:"We provide the highest level of quality and care to residential and commercial properties. Our team will treat your home or office as though it were our own — we believe that is the cornerstone of a quality relationship. Our experience allows us to quickly and efficiently detect and eliminate pests in any environment or structure."}),c.jsx("p",{children:"From termites, ants, rats and mice to bed bugs, cockroaches, and more, OnGuard Pest Controls is determined to help you live pest-free. For each client, we create a personalized pest control plan to keep your home or office free of the harmful effects that pests can cause."})]})]}),c.jsxs("div",{className:"ap-section",ref:n(1),children:[c.jsxs("div",{className:"ap-section-label",children:[c.jsx("div",{className:"ap-section-bar"}),c.jsx("span",{className:"ap-section-tag",children:"Core Services"})]}),c.jsx("h2",{className:"ap-section-h2",children:"13+ Specialized Pest Control Services"}),c.jsx("p",{className:"ap-section-body",children:"We offer a comprehensive range of pest management and hygiene solutions, each designed to deliver complete protection tailored to your environment."}),c.jsx("div",{className:"ap-services-grid",children:i.map(l=>c.jsxs("div",{className:"ap-service-card",children:[c.jsx("div",{className:"ap-service-icon",children:l.icon}),c.jsxs("div",{children:[c.jsx("div",{className:"ap-service-name",children:l.name}),c.jsx("div",{className:"ap-service-desc",children:l.desc})]})]},l.name))})]}),c.jsxs("div",{className:"ap-section",ref:n(2),children:[c.jsxs("div",{className:"ap-section-label",children:[c.jsx("div",{className:"ap-section-bar"}),c.jsx("span",{className:"ap-section-tag",children:"Our Approach"})]}),c.jsx("h2",{className:"ap-section-h2",children:"A Systematic 5-Step Process"}),c.jsx("p",{className:"ap-section-body",children:"OnGuard follows a structured and professional approach that ensures complete pest elimination and long-term protection for every client."}),c.jsx("div",{className:"ap-steps",children:o.map(l=>c.jsxs("div",{className:"ap-step",children:[c.jsx("div",{className:"ap-step-num",children:l.step}),c.jsxs("div",{className:"ap-step-content",children:[c.jsx("div",{className:"ap-step-title",children:l.title}),c.jsx("div",{className:"ap-step-desc",children:l.desc})]})]},l.step))})]}),c.jsxs("div",{className:"ap-section",ref:n(3),children:[c.jsxs("div",{className:"ap-section-label",children:[c.jsx("div",{className:"ap-section-bar"}),c.jsx("span",{className:"ap-section-tag",children:"Key Features"})]}),c.jsx("h2",{className:"ap-section-h2",children:"Why Choose OnGuard?"}),c.jsx("div",{className:"ap-features-grid",children:s.map(l=>c.jsxs("div",{className:"ap-feat-card",children:[c.jsx("div",{className:"ap-feat-icon-wrap",children:l.icon}),c.jsx("div",{className:"ap-feat-title",children:l.title}),c.jsx("div",{className:"ap-feat-desc",children:l.desc})]},l.title))})]}),c.jsxs("div",{className:"ap-section",ref:n(4),children:[c.jsxs("div",{className:"ap-section-label",children:[c.jsx("div",{className:"ap-section-bar"}),c.jsx("span",{className:"ap-section-tag",children:"Industries Served"})]}),c.jsx("h2",{className:"ap-section-h2",children:"Serving 6+ Sectors Across Kerala"}),c.jsx("p",{className:"ap-section-body",children:"OnGuard Pest Controls provides services across multiple sectors, delivering reliable pest management wherever it's needed."}),c.jsx("div",{className:"ap-industries-grid",children:a.map(l=>c.jsxs("div",{className:"ap-industry-pill",children:[c.jsx("span",{className:"ap-industry-icon",children:l.icon}),c.jsx("span",{className:"ap-industry-label",children:l.label})]},l.label))})]}),c.jsxs("div",{className:"ap-section",ref:n(5),children:[c.jsxs("div",{className:"ap-section-label",children:[c.jsx("div",{className:"ap-section-bar"}),c.jsx("span",{className:"ap-section-tag",children:"Mission & Vision"})]}),c.jsx("h2",{className:"ap-section-h2",children:"What Drives Us Forward"}),c.jsxs("div",{className:"ap-mv-grid",children:[c.jsxs("div",{className:"ap-mv-card mission",children:[c.jsx("div",{className:"ap-mv-label",children:"Our Mission"}),c.jsx("div",{className:"ap-mv-text",children:"To provide effective, safe, and sustainable pest control and hygiene solutions that improve the quality of life for our customers — in every home and business we serve."})]}),c.jsxs("div",{className:"ap-mv-card vision",children:[c.jsx("div",{className:"ap-mv-label",children:"Our Vision"}),c.jsx("div",{className:"ap-mv-text",children:"To become a trusted and leading pest control service provider known for innovation, reliability, and customer satisfaction across Kerala and beyond."})]})]})]}),c.jsxs("div",{className:"ap-cta-band",ref:n(6),children:[c.jsxs("div",{children:[c.jsx("div",{className:"ap-cta-title",children:"Ready for a Pest-Free Environment?"}),c.jsx("div",{className:"ap-cta-sub",children:"Get a free inspection from our certified team today."})]}),c.jsx("button",{className:"ap-cta-btn",onClick:()=>{t("/"),setTimeout(()=>{var l;return(l=document.getElementById("contact"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},400)},children:"Book Free Inspection →"})]})]})]})]})}var W1={exports:{}},Mk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dk=Mk,Ik=Dk;function U1(){}function Y1(){}Y1.resetWarningCache=U1;var Fk=function(){function t(n,i,o,s,a,l){if(l!==Ik){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Y1,resetWarningCache:U1};return r.PropTypes=r,r};W1.exports=Fk();var Bk=W1.exports;const Te=Za(Bk);function Hk(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var V1=b,Wk=Hk(V1);function Tm(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Uk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var Yk=!!(typeof window<"u"&&window.document&&window.document.createElement);function Vk(t,e,r){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof r<"u"&&typeof r!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function n(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],a;function l(){a=t(s.map(function(d){return d.props})),u.canUseDOM?e(a):r&&(a=r(a))}var u=function(d){Uk(f,d);function f(){return d.apply(this,arguments)||this}f.peek=function(){return a},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var m=a;return a=void 0,s=[],m};var p=f.prototype;return p.UNSAFE_componentWillMount=function(){s.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var m=s.indexOf(this);s.splice(m,1),l()},p.render=function(){return Wk.createElement(o,this.props)},f}(V1.PureComponent);return Tm(u,"displayName","SideEffect("+n(o)+")"),Tm(u,"canUseDOM",Yk),u}}var Gk=Vk;const qk=Za(Gk);var Xk=typeof Element<"u",Kk=typeof Map=="function",$k=typeof Set=="function",Qk=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function dc(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,n,i;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!dc(t[n],e[n]))return!1;return!0}var o;if(Kk&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;for(o=t.entries();!(n=o.next()).done;)if(!dc(n.value[1],e.get(n.value[0])))return!1;return!0}if($k&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(Qk&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[n]))return!1;if(Xk&&t instanceof Element)return!1;for(n=r;n--!==0;)if(!((i[n]==="_owner"||i[n]==="__v"||i[n]==="__o")&&t.$$typeof)&&!dc(t[i[n]],e[i[n]]))return!1;return!0}return t!==t&&e!==e}var Zk=function(e,r){try{return dc(e,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Jk=Za(Zk);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Cm=Object.getOwnPropertySymbols,eS=Object.prototype.hasOwnProperty,tS=Object.prototype.propertyIsEnumerable;function rS(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function nS(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var iS=nS()?Object.assign:function(t,e){for(var r,n=rS(t),i,o=1;o<arguments.length;o++){r=Object(arguments[o]);for(var s in r)eS.call(r,s)&&(n[s]=r[s]);if(Cm){i=Cm(r);for(var a=0;a<i.length;a++)tS.call(r,i[a])&&(n[i[a]]=r[i[a]])}}return n};const oS=Za(iS);var so={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Z).map(function(t){return Z[t]});var Ce={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Xc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Qa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},sS=Object.keys(Xc).reduce(function(t,e){return t[Xc[e]]=e,t},{}),aS=[Z.NOSCRIPT,Z.SCRIPT,Z.STYLE],Kr="data-react-helmet",lS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cS=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},uS=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},dS=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Em=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},fS=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Pf=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},pS=function(e){var r=os(e,Z.TITLE),n=os(e,Qa.TITLE_TEMPLATE);if(n&&r)return n.replace(/%s/g,function(){return Array.isArray(r)?r.join(""):r});var i=os(e,Qa.DEFAULT_TITLE);return r||i||void 0},hS=function(e){return os(e,Qa.ON_CHANGE_CLIENT_STATE)||function(){}},ud=function(e,r){return r.filter(function(n){return typeof n[e]<"u"}).map(function(n){return n[e]}).reduce(function(n,i){return Gt({},n,i)},{})},gS=function(e,r){return r.filter(function(n){return typeof n[Z.BASE]<"u"}).map(function(n){return n[Z.BASE]}).reverse().reduce(function(n,i){if(!n.length)for(var o=Object.keys(i),s=0;s<o.length;s++){var a=o[s],l=a.toLowerCase();if(e.indexOf(l)!==-1&&i[l])return n.concat(i)}return n},[])},Hs=function(e,r,n){var i={};return n.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&yS("Helmet: "+e+' should be of type "Array". Instead found type "'+lS(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,s){var a={};s.filter(function(p){for(var h=void 0,m=Object.keys(p),g=0;g<m.length;g++){var w=m[g],v=w.toLowerCase();r.indexOf(v)!==-1&&!(h===Ce.REL&&p[h].toLowerCase()==="canonical")&&!(v===Ce.REL&&p[v].toLowerCase()==="stylesheet")&&(h=v),r.indexOf(w)!==-1&&(w===Ce.INNER_HTML||w===Ce.CSS_TEXT||w===Ce.ITEM_PROP)&&(h=w)}if(!h||!p[h])return!1;var x=p[h].toLowerCase();return i[h]||(i[h]={}),a[h]||(a[h]={}),i[h][x]?!1:(a[h][x]=!0,!0)}).reverse().forEach(function(p){return o.push(p)});for(var l=Object.keys(a),u=0;u<l.length;u++){var d=l[u],f=oS({},i[d],a[d]);i[d]=f}return o},[]).reverse()},os=function(e,r){for(var n=e.length-1;n>=0;n--){var i=e[n];if(i.hasOwnProperty(r))return i[r]}return null},mS=function(e){return{baseTag:gS([Ce.HREF,Ce.TARGET],e),bodyAttributes:ud(so.BODY,e),defer:os(e,Qa.DEFER),encode:os(e,Qa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ud(so.HTML,e),linkTags:Hs(Z.LINK,[Ce.REL,Ce.HREF],e),metaTags:Hs(Z.META,[Ce.NAME,Ce.CHARSET,Ce.HTTPEQUIV,Ce.PROPERTY,Ce.ITEM_PROP],e),noscriptTags:Hs(Z.NOSCRIPT,[Ce.INNER_HTML],e),onChangeClientState:hS(e),scriptTags:Hs(Z.SCRIPT,[Ce.SRC,Ce.INNER_HTML],e),styleTags:Hs(Z.STYLE,[Ce.CSS_TEXT],e),title:pS(e),titleAttributes:ud(so.TITLE,e)}},zf=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){zf(e)},0)}}(),jm=function(e){return clearTimeout(e)},xS=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||zf:global.requestAnimationFrame||zf,vS=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||jm:global.cancelAnimationFrame||jm,yS=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},Ws=null,wS=function(e){Ws&&vS(Ws),e.defer?Ws=xS(function(){Nm(e,function(){Ws=null})}):(Nm(e),Ws=null)},Nm=function(e,r){var n=e.baseTag,i=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,d=e.scriptTags,f=e.styleTags,p=e.title,h=e.titleAttributes;Lf(Z.BODY,i),Lf(Z.HTML,o),bS(p,h);var m={baseTag:No(Z.BASE,n),linkTags:No(Z.LINK,s),metaTags:No(Z.META,a),noscriptTags:No(Z.NOSCRIPT,l),scriptTags:No(Z.SCRIPT,d),styleTags:No(Z.STYLE,f)},g={},w={};Object.keys(m).forEach(function(v){var x=m[v],y=x.newTags,_=x.oldTags;y.length&&(g[v]=y),_.length&&(w[v]=m[v].oldTags)}),r&&r(),u(e,g,w)},G1=function(e){return Array.isArray(e)?e.join(""):e},bS=function(e,r){typeof e<"u"&&document.title!==e&&(document.title=G1(e)),Lf(Z.TITLE,r)},Lf=function(e,r){var n=document.getElementsByTagName(e)[0];if(n){for(var i=n.getAttribute(Kr),o=i?i.split(","):[],s=[].concat(o),a=Object.keys(r),l=0;l<a.length;l++){var u=a[l],d=r[u]||"";n.getAttribute(u)!==d&&n.setAttribute(u,d),o.indexOf(u)===-1&&o.push(u);var f=s.indexOf(u);f!==-1&&s.splice(f,1)}for(var p=s.length-1;p>=0;p--)n.removeAttribute(s[p]);o.length===s.length?n.removeAttribute(Kr):n.getAttribute(Kr)!==a.join(",")&&n.setAttribute(Kr,a.join(","))}},No=function(e,r){var n=document.head||document.querySelector(Z.HEAD),i=n.querySelectorAll(e+"["+Kr+"]"),o=Array.prototype.slice.call(i),s=[],a=void 0;return r&&r.length&&r.forEach(function(l){var u=document.createElement(e);for(var d in l)if(l.hasOwnProperty(d))if(d===Ce.INNER_HTML)u.innerHTML=l.innerHTML;else if(d===Ce.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[d]>"u"?"":l[d];u.setAttribute(d,f)}u.setAttribute(Kr,"true"),o.some(function(p,h){return a=h,u.isEqualNode(p)})?o.splice(a,1):s.push(u)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),s.forEach(function(l){return n.appendChild(l)}),{oldTags:o,newTags:s}},q1=function(e){return Object.keys(e).reduce(function(r,n){var i=typeof e[n]<"u"?n+'="'+e[n]+'"':""+n;return r?r+" "+i:i},"")},_S=function(e,r,n,i){var o=q1(n),s=G1(r);return o?"<"+e+" "+Kr+'="true" '+o+">"+Pf(s,i)+"</"+e+">":"<"+e+" "+Kr+'="true">'+Pf(s,i)+"</"+e+">"},kS=function(e,r,n){return r.reduce(function(i,o){var s=Object.keys(o).filter(function(u){return!(u===Ce.INNER_HTML||u===Ce.CSS_TEXT)}).reduce(function(u,d){var f=typeof o[d]>"u"?d:d+'="'+Pf(o[d],n)+'"';return u?u+" "+f:f},""),a=o.innerHTML||o.cssText||"",l=aS.indexOf(e)===-1;return i+"<"+e+" "+Kr+'="true" '+s+(l?"/>":">"+a+"</"+e+">")},"")},X1=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,i){return n[Xc[i]||i]=e[i],n},r)},SS=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,i){return n[sS[i]||i]=e[i],n},r)},TS=function(e,r,n){var i,o=(i={key:r},i[Kr]=!0,i),s=X1(n,o);return[$i.createElement(Z.TITLE,s,r)]},CS=function(e,r){return r.map(function(n,i){var o,s=(o={key:i},o[Kr]=!0,o);return Object.keys(n).forEach(function(a){var l=Xc[a]||a;if(l===Ce.INNER_HTML||l===Ce.CSS_TEXT){var u=n.innerHTML||n.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[l]=n[a]}),$i.createElement(e,s)})},Tn=function(e,r,n){switch(e){case Z.TITLE:return{toComponent:function(){return TS(e,r.title,r.titleAttributes)},toString:function(){return _S(e,r.title,r.titleAttributes,n)}};case so.BODY:case so.HTML:return{toComponent:function(){return X1(r)},toString:function(){return q1(r)}};default:return{toComponent:function(){return CS(e,r)},toString:function(){return kS(e,r,n)}}}},K1=function(e){var r=e.baseTag,n=e.bodyAttributes,i=e.encode,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.scriptTags,d=e.styleTags,f=e.title,p=f===void 0?"":f,h=e.titleAttributes;return{base:Tn(Z.BASE,r,i),bodyAttributes:Tn(so.BODY,n,i),htmlAttributes:Tn(so.HTML,o,i),link:Tn(Z.LINK,s,i),meta:Tn(Z.META,a,i),noscript:Tn(Z.NOSCRIPT,l,i),script:Tn(Z.SCRIPT,u,i),style:Tn(Z.STYLE,d,i),title:Tn(Z.TITLE,{title:p,titleAttributes:h},i)}},ES=function(e){var r,n;return n=r=function(i){dS(o,i);function o(){return cS(this,o),fS(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(a){return!Jk(this.props,a)},o.prototype.mapNestedChildrenToProps=function(a,l){if(!l)return null;switch(a.type){case Z.SCRIPT:case Z.NOSCRIPT:return{innerHTML:l};case Z.STYLE:return{cssText:l}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(a){var l,u=a.child,d=a.arrayTypeChildren,f=a.newChildProps,p=a.nestedChildren;return Gt({},d,(l={},l[u.type]=[].concat(d[u.type]||[],[Gt({},f,this.mapNestedChildrenToProps(u,p))]),l))},o.prototype.mapObjectTypeChildren=function(a){var l,u,d=a.child,f=a.newProps,p=a.newChildProps,h=a.nestedChildren;switch(d.type){case Z.TITLE:return Gt({},f,(l={},l[d.type]=h,l.titleAttributes=Gt({},p),l));case Z.BODY:return Gt({},f,{bodyAttributes:Gt({},p)});case Z.HTML:return Gt({},f,{htmlAttributes:Gt({},p)})}return Gt({},f,(u={},u[d.type]=Gt({},p),u))},o.prototype.mapArrayTypeChildrenToProps=function(a,l){var u=Gt({},l);return Object.keys(a).forEach(function(d){var f;u=Gt({},u,(f={},f[d]=a[d],f))}),u},o.prototype.warnOnInvalidChildren=function(a,l){return!0},o.prototype.mapChildrenToProps=function(a,l){var u=this,d={};return $i.Children.forEach(a,function(f){if(!(!f||!f.props)){var p=f.props,h=p.children,m=Em(p,["children"]),g=SS(m);switch(u.warnOnInvalidChildren(f,h),f.type){case Z.LINK:case Z.META:case Z.NOSCRIPT:case Z.SCRIPT:case Z.STYLE:d=u.flattenArrayTypeChildren({child:f,arrayTypeChildren:d,newChildProps:g,nestedChildren:h});break;default:l=u.mapObjectTypeChildren({child:f,newProps:l,newChildProps:g,nestedChildren:h});break}}}),l=this.mapArrayTypeChildrenToProps(d,l),l},o.prototype.render=function(){var a=this.props,l=a.children,u=Em(a,["children"]),d=Gt({},u);return l&&(d=this.mapChildrenToProps(l,d)),$i.createElement(e,d)},uS(o,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),o}($i.Component),r.propTypes={base:Te.object,bodyAttributes:Te.object,children:Te.oneOfType([Te.arrayOf(Te.node),Te.node]),defaultTitle:Te.string,defer:Te.bool,encodeSpecialCharacters:Te.bool,htmlAttributes:Te.object,link:Te.arrayOf(Te.object),meta:Te.arrayOf(Te.object),noscript:Te.arrayOf(Te.object),onChangeClientState:Te.func,script:Te.arrayOf(Te.object),style:Te.arrayOf(Te.object),title:Te.string,titleAttributes:Te.object,titleTemplate:Te.string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=e.peek,r.rewind=function(){var i=e.rewind();return i||(i=K1({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},n},jS=function(){return null},NS=qk(mS,wS,K1)(jS),Kc=ES(NS);Kc.renderStatic=Kc.rewind;P.registerPlugin(B);function AS(){const{slug:t}=ev(),e=Yn(),r=b.useRef(),n=b.useRef([]),i=pk[t];b.useEffect(()=>{if(window.scrollTo(0,0),!!i)return P.fromTo(r.current,{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:"power3.out"}),n.current.forEach(s=>{s&&P.fromTo(s,{opacity:0,y:50},{opacity:1,y:0,duration:.75,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 84%"}})}),()=>B.getAll().forEach(s=>s.kill())},[t,i]);const o=s=>a=>{n.current[s]=a};return i?c.jsxs(c.Fragment,{children:[c.jsxs(Kc,{children:[c.jsxs("title",{children:[i.title," in Trivandrum | OnGuard Pest Controls"]}),c.jsx("meta",{name:"description",content:`${i.title} services in Trivandrum Kerala. Professional pest control solutions with safe and effective treatment.`}),c.jsx("link",{rel:"canonical",href:`https://onguardpestcontrols.com/services/${t}`}),c.jsx("meta",{property:"og:title",content:i.title}),c.jsx("meta",{property:"og:description",content:`Professional ${i.title} in Trivandrum.`}),c.jsx("meta",{property:"og:url",content:`https://onguardpestcontrols.com/services/${t}`})]}),c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');

        .sdp-root { background: #f8f9f4; min-height: 100vh; font-family: 'DM Sans', sans-serif; }

        /* Topbar */
        .sdp-topbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.96); backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,.07);
          padding: 14px 48px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .sdp-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(91,199,40,.1); color: #5bc728 !important; border: none; cursor: pointer;
          font-family: 'DM Sans',sans-serif; font-size: 14px; font-weight: 700;
          color: #0a1628; padding: 8px 16px; border-radius: 50px; transition: all .25s;
        }
        .sdp-back-btn:hover { background: rgb(91 199 40 / 79%);
    color: #f8f9fa !important; }
        .sdp-logo { font-family: 'Lato',sans-serif; font-size: 17px; font-weight: 900; color: #0a1628; }
        .sdp-logo span { color: #5bc728; }

        /* Hero */
        .sdp-hero {
          padding: 90px 48px 70px;
          position: relative; overflow: hidden;
        }
        .sdp-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.04) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }
        .sdp-hero-glow {
          position: absolute; top: -80px; right: -80px; width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .sdp-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; }
        .sdp-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(91,199,40,.15); border: 1px solid rgba(91,199,40,.4);
          border-radius: 50px; padding: 7px 18px; margin-bottom: 24px;
          font-size: 11px; font-weight: 700; color: #5bc728;
          letter-spacing: 2px; text-transform: uppercase;
        }
        .sdp-hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #5bc728; }
        .sdp-hero-icon { font-size: 64px; margin-bottom: 20px; display: block; line-height: 1; }
        .sdp-hero-h1 {
          font-family: 'Lato',sans-serif; font-size: clamp(32px, 5vw, 60px);
          font-weight: 900; color: #fff; line-height: 1.06;
          letter-spacing: -1px; margin: 0 0 16px;
        }
        .sdp-hero-h1 em { font-style: normal; color: #5bc728; }
        .sdp-hero-tagline {
          font-size: 17px; color: rgba(255,255,255,.65);
          line-height: 1.7; max-width: 580px; font-weight: 400; margin-bottom: 36px;
        }
        .sdp-hero-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #5bc728; color: #fff; border: none; cursor: pointer;
          font-family: 'DM Sans',sans-serif; font-size: 15px; font-weight: 700;
          padding: 16px 36px; border-radius: 50px;
          box-shadow: 0 12px 40px rgba(91,199,40,.35); transition: all .3s;
        }
        .sdp-hero-cta:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(91,199,40,.45); }

        /* Content */
        .sdp-content { max-width: 1100px; margin: 0 auto; padding: 0 48px 100px; }
        .sdp-section { margin-top: 72px; }
        .sdp-section-label { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .sdp-section-bar { height: 3px; width: 32px; background: linear-gradient(90deg, #5bc728, #3fa81a); border-radius: 2px; }
        .sdp-section-tag { font-size: 11px; font-weight: 700; color: #5bc728; letter-spacing: 2.5px; text-transform: uppercase; }
        .sdp-section-h2 {
          font-family: 'Lato',sans-serif; font-size: clamp(22px, 3vw, 36px);
          font-weight: 900; color: #0a1628; letter-spacing: -0.5px; margin: 0 0 28px;
        }

        /* Intro card */
        .sdp-intro-card {
          background: #fff; border-radius: 20px; padding: 36px 40px;
          box-shadow: 0 8px 40px rgba(0,0,0,.06); border-left: 4px solid #5bc728;
          font-size: 15px; color: #5a6476; line-height: 1.9;
        }

        /* Why Important */
        .sdp-why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
        .sdp-why-card {
          background: #fff; border-radius: 16px; padding: 24px 26px;
          box-shadow: 0 4px 24px rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.05);
          transition: all .25s;
        }
        .sdp-why-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(91,199,40,.12); border-color: rgba(91,199,40,.2); }
        .sdp-why-num {
          font-family: 'Playfair Display',serif; font-size: 36px; font-weight: 900;
          color: rgba(91,199,40,.25); line-height: 1; margin-bottom: 12px;
        }
        .sdp-why-title { font-size: 15px; font-weight: 700; color: #0a1628; margin-bottom: 8px; }
        .sdp-why-desc { font-size: 13px; color: #5a6476; line-height: 1.7; }

        /* Signs */
        .sdp-signs-grid { display: flex; flex-direction: column; gap: 0; }
        .sdp-sign-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,.06);
        }
        .sdp-sign-item:last-child { border-bottom: none; }
        .sdp-sign-dot {
          width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
          background: rgba(91,199,40,.12); border: 1px solid rgba(91,199,40,.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; color: #5bc728; font-weight: 900;
        }
        .sdp-sign-text { font-size: 14px; font-weight: 500; color: #1a2540; }

        /* Methods */
        .sdp-methods-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
        .sdp-method-card {
          background: #fff; border-radius: 16px; padding: 24px 26px;
          box-shadow: 0 4px 24px rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.05);
          transition: all .25s; position: relative; overflow: hidden;
        }
        .sdp-method-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .sdp-method-card:hover::before { transform: scaleX(1); }
        .sdp-method-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(91,199,40,.12); }
        .sdp-method-name { font-size: 15px; font-weight: 700; color: #0a1628; margin-bottom: 10px; }
        .sdp-method-desc { font-size: 13px; color: #5a6476; line-height: 1.7; }

        /* Sectors */
        .sdp-sectors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
        .sdp-sector-pill {
          background: #fff; border-radius: 12px; padding: 16px 20px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 3px 16px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05); transition: all .2s;
        }
        .sdp-sector-pill:hover { border-color: rgba(91,199,40,.3); background: rgba(91,199,40,.04); }
        .sdp-sector-icon { font-size: 20px; }
        .sdp-sector-label { font-size: 13px; font-weight: 600; color: #1a2540; line-height: 1.3; }

        /* Tips */
        .sdp-tips-grid { display: flex; flex-wrap: wrap; gap: 10px; }
        .sdp-tip-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid rgba(91,199,40,.25);
          border-radius: 50px; padding: 10px 18px;
          font-size: 13px; font-weight: 600; color: #1a2540;
          box-shadow: 0 2px 10px rgba(0,0,0,.05);
        }
        .sdp-tip-check { color: #5bc728; font-weight: 900; }

        /* CTA Band */
        .sdp-cta-band {
          background: linear-gradient(135deg, #0a1628 0%, #1a2f50 100%);
          border-radius: 20px; padding: 48px 52px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          margin-top: 72px; flex-wrap: wrap;
          box-shadow: 0 24px 64px rgba(10,22,40,.25);
          position: relative; overflow: hidden;
        }
        .sdp-cta-band::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .sdp-cta-title { font-family: 'Lato',sans-serif; font-size: 26px; font-weight: 900; color: #fff; margin-bottom: 8px; position: relative; z-index: 1; }
        .sdp-cta-sub { font-size: 14px; color: rgba(255,255,255,.6); position: relative; z-index: 1; }
        .sdp-cta-btn {
          background: #5bc728; color: #fff; border: none; cursor: pointer;
          font-family: 'DM Sans',sans-serif; font-size: 15px; font-weight: 700;
          padding: 16px 36px; border-radius: 50px; white-space: nowrap;
          box-shadow: 0 12px 36px rgba(91,199,40,.4); transition: all .3s;
          position: relative; z-index: 1;
        }
        .sdp-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(91,199,40,.5); }

        /* AMC badge */
        .sdp-amc-badge {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
          background: linear-gradient(135deg, rgba(91,199,40,.1), rgba(91,199,40,.05));
          border: 1px solid rgba(91,199,40,.25); border-radius: 16px;
          padding: 24px 28px; margin-top: 24px;
        }
        .sdp-amc-icon { font-size: 32px; }
        .sdp-amc-title { font-size: 15px; font-weight: 700; color: #0a1628; }
        .sdp-amc-sub { font-size: 13px; color: #5a6476; margin-top: 3px; }

        @media (max-width: 768px) {
          .sdp-hero { padding: 70px 24px 50px; }
          .sdp-content { padding: 0 24px 80px; }
          .sdp-topbar { padding: 12px 24px; }
          .sdp-cta-band { padding: 36px 28px; }
        }
           @media (max-width: 600px){
          .sdp-topbar{
          display:block;
          }
          .sdp-logo{
              text-align: center;
          }
          
          }
      `}),c.jsxs("div",{className:"sdp-root",children:[c.jsxs("div",{className:"sdp-topbar",children:[c.jsx("button",{className:"sdp-back-btn",onClick:()=>e(-1),children:"← Home"}),c.jsxs("div",{className:"sdp-logo",children:["OnGuard ",c.jsx("span",{children:"Pest Controls"})]}),c.jsx("div",{style:{width:100}})]}),c.jsxs("div",{className:"sdp-hero",ref:r,style:{background:`linear-gradient(135deg, ${i.heroColor}ee 0%, #0a1628f0 100%)`,position:"relative"},children:[c.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${i.heroImg})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:0,filter:"brightness(0.28) saturate(1.2)"}}),c.jsx("div",{className:"sdp-hero-glow",style:{zIndex:1}}),c.jsxs("div",{className:"sdp-hero-inner",style:{position:"relative",zIndex:2},children:[c.jsxs("div",{className:"sdp-hero-tag",children:[c.jsx("span",{className:"sdp-hero-dot"}),"OnGuard Pest Controls"]}),c.jsx("span",{className:"sdp-hero-icon",children:i.icon}),c.jsx("h1",{className:"sdp-hero-h1",children:i.title}),c.jsx("p",{className:"sdp-hero-tagline",children:i.tagline}),c.jsx("button",{className:"sdp-hero-cta",onClick:()=>{e("/"),setTimeout(()=>{var s;return(s=document.getElementById("contact"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},400)},children:"Get Free Inspection →"})]})]}),c.jsxs("div",{className:"sdp-content",children:[c.jsxs("div",{className:"sdp-section",ref:o(0),children:[c.jsxs("div",{className:"sdp-section-label",children:[c.jsx("div",{className:"sdp-section-bar"}),c.jsx("span",{className:"sdp-section-tag",children:"Overview"})]}),c.jsx("h2",{className:"sdp-section-h2",children:"About This Service"}),c.jsx("div",{className:"sdp-intro-card",children:i.intro})]}),c.jsxs("div",{className:"sdp-section",ref:o(1),children:[c.jsxs("div",{className:"sdp-section-label",children:[c.jsx("div",{className:"sdp-section-bar"}),c.jsx("span",{className:"sdp-section-tag",children:"Why It Matters"})]}),c.jsx("h2",{className:"sdp-section-h2",children:"Why Professional Control is Essential"}),c.jsx("div",{className:"sdp-why-grid",children:i.whyImportant.map((s,a)=>c.jsxs("div",{className:"sdp-why-card",children:[c.jsxs("div",{className:"sdp-why-num",children:["0",a+1]}),c.jsx("div",{className:"sdp-why-title",children:s.title}),c.jsx("div",{className:"sdp-why-desc",children:s.desc})]},a))})]}),c.jsxs("div",{className:"sdp-section",ref:o(2),children:[c.jsxs("div",{className:"sdp-section-label",children:[c.jsx("div",{className:"sdp-section-bar"}),c.jsx("span",{className:"sdp-section-tag",children:"Early Detection"})]}),c.jsx("h2",{className:"sdp-section-h2",children:"Signs of Infestation"}),c.jsx("div",{className:"sdp-signs-grid",style:{background:"#fff",borderRadius:16,padding:"8px 28px",boxShadow:"0 4px 24px rgba(0,0,0,.06)"},children:i.signs.map((s,a)=>c.jsxs("div",{className:"sdp-sign-item",children:[c.jsx("div",{className:"sdp-sign-dot",children:"✓"}),c.jsx("span",{className:"sdp-sign-text",children:s})]},a))})]}),c.jsxs("div",{className:"sdp-section",ref:o(3),children:[c.jsxs("div",{className:"sdp-section-label",children:[c.jsx("div",{className:"sdp-section-bar"}),c.jsx("span",{className:"sdp-section-tag",children:"Treatment Methods"})]}),c.jsx("h2",{className:"sdp-section-h2",children:"Our Control Methods"}),c.jsx("div",{className:"sdp-methods-grid",children:i.methods.map((s,a)=>c.jsxs("div",{className:"sdp-method-card",children:[c.jsx("div",{className:"sdp-method-name",children:s.name}),c.jsx("div",{className:"sdp-method-desc",children:s.desc})]},a))})]}),c.jsxs("div",{className:"sdp-section",ref:o(4),children:[c.jsxs("div",{className:"sdp-section-label",children:[c.jsx("div",{className:"sdp-section-bar"}),c.jsx("span",{className:"sdp-section-tag",children:"Sectors Served"})]}),c.jsx("h2",{className:"sdp-section-h2",children:"Who We Serve"}),c.jsx("div",{className:"sdp-sectors-grid",children:i.sectors.map((s,a)=>{const l=["🏠","🏢","🍽️","🏥","🏭","🏫"];return c.jsxs("div",{className:"sdp-sector-pill",children:[c.jsx("span",{className:"sdp-sector-icon",children:l[a%l.length]}),c.jsx("span",{className:"sdp-sector-label",children:s})]},a)})})]}),c.jsxs("div",{className:"sdp-section",ref:o(5),children:[c.jsxs("div",{className:"sdp-section-label",children:[c.jsx("div",{className:"sdp-section-bar"}),c.jsx("span",{className:"sdp-section-tag",children:"Preventive Tips"})]}),c.jsx("h2",{className:"sdp-section-h2",children:"How to Prevent Future Infestations"}),c.jsx("div",{className:"sdp-tips-grid",children:i.preventiveTips.map((s,a)=>c.jsxs("div",{className:"sdp-tip-pill",children:[c.jsx("span",{className:"sdp-tip-check",children:"✓"}),s]},a))}),c.jsxs("div",{className:"sdp-amc-badge",children:[c.jsx("div",{className:"sdp-amc-icon",children:"📋"}),c.jsxs("div",{children:[c.jsx("div",{className:"sdp-amc-title",children:"Annual Maintenance Contracts (AMC) Available"}),c.jsx("div",{className:"sdp-amc-sub",children:"Regular inspections, preventive treatments, priority service, and cost savings — ideal for homes and businesses."})]})]})]}),c.jsxs("div",{className:"sdp-cta-band",ref:o(6),children:[c.jsxs("div",{children:[c.jsxs("div",{className:"sdp-cta-title",children:["Ready to Get Rid of"," ",i.title.replace(" Services","").replace(" Service",""),"?"]}),c.jsx("div",{className:"sdp-cta-sub",children:"Get a free inspection from our certified team — available 24 hours across Kerala & South Tamil Nadu."})]}),c.jsx("button",{className:"sdp-cta-btn",onClick:()=>{e("/"),setTimeout(()=>{var s;return(s=document.getElementById("contact"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},400)},children:"Book Free Inspection →"})]})]})]})]}):c.jsx(c.Fragment,{children:c.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8f9f4"},children:c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:64},children:"🔍"}),c.jsx("h2",{style:{fontFamily:"'Lato',sans-serif",color:"#0a1628",marginTop:16},children:"Service Not Found"}),c.jsx("button",{onClick:()=>e("/#services"),style:{marginTop:24,background:"#5bc728",color:"#fff",border:"none",padding:"14px 32px",borderRadius:50,fontFamily:"'DM Sans',sans-serif",fontWeight:700,cursor:"pointer",fontSize:15},children:"← Home"})]})})})}const Am="/assets/associate-CF1yYfKS.png",RS="/assets/canada-CfoJyzAY.png",PS="/assets/georgia-DzKMRgX4.png",zS="/assets/statue-of-liberty-DEdgYytk.png",LS="/assets/ireland-D1KZiTkm.png";P.registerPlugin(B);const OS=[{brand:"ONGUARD",sub:"PEST & WILDLIFE LTD.",location:"Ontario, Canada",flag:RS},{brand:"ONGUARD",sub:"PEST CONTROL",location:"Georgia, USA",flag:PS},{brand:"ONGUARD",sub:"PEST SERVICE",location:"New York, USA",flag:zS},{brand:"ONGUARD",sub:"PEST SOLUTION",location:"Dublin, Ireland",flag:LS}];function MS(){const t=b.useRef(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef(),o=b.useRef(),s=b.useRef(),a=b.useRef(),l=b.useRef([]),[u,d]=b.useState(null);return b.useEffect(()=>{const f=()=>{if(!t.current)return;const h=t.current.getBoundingClientRect(),m=window.innerHeight/2-h.top-h.height/2;P.set(e.current,{y:m*.22}),P.set(r.current,{y:m*.14}),P.set(n.current,{y:m*-.18,rotate:m*.008}),P.set(i.current,{y:m*-.12,rotate:-m*.006}),P.set(o.current,{y:m*-.24,x:m*.01}),P.set(s.current,{y:m*-.1,rotate:m*.004})};window.addEventListener("scroll",f,{passive:!0});const p=P.context(()=>{P.from(a.current.children,{y:35,autoAlpha:0,stagger:.1,duration:.75,ease:"power3.out",scrollTrigger:{trigger:a.current,start:"top 82%",once:!0}}),l.current.forEach((h,m)=>{h&&P.fromTo(h,{y:60,opacity:0,scale:.96},{y:0,opacity:1,scale:1,duration:.75,ease:"power3.out",delay:m*.12,scrollTrigger:{trigger:t.current,start:"top 65%",once:!0}})})},t);return()=>{window.removeEventListener("scroll",f),p.revert()}},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ══════════════════════════════════════
           ASSOCIATES SECTION
        ══════════════════════════════════════ */
        .assoc-section {
          position: relative;
          padding: 120px 60px 130px;
          overflow: hidden;
          min-height: 580px;
          font-family: 'Lato', sans-serif;
        }

        /* ── Parallax photo layers ── */
        .assoc-layer {
          position: absolute;
          inset: -28% 0;
          will-change: transform;
        }
        .assoc-layer img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 30%;
        }

        /* ── Multi-stop dark overlay ── */
        .assoc-overlay {
          position: absolute; inset: 0; z-index: 2;
          background:
            radial-gradient(ellipse 65% 55% at 50% 45%, rgba(5,20,50,.6) 0%, transparent 70%),
            linear-gradient(180deg,
              rgba(7,17,40,.97) 0%,
              rgba(7,17,40,.88) 40%,
              rgba(7,17,40,.95) 100%
            );
        }

        /* ── Scanlines ── */
        .assoc-scanlines {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,.05) 3px,
            rgba(0,0,0,.05) 4px
          );
        }

        /* ── Diagonal stripe texture ── */
        .assoc-diag {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background-image: repeating-linear-gradient(
            -48deg,
            transparent,
            transparent 38px,
            rgba(255,255,255,.018) 38px,
            rgba(255,255,255,.018) 39px
          );
        }

        /* ── Decorative rings ── */
        .assoc-ring {
          position: absolute; border-radius: 50%;
          pointer-events: none; will-change: transform; z-index: 3;
        }

        /* ── Top accent line ── */
        .assoc-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 4;
          background: linear-gradient(90deg, transparent 0%, #5bc728 25%, #5bc728 75%, transparent 100%);
          opacity: .5;
        }

        /* ── Corner brackets ── */
        .assoc-corner {
          position: absolute; z-index: 6;
          width: 22px; height: 22px; pointer-events: none;
        }
        .assoc-corner--tl {
          top: 40px; left: 22px;
          border-top: 2px solid rgba(91,199,40,.45);
          border-left: 2px solid rgba(91,199,40,.45);
        }
        .assoc-corner--br {
          bottom: 20px; right: 22px;
          border-bottom: 2px solid rgba(91,199,40,.45);
          border-right: 2px solid rgba(91,199,40,.45);
        }

        /* ── Content ── */
        .assoc-content {
          position: relative; z-index: 5;
          max-width: 1200px; margin: 0 auto;
        }

        /* ── Header ── */
        .assoc-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .assoc-eyebrow {
          display: inline-flex; align-items: center; gap: 14px;
          margin-bottom: 16px;
        }
        .assoc-eyebrow-line {
          height: 1px; width: 52px;
          background: linear-gradient(90deg, transparent, #5bc728);
        }
        .assoc-eyebrow-line.r {
          background: linear-gradient(90deg, #5bc728, transparent);
        }
        .assoc-eyebrow-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #5bc728;
        }
        .assoc-title {
          font-family: 'Lato', sans-serif;
          font-size: clamp(28px, 3.8vw, 52px);
          font-weight: 900; color: #fff;
          letter-spacing: -0.5px; line-height: 1.06; margin: 0;
          text-transform: uppercase;
        }
        .assoc-title span { color: #5bc728; }
        .assoc-subtitle {
          font-size: 14px; color: rgba(255,255,255,.4);
          margin-top: 12px; line-height: 1.8;
        }

        /* ── Card grid ── */
        .assoc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── Individual card ── */
        .assoc-card {
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px;
          padding: 38px 24px 34px;
          display: flex; flex-direction: column;
          align-items: center; text-align: center; gap: 6px;
          backdrop-filter: blur(18px);
          transition: all .4s cubic-bezier(.25,.46,.45,.94);
          cursor: default;
          position: relative; overflow: hidden;
          text-decoration: none;
        }

        /* Card top glow sweep */
        .assoc-card::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(91,199,40,.7), transparent);
          opacity: 0; transition: opacity .4s;
        }
        .assoc-card:hover::before { opacity: 1; }

        /* Card radial bottom glow */
        .assoc-card::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 120%, rgba(91,199,40,.1) 0%, transparent 70%);
          opacity: 0; transition: opacity .4s; pointer-events: none;
        }
        .assoc-card:hover::after { opacity: 1; }

        .assoc-card:hover {
          transform: translateY(-10px);
          border-color: rgba(91,199,40,.35);
          background: rgba(91,199,40,.06);
          box-shadow: 0 40px 80px rgba(0,0,0,.4), 0 0 0 1px rgba(91,199,40,.12);
        }

        /* Flag circle */
        .assoc-flag-wrap {
          width: 58px; height: 58px; border-radius: 50%;
          background: rgba(91,199,40,.08);
          border: 1.5px solid rgba(91,199,40,.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 14px;
          position: relative; transition: all .35s;
        }
        .assoc-flag-wrap::after {
          content: '';
          position: absolute; inset: -7px; border-radius: 50%;
          border: 1px dashed rgba(91,199,40,.2);
          transition: all .4s;
        }
        .assoc-card:hover .assoc-flag-wrap {
          background: rgba(91,199,40,.15);
          border-color: rgba(91,199,40,.5);
          box-shadow: 0 0 24px rgba(91,199,40,.3);
        }
        .assoc-card:hover .assoc-flag-wrap::after {
          inset: -12px;
          border-color: rgba(91,199,40,.3);
        }

        /* Brand */
        .assoc-brand {
          font-size: 22px; font-weight: 900;
          color: #5bc728; letter-spacing: 1px;
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(91,199,40,.35);
          line-height: 1;
        }
        .assoc-sub-brand {
          font-size: 9px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(91,199,40,.55);
          margin-top: 2px;
        }
        .assoc-divider {
          width: 28px; height: 1px;
          background: rgba(255,255,255,.15);
          margin: 10px 0;
        }
        .assoc-location {
          font-size: 15px; font-weight: 600;
          color: rgba(255,255,255,.82); letter-spacing: 0.3px;
        }

        /* ── Note ── */
        .assoc-note {
          text-align: center; margin-top: 44px;
          font-size: 12px; color: rgba(255,255,255,.25);
          letter-spacing: 1px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .assoc-grid { grid-template-columns: repeat(2, 1fr); }
          .assoc-section { padding: 80px 24px 90px; }
        }
        @media (max-width: 540px) {
          .assoc-grid { grid-template-columns: 1fr; }
        }
      `}),c.jsxs("section",{className:"assoc-section",ref:t,id:"associates",children:[c.jsx("div",{ref:e,className:"assoc-layer",style:{zIndex:0},children:c.jsx("img",{src:Am,alt:""})}),c.jsx("div",{ref:r,className:"assoc-layer",style:{zIndex:1,mixBlendMode:"multiply",opacity:.45},children:c.jsx("img",{src:mo.processL2||Am,alt:""})}),c.jsx("div",{className:"assoc-overlay"}),c.jsx("div",{className:"assoc-scanlines"}),c.jsx("div",{className:"assoc-top-line"}),c.jsx("div",{ref:n,className:"assoc-ring",style:{top:"8%",right:"6%",width:200,height:200,border:"1px dashed rgba(91,199,40,.2)"}}),c.jsx("div",{ref:i,className:"assoc-ring",style:{bottom:"12%",left:"4%",width:150,height:150,border:"1px dashed rgba(255,255,255,.06)"}}),c.jsx("div",{ref:o,className:"assoc-ring",style:{top:"42%",left:"14%",width:80,height:80,border:"1.5px solid rgba(91,199,40,.1)"}}),c.jsx("div",{ref:s,className:"assoc-ring",style:{bottom:"18%",right:"18%",width:110,height:110,border:"1px dashed rgba(91,199,40,.12)"}}),c.jsx("div",{className:"assoc-corner assoc-corner--tl"}),c.jsx("div",{className:"assoc-corner assoc-corner--br"}),c.jsxs("div",{className:"assoc-content",children:[c.jsxs("div",{className:"assoc-header",ref:a,children:[c.jsxs("div",{className:"assoc-eyebrow",children:[c.jsx("span",{className:"assoc-eyebrow-line"}),c.jsx("span",{className:"assoc-eyebrow-text",children:"Global Network"}),c.jsx("span",{className:"assoc-eyebrow-line r"})]}),c.jsxs("h2",{className:"assoc-title",children:["International ",c.jsx("span",{children:"Associates"})]}),c.jsx("p",{className:"assoc-subtitle",children:"Trusted OnGuard partners operating across North America & Europe"})]}),c.jsx("div",{className:"assoc-grid",children:OS.map((f,p)=>c.jsxs("div",{className:"assoc-card",ref:h=>l.current[p]=h,onMouseEnter:()=>d(p),onMouseLeave:()=>d(null),children:[c.jsx("div",{className:"assoc-flag-wrap",children:c.jsx("img",{src:f.flag,alt:"International Associate",style:{width:58,height:58}})}),c.jsx("div",{className:"assoc-brand",children:f.brand}),c.jsx("div",{className:"assoc-sub-brand",children:f.sub}),c.jsx("div",{className:"assoc-divider"}),c.jsx("div",{className:"assoc-location",children:f.location})]},p))}),c.jsx("p",{className:"assoc-note",children:"Recognised OnGuard partners · Operating across 3 continents"})]})]})]})}const ka=[{id:1,slug:"cockroach-free-living-guide",tag:"Cockroach Control",emoji:"🪳",date:"March 2025",readTime:"8 min read",title:"Cockroach-Free Living: Your Guide to Finding the Perfect Exterminator",excerpt:"Understand cockroach infestations, treatment methods, and how to choose the right exterminator for your home.",sections:[{heading:"Understanding Cockroach Problems",content:`
Common species:
• German cockroach  
• American cockroach  
• Oriental cockroach  

They spread bacteria, trigger allergies, and cause health risks.
      `},{heading:"Signs of Infestation",content:`
• Droppings like coffee grounds  
• Musty odor  
• Egg cases  
• Smear marks  
      `},{heading:"Treatment Methods",content:`
• Chemical treatments (sprays, baits)  
• Natural methods (boric acid, diatomaceous earth)  
• Integrated Pest Management (IPM)  
      `},{heading:"Choosing an Exterminator",content:`
• Check licenses and certifications  
• Look at reviews  
• Ensure proper inspection and follow-up  
      `}],faqs:[{q:"How long does cockroach treatment take?",a:"Usually 30 minutes to 2 hours, but multiple treatments may be required."},{q:"Are treatments safe for pets?",a:"Yes, when applied correctly and precautions are followed."}]},{id:2,slug:"effective-pest-control-guide",tag:"Pest Control",emoji:"🛡️",date:"March 2025",readTime:"7 min read",title:"Effective Pest Control: A Comprehensive Guide to Protecting Your Home",excerpt:"Learn pest identification, prevention techniques, and effective control methods for a safe and pest-free home.",sections:[{heading:"Common Household Pests",content:`
• Ants  
• Cockroaches  
• Termites  
• Rodents  
• Spiders  
      `},{heading:"Prevention Techniques",content:`
• Seal entry points  
• Store food properly  
• Maintain cleanliness  
      `},{heading:"Control Methods",content:`
• Natural solutions like essential oils  
• Chemical pesticides when needed  
• Integrated Pest Management (IPM)  
      `},{heading:"Professional Services",content:`
Call professionals when:
• Infestation is severe  
• DIY methods fail  
      `}],faqs:[{q:"Are natural methods effective?",a:"Yes, for small infestations and prevention."},{q:"When should I call pest control?",a:"When infestation becomes severe or persistent."}]},{id:3,slug:"pest-control-cost-kerala",tag:"Pest Control Cost",emoji:"📘",date:"March 2025",readTime:"6 min read",title:"Navigating Pest Control Costs in Kerala: A Complete Guide",excerpt:"Understand pest control pricing in Kerala, factors affecting cost, and how to choose cost-effective solutions.",sections:[{heading:"Common Pests in Kerala",content:`
• Mosquitoes  
• Cockroaches  
• Termites  
• Rodents  
• Ants  
      `},{heading:"Factors Affecting Cost",content:`
• Size of property  
• Type of pest  
• Severity of infestation  
• Treatment method  
      `},{heading:"Types of Services",content:`
• Residential pest control  
• Commercial pest control  
• Industrial pest control  
      `},{heading:"Cost Saving Tips",content:`
• Regular maintenance  
• Annual contracts  
• Preventive measures  
      `}],faqs:[{q:"What is average pest control cost in Kerala?",a:"It varies from ₹1,000 to ₹30,000 depending on service type."},{q:"Is professional pest control worth it?",a:"Yes, it provides long-term effectiveness and safety."}]},{id:4,slug:"mosquito-control-guide",tag:"Mosquito Control",emoji:"🦟",date:"March 2025",readTime:"9 min read",title:"Effective Mosquito Control Strategies for a Bite-Free Environment",excerpt:"Protect yourself from mosquito bites and diseases with effective prevention and control methods.",sections:[{heading:"Mosquito Life Cycle",content:`
Mosquitoes go through:
• Egg  
• Larva  
• Pupa  
• Adult  

They breed in standing water.
        `},{heading:"Health Risks",content:`
Mosquitoes can spread:
• Malaria  
• Dengue  
• Zika virus  
• Chikungunya  
        `},{heading:"Prevention Methods",content:`
• Remove standing water  
• Maintain clean surroundings  
• Use mosquito-repelling plants  
        `},{heading:"Protection and Control",content:`
• Use repellents (DEET, natural oils)  
• Wear protective clothing  
• Install screens and nets  
        `}],faqs:[{q:"Where do mosquitoes breed?",a:"In stagnant or standing water."},{q:"How can I prevent mosquito bites?",a:"Use repellents, nets, and eliminate water sources."}]},{id:5,slug:"pest-control-kollam",tag:"Pest Control",emoji:"🧴",date:"March 2025",readTime:"6 min read",title:"Pest Control in Kollam: Safeguarding Your Home and Environment",excerpt:"Learn how to manage pests effectively in Kollam’s tropical climate with prevention tips, eco-friendly methods, and professional solutions.",sections:[{heading:"Understanding Kollam’s Pest Landscape",content:`
Common pests in Kollam include cockroaches, ants, mosquitoes, rodents, and termites.

Seasonal changes influence pest activity:
• Monsoon increases mosquitoes
• Summer increases ants

Humidity, greenery, and water bodies create ideal breeding conditions for pests.
        `},{heading:"Effective Pest Prevention Strategies",content:`
• Maintain cleanliness and remove waste regularly  
• Seal cracks, gaps, and entry points  
• Use natural repellents like neem, tulsi, and essential oils  
        `},{heading:"Professional Pest Control Services",content:`
Services include general pest control, termite treatment, rodent control, and eco-friendly options.

Choose providers with:
• Certifications  
• Good reviews  
• Experience in local pest problems  
        `},{heading:"DIY and Eco-Friendly Methods",content:`
• Vinegar solutions for ants  
• Baking soda mixtures for cockroaches  
• Integrated Pest Management (IPM) for long-term control  
        `}],faqs:[{q:"When should I call a pest control service?",a:"If infestation is large, persistent, or involves dangerous pests, professional help is recommended."},{q:"Are eco-friendly pest control methods effective?",a:"Yes, they are effective for prevention and small infestations when used correctly."}]},{id:6,slug:"emergency-pest-control-guide",tag:"Emergency Pest Control",emoji:"🚨",date:"March 2025",readTime:"7 min read",title:"Pest Panic: Your Ultimate Guide to Emergency Pest Control",excerpt:"Handle sudden pest infestations safely with quick response techniques, DIY solutions, and expert intervention strategies.",sections:[{heading:"Understanding Emergency Pest Situations",content:`
Critical infestations include:
• Rodents in living spaces  
• Bed bugs spreading rapidly  
• Termites damaging structure  

These situations require immediate action due to health risks and property damage.
        `},{heading:"Rapid Response Techniques",content:`
• Seal entry points immediately  
• Remove food sources  
• Use traps and targeted insecticides  
• Keep distance from wildlife intrusions  
        `},{heading:"DIY Emergency Solutions",content:`
• Vinegar spray for ants  
• Diatomaceous earth for insects  
• Peppermint oil for rodents  

Temporary barriers:
• Door seals  
• Sticky traps  
        `},{heading:"When to Call Professionals",content:`
Call experts if:
• Infestation is severe  
• DIY fails  
• Dangerous pests are involved  

Professionals provide faster and long-term solutions.
        `}],faqs:[{q:"What is considered a pest emergency?",a:"Large infestations, health risks, or structural damage situations require immediate attention."},{q:"Can DIY methods solve emergencies?",a:"They help temporarily, but severe cases need professional treatment."}]},{id:7,slug:"termite-damage-warning-signs",tag:"Termite Control",emoji:"🪵",date:"March 2025",readTime:"8 min read",title:"Silent Invaders: How to Spot Termite Damage Before It's Too Late",excerpt:"Learn early warning signs of termite damage and protect your home from costly structural destruction.",sections:[{heading:"Types of Termites",content:`
• Subterranean termites – live underground  
• Drywood termites – live in wood  
• Dampwood termites – prefer moist wood  
        `},{heading:"Early Warning Signs",content:`
• Mud tubes on walls  
• Discarded wings near windows  
• Hollow-sounding wood  
        `},{heading:"Signs of Structural Damage",content:`
• Sagging floors or ceilings  
• Peeling paint  
• Tiny holes in walls  
• Weak furniture  
        `},{heading:"Inspection Techniques",content:`
Professional inspections include:
• Foundation checks  
• Attic and crawl space inspection  
• Moisture detection tools  
        `}],faqs:[{q:"How do I detect termites early?",a:"Look for mud tubes, hollow wood sounds, and discarded wings."},{q:"Can termites destroy a house?",a:"Yes, untreated infestations can cause severe structural damage."}]},{id:8,slug:"termite-control-kollam",tag:"Termite Control",emoji:"🏠",date:"March 2025",readTime:"7 min read",title:"Termite Control in Kollam: Protecting Your Home from Silent Destroyers",excerpt:"Explore effective termite control methods tailored for Kollam’s climate, including prevention and treatment strategies.",sections:[{heading:"Common Termites in Kollam",content:`
• Subterranean termites  
• Drywood termites  

Warm and humid climate increases termite activity.
        `},{heading:"Signs of Infestation",content:`
• Mud tubes  
• Hollow wood  
• Wings and droppings  
        `},{heading:"Treatment Options",content:`
• Chemical soil barriers  
• Baiting systems  
• Fumigation for severe cases  
        `},{heading:"Eco-Friendly Methods",content:`
• Neem oil and natural repellents  
• Nematodes for biological control  
• Heat treatment  
        `}],faqs:[{q:"What is the best termite treatment?",a:"Combination of chemical barriers and bait systems is most effective."},{q:"How often should inspections be done?",a:"Every 3–6 months for prevention."}]},{id:9,slug:"bed-bug-removal-guide",tag:"Bed Bug Control",emoji:"🛏️",date:"March 2025",readTime:"8 min read",title:"The Complete Handbook: Banishing Bed Bugs from Your Home",excerpt:"Identify, prevent, and eliminate bed bugs effectively using proven techniques and professional strategies.",sections:[{heading:"Understanding Bed Bugs",content:`
Bed bugs are small reddish-brown insects that feed on blood.

Life cycle stages:
• Egg  
• Nymph  
• Adult  

Common hiding places include mattresses, bed frames, furniture, and cracks.
        `},{heading:"Signs of Infestation",content:`
• Reddish stains on bedding  
• Dark droppings  
• Bite marks in clusters  
• Musty odor in heavy infestations  
        `},{heading:"Prevention Strategies",content:`
• Regular inspection and cleaning  
• Use mattress covers  
• Check hotel rooms while traveling  
        `},{heading:"Treatment Methods",content:`
• Heat treatment (highly effective)  
• Chemical pesticides  
• Professional pest control for severe cases  
        `}],faqs:[{q:"Can bed bugs go away on their own?",a:"No, they require treatment and proper cleaning."},{q:"What is the fastest way to remove bed bugs?",a:"Heat treatment combined with professional control is most effective."}]},{id:10,slug:"ant-control-home-guide",tag:"Ant Control",emoji:"🐜",date:"March 2025",readTime:"9 min read",title:"The Complete Homeowner's Guide to Ant-Free Living",excerpt:"Discover effective ways to eliminate ants and prevent infestations using natural and chemical methods.",sections:[{heading:"Common Ant Types",content:`
• Pavement ants  
• Carpenter ants  
• Odorous house ants  
• Argentine ants  
        `},{heading:"Why Ants Enter Homes",content:`
• Food sources  
• Water availability  
• Shelter and entry cracks  
        `},{heading:"Prevention Techniques",content:`
• Seal cracks and entry points  
• Store food in airtight containers  
• Maintain cleanliness  
        `},{heading:"Control Methods",content:`
• Natural repellents like vinegar and essential oils  
• DIY powders like cinnamon  
• Chemical baits and insecticides for severe infestations  
        `}],faqs:[{q:"What attracts ants to homes?",a:"Food, water, and shelter are the main reasons."},{q:"Are natural remedies effective?",a:"Yes, especially for small infestations and prevention."}]},{id:11,slug:"commercial-pest-control-guide",tag:"Commercial Pest Control",emoji:"🏢",date:"March 2025",readTime:"7 min read",title:"The Ultimate Guide to Commercial Pest Control",excerpt:"Protect your business from pest infestations with effective commercial pest management strategies.",sections:[{heading:"Common Business Pests",content:`
• Rodents  
• Cockroaches  
• Ants  
• Flies  
• Birds  
        `},{heading:"Risks for Businesses",content:`
• Property damage  
• Customer dissatisfaction  
• Health issues  
        `},{heading:"Preventive Measures",content:`
• Clean facilities regularly  
• Proper food storage  
• Waste management  
        `},{heading:"Professional Solutions",content:`
• Integrated Pest Management (IPM)  
• Chemical and non-chemical treatments  
• Customized service plans  
        `}],faqs:[{q:"Why is pest control important for businesses?",a:"It protects reputation, health, and property."},{q:"What is IPM?",a:"Integrated Pest Management combines multiple pest control methods."}]},{id:12,slug:"mouse-exterminator-guide",tag:"Rodent Control",emoji:"🐭",date:"March 2025",readTime:"8 min read",title:"The Ultimate Guide to Finding a Trustworthy Mouse Exterminator",excerpt:"Learn how to identify mouse infestations and choose the right exterminator for safe and effective removal.",sections:[{heading:"Health Risks and Damage",content:`
Mice can spread diseases and cause property damage by chewing wires and structures.
        `},{heading:"Signs of Infestation",content:`
• Droppings  
• Gnaw marks  
• Scratching noises  
• Nests  
        `},{heading:"Choosing an Exterminator",content:`
• Check reviews and credentials  
• Verify licenses  
• Ask for experience in rodent control  
        `},{heading:"Control Methods",content:`
• Traps and baiting  
• Eco-friendly repellents  
• Integrated pest management  
        `}],faqs:[{q:"Are mice dangerous?",a:"Yes, they can spread diseases and damage property."},{q:"Should I call professionals?",a:"Yes, especially for larger infestations."}]}];P.registerPlugin(B);const DS={"Cockroach Control":{color:"#1a3a1a",bg:"rgba(91,199,40,.12)"},"Pest Control":{color:"#0a1628",bg:"rgba(10,22,40,.08)"},"Pest Control Cost":{color:"#2a1500",bg:"rgba(200,100,0,.1)"},"Emergency Pest Control":{color:"#2a0000",bg:"rgba(200,0,0,.08)"},"Termite Control":{color:"#1a0d00",bg:"rgba(150,80,0,.1)"},"Bed Bug Control":{color:"#1a001a",bg:"rgba(120,0,120,.08)"},"Ant Control":{color:"#0d1a00",bg:"rgba(60,120,0,.1)"},"Commercial Pest Control":{color:"#001a2a",bg:"rgba(0,60,120,.08)"},"Rodent Control":{color:"#1a0a00",bg:"rgba(150,60,0,.1)"},"Mosquito Control":{color:"#001a0d",bg:"rgba(0,120,60,.1)"}};function IS({blog:t}){const e=Yn(),r=DS[t.tag]||{color:"#0a1628",bg:"rgba(10,22,40,.08)"};return c.jsxs("div",{className:"blg-card",onClick:()=>e(`/blog/${t.slug}`),children:[c.jsx("div",{className:"blg-card-bar"}),c.jsxs("div",{className:"blg-card-body",children:[c.jsxs("div",{className:"blg-card-top",children:[c.jsx("span",{className:"blg-emoji",children:t.emoji}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{className:"blg-meta",children:[c.jsx("span",{className:"blg-tag",style:{color:r.color,background:r.bg},children:t.tag}),c.jsx("span",{className:"blg-date",children:t.date}),c.jsx("span",{className:"blg-dot",children:"·"}),c.jsx("span",{className:"blg-date",children:t.readTime})]}),c.jsx("h3",{className:"blg-title",children:t.title}),c.jsx("p",{className:"blg-excerpt",children:t.excerpt})]})]}),c.jsx("button",{className:"blg-btn",onClick:n=>{n.stopPropagation(),e(`/blog/${t.slug}`)},children:"Read Full Guide →"})]})]})}function FS(){const t=b.useRef(),e=b.useRef(),r=b.useRef(),n=b.useRef(),i=b.useRef([]);yn(),b.useEffect(()=>{const s=P.context(()=>{P.from(e.current.children,{y:28,autoAlpha:0,stagger:.1,duration:.7,ease:"power3.out",scrollTrigger:{trigger:e.current,start:"top 85%",once:!0}})},t);return()=>s.revert()},[]),b.useEffect(()=>{const s=r.current;if(!s)return;P.set(s,{y:40,opacity:0});const a=B.create({trigger:s,start:"top 88%",once:!0,onEnter:()=>{P.to(s,{y:0,opacity:1,duration:.65,ease:"power3.out",clearProps:"transform,opacity"})}});return()=>a.kill()},[]),b.useEffect(()=>{const s=n.current;if(!s)return;const a=()=>{if(window.innerWidth>=768)return;const l=s.querySelectorAll(".blg-carousel-item");if(!l.length)return;const u=l[0].offsetWidth+16,d=Math.min(Math.round(s.scrollLeft/u),ka.length-1);i.current.forEach((f,p)=>{f&&f.classList.toggle("blg-dot-active",p===d)})};return s.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),a(),()=>{s.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]);const o=s=>{var u;const a=n.current;if(!a)return;(u=a.querySelectorAll(".blg-carousel-item")[s])==null||u.scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ══════════════════════════════════════
           BLOG SECTION
        ══════════════════════════════════════ */
        .blg-section {
          background: #f4f6f0;
          padding: 88px 56px 100px;
          position: relative;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }
        .blg-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(10,22,40,.065) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* ── Header ── */
        .blg-header {
          max-width: 1600px; margin: 0 auto 52px;
          position: relative; z-index: 1;
        }
        .blg-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #5bc728; margin-bottom: 14px;
        }
        .blg-eyebrow-bar {
          width: 36px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
        }
        .blg-h2 {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 900; color: #0a1628;
          margin: 0 0 14px; line-height: 1.06; letter-spacing: -1px;
        }
        .blg-h2 span { color: #5bc728; }
        .blg-sub {
          font-size: 15px; color: #5a6476;
          max-width: 520px; line-height: 1.8; margin: 0;
        }

        /* ── Card ── */
        .blg-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 28px rgba(10,22,40,.07);
          border: 1px solid rgba(10,22,40,.06);
          display: flex; flex-direction: column;
          cursor: pointer;
          height: 100%;
          transition:
            transform 0.35s cubic-bezier(.22,1,.36,1),
            box-shadow 0.35s ease,
            border-color 0.3s ease;
          position: relative;
        }
        .blg-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 80px rgba(10,22,40,.18);
          border-color: rgba(91,199,40,.4);
        }
        .blg-card::after {
          content: "";
          position: absolute; inset: 0;
          border-radius: 18px;
          background: radial-gradient(circle at top, rgba(91,199,40,0.15), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .blg-card:hover::after { opacity: 1; }

        .blg-card-bar {
          height: 4px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          flex-shrink: 0;
        }
        .blg-card-body {
          padding: 24px 24px 22px;
          display: flex; flex-direction: column; flex: 1;
        }
        .blg-card-top {
          display: grid; gap: 14px;
          align-items: flex-start; flex: 1;
        }
        .blg-emoji {
          font-size: 34px; line-height: 1;
          flex-shrink: 0; margin-top: 3px;
          transition: transform 0.3s ease;
        }
        .blg-card:hover .blg-emoji { transform: translateY(-4px) scale(1.1); }

        .blg-meta {
          display: flex; align-items: center;
          flex-wrap: wrap; gap: 5px; margin-bottom: 9px;
        }
        .blg-tag {
          font-size: 9px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 3px 9px; border-radius: 50px;
        }
        .blg-date { font-size: 11px; color: #8a9ab0; font-weight: 500; }
        .blg-dot  { color: #8a9ab0; font-size: 11px; }

        .blg-title {
          font-size: 16px; font-weight: 900;
          color: #0a1628; line-height: 1.4;
          margin: 0 0 9px; letter-spacing: -0.2px;
          transition: color 0.3s ease;
        }
        .blg-card:hover .blg-title { color: #5bc728; }

        .blg-excerpt {
          font-size: 13px; color: #5a6476;
          line-height: 1.75; margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blg-btn {
          margin-top: 18px;
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; cursor: pointer; padding: 0;
          color: #5bc728; font-family: 'Lato', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.3px;
          transition: gap .25s, color .2s;
          justify-content: flex-end;
        }
        .blg-btn:hover { gap: 10px; color: #3fa81a; }

        /* ══════════════════════════════════════
           DESKTOP GRID — 4 → 2 columns
        ══════════════════════════════════════ */
        @media (min-width: 768px) {
          .blg-carousel-track {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
          .blg-carousel-item { width: 100%; }
          .blg-carousel-dots { display: none; }
        }

        @media (min-width: 768px) and (max-width: 1100px) {
          .blg-carousel-track {
            grid-template-columns: repeat(2, 1fr);
          }
          .blg-section { padding: 72px 32px 88px; }
        }

        /* ══════════════════════════════════════
           MOBILE CAROUSEL — horizontal snap
        ══════════════════════════════════════ */
        @media (max-width: 767px) {
          .blg-section {
            padding: 60px 0 72px;
          }
          .blg-header {
            padding: 0 20px;
            margin-bottom: 32px;
          }
          .blg-track-wrapper {
            /* bleed past section padding */
            margin-left: 0;
            margin-right: 0;
          }
          .blg-carousel-track {
            display: flex !important;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 8px 20px 16px 20px;
          }
          .blg-carousel-track::-webkit-scrollbar { display: none; }

          .blg-carousel-item {
            flex: 0 0 80vw;
            max-width: 300px;
            scroll-snap-align: start;
          }

          /* ── Dots ── */
          .blg-carousel-dots {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 7px;
            margin-top: 8px;
            padding: 0 20px;
          }
          .blg-carousel-dot {
            width: 7px; height: 7px;
            border-radius: 50%;
            background: #d0d0d0;
            border: none; padding: 0;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.3s ease;
          }
          .blg-carousel-dot.blg-dot-active {
            background: #5bc728;
            transform: scale(1.4);
          }
        }

        /* ══════════════════════════════════════
           SMALL MOBILE ≤ 380px
        ══════════════════════════════════════ */
        @media (max-width: 380px) {
          .blg-carousel-item {
            flex: 0 0 88vw;
          }
        }
      `}),c.jsx("h2",{style:{display:"none"},children:"Pest Control Blog in Trivandrum Kerala – Termite, Mosquito, Cockroach Tips and Guides"}),c.jsxs("section",{className:"blg-section",ref:t,id:"blog",children:[c.jsxs("div",{className:"blg-header",ref:e,children:[c.jsxs("div",{className:"blg-eyebrow",children:[c.jsx("div",{className:"blg-eyebrow-bar"}),"Knowledge Hub"]}),c.jsxs("h2",{className:"blg-h2",children:["Pest Control Tips & ",c.jsx("span",{children:" Guides in "})," Trivandrum Kerala"]}),c.jsx("p",{className:"blg-sub",children:"Explore expert pest control tips, termite prevention guides, mosquito control methods, and cost insights for homes and businesses in Trivandrum Kerala."})]}),c.jsxs("div",{ref:r,style:{maxWidth:1600,margin:"0 auto",position:"relative",zIndex:1},children:[c.jsx("div",{className:"blg-track-wrapper",children:c.jsx("div",{ref:n,className:"blg-carousel-track",children:ka.map((s,a)=>c.jsx("div",{className:"blg-carousel-item",children:c.jsx(IS,{blog:s})},s.id))})}),c.jsx("div",{className:"blg-carousel-dots",children:ka.map((s,a)=>c.jsx("button",{ref:l=>i.current[a]=l,className:`blg-carousel-dot${a===0?" blg-dot-active":""}`,"aria-label":`Go to blog ${a+1}`,onClick:()=>o(a)},a))})]})]})]})}P.registerPlugin(B);function BS(){const{slug:t}=ev(),e=Yn(),r=b.useRef(),n=b.useRef([]),i=ka.find(a=>a.slug===t);b.useEffect(()=>{if(window.scrollTo(0,0),!!i)return P.fromTo(r.current,{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:"power3.out"}),n.current.forEach(a=>{a&&P.fromTo(a,{opacity:0,y:44},{opacity:1,y:0,duration:.7,ease:"power3.out",scrollTrigger:{trigger:a,start:"top 86%",once:!0}})}),()=>B.getAll().forEach(a=>a.kill())},[t,i]);const o=a=>l=>{n.current[a]=l},s=ka.filter(a=>a.slug!==t).slice(0,3);return i?c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=DM+Sans:wght@400;500;700&display=swap');

        /* ══════════════════════════════════════
           BLOG DETAIL PAGE
        ══════════════════════════════════════ */
        .bd-root {
          background: #f4f6f0;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Topbar ── */
        .bd-topbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,.07);
          padding: 14px 52px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .bd-back {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(91,199,40,.1); color: #5bc728 !important; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          color: #0a1628; padding: 8px 16px; border-radius: 50px;
          transition: all .25s;
        }
        .bd-back:hover { background: rgb(91 199 40 / 79%);
    color: #f8f9fa !important;  }
        .bd-logo {
          font-family: 'Lato', sans-serif;
          font-size: 17px; font-weight: 900; color: #0a1628;
        }
        .bd-logo span { color: #5bc728; }

        /* ── Hero ── */
        .bd-hero {
          background: linear-gradient(135deg, #071128 0%, #0d2040 60%, #071128 100%);
          padding: 80px 52px 72px;
          position: relative; overflow: hidden;
        }
        .bd-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .bd-hero-glow {
          position: absolute; top: -60px; right: -60px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .bd-hero-inner {
          max-width: 860px; margin: 0 auto;
          position: relative; z-index: 2;
        }
        .bd-hero-meta {
          display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
          margin-bottom: 20px;
        }
        .bd-hero-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #5bc728;
          background: rgba(91,199,40,.15); border: 1px solid rgba(91,199,40,.3);
          padding: 5px 14px; border-radius: 50px;
        }
        .bd-hero-date { font-size: 13px; color: rgba(255,255,255,.45); }
        .bd-hero-dot  { color: rgba(255,255,255,.3); }
        .bd-hero-time { font-size: 13px; color: rgba(255,255,255,.45); }

        .bd-hero-emoji {
          font-size: 60px; display: block;
          line-height: 1; margin-bottom: 18px;
        }
        .bd-hero-title {
          font-family: 'Lato', sans-serif;
          font-size: clamp(28px, 4.5vw, 54px);
          font-weight: 900; color: #fff;
          line-height: 1.1; letter-spacing: -1px;
          margin: 0 0 18px;
        }
        .bd-hero-excerpt {
          font-size: 16px; color: rgba(255,255,255,.6);
          line-height: 1.75; max-width: 620px; margin: 0;
        }

        /* ── Content area ── */
        .bd-content {
          max-width: 860px; margin: 0 auto;
          padding: 0 52px 80px;
        }

        /* ── Sections ── */
        .bd-section {
          margin-top: 56px;
        }
        .bd-section-label {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 28px;
        }
        .bd-section-bar {
          height: 3px; width: 32px; border-radius: 2px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
        }
        .bd-section-num {
          font-family: 'Lato', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #5bc728;
        }

        /* Article sections */
        .bd-articles { margin-top: 40px; }
        .bd-article {
          background: #fff; border-radius: 18px;
          padding: 32px 36px;
          box-shadow: 0 4px 28px rgba(10,22,40,.07);
          border: 1px solid rgba(10,22,40,.06);
          margin-bottom: 20px;
          display: flex; gap: 20px;
          transition: box-shadow .3s;
        }
        .bd-article:hover { box-shadow: 0 12px 48px rgba(10,22,40,.11); }
        .bd-article-num {
          font-family: 'Lato', sans-serif;
          font-size: 40px; font-weight: 900;
          color: rgba(91,199,40,.2); line-height: 1;
          flex-shrink: 0; width: 52px;
          padding-top: 4px;
        }
        .bd-article-body { flex: 1; }
        .bd-article-heading {
          font-family: 'Lato', sans-serif;
          font-size: 18px; font-weight: 900;
          color: #0a1628; margin: 0 0 12px;
          letter-spacing: -0.2px;
        }
        .bd-article-content {
          font-size: 14.5px; color: #4a5568;
          line-height: 1.85; margin: 0;
        }

        /* ── FAQ Section ── */
        .bd-faq-list { margin-top: 0; }
        .bd-faq-item {
          background: #fff; border-radius: 14px;
          border: 1px solid rgba(10,22,40,.06);
          margin-bottom: 12px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(10,22,40,.05);
        }
        .bd-faq-q {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px; cursor: pointer;
          font-size: 15px; font-weight: 700; color: #0a1628;
          gap: 12px;
          transition: background .2s;
        }
        .bd-faq-q:hover { background: rgba(91,199,40,.04); }
        .bd-faq-q.open  { color: #5bc728; }
        .bd-faq-icon {
          width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
          background: rgba(91,199,40,.1); border: 1px solid rgba(91,199,40,.3);
          display: flex; align-items: center; justify-content: center;
          color: #5bc728; font-size: 14px; font-weight: 900;
          transition: transform .3s, background .2s;
        }
        .bd-faq-q.open .bd-faq-icon {
          transform: rotate(45deg);
          background: #5bc728; color: #fff;
        }
        .bd-faq-a {
          padding: 0 24px;
          font-size: 14px; color: #5a6476; line-height: 1.8;
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease, padding .3s;
        }
        .bd-faq-a.open {
          max-height: 300px;
          padding: 0 24px 18px;
        }

        /* ── CTA Band ── */
        .bd-cta {
          background: linear-gradient(135deg, #0a1628 0%, #1a2f50 100%);
          border-radius: 20px; padding: 44px 48px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          margin-top: 60px;
          box-shadow: 0 24px 60px rgba(10,22,40,.2);
          position: relative; overflow: hidden;
        }
        .bd-cta::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .bd-cta-title {
          font-family: 'Lato', sans-serif;
          font-size: 24px; font-weight: 900;
          color: #fff; margin-bottom: 8px;
          position: relative; z-index: 1;
        }
        .bd-cta-sub {
          font-size: 14px; color: rgba(255,255,255,.55);
          position: relative; z-index: 1;
        }
        .bd-cta-btn {
          background: #5bc728; color: #fff; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          padding: 15px 34px; border-radius: 50px; white-space: nowrap;
          box-shadow: 0 12px 36px rgba(91,199,40,.4); transition: all .3s;
          position: relative; z-index: 1;
        }
        .bd-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 48px rgba(91,199,40,.5); }

        /* ── Related Articles ── */
        .bd-related { margin-top: 72px; }
        .bd-related-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 18px; margin-top: 28px;
        }
        .bd-rel-card {
          background: #fff; border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 4px 20px rgba(10,22,40,.07);
          border: 1px solid rgba(10,22,40,.06);
          cursor: pointer; transition: all .3s;
          border-top: 3px solid #5bc728;
        }
        .bd-rel-card:hover { transform: translateY(-4px); box-shadow: 0 16px 44px rgba(10,22,40,.12); }
        .bd-rel-emoji { font-size: 28px; margin-bottom: 10px; }
        .bd-rel-title {
          font-family: 'Lato', sans-serif;
          font-size: 14px; font-weight: 800;
          color: #0a1628; line-height: 1.4; margin: 0 0 10px;
        }
        .bd-rel-link {
          font-size: 12px; font-weight: 700; color: #5bc728;
          display: inline-flex; align-items: center; gap: 4px;
          transition: gap .2s;
        }
        .bd-rel-card:hover .bd-rel-link { gap: 8px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .bd-hero     { padding: 60px 24px 50px; }
          .bd-content  { padding: 0 24px 60px; }
          .bd-topbar   { padding: 12px 20px; }
          .bd-article  { flex-direction: column; gap: 8px; }
          .bd-cta      { padding: 32px 24px; }
          .bd-related-grid { grid-template-columns: 1fr; }
        }
            @media (max-width: 600px){
          .bd-topbar{
          display:block;
          }
          .bd-logo{
              text-align: center;
          }
          
          }
      `}),c.jsxs("div",{className:"bd-root",children:[c.jsxs("div",{className:"bd-topbar",children:[c.jsx("button",{className:"bd-back",onClick:()=>e(-1),children:"← Home"}),c.jsxs("div",{className:"bd-logo",children:["OnGuard ",c.jsx("span",{children:"Pest Controls"})]}),c.jsx("div",{style:{width:80}})]}),c.jsxs("div",{className:"bd-hero",ref:r,children:[c.jsx("div",{className:"bd-hero-glow"}),c.jsxs("div",{className:"bd-hero-inner",children:[c.jsxs("div",{className:"bd-hero-meta",children:[c.jsx("span",{className:"bd-hero-tag",children:i.tag}),c.jsx("span",{className:"bd-hero-date",children:i.date}),c.jsx("span",{className:"bd-hero-dot",children:"·"}),c.jsx("span",{className:"bd-hero-time",children:i.readTime})]}),c.jsx("span",{className:"bd-hero-emoji",children:i.emoji}),c.jsx("h1",{className:"bd-hero-title",children:i.title}),c.jsx("p",{className:"bd-hero-excerpt",children:i.excerpt})]})]}),c.jsxs("div",{className:"bd-content",children:[c.jsxs("div",{className:"bd-section",ref:o(0),children:[c.jsxs("div",{className:"bd-section-label",children:[c.jsx("div",{className:"bd-section-bar"}),c.jsx("span",{className:"bd-section-num",children:"Full Article"})]}),c.jsx("div",{className:"bd-articles",children:i.sections.map((a,l)=>c.jsxs("div",{className:"bd-article",children:[c.jsxs("div",{className:"bd-article-num",children:["0",l+1]}),c.jsxs("div",{className:"bd-article-body",children:[c.jsx("h2",{className:"bd-article-heading",children:a.heading}),c.jsx("p",{className:"bd-article-content",children:a.content.split(`
`).map((u,d)=>c.jsxs("span",{children:[u,c.jsx("br",{})]},d))})]})]},l))})]}),i.faqs&&i.faqs.length>0&&c.jsxs("div",{className:"bd-section",ref:o(1),children:[c.jsxs("div",{className:"bd-section-label",children:[c.jsx("div",{className:"bd-section-bar"}),c.jsx("span",{className:"bd-section-num",children:"Frequently Asked Questions"})]}),c.jsx("div",{className:"bd-faq-list",children:i.faqs.map((a,l)=>c.jsx(HS,{faq:a},l))})]}),c.jsxs("div",{className:"bd-cta",ref:o(2),children:[c.jsxs("div",{children:[c.jsx("div",{className:"bd-cta-title",children:"Need Professional Pest Control?"}),c.jsx("div",{className:"bd-cta-sub",children:"Get a free inspection from our certified team — available 24 hours across Kerala & South Tamil Nadu."})]}),c.jsx("button",{className:"bd-cta-btn",onClick:()=>{e("/"),setTimeout(()=>{var a;return(a=document.getElementById("contact"))==null?void 0:a.scrollIntoView({behavior:"smooth"})},400)},children:"Book Free Inspection →"})]}),c.jsxs("div",{className:"bd-related",ref:o(3),children:[c.jsxs("div",{className:"bd-section-label",children:[c.jsx("div",{className:"bd-section-bar"}),c.jsx("span",{className:"bd-section-num",children:"Related Articles"})]}),c.jsx("div",{className:"bd-related-grid",children:s.map(a=>c.jsxs("div",{className:"bd-rel-card",onClick:()=>{e(`/blog/${a.slug}`),window.scrollTo(0,0)},children:[c.jsx("div",{className:"bd-rel-emoji",children:a.emoji}),c.jsx("div",{className:"bd-rel-title",children:a.title}),c.jsx("span",{className:"bd-rel-link",children:"Read More →"})]},a.id))})]})]})]})]}):c.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f4f6f0"},children:c.jsxs("div",{style:{textAlign:"center"},children:[c.jsx("div",{style:{fontSize:60},children:"📄"}),c.jsx("h2",{style:{fontFamily:"'Lato',sans-serif",color:"#0a1628",marginTop:16},children:"Article Not Found"}),c.jsx("button",{onClick:()=>{e("/#blog")},style:{marginTop:24,background:"#5bc728",color:"#fff",border:"none",padding:"14px 32px",borderRadius:50,fontFamily:"'Lato',sans-serif",fontWeight:700,cursor:"pointer",fontSize:15},children:"← Back to Blog"})]})})}function HS({faq:t}){const[e,r]=$i.useState(!1);return c.jsxs("div",{className:"bd-faq-item",children:[c.jsxs("div",{className:`bd-faq-q${e?" open":""}`,onClick:()=>r(n=>!n),children:[c.jsx("span",{children:t.q}),c.jsx("span",{className:"bd-faq-icon",children:"+"})]}),c.jsx("div",{className:`bd-faq-a${e?" open":""}`,children:t.a})]})}P.registerPlugin(B);function WS(){return c.jsxs(c.Fragment,{children:[c.jsxs(Kc,{children:[c.jsx("title",{children:"Pest Control in Trivandrum | OnGuard Pest Controls"}),c.jsx("meta",{name:"description",content:"Best pest control services in Trivandrum including termite, mosquito, cockroach and rodent control."})]}),c.jsx(rk,{}),c.jsx(fk,{}),c.jsx(yk,{}),c.jsx(mk,{}),c.jsx(bk,{}),c.jsx(_k,{}),c.jsx(MS,{}),c.jsx(FS,{}),c.jsx(Ck,{}),c.jsx(Ek,{}),c.jsx(jk,{}),c.jsx(Lk,{})]})}function US(){const[t,e]=b.useState(!1);b.useEffect(()=>{const n=new l_({duration:1.2,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),smoothWheel:!0}),i=s=>n.raf(s*1e3);n.on("scroll",B.update),P.ticker.add(i),P.ticker.lagSmoothing(0);const o=()=>B.refresh();return window.addEventListener("loaderDone",o),n.scrollTo(0),()=>{n.destroy(),P.ticker.remove(i),window.removeEventListener("loaderDone",o)}},[]);const r=yn();return b.useEffect(()=>{if(r.hash){const n=document.querySelector(r.hash);n&&setTimeout(()=>n.scrollIntoView({behavior:"smooth"}),100)}},[r.hash]),b.useEffect(()=>{const n=document.querySelector(".cursor-dot"),i=document.querySelector(".cursor-ring");if(!n||!i)return;let o=0,s=0,a=0,l=0,u;const d=p=>{o=p.clientX,s=p.clientY,n.style.left=o+"px",n.style.top=s+"px"};window.addEventListener("mousemove",d);const f=()=>{a+=(o-a)*.15,l+=(s-l)*.15,i.style.left=a+"px",i.style.top=l+"px",u=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("mousemove",d),cancelAnimationFrame(u)}},[]),c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"cursor-dot"}),c.jsx("div",{className:"cursor-ring"}),c.jsx(J5,{onComplete:()=>e(!0)}),c.jsx("div",{style:{visibility:t?"visible":"hidden",opacity:t?1:0,transition:"opacity 0.4s ease"},children:c.jsxs(w2,{children:[c.jsx(qs,{path:"/",element:c.jsx(WS,{})}),c.jsx(qs,{path:"/about-us",element:c.jsx(Ok,{})}),c.jsx(qs,{path:"/services/:slug",element:c.jsx(AS,{})}),c.jsx(qs,{path:"/blog/:slug",element:c.jsx(BS,{})})]})})]})}dd.createRoot(document.getElementById("root")).render(c.jsx($i.StrictMode,{children:c.jsx(Y2,{children:c.jsx(US,{})})}));
