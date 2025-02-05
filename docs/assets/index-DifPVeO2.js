(function(){const H=document.createElement("link").relList;if(H&&H.supports&&H.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))A(g);new MutationObserver(g=>{for(const w of g)if(w.type==="childList")for(const T of w.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&A(T)}).observe(document,{childList:!0,subtree:!0});function l(g){const w={};return g.integrity&&(w.integrity=g.integrity),g.referrerPolicy&&(w.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?w.credentials="include":g.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function A(g){if(g.ep)return;g.ep=!0;const w=l(g);fetch(g.href,w)}})();(()=>{var Ne,I,R,M,D,B;var ce=Object.defineProperty,H=Object.getOwnPropertyDescriptor,l=(e,t,i,r)=>{for(var o=r>1?void 0:r?H(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&ce(t,i,o),o},A=globalThis,g=A.ShadowRoot&&(A.ShadyCSS===void 0||A.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,w=Symbol(),T=new WeakMap,ue=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==w)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(g&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=T.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&T.set(t,e))}return e}toString(){return this.cssText}},Ie=e=>new ue(typeof e=="string"?e:e+"",void 0,w),p=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new ue(i,e,w)},Re=(e,t)=>{if(g)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),o=A.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}},fe=g?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return Ie(i)})(e):e,{is:Me,defineProperty:De,getOwnPropertyDescriptor:Be,getOwnPropertyNames:He,getOwnPropertySymbols:ze,getPrototypeOf:Fe}=Object,_=globalThis,ge=_.trustedTypes,je=ge?ge.emptyScript:"",te=_.reactiveElementPolyfillSupport,z=(e,t)=>e,Z={toAttribute(e,t){switch(t){case Boolean:e=e?je:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ie=(e,t)=>!Me(e,t),be={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);var L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&De(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=Be(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const n=r==null?void 0:r.call(this);o.call(this,s),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??be}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=Fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const t=this.properties,i=[...He(t),...ze(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(fe(r))}else e!==void 0&&t.push(fe(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Re(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Z).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Z;this._$Em=r,this[r]=n.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ie)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[z("elementProperties")]=new Map,L[z("finalized")]=new Map,te==null||te({ReactiveElement:L}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");var F=globalThis,Y=F.trustedTypes,ve=Y?Y.createPolicy("lit-html",{createHTML:e=>e}):void 0,me="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,xe="?"+k,Ke=`<${xe}>`,P=document,j=()=>P.createComment(""),K=e=>e===null||typeof e!="object"&&typeof e!="function",re=Array.isArray,Ve=e=>re(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",oe=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,$e=/>/g,S=RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,_e=/"/g,ke=/^(?:script|style|textarea|title)$/i,We=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),d=We(1),N=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Ee=new WeakMap,O=P.createTreeWalker(P,129);function Ae(e,t){if(!re(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ve!==void 0?ve.createHTML(t):t}var Ge=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":t===3?"<math>":"",n=V;for(let a=0;a<i;a++){const h=e[a];let X,x,u=-1,y=0;for(;y<h.length&&(n.lastIndex=y,x=n.exec(h),x!==null);)y=n.lastIndex,n===V?x[1]==="!--"?n=we:x[1]!==void 0?n=$e:x[2]!==void 0?(ke.test(x[2])&&(o=RegExp("</"+x[2],"g")),n=S):x[3]!==void 0&&(n=S):n===S?x[0]===">"?(n=o??V,u=-1):x[1]===void 0?u=-2:(u=n.lastIndex-x[2].length,X=x[1],n=x[3]===void 0?S:x[3]==='"'?_e:ye):n===_e||n===ye?n=S:n===we||n===$e?n=V:(n=S,o=void 0);const E=n===S&&e[a+1].startsWith("/>")?" ":"";s+=n===V?h+Ke:u>=0?(r.push(X),h.slice(0,u)+me+h.slice(u)+k+E):h+k+(u===-2?a:E)}return[Ae(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},se=class Ue{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const a=t.length-1,h=this.parts,[X,x]=Ge(t,i);if(this.el=Ue.createElement(X,r),O.currentNode=this.el.content,i===2||i===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=O.nextNode())!==null&&h.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(me)){const y=x[n++],E=o.getAttribute(u).split(k),ee=/([.?@])?(.*)/.exec(y);h.push({type:1,index:s,name:ee[2],strings:E,ctor:ee[1]==="."?Ze:ee[1]==="?"?Ye:ee[1]==="@"?Je:J}),o.removeAttribute(u)}else u.startsWith(k)&&(h.push({type:6,index:s}),o.removeAttribute(u));if(ke.test(o.tagName)){const u=o.textContent.split(k),y=u.length-1;if(y>0){o.textContent=Y?Y.emptyScript:"";for(let E=0;E<y;E++)o.append(u[E],j()),O.nextNode(),h.push({type:2,index:++s});o.append(u[y],j())}}}else if(o.nodeType===8)if(o.data===xe)h.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(k,u+1))!==-1;)h.push({type:7,index:s}),u+=k.length-1}s++}}static createElement(t,i){const r=P.createElement("template");return r.innerHTML=t,r}};function U(e,t,i=e,r){var n,a;if(t===N)return t;let o=r!==void 0?(n=i.o)==null?void 0:n[r]:i.l;const s=K(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,i,r)),r!==void 0?(i.o??(i.o=[]))[r]=o:i.l=o),o!==void 0&&(t=U(e,o._$AS(e,t.values),o,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??P).importNode(t,!0);O.currentNode=r;let o=O.nextNode(),s=0,n=0,a=i[0];for(;a!==void 0;){if(s===a.index){let h;a.type===2?h=new ne(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new Qe(o,this,e)),this._$AV.push(h),a=i[++n]}s!==(a==null?void 0:a.index)&&(o=O.nextNode(),s++)}return O.currentNode=P,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ne=class Ce{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,i,r,o){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=U(this,t,i),K(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ve(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&K(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=se.createElement(Ae(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(i);else{const n=new qe(o,this),a=n.u(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let i=Ee.get(t.strings);return i===void 0&&Ee.set(t.strings,i=new se(t)),i}k(t){re(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new Ce(this.O(j()),this.O(j()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this.v=t,(i=this._$AP)==null||i.call(this,t))}},J=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=U(this,e,t,0),s=!K(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{const n=e;let a,h;for(e=o[0],a=0;a<o.length-1;a++)h=U(this,n[i+a],t,a),h===N&&(h=this._$AH[a]),s||(s=!K(h)||h!==this._$AH[a]),h===b?e=b:e!==b&&(e+=(h??"")+o[a+1]),this._$AH[a]=h}s&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ze=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Ye=class extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},Je=class extends J{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??b)===N)return;const i=this._$AH,r=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==b&&(i===b||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Qe=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}},ae=F.litHtmlPolyfillSupport;ae==null||ae(se,ne),(F.litHtmlVersions??(F.litHtmlVersions=[])).push("3.2.0");var Xe=(e,t,i)=>{const r=(i==null?void 0:i.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;r._$litPart$=o=new ne(t.insertBefore(j(),s),s,void 0,i??{})}return o._$AI(e),o},$=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return N}};$._$litElement$=!0,$.finalized=!0,(Ne=globalThis.litElementHydrateSupport)==null||Ne.call(globalThis,{LitElement:$});var le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:$}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");var Pe=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},et={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ie},tt=(e=et,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),r==="accessor"){const{name:n}=i;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(r==="setter"){const{name:n}=i;return function(a){const h=this[n];t.call(this,a),this.requestUpdate(n,h,e)}}throw Error("Unsupported decorator location: "+r)};function c(e){return(t,i)=>typeof i=="object"?tt(e,t,i):((r,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}function C(e){return c({...e,state:!0,attribute:!1})}var v={"--pb-background-color":{light:p`#ffffff`,dark:p`#121212`},"--pb-background-color-hover":{light:p`#f9fafb`,dark:p`#1e293b`},"--pb-text-color":{light:p`#000000`,dark:p`#e0e0e0`},"--pb-border-color":{light:p`rgba(124, 139, 154, 0.25)`,dark:p`#80808034`},"--pb-text-color-light":{light:p`rgba(0, 0, 0, 0.7)`,dark:p`rgba(255, 255, 255, 0.8)`},"--pb-fallback-img-color":{light:p`hsl(220, 13%, 80%)`,dark:p`hsl(220, 13%, 40%)`},"--pb-fallback-img-background":{light:p`rgb(229, 231, 235)`,dark:p`rgb(55, 65, 81)`},"--pb-skeleton-color":{light:p`rgb(229, 231, 235)`,dark:p`rgb(55, 65, 81)`}};function it(){return p`
    :host {
      --pb-background-color: ${v["--pb-background-color"].light};
      --pb-dark-background-color: ${v["--pb-background-color"].dark};
      --pb-background-color-hover: ${v["--pb-background-color-hover"].light};
      --pb-dark-background-color-hover: ${v["--pb-background-color-hover"].dark};
      --pb-text-color: ${v["--pb-text-color"].light};
      --pb-dark-text-color: ${v["--pb-text-color"].dark};
      --pb-border-color: ${v["--pb-border-color"].light};
      --pb-dark-border-color: ${v["--pb-border-color"].dark};
      --pb-text-color-light: ${v["--pb-text-color-light"].light};
      --pb-dark-metadata-color: ${v["--pb-text-color-light"].dark};
      --pb-skeleton-color: ${v["--pb-skeleton-color"].light};
      --pb-dark-skeleton-color: ${v["--pb-skeleton-color"].dark};
      --pb-fallback-img-color: ${v["--pb-fallback-img-color"].light};
      --pb-dark-fallback-img-color: ${v["--pb-fallback-img-color"].dark};
      --pb-fallback-img-background: ${v["--pb-fallback-img-background"].light};
      --pb-dark-fallback-img-background: ${v["--pb-fallback-img-background"].dark};
      --pb-favicon-size: 20px;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --pb-background-color: var(--pb-dark-background-color);
        --pb-background-color-hover: var(--pb-dark-background-color-hover);
        --pb-text-color: var(--pb-dark-text-color);
        --pb-border-color: var(--pb-dark-border-color);
        --pb-text-color-light: var(--pb-dark-metadata-color);
        --pb-fallback-img-color: var(--pb-dark-fallback-img-color);
        --pb-fallback-img-background: var(--pb-dark-fallback-img-background);
        --pb-skeleton-color: var(--pb-dark-skeleton-color);
      }
    }
  `}function Se(e,t){Object.keys(v).forEach(i=>{e.style.setProperty(i,v[i][t].toString())})}var Oe=p`
  ${it()}
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
  }


  .container {
    margin: 0;
    padding: 0;
    background-color: var(--pb-background-color);
  }

  .previewbox-title,
  .previewbox-link {
    color: var(--pb-text-color);
  }

  .previewbox-description {
    color: var(--pb-text-color-light);
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    text-decoration: none;
    color: inherit;
  }
`,rt=p`
  ${Oe}
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
  }

  .container {
    background-color: var(--pb-background-color);
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--pb-border-color);
    position: relative;
  }

  .previewbox-link {
    text-decoration: none;
    color: var(--pb-text-color);
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  .previewbox-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
    position: relative;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    height: 40px;
    overflow: hidden;
    @media (min-width: 768px) {
      line-height: 1.4;
      height: 24px;
    }
    color: var(--pb-text-color);
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--pb-text-color-light);
  }

  .previewbox-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    height: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    color: var(--pb-text-color-light);
    .previewbox-metadata-skeleton {
      display: flex;
      column-gap: 4px;
      align-items: center;

      .rounded::part(skeleton-shape) {
        border-radius: 50%;
      }
    }
    svg {
      width: var(--pb-favicon-size);
      height: var(--pb-favicon-size);
      margin-right: 6px;
    }
  }

  .previewbox-metadata > span:nth-of-type(2)::before {
    content: '•';
    margin: 0px 6px;
  }

  .previewbox-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .previewbox-metadata > :not(previewbox-favicon) {
    opacity: 0.7;
  }

  previewbox-favicon {
    margin-right: 6px;
  }

  .previewbox-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
  }


`,Q=class extends ${constructor(){super(...arguments),this.href="",this.target="_blank",this.rel=""}};l([c()],Q.prototype,"href",2),l([c()],Q.prototype,"target",2),l([c()],Q.prototype,"rel",2);function ot(e){return(e==null?void 0:e.replace(/https:\/\/|http:\/\/|www.|/gi,""))??""}function Te(e){try{return e=ot(e),e=e==null?void 0:e.split("/")[0],e??""}catch{return e??""}}function st(e){return"data"in e}var nt=class{async fetchLinkPreviewData(e,t){try{const i=new URLSearchParams;i.set("url",e);const r=await fetch(`${t.apiUrl}?${i.toString()}`,{headers:{origin:window.location.origin}});return r.ok?{data:await r.json()}:r.status===429?{error:"API_LIMIT_REACHED"}:{error:"UNKNOWN_ERROR"}}catch{return{error:"UNKNOWN_ERROR"}}}},at=new nt,m=class extends Q{constructor(){super(...arguments),this.url=null,this.title="",this.description=null,this.author=null,this.imageUrl=null,this.imageAlt=null,this.faviconUrl=null,this.date=null,this.hidePoweredBy=void 0,this.apiUrl=window.location.href.startsWith("http://localhost:8000/demo")?"http://localhost:4444/api/v1/meta":"https://previewbox.link/api/v1/meta",this.dark=void 0,this.light=void 0,this.fetchedLinkPreviewData=null,this._isLoading=!1,this._isError=!1,this._apiError=null}get linkData(){return this.fetchedLinkPreviewData?this.fetchedLinkPreviewData:{url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:Te(this.url)}}firstUpdated(e){if(typeof this.dark<"u"&&Se(this,"dark"),typeof this.light<"u"&&Se(this,"light"),!this.href&&!this.url)throw new Error(`No href or url provided for ${this.localName}`);this.href?this._fetchLinkPreviewData():this._setManualData()}_fetchLinkPreviewData(){this._isLoading=!0,at.fetchLinkPreviewData(this.href,{apiUrl:this.apiUrl}).then(e=>{st(e)?this.fetchedLinkPreviewData=e.data:(this._isError=!0,this._apiError=e.error)}).catch(e=>{console.error(`Error fetching link preview data for ${this.href}: ${e}`),this._isError=!0,this._apiError="UNKNOWN_ERROR"}).finally(()=>{this._isLoading=!1})}_setManualData(){if(!this.url)throw new Error(`As no href was provided, url is required for ${this.localName}`);this.fetchedLinkPreviewData={url:this.url,description:this.description,title:this.title,author:this.author,imageUrl:this.imageUrl,imageAlt:this.imageAlt,favicon:this.faviconUrl,date:this.date,origin:Te(this.url)}}};l([c()],m.prototype,"url",2),l([c()],m.prototype,"title",2),l([c()],m.prototype,"description",2),l([c()],m.prototype,"author",2),l([c()],m.prototype,"imageUrl",2),l([c()],m.prototype,"imageAlt",2),l([c()],m.prototype,"faviconUrl",2),l([c()],m.prototype,"date",2),l([c()],m.prototype,"hidePoweredBy",2),l([c()],m.prototype,"apiUrl",2),l([c()],m.prototype,"dark",2),l([c()],m.prototype,"light",2),l([C()],m.prototype,"fetchedLinkPreviewData",2),l([C()],m.prototype,"_isLoading",2),l([C()],m.prototype,"_isError",2),l([C()],m.prototype,"_apiError",2);var f={LOADING:"LOADING",FAVICON:"FAVICON",FAVICON_SKELETON:"FAVICON_SKELETON",FAVICON_FALLBACK:"FAVICON_FALLBACK",IMAGE:"IMAGE",IMAGE_SKELETON:"IMAGE_SKELETON",IMAGE_FALLBACK:"IMAGE_FALLBACK",AUTHOR:"AUTHOR",DATE:"DATE",ORIGIN:"PUBLISHER",ANCHOR_ELEMENT:"ANCHOR_ELEMENT",TITLE:"TITLE",TITLE_SKELETON:"TITLE_SKELETON",DESCRIPTION:"DESCRIPTION",READ_MORE_BUTTON:"READ_MORE_BUTTON",POWERED_BY:"POWERED_BY"},lt=p`
  :host {
    display: block;
    box-sizing: border-box;
    font-family: inherit;
  }

  .skeleton-shape {
    background-color: var(--pb-skeleton-color);
    animation: pulse 1.5s infinite ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`,ht=e=>!!customElements.get(e)||document.createElement(e).constructor!==HTMLElement,W=(e,t)=>{ht(e)||customElements.define(e,t)},he=(I=class extends ${constructor(){super(...arguments),this.width="100%",this.height="16px"}render(){return d`<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`}},I.styles=lt,I);l([c()],he.prototype,"width",2),l([c()],he.prototype,"height",2);var dt="previewbox-skeleton-shape";W(dt,he);var pt=p`
  :host {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000000b5;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    text-align: center;
  }

  .limit-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
  }

  .limit-info-text {
    color: white;
  }

  .limit-info-cta {
    color: white;
    text-decoration: none;
    background-color: #5046e5;
    padding: 8px 16px;
    border-radius: 4px;
  }
`,ct=(R=class extends ${render(){const t=window.location.origin;return d`<div class="limit-info-container">
      <span class="limit-info-text"
        >You've reached the API limit for ${t}</span
      >
      <a
        class="limit-info-cta"
        target="_blank"
        href="https://previewbox.link/usage/${encodeURIComponent(t)}"
        >Check Usage</a
      >
    </div>`}},R.styles=pt,R),ut="previewbox-limit-info";W(ut,ct);var ft=p`
  .powered-by {
    position: absolute;
    bottom: 2px;
    right: 2px;
    font-size: 9.5px;
    color: #000000;
    background-color: #ffffff7d;
    padding: 1px 2px;
    z-index: 2;
    border-radius: 2px;
    line-height: 1.2;

    a {
      color: #000000;
      font-weight: bold;
      text-decoration: none;
    }
  }
`,gt=(M=class extends ${render(){return d`<span class="powered-by">
      Powered by
      <a href="https://previewbox.link">Previewbox</a>
    </span> `}},M.styles=ft,M),bt="powered-by-previewbox";W(bt,gt);var vt=p`
  .previewbox-favicon {
    width: var(--pb-favicon-size);
    height: var(--pb-favicon-size);
  }
`,Le=d`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 20 18"
>
  <path
    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
  />
</svg>`,mt=d`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  data-testid="${f.FAVICON_FALLBACK}"
  stroke-width="1.5"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="2"
    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  />
</svg> `,de=(D=class extends ${constructor(){super(...arguments),this.faviconUrl=null,this.isFaviconError=!1}render(){return d`
      ${this.faviconUrl&&!this.isFaviconError?d`
            <img
              data-testid="${f.FAVICON}"
              class="previewbox-favicon"
              part="favicon"
              src=${this.faviconUrl??""}
              alt="Favicon"
              @error=${()=>this.isFaviconError=!0}
            />
          `:mt}
    `}},D.styles=vt,D);l([c()],de.prototype,"faviconUrl",2),l([C()],de.prototype,"isFaviconError",2);var xt="previewbox-favicon";W(xt,de);var wt=p`
  img,
  previewbox-skeleton-shape,
  .fallback-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    border-radius: 0 2px 2px 0;
    margin: 0;
    background-color: var(--pb-fallback-img-background);


    svg {
      width: 40px;
      height: 40px;
      color: var(--pb-fallback-img-color);
    }
  }
`,G=(B=class extends ${constructor(){super(...arguments),this.imageUrl=null,this.imageAlt=null,this.isLoading=!0,this.isImageError=!1}render(){return this.isLoading?d`<previewbox-skeleton-shape
        height="100%"
        data-testid="${f.IMAGE_SKELETON}"
      >
        ${Le}
      </previewbox-skeleton-shape>`:d`
      ${this.imageUrl&&!this.isImageError?d`
            <img
              data-testid="${f.IMAGE}"
              part="image"
              src=${this.imageUrl??""}
              alt=${this.imageAlt??"Thumbnail image"}
              @error=${()=>this.isImageError=!0}
            />
          `:d`
            <figure
              class="fallback-img"
              part="image"
              data-testid="${f.IMAGE_FALLBACK}"
            >
              ${Le}
            </figure>
          `}
    `}},B.styles=wt,B);l([c()],G.prototype,"imageUrl",2),l([c()],G.prototype,"imageAlt",2),l([c({type:Boolean})],G.prototype,"isLoading",2),l([C()],G.prototype,"isImageError",2);var $t="previewbox-image";W($t,G);var pe=class extends m{render(){var e,t;return d`
      <figure part="container" class="container">
        ${this._apiError==="API_LIMIT_REACHED"?d`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${f.ANCHOR_ELEMENT}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${f.TITLE}">
              ${this._isLoading?d`<previewbox-skeleton-shape
                    width="200px"
                    height="20px"
                    data-testid="${f.TITLE_SKELETON}"
                  />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${f.DESCRIPTION}"
            >
              ${this._isLoading?d`
                    <previewbox-skeleton-shape
                      width="100%"
                      height="16px"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="70%"
                      height="16px"
                      style="margin-top: 4px;"
                    ></previewbox-skeleton-shape>
                  `:this.linkData.description}
            </div>
            <div class="previewbox-metadata">
              ${this._isLoading?d`
                    <div class="previewbox-metadata-skeleton">
                      <previewbox-skeleton-shape
                        width="14px"
                        data-testid="${f.FAVICON_SKELETON}"
                        height="14px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="60px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="4px"
                        height="4px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="44px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                    </div>
                  `:d`
                    <previewbox-favicon
                      .faviconUrl=${this.linkData.favicon}
                    ></previewbox-favicon>
                    <span data-testid="${f.ORIGIN}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author?d`<span data-testid="${f.AUTHOR}"
                          >${this.linkData.author}</span
                        >`:""}
                  `}
            </div>
          </div>
          <div class="previewbox-thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${(e=this.linkData)==null?void 0:e.imageUrl}
              .imageAlt=${(t=this.linkData)==null?void 0:t.imageAlt}
            ></previewbox-image>
          </div>
        </a>
        ${typeof this.hidePoweredBy<"u"?"":d`<powered-by-previewbox
              data-testid="${f.POWERED_BY}"
            ></powered-by-previewbox>`}
      </figure>
    `}};pe.styles=rt,pe=l([Pe("previewbox-link")],pe);var yt=p`
  ${Oe}

  :host {
    max-width: 320px;
  }

  .container {
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    flex: 1;
  }

  .previewbox-content {
    padding: 16px;
    overflow: hidden;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }


  .previewbox-thumbnail {
    position: relative;
    width: 100%;
    height: 180px;
  }

  .previewbox-read-more-container {
    margin-top: auto;
  }

  .previewbox-read-more {
    display: flex;
    align-items: center;
    margin-top: 24px;
    padding: 8px;
    gap: 4px;
    font-size: 0.875rem;
    font-weight: 400;
    background-color: transparent;
    color: var(--pb-text-color-light);
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--pb-border-color);
    transition: background-color 0.2s ease-in-out;
    svg {
      width: 12px;
      height: 12px;
      fill: var(--pb-text-color-light);
      margin-left: 4px;
    }
  }

  .previewbox-read-more:hover {
    background-color: var(--pb-background-color-hover);
  }
`,q=class extends m{constructor(){super(...arguments),this.readMoreBtnText="Read more"}render(){var e,t;return d`
      <article part="container" class="container">
        ${this._apiError==="API_LIMIT_REACHED"?d`<previewbox-limit-info></previewbox-limit-info>`:""}
        <a
          href=${this.linkData.url||this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${f.ANCHOR_ELEMENT}"
        >
          <div class="previewbox-thumbnail" part="thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${(e=this.linkData)==null?void 0:e.imageUrl}
              .imageAlt=${(t=this.linkData)==null?void 0:t.imageAlt}
            ></previewbox-image>
          </div>
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${f.TITLE}">
              ${this._isLoading?d`<previewbox-skeleton-shape
                      width="100%"
                      height="20px"
                      data-testid="${f.TITLE_SKELETON}"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="90%"
                      height="20px"
                      style="margin-top: 4px;"
                      data-testid="${f.TITLE_SKELETON}"
                    />`:this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${f.DESCRIPTION}"
            >
              ${this._isLoading?d`
                    <previewbox-skeleton-shape
                      width="100%"
                      height="16px"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="70%"
                      height="16px"
                      style="margin-top: 4px;"
                    ></previewbox-skeleton-shape>
                  `:this.linkData.description}
            </div>

            <div class="previewbox-read-more-container">
              ${typeof this.hideReadMoreBtn>"u"?d`
                    <button
                      class="previewbox-read-more"
                      data-testid="${f.READ_MORE_BUTTON}"
                      title=${this.readMoreBtnText}
                    >
                      ${this.readMoreBtnText}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        ></path>
                      </svg>
                    </button>
                  `:d``}
            </div>
          </div>
        </a>
        ${typeof this.hidePoweredBy<"u"?"":d`<powered-by-previewbox
              data-testid="${f.POWERED_BY}"
            ></powered-by-previewbox>`}
      </article>
    `}};q.styles=yt,l([c()],q.prototype,"hideReadMoreBtn",2),l([c()],q.prototype,"readMoreBtnText",2),q=l([Pe("previewbox-article")],q)})();/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
