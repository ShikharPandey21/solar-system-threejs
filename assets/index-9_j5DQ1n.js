(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var wf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Nx(){if(kg)return _o;kg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return _o.Fragment=t,_o.jsx=i,_o.jsxs=i,_o}var Xg;function Ox(){return Xg||(Xg=1,wf.exports=Nx()),wf.exports}var Dn=Ox(),Df={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function Px(){if(Wg)return ae;Wg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function M(U,tt,vt){this.props=U,this.context=tt,this.refs=C,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function z(U,tt,vt){this.props=U,this.context=tt,this.refs=C,this.updater=vt||y}var N=z.prototype=new _;N.constructor=z,A(N,M.prototype),N.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(U,tt,vt,St,Q,pt){return vt=pt.ref,{$$typeof:o,type:U,key:tt,ref:vt!==void 0?vt:null,props:pt}}function Z(U,tt){return I(U.type,tt,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return tt[vt]})}var H=/\/+/g;function ot(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):tt.toString(36)}function at(){}function gt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(at,at):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ft(U,tt,vt,St,Q){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(pt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case t:Mt=!0;break;case g:return Mt=U._init,ft(Mt(U._payload),tt,vt,St,Q)}}if(Mt)return Q=Q(U),Mt=St===""?"."+ot(U,0):St,D(Q)?(vt="",Mt!=null&&(vt=Mt.replace(H,"$&/")+"/"),ft(Q,tt,vt,"",function(se){return se})):Q!=null&&(w(Q)&&(Q=Z(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+Mt)),tt.push(Q)),1;Mt=0;var At=St===""?".":St+":";if(D(U))for(var Ct=0;Ct<U.length;Ct++)St=U[Ct],pt=At+ot(St,Ct),Mt+=ft(St,tt,vt,pt,Q);else if(Ct=x(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(St=U.next()).done;)St=St.value,pt=At+ot(St,Ct++),Mt+=ft(St,tt,vt,pt,Q);else if(pt==="object"){if(typeof U.then=="function")return ft(gt(U),tt,vt,St,Q);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function P(U,tt,vt){if(U==null)return U;var St=[],Q=0;return ft(U,St,"","",function(pt){return tt.call(vt,pt,Q++)}),St}function j(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return ae.Children={map:P,forEach:function(U,tt,vt){P(U,function(){tt.apply(this,arguments)},vt)},count:function(U){var tt=0;return P(U,function(){tt++}),tt},toArray:function(U){return P(U,function(tt){return tt})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ae.Component=M,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=z,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},ae.cache=function(U){return function(){return U.apply(null,arguments)}},ae.cloneElement=function(U,tt,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=A({},U.props),Q=U.key,pt=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(pt=void 0),tt.key!==void 0&&(Q=""+tt.key),tt)!G.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(St[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)St.children=vt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];St.children=At}return I(U.type,Q,void 0,void 0,pt,St)},ae.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ae.createElement=function(U,tt,vt){var St,Q={},pt=null;if(tt!=null)for(St in tt.key!==void 0&&(pt=""+tt.key),tt)G.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Q[St]=tt[St]);var Mt=arguments.length-2;if(Mt===1)Q.children=vt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];Q.children=At}if(U&&U.defaultProps)for(St in Mt=U.defaultProps,Mt)Q[St]===void 0&&(Q[St]=Mt[St]);return I(U,pt,void 0,void 0,null,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(U){return{$$typeof:d,render:U}},ae.isValidElement=w,ae.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:j}},ae.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},ae.startTransition=function(U){var tt=F.T,vt={};F.T=vt;try{var St=U(),Q=F.S;Q!==null&&Q(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,q)}catch(pt){q(pt)}finally{F.T=tt}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(U){return F.H.use(U)},ae.useActionState=function(U,tt,vt){return F.H.useActionState(U,tt,vt)},ae.useCallback=function(U,tt){return F.H.useCallback(U,tt)},ae.useContext=function(U){return F.H.useContext(U)},ae.useDebugValue=function(){},ae.useDeferredValue=function(U,tt){return F.H.useDeferredValue(U,tt)},ae.useEffect=function(U,tt,vt){var St=F.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,tt)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(U,tt,vt){return F.H.useImperativeHandle(U,tt,vt)},ae.useInsertionEffect=function(U,tt){return F.H.useInsertionEffect(U,tt)},ae.useLayoutEffect=function(U,tt){return F.H.useLayoutEffect(U,tt)},ae.useMemo=function(U,tt){return F.H.useMemo(U,tt)},ae.useOptimistic=function(U,tt){return F.H.useOptimistic(U,tt)},ae.useReducer=function(U,tt,vt){return F.H.useReducer(U,tt,vt)},ae.useRef=function(U){return F.H.useRef(U)},ae.useState=function(U){return F.H.useState(U)},ae.useSyncExternalStore=function(U,tt,vt){return F.H.useSyncExternalStore(U,tt,vt)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.1.0",ae}var qg;function nd(){return qg||(qg=1,Df.exports=Px()),Df.exports}var pr=nd(),Uf={exports:{}},vo={},Lf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function zx(){return Yg||(Yg=1,function(o){function t(P,j){var q=P.length;P.push(j);t:for(;0<q;){var yt=q-1>>>1,U=P[yt];if(0<l(U,j))P[yt]=j,P[q]=U,q=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],q=P.pop();if(q!==j){P[0]=q;t:for(var yt=0,U=P.length,tt=U>>>1;yt<tt;){var vt=2*(yt+1)-1,St=P[vt],Q=vt+1,pt=P[Q];if(0>l(St,q))Q<U&&0>l(pt,St)?(P[yt]=pt,P[Q]=q,yt=Q):(P[yt]=St,P[vt]=q,yt=vt);else if(Q<U&&0>l(pt,q))P[yt]=pt,P[Q]=q,yt=Q;else break t}}return j}function l(P,j){var q=P.sortIndex-j.sortIndex;return q!==0?q:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,A=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function F(P){if(C=!1,D(P),!A)if(i(m)!==null)A=!0,G||(G=!0,ot());else{var j=i(p);j!==null&&ft(F,j.startTime-P)}}var G=!1,I=-1,Z=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<Z)}function H(){if(M=!1,G){var P=o.unstable_now();w=P;var j=!0;try{t:{A=!1,C&&(C=!1,z(I),I=-1),y=!0;var q=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,D(P),j=!0;break e}v===i(m)&&r(m),D(P)}else r(m);v=i(m)}if(v!==null)j=!0;else{var tt=i(p);tt!==null&&ft(F,tt.startTime-P),j=!1}}break t}finally{v=null,x=q,y=!1}j=void 0}}finally{j?ot():G=!1}}}var ot;if(typeof N=="function")ot=function(){N(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,gt=at.port2;at.port1.onmessage=H,ot=function(){gt.postMessage(null)}}else ot=function(){_(H,0)};function ft(P,j){I=_(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var q=x;x=j;try{return P()}finally{x=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return j()}finally{x=q}},o.unstable_scheduleCallback=function(P,j,q){var yt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:j,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>yt?(P.sortIndex=q,t(p,P),i(m)===null&&P===i(p)&&(C?(z(I),I=-1):C=!0,ft(F,q-yt))):(P.sortIndex=U,t(m,P),A||y||(A=!0,G||(G=!0,ot()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=x;return function(){var q=x;x=j;try{return P.apply(this,arguments)}finally{x=q}}}}(Nf)),Nf}var Zg;function Bx(){return Zg||(Zg=1,Lf.exports=zx()),Lf.exports}var Of={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Ix(){if(jg)return bn;jg=1;var o=nd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},bn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var Kg;function Fx(){if(Kg)return Of.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Of.exports=Ix(),Of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Hx(){if(Qg)return vo;Qg=1;var o=Bx(),t=nd(),i=Fx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ft=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function tt(e){return{current:e}}function vt(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function St(e,n){U++,yt[U]=e.current,e.current=n}var Q=tt(null),pt=tt(null),Mt=tt(null),At=tt(null);function Ct(e,n){switch(St(Mt,n),St(pt,e),St(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_g(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_g(n),e=vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Q),St(Q,e)}function se(){vt(Q),vt(pt),vt(Mt)}function Kt(e){e.memoizedState!==null&&St(At,e);var n=Q.current,a=vg(n,e.type);n!==a&&(St(pt,e),St(Q,a))}function Le(e){pt.current===e&&(vt(Q),vt(pt)),At.current===e&&(vt(At),fo._currentValue=q)}var Ie=Object.prototype.hasOwnProperty,pe=o.unstable_scheduleCallback,B=o.unstable_cancelCallback,gn=o.unstable_shouldYield,Se=o.unstable_requestPaint,fe=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ct=null,dt=null;function lt(e){if(typeof E=="function"&&et(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ct,e)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ht|0)|0}var xt=256,Pt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Wt(s):(S&=T,S!==0?u=Wt(S):a||(a=T&~e,a!==0&&(u=Wt(a))))):(T=s&~f,T!==0?u=Wt(T):S!==0?u=Wt(S):a||(a=s&~e,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,s,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Ot(a),mt=1<<ut;T[ut]=0,O[ut]=-1;var nt=J[ut];if(nt!==null)for(J[ut]=null,ut=0;ut<nt.length;ut++){var it=nt[ut];it!==null&&(it.lane&=-536870913)}a&=~mt}s!==0&&_t(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ot(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function It(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ot(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function ee(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Bg(e.type))}function Gn(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var cn=Math.random().toString(36).slice(2),an="__reactFiber$"+cn,_n="__reactProps$"+cn,Ln="__reactContainer$"+cn,Ga="__reactEvents$"+cn,Fo="__reactListeners$"+cn,Ho="__reactHandles$"+cn,Va="__reactResources$"+cn,aa="__reactMarker$"+cn;function ra(e){delete e[an],delete e[_n],delete e[Ga],delete e[Fo],delete e[Ho]}function wi(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ln]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=yg(e);e!==null;){if(a=e[an])return a;e=yg(e)}return n}e=a,a=e.parentNode}return null}function Di(e){if(e=e[an]||e[Ln]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ka(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function sa(e){var n=e[Va];return n||(n=e[Va]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $e(e){e[aa]=!0}var Go=new Set,Vo={};function Ui(e,n){b(e,n),b(e+"Capture",n)}function b(e,n){for(Vo[e]=n,e=0;e<n.length;e++)Go.add(n[e])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function Y(e){return Ie.call(st,e)?!0:Ie.call(rt,e)?!1:W.test(e)?st[e]=!0:(rt[e]=!0,!1)}function Tt(e,n,a){if(Y(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Bt,Jt;function Zt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+Jt}var kt=!1;function le(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){nt=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var O=S.split(`
`),J=T.split(`
`);for(u=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===O.length||u===J.length)for(s=O.length-1,u=J.length-1;1<=s&&0<=u&&O[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(O[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||O[s]!==J[u]){var ut=`
`+O[s].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=s&&0<=u);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Zt("Activity");default:return""}}function Ge(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(e){var n=_e(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){e._valueTracker||(e._valueTracker=jt(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=_e(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var oa=/[\n"\\]/g;function Ve(e){return e.replace(oa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(e,n,a,s,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ge(n)):e.value!==""+ge(n)&&(e.value=""+ge(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?En(e,S,ge(n)):a!=null?En(e,S,ge(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ge(T):e.removeAttribute("name")}function Fe(e,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function En(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function fn(e,n,a){if(n!=null&&(n=""+ge(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ge(a):""}function vn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function _i(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _d(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&_d(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&_d(e,f,n[f])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return Lv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Cu=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,yr=null;function xd(e){var n=Di(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(Li(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[_n]||null;if(!u)throw Error(r(90));Li(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Me(s)}break t;case"textarea":fn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var Du=!1;function Sd(e,n,a){if(Du)return e(n,a);Du=!0;try{var s=e(n);return s}finally{if(Du=!1,(Mr!==null||yr!==null)&&(Cl(),Mr&&(n=Mr,e=yr,yr=Mr=null,xd(n),e)))for(n=0;n<e.length;n++)xd(e[n])}}function Ts(e,n){var a=e.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Oi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Uu=!1}var la=null,Lu=null,Xo=null;function Md(){if(Xo)return Xo;var e,n=Lu,a=n.length,s,u="value"in la?la.value:la.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return Xo=u.slice(e,1<s?1-s:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function yd(){return!1}function Nn(e){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:yd,this.isPropagationStopped=yd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Nn(Xa),As=g({},Xa,{view:0,detail:0}),Nv=Nn(As),Nu,Ou,Rs,Zo=g({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rs&&(Rs&&e.type==="mousemove"?(Nu=e.screenX-Rs.screenX,Ou=e.screenY-Rs.screenY):Ou=Nu=0,Rs=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),Ed=Nn(Zo),Ov=g({},Zo,{dataTransfer:0}),Pv=Nn(Ov),zv=g({},As,{relatedTarget:0}),Pu=Nn(zv),Bv=g({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Nn(Bv),Fv=g({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hv=Nn(Fv),Gv=g({},Xa,{data:0}),Td=Nn(Gv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xv[e])?!!n[e]:!1}function zu(){return Wv}var qv=g({},As,{key:function(e){if(e.key){var n=Vv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yv=Nn(qv),Zv=g({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Nn(Zv),jv=g({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),Kv=Nn(jv),Qv=g({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=Nn(Qv),$v=g({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Nn($v),e0=g({},Xa,{newState:0,oldState:0}),n0=Nn(e0),i0=[9,13,27,32],Bu=Oi&&"CompositionEvent"in window,Cs=null;Oi&&"documentMode"in document&&(Cs=document.documentMode);var a0=Oi&&"TextEvent"in window&&!Cs,Ad=Oi&&(!Bu||Cs&&8<Cs&&11>=Cs),Rd=" ",Cd=!1;function wd(e,n){switch(e){case"keyup":return i0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function r0(e,n){switch(e){case"compositionend":return Dd(n);case"keypress":return n.which!==32?null:(Cd=!0,Rd);case"textInput":return e=n.data,e===Rd&&Cd?null:e;default:return null}}function s0(e,n){if(Er)return e==="compositionend"||!Bu&&wd(e,n)?(e=Md(),Xo=Lu=la=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ad&&n.locale!=="ko"?null:n.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!o0[e.type]:n==="textarea"}function Ld(e,n,a,s){Mr?yr?yr.push(s):yr=[s]:Mr=s,n=Ol(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var ws=null,Ds=null;function l0(e){hg(e,0)}function jo(e){var n=ka(e);if(Me(n))return e}function Nd(e,n){if(e==="change")return n}var Od=!1;if(Oi){var Iu;if(Oi){var Fu="oninput"in document;if(!Fu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Fu=typeof Pd.oninput=="function"}Iu=Fu}else Iu=!1;Od=Iu&&(!document.documentMode||9<document.documentMode)}function zd(){ws&&(ws.detachEvent("onpropertychange",Bd),Ds=ws=null)}function Bd(e){if(e.propertyName==="value"&&jo(Ds)){var n=[];Ld(n,Ds,e,wu(e)),Sd(l0,n)}}function u0(e,n,a){e==="focusin"?(zd(),ws=n,Ds=a,ws.attachEvent("onpropertychange",Bd)):e==="focusout"&&zd()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Ds)}function f0(e,n){if(e==="click")return jo(n)}function h0(e,n){if(e==="input"||e==="change")return jo(n)}function d0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:d0;function Us(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ie.call(n,u)||!Vn(e[u],n[u]))return!1}return!0}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var a=Id(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Id(a)}}function Hd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function Hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var p0=Oi&&"documentMode"in document&&11>=document.documentMode,Tr=null,Gu=null,Ls=null,Vu=!1;function Vd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vu||Tr==null||Tr!==yn(s)||(s=Tr,"selectionStart"in s&&Hu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ls&&Us(Ls,s)||(Ls=s,s=Ol(Gu,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Tr)))}function Wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var br={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},ku={},kd={};Oi&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function qa(e){if(ku[e])return ku[e];if(!br[e])return e;var n=br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kd)return ku[e]=n[a];return e}var Xd=qa("animationend"),Wd=qa("animationiteration"),qd=qa("animationstart"),m0=qa("transitionrun"),g0=qa("transitionstart"),_0=qa("transitioncancel"),Yd=qa("transitionend"),Zd=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function li(e,n){Zd.set(e,n),Ui(n,[e])}var jd=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},jd.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var ti=[],Ar=0,Wu=0;function Ko(){for(var e=Ar,n=Wu=Ar=0;n<e;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&Kd(a,u,f)}}function Qo(e,n,a,s){ti[Ar++]=e,ti[Ar++]=n,ti[Ar++]=a,ti[Ar++]=s,Wu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function qu(e,n,a,s){return Qo(e,n,a,s),Jo(e)}function Rr(e,n){return Qo(e,null,null,n),Jo(e)}function Kd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(e){if(50<io)throw io=0,Jc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={};function v0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,s){return new v0(e,n,a,s)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $o(e,n,a,s,u,f){var S=0;if(s=e,typeof e=="function")Yu(e)&&(S=1);else if(typeof e=="string")S=Sx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return Ya(a.children,u,f,n);case C:S=8,u|=24;break;case M:return e=kn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case F:return e=kn(13,a,n,u),e.elementType=F,e.lanes=f,e;case G:return e=kn(19,a,n,u),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:S=10;break t;case z:S=9;break t;case D:S=11;break t;case I:S=14;break t;case Z:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=kn(S,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function Ya(e,n,a,s){return e=kn(7,e,s,n),e.lanes=a,e}function Zu(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function ju(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var wr=[],Dr=0,tl=null,el=0,ei=[],ni=0,Za=null,zi=1,Bi="";function ja(e,n){wr[Dr++]=el,wr[Dr++]=tl,tl=e,el=n}function Jd(e,n,a){ei[ni++]=zi,ei[ni++]=Bi,ei[ni++]=Za,Za=e;var s=zi;e=Bi;var u=32-Ot(s)-1;s&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,zi=1<<32-Ot(n)+u|a<<u|s,Bi=f+e}else zi=1<<f|a<<u|s,Bi=e}function Ku(e){e.return!==null&&(ja(e,1),Jd(e,1,0))}function Qu(e){for(;e===tl;)tl=wr[--Dr],wr[Dr]=null,el=wr[--Dr],wr[Dr]=null;for(;e===Za;)Za=ei[--ni],ei[ni]=null,Bi=ei[--ni],ei[ni]=null,zi=ei[--ni],ei[ni]=null}var Cn=null,Ze=null,Ce=!1,Ka=null,vi=!1,Ju=Error(r(519));function Qa(e){var n=Error(r(418,""));throw Ps($n(n,e)),Ju}function $d(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[an]=e,n[_n]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)de(ro[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Fe(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ye(n);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),vn(n,s.value,s.defaultValue,s.children),Ye(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||gg(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Pl),n=!0):n=!1,n||Qa(e)}function tp(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Cn=Cn.return}}function Ns(e){if(e!==Cn)return!1;if(!Ce)return tp(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||mf(e.type,e.memoizedProps)),a=!a),a&&Ze&&Qa(e),tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=ci(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Ta(e.type)?(e=xf,xf=null,Ze=e):Ze=n):Ze=Cn?ci(e.stateNode.nextSibling):null;return!0}function Os(){Ze=Cn=null,Ce=!1}function ep(){var e=Ka;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),Ka=null),e}function Ps(e){Ka===null?Ka=[e]:Ka.push(e)}var $u=tt(null),Ja=null,Ii=null;function ua(e,n,a){St($u,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=$u.current,vt($u)}function tc(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function ec(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),tc(f.return,a,e),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),tc(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function zs(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Vn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===At.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(fo):e=[fo])}u=u.return}e!==null&&ec(n,e,a,s),n.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ja=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return np(Ja,e)}function il(e,n){return Ja===null&&$a(e),np(e,n)}function np(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var x0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},S0=o.unstable_scheduleCallback,M0=o.unstable_NormalPriority,sn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nc(){return{controller:new x0,data:new Map,refCount:0}}function Bs(e){e.refCount--,e.refCount===0&&S0(M0,function(){e.controller.abort()})}var Is=null,ic=0,Ur=0,Lr=null;function y0(e,n){if(Is===null){var a=Is=[];ic=0,Ur=sf(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ic++,n.then(ip,ip),n}function ip(){if(--ic===0&&Is!==null){Lr!==null&&(Lr.status="fulfilled");var e=Is;Is=null,Ur=0,Lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function E0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var ap=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&y0(e,n),ap!==null&&ap(e,n)};var tr=tt(null);function ac(){var e=tr.current;return e!==null?e:ke.pooledCache}function al(e,n){n===null?St(tr,tr.current):St(tr,n.pool)}function rp(){var e=ac();return e===null?null:{parent:sn._currentValue,pool:e}}var Fs=Error(r(460)),sp=Error(r(474)),rl=Error(r(542)),rc={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sl,sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cp(e),e;default:if(typeof n.status=="string")n.then(sl,sl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cp(e),e}throw Hs=n,Fs}}var Hs=null;function up(){if(Hs===null)throw Error(r(459));var e=Hs;return Hs=null,e}function cp(e){if(e===Fs||e===rl)throw Error(r(483))}var ca=!1;function sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Jo(e),Kd(e,null,a),n}return Qo(e,s,n,a),Jo(e)}function Gs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,It(e,a)}}function lc(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var uc=!1;function Vs(){if(uc){var e=Lr;if(e!==null)throw e}}function ks(e,n,a,s){uc=!1;var u=e.updateQueue;ca=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var O=T,J=O.next;O.next=null,S===null?f=J:S.next=J,S=O;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==S&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=O))}if(f!==null){var mt=u.baseState;S=0,ut=J=O=null,T=f;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(xe&nt)===nt:(s&nt)===nt){nt!==0&&nt===Ur&&(uc=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var te=e,Qt=T;nt=n;var Pe=a;switch(Qt.tag){case 1:if(te=Qt.payload,typeof te=="function"){mt=te.call(Pe,mt,nt);break t}mt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Qt.payload,nt=typeof te=="function"?te.call(Pe,mt,nt):te,nt==null)break t;mt=g({},mt,nt);break t;case 2:ca=!0}}nt=T.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=it,O=mt):ut=ut.next=it,S|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ut===null&&(O=mt),u.baseState=O,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),Sa|=S,e.lanes=S,e.memoizedState=mt}}function fp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fp(a[e],n)}var Nr=tt(null),ol=tt(0);function dp(e,n){e=qi,St(ol,e),St(Nr,n),qi=e|n.baseLanes}function cc(){St(ol,qi),St(Nr,Nr.current)}function fc(){qi=ol.current,vt(Nr),vt(ol)}var da=0,ue=null,Ne=null,tn=null,ll=!1,Or=!1,er=!1,ul=0,Xs=0,Pr=null,T0=0;function Qe(){throw Error(r(321))}function hc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function dc(e,n,a,s,u,f){return da=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Kp:Qp,er=!1,f=a(s,u),er=!1,Or&&(f=mp(n,a,s,u)),pp(e),f}function pp(e){P.H=ml;var n=Ne!==null&&Ne.next!==null;if(da=0,tn=Ne=ue=null,ll=!1,Xs=0,Pr=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&nl(e)&&(hn=!0))}function mp(e,n,a,s){ue=e;var u=0;do{if(Or&&(Pr=null),Xs=0,Or=!1,25<=u)throw Error(r(301));if(u+=1,tn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=U0,f=n(a,s)}while(Or);return f}function b0(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?Ws(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),n}function pc(){var e=ul!==0;return ul=0,e}function mc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gc(e){if(ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ll=!1}da=0,tn=Ne=ue=null,Or=!1,Xs=ul=0,Pr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ue.memoizedState=tn=e:tn=tn.next=e,tn}function en(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=tn===null?ue.memoizedState:tn.next;if(n!==null)tn=n,Ne=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},tn===null?ue.memoizedState=tn=e:tn=tn.next=e}return tn}function _c(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(e){var n=Xs;return Xs+=1,Pr===null&&(Pr=[]),e=lp(Pr,e,n),n=ue,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Kp:Qp),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ws(e);if(e.$$typeof===N)return Tn(e)}throw Error(r(438,String(e)))}function vc(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_c(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=en();return xc(n,Ne,e)}function xc(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,O=null,J=n,ut=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(xe&mt)===mt:(da&mt)===mt){var nt=J.revertLane;if(nt===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Ur&&(ut=!0);else if((da&nt)===nt){J=J.next,nt===Ur&&(ut=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=mt,S=f):O=O.next=mt,ue.lanes|=nt,Sa|=nt;mt=J.action,er&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else nt={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=nt,S=f):O=O.next=nt,ue.lanes|=mt,Sa|=mt;J=J.next}while(J!==null&&J!==n);if(O===null?S=f:O.next=T,!Vn(f,e.memoizedState)&&(hn=!0,ut&&(a=Lr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=O,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Sc(e){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Vn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function gp(e,n,a){var s=ue,u=en(),f=Ce;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Ne||u).memoizedState,a);S&&(u.memoizedState=a,hn=!0),u=u.queue;var T=xp.bind(null,s,u,e);if(qs(2048,8,T,[e]),u.getSnapshot!==n||S||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,zr(9,hl(),vp.bind(null,s,u,a,n),null),ke===null)throw Error(r(349));f||(da&124)!==0||_p(s,n,a)}return a}function _p(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=_c(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vp(e,n,a,s){n.value=a,n.getSnapshot=s,Sp(n)&&Mp(e)}function xp(e,n,a){return a(function(){Sp(n)&&Mp(e)})}function Sp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Mp(e){var n=Rr(e,2);n!==null&&Zn(n,e,2)}function Mc(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),er){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function yp(e,n,a,s){return e.baseState=a,xc(e,Ne,typeof s=="function"?s:Hi)}function A0(e,n,a,s,u){if(pl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Ep(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ep(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var T=a(u,s),O=P.S;O!==null&&O(S,T),Tp(e,n,T)}catch(J){yc(e,n,J)}finally{P.T=f}}else try{f=a(u,s),Tp(e,n,f)}catch(J){yc(e,n,J)}}function Tp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){bp(e,n,s)},function(s){return yc(e,n,s)}):bp(e,n,a)}function bp(e,n,a){n.status="fulfilled",n.value=a,Ap(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ep(e,a)))}function yc(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ap(n),n=n.next;while(n!==s)}e.action=null}function Ap(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rp(e,n){return n}function Cp(e,n){if(Ce){var a=ke.formState;if(a!==null){t:{var s=ue;if(Ce){if(Ze){e:{for(var u=Ze,f=vi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=ci(u.nextSibling),s=u.data==="F!";break t}}Qa(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rp,lastRenderedState:n},a.queue=s,a=Yp.bind(null,ue,s),s.dispatch=a,s=Mc(!1),f=Rc.bind(null,ue,!1,s.queue),s=On(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=A0.bind(null,ue,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function wp(e){var n=en();return Dp(n,Ne,e)}function Dp(e,n,a){if(n=xc(e,n,Rp)[0],e=fl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ws(n)}catch(S){throw S===Fs?rl:S}else s=n;n=en();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,zr(9,hl(),R0.bind(null,u,a),null)),[s,f,e]}function R0(e,n){e.action=n}function Up(e){var n=en(),a=Ne;if(a!==null)return Dp(n,a,e);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function zr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=_c(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function hl(){return{destroy:void 0,resource:void 0}}function Lp(){return en().memoizedState}function dl(e,n,a,s){var u=On();s=s===void 0?null:s,ue.flags|=e,u.memoizedState=zr(1|n,hl(),a,s)}function qs(e,n,a,s){var u=en();s=s===void 0?null:s;var f=u.memoizedState.inst;Ne!==null&&s!==null&&hc(s,Ne.memoizedState.deps)?u.memoizedState=zr(n,f,a,s):(ue.flags|=e,u.memoizedState=zr(1|n,f,a,s))}function Np(e,n){dl(8390656,8,e,n)}function Op(e,n){qs(2048,8,e,n)}function Pp(e,n){return qs(4,2,e,n)}function zp(e,n){return qs(4,4,e,n)}function Bp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ip(e,n,a){a=a!=null?a.concat([e]):null,qs(4,4,Bp.bind(null,n,e),a)}function Ec(){}function Fp(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&hc(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Hp(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&hc(n,s[1]))return s[0];if(s=e(),er){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[s,n],s}function Tc(e,n,a){return a===void 0||(da&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=km(),ue.lanes|=e,Sa|=e,a)}function Gp(e,n,a,s){return Vn(a,n)?a:Nr.current!==null?(e=Tc(e,a,s),Vn(e,n)||(hn=!0),e):(da&42)===0?(hn=!0,e.memoizedState=a):(e=km(),ue.lanes|=e,Sa|=e,n)}function Vp(e,n,a,s,u){var f=j.p;j.p=f!==0&&8>f?f:8;var S=P.T,T={};P.T=T,Rc(e,!1,n,a);try{var O=u(),J=P.S;if(J!==null&&J(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=E0(O,s);Ys(e,n,ut,Yn(e))}else Ys(e,n,s,Yn(e))}catch(mt){Ys(e,n,{then:function(){},status:"rejected",reason:mt},Yn())}finally{j.p=f,P.T=S}}function C0(){}function bc(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=kp(e).queue;Vp(e,u,n,q,a===null?C0:function(){return Xp(e),a(s)})}function kp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xp(e){var n=kp(e).next.queue;Ys(e,n,{},Yn())}function Ac(){return Tn(fo)}function Wp(){return en().memoizedState}function qp(){return en().memoizedState}function w0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();e=fa(a);var s=ha(n,e,a);s!==null&&(Zn(s,n,a),Gs(s,n,a)),n={cache:nc()},e.payload=n;return}n=n.return}}function D0(e,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pl(e)?Zp(n,a):(a=qu(e,n,a,s),a!==null&&(Zn(a,e,s),jp(a,n,s)))}function Yp(e,n,a){var s=Yn();Ys(e,n,a,s)}function Ys(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(e))Zp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Vn(T,S))return Qo(e,n,u,0),ke===null&&Ko(),!1}catch{}finally{}if(a=qu(e,n,u,s),a!==null)return Zn(a,e,s),jp(a,n,s),!0}return!1}function Rc(e,n,a,s){if(s={lane:2,revertLane:sf(),action:s,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(n)throw Error(r(479))}else n=qu(e,a,s,2),n!==null&&Zn(n,e,2)}function pl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Zp(e,n){Or=ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,It(e,a)}}var ml={readContext:Tn,use:cl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Kp={readContext:Tn,use:cl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Np,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,dl(4194308,4,Bp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return dl(4194308,4,e,n)},useInsertionEffect:function(e,n){dl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var s=e();if(er){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=On();if(a!==void 0){var u=a(n);if(er){lt(!0);try{a(n)}finally{lt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=D0.bind(null,ue,e),[s.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Mc(e);var n=e.queue,a=Yp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ec,useDeferredValue:function(e,n){var a=On();return Tc(a,e,n)},useTransition:function(){var e=Mc(!1);return e=Vp.bind(null,ue,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ue,u=On();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(xe&124)!==0||_p(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Np(xp.bind(null,s,f,e),[e]),s.flags|=2048,zr(9,hl(),vp.bind(null,s,f,a,n),null),a},useId:function(){var e=On(),n=ke.identifierPrefix;if(Ce){var a=Bi,s=zi;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=T0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ac,useFormState:Cp,useActionState:Cp,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Rc.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:vc,useCacheRefresh:function(){return On().memoizedState=w0.bind(null,ue)}},Qp={readContext:Tn,use:cl,useCallback:Fp,useContext:Tn,useEffect:Op,useImperativeHandle:Ip,useInsertionEffect:Pp,useLayoutEffect:zp,useMemo:Hp,useReducer:fl,useRef:Lp,useState:function(){return fl(Hi)},useDebugValue:Ec,useDeferredValue:function(e,n){var a=en();return Gp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=fl(Hi)[0],n=en().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:gp,useId:Wp,useHostTransitionStatus:Ac,useFormState:wp,useActionState:wp,useOptimistic:function(e,n){var a=en();return yp(a,Ne,e,n)},useMemoCache:vc,useCacheRefresh:qp},U0={readContext:Tn,use:cl,useCallback:Fp,useContext:Tn,useEffect:Op,useImperativeHandle:Ip,useInsertionEffect:Pp,useLayoutEffect:zp,useMemo:Hp,useReducer:Sc,useRef:Lp,useState:function(){return Sc(Hi)},useDebugValue:Ec,useDeferredValue:function(e,n){var a=en();return Ne===null?Tc(a,e,n):Gp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Sc(Hi)[0],n=en().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:gp,useId:Wp,useHostTransitionStatus:Ac,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=en();return Ne!==null?yp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vc,useCacheRefresh:qp},Br=null,Zs=0;function gl(e){var n=Zs;return Zs+=1,Br===null&&(Br=[]),lp(Br,e,n)}function js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){var n=e._init;return n(e._payload)}function $p(e){function n(X,V){if(e){var K=X.deletions;K===null?(X.deletions=[V],X.flags|=16):K.push(V)}}function a(X,V){if(!e)return null;for(;V!==null;)n(X,V),V=V.sibling;return null}function s(X){for(var V=new Map;X!==null;)X.key!==null?V.set(X.key,X):V.set(X.index,X),X=X.sibling;return V}function u(X,V){return X=Pi(X,V),X.index=0,X.sibling=null,X}function f(X,V,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<V?(X.flags|=67108866,V):K):(X.flags|=67108866,V)):(X.flags|=1048576,V)}function S(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function T(X,V,K,ht){return V===null||V.tag!==6?(V=Zu(K,X.mode,ht),V.return=X,V):(V=u(V,K),V.return=X,V)}function O(X,V,K,ht){var Ft=K.type;return Ft===A?ut(X,V,K.props.children,ht,K.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Jp(Ft)===V.type)?(V=u(V,K.props),js(V,K),V.return=X,V):(V=$o(K.type,K.key,K.props,null,X.mode,ht),js(V,K),V.return=X,V)}function J(X,V,K,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=ju(K,X.mode,ht),V.return=X,V):(V=u(V,K.children||[]),V.return=X,V)}function ut(X,V,K,ht,Ft){return V===null||V.tag!==7?(V=Ya(K,X.mode,ht,Ft),V.return=X,V):(V=u(V,K),V.return=X,V)}function mt(X,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Zu(""+V,X.mode,K),V.return=X,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=$o(V.type,V.key,V.props,null,X.mode,K),js(K,V),K.return=X,K;case y:return V=ju(V,X.mode,K),V.return=X,V;case Z:var ht=V._init;return V=ht(V._payload),mt(X,V,K)}if(ft(V)||ot(V))return V=Ya(V,X.mode,K,null),V.return=X,V;if(typeof V.then=="function")return mt(X,gl(V),K);if(V.$$typeof===N)return mt(X,il(X,V),K);_l(X,V)}return null}function nt(X,V,K,ht){var Ft=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:T(X,V,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?O(X,V,K,ht):null;case y:return K.key===Ft?J(X,V,K,ht):null;case Z:return Ft=K._init,K=Ft(K._payload),nt(X,V,K,ht)}if(ft(K)||ot(K))return Ft!==null?null:ut(X,V,K,ht,null);if(typeof K.then=="function")return nt(X,V,gl(K),ht);if(K.$$typeof===N)return nt(X,V,il(X,K),ht);_l(X,K)}return null}function it(X,V,K,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return X=X.get(K)||null,T(V,X,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return X=X.get(ht.key===null?K:ht.key)||null,O(V,X,ht,Ft);case y:return X=X.get(ht.key===null?K:ht.key)||null,J(V,X,ht,Ft);case Z:var ce=ht._init;return ht=ce(ht._payload),it(X,V,K,ht,Ft)}if(ft(ht)||ot(ht))return X=X.get(K)||null,ut(V,X,ht,Ft,null);if(typeof ht.then=="function")return it(X,V,K,gl(ht),Ft);if(ht.$$typeof===N)return it(X,V,K,il(V,ht),Ft);_l(V,ht)}return null}function te(X,V,K,ht){for(var Ft=null,ce=null,Xt=V,$t=V=0,pn=null;Xt!==null&&$t<K.length;$t++){Xt.index>$t?(pn=Xt,Xt=null):pn=Xt.sibling;var Te=nt(X,Xt,K[$t],ht);if(Te===null){Xt===null&&(Xt=pn);break}e&&Xt&&Te.alternate===null&&n(X,Xt),V=f(Te,V,$t),ce===null?Ft=Te:ce.sibling=Te,ce=Te,Xt=pn}if($t===K.length)return a(X,Xt),Ce&&ja(X,$t),Ft;if(Xt===null){for(;$t<K.length;$t++)Xt=mt(X,K[$t],ht),Xt!==null&&(V=f(Xt,V,$t),ce===null?Ft=Xt:ce.sibling=Xt,ce=Xt);return Ce&&ja(X,$t),Ft}for(Xt=s(Xt);$t<K.length;$t++)pn=it(Xt,X,$t,K[$t],ht),pn!==null&&(e&&pn.alternate!==null&&Xt.delete(pn.key===null?$t:pn.key),V=f(pn,V,$t),ce===null?Ft=pn:ce.sibling=pn,ce=pn);return e&&Xt.forEach(function(wa){return n(X,wa)}),Ce&&ja(X,$t),Ft}function Qt(X,V,K,ht){if(K==null)throw Error(r(151));for(var Ft=null,ce=null,Xt=V,$t=V=0,pn=null,Te=K.next();Xt!==null&&!Te.done;$t++,Te=K.next()){Xt.index>$t?(pn=Xt,Xt=null):pn=Xt.sibling;var wa=nt(X,Xt,Te.value,ht);if(wa===null){Xt===null&&(Xt=pn);break}e&&Xt&&wa.alternate===null&&n(X,Xt),V=f(wa,V,$t),ce===null?Ft=wa:ce.sibling=wa,ce=wa,Xt=pn}if(Te.done)return a(X,Xt),Ce&&ja(X,$t),Ft;if(Xt===null){for(;!Te.done;$t++,Te=K.next())Te=mt(X,Te.value,ht),Te!==null&&(V=f(Te,V,$t),ce===null?Ft=Te:ce.sibling=Te,ce=Te);return Ce&&ja(X,$t),Ft}for(Xt=s(Xt);!Te.done;$t++,Te=K.next())Te=it(Xt,X,$t,Te.value,ht),Te!==null&&(e&&Te.alternate!==null&&Xt.delete(Te.key===null?$t:Te.key),V=f(Te,V,$t),ce===null?Ft=Te:ce.sibling=Te,ce=Te);return e&&Xt.forEach(function(Lx){return n(X,Lx)}),Ce&&ja(X,$t),Ft}function Pe(X,V,K,ht){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;V!==null;){if(V.key===Ft){if(Ft=K.type,Ft===A){if(V.tag===7){a(X,V.sibling),ht=u(V,K.props.children),ht.return=X,X=ht;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Jp(Ft)===V.type){a(X,V.sibling),ht=u(V,K.props),js(ht,K),ht.return=X,X=ht;break t}a(X,V);break}else n(X,V);V=V.sibling}K.type===A?(ht=Ya(K.props.children,X.mode,ht,K.key),ht.return=X,X=ht):(ht=$o(K.type,K.key,K.props,null,X.mode,ht),js(ht,K),ht.return=X,X=ht)}return S(X);case y:t:{for(Ft=K.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(X,V.sibling),ht=u(V,K.children||[]),ht.return=X,X=ht;break t}else{a(X,V);break}else n(X,V);V=V.sibling}ht=ju(K,X.mode,ht),ht.return=X,X=ht}return S(X);case Z:return Ft=K._init,K=Ft(K._payload),Pe(X,V,K,ht)}if(ft(K))return te(X,V,K,ht);if(ot(K)){if(Ft=ot(K),typeof Ft!="function")throw Error(r(150));return K=Ft.call(K),Qt(X,V,K,ht)}if(typeof K.then=="function")return Pe(X,V,gl(K),ht);if(K.$$typeof===N)return Pe(X,V,il(X,K),ht);_l(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(X,V.sibling),ht=u(V,K),ht.return=X,X=ht):(a(X,V),ht=Zu(K,X.mode,ht),ht.return=X,X=ht),S(X)):a(X,V)}return function(X,V,K,ht){try{Zs=0;var Ft=Pe(X,V,K,ht);return Br=null,Ft}catch(Xt){if(Xt===Fs||Xt===rl)throw Xt;var ce=kn(29,Xt,null,X.mode);return ce.lanes=ht,ce.return=X,ce}finally{}}}var Ir=$p(!0),tm=$p(!1),ii=tt(null),xi=null;function pa(e){var n=e.alternate;St(on,on.current&1),St(ii,e),xi===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(xi=e)}function em(e){if(e.tag===22){if(St(on,on.current),St(ii,e),xi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(xi=e)}}else ma()}function ma(){St(on,on.current),St(ii,ii.current)}function Gi(e){vt(ii),xi===e&&(xi=null),vt(on)}var on=tt(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||vf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Cc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wc={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Yn(),u=fa(s);u.payload=n,a!=null&&(u.callback=a),n=ha(e,u,s),n!==null&&(Zn(n,e,s),Gs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Yn(),u=fa(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ha(e,u,s),n!==null&&(Zn(n,e,s),Gs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yn(),s=fa(a);s.tag=2,n!=null&&(s.callback=n),n=ha(e,s,a),n!==null&&(Zn(n,e,a),Gs(n,e,a))}};function nm(e,n,a,s,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Us(a,s)||!Us(u,f):!0}function im(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&wc.enqueueReplaceState(n,n.state,null)}function nr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function am(e){xl(e)}function rm(e){console.error(e)}function sm(e){xl(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function om(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Dc(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function lm(e){return e=fa(e),e.tag=3,e}function um(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){om(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){om(n,a,s),typeof u!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function L0(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 13:return xi===null?tf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===rc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),nf(e,s,u)),!1;case 22:return a.flags|=65536,s===rc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),nf(e,s,u)),!1}throw Error(r(435,a.tag))}return nf(e,s,u),tf(),!1}if(Ce)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Ju&&(e=Error(r(422),{cause:s}),Ps($n(e,a)))):(s!==Ju&&(n=Error(r(423),{cause:s}),Ps($n(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=$n(s,a),u=Dc(e.stateNode,s,u),lc(e,u),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),no===null?no=[f]:no.push(f),je!==4&&(je=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Dc(a.stateNode,s,e),lc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lm(u),um(u,e,a,s),lc(a,u),!1}a=a.return}while(a!==null);return!1}var cm=Error(r(461)),hn=!1;function xn(e,n,a,s){n.child=e===null?tm(n,null,a,s):Ir(n,e.child,a,s)}function fm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return $a(n),s=dc(e,n,a,S,f,u),T=pc(),e!==null&&!hn?(mc(e,n,u),Vi(e,n,u)):(Ce&&T&&Ku(n),n.flags|=1,xn(e,n,s,u),n.child)}function hm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!Yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,dm(e,n,f,s,u)):(e=$o(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ic(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Us,a(S,s)&&e.ref===n.ref)return Vi(e,n,u)}return n.flags|=1,e=Pi(f,s),e.ref=n.ref,e.return=n,n.child=e}function dm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Us(f,s)&&e.ref===n.ref)if(hn=!1,n.pendingProps=s=f,Ic(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,Vi(e,n,u)}return Uc(e,n,a,s,u)}function pm(e,n,a){var s=n.pendingProps,u=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return mm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,f!==null?f.cachePool:null),f!==null?dp(n,f):cc(),em(n);else return n.lanes=n.childLanes=536870912,mm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(al(n,f.cachePool),dp(n,f),ma(),n.memoizedState=null):(e!==null&&al(n,null),cc(),ma());return xn(e,n,u,a),n.child}function mm(e,n,a,s){var u=ac();return u=u===null?null:{parent:sn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&al(n,null),cc(),em(n),e!==null&&zs(e,n,s,!0),null}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uc(e,n,a,s,u){return $a(n),a=dc(e,n,a,s,void 0,u),s=pc(),e!==null&&!hn?(mc(e,n,u),Vi(e,n,u)):(Ce&&s&&Ku(n),n.flags|=1,xn(e,n,a,u),n.child)}function gm(e,n,a,s,u,f){return $a(n),n.updateQueue=null,a=mp(n,s,a,u),pp(e),s=pc(),e!==null&&!hn?(mc(e,n,f),Vi(e,n,f)):(Ce&&s&&Ku(n),n.flags|=1,xn(e,n,a,f),n.child)}function _m(e,n,a,s,u){if($a(n),n.stateNode===null){var f=Cr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},sc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):Cr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Cc(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&wc.enqueueReplaceState(f,f.state,null),ks(n,s,f,u),Vs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,O=nr(a,T);f.props=O;var J=f.context,ut=a.contextType;S=Cr,typeof ut=="object"&&ut!==null&&(S=Tn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&im(n,f,s,S),ca=!1;var nt=n.memoizedState;f.state=nt,ks(n,s,f,u),Vs(),J=n.memoizedState,T||nt!==J||ca?(typeof mt=="function"&&(Cc(n,a,mt,s),J=n.memoizedState),(O=ca||nm(n,a,O,s,nt,J,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,oc(e,n),S=n.memoizedProps,ut=nr(a,S),f.props=ut,mt=n.pendingProps,nt=f.context,J=a.contextType,O=Cr,typeof J=="object"&&J!==null&&(O=Tn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||nt!==O)&&im(n,f,s,O),ca=!1,nt=n.memoizedState,f.state=nt,ks(n,s,f,u),Vs();var it=n.memoizedState;S!==mt||nt!==it||ca||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof T=="function"&&(Cc(n,a,T,s),it=n.memoizedState),(ut=ca||nm(n,a,ut,s,nt,it,O)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=O,s=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ml(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Ir(n,e.child,null,u),n.child=Ir(n,null,a,u)):xn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Vi(e,n,u),e}function vm(e,n,a,s){return Os(),n.flags|=256,xn(e,n,a,s),n.child}var Lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:rp()}}function Oc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function xm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?pa(n):ma(),Ce){var T=Ze,O;if(O=T){t:{for(O=T,T=vi;O.nodeType!==8;){if(!T){T=null;break t}if(O=ci(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:Za!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},O=kn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Cn=n,Ze=null,O=!0):O=!1}O||Qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return vf(T)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return T=s.children,s=s.fallback,u?(ma(),u=n.mode,T=yl({mode:"hidden",children:T},u),s=Ya(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=Nc(a),u.childLanes=Oc(e,S,a),n.memoizedState=Lc,s):(pa(n),Pc(n,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=zc(e,n,a)):n.memoizedState!==null?(ma(),n.child=e.child,n.flags|=128,n=null):(ma(),u=s.fallback,T=n.mode,s=yl({mode:"visible",children:s.children},T),u=Ya(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Ir(n,e.child,null,a),s=n.child,s.memoizedState=Nc(a),s.childLanes=Oc(e,S,a),n.memoizedState=Lc,n=u);else if(pa(n),vf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Ps({value:s,source:null,stack:null}),n=zc(e,n,a)}else if(hn||zs(e,n,a,!1),S=(a&e.childLanes)!==0,hn||S){if(S=ke,S!==null&&(s=a&-a,s=(s&42)!==0?1:ee(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,Rr(e,s),Zn(S,e,s),cm;T.data==="$?"||tf(),n=zc(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,Ze=ci(T.nextSibling),Cn=n,Ce=!0,Ka=null,vi=!1,e!==null&&(ei[ni++]=zi,ei[ni++]=Bi,ei[ni++]=Za,zi=e.id,Bi=e.overflow,Za=n),n=Pc(n,s.children),n.flags|=4096);return n}return u?(ma(),u=s.fallback,T=n.mode,O=e.child,J=O.sibling,s=Pi(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,J!==null?u=Pi(J,u):(u=Ya(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=e.child.memoizedState,T===null?T=Nc(a):(O=T.cachePool,O!==null?(J=sn._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=rp(),T={baseLanes:T.baseLanes|a,cachePool:O}),u.memoizedState=T,u.childLanes=Oc(e,S,a),n.memoizedState=Lc,s):(pa(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Pc(e,n){return n=yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yl(e,n){return e=kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zc(e,n,a){return Ir(n,e.child,null,a),e=Pc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),tc(e.return,n,a)}function Bc(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function Mm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(xn(e,n,s.children,a),s=on.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sm(e,a,n);else if(e.tag===19)Sm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(St(on,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Bc(n,!0,a,null,f);break;case"together":Bc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ic(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function N0(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ua(n,sn,e.memoizedState.cache),Os();break;case 27:case 5:Kt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xm(e,n,a):(pa(n),e=Vi(e,n,a),e!==null?e.sibling:null);pa(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zs(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Mm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(on,on.current),s)break;return null;case 22:case 23:return n.lanes=0,pm(e,n,a);case 24:ua(n,sn,e.memoizedState.cache)}return Vi(e,n,a)}function ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Ic(e,a)&&(n.flags&128)===0)return hn=!1,N0(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ce&&(n.flags&1048576)!==0&&Jd(n,el,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Yu(s)?(e=nr(s,e),n.tag=1,n=_m(null,n,s,e,a)):(n.tag=0,n=Uc(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===D){n.tag=11,n=fm(null,n,s,e,a);break t}else if(u===I){n.tag=14,n=hm(null,n,s,e,a);break t}}throw n=gt(s)||s,Error(r(306,n,""))}}return n;case 0:return Uc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=nr(s,n.pendingProps),_m(e,n,s,u,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,oc(e,n),ks(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ua(n,sn,s),s!==f.cache&&ec(n,[sn],a,!0),Vs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=vm(e,n,s,a);break t}else if(s!==u){u=$n(Error(r(424)),n),Ps(u),n=vm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=ci(e.firstChild),Cn=n,Ce=!0,Ka=null,vi=!0,a=tm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),s===u){n=Vi(e,n,a);break t}xn(e,n,s,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=Ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,s=zl(Mt.current).createElement(a),s[an]=n,s[_n]=e,Mn(s,a,e),$e(s),n.stateNode=s):n.memoizedState=Ag(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ce&&(s=n.stateNode=Eg(n.type,n.pendingProps,Mt.current),Cn=n,vi=!0,u=Ze,Ta(n.type)?(xf=u,Ze=ci(s.firstChild)):Ze=u),xn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=s=Ze)&&(s=ox(s,n.type,n.pendingProps,vi),s!==null?(n.stateNode=s,Cn=n,Ze=ci(s.firstChild),vi=!1,u=!0):u=!1),u||Qa(n)),Kt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,mf(u,f)?s=null:S!==null&&mf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=dc(e,n,b0,null,null,a),fo._currentValue=u),Ml(e,n),xn(e,n,s,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=lx(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Cn=n,Ze=null,e=!0):e=!1),e||Qa(n)),null;case 13:return xm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ir(n,null,s,a):xn(e,n,s,a),n.child;case 11:return fm(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),xn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,$a(n),u=Tn(u),s=s(u),n.flags|=1,xn(e,n,s,a),n.child;case 14:return hm(e,n,n.type,n.pendingProps,a);case 15:return dm(e,n,n.type,n.pendingProps,a);case 19:return Mm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=yl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return pm(e,n,a);case 24:return $a(n),s=Tn(sn),e===null?(u=ac(),u===null&&(u=ke,f=nc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},sc(n),ua(n,sn,u)):((e.lanes&a)!==0&&(oc(e,n),ks(n,null,null,a),Vs()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ua(n,sn,s)):(s=f.cache,ua(n,sn,s),s!==u.cache&&ec(n,[sn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(e){e.flags|=4}function Em(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ug(n)){if(n=ii.current,n!==null&&((xe&4194048)===xe?xi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==xi))throw Hs=rc,sp;e.flags|=8192}}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Vr|=n)}function Ks(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function O0(e,n,a){var s=n.pendingProps;switch(Qu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(sn),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ns(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ep())),qe(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(qe(n),Em(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),qe(n),Em(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&ki(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=Mt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Q.current,Ns(n)?$d(n):(e=Eg(u,s,a),n.stateNode=e,ki(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Q.current,Ns(n))$d(n);else{switch(u=zl(Mt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[an]=n,e[_n]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Ns(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||gg(e.nodeValue,a)),e||Qa(n)}else e=zl(e).createTextNode(s),e[an]=n,n.stateNode=e}return qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ns(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),qe(n),null;case 4:return se(),e===null&&cf(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(vt(on),u=n.memoizedState,u===null)return qe(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Ks(u,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,Ks(u,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qd(a,e),a=a.sibling;return St(on,on.current&1|2),n.child}e=e.sibling}u.tail!==null&&fe()>Al&&(n.flags|=128,s=!0,Ks(u,!1),n.lanes=4194304)}else{if(!s)if(e=vl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),Ks(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ce)return qe(n),null}else 2*fe()-u.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,s=!0,Ks(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=fe(),n.sibling=null,e=on.current,St(on,s?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Gi(n),fc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&vt(tr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function P0(e,n){switch(Qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(sn),se(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(on),null;case 4:return se(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),fc(),e!==null&&vt(tr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(sn),null;case 25:return null;default:return null}}function Tm(e,n){switch(Qu(n),n.tag){case 3:Fi(sn),se();break;case 26:case 27:case 5:Le(n);break;case 4:se();break;case 13:Gi(n);break;case 19:vt(on);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),fc(),e!==null&&vt(tr);break;case 24:Fi(sn)}}function Qs(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){He(n,n.return,T)}}function ga(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var O=a,J=T;try{J()}catch(ut){He(u,O,ut)}}}s=s.next}while(s!==f)}}catch(ut){He(n,n.return,ut)}}function bm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hp(n,a)}catch(s){He(e,e.return,s)}}}function Am(e,n,a){a.props=nr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){He(e,n,s)}}function Js(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){He(e,n,u)}}function Si(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function Rm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function Fc(e,n,a){try{var s=e.stateNode;nx(s,e.type,a,n),s[_n]=n}catch(u){He(e,e.return,u)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Hc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pl));else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Gc(e,n,a),e=e.sibling;e!==null;)Gc(e,n,a),e=e.sibling}function Tl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tl(e,n,a),e=e.sibling;e!==null;)Tl(e,n,a),e=e.sibling}function wm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,s,a),n[an]=e,n[_n]=a}catch(f){He(e,e.return,f)}}var Xi=!1,Je=!1,Vc=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,dn=null;function z0(e,n){if(e=e.containerInfo,df=Vl,e=Gd(e),Hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,O=-1,J=0,ut=0,mt=e,nt=null;e:for(;;){for(var it;mt!==a||u!==0&&mt.nodeType!==3||(T=S+u),mt!==f||s!==0&&mt.nodeType!==3||(O=S+s),mt.nodeType===3&&(S+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===e)break e;if(nt===a&&++J===u&&(T=S),nt===f&&++ut===s&&(O=S),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(pf={focusedElem:e,selectionRange:a},Vl=!1,dn=n;dn!==null;)if(n=dn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,dn=e;else for(;dn!==null;){switch(n=dn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var te=nr(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(te,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){He(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)_f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,dn=e;break}dn=n.return}}function Um(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),s&4&&Qs(5,a);break;case 1:if(_a(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var u=nr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}s&64&&bm(a),s&512&&Js(a,a.return);break;case 3:if(_a(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&s&4&&wm(a);case 26:case 5:_a(e,a),n===null&&s&4&&Rm(a),s&512&&Js(a,a.return);break;case 12:_a(e,a);break;case 13:_a(e,a),s&4&&Om(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=W0.bind(null,a),ux(e,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||Je,u=Xi;var f=Je;Xi=s,(Je=n)&&!f?va(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),Xi=u,Je=f}break;case 30:break;default:_a(e,a)}}function Lm(e){var n=e.alternate;n!==null&&(e.alternate=null,Lm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ra(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Pn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Nm(e,n,a),a=a.sibling}function Nm(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:Je||Si(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Si(a,n);var s=Xe,u=Pn;Ta(a.type)&&(Xe=a.stateNode,Pn=!1),Wi(e,n,a),oo(a.stateNode),Xe=s,Pn=u;break;case 5:Je||Si(a,n);case 6:if(s=Xe,u=Pn,Xe=null,Wi(e,n,a),Xe=s,Pn=u,Xe!==null)if(Pn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:Xe!==null&&(Pn?(e=Xe,Mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),go(e)):Mg(Xe,a.stateNode));break;case 4:s=Xe,u=Pn,Xe=a.stateNode.containerInfo,Pn=!0,Wi(e,n,a),Xe=s,Pn=u;break;case 0:case 11:case 14:case 15:Je||ga(2,a,n),Je||ga(4,a,n),Wi(e,n,a);break;case 1:Je||(Si(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Am(a,n,s)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Wi(e,n,a),Je=s;break;default:Wi(e,n,a)}}function Om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{go(e)}catch(a){He(n,n.return,a)}}function B0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dm),n;default:throw Error(r(435,e.tag))}}function kc(e,n){var a=B0(e);n.forEach(function(s){var u=q0.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Ta(T.type)){Xe=T.stateNode,Pn=!1;break t}break;case 5:Xe=T.stateNode,Pn=!1;break t;case 3:case 4:Xe=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(Xe===null)throw Error(r(160));Nm(f,S,u),Xe=null,Pn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Pm(n,e),n=n.sibling}var ui=null;function Pm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),s&4&&(ga(3,e,e.return),Qs(3,e),ga(5,e,e.return));break;case 1:Xn(n,e),Wn(e),s&512&&(Je||a===null||Si(a,a.return)),s&64&&Xi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ui;if(Xn(n,e),Wn(e),s&512&&(Je||a===null||Si(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[aa]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,s,a),f[an]=e,$e(f),s=f;break t;case"link":var S=wg("link","href",u).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=wg("meta","content",u).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=e,$e(f),s=f}e.stateNode=s}else Dg(u,e.type,e.stateNode);else e.stateNode=Cg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Dg(u,e.type,e.stateNode):Cg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Fc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),s&512&&(Je||a===null||Si(a,a.return)),a!==null&&s&4&&Fc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),s&512&&(Je||a===null||Si(a,a.return)),e.flags&32){u=e.stateNode;try{_i(u,"")}catch(it){He(e,e.return,it)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Fc(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Vc=!0);break;case 6:if(Xn(n,e),Wn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(it){He(e,e.return,it)}}break;case 3:if(Fl=null,u=ui,ui=Bl(n.containerInfo),Xn(n,e),ui=u,Wn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(it){He(e,e.return,it)}Vc&&(Vc=!1,zm(e));break;case 4:s=ui,ui=Bl(e.stateNode.containerInfo),Xn(n,e),Wn(e),ui=s;break;case 12:Xn(n,e),Wn(e);break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jc=fe()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,kc(e,s)));break;case 22:u=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,J=Xi,ut=Je;if(Xi=J||u,Je=ut||O,Xn(n,e),Je=ut,Xi=J,Wn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||Xi||Je||ir(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=O.stateNode;var mt=O.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){He(O,O.return,it)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(it){He(O,O.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kc(e,a))));break;case 19:Xn(n,e),Wn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,kc(e,s)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Cm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Hc(e);Tl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(_i(S,""),a.flags&=-33);var T=Hc(e);Tl(e,T,S);break;case 3:case 4:var O=a.stateNode.containerInfo,J=Hc(e);Gc(e,J,O);break;default:throw Error(r(161))}}catch(ut){He(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Um(e,n.alternate,n),n=n.sibling}function ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),ir(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Am(n,n.return,a),ir(n);break;case 27:oo(n.stateNode);case 26:case 5:Si(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:va(u,f,a),Qs(4,f);break;case 1:if(va(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){He(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)fp(O[u],T)}catch(J){He(s,s.return,J)}}a&&S&64&&bm(f),Js(f,f.return);break;case 27:wm(f);case 26:case 5:va(u,f,a),a&&s===null&&S&4&&Rm(f),Js(f,f.return);break;case 12:va(u,f,a);break;case 13:va(u,f,a),a&&S&4&&Om(u,f);break;case 22:f.memoizedState===null&&va(u,f,a),Js(f,f.return);break;case 30:break;default:va(u,f,a)}n=n.sibling}}function Xc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bs(a))}function Wc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bs(e))}function Mi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bm(e,n,a,s),n=n.sibling}function Bm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,s),u&2048&&Qs(9,n);break;case 1:Mi(e,n,a,s);break;case 3:Mi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bs(e)));break;case 12:if(u&2048){Mi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){He(n,n.return,O)}}else Mi(e,n,a,s);break;case 13:Mi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,s):$s(e,n):f._visibility&2?Mi(e,n,a,s):(f._visibility|=2,Fr(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Xc(S,n);break;case 24:Mi(e,n,a,s),u&2048&&Wc(n.alternate,n);break;default:Mi(e,n,a,s)}}function Fr(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,O=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Fr(f,S,T,O,u),Qs(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Fr(f,S,T,O,u):$s(f,S):(ut._visibility|=2,Fr(f,S,T,O,u)),u&&J&2048&&Xc(S.alternate,S);break;case 24:Fr(f,S,T,O,u),u&&J&2048&&Wc(S.alternate,S);break;default:Fr(f,S,T,O,u)}n=n.sibling}}function $s(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:$s(a,s),u&2048&&Xc(s.alternate,s);break;case 24:$s(a,s),u&2048&&Wc(s.alternate,s);break;default:$s(a,s)}n=n.sibling}}var to=8192;function Hr(e){if(e.subtreeFlags&to)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 26:Hr(e),e.flags&to&&e.memoizedState!==null&&yx(ui,e.memoizedState,e.memoizedProps);break;case 5:Hr(e);break;case 3:case 4:var n=ui;ui=Bl(e.stateNode.containerInfo),Hr(e),ui=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=to,to=16777216,Hr(e),to=n):Hr(e));break;default:Hr(e)}}function Fm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Gm(s,e)}Fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 0:case 11:case 15:eo(e),e.flags&2048&&ga(9,e,e.return);break;case 3:eo(e);break;case 12:eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,bl(e)):eo(e);break;default:eo(e)}}function bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Gm(s,e)}Fm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ga(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}e=e.sibling}}function Gm(e,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Bs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else t:for(a=e;dn!==null;){s=dn;var u=s.sibling,f=s.return;if(Lm(s),s===a){dn=null;break t}if(u!==null){u.return=f,dn=u;break t}dn=f}}}var I0={getCacheForType:function(e){var n=Tn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},F0=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,he=null,xe=0,Ue=0,qn=null,xa=!1,Gr=!1,qc=!1,qi=0,je=0,Sa=0,ar=0,Yc=0,ai=0,Vr=0,no=null,zn=null,Zc=!1,jc=0,Al=1/0,Rl=null,Ma=null,Sn=0,ya=null,kr=null,Xr=0,Kc=0,Qc=null,Vm=null,io=0,Jc=null;function Yn(){if((De&2)!==0&&xe!==0)return xe&-xe;if(P.T!==null){var e=Ur;return e!==0?e:sf()}return Ee()}function km(){ai===0&&(ai=(xe&536870912)===0||Ce?k():536870912);var e=ii.current;return e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),Ea(e,xe,ai,!1)),zt(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(ar|=a),je===4&&Ea(e,xe,ai,!1)),yi(e))}function Xm(e,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Rt(e,n),u=s?V0(e,n):ef(e,n,!0),f=s;do{if(u===0){Gr&&!s&&Ea(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!H0(a)){u=ef(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=no;var O=T.current.memoizedState.isDehydrated;if(O&&(Wr(T,S).flags|=256),S=ef(T,S,!1),S!==2){if(qc&&!O){T.errorRecoveryDisabledLanes|=f,ar|=f,u=4;break t}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Wr(e,0),Ea(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,ai,!xa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=jc+300-fe(),10<u)){if(Ea(s,n,ai,!xa),qt(s,0,!0)!==0)break t;s.timeoutHandle=xg(Wm.bind(null,s,a,zn,Rl,Zc,n,ai,ar,Vr,xa,f,2,-0,0),u);break t}Wm(s,a,zn,Rl,Zc,n,ai,ar,Vr,xa,f,0,-0,0)}}break}while(!0);yi(e)}function Wm(e,n,a,s,u,f,S,T,O,J,ut,mt,nt,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(co={stylesheets:null,count:0,unsuspend:Mx},Im(n),mt=Ex(),mt!==null)){e.cancelPendingCommit=mt(Jm.bind(null,e,n,f,a,s,u,S,T,O,ut,1,nt,it)),Ea(e,f,S,!J);return}Jm(e,n,f,a,s,u,S,T,O)}function H0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Vn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(e,n,a,s){n&=~Yc,n&=~ar,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&_t(e,a,n)}function Cl(){return(De&6)===0?(ao(0),!1):!0}function $c(){if(he!==null){if(Ue===0)var e=he.return;else e=he,Ii=Ja=null,gc(e),Br=null,Zs=0,e=he;for(;e!==null;)Tm(e.alternate,e),e=e.return;he=null}}function Wr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$c(),ke=e,he=a=Pi(e.current,null),xe=n,Ue=0,qn=null,xa=!1,Gr=Rt(e,n),qc=!1,Vr=ai=Yc=ar=Sa=je=0,zn=no=null,Zc=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Ot(s),f=1<<u;n|=e[u],s&=~f}return qi=n,Ko(),a}function qm(e,n){ue=null,P.H=ml,n===Fs||n===rl?(n=up(),Ue=3):n===sp?(n=up(),Ue=4):Ue=n===cm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,he===null&&(je=1,Sl(e,$n(n,e.current)))}function Ym(){var e=P.H;return P.H=ml,e===null?ml:e}function Zm(){var e=P.A;return P.A=I0,e}function tf(){je=4,xa||(xe&4194048)!==xe&&ii.current!==null||(Gr=!0),(Sa&134217727)===0&&(ar&134217727)===0||ke===null||Ea(ke,xe,ai,!1)}function ef(e,n,a){var s=De;De|=2;var u=Ym(),f=Zm();(ke!==e||xe!==n)&&(Rl=null,Wr(e,n)),n=!1;var S=je;t:do try{if(Ue!==0&&he!==null){var T=he,O=qn;switch(Ue){case 8:$c(),S=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var J=Ue;if(Ue=0,qn=null,qr(e,T,O,J),a&&Gr){S=0;break t}break;default:J=Ue,Ue=0,qn=null,qr(e,T,O,J)}}G0(),S=je;break}catch(ut){qm(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Ii=Ja=null,De=s,P.H=u,P.A=f,he===null&&(ke=null,xe=0,Ko()),S}function G0(){for(;he!==null;)jm(he)}function V0(e,n){var a=De;De|=2;var s=Ym(),u=Zm();ke!==e||xe!==n?(Rl=null,Al=fe()+500,Wr(e,n)):Gr=Rt(e,n);t:do try{if(Ue!==0&&he!==null){n=he;var f=qn;e:switch(Ue){case 1:Ue=0,qn=null,qr(e,n,f,1);break;case 2:case 9:if(op(f)){Ue=0,qn=null,Km(n);break}n=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),yi(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:op(f)?(Ue=0,qn=null,Km(n)):(Ue=0,qn=null,qr(e,n,f,7));break;case 5:var S=null;switch(he.tag){case 26:S=he.memoizedState;case 5:case 27:var T=he;if(!S||Ug(S)){Ue=0,qn=null;var O=T.sibling;if(O!==null)he=O;else{var J=T.return;J!==null?(he=J,wl(J)):he=null}break e}}Ue=0,qn=null,qr(e,n,f,5);break;case 6:Ue=0,qn=null,qr(e,n,f,6);break;case 8:$c(),je=6;break t;default:throw Error(r(462))}}k0();break}catch(ut){qm(e,ut)}while(!0);return Ii=Ja=null,P.H=s,P.A=u,De=a,he!==null?0:(ke=null,xe=0,Ko(),je)}function k0(){for(;he!==null&&!gn();)jm(he)}function jm(e){var n=ym(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?wl(e):he=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=gm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=gm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:gc(n);default:Tm(a,n),n=he=Qd(n,qi),n=ym(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?wl(e):he=n}function qr(e,n,a,s){Ii=Ja=null,gc(n),Br=null,Zs=0;var u=n.return;try{if(L0(e,u,n,a,xe)){je=1,Sl(e,$n(a,e.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;je=1,Sl(e,$n(a,e.current)),he=null;return}n.flags&32768?(Ce||s===1?e=!0:Gr||(xe&536870912)!==0?e=!1:(xa=e=!0,(s===2||s===9||s===3||s===6)&&(s=ii.current,s!==null&&s.tag===13&&(s.flags|=16384))),Qm(n,e)):wl(n)}function wl(e){var n=e;do{if((n.flags&32768)!==0){Qm(n,xa);return}e=n.return;var a=O0(n.alternate,n,qi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);je===0&&(je=5)}function Qm(e,n){do{var a=P0(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);je=6,he=null}function Jm(e,n,a,s,u,f,S,T,O){e.cancelPendingCommit=null;do Dl();while(Sn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Wu,bt(e,a,f,S,T,O),e===ke&&(he=ke=null,xe=0),kr=n,ya=e,Xr=a,Kc=f,Qc=u,Vm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Y0(ie,function(){return ig(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=j.p,j.p=2,S=De,De|=4;try{z0(e,n,a)}finally{De=S,j.p=u,P.T=s}}Sn=1,$m(),tg(),eg()}}function $m(){if(Sn===1){Sn=0;var e=ya,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=De;De|=4;try{Pm(n,e);var f=pf,S=Gd(e.containerInfo),T=f.focusedElem,O=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Hd(T.ownerDocument.documentElement,T)){if(O!==null&&Hu(T)){var J=O.start,ut=O.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),te=T.textContent.length,Qt=Math.min(O.start,te),Pe=O.end===void 0?Qt:Math.min(O.end,te);!it.extend&&Qt>Pe&&(S=Pe,Pe=Qt,Qt=S);var X=Fd(T,Qt),V=Fd(T,Pe);if(X&&V&&(it.rangeCount!==1||it.anchorNode!==X.node||it.anchorOffset!==X.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(X.node,X.offset),it.removeAllRanges(),Qt>Pe?(it.addRange(K),it.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),it.addRange(K))}}}}for(mt=[],it=T;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var ht=mt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Vl=!!df,pf=df=null}finally{De=u,j.p=s,P.T=a}}e.current=n,Sn=2}}function tg(){if(Sn===2){Sn=0;var e=ya,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=De;De|=4;try{Um(e,n.alternate,n)}finally{De=u,j.p=s,P.T=a}}Sn=3}}function eg(){if(Sn===4||Sn===3){Sn=0,Se();var e=ya,n=kr,a=Xr,s=Vm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,kr=ya=null,ng(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ma=null),we(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=j.p,j.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{P.T=n,j.p=u}}(Xr&3)!==0&&Dl(),yi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Jc?io++:(io=0,Jc=e):io=0,ao(0)}}function ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Bs(n)))}function Dl(e){return $m(),tg(),eg(),ig()}function ig(){if(Sn!==5)return!1;var e=ya,n=Kc;Kc=0;var a=we(Xr),s=P.T,u=j.p;try{j.p=32>a?32:a,P.T=null,a=Qc,Qc=null;var f=ya,S=Xr;if(Sn=0,kr=ya=null,Xr=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,Hm(f.current),Bm(f,f.current,S,a),De=T,ao(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{j.p=u,P.T=s,ng(e,n)}}function ag(e,n,a){n=$n(a,n),n=Dc(e.stateNode,n,2),e=ha(e,n,2),e!==null&&(zt(e,2),yi(e))}function He(e,n,a){if(e.tag===3)ag(e,e,a);else for(;n!==null;){if(n.tag===3){ag(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){e=$n(a,e),a=lm(2),s=ha(n,a,2),s!==null&&(um(a,s,n,e),zt(s,2),yi(s));break}}n=n.return}}function nf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new F0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(qc=!0,u.add(a),e=X0.bind(null,e,n,a),n.then(e,e))}function X0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(xe&a)===a&&(je===4||je===3&&(xe&62914560)===xe&&300>fe()-jc?(De&2)===0&&Wr(e,0):Yc|=a,Vr===xe&&(Vr=0)),yi(e)}function rg(e,n){n===0&&(n=Ut()),e=Rr(e,n),e!==null&&(zt(e,n),yi(e))}function W0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),rg(e,a)}function q0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),rg(e,a)}function Y0(e,n){return pe(e,n)}var Ul=null,Yr=null,af=!1,Ll=!1,rf=!1,rr=0;function yi(e){e!==Yr&&e.next===null&&(Yr===null?Ul=Yr=e:Yr=Yr.next=e),Ll=!0,af||(af=!0,j0())}function ao(e,n){if(!rf&&Ll){rf=!0;do for(var a=!1,s=Ul;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ug(s,f))}else f=xe,f=qt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,ug(s,f));s=s.next}while(a);rf=!1}}function Z0(){sg()}function sg(){Ll=af=!1;var e=0;rr!==0&&(ix()&&(e=rr),rr=0);for(var n=fe(),a=null,s=Ul;s!==null;){var u=s.next,f=og(s,n);f===0?(s.next=null,a===null?Ul=u:a.next=u,u===null&&(Yr=a)):(a=s,(e!==0||(f&3)!==0)&&(Ll=!0)),s=u}ao(e)}function og(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ot(f),T=1<<S,O=u[S];O===-1?((T&a)===0||(T&s)!==0)&&(u[S]=ne(T,n)):O<=n&&(e.expiredLanes|=T),f&=~T}if(n=ke,a=xe,a=qt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&B(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&B(s),we(a)){case 2:case 8:a=Yt;break;case 32:a=ie;break;case 268435456:a=L;break;default:a=ie}return s=lg.bind(null,e),a=pe(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&B(s),e.callbackPriority=2,e.callbackNode=null,2}function lg(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dl()&&e.callbackNode!==a)return null;var s=xe;return s=qt(e,e===ke?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Xm(e,s,n),og(e,fe()),e.callbackNode!=null&&e.callbackNode===a?lg.bind(null,e):null)}function ug(e,n){if(Dl())return null;Xm(e,n,!0)}function j0(){rx(function(){(De&6)!==0?pe(me,Z0):sg()})}function sf(){return rr===0&&(rr=k()),rr}function cg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function K0(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=cg((u[_n]||null).action),S=s.submitter;S&&(n=(n=S[_n]||null)?cg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Yo("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var O=S?fg(u,S):new FormData(u);bc(a,{pending:!0,data:O,method:u.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=S?fg(u,S):new FormData(u),bc(a,{pending:!0,data:O,method:u.method,action:f},f,O))},currentTarget:u}]})}}for(var of=0;of<Xu.length;of++){var lf=Xu[of],Q0=lf.toLowerCase(),J0=lf[0].toUpperCase()+lf.slice(1);li(Q0,"on"+J0)}li(Xd,"onAnimationEnd"),li(Wd,"onAnimationIteration"),li(qd,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(m0,"onTransitionRun"),li(g0,"onTransitionStart"),li(_0,"onTransitionCancel"),li(Yd,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],O=T.instance,J=T.currentTarget;if(T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){xl(ut)}u.currentTarget=null,f=O}else for(S=0;S<s.length;S++){if(T=s[S],O=T.instance,J=T.currentTarget,T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){xl(ut)}u.currentTarget=null,f=O}}}}function de(e,n){var a=n[Ga];a===void 0&&(a=n[Ga]=new Set);var s=e+"__bubble";a.has(s)||(dg(n,e,2,!1),a.add(s))}function uf(e,n,a){var s=0;n&&(s|=4),dg(a,e,s,n)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function cf(e){if(!e[Nl]){e[Nl]=!0,Go.forEach(function(a){a!=="selectionchange"&&($0.has(a)||uf(a,!1,e),uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Nl]||(n[Nl]=!0,uf("selectionchange",!1,n))}}function dg(e,n,a,s){switch(Bg(n)){case 2:var u=Ax;break;case 8:u=Rx;break;default:u=Tf}a=u.bind(null,n,a,e),u=void 0,!Uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ff(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=wi(T),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Sd(function(){var J=f,ut=wu(a),mt=[];t:{var nt=Zd.get(e);if(nt!==void 0){var it=Yo,te=e;switch(e){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":it=Yv;break;case"focusin":te="focus",it=Pu;break;case"focusout":te="blur",it=Pu;break;case"beforeblur":case"afterblur":it=Pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Kv;break;case Xd:case Wd:case qd:it=Iv;break;case Yd:it=Jv;break;case"scroll":case"scrollend":it=Nv;break;case"wheel":it=t0;break;case"copy":case"cut":case"paste":it=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=bd;break;case"toggle":case"beforetoggle":it=n0}var Qt=(n&4)!==0,Pe=!Qt&&(e==="scroll"||e==="scrollend"),X=Qt?nt!==null?nt+"Capture":null:nt;Qt=[];for(var V=J,K;V!==null;){var ht=V;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||X===null||(ht=Ts(V,X),ht!=null&&Qt.push(so(V,ht,K))),Pe)break;V=V.return}0<Qt.length&&(nt=new it(nt,te,null,a,ut),mt.push({event:nt,listeners:Qt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Cu&&(te=a.relatedTarget||a.fromElement)&&(wi(te)||te[Ln]))break t;if((it||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=J,te=te?wi(te):null,te!==null&&(Pe=c(te),Qt=te.tag,te!==Pe||Qt!==5&&Qt!==27&&Qt!==6)&&(te=null)):(it=null,te=J),it!==te)){if(Qt=Ed,ht="onMouseLeave",X="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=bd,ht="onPointerLeave",X="onPointerEnter",V="pointer"),Pe=it==null?nt:ka(it),K=te==null?nt:ka(te),nt=new Qt(ht,V+"leave",it,a,ut),nt.target=Pe,nt.relatedTarget=K,ht=null,wi(ut)===J&&(Qt=new Qt(X,V+"enter",te,a,ut),Qt.target=K,Qt.relatedTarget=Pe,ht=Qt),Pe=ht,it&&te)e:{for(Qt=it,X=te,V=0,K=Qt;K;K=Zr(K))V++;for(K=0,ht=X;ht;ht=Zr(ht))K++;for(;0<V-K;)Qt=Zr(Qt),V--;for(;0<K-V;)X=Zr(X),K--;for(;V--;){if(Qt===X||X!==null&&Qt===X.alternate)break e;Qt=Zr(Qt),X=Zr(X)}Qt=null}else Qt=null;it!==null&&pg(mt,nt,it,Qt,!1),te!==null&&Pe!==null&&pg(mt,Pe,te,Qt,!0)}}t:{if(nt=J?ka(J):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=Nd;else if(Ud(nt))if(Od)Ft=h0;else{Ft=c0;var ce=u0}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Ru(J.elementType)&&(Ft=Nd):Ft=f0;if(Ft&&(Ft=Ft(e,J))){Ld(mt,Ft,a,ut);break t}ce&&ce(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&En(nt,"number",nt.value)}switch(ce=J?ka(J):window,e){case"focusin":(Ud(ce)||ce.contentEditable==="true")&&(Tr=ce,Gu=J,Ls=null);break;case"focusout":Ls=Gu=Tr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Vd(mt,a,ut);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":Vd(mt,a,ut)}var Xt;if(Bu)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Er?wd(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Ad&&a.locale!=="ko"&&(Er||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Er&&(Xt=Md()):(la=ut,Lu="value"in la?la.value:la.textContent,Er=!0)),ce=Ol(J,$t),0<ce.length&&($t=new Td($t,e,null,a,ut),mt.push({event:$t,listeners:ce}),Xt?$t.data=Xt:(Xt=Dd(a),Xt!==null&&($t.data=Xt)))),(Xt=a0?r0(e,a):s0(e,a))&&($t=Ol(J,"onBeforeInput"),0<$t.length&&(ce=new Td("onBeforeInput","beforeinput",null,a,ut),mt.push({event:ce,listeners:$t}),ce.data=Xt)),K0(mt,e,J,a,ut)}hg(mt,n)})}function so(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ol(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ts(e,a),u!=null&&s.unshift(so(e,u,f)),u=Ts(e,n),u!=null&&s.push(so(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pg(e,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,O=T.alternate,J=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||J===null||(O=J,u?(J=Ts(a,f),J!=null&&S.unshift(so(a,J,O))):u||(J=Ts(a,f),J!=null&&S.push(so(a,J,O)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var tx=/\r\n?/g,ex=/\u0000|\uFFFD/g;function mg(e){return(typeof e=="string"?e:""+e).replace(tx,`
`).replace(ex,"")}function gg(e,n){return n=mg(n),mg(e)===n}function Pl(){}function Oe(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||_i(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&_i(e,""+s);break;case"className":wt(e,"class",s);break;case"tabIndex":wt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,s);break;case"style":vd(e,s,f);break;case"data":if(n!=="object"){wt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pl);break;case"onScroll":s!=null&&de("scroll",e);break;case"onScrollEnd":s!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":de("beforetoggle",e),de("toggle",e),Tt(e,"popover",s);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Uv.get(a)||a,Tt(e,a,s))}}function hf(e,n,a,s,u,f){switch(a){case"style":vd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?_i(e,s):(typeof s=="number"||typeof s=="bigint")&&_i(e,""+s);break;case"onScroll":s!=null&&de("scroll",e);break;case"onScrollEnd":s!=null&&de("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Tt(e,a,s)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),s&&Oe(e,n,"src",a.src,a,null);return;case"input":de("invalid",e);var T=f=S=u=null,O=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":S=ut;break;case"checked":O=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Oe(e,n,s,ut,a,null)}}Fe(e,f,T,O,J,S,u,!1),Ye(e);return;case"select":de("invalid",e),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Oe(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?rn(e,!!s,n,!1):a!=null&&rn(e,!!s,a,!0);return;case"textarea":de("invalid",e),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(e,n,S,T,a,null)}vn(e,s,u,f),Ye(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(e,n,O,s,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(s=0;s<ro.length;s++)de(ro[s],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,J,s,a,null)}return;default:if(Ru(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&hf(e,n,ut,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Oe(e,n,T,s,a,null))}function nx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,O=null,J=null,ut=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=mt;default:s.hasOwnProperty(it)||Oe(e,n,it,null,s,mt)}}for(var nt in s){var it=s[nt];if(mt=a[nt],s.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":f=it;break;case"name":u=it;break;case"checked":J=it;break;case"defaultChecked":ut=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==mt&&Oe(e,n,nt,it,s,mt)}}Li(e,S,T,O,J,ut,f,u);return;case"select":it=S=T=nt=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":it=O;default:s.hasOwnProperty(f)||Oe(e,n,f,null,s,O)}for(u in s)if(f=s[u],O=a[u],s.hasOwnProperty(u)&&(f!=null||O!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==O&&Oe(e,n,u,f,s,O)}n=T,a=S,s=it,nt!=null?rn(e,!!a,nt,!1):!!s!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(e,n,S,u,s,f)}fn(e,nt,it);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!s.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Oe(e,n,te,null,s,nt)}for(O in s)if(nt=s[O],it=a[O],s.hasOwnProperty(O)&&nt!==it&&(nt!=null||it!=null))switch(O){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Oe(e,n,O,nt,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)nt=a[Qt],a.hasOwnProperty(Qt)&&nt!=null&&!s.hasOwnProperty(Qt)&&Oe(e,n,Qt,null,s,nt);for(J in s)if(nt=s[J],it=a[J],s.hasOwnProperty(J)&&nt!==it&&(nt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Oe(e,n,J,nt,s,it)}return;default:if(Ru(n)){for(var Pe in a)nt=a[Pe],a.hasOwnProperty(Pe)&&nt!==void 0&&!s.hasOwnProperty(Pe)&&hf(e,n,Pe,void 0,s,nt);for(ut in s)nt=s[ut],it=a[ut],!s.hasOwnProperty(ut)||nt===it||nt===void 0&&it===void 0||hf(e,n,ut,nt,s,it);return}}for(var X in a)nt=a[X],a.hasOwnProperty(X)&&nt!=null&&!s.hasOwnProperty(X)&&Oe(e,n,X,null,s,nt);for(mt in s)nt=s[mt],it=a[mt],!s.hasOwnProperty(mt)||nt===it||nt==null&&it==null||Oe(e,n,mt,nt,s,it)}var df=null,pf=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function _g(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function mf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gf=null;function ix(){var e=window.event;return e&&e.type==="popstate"?e===gf?!1:(gf=e,!0):(gf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(sx)}:xg;function sx(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Mg(e,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&oo(S.documentElement),a&2&&oo(S.body),a&4)for(a=S.head,oo(a),S=a.firstChild;S;){var T=S.nextSibling,O=S.nodeName;S[aa]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){e.removeChild(f),go(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);go(n)}function _f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_f(a),ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ox(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function lx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ux(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var xf=null;function yg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Eg(e,n,a){switch(n=zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ra(e)}var ri=new Map,Tg=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=j.d;j.d={f:cx,r:fx,D:hx,C:dx,L:px,m:mx,X:_x,S:gx,M:vx};function cx(){var e=Yi.f(),n=Cl();return e||n}function fx(e){var n=Di(e);n!==null&&n.tag===5&&n.type==="form"?Xp(n):Yi.r(e)}var jr=typeof document>"u"?null:document;function bg(e,n,a){var s=jr;if(s&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Tg.has(u)||(Tg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Mn(n,"link",e),$e(n),s.head.appendChild(n)))}}function hx(e){Yi.D(e),bg("dns-prefetch",e,null)}function dx(e,n){Yi.C(e,n),bg("preconnect",e,n)}function px(e,n,a){Yi.L(e,n,a);var s=jr;if(s&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var f=u;switch(n){case"style":f=Kr(e);break;case"script":f=Qr(e)}ri.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(lo(f))||n==="script"&&s.querySelector(uo(f))||(n=s.createElement("link"),Mn(n,"link",e),$e(n),s.head.appendChild(n)))}}function mx(e,n){Yi.m(e,n);var a=jr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(s)+'"][href="'+Ve(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(e)}if(!ri.has(f)&&(e=g({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uo(f)))return}s=a.createElement("link"),Mn(s,"link",e),$e(s),a.head.appendChild(s)}}}function gx(e,n,a){Yi.S(e,n,a);var s=jr;if(s&&e){var u=sa(s).hoistableStyles,f=Kr(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(lo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Sf(e,a);var O=S=s.createElement("link");$e(O),Mn(O,"link",e),O._p=new Promise(function(J,ut){O.onload=J,O.onerror=ut}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Il(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function _x(e,n){Yi.X(e,n);var a=jr;if(a&&e){var s=sa(a).hoistableScripts,u=Qr(e),f=s.get(u);f||(f=a.querySelector(uo(u)),f||(e=g({src:e,async:!0},n),(n=ri.get(u))&&Mf(e,n),f=a.createElement("script"),$e(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function vx(e,n){Yi.M(e,n);var a=jr;if(a&&e){var s=sa(a).hoistableScripts,u=Qr(e),f=s.get(u);f||(f=a.querySelector(uo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ri.get(u))&&Mf(e,n),f=a.createElement("script"),$e(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Ag(e,n,a,s){var u=(u=Mt.current)?Bl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Kr(a.href),a=sa(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kr(a.href);var f=sa(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(lo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||xx(u,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(a),a=sa(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Kr(e){return'href="'+Ve(e)+'"'}function lo(e){return'link[rel="stylesheet"]['+e+"]"}function Rg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function xx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),$e(n),e.head.appendChild(n))}function Qr(e){return'[src="'+Ve(e)+'"]'}function uo(e){return"script[async]"+e}function Cg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(s)return n.instance=s,$e(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),$e(s),Mn(s,"style",u),Il(s,a.precedence,e),n.instance=s;case"stylesheet":u=Kr(a.href);var f=e.querySelector(lo(u));if(f)return n.state.loading|=4,n.instance=f,$e(f),f;s=Rg(a),(u=ri.get(u))&&Sf(s,u),f=(e.ownerDocument||e).createElement("link"),$e(f);var S=f;return S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Mn(f,"link",s),n.state.loading|=4,Il(f,a.precedence,e),n.instance=f;case"script":return f=Qr(a.src),(u=e.querySelector(uo(f)))?(n.instance=u,$e(u),u):(s=a,(u=ri.get(f))&&(s=g({},a),Mf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),$e(u),Mn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Il(s,a.precedence,e));return n.instance}function Il(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Sf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fl=null;function wg(e,n,a){if(Fl===null){var s=new Map,u=Fl=new Map;u.set(a,s)}else u=Fl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[aa]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Dg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Sx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var co=null;function Mx(){}function yx(e,n,a){if(co===null)throw Error(r(475));var s=co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Kr(a.href),f=e.querySelector(lo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Hl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,$e(f);return}f=e.ownerDocument||e,a=Rg(a),(u=ri.get(u))&&Sf(a,u),f=f.createElement("link"),$e(f);var S=f;S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Hl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ex(){if(co===null)throw Error(r(475));var e=co;return e.stylesheets&&e.count===0&&yf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&yf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)yf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function yf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,n.forEach(Tx,e),Gl=null,Hl.call(e))}function Tx(e,n){if(!(n.state.loading&4)){var a=Gl.get(e);if(a)var s=a.get(null);else{a=new Map,Gl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=Hl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var fo={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function bx(e,n,a,s,u,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Lg(e,n,a,s,u,f,S,T,O,J,ut,mt){return e=new bx(e,n,a,S,T,O,J,mt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),e.current=f,f.stateNode=e,n=nc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},sc(f),e}function Ng(e){return e?(e=Cr,e):Cr}function Og(e,n,a,s,u,f){u=Ng(u),s.context===null?s.context=u:s.pendingContext=u,s=fa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ha(e,s,n),a!==null&&(Zn(a,e,n),Gs(a,e,n))}function Pg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ef(e,n){Pg(e,n),(e=e.alternate)&&Pg(e,n)}function zg(e){if(e.tag===13){var n=Rr(e,67108864);n!==null&&Zn(n,e,67108864),Ef(e,67108864)}}var Vl=!0;function Ax(e,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=2,Tf(e,n,a,s)}finally{j.p=f,P.T=u}}function Rx(e,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=8,Tf(e,n,a,s)}finally{j.p=f,P.T=u}}function Tf(e,n,a,s){if(Vl){var u=bf(s);if(u===null)ff(e,n,s,kl,a),Ig(e,s);else if(wx(u,e,n,a,s))s.stopPropagation();else if(Ig(e,s),n&4&&-1<Cx.indexOf(e)){for(;u!==null;){var f=Di(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Wt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var O=1<<31-Ot(S);T.entanglements[1]|=O,S&=~O}yi(f),(De&6)===0&&(Al=fe()+500,ao(0))}}break;case 13:T=Rr(f,2),T!==null&&Zn(T,f,2),Cl(),Ef(f,2)}if(f=bf(s),f===null&&ff(e,n,s,kl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else ff(e,n,s,null,a)}}function bf(e){return e=wu(e),Af(e)}var kl=null;function Af(e){if(kl=null,e=wi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return kl=e,null}function Bg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case me:return 2;case Yt:return 8;case ie:case Ke:return 32;case L:return 268435456;default:return 32}default:return 32}}var Rf=!1,ba=null,Aa=null,Ra=null,ho=new Map,po=new Map,Ca=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ig(e,n){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(n.pointerId)}}function mo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Di(n),n!==null&&zg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wx(e,n,a,s,u){switch(n){case"focusin":return ba=mo(ba,e,n,a,s,u),!0;case"dragenter":return Aa=mo(Aa,e,n,a,s,u),!0;case"mouseover":return Ra=mo(Ra,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return ho.set(f,mo(ho.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,po.set(f,mo(po.get(f)||null,e,n,a,s,u)),!0}return!1}function Fg(e){var n=wi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Gn(e.priority,function(){if(a.tag===13){var s=Yn();s=ee(s);var u=Rr(a,s);u!==null&&Zn(u,a,s),Ef(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Cu=s,a.target.dispatchEvent(s),Cu=null}else return n=Di(a),n!==null&&zg(n),e.blockedOn=a,!1;n.shift()}return!0}function Hg(e,n,a){Xl(e)&&a.delete(n)}function Dx(){Rf=!1,ba!==null&&Xl(ba)&&(ba=null),Aa!==null&&Xl(Aa)&&(Aa=null),Ra!==null&&Xl(Ra)&&(Ra=null),ho.forEach(Hg),po.forEach(Hg)}function Wl(e,n){e.blockedOn===n&&(e.blockedOn=null,Rf||(Rf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dx)))}var ql=null;function Gg(e){ql!==e&&(ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Af(s||a)===null)continue;break}var f=Di(a);f!==null&&(e.splice(n,3),n-=3,bc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function go(e){function n(O){return Wl(O,e)}ba!==null&&Wl(ba,e),Aa!==null&&Wl(Aa,e),Ra!==null&&Wl(Ra,e),ho.forEach(n),po.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[_n]||null;if(typeof f=="function")S||Gg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[_n]||null)T=S.formAction;else if(Af(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Gg(a)}}}function Cf(e){this._internalRoot=e}Yl.prototype.render=Cf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Og(a,s,e,n,null,null)},Yl.prototype.unmount=Cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Og(e.current,2,null,e,null,null),Cl(),n[Ln]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Fg(e)}};var Vg=t.version;if(Vg!=="19.1.0")throw Error(r(527,Vg,"19.1.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ux={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{ct=Zl.inject(Ux),dt=Zl}catch{}}return vo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=am,f=rm,S=sm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Lg(e,1,!1,null,null,a,s,u,f,S,T,null),e[Ln]=n.current,cf(e),new Cf(n)},vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=am,S=rm,T=sm,O=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Lg(e,1,!0,n,a??null,s,u,f,S,T,O,J),n.context=Ng(null),a=n.current,s=Yn(),s=ee(s),u=fa(s),u.callback=null,ha(a,u,s),a=s,n.current.lanes=a,zt(n,a),yi(n),e[Ln]=n.current,cf(e),new Yl(n)},vo.version="19.1.0",vo}var Jg;function Gx(){if(Jg)return Uf.exports;Jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Uf.exports=Hx(),Uf.exports}var Vx=Gx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="177",kx=0,$g=1,Xx=2,ev=1,nv=2,$i=3,Fa=0,Fn=1,Ti=2,Ba=0,ds=1,t_=2,e_=3,n_=4,Wx=5,mr=100,qx=101,Yx=102,Zx=103,jx=104,Kx=200,Qx=201,Jx=202,$x=203,ph=204,mh=205,tS=206,eS=207,nS=208,iS=209,aS=210,rS=211,sS=212,oS=213,lS=214,gh=0,_h=1,vh=2,gs=3,xh=4,Sh=5,Mh=6,yh=7,iv=0,uS=1,cS=2,Ia=0,fS=1,hS=2,dS=3,pS=4,mS=5,gS=6,_S=7,av=300,_s=301,vs=302,Eh=303,Th=304,bu=306,bh=1e3,_r=1001,Ah=1002,gi=1003,vS=1004,jl=1005,bi=1006,Pf=1007,vr=1008,Ri=1009,rv=1010,sv=1011,Co=1012,ad=1013,xr=1014,ta=1015,No=1016,rd=1017,sd=1018,wo=1020,ov=35902,lv=1021,uv=1022,mi=1023,Do=1026,Uo=1027,cv=1028,od=1029,fv=1030,ld=1031,ud=1033,_u=33776,vu=33777,xu=33778,Su=33779,Rh=35840,Ch=35841,wh=35842,Dh=35843,Uh=36196,Lh=37492,Nh=37496,Oh=37808,Ph=37809,zh=37810,Bh=37811,Ih=37812,Fh=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,Mu=36492,Zh=36494,jh=36495,hv=36283,Kh=36284,Qh=36285,Jh=36286,xS=3200,SS=3201,dv=0,MS=1,za="",oi="srgb",xs="srgb-linear",Eu="linear",ze="srgb",Jr=7680,i_=519,yS=512,ES=513,TS=514,pv=515,bS=516,AS=517,RS=518,CS=519,a_=35044,r_="300 es",ea=2e3,Tu=2001;class Ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zf=Math.PI/180,$h=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ve(o,t,i){return Math.max(t,Math.min(i,o))}function wS(o,t){return(o%t+t)%t}function Bf(o,t,i){return(1-i)*o+i*t}function xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ye{constructor(t=0,i=0){ye.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Po{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[h+0],y=c[h+1],A=c[h+2],C=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=A,t[i+3]=C;return}if(v!==C||m!==x||p!==y||g!==A){let M=1-d;const _=m*x+p*y+g*A+v*C,z=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const F=Math.sqrt(N),G=Math.atan2(F,_*z);M=Math.sin(M*G)/F,d=Math.sin(d*G)/F}const D=d*z;if(m=m*M+x*D,p=p*M+y*D,g=g*M+A*D,v=v*M+C*D,M===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=F,p*=F,g*=F,v*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],x=c[h+1],y=c[h+2],A=c[h+3];return t[i]=d*A+g*v+m*y-p*x,t[i+1]=m*A+g*x+p*v-d*y,t[i+2]=p*A+g*y+d*x-m*v,t[i+3]=g*A-d*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),x=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"YXZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"ZXY":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"ZYX":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"YZX":this._x=x*g*v+p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v-x*y*A;break;case"XZY":this._x=x*g*v-p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(s_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(s_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return If.copy(this).projectOnVector(t),this.sub(If)}reflect(t){return this.sub(If.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const If=new $,s_=new Po;class re{constructor(t,i,r,l,c,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],A=r[8],C=l[0],M=l[3],_=l[6],z=l[1],N=l[4],D=l[7],F=l[2],G=l[5],I=l[8];return c[0]=h*C+d*z+m*F,c[3]=h*M+d*N+m*G,c[6]=h*_+d*D+m*I,c[1]=p*C+g*z+v*F,c[4]=p*M+g*N+v*G,c[7]=p*_+g*D+v*I,c[2]=x*C+y*z+A*F,c[5]=x*M+y*N+A*G,c[8]=x*_+y*D+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*c,y=p*c-h*m,A=i*v+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(l*p-g*r)*C,t[2]=(d*r-l*h)*C,t[3]=x*C,t[4]=(g*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=y*C,t[7]=(r*m-p*i)*C,t[8]=(h*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ff.makeScale(t,i)),this}rotate(t){return this.premultiply(Ff.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ff.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new re;function mv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Lo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function DS(){const o=Lo("canvas");return o.style.display="block",o}const o_={};function ps(o){o in o_||(o_[o]=!0,console.warn(o))}function US(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function LS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function NS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const l_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const o={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Eu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xs]:{primaries:t,whitePoint:r,transfer:Eu,toXYZ:l_,fromXYZ:u_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:l_,fromXYZ:u_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const be=OS();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class PS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{$r===void 0&&($r=Lo("canvas")),$r.width=t.width,$r.height=t.height;const l=$r.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Lo("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=na(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zS=0;class cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Oo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Hf(l[h].image)):c.push(Hf(l[h]))}else c=Hf(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?PS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BS=0;const Gf=new $;class Un extends Ms{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=_r,l=_r,c=bi,h=vr,d=mi,m=Ri,p=Un.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Oo(),this.name="",this.source=new cd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gf).x}get height(){return this.source.getSize(Gf).y}get depth(){return this.source.getSize(Gf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==av)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bh:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case Ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bh:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case Ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=av;Un.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,i=0,r=0,l=1){Be.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],A=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(y+1)/2,F=(_+1)/2,G=(g+x)/4,I=(v+C)/4,Z=(A+M)/4;return N>D&&N>F?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=G/r,c=I/r):D>F?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=G/l,c=Z/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=I/c,l=Z/c),this.set(r,l,c,i),this}let z=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(M-A)/z,this.y=(v-C)/z,this.z=(x-g)/z,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IS extends Ms{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Be(0,0,t,i),this.scissorTest=!1,this.viewport=new Be(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Un(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends IS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class gv extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,fi):fi.fromBufferAttribute(c,h),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(So),Ql.subVectors(this.max,So),ts.subVectors(t.a,So),es.subVectors(t.b,So),ns.subVectors(t.c,So),Da.subVectors(es,ts),Ua.subVectors(ns,es),sr.subVectors(ts,ns);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-sr.z,sr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,sr.z,0,-sr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-sr.y,sr.x,0];return!Vf(i,ts,es,ns,Ql)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,ts,es,ns,Ql))?!1:(Jl.crossVectors(Da,Ua),i=[Jl.x,Jl.y,Jl.z],Vf(i,ts,es,ns,Ql))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new $,new $,new $,new $,new $,new $,new $,new $],fi=new $,Kl=new zo,ts=new $,es=new $,ns=new $,Da=new $,Ua=new $,sr=new $,So=new $,Ql=new $,Jl=new $,or=new $;function Vf(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){or.fromArray(o,c);const d=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=t.dot(or),p=i.dot(or),g=r.dot(or);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const HS=new zo,Mo=new $,kf=new $;class fd{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):HS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(kf)),this.expandByPoint(Mo.copy(t.center).sub(kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ji=new $,Xf=new $,$l=new $,La=new $,Wf=new $,tu=new $,qf=new $;class _v{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Xf.copy(t).add(i).multiplyScalar(.5),$l.copy(i).sub(t).normalize(),La.copy(this.origin).sub(Xf);const c=t.distanceTo(i)*.5,h=-this.direction.dot($l),d=La.dot(this.direction),m=-La.dot($l),p=La.lengthSq(),g=Math.abs(1-h*h);let v,x,y,A;if(g>0)if(v=h*m-d,x=h*d-m,A=c*g,v>=0)if(x>=-A)if(x<=A){const C=1/g;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Xf).addScaledVector($l,x),y}intersectSphere(t,i){ji.subVectors(t.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,i,r,l,c){Wf.subVectors(i,t),tu.subVectors(r,t),qf.crossVectors(Wf,tu);let h=this.direction.dot(qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,t);const m=d*this.direction.dot(tu.crossVectors(La,tu));if(m<0)return null;const p=d*this.direction.dot(Wf.cross(La));if(p<0||m+p>h)return null;const g=-d*La.dot(qf);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M)}set(t,i,r,l,c,h,d,m,p,g,v,x,y,A,C,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/is.setFromMatrixColumn(t,0).length(),c=1/is.setFromMatrixColumn(t,1).length(),h=1/is.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=h*g,y=h*v,A=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+y*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,y=m*v,A=p*g,C=p*v;i[0]=x+C*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=C+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,y=m*v,A=p*g,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,y=h*v,A=d*g,C=d*v;i[0]=m*g,i[4]=A*p-y,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=C-x*v,i[8]=A*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+A,i[10]=x-C*v}else if(t.order==="XZY"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+C,i[5]=h*g,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GS,t,VS)}lookAt(t,i,r){const l=this.elements;return jn.subVectors(t,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Na.crossVectors(r,jn),Na.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Na.crossVectors(r,jn)),Na.normalize(),eu.crossVectors(jn,Na),l[0]=Na.x,l[4]=eu.x,l[8]=jn.x,l[1]=Na.y,l[5]=eu.y,l[9]=jn.y,l[2]=Na.z,l[6]=eu.z,l[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],A=r[2],C=r[6],M=r[10],_=r[14],z=r[3],N=r[7],D=r[11],F=r[15],G=l[0],I=l[4],Z=l[8],w=l[12],R=l[1],H=l[5],ot=l[9],at=l[13],gt=l[2],ft=l[6],P=l[10],j=l[14],q=l[3],yt=l[7],U=l[11],tt=l[15];return c[0]=h*G+d*R+m*gt+p*q,c[4]=h*I+d*H+m*ft+p*yt,c[8]=h*Z+d*ot+m*P+p*U,c[12]=h*w+d*at+m*j+p*tt,c[1]=g*G+v*R+x*gt+y*q,c[5]=g*I+v*H+x*ft+y*yt,c[9]=g*Z+v*ot+x*P+y*U,c[13]=g*w+v*at+x*j+y*tt,c[2]=A*G+C*R+M*gt+_*q,c[6]=A*I+C*H+M*ft+_*yt,c[10]=A*Z+C*ot+M*P+_*U,c[14]=A*w+C*at+M*j+_*tt,c[3]=z*G+N*R+D*gt+F*q,c[7]=z*I+N*H+D*ft+F*yt,c[11]=z*Z+N*ot+D*P+F*U,c[15]=z*w+N*at+D*j+F*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],y=t[14],A=t[3],C=t[7],M=t[11],_=t[15];return A*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*g-c*m*g)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],y=t[11],A=t[12],C=t[13],M=t[14],_=t[15],z=v*M*p-C*x*p+C*m*y-d*M*y-v*m*_+d*x*_,N=A*x*p-g*M*p-A*m*y+h*M*y+g*m*_-h*x*_,D=g*C*p-A*v*p+A*d*y-h*C*y-g*d*_+h*v*_,F=A*v*m-g*C*m-A*d*x+h*C*x+g*d*M-h*v*M,G=i*z+r*N+l*D+c*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return t[0]=z*I,t[1]=(C*x*c-v*M*c-C*l*y+r*M*y+v*l*_-r*x*_)*I,t[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*_+r*m*_)*I,t[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*y-r*m*y)*I,t[4]=N*I,t[5]=(g*M*c-A*x*c+A*l*y-i*M*y-g*l*_+i*x*_)*I,t[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*_-i*m*_)*I,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*y+i*m*y)*I,t[8]=D*I,t[9]=(A*v*c-g*C*c-A*r*y+i*C*y+g*r*_-i*v*_)*I,t[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*_+i*d*_)*I,t[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*y-i*d*y)*I,t[12]=F*I,t[13]=(g*C*l-A*v*l+A*r*x-i*C*x-g*r*M+i*v*M)*I,t[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*M-i*d*M)*I,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,x=c*p,y=c*g,A=c*v,C=h*g,M=h*v,_=d*v,z=m*p,N=m*g,D=m*v,F=r.x,G=r.y,I=r.z;return l[0]=(1-(C+_))*F,l[1]=(y+D)*F,l[2]=(A-N)*F,l[3]=0,l[4]=(y-D)*G,l[5]=(1-(x+_))*G,l[6]=(M+z)*G,l[7]=0,l[8]=(A+N)*I,l[9]=(M-z)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=is.set(l[0],l[1],l[2]).length();const h=is.set(l[4],l[5],l[6]).length(),d=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],hi.copy(this);const p=1/c,g=1/h,v=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=ea){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),x=(r+l)/(r-l);let y,A;if(d===ea)y=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Tu)y=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=ea){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(h-c),x=(i+t)*p,y=(r+l)*g;let A,C;if(d===ea)A=(h+c)*v,C=-2*v;else if(d===Tu)A=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const is=new $,hi=new We,GS=new $(0,0,0),VS=new $(1,1,1),Na=new $,eu=new $,jn=new $,c_=new We,f_=new Po;class Ci{constructor(t=0,i=0,r=0,l=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return c_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return f_.setFromEuler(this),this.setFromQuaternion(f_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kS=0;const h_=new $,as=new Po,Ki=new We,nu=new $,yo=new $,XS=new $,WS=new Po,d_=new $(1,0,0),p_=new $(0,1,0),m_=new $(0,0,1),g_={type:"added"},qS={type:"removed"},rs={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Hn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new $,i=new Ci,r=new Po,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new We},normalMatrix:{value:new re}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return as.setFromAxisAngle(t,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,i){return as.setFromAxisAngle(t,i),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(d_,t)}rotateY(t){return this.rotateOnAxis(p_,t)}rotateZ(t){return this.rotateOnAxis(m_,t)}translateOnAxis(t,i){return h_.copy(t).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(d_,t)}translateY(t){return this.translateOnAxis(p_,t)}translateZ(t){return this.translateOnAxis(m_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?nu.copy(t):nu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(yo,nu,this.up):Ki.lookAt(nu,yo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Ki),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g_),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(qS),Yf.child=t,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g_),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,XS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,WS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),y=h(t.animations),A=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new $(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new $,Qi=new $,Zf=new $,Ji=new $,ss=new $,os=new $,__=new $,jf=new $,Kf=new $,Qf=new $,Jf=new Be,$f=new Be,th=new Be;class pi{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),di.subVectors(t,i),l.cross(di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){di.subVectors(l,i),Qi.subVectors(r,i),Zf.subVectors(t,i);const h=di.dot(di),d=di.dot(Qi),m=di.dot(Zf),p=Qi.dot(Qi),g=Qi.dot(Zf),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,A=(h*g-d*m)*x;return c.set(1-y-A,A,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Jf.setScalar(0),$f.setScalar(0),th.setScalar(0),Jf.fromBufferAttribute(t,i),$f.fromBufferAttribute(t,r),th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Jf,c.x),h.addScaledVector($f,c.y),h.addScaledVector(th,c.z),h}static isFrontFacing(t,i,r,l){return di.subVectors(r,i),Qi.subVectors(t,i),di.cross(Qi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),di.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;ss.subVectors(l,r),os.subVectors(c,r),jf.subVectors(t,r);const m=ss.dot(jf),p=os.dot(jf);if(m<=0&&p<=0)return i.copy(r);Kf.subVectors(t,l);const g=ss.dot(Kf),v=os.dot(Kf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ss,h);Qf.subVectors(t,c);const y=ss.dot(Qf),A=os.dot(Qf);if(A>=0&&y<=A)return i.copy(c);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(os,d);const M=g*A-y*v;if(M<=0&&v-g>=0&&y-A>=0)return __.subVectors(c,l),d=(v-g)/(v-g+(y-A)),i.copy(l).addScaledVector(__,d);const _=1/(M+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(ss,h).addScaledVector(os,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},iu={h:0,s:0,l:0};function eh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ae{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=be.workingColorSpace){if(t=wS(t,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=eh(h,c,t+1/3),this.g=eh(h,c,t),this.b=eh(h,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const r=vv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return be.workingToColorSpace(Rn.copy(this),t),Math.round(ve(Rn.r*255,0,255))*65536+Math.round(ve(Rn.g*255,0,255))*256+Math.round(ve(Rn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=oi){be.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+i,Oa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Oa),t.getHSL(iu);const r=Bf(Oa.h,iu.h,i),l=Bf(Oa.s,iu.s,i),c=Bf(Oa.l,iu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ae;Ae.NAMES=vv;let YS=0;class ys extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=ds,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ph&&(r.blendSrc=this.blendSrc),this.blendDst!==mh&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ao extends ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new $,au=new ye;let ZS=0;class Ai{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=a_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(t),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==a_&&(t.usage=this.usage),t}}class xv extends Ai{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Sv extends Ai{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Jn extends Ai{constructor(t,i,r){super(new Float32Array(t),i,r)}}let jS=0;const si=new We,nh=new Hn,ls=new $,Kn=new zo,Eo=new zo,mn=new $;class ia extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mv(t)?Sv:xv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new re().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Eo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Kn.min,Eo.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,Eo.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(Eo.min),Kn.expandByPoint(Eo.max))}Kn.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)mn.fromBufferAttribute(d,p),m&&(ls.fromBufferAttribute(t,p),mn.add(ls)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new $,m[Z]=new $;const p=new $,g=new $,v=new $,x=new ye,y=new ye,A=new ye,C=new $,M=new $;function _(Z,w,R){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,w),A.fromBufferAttribute(c,R),g.sub(p),v.sub(p),y.sub(x),A.sub(x);const H=1/(y.x*A.y-A.x*y.y);isFinite(H)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(H),d[Z].add(C),d[w].add(C),d[R].add(C),m[Z].add(M),m[w].add(M),m[R].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let Z=0,w=z.length;Z<w;++Z){const R=z[Z],H=R.start,ot=R.count;for(let at=H,gt=H+ot;at<gt;at+=3)_(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new $,D=new $,F=new $,G=new $;function I(Z){F.fromBufferAttribute(l,Z),G.copy(F);const w=d[Z];N.copy(w),N.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(G,w);const H=D.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,H)}for(let Z=0,w=z.length;Z<w;++Z){const R=z[Z],H=R.start,ot=R.count;for(let at=H,gt=H+ot;at<gt;at+=3)I(t.getX(at+0)),I(t.getX(at+1)),I(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,g=new $,v=new $;if(t)for(let x=0,y=t.count;x<y;x+=3){const A=t.getX(x+0),C=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)x[A++]=p[y++]}return new Ai(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ia,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=t(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new We,lr=new _v,ru=new fd,x_=new $,su=new $,ou=new $,lu=new $,ih=new $,uu=new $,S_=new $,cu=new $;class In extends Hn{constructor(t=new ia,i=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){uu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(ih.fromBufferAttribute(v,t),h?uu.addScaledVector(ih,g):uu.addScaledVector(ih.sub(i),g))}i.add(uu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(c),lr.copy(t.ray).recast(t.near),!(ru.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ru,x_)===null||lr.origin.distanceToSquared(x_)>(t.far-t.near)**2))&&(v_.copy(c).invert(),lr.copy(t.ray).applyMatrix4(v_),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,lr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,F=N;D<F;D+=3){const G=d.getX(D),I=d.getX(D+1),Z=d.getX(D+2);l=fu(this,_,t,r,p,g,v,G,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const z=d.getX(M),N=d.getX(M+1),D=d.getX(M+2);l=fu(this,h,t,r,p,g,v,z,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,F=N;D<F;D+=3){const G=D,I=D+1,Z=D+2;l=fu(this,_,t,r,p,g,v,G,I,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const z=M,N=M+1,D=M+2;l=fu(this,h,t,r,p,g,v,z,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KS(o,t,i,r,l,c,h,d){let m;if(t.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Fa,d),m===null)return null;cu.copy(d),cu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cu);return p<i.near||p>i.far?null:{distance:p,point:cu.clone(),object:o}}function fu(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,su),o.getVertexPosition(m,ou),o.getVertexPosition(p,lu);const g=KS(o,t,i,r,su,ou,lu,S_);if(g){const v=new $;pi.getBarycoord(S_,su,ou,lu,v),l&&(g.uv=pi.getInterpolatedAttribute(l,d,m,p,v,new ye)),c&&(g.uv1=pi.getInterpolatedAttribute(c,d,m,p,v,new ye)),h&&(g.normal=pi.getInterpolatedAttribute(h,d,m,p,v,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};pi.getNormal(su,ou,lu,x.normal),g.face=x,g.barycoord=v}return g}class Bo extends ia{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,t,h,c,0),A("z","y","x",1,-1,r,i,-t,h,c,1),A("x","z","y",1,1,t,r,i,l,h,2),A("x","z","y",1,-1,t,r,-i,l,h,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(v,2));function A(C,M,_,z,N,D,F,G,I,Z,w){const R=D/I,H=F/Z,ot=D/2,at=F/2,gt=G/2,ft=I+1,P=Z+1;let j=0,q=0;const yt=new $;for(let U=0;U<P;U++){const tt=U*H-at;for(let vt=0;vt<ft;vt++){const St=vt*R-ot;yt[C]=St*z,yt[M]=tt*N,yt[_]=gt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[_]=G>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(vt/I),v.push(1-U/Z),j+=1}}for(let U=0;U<Z;U++)for(let tt=0;tt<I;tt++){const vt=x+tt+ft*U,St=x+tt+ft*(U+1),Q=x+(tt+1)+ft*(U+1),pt=x+(tt+1)+ft*U;m.push(vt,St,pt),m.push(St,Q,pt),q+=6}d.addGroup(y,q,w),y+=q,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function wn(o){const t={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)t[l]=r[l]}return t}function QS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Mv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const JS={clone:Ss,merge:wn};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=QS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class yv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new $,M_=new ye,y_=new ye;class Qn extends yv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z)}getViewSize(t,i){return this.getViewBounds(t,M_,y_),i.subVectors(y_,M_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const us=-90,cs=1;class eM extends Hn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qn(us,cs,t,i);l.layers=this.layers,this.add(l);const c=new Qn(us,cs,t,i);c.layers=this.layers,this.add(c);const h=new Qn(us,cs,t,i);h.layers=this.layers,this.add(h);const d=new Qn(us,cs,t,i);d.layers=this.layers,this.add(d);const m=new Qn(us,cs,t,i);m.layers=this.layers,this.add(m);const p=new Qn(us,cs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Tu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,y),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ev extends Un{constructor(t=[],i=_s,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nM extends Sr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),c=new Ha({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ba});c.uniforms.tEquirect.value=i;const h=new In(l,c),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=bi),new eM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class hu extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new hu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class aM extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const rh=new $,rM=new $,sM=new re;class hr{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=rh.subVectors(r,i).cross(rM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||sM.getNormalMatrix(t),l=this.coplanarPoint(rh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new fd,du=new $;class dd{constructor(t=new hr,i=new hr,r=new hr,l=new hr,c=new hr,h=new hr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ea){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],y=l[8],A=l[9],C=l[10],M=l[11],_=l[12],z=l[13],N=l[14],D=l[15];if(r[0].setComponents(m-c,x-p,M-y,D-_).normalize(),r[1].setComponents(m+c,x+p,M+y,D+_).normalize(),r[2].setComponents(m+h,x+g,M+A,D+z).normalize(),r[3].setComponents(m-h,x-g,M-A,D-z).normalize(),r[4].setComponents(m-d,x-v,M-C,D-N).normalize(),i===ea)r[5].setComponents(m+d,x+v,M+C,D+N).normalize();else if(i===Tu)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(du.x=l.normal.x>0?t.max.x:t.min.x,du.y=l.normal.y>0?t.max.y:t.min.y,du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends Un{constructor(t,i,r=xr,l,c,h,d=gi,m=gi,p,g=Do,v=1){if(g!==Do&&g!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Io extends ia{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,y=[],A=[],C=[],M=[];for(let _=0;_<g;_++){const z=_*x-h;for(let N=0;N<p;N++){const D=N*v-c;A.push(D,-z,0),C.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let z=0;z<d;z++){const N=z+p*_,D=z+p*(_+1),F=z+1+p*(_+1),G=z+1+p*_;y.push(N,D,G),y.push(D,F,G)}this.setIndex(y),this.setAttribute("position",new Jn(A,3)),this.setAttribute("normal",new Jn(C,3)),this.setAttribute("uv",new Jn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.widthSegments,t.heightSegments)}}class pd extends ia{constructor(t=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,y=new $,A=new ye;for(let C=0;C<=l;C++){for(let M=0;M<=r;M++){const _=c+M/r*h;y.x=v*Math.cos(_),y.y=v*Math.sin(_),m.push(y.x,y.y,y.z),p.push(0,0,1),A.x=(y.x/i+1)/2,A.y=(y.y/i+1)/2,g.push(A.x,A.y)}v+=x}for(let C=0;C<l;C++){const M=C*(r+1);for(let _=0;_<r;_++){const z=_+M,N=z,D=z+r+1,F=z+r+2,G=z+1;d.push(N,D,G),d.push(D,F,G)}}this.setIndex(d),this.setAttribute("position",new Jn(m,3)),this.setAttribute("normal",new Jn(p,3)),this.setAttribute("uv",new Jn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ro extends ia{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new $,x=new $,y=[],A=[],C=[],M=[];for(let _=0;_<=r;_++){const z=[],N=_/r;let D=0;_===0&&h===0?D=.5/i:_===r&&m===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const G=F/i;v.x=-t*Math.cos(l+G*c)*Math.sin(h+N*d),v.y=t*Math.cos(h+N*d),v.z=t*Math.sin(l+G*c)*Math.sin(h+N*d),A.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),M.push(G+D,1-N),z.push(p++)}g.push(z)}for(let _=0;_<r;_++)for(let z=0;z<i;z++){const N=g[_][z+1],D=g[_][z],F=g[_+1][z],G=g[_+1][z+1];(_!==0||h>0)&&y.push(N,D,G),(_!==r-1||m<Math.PI)&&y.push(D,F,G)}this.setIndex(y),this.setAttribute("position",new Jn(A,3)),this.setAttribute("normal",new Jn(C,3)),this.setAttribute("uv",new Jn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oM extends ys{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class lM extends ys{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dv,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uM extends ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cM extends ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E_={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class fM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const y=p[v],A=p[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return A}return null}}}const hM=new fM;class md{constructor(t){this.manager=t!==void 0?t:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}md.DEFAULT_MATERIAL_NAME="__DEFAULT";class dM extends md{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=E_.get(t);if(h!==void 0)return c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0),h;const d=Lo("img");function m(){g(),E_.add(t,this),i&&i(this),c.manager.itemEnd(t)}function p(v){g(),l&&l(v),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),c.manager.itemStart(t),d.src=t,d}}class pM extends md{constructor(t){super(t)}load(t,i,r,l){const c=new Un,h=new dM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class bv extends Hn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const sh=new We,T_=new $,b_=new $;class mM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dd,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;T_.setFromMatrixPosition(t.matrixWorld),i.position.copy(T_),b_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(b_),i.updateMatrixWorld(),sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const A_=new We,To=new $,oh=new $;class gM extends mM{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),To.setFromMatrixPosition(t.matrixWorld),r.position.copy(To),oh.copy(r.position),oh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(oh),r.updateMatrixWorld(),l.makeTranslation(-To.x,-To.y,-To.z),A_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A_)}}class _M extends bv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new gM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vM extends yv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xM extends bv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class SM extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class MM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=R_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=R_();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function R_(){return performance.now()}const C_=new We;class yM{constructor(t,i,r=0,l=1/0){this.ray=new _v(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return C_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(C_),this}intersectObject(t,i=!0,r=[]){return td(t,this,r,i),r.sort(w_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)td(t[l],this,r,i);return r.sort(w_),r}}function w_(o,t){return o.distance-t.distance}function td(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)td(c[h],t,i,!0)}}function D_(o,t,i,r){const l=EM(r);switch(i){case lv:return o*t;case cv:return o*t/l.components*l.byteLength;case od:return o*t/l.components*l.byteLength;case fv:return o*t*2/l.components*l.byteLength;case ld:return o*t*2/l.components*l.byteLength;case uv:return o*t*3/l.components*l.byteLength;case mi:return o*t*4/l.components*l.byteLength;case ud:return o*t*4/l.components*l.byteLength;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xu:case Su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ch:case Dh:return Math.max(o,16)*Math.max(t,8)/4;case Rh:case wh:return Math.max(o,8)*Math.max(t,8)/2;case Uh:case Lh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case zh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Mu:case Zh:case jh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case hv:case Kh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EM(o){switch(o){case Ri:case rv:return{byteLength:1,components:1};case Co:case sv:case No:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case xr:case ad:case ta:return{byteLength:4,components:1};case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Av(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function TM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<v.length;y++){const A=v[x],C=v[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,A=v.length;y<A;y++){const C=v[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,By=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:bM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:wM,alphatest_pars_fragment:DM,aomap_fragment:UM,aomap_pars_fragment:LM,batching_pars_vertex:NM,batching_vertex:OM,begin_vertex:PM,beginnormal_vertex:zM,bsdfs:BM,iridescence_fragment:IM,bumpmap_pars_fragment:FM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:kM,color_fragment:XM,color_pars_fragment:WM,color_pars_vertex:qM,color_vertex:YM,common:ZM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:KM,displacementmap_pars_vertex:QM,displacementmap_vertex:JM,emissivemap_fragment:$M,emissivemap_pars_fragment:ty,colorspace_fragment:ey,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ry,envmap_pars_vertex:sy,envmap_physical_pars_fragment:_y,envmap_vertex:oy,fog_vertex:ly,fog_pars_vertex:uy,fog_fragment:cy,fog_pars_fragment:fy,gradientmap_pars_fragment:hy,lightmap_pars_fragment:dy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:vy,lights_toon_pars_fragment:xy,lights_phong_fragment:Sy,lights_phong_pars_fragment:My,lights_physical_fragment:yy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:by,lights_fragment_end:Ay,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Dy,map_fragment:Uy,map_pars_fragment:Ly,map_particle_fragment:Ny,map_particle_pars_fragment:Oy,metalnessmap_fragment:Py,metalnessmap_pars_fragment:zy,morphinstance_vertex:By,morphcolor_vertex:Iy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Gy,normal_fragment_begin:Vy,normal_fragment_maps:ky,normal_pars_fragment:Xy,normal_pars_vertex:Wy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Qy,opaque_fragment:Jy,packing:$y,premultiplied_alpha_fragment:tE,project_vertex:eE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:uE,skinbase_vertex:cE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:dE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:_E,transmission_fragment:vE,transmission_pars_fragment:xE,uv_pars_fragment:SE,uv_pars_vertex:ME,uv_vertex:yE,worldpos_vertex:EE,background_vert:TE,background_frag:bE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:CE,cube_frag:wE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:IE,meshbasic_frag:FE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:XE,meshnormal_frag:WE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:ZE,meshphysical_frag:jE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:tT,shadow_frag:eT,sprite_vert:nT,sprite_frag:iT},Lt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ei={basic:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:wn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:wn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:wn([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:wn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:wn([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:wn([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:wn([Lt.common,Lt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:wn([Lt.lights,Lt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Ei.physical={uniforms:wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const pu={r:0,b:0,g:0},cr=new Ci,aT=new We;function rT(o,t,i,r,l,c,h){const d=new Ae(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function A(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function C(N){let D=!1;const F=A(N);F===null?_(d,m):F&&F.isColor&&(_(F,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,D){const F=A(D);F&&(F.isCubeTexture||F.mapping===bu)?(g===void 0&&(g=new In(new Bo(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Ss(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),cr.copy(D.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(cr)),g.material.toneMapped=be.getTransfer(F.colorSpace)!==ze,(v!==F||x!==F.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=F,x=F.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new In(new Io(2,2),new Ha({name:"BackgroundMaterial",uniforms:Ss(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=be.getTransfer(F.colorSpace)!==ze,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||x!==F.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=F,x=F.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,D){N.getRGB(pu,Mv(o)),r.buffers.color.setClear(pu.r,pu.g,pu.b,D,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:M,dispose:z}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,H,ot,at,gt){let ft=!1;const P=v(at,ot,H);c!==P&&(c=P,p(c.object)),ft=y(R,at,ot,gt),ft&&A(R,at,ot,gt),gt!==null&&t.update(gt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(R,H,ot,at),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,H,ot){const at=ot.wireframe===!0;let gt=r[R.id];gt===void 0&&(gt={},r[R.id]=gt);let ft=gt[H.id];ft===void 0&&(ft={},gt[H.id]=ft);let P=ft[at];return P===void 0&&(P=x(m()),ft[at]=P),P}function x(R){const H=[],ot=[],at=[];for(let gt=0;gt<i;gt++)H[gt]=0,ot[gt]=0,at[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ot,attributeDivisors:at,object:R,attributes:{},index:null}}function y(R,H,ot,at){const gt=c.attributes,ft=H.attributes;let P=0;const j=ot.getAttributes();for(const q in j)if(j[q].location>=0){const U=gt[q];let tt=ft[q];if(tt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),U===void 0||U.attribute!==tt||tt&&U.data!==tt.data)return!0;P++}return c.attributesNum!==P||c.index!==at}function A(R,H,ot,at){const gt={},ft=H.attributes;let P=0;const j=ot.getAttributes();for(const q in j)if(j[q].location>=0){let U=ft[q];U===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const tt={};tt.attribute=U,U&&U.data&&(tt.data=U.data),gt[q]=tt,P++}c.attributes=gt,c.attributesNum=P,c.index=at}function C(){const R=c.newAttributes;for(let H=0,ot=R.length;H<ot;H++)R[H]=0}function M(R){_(R,0)}function _(R,H){const ot=c.newAttributes,at=c.enabledAttributes,gt=c.attributeDivisors;ot[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),gt[R]!==H&&(o.vertexAttribDivisor(R,H),gt[R]=H)}function z(){const R=c.newAttributes,H=c.enabledAttributes;for(let ot=0,at=H.length;ot<at;ot++)H[ot]!==R[ot]&&(o.disableVertexAttribArray(ot),H[ot]=0)}function N(R,H,ot,at,gt,ft,P){P===!0?o.vertexAttribIPointer(R,H,ot,gt,ft):o.vertexAttribPointer(R,H,ot,at,gt,ft)}function D(R,H,ot,at){C();const gt=at.attributes,ft=ot.getAttributes(),P=H.defaultAttributeValues;for(const j in ft){const q=ft[j];if(q.location>=0){let yt=gt[j];if(yt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const U=yt.normalized,tt=yt.itemSize,vt=t.get(yt);if(vt===void 0)continue;const St=vt.buffer,Q=vt.type,pt=vt.bytesPerElement,Mt=Q===o.INT||Q===o.UNSIGNED_INT||yt.gpuType===ad;if(yt.isInterleavedBufferAttribute){const At=yt.data,Ct=At.stride,se=yt.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<q.locationSize;Kt++)_(q.location+Kt,At.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<q.locationSize;Kt++)M(q.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Kt=0;Kt<q.locationSize;Kt++)N(q.location+Kt,tt/q.locationSize,Q,U,Ct*pt,(se+tt/q.locationSize*Kt)*pt,Mt)}else{if(yt.isInstancedBufferAttribute){for(let At=0;At<q.locationSize;At++)_(q.location+At,yt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let At=0;At<q.locationSize;At++)M(q.location+At);o.bindBuffer(o.ARRAY_BUFFER,St);for(let At=0;At<q.locationSize;At++)N(q.location+At,tt/q.locationSize,Q,U,tt*pt,tt/q.locationSize*At*pt,Mt)}}else if(P!==void 0){const U=P[j];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(q.location,U);break;case 3:o.vertexAttrib3fv(q.location,U);break;case 4:o.vertexAttrib4fv(q.location,U);break;default:o.vertexAttrib1fv(q.location,U)}}}}z()}function F(){Z();for(const R in r){const H=r[R];for(const ot in H){const at=H[ot];for(const gt in at)g(at[gt].object),delete at[gt];delete H[ot]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const ot in H){const at=H[ot];for(const gt in at)g(at[gt].object),delete at[gt];delete H[ot]}delete r[R.id]}function I(R){for(const H in r){const ot=r[H];if(ot[R.id]===void 0)continue;const at=ot[R.id];for(const gt in at)g(at[gt].object),delete at[gt];delete ot[R.id]}}function Z(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:z}}function oT(o,t,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let A=0;A<v;A++)y+=g[A];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],g[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function lT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==mi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ri&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ta&&!Z)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:F,maxSamples:G}}function uT(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new hr,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||c&&!M)c?g(null):p();else{const z=c?0:r,N=z*4;let D=_.clippingState||null;m.value=D,D=g(A,x,N,y);for(let F=0;F!==N;++F)D[F]=i[F];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,y,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const _=y+C*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,D=y;N!==C;++N,D+=4)h.copy(v[N]).applyMatrix4(z,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function cT(o){let t=new WeakMap;function i(h,d){return d===Eh?h.mapping=_s:d===Th&&(h.mapping=vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Eh||d===Th)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new nM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const hs=4,U_=[.125,.215,.35,.446,.526,.582],gr=20,lh=new vM,L_=new Ae;let uh=null,ch=0,fh=0,hh=!1;const dr=(1+Math.sqrt(5))/2,fs=1/dr,N_=[new $(-dr,fs,0),new $(dr,fs,0),new $(-fs,0,dr),new $(fs,0,dr),new $(0,dr,-fs),new $(0,dr,fs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],fT=new $;class O_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=fT}=c;uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,ch,fh),this._renderer.xr.enabled=hh,t.scissorTest=!1,mu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:No,format:mi,colorSpace:xs,depthBuffer:!1},l=P_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(c)),this._blurMaterial=dT(c,t,i)}return l}_compileMaterial(t){const i=new In(this._lodPlanes[0],t);this._renderer.compile(i,lh)}_sceneToCubeUV(t,i,r,l,c){const m=new Qn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(L_),v.toneMapping=Ia,v.autoClear=!1;const A=new Ao({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),C=new In(new Bo,A);let M=!1;const _=t.background;_?_.isColor&&(A.color.copy(_),t.background=null,M=!0):(A.color.copy(L_),M=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):N===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const D=this._cubeSize;mu(l,N*D,z>2?D:0,D,D),v.setRenderTarget(l),M&&v.render(C,m),v.render(t,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===_s||t.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new In(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;mu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,lh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=N_[(l-c-1)%N_.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new In(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*gr-1),C=c/A,M=isFinite(c)?1+Math.floor(g*C):gr;M>gr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${gr}`);const _=[];let z=0;for(let I=0;I<gr;++I){const Z=I/C,w=Math.exp(-Z*Z/2);_.push(w),I===0?z+=w:I<M&&(z+=2*w)}for(let I=0;I<_.length;I++)_[I]=_[I]/z;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const D=this._sizeLods[l],F=3*D*(l>N-hs?l-N+hs:0),G=4*(this._cubeSize-D);mu(i,F,G,3*D,2*D),m.setRenderTarget(i),m.render(v,lh)}}function hT(o){const t=[],i=[],r=[];let l=o;const c=o-hs+1+U_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=U_[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,A=6,C=3,M=2,_=1,z=new Float32Array(C*A*y),N=new Float32Array(M*A*y),D=new Float32Array(_*A*y);for(let G=0;G<y;G++){const I=G%3*2/3-1,Z=G>2?0:-1,w=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];z.set(w,C*A*G),N.set(x,M*A*G);const R=[G,G,G,G,G,G];D.set(R,_*A*G)}const F=new ia;F.setAttribute("position",new Ai(z,C)),F.setAttribute("uv",new Ai(N,M)),F.setAttribute("faceIndex",new Ai(D,_)),t.push(F),l>hs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function P_(o,t,i){const r=new Sr(o,t,i);return r.texture.mapping=bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mu(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function dT(o,t,i){const r=new Float32Array(gr),l=new $(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function z_(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function B_(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Eh||m===Th,g=m===_s||m===vs;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new O_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new O_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function mT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ps("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function gT(o,t,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,A=v.attributes.position;let C=0;if(y!==null){const z=y.array;C=y.version;for(let N=0,D=z.length;N<D;N+=3){const F=z[N+0],G=z[N+1],I=z[N+2];x.push(F,G,G,I,I,F)}}else if(A!==void 0){const z=A.array;C=A.version;for(let N=0,D=z.length/3-1;N<D;N+=3){const F=N+0,G=N+1,I=N+2;x.push(F,G,G,I,I,F)}}else return;const M=new(mv(x)?Sv:xv)(x,1);M.version=C;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function _T(o,t,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,x*h,A),i.update(y,r,A))}function g(x,y,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function v(x,y,A,C){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,A);let _=0;for(let z=0;z<A;z++)_+=y[z]*C[z];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function vT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xT(o,t,i){const r=new WeakMap,l=new Be;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),C===!0&&(D=2),M===!0&&(D=3);let F=d.attributes.position.count*D,G=1;F>t.maxTextureSize&&(G=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*G*4*v),Z=new gv(I,F,G,v);Z.type=ta,Z.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const ot=_[H],at=z[H],gt=N[H],ft=F*G*4*H;for(let P=0;P<ot.count;P++){const j=P*w;A===!0&&(l.fromBufferAttribute(ot,P),I[ft+j+0]=l.x,I[ft+j+1]=l.y,I[ft+j+2]=l.z,I[ft+j+3]=0),C===!0&&(l.fromBufferAttribute(at,P),I[ft+j+4]=l.x,I[ft+j+5]=l.y,I[ft+j+6]=l.z,I[ft+j+7]=0),M===!0&&(l.fromBufferAttribute(gt,P),I[ft+j+8]=l.x,I[ft+j+9]=l.y,I[ft+j+10]=l.z,I[ft+j+11]=gt.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new ye(F,G)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function ST(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Rv=new Un,I_=new Tv(1,1),Cv=new gv,wv=new FS,Dv=new Ev,F_=[],H_=[],G_=new Float32Array(16),V_=new Float32Array(9),k_=new Float32Array(4);function Es(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function ln(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function un(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Au(o,t){let i=H_[t];i===void 0&&(i=new Int32Array(t),H_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function MT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2fv(this.addr,t),un(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;o.uniform3fv(this.addr,t),un(i,t)}}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4fv(this.addr,t),un(i,t)}}function bT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;k_.set(r),o.uniformMatrix2fv(this.addr,!1,k_),un(i,r)}}function AT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;V_.set(r),o.uniformMatrix3fv(this.addr,!1,V_),un(i,r)}}function RT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;G_.set(r),o.uniformMatrix4fv(this.addr,!1,G_),un(i,r)}}function CT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2iv(this.addr,t),un(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3iv(this.addr,t),un(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4iv(this.addr,t),un(i,t)}}function LT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2uiv(this.addr,t),un(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3uiv(this.addr,t),un(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4uiv(this.addr,t),un(i,t)}}function zT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(I_.compareFunction=pv,c=I_):c=Rv,i.setTexture2D(t||c,l)}function BT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||wv,l)}function IT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Dv,l)}function FT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Cv,l)}function HT(o){switch(o){case 5126:return MT;case 35664:return yT;case 35665:return ET;case 35666:return TT;case 35674:return bT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return wT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return NT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return FT}}function GT(o,t){o.uniform1fv(this.addr,t)}function VT(o,t){const i=Es(t,this.size,2);o.uniform2fv(this.addr,i)}function kT(o,t){const i=Es(t,this.size,3);o.uniform3fv(this.addr,i)}function XT(o,t){const i=Es(t,this.size,4);o.uniform4fv(this.addr,i)}function WT(o,t){const i=Es(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qT(o,t){const i=Es(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function YT(o,t){const i=Es(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ZT(o,t){o.uniform1iv(this.addr,t)}function jT(o,t){o.uniform2iv(this.addr,t)}function KT(o,t){o.uniform3iv(this.addr,t)}function QT(o,t){o.uniform4iv(this.addr,t)}function JT(o,t){o.uniform1uiv(this.addr,t)}function $T(o,t){o.uniform2uiv(this.addr,t)}function tb(o,t){o.uniform3uiv(this.addr,t)}function eb(o,t){o.uniform4uiv(this.addr,t)}function nb(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Rv,c[h])}function ib(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||wv,c[h])}function ab(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Dv,c[h])}function rb(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Cv,c[h])}function sb(o){switch(o){case 5126:return GT;case 35664:return VT;case 35665:return kT;case 35666:return XT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return jT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return rb}}class ob{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class lb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sb(i.type)}}class ub{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function X_(o,t){o.seq.push(t),o.map[t.id]=t}function cb(o,t,i){const r=o.name,l=r.length;for(dh.lastIndex=0;;){const c=dh.exec(r),h=dh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){X_(i,p===void 0?new ob(d,o,t):new lb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new ub(d),X_(i,v)),i=v}}}class yu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);cb(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function W_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const fb=37297;let hb=0;function db(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const q_=new re;function pb(o){be._getMatrix(q_,be.workingColorSpace,o);const t=`mat3( ${q_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Eu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Y_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+db(o.getShaderSource(t),h)}else return l}function mb(o,t){const i=pb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gb(o,t){let i;switch(t){case fS:i="Linear";break;case hS:i="Reinhard";break;case dS:i="Cineon";break;case pS:i="ACESFilmic";break;case gS:i="AgX";break;case _S:i="Neutral";break;case mS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gu=new $;function _b(){be.getLuminanceCoefficients(gu);const o=gu.x.toFixed(4),t=gu.y.toFixed(4),i=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function xb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Sb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function bo(o){return o!==""}function Z_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function j_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(o){return o.replace(Mb,Eb)}const yb=new Map;function Eb(o,t){let i=oe[t];if(i===void 0){const r=yb.get(t);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ed(i)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(o){return o.replace(Tb,bb)}function bb(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ab(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ev?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===nv?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function Rb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case bu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function wb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case iv:t="ENVMAP_BLENDING_MULTIPLY";break;case uS:t="ENVMAP_BLENDING_MIX";break;case cS:t="ENVMAP_BLENDING_ADD";break}return t}function Db(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Ub(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ab(i),p=Rb(i),g=Cb(i),v=wb(i),x=Db(i),y=vb(i),A=xb(c),C=l.createProgram();let M,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),_.length>0&&(_+=`
`)):(M=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),_=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?oe.tonemapping_pars_fragment:"",i.toneMapping!==Ia?gb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,mb("linearToOutputTexel",i.outputColorSpace),_b(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=ed(h),h=Z_(h,i),h=j_(h,i),d=ed(d),d=Z_(d,i),d=j_(d,i),h=K_(h),d=K_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=z+M+h,D=z+_+d,F=W_(l,l.VERTEX_SHADER,N),G=W_(l,l.FRAGMENT_SHADER,D);l.attachShader(C,F),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(H){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(C).trim(),at=l.getShaderInfoLog(F).trim(),gt=l.getShaderInfoLog(G).trim();let ft=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,G);else{const j=Y_(l,F,"vertex"),q=Y_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+j+`
`+q)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(at===""||gt==="")&&(P=!1);P&&(H.diagnostics={runnable:ft,programLog:ot,vertexShader:{log:at,prefix:M},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(F),l.deleteShader(G),Z=new yu(l,C),w=Sb(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,fb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hb++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=G,this}let Lb=0;class Nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Ob(t),i.set(t,r)),r}}class Ob{constructor(t){this.id=Lb++,this.code=t,this.usedTimes=0}}function Pb(o,t,i,r,l,c,h){const d=new hd,m=new Nb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,H,ot,at){const gt=ot.fog,ft=at.geometry,P=w.isMeshStandardMaterial?ot.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),q=j&&j.mapping===bu?j.image.height:null,yt=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=U!==void 0?U.length:0;let vt=0;ft.morphAttributes.position!==void 0&&(vt=1),ft.morphAttributes.normal!==void 0&&(vt=2),ft.morphAttributes.color!==void 0&&(vt=3);let St,Q,pt,Mt;if(yt){const Ee=Ei[yt];St=Ee.vertexShader,Q=Ee.fragmentShader}else St=w.vertexShader,Q=w.fragmentShader,m.update(w),pt=m.getVertexShaderID(w),Mt=m.getFragmentShaderID(w);const At=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),se=at.isInstancedMesh===!0,Kt=at.isBatchedMesh===!0,Le=!!w.map,Ie=!!w.matcap,pe=!!j,B=!!w.aoMap,gn=!!w.lightMap,Se=!!w.bumpMap,fe=!!w.normalMap,Gt=!!w.displacementMap,me=!!w.emissiveMap,Yt=!!w.metalnessMap,ie=!!w.roughnessMap,Ke=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,et=w.iridescence>0,ct=w.sheen>0,dt=w.transmission>0,lt=Ke&&!!w.anisotropyMap,Ot=L&&!!w.clearcoatMap,Dt=L&&!!w.clearcoatNormalMap,Ht=L&&!!w.clearcoatRoughnessMap,Vt=et&&!!w.iridescenceMap,xt=et&&!!w.iridescenceThicknessMap,Pt=ct&&!!w.sheenColorMap,Wt=ct&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Rt=!!w.specularColorMap,ne=!!w.specularIntensityMap,k=dt&&!!w.transmissionMap,Ut=dt&&!!w.thicknessMap,Et=!!w.gradientMap,zt=!!w.alphaMap,bt=w.alphaTest>0,_t=!!w.alphaHash,It=!!w.extensions;let ee=Ia;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ee=o.toneMapping);const we={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:Q,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Kt,batchingColor:Kt&&at._colorsTexture!==null,instancing:se,instancingColor:se&&at.instanceColor!==null,instancingMorph:se&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:Le,matcap:Ie,envMap:pe,envMapMode:pe&&j.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:gn,bumpMap:Se,normalMap:fe,displacementMap:x&&Gt,emissiveMap:me,normalMapObjectSpace:fe&&w.normalMapType===MS,normalMapTangentSpace:fe&&w.normalMapType===dv,metalnessMap:Yt,roughnessMap:ie,anisotropy:Ke,anisotropyMap:lt,clearcoat:L,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:E,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:xt,sheen:ct,sheenColorMap:Pt,sheenRoughnessMap:Wt,specularMap:qt,specularColorMap:Rt,specularIntensityMap:ne,transmission:dt,transmissionMap:k,thicknessMap:Ut,gradientMap:Et,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:_t,combine:w.combine,mapUv:Le&&C(w.map.channel),aoMapUv:B&&C(w.aoMap.channel),lightMapUv:gn&&C(w.lightMap.channel),bumpMapUv:Se&&C(w.bumpMap.channel),normalMapUv:fe&&C(w.normalMap.channel),displacementMapUv:Gt&&C(w.displacementMap.channel),emissiveMapUv:me&&C(w.emissiveMap.channel),metalnessMapUv:Yt&&C(w.metalnessMap.channel),roughnessMapUv:ie&&C(w.roughnessMap.channel),anisotropyMapUv:lt&&C(w.anisotropyMap.channel),clearcoatMapUv:Ot&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&C(w.sheenRoughnessMap.channel),specularMapUv:qt&&C(w.specularMap.channel),specularColorMapUv:Rt&&C(w.specularColorMap.channel),specularIntensityMapUv:ne&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Ut&&C(w.thicknessMap.channel),alphaMapUv:zt&&C(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(fe||Ke),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ft.attributes.uv&&(Le||zt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===ze,decodeVideoTextureEmissive:me&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ti,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(z(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function z(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=A[w.type];let H;if(R){const ot=Ei[R];H=JS.clone(ot.uniforms)}else H=w.uniforms;return H}function F(w,R){let H;for(let ot=0,at=g.length;ot<at;ot++){const gt=g[ot];if(gt.cacheKey===R){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new Ub(o,R,w,c),g.push(H)),H}function G(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function I(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:Z}}function zb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Bb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function J_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function $_(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,A,C,M){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=M),t++,_}function d(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Bb),r.length>1&&r.sort(x||J_),l.length>1&&l.sort(x||J_)}function g(){for(let v=t,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function Ib(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new $_,o.set(r,[h])):l>=c.length?(h=new $_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Fb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ae};break;case"SpotLight":i={position:new $,direction:new $,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function Hb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Gb=0;function Vb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kb(o){const t=new Fb,i=Hb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new We,h=new We;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,C=0,M=0,_=0,z=0,N=0,D=0,F=0,G=0,I=0;p.sort(Vb);for(let w=0,R=p.length;w<R;w++){const H=p[w],ot=H.color,at=H.intensity,gt=H.distance,ft=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ot.r*at,v+=ot.g*at,x+=ot.b*at;else if(H.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],at);I++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=H.shadow.matrix,z++}r.directional[y]=P,y++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(ot).multiplyScalar(at),P.distance=gt,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[C]=P;const j=H.shadow;if(H.map&&(r.spotLightMap[F]=H.map,F++,j.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[C]=j.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=ft,D++}C++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(ot).multiplyScalar(at),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=P,M++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const j=H.shadow,q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=H.shadow.matrix,N++}r.point[A]=P,A++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(at),P.groundColor.copy(H.groundColor).multiplyScalar(at),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==A||Z.spotLength!==C||Z.rectAreaLength!==M||Z.hemiLength!==_||Z.numDirectionalShadows!==z||Z.numPointShadows!==N||Z.numSpotShadows!==D||Z.numSpotMaps!==F||Z.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+F-G,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,Z.directionalLength=y,Z.pointLength=A,Z.spotLength=C,Z.rectAreaLength=M,Z.hemiLength=_,Z.numDirectionalShadows=z,Z.numPointShadows=N,Z.numSpotShadows=D,Z.numSpotMaps=F,Z.numLightProbes=I,r.version=Gb++)}function m(p,g){let v=0,x=0,y=0,A=0,C=0;const M=g.matrixWorldInverse;for(let _=0,z=p.length;_<z;_++){const N=p[_];if(N.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(N.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function tv(o){const t=new kb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Xb(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new tv(o),t.set(l,[d])):c>=h.length?(d=new tv(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yb(o,t,i){let r=new dd;const l=new ye,c=new ye,h=new Be,d=new uM({depthPacking:SS}),m=new cM,p={},g=i.maxTextureSize,v={[Fa]:Fn,[Fn]:Fa,[Ti]:Ti},x=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Wb,fragmentShader:qb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new ia;A.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new In(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let _=this.type;this.render=function(G,I,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Ba),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const at=_!==$i&&this.type===$i,gt=_===$i&&this.type!==$i;for(let ft=0,P=G.length;ft<P;ft++){const j=G[ft],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,q.mapSize.y=c.y)),q.map===null||at===!0||gt===!0){const tt=this.type!==$i?{minFilter:gi,magFilter:gi}:{};q.map!==null&&q.map.dispose(),q.map=new Sr(l.x,l.y,tt),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const U=q.getViewportCount();for(let tt=0;tt<U;tt++){const vt=q.getViewport(tt);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),ot.viewport(h),q.updateMatrices(j,tt),r=q.getFrustum(),D(I,Z,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===$i&&z(q,Z),q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,H)};function z(G,I){const Z=t.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Sr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,Z,x,C,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,Z,y,C,null)}function N(G,I,Z,w){let R=null;const H=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)R=H;else if(R=Z.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ot=R.uuid,at=I.uuid;let gt=p[ot];gt===void 0&&(gt={},p[ot]=gt);let ft=gt[at];ft===void 0&&(ft=R.clone(),gt[at]=ft,I.addEventListener("dispose",F)),R=ft}if(R.visible=I.visible,R.wireframe=I.wireframe,w===$i?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ot=o.properties.get(R);ot.light=Z}return R}function D(G,I,Z,w,R){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===$i)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const at=t.update(G),gt=G.material;if(Array.isArray(gt)){const ft=at.groups;for(let P=0,j=ft.length;P<j;P++){const q=ft[P],yt=gt[q.materialIndex];if(yt&&yt.visible){const U=N(G,yt,w,R);G.onBeforeShadow(o,G,I,Z,at,U,q),o.renderBufferDirect(Z,null,at,U,G,q),G.onAfterShadow(o,G,I,Z,at,U,q)}}}else if(gt.visible){const ft=N(G,gt,w,R);G.onBeforeShadow(o,G,I,Z,at,ft,null),o.renderBufferDirect(Z,null,at,ft,G,null),G.onAfterShadow(o,G,I,Z,at,ft,null)}}const ot=G.children;for(let at=0,gt=ot.length;at<gt;at++)D(ot[at],I,Z,w,R)}function F(G){G.target.removeEventListener("dispose",F);for(const Z in p){const w=p[Z],R=G.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const Zb={[gh]:_h,[vh]:Mh,[xh]:yh,[gs]:Sh,[_h]:gh,[Mh]:vh,[yh]:xh,[Sh]:gs};function jb(o,t){function i(){let k=!1;const Ut=new Be;let Et=null;const zt=new Be(0,0,0,0);return{setMask:function(bt){Et!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){k=bt},setClear:function(bt,_t,It,ee,we){we===!0&&(bt*=ee,_t*=ee,It*=ee),Ut.set(bt,_t,It,ee),zt.equals(Ut)===!1&&(o.clearColor(bt,_t,It,ee),zt.copy(Ut))},reset:function(){k=!1,Et=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(_t){if(Ut!==_t){const It=t.get("EXT_clip_control");_t?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ee=bt;bt=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(_t){_t?At(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){Et!==_t&&!k&&(o.depthMask(_t),Et=_t)},setFunc:function(_t){if(Ut&&(_t=Zb[_t]),zt!==_t){switch(_t){case gh:o.depthFunc(o.NEVER);break;case _h:o.depthFunc(o.ALWAYS);break;case vh:o.depthFunc(o.LESS);break;case gs:o.depthFunc(o.LEQUAL);break;case xh:o.depthFunc(o.EQUAL);break;case Sh:o.depthFunc(o.GEQUAL);break;case Mh:o.depthFunc(o.GREATER);break;case yh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){bt!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),bt=_t)},reset:function(){k=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,It=null,ee=null,we=null;return{setTest:function(Ee){k||(Ee?At(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!k&&(o.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Gn,cn){(Et!==Ee||zt!==Gn||bt!==cn)&&(o.stencilFunc(Ee,Gn,cn),Et=Ee,zt=Gn,bt=cn)},setOp:function(Ee,Gn,cn){(_t!==Ee||It!==Gn||ee!==cn)&&(o.stencilOp(Ee,Gn,cn),_t=Ee,It=Gn,ee=cn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){we!==Ee&&(o.clearStencil(Ee),we=Ee)},reset:function(){k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,It=null,ee=null,we=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,z=null,N=null,D=null,F=null,G=null,I=new Ae(0,0,0),Z=0,w=!1,R=null,H=null,ot=null,at=null,gt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=j>=2);let yt=null,U={};const tt=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new Be().fromArray(tt),Q=new Be().fromArray(vt);function pt(k,Ut,Et,zt){const bt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Et;It++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return _t}const Mt={};Mt[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(gs),Se(!1),fe($g),At(o.CULL_FACE),B(Ba);function At(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Ct(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function se(k,Ut){return v[k]!==Ut?(o.bindFramebuffer(k,Ut),v[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(k,Ut){let Et=y,zt=!1;if(k){Et=x.get(Ut),Et===void 0&&(Et=[],x.set(Ut,Et));const bt=k.textures;if(Et.length!==bt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,It=bt.length;_t<It;_t++)Et[_t]=o.COLOR_ATTACHMENT0+_t;Et.length=bt.length,zt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Et)}function Le(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const Ie={[mr]:o.FUNC_ADD,[qx]:o.FUNC_SUBTRACT,[Yx]:o.FUNC_REVERSE_SUBTRACT};Ie[Zx]=o.MIN,Ie[jx]=o.MAX;const pe={[Kx]:o.ZERO,[Qx]:o.ONE,[Jx]:o.SRC_COLOR,[ph]:o.SRC_ALPHA,[aS]:o.SRC_ALPHA_SATURATE,[nS]:o.DST_COLOR,[tS]:o.DST_ALPHA,[$x]:o.ONE_MINUS_SRC_COLOR,[mh]:o.ONE_MINUS_SRC_ALPHA,[iS]:o.ONE_MINUS_DST_COLOR,[eS]:o.ONE_MINUS_DST_ALPHA,[rS]:o.CONSTANT_COLOR,[sS]:o.ONE_MINUS_CONSTANT_COLOR,[oS]:o.CONSTANT_ALPHA,[lS]:o.ONE_MINUS_CONSTANT_ALPHA};function B(k,Ut,Et,zt,bt,_t,It,ee,we,Ee){if(k===Ba){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(At(o.BLEND),C=!0),k!==Wx){if(k!==M||Ee!==w){if((_!==mr||D!==mr)&&(o.blendEquation(o.FUNC_ADD),_=mr,D=mr),Ee)switch(k){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t_:o.blendFunc(o.ONE,o.ONE);break;case e_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case e_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,N=null,F=null,G=null,I.set(0,0,0),Z=0,M=k,w=Ee}return}bt=bt||Ut,_t=_t||Et,It=It||zt,(Ut!==_||bt!==D)&&(o.blendEquationSeparate(Ie[Ut],Ie[bt]),_=Ut,D=bt),(Et!==z||zt!==N||_t!==F||It!==G)&&(o.blendFuncSeparate(pe[Et],pe[zt],pe[_t],pe[It]),z=Et,N=zt,F=_t,G=It),(ee.equals(I)===!1||we!==Z)&&(o.blendColor(ee.r,ee.g,ee.b,we),I.copy(ee),Z=we),M=k,w=!1}function gn(k,Ut){k.side===Ti?Ct(o.CULL_FACE):At(o.CULL_FACE);let Et=k.side===Fn;Ut&&(Et=!Et),Se(Et),k.blending===ds&&k.transparent===!1?B(Ba):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),me(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function fe(k){k!==kx?(At(o.CULL_FACE),k!==H&&(k===$g?o.cullFace(o.BACK):k===Xx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),H=k}function Gt(k){k!==ot&&(P&&o.lineWidth(k),ot=k)}function me(k,Ut,Et){k?(At(o.POLYGON_OFFSET_FILL),(at!==Ut||gt!==Et)&&(o.polygonOffset(Ut,Et),at=Ut,gt=Et)):Ct(o.POLYGON_OFFSET_FILL)}function Yt(k){k?At(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ie(k){k===void 0&&(k=o.TEXTURE0+ft-1),yt!==k&&(o.activeTexture(k),yt=k)}function Ke(k,Ut,Et){Et===void 0&&(yt===null?Et=o.TEXTURE0+ft-1:Et=yt);let zt=U[Et];zt===void 0&&(zt={type:void 0,texture:void 0},U[Et]=zt),(zt.type!==k||zt.texture!==Ut)&&(yt!==Et&&(o.activeTexture(Et),yt=Et),o.bindTexture(k,Ut||Mt[k]),zt.type=k,zt.texture=Ut)}function L(){const k=U[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Wt(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function qt(k,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Ut,k.name),Et.set(k,zt))}function Rt(k,Ut){const zt=p.get(Ut).get(k);m.get(Ut)!==zt&&(o.uniformBlockBinding(Ut,zt,k.__bindingPointIndex),m.set(Ut,zt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},yt=null,U={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,z=null,N=null,D=null,F=null,G=null,I=new Ae(0,0,0),Z=0,w=!1,R=null,H=null,ot=null,at=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:se,drawBuffers:Kt,useProgram:Le,setBlending:B,setMaterial:gn,setFlipSided:Se,setCullFace:fe,setLineWidth:Gt,setPolygonOffset:me,setScissorTest:Yt,activeTexture:ie,bindTexture:Ke,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Vt,texImage3D:xt,updateUBOMapping:qt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ct,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ot,scissor:Pt,viewport:Wt,reset:ne}}function Kb(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ye,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return y?new OffscreenCanvas(L,E):Lo("canvas")}function C(L,E,et){let ct=1;const dt=Ke(L);if((dt.width>et||dt.height>et)&&(ct=et/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(ct*dt.width),Ot=Math.floor(ct*dt.height);v===void 0&&(v=A(lt,Ot));const Dt=E?A(lt,Ot):v;return Dt.width=lt,Dt.height=Ot,Dt.getContext("2d").drawImage(L,0,0,lt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Ot+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,E,et,ct,dt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=E;if(E===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),E===o.RGBA){const Ot=dt?Eu:be.getTransfer(ct);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=Ot===ze?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function D(L,E){let et;return L?E===null||E===xr||E===wo?et=o.DEPTH24_STENCIL8:E===ta?et=o.DEPTH32F_STENCIL8:E===Co&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===wo?et=o.DEPTH_COMPONENT24:E===ta?et=o.DEPTH_COMPONENT32F:E===Co&&(et=o.DEPTH_COMPONENT16),et}function F(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),Z(E),E.isVideoTexture&&g.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),R(E)}function Z(L){const E=r.get(L);if(E.__webglInit===void 0)return;const et=L.source,ct=x.get(et);if(ct){const dt=ct[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(L),Object.keys(ct).length===0&&x.delete(et)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const et=L.source,ct=x.get(et);delete ct[E.__cacheKey],h.memory.textures--}function R(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let dt=0;dt<E.__webglFramebuffer[ct].length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][dt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=L.textures;for(let ct=0,dt=et.length;ct<dt;ct++){const lt=r.get(et[ct]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(et[ct])}r.remove(L)}let H=0;function ot(){H=0}function at(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function gt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ft(L,E){const et=r.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,L,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function P(L,E){const et=r.get(L);if(L.version>0&&et.__version!==L.version){Mt(et,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function j(L,E){const et=r.get(L);if(L.version>0&&et.__version!==L.version){Mt(et,L,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function q(L,E){const et=r.get(L);if(L.version>0&&et.__version!==L.version){At(et,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const yt={[bh]:o.REPEAT,[_r]:o.CLAMP_TO_EDGE,[Ah]:o.MIRRORED_REPEAT},U={[gi]:o.NEAREST,[vS]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[bi]:o.LINEAR,[Pf]:o.LINEAR_MIPMAP_NEAREST,[vr]:o.LINEAR_MIPMAP_LINEAR},tt={[yS]:o.NEVER,[CS]:o.ALWAYS,[ES]:o.LESS,[pv]:o.LEQUAL,[TS]:o.EQUAL,[RS]:o.GEQUAL,[bS]:o.GREATER,[AS]:o.NOTEQUAL};function vt(L,E){if(E.type===ta&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===Pf||E.magFilter===jl||E.magFilter===vr||E.minFilter===bi||E.minFilter===Pf||E.minFilter===jl||E.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==jl&&E.minFilter!==vr||E.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(L,E){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const ct=E.source;let dt=x.get(ct);dt===void 0&&(dt={},x.set(ct,dt));const lt=gt(E);if(lt!==L.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),dt[lt].usedTimes++;const Ot=dt[L.__cacheKey];Ot!==void 0&&(dt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(E)),L.__cacheKey=lt,L.__webglTexture=dt[lt].texture}return et}function Q(L,E,et){return Math.floor(Math.floor(L/et)/E)}function pt(L,E,et,ct){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ct,E.data);else{lt.sort((xt,Pt)=>xt.start-Pt.start);let Ot=0;for(let xt=1;xt<lt.length;xt++){const Pt=lt[Ot],Wt=lt[xt],qt=Pt.start+Pt.count,Rt=Q(Wt.start,E.width,4),ne=Q(Pt.start,E.width,4);Wt.start<=qt+1&&Rt===ne&&Q(Wt.start+Wt.count-1,E.width,4)===Rt?Pt.count=Math.max(Pt.count,Wt.start+Wt.count-Pt.start):(++Ot,lt[Ot]=Wt)}lt.length=Ot+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let xt=0,Pt=lt.length;xt<Pt;xt++){const Wt=lt[xt],qt=Math.floor(Wt.start/4),Rt=Math.ceil(Wt.count/4),ne=qt%E.width,k=Math.floor(qt/E.width),Ut=Rt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ne,k,Ut,Et,et,ct,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function Mt(L,E,et){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const dt=St(L,E),lt=E.source;i.bindTexture(ct,L.__webglTexture,o.TEXTURE0+et);const Ot=r.get(lt);if(lt.version!==Ot.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=be.getPrimaries(be.workingColorSpace),Ht=E.colorSpace===za?null:be.getPrimaries(E.colorSpace),Vt=E.colorSpace===za||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let xt=C(E.image,!1,l.maxTextureSize);xt=ie(E,xt);const Pt=c.convert(E.format,E.colorSpace),Wt=c.convert(E.type);let qt=N(E.internalFormat,Pt,Wt,E.colorSpace,E.isVideoTexture);vt(ct,E);let Rt;const ne=E.mipmaps,k=E.isVideoTexture!==!0,Ut=Ot.__version===void 0||dt===!0,Et=lt.dataReady,zt=F(E,xt);if(E.isDepthTexture)qt=D(E.format===Uo,E.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,qt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,null));else if(E.isDataTexture)if(ne.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ne[0].width,ne[0].height);for(let bt=0,_t=ne.length;bt<_t;bt++)Rt=ne[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data);E.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,xt.width,xt.height),Et&&pt(E,xt,Pt,Wt)):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,ne[0].width,ne[0].height,xt.depth);for(let bt=0,_t=ne.length;bt<_t;bt++)if(Rt=ne[bt],E.format!==mi)if(Pt!==null)if(k){if(Et)if(E.layerUpdates.size>0){const It=D_(Rt.width,Rt.height,E.format,E.type);for(const ee of E.layerUpdates){const we=Rt.data.subarray(ee*It/Rt.data.BYTES_PER_ELEMENT,(ee+1)*It/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ee,Rt.width,Rt.height,1,Pt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Rt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Wt,Rt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Pt,Wt,Rt.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ne[0].width,ne[0].height);for(let bt=0,_t=ne.length;bt<_t;bt++)Rt=ne[bt],E.format!==mi?Pt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data)}else if(E.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,xt.width,xt.height,xt.depth),Et)if(E.layerUpdates.size>0){const bt=D_(xt.width,xt.height,E.format,E.type);for(const _t of E.layerUpdates){const It=xt.data.subarray(_t*bt/xt.data.BYTES_PER_ELEMENT,(_t+1)*bt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,Pt,Wt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(E.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,zt,qt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(E.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,zt,qt,xt.width,xt.height);else{let bt=xt.width,_t=xt.height;for(let It=0;It<zt;It++)i.texImage2D(o.TEXTURE_2D,It,qt,bt,_t,0,Pt,Wt,null),bt>>=1,_t>>=1}}else if(ne.length>0){if(k&&Ut){const bt=Ke(ne[0]);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}for(let bt=0,_t=ne.length;bt<_t;bt++)Rt=ne[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt,Wt,Rt):i.texImage2D(o.TEXTURE_2D,bt,qt,Pt,Wt,Rt);E.generateMipmaps=!1}else if(k){if(Ut){const bt=Ke(xt);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Wt,xt)}else i.texImage2D(o.TEXTURE_2D,0,qt,Pt,Wt,xt);M(E)&&_(ct),Ot.__version=lt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function At(L,E,et){if(E.image.length!==6)return;const ct=St(L,E),dt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const lt=r.get(dt);if(dt.version!==lt.__version||ct===!0){i.activeTexture(o.TEXTURE0+et);const Ot=be.getPrimaries(be.workingColorSpace),Dt=E.colorSpace===za?null:be.getPrimaries(E.colorSpace),Ht=E.colorSpace===za||Ot===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Vt&&!xt?Pt[_t]=C(E.image[_t],!0,l.maxCubemapSize):Pt[_t]=xt?E.image[_t].image:E.image[_t],Pt[_t]=ie(E,Pt[_t]);const Wt=Pt[0],qt=c.convert(E.format,E.colorSpace),Rt=c.convert(E.type),ne=N(E.internalFormat,qt,Rt,E.colorSpace),k=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ct===!0,Et=dt.dataReady;let zt=F(E,Wt);vt(o.TEXTURE_CUBE_MAP,E);let bt;if(Vt){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ne,Wt.width,Wt.height);for(let _t=0;_t<6;_t++){bt=Pt[_t].mipmaps;for(let It=0;It<bt.length;It++){const ee=bt[It];E.format!==mi?qt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,ee.width,ee.height,qt,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ne,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,ee.width,ee.height,qt,Rt,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ne,ee.width,ee.height,0,qt,Rt,ee.data)}}}else{if(bt=E.mipmaps,k&&Ut){bt.length>0&&zt++;const _t=Ke(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ne,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,qt,Rt,Pt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,Pt[_t].width,Pt[_t].height,0,qt,Rt,Pt[_t].data);for(let It=0;It<bt.length;It++){const we=bt[It].image[_t].image;k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,we.width,we.height,qt,Rt,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ne,we.width,we.height,0,qt,Rt,we.data)}}else{k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,qt,Rt,Pt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,qt,Rt,Pt[_t]);for(let It=0;It<bt.length;It++){const ee=bt[It];k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,qt,Rt,ee.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ne,qt,Rt,ee.image[_t])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),lt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ct(L,E,et,ct,dt,lt){const Ot=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Ht=N(et.internalFormat,Ot,Dt,et.colorSpace),Vt=r.get(E),xt=r.get(et);if(xt.__renderTarget=E,!Vt.__hasExternalTextures){const Pt=Math.max(1,E.width>>lt),Wt=Math.max(1,E.height>>lt);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,lt,Ht,Pt,Wt,E.depth,0,Ot,Dt,null):i.texImage2D(dt,lt,Ht,Pt,Wt,0,Ot,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),me(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,dt,xt.__webglTexture,0,Gt(E)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,dt,xt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function se(L,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ct=E.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,lt=D(E.stencilBuffer,dt),Ot=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Gt(E);me(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,lt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,L)}else{const ct=E.textures;for(let dt=0;dt<ct.length;dt++){const lt=ct[dt],Ot=c.convert(lt.format,lt.colorSpace),Dt=c.convert(lt.type),Ht=N(lt.internalFormat,Ot,Dt,lt.colorSpace),Vt=Gt(E);et&&me(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Ht,E.width,E.height):me(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const dt=ct.__webglTexture,lt=Gt(E);if(E.depthTexture.format===Do)me(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Uo)me(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Le(L){const E=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ct}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ct=L.texture.mipmaps;ct&&ct.length>0?Kt(E.__webglFramebuffer[0],L):Kt(E.__webglFramebuffer,L)}else if(et){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),se(E.__webglDepthbuffer[ct],L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}else{const ct=L.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),se(E.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ie(L,E,et){const ct=r.get(L);E!==void 0&&Ct(ct.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Le(L)}function pe(L){const E=L.texture,et=r.get(L),ct=r.get(E);L.addEventListener("dispose",I);const dt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)et.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=r.get(dt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&me(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=c.convert(Ht.format,Ht.colorSpace),xt=c.convert(Ht.type),Pt=N(Ht.internalFormat,Vt,xt,Ht.colorSpace,L.isXRRenderTarget===!0),Wt=Gt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Pt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),se(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Dt][Ht],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Ct(et.__webglFramebuffer[Dt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=dt[Dt],xt=r.get(Vt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),vt(o.TEXTURE_2D,Vt),Ct(et.__webglFramebuffer,L,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),M(Vt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ct.__webglTexture),vt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ht],L,E,o.COLOR_ATTACHMENT0,Dt,Ht);else Ct(et.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&_(Dt),i.unbindTexture()}L.depthBuffer&&Le(L)}function B(L){const E=L.textures;for(let et=0,ct=E.length;et<ct;et++){const dt=E[et];if(M(dt)){const lt=z(L),Ot=r.get(dt).__webglTexture;i.bindTexture(lt,Ot),_(lt),i.unbindTexture()}}}const gn=[],Se=[];function fe(L){if(L.samples>0){if(me(L)===!1){const E=L.textures,et=L.width,ct=L.height;let dt=o.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(L),Dt=E.length>1;if(Dt)for(let Vt=0;Vt<E.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=L.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=r.get(E[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,et,ct,0,0,et,ct,dt,o.NEAREST),m===!0&&(gn.length=0,Se.length=0,gn.push(o.COLOR_ATTACHMENT0+Vt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(gn.push(lt),Se.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,gn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<E.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=r.get(E[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Gt(L){return Math.min(l.maxSamples,L.samples)}function me(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function ie(L,E){const et=L.colorSpace,ct=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==xs&&et!==za&&(be.getTransfer(et)===ze?(ct!==mi||dt!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=ot,this.setTexture2D=ft,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Ie,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=me}function Qb(o,t){function i(r,l=za){let c;const h=be.getTransfer(l);if(r===Ri)return o.UNSIGNED_BYTE;if(r===rd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ov)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===rv)return o.BYTE;if(r===sv)return o.SHORT;if(r===Co)return o.UNSIGNED_SHORT;if(r===ad)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===lv)return o.ALPHA;if(r===uv)return o.RGB;if(r===mi)return o.RGBA;if(r===Do)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===cv)return o.RED;if(r===od)return o.RED_INTEGER;if(r===fv)return o.RG;if(r===ld)return o.RG_INTEGER;if(r===ud)return o.RGBA_INTEGER;if(r===_u||r===vu||r===xu||r===Su)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===_u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===_u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===wh||r===Dh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh||r===Lh||r===Nh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Uh||r===Lh)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Nh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oh||r===Ph||r===zh||r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Oh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ph)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mu||r===Zh||r===jh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Mu)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hv||r===Kh||r===Qh||r===Jh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Mu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Un,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ha({vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new Io(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends Ms{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,A=null;const C=new tA,M=i.getContextAttributes();let _=null,z=null;const N=[],D=[],F=new ye;let G=null;const I=new Qn;I.viewport=new Be;const Z=new Qn;Z.viewport=new Be;const w=[I,Z],R=new SM;let H=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=N[Q];return pt===void 0&&(pt=new ah,N[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=N[Q];return pt===void 0&&(pt=new ah,N[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=N[Q];return pt===void 0&&(pt=new ah,N[Q]=pt),pt.getHandSpace()};function at(Q){const pt=D.indexOf(Q.inputSource);if(pt===-1)return;const Mt=N[pt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function gt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ft);for(let Q=0;Q<N.length;Q++){const pt=D[Q];pt!==null&&(D[Q]=null,N[Q].disconnect(pt))}H=null,ot=null,C.reset(),t.setRenderTarget(_),y=null,x=null,v=null,l=null,z=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,Ct=null;M.depth&&(Ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=M.stencil?Uo:Do,At=M.stencil?wo:xr);const se={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(se),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),z=new Sr(x.textureWidth,x.textureHeight,{format:mi,type:Ri,depthTexture:new Tv(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new Sr(y.framebufferWidth,y.framebufferHeight,{format:mi,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ft(Q){for(let pt=0;pt<Q.removed.length;pt++){const Mt=Q.removed[pt],At=D.indexOf(Mt);At>=0&&(D[At]=null,N[At].disconnect(Mt))}for(let pt=0;pt<Q.added.length;pt++){const Mt=Q.added[pt];let At=D.indexOf(Mt);if(At===-1){for(let se=0;se<N.length;se++)if(se>=D.length){D.push(Mt),At=se;break}else if(D[se]===null){D[se]=Mt,At=se;break}if(At===-1)break}const Ct=N[At];Ct&&Ct.connect(Mt)}}const P=new $,j=new $;function q(Q,pt,Mt){P.setFromMatrixPosition(pt.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);const At=P.distanceTo(j),Ct=pt.projectionMatrix.elements,se=Mt.projectionMatrix.elements,Kt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Ie=(Ct[9]+1)/Ct[5],pe=(Ct[9]-1)/Ct[5],B=(Ct[8]-1)/Ct[0],gn=(se[8]+1)/se[0],Se=Kt*B,fe=Kt*gn,Gt=At/(-B+gn),me=Gt*-B;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(me),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Yt=Kt+Gt,ie=Le+Gt,Ke=Se-me,L=fe+(At-me),E=Ie*Le/ie*Yt,et=pe*Le/ie*Yt;Q.projectionMatrix.makePerspective(Ke,L,E,et,Yt,ie),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,Mt=Q.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),R.near=Z.near=I.near=pt,R.far=Z.far=I.far=Mt,(H!==R.near||ot!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ot=R.far),I.layers.mask=Q.layers.mask|2,Z.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|Z.layers.mask;const At=Q.parent,Ct=R.cameras;yt(R,At);for(let se=0;se<Ct.length;se++)yt(Ct[se],At);Ct.length===2?q(R,I,Z):R.projectionMatrix.copy(I.projectionMatrix),U(Q,R,At)};function U(Q,pt,Mt){Mt===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$h*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let tt=null;function vt(Q,pt){if(g=pt.getViewerPose(p||h),A=pt,g!==null){const Mt=g.views;y!==null&&(t.setRenderTargetFramebuffer(z,y.framebuffer),t.setRenderTarget(z));let At=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,At=!0);for(let Kt=0;Kt<Mt.length;Kt++){const Le=Mt[Kt];let Ie=null;if(y!==null)Ie=y.getViewport(Le);else{const B=v.getViewSubImage(x,Le);Ie=B.viewport,Kt===0&&(t.setRenderTargetTextures(z,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(z))}let pe=w[Kt];pe===void 0&&(pe=new Qn,pe.layers.enable(Kt),pe.viewport=new Be,w[Kt]=pe),pe.matrix.fromArray(Le.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Le.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Kt===0&&(R.matrix.copy(pe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),At===!0&&R.cameras.push(pe)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(Mt[0]);Kt&&Kt.isValid&&Kt.texture&&C.init(t,Kt,l.renderState)}}for(let Mt=0;Mt<N.length;Mt++){const At=D[Mt],Ct=N[Mt];At!==null&&Ct!==void 0&&Ct.update(At,pt,p||h)}tt&&tt(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),A=null}const St=new Av;St.setAnimationLoop(vt),this.setAnimationLoop=function(Q){tt=Q},this.dispose=function(){}}}const fr=new Ci,nA=new We;function iA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Mv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,z,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),A(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),C(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,z,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Fn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Fn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const z=t.get(_),N=z.envMap,D=z.envMapRotation;N&&(M.envMap.value=N,fr.copy(D),fr.x*=-1,fr.y*=-1,fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),M.envMapRotation.value.setFromMatrix4(nA.makeRotationFromEuler(fr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,z,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*z,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,z){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const z=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function aA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,N){const D=N.program;r.uniformBlockBinding(z,D)}function p(z,N){let D=l[z.id];D===void 0&&(A(z),D=g(z),l[z.id]=D,z.addEventListener("dispose",M));const F=N.program;r.updateUBOMapping(z,F);const G=t.render.frame;c[z.id]!==G&&(x(z),c[z.id]=G)}function g(z){const N=v();z.__bindingPointIndex=N;const D=o.createBuffer(),F=z.__size,G=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,F,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const N=l[z.id],D=z.uniforms,F=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,I=D.length;G<I;G++){const Z=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,R=Z.length;w<R;w++){const H=Z[w];if(y(H,G,w,F)===!0){const ot=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let ft=0;ft<at.length;ft++){const P=at[ft],j=C(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ot+gt,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,gt),gt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(z,N,D,F){const G=z.value,I=N+"_"+D;if(F[I]===void 0)return typeof G=="number"||typeof G=="boolean"?F[I]=G:F[I]=G.clone(),!0;{const Z=F[I];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return F[I]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function A(z){const N=z.uniforms;let D=0;const F=16;for(let I=0,Z=N.length;I<Z;I++){const w=Array.isArray(N[I])?N[I]:[N[I]];for(let R=0,H=w.length;R<H;R++){const ot=w[R],at=Array.isArray(ot.value)?ot.value:[ot.value];for(let gt=0,ft=at.length;gt<ft;gt++){const P=at[gt],j=C(P),q=D%F,yt=q%j.boundary,U=q+yt;D+=yt,U!==0&&F-U<j.storage&&(D+=F-U),ot.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=j.storage}}}const G=D%F;return G>0&&(D+=F-G),z.__size=D,z.__cache={},this}function C(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function M(z){const N=z.target;N.removeEventListener("dispose",M);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class rA{constructor(t={}){const{canvas:i=DS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=oi;let G=0,I=0,Z=null,w=-1,R=null;const H=new Be,ot=new Be;let at=null;const gt=new Ae(0);let ft=0,P=i.width,j=i.height,q=1,yt=null,U=null;const tt=new Be(0,0,P,j),vt=new Be(0,0,P,j);let St=!1;const Q=new dd;let pt=!1,Mt=!1;const At=new We,Ct=new We,se=new $,Kt=new Be,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function pe(){return Z===null?q:1}let B=r;function gn(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${id}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",_t,!1),B===null){const W="webgl2";if(B=gn(W,b),B===null)throw gn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,fe,Gt,me,Yt,ie,Ke,L,E,et,ct,dt,lt,Ot,Dt,Ht,Vt,xt,Pt,Wt,qt,Rt,ne,k;function Ut(){Se=new mT(B),Se.init(),Rt=new Qb(B,Se),fe=new lT(B,Se,t,Rt),Gt=new jb(B,Se),fe.reverseDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),me=new vT(B),Yt=new zb,ie=new Kb(B,Se,Gt,Yt,fe,Rt,me),Ke=new cT(D),L=new pT(D),E=new TM(B),ne=new sT(B,E),et=new gT(B,E,me,ne),ct=new ST(B,et,E,me),Pt=new xT(B,fe,ie),Ht=new uT(Yt),dt=new Pb(D,Ke,L,Se,fe,ne,Ht),lt=new iA(D,Yt),Ot=new Ib,Dt=new Xb(Se),xt=new rT(D,Ke,L,Gt,ct,y,m),Vt=new Yb(D,ct,fe),k=new aA(B,me,fe,Gt),Wt=new oT(B,Se,me),qt=new _T(B,Se,me),me.programs=dt.programs,D.capabilities=fe,D.extensions=Se,D.properties=Yt,D.renderLists=Ot,D.shadowMap=Vt,D.state=Gt,D.info=me}Ut();const Et=new eA(D,B);this.xr=Et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(P,j,!1))},this.getSize=function(b){return b.set(P,j)},this.setSize=function(b,W,rt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,j=W,i.width=Math.floor(b*q),i.height=Math.floor(W*q),rt===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(P*q,j*q).floor()},this.setDrawingBufferSize=function(b,W,rt){P=b,j=W,q=rt,i.width=Math.floor(b*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,W,rt,st){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,W,rt,st),Gt.viewport(H.copy(tt).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,W,rt,st){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,W,rt,st),Gt.scissor(ot.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){Gt.setScissorTest(St=b)},this.setOpaqueSort=function(b){yt=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,rt=!0){let st=0;if(b){let Y=!1;if(Z!==null){const Tt=Z.texture.format;Y=Tt===ud||Tt===ld||Tt===od}if(Y){const Tt=Z.texture.type,wt=Tt===Ri||Tt===xr||Tt===Co||Tt===wo||Tt===rd||Tt===sd,Nt=xt.getClearColor(),Bt=xt.getClearAlpha(),Jt=Nt.r,Zt=Nt.g,kt=Nt.b;wt?(A[0]=Jt,A[1]=Zt,A[2]=kt,A[3]=Bt,B.clearBufferuiv(B.COLOR,0,A)):(C[0]=Jt,C[1]=Zt,C[2]=kt,C[3]=Bt,B.clearBufferiv(B.COLOR,0,C))}else st|=B.COLOR_BUFFER_BIT}W&&(st|=B.DEPTH_BUFFER_BIT),rt&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),xt.dispose(),Ot.dispose(),Dt.dispose(),Yt.dispose(),Ke.dispose(),L.dispose(),ct.dispose(),ne.dispose(),k.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",an),Et.removeEventListener("sessionend",_n),Ln.stop()};function zt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const b=me.autoReset,W=Vt.enabled,rt=Vt.autoUpdate,st=Vt.needsUpdate,Y=Vt.type;Ut(),me.autoReset=b,Vt.enabled=W,Vt.autoUpdate=rt,Vt.needsUpdate=st,Vt.type=Y}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const W=b.target;W.removeEventListener("dispose",It),ee(W)}function ee(b){we(b),Yt.remove(b)}function we(b){const W=Yt.get(b).programs;W!==void 0&&(W.forEach(function(rt){dt.releaseProgram(rt)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,rt,st,Y,Tt){W===null&&(W=Le);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=ka(b,W,rt,st,Y);Gt.setMaterial(st,wt);let Bt=rt.index,Jt=1;if(st.wireframe===!0){if(Bt=et.getWireframeAttribute(rt),Bt===void 0)return;Jt=2}const Zt=rt.drawRange,kt=rt.attributes.position;let le=Zt.start*Jt,Re=(Zt.start+Zt.count)*Jt;Tt!==null&&(le=Math.max(le,Tt.start*Jt),Re=Math.min(Re,(Tt.start+Tt.count)*Jt)),Bt!==null?(le=Math.max(le,0),Re=Math.min(Re,Bt.count)):kt!=null&&(le=Math.max(le,0),Re=Math.min(Re,kt.count));const Ge=Re-le;if(Ge<0||Ge===1/0)return;ne.setup(Y,st,Nt,rt,Bt);let ge,_e=Wt;if(Bt!==null&&(ge=E.get(Bt),_e=qt,_e.setIndex(ge)),Y.isMesh)st.wireframe===!0?(Gt.setLineWidth(st.wireframeLinewidth*pe()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(Y.isLine){let jt=st.linewidth;jt===void 0&&(jt=1),Gt.setLineWidth(jt*pe()),Y.isLineSegments?_e.setMode(B.LINES):Y.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else Y.isPoints?_e.setMode(B.POINTS):Y.isSprite&&_e.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const jt=Y._multiDrawStarts,Ye=Y._multiDrawCounts,Me=Y._multiDrawCount,yn=Bt?E.get(Bt).bytesPerElement:1,oa=Yt.get(st).currentProgram.getUniforms();for(let Ve=0;Ve<Me;Ve++)oa.setValue(B,"_gl_DrawID",Ve),_e.render(jt[Ve]/yn,Ye[Ve])}else if(Y.isInstancedMesh)_e.renderInstances(le,Ge,Y.count);else if(rt.isInstancedBufferGeometry){const jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,jt);_e.renderInstances(le,Ge,Ye)}else _e.render(le,Ge)};function Ee(b,W,rt){b.transparent===!0&&b.side===Ti&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,ra(b,W,rt),b.side=Fa,b.needsUpdate=!0,ra(b,W,rt),b.side=Ti):ra(b,W,rt)}this.compile=function(b,W,rt=null){rt===null&&(rt=b),_=Dt.get(rt),_.init(W),N.push(_),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),b!==rt&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const st=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Ee(Nt,rt,Y),st.add(Nt)}else Ee(Tt,rt,Y),st.add(Tt)}),_=N.pop(),st},this.compileAsync=function(b,W,rt=null){const st=this.compile(b,W,rt);return new Promise(Y=>{function Tt(){if(st.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){Y(b);return}setTimeout(Tt,10)}Se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Gn=null;function cn(b){Gn&&Gn(b)}function an(){Ln.stop()}function _n(){Ln.start()}const Ln=new Av;Ln.setAnimationLoop(cn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(b){Gn=b,Et.setAnimationLoop(b),b===null?Ln.stop():Ln.start()},Et.addEventListener("sessionstart",an),Et.addEventListener("sessionend",_n),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(W),W=Et.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,W,Z),_=Dt.get(b,N.length),_.init(W),N.push(_),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,pt=Ht.init(this.clippingPlanes,Mt),M=Ot.get(b,z.length),M.init(),z.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Ga(Tt,W,-1/0,D.sortObjects)}Ga(b,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(yt,U),Ie=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Ie&&xt.addToRenderList(M,b),this.info.render.frame++,pt===!0&&Ht.beginShadows();const rt=_.state.shadowsArray;Vt.render(rt,b,W),pt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,Y=M.transmissive;if(_.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(Y.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const Bt=Tt[wt];Ho(st,Y,b,Bt)}Ie&&xt.render(b);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const Bt=Tt[wt];Fo(M,b,Bt,Bt.viewport)}}else Y.length>0&&Ho(st,Y,b,W),Ie&&xt.render(b),Fo(M,b,W);Z!==null&&I===0&&(ie.updateMultisampleRenderTarget(Z),ie.updateRenderTargetMipmap(Z)),b.isScene===!0&&b.onAfterRender(D,b,W),ne.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],pt===!0&&Ht.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Ga(b,W,rt,st){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){st&&Kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const wt=ct.update(b),Nt=b.material;Nt.visible&&M.push(b,wt,Nt,rt,Kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const wt=ct.update(b),Nt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Kt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Nt)){const Bt=wt.groups;for(let Jt=0,Zt=Bt.length;Jt<Zt;Jt++){const kt=Bt[Jt],le=Nt[kt.materialIndex];le&&le.visible&&M.push(b,wt,le,rt,Kt.z,kt)}}else Nt.visible&&M.push(b,wt,Nt,rt,Kt.z,null)}}const Tt=b.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)Ga(Tt[wt],W,rt,st)}function Fo(b,W,rt,st){const Y=b.opaque,Tt=b.transmissive,wt=b.transparent;_.setupLightsView(rt),pt===!0&&Ht.setGlobalState(D.clippingPlanes,rt),st&&Gt.viewport(H.copy(st)),Y.length>0&&Va(Y,W,rt),Tt.length>0&&Va(Tt,W,rt),wt.length>0&&Va(wt,W,rt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Ho(b,W,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Sr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?No:Ri,minFilter:vr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[st.id],wt=st.viewport||H;Tt.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(gt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),Ie&&xt.render(rt);const Bt=D.toneMapping;D.toneMapping=Ia;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),pt===!0&&Ht.setGlobalState(D.clippingPlanes,st),Va(b,rt,st),ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let kt=0,le=W.length;kt<le;kt++){const Re=W[kt],Ge=Re.object,ge=Re.geometry,_e=Re.material,jt=Re.group;if(_e.side===Ti&&Ge.layers.test(st.layers)){const Ye=_e.side;_e.side=Fn,_e.needsUpdate=!0,aa(Ge,rt,st,ge,_e,jt),_e.side=Ye,_e.needsUpdate=!0,Zt=!0}}Zt===!0&&(ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt),D.setClearColor(gt,ft),Jt!==void 0&&(st.viewport=Jt),D.toneMapping=Bt}function Va(b,W,rt){const st=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Tt=b.length;Y<Tt;Y++){const wt=b[Y],Nt=wt.object,Bt=wt.geometry,Jt=wt.group;let Zt=wt.material;Zt.allowOverride===!0&&st!==null&&(Zt=st),Nt.layers.test(rt.layers)&&aa(Nt,W,rt,Bt,Zt,Jt)}}function aa(b,W,rt,st,Y,Tt){b.onBeforeRender(D,W,rt,st,Y,Tt),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(D,W,rt,st,b,Tt),Y.transparent===!0&&Y.side===Ti&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,D.renderBufferDirect(rt,W,st,Y,b,Tt),Y.side=Fa,Y.needsUpdate=!0,D.renderBufferDirect(rt,W,st,Y,b,Tt),Y.side=Ti):D.renderBufferDirect(rt,W,st,Y,b,Tt),b.onAfterRender(D,W,rt,st,Y,Tt)}function ra(b,W,rt){W.isScene!==!0&&(W=Le);const st=Yt.get(b),Y=_.state.lights,Tt=_.state.shadowsArray,wt=Y.state.version,Nt=dt.getParameters(b,Y.state,Tt,W,rt),Bt=dt.getProgramCacheKey(Nt);let Jt=st.programs;st.environment=b.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(b.isMeshStandardMaterial?L:Ke).get(b.envMap||st.environment),st.envMapRotation=st.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",It),Jt=new Map,st.programs=Jt);let Zt=Jt.get(Bt);if(Zt!==void 0){if(st.currentProgram===Zt&&st.lightsStateVersion===wt)return Di(b,Nt),Zt}else Nt.uniforms=dt.getUniforms(b),b.onBeforeCompile(Nt,D),Zt=dt.acquireProgram(Nt,Bt),Jt.set(Bt,Zt),st.uniforms=Nt.uniforms;const kt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),Di(b,Nt),st.needsLights=$e(b),st.lightsStateVersion=wt,st.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.directionalShadowMap.value=Y.state.directionalShadowMap,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotShadowMap.value=Y.state.spotShadowMap,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMap.value=Y.state.pointShadowMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=Zt,st.uniformsList=null,Zt}function wi(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=yu.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Di(b,W){const rt=Yt.get(b);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function ka(b,W,rt,st,Y){W.isScene!==!0&&(W=Le),ie.resetTextureUnits();const Tt=W.fog,wt=st.isMeshStandardMaterial?W.environment:null,Nt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:xs,Bt=(st.isMeshStandardMaterial?L:Ke).get(st.envMap||wt),Jt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Zt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!rt.morphAttributes.position,le=!!rt.morphAttributes.normal,Re=!!rt.morphAttributes.color;let Ge=Ia;st.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const ge=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_e=ge!==void 0?ge.length:0,jt=Yt.get(st),Ye=_.state.lights;if(pt===!0&&(Mt===!0||b!==R)){const fn=b===R&&st.id===w;Ht.setState(st,b,fn)}let Me=!1;st.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ye.state.version||jt.outputColorSpace!==Nt||Y.isBatchedMesh&&jt.batching===!1||!Y.isBatchedMesh&&jt.batching===!0||Y.isBatchedMesh&&jt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&jt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&jt.instancing===!1||!Y.isInstancedMesh&&jt.instancing===!0||Y.isSkinnedMesh&&jt.skinning===!1||!Y.isSkinnedMesh&&jt.skinning===!0||Y.isInstancedMesh&&jt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&jt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&jt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&jt.instancingMorph===!1&&Y.morphTexture!==null||jt.envMap!==Bt||st.fog===!0&&jt.fog!==Tt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Ht.numPlanes||jt.numIntersection!==Ht.numIntersection)||jt.vertexAlphas!==Jt||jt.vertexTangents!==Zt||jt.morphTargets!==kt||jt.morphNormals!==le||jt.morphColors!==Re||jt.toneMapping!==Ge||jt.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,jt.__version=st.version);let yn=jt.currentProgram;Me===!0&&(yn=ra(st,W,Y));let oa=!1,Ve=!1,Li=!1;const Fe=yn.getUniforms(),En=jt.uniforms;if(Gt.useProgram(yn.program)&&(oa=!0,Ve=!0,Li=!0),st.id!==w&&(w=st.id,Ve=!0),oa||R!==b){Gt.buffers.depth.getReversed()?(At.copy(b.projectionMatrix),LS(At),NS(At),Fe.setValue(B,"projectionMatrix",At)):Fe.setValue(B,"projectionMatrix",b.projectionMatrix),Fe.setValue(B,"viewMatrix",b.matrixWorldInverse);const vn=Fe.map.cameraPosition;vn!==void 0&&vn.setValue(B,se.setFromMatrixPosition(b.matrixWorld)),fe.logarithmicDepthBuffer&&Fe.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Ve=!0,Li=!0)}if(Y.isSkinnedMesh){Fe.setOptional(B,Y,"bindMatrix"),Fe.setOptional(B,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Fe.setValue(B,"boneTexture",fn.boneTexture,ie))}Y.isBatchedMesh&&(Fe.setOptional(B,Y,"batchingTexture"),Fe.setValue(B,"batchingTexture",Y._matricesTexture,ie),Fe.setOptional(B,Y,"batchingIdTexture"),Fe.setValue(B,"batchingIdTexture",Y._indirectTexture,ie),Fe.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Fe.setValue(B,"batchingColorTexture",Y._colorsTexture,ie));const rn=rt.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Pt.update(Y,rt,yn),(Ve||jt.receiveShadow!==Y.receiveShadow)&&(jt.receiveShadow=Y.receiveShadow,Fe.setValue(B,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(En.envMap.value=Bt,En.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),Ve&&(Fe.setValue(B,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&sa(En,Li),Tt&&st.fog===!0&&lt.refreshFogUniforms(En,Tt),lt.refreshMaterialUniforms(En,st,q,j,_.state.transmissionRenderTarget[b.id]),yu.upload(B,wi(jt),En,ie)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(yu.upload(B,wi(jt),En,ie),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(B,"center",Y.center),Fe.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Fe.setValue(B,"normalMatrix",Y.normalMatrix),Fe.setValue(B,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const fn=st.uniformsGroups;for(let vn=0,_i=fn.length;vn<_i;vn++){const Ni=fn[vn];k.update(Ni,yn),k.bind(Ni,yn)}}return yn}function sa(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function $e(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,W,rt){const st=Yt.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Yt.get(b.texture).__webglTexture=W,Yt.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const rt=Yt.get(b);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const Go=B.createFramebuffer();this.setRenderTarget=function(b,W=0,rt=0){Z=b,G=W,I=rt;let st=!0,Y=null,Tt=!1,wt=!1;if(b){const Bt=Yt.get(b);if(Bt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(B.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)ie.setupRenderTarget(b);else if(Bt.__hasExternalTextures)ie.rebindTextures(b,Yt.get(b.texture).__webglTexture,Yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const kt=b.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&Yt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const Zt=Yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[W])?Y=Zt[W][rt]:Y=Zt[W],Tt=!0):b.samples>0&&ie.useMultisampledRTT(b)===!1?Y=Yt.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[rt]:Y=Zt,H.copy(b.viewport),ot.copy(b.scissor),at=b.scissorTest}else H.copy(tt).multiplyScalar(q).floor(),ot.copy(vt).multiplyScalar(q).floor(),at=St;if(rt!==0&&(Y=Go),Gt.bindFramebuffer(B.FRAMEBUFFER,Y)&&st&&Gt.drawBuffers(b,Y),Gt.viewport(H),Gt.scissor(ot),Gt.setScissorTest(at),Tt){const Bt=Yt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,rt)}else if(wt){const Bt=Yt.get(b.texture),Jt=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Bt.__webglTexture,rt,Jt)}else if(b!==null&&rt!==0){const Bt=Yt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Bt.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(b,W,rt,st,Y,Tt,wt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){Gt.bindFramebuffer(B.FRAMEBUFFER,Bt);try{const Jt=b.textures[Nt],Zt=Jt.format,kt=Jt.type;if(!fe.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-st&&rt>=0&&rt<=b.height-Y&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(W,rt,st,Y,Rt.convert(Zt),Rt.convert(kt),Tt))}finally{const Jt=Z!==null?Yt.get(Z).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,W,rt,st,Y,Tt,wt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt)if(W>=0&&W<=b.width-st&&rt>=0&&rt<=b.height-Y){Gt.bindFramebuffer(B.FRAMEBUFFER,Bt);const Jt=b.textures[Nt],Zt=Jt.format,kt=Jt.type;if(!fe.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(W,rt,st,Y,Rt.convert(Zt),Rt.convert(kt),0);const Re=Z!==null?Yt.get(Z).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,Re);const Ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await US(B,Ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(le),B.deleteSync(Ge),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,rt=0){const st=Math.pow(2,-rt),Y=Math.floor(b.image.width*st),Tt=Math.floor(b.image.height*st),wt=W!==null?W.x:0,Nt=W!==null?W.y:0;ie.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,rt,0,0,wt,Nt,Y,Tt),Gt.unbindTexture()};const Vo=B.createFramebuffer(),Ui=B.createFramebuffer();this.copyTextureToTexture=function(b,W,rt=null,st=null,Y=0,Tt=null){Tt===null&&(Y!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let wt,Nt,Bt,Jt,Zt,kt,le,Re,Ge;const ge=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if(rt!==null)wt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,Jt=rt.min.x,Zt=rt.min.y,kt=rt.isBox3?rt.min.z:0;else{const rn=Math.pow(2,-Y);wt=Math.floor(ge.width*rn),Nt=Math.floor(ge.height*rn),b.isDataArrayTexture?Bt=ge.depth:b.isData3DTexture?Bt=Math.floor(ge.depth*rn):Bt=1,Jt=0,Zt=0,kt=0}st!==null?(le=st.x,Re=st.y,Ge=st.z):(le=0,Re=0,Ge=0);const _e=Rt.convert(W.format),jt=Rt.convert(W.type);let Ye;W.isData3DTexture?(ie.setTexture3D(W,0),Ye=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ie.setTexture2DArray(W,0),Ye=B.TEXTURE_2D_ARRAY):(ie.setTexture2D(W,0),Ye=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Me=B.getParameter(B.UNPACK_ROW_LENGTH),yn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),oa=B.getParameter(B.UNPACK_SKIP_PIXELS),Ve=B.getParameter(B.UNPACK_SKIP_ROWS),Li=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ge.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ge.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt);const Fe=b.isDataArrayTexture||b.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const rn=Yt.get(b),fn=Yt.get(W),vn=Yt.get(rn.__renderTarget),_i=Yt.get(fn.__renderTarget);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,vn.__webglFramebuffer),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ni=0;Ni<Bt;Ni++)Fe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(b).__webglTexture,Y,kt+Ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(W).__webglTexture,Tt,Ge+Ni)),B.blitFramebuffer(Jt,Zt,wt,Nt,le,Re,wt,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Yt.has(b)){const rn=Yt.get(b),fn=Yt.get(W);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,Vo),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ui);for(let vn=0;vn<Bt;vn++)Fe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rn.__webglTexture,Y,kt+vn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rn.__webglTexture,Y),En?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,Tt,Ge+vn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,Tt),Y!==0?B.blitFramebuffer(Jt,Zt,wt,Nt,le,Re,wt,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):En?B.copyTexSubImage3D(Ye,Tt,le,Re,Ge+vn,Jt,Zt,wt,Nt):B.copyTexSubImage2D(Ye,Tt,le,Re,Jt,Zt,wt,Nt);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else En?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ye,Tt,le,Re,Ge,wt,Nt,Bt,_e,jt,ge.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ye,Tt,le,Re,Ge,wt,Nt,Bt,_e,ge.data):B.texSubImage3D(Ye,Tt,le,Re,Ge,wt,Nt,Bt,_e,jt,ge):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,le,Re,wt,Nt,_e,jt,ge.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,le,Re,ge.width,ge.height,_e,ge.data):B.texSubImage2D(B.TEXTURE_2D,Tt,le,Re,wt,Nt,_e,jt,ge);B.pixelStorei(B.UNPACK_ROW_LENGTH,Me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,oa),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Li),Tt===0&&W.generateMipmaps&&B.generateMipmap(Ye),Gt.unbindTexture()},this.copyTextureToTexture3D=function(b,W,rt=null,st=null,Y=0){return ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,rt,st,Y)},this.initRenderTarget=function(b){Yt.get(b).__webglFramebuffer===void 0&&ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ie.setTextureCube(b,0):b.isData3DTexture?ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ie.setTexture2DArray(b,0):ie.setTexture2D(b,0),Gt.unbindTexture()},this.resetState=function(){G=0,I=0,Z=null,Gt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}function sA(){const o=pr.useRef(null),[t,i]=pr.useState({Mercury:.02,Venus:.015,Earth:.01,Mars:.008,Jupiter:.006,Saturn:.005,Uranus:.003,Neptune:.002}),r=pr.useRef(null),[l,c]=pr.useState(null);return pr.useEffect(()=>{const h=new aM,d=new rA({antialias:!0});d.shadowMap.enabled=!0,d.shadowMap.type=nv,d.setSize(window.innerWidth,window.innerHeight);for(let w=0;w<500;w++){const R=new Ro(.05,12,12),H=new Ao({color:16777215}),ot=new In(R,H);ot.position.set((Math.random()-.5)*200,(Math.random()-.5)*200,(Math.random()-.5)*200),h.add(ot)}o.current.firstChild&&o.current.removeChild(o.current.firstChild),o.current.appendChild(d.domElement);const m=new Qn(45,window.innerWidth/window.innerHeight,1,1e3);m.position.z=50;const p=new xM(16777215,.3);h.add(p);const g=new _M(16777215,2,500);g.position.set(0,0,0),g.castShadow=!0,g.shadow.mapSize.width=1024,g.shadow.mapSize.height=1024,g.shadow.bias=-.005,h.add(g);const v=new Ro(3,32,32),x=new Ao({color:16776960}),y=new In(v,x);y.receiveShadow=!0,h.add(y);const A=new Io(200,200),C=new oM({opacity:.3}),M=new In(A,C);M.rotation.x=-Math.PI/2,M.position.y=-5,M.receiveShadow=!0,h.add(M);const _=[{name:"Mercury",texture:"textures/mercury.jpg",size:.5,distance:6},{name:"Venus",texture:"textures/venus.jpg",size:.8,distance:8},{name:"Earth",texture:"textures/earth.jpg",size:1,distance:10},{name:"Mars",texture:"textures/mars.jpg",size:.7,distance:12},{name:"Jupiter",texture:"textures/jupiter.jpg",size:2,distance:16},{name:"Saturn",texture:"textures/saturn.jpg",size:1.8,distance:20},{name:"Uranus",texture:"textures/uranus.jpg",size:1.2,distance:24},{name:"Neptune",texture:"textures/neptune.jpg",size:1.1,distance:28}],z=[],N=new pM;_.forEach(w=>{const R=new Ro(w.size,32,32),H=N.load(w.texture),ot=new lM({map:H}),at=new In(R,ot),gt=new pd(w.distance-.05,w.distance+.05,64),ft=new Ao({color:8947848,side:Ti}),P=new In(gt,ft);P.rotation.x=Math.PI/2,h.add(P),at.userData={...w,angle:0},at.rotation.y+=.01,at.castShadow=!0,at.receiveShadow=!0,h.add(at),z.push(at)});const D=new yM,F=new ye;function G(w){const{left:R,top:H,width:ot,height:at}=d.domElement.getBoundingClientRect();F.x=(w.clientX-R)/ot*2-1,F.y=-((w.clientY-H)/at)*2+1}window.addEventListener("mousemove",G);const I=new MM;function Z(){requestAnimationFrame(Z),I.getDelta(),z.forEach(R=>{const H=R.userData.name,ot=t[H]||.01;R.userData.angle+=ot,R.position.x=R.userData.distance*Math.cos(R.userData.angle),R.position.z=R.userData.distance*Math.sin(R.userData.angle)}),D.setFromCamera(F,m);const w=D.intersectObjects(z);if(w.length>0){const R=w[0].object.userData.name;c({name:R,x:F.x,y:F.y})}else c(null);d.render(h,m)}return Z(),()=>{window.removeEventListener("mousemove",G),o.current&&d.domElement&&o.current.removeChild(d.domElement)}},[t]),Dn.jsxs(Dn.Fragment,{children:[Dn.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Dn.jsx("div",{ref:o,style:{width:"100%",height:"100%"}}),Dn.jsxs("div",{style:{position:"absolute",top:10,left:10,background:"#111",padding:"10px",borderRadius:"8px",color:"white",zIndex:1,maxHeight:"90vh",overflowY:"auto",fontSize:"12px"},children:[Dn.jsx("h3",{style:{marginTop:0},children:"Planet Speeds"}),Object.keys(t).map(h=>Dn.jsxs("div",{style:{marginBottom:"10px"},children:[Dn.jsxs("label",{children:[h,": "]}),Dn.jsx("input",{type:"range",min:"0.001",max:"0.05",step:"0.001",value:t[h],onChange:d=>i({...t,[h]:parseFloat(d.target.value)})}),Dn.jsx("span",{style:{marginLeft:"8px"},children:t[h].toFixed(3)})]},h))]})]}),l&&Dn.jsx("div",{ref:r,style:{position:"absolute",top:`${(1-l.y)*window.innerHeight*.5}px`,left:`${(l.x+1)*window.innerWidth*.5}px`,background:"rgba(0, 0, 0, 0.7)",padding:"4px 8px",color:"white",borderRadius:"4px",pointerEvents:"none",fontSize:"12px",zIndex:2},children:l.name})]})}function oA(){const[o,t]=pr.useState(0);return Dn.jsx("div",{className:"App",children:Dn.jsx(sA,{})})}Vx.createRoot(document.getElementById("root")).render(Dn.jsx(pr.StrictMode,{children:Dn.jsx(oA,{})}));
