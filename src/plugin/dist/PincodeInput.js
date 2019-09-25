import"core-js/modules/web.dom.iterable";import"core-js/modules/es6.string.iterator";import"core-js/modules/es6.set";import"core-js/modules/es6.regexp.match";import"core-js/modules/es6.number.constructor";import Vue from"vue";var BASE_REF_NAME="vue-pincode-input",LETTER_REGEXP="^\\d{1}$",script=Vue.extend({props:{value:{type:String,required:!0},length:{type:Number,default:4},autofocus:{type:Boolean,default:!0}},data:function data(){return{baseRefName:BASE_REF_NAME,letters:[],focusedLetterIdx:0}},computed:{pinCodeComputed:function pinCodeComputed(){return this.letters.reduce(function(a,b){return a+b.value},"")}},watch:{length:{handler:function handler(a){for(var b=this,c=function(a){b.letters.push({key:a,value:""}),b.$watch("letters.".concat(a,".value"),function(c,d){b.onLetterChanged(a,c,d)})},d=0;d<a;d+=1)c(d)},immediate:!0},focusedLetterIdx:function focusedLetterIdx(a){this.focusLetterByIndex(a)},pinCodeComputed:function pinCodeComputed(a){this.$emit("input",a)}},mounted:function mounted(){this.autofocus&&this.focusLetterByIndex(0)},methods:{letterIsValid:function(a){var b=!0;return 1!==a.length||a.match(LETTER_REGEXP)?1<a.length&&(b=!1):b=!1,b},onLetterChanged:function onLetterChanged(a,b,c){var d=this;this.letterIsValid(b)?b.length&&this.setFocusedLetterIndex(this.focusedLetterIdx+1):this.$nextTick(function(){d.letters[a].value=c})},setFocusedLetterIndex:function setFocusedLetterIndex(a){0>a||a>=this.length||(this.focusedLetterIdx=a)},focusLetterByIndex:function focusLetterByIndex(a){var b="".concat(this.baseRefName).concat(a);this.$refs[b][0].focus(),this.$refs[b][0].select()}}});function normalizeComponent(a,b,c,d,e,f/* server only */,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);// Vue.extend constructor export interop.
var k="function"==typeof c?c.options:c;// render functions
a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||// cached call
this.$vnode&&this.$vnode.ssrContext||// stateful
this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){// register for functional component in vue file
var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{// inject component registration as beforeCreate hook
var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}var normalizeComponent_1=normalizeComponent,isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(){return function(a,b){return addStyle(a,b)}}var HEAD,styles={};function addStyle(a,b){var c=isOldIE?b.media||"default":a,d=styles[c]||(styles[c]={ids:new Set,styles:[]});if(!d.ids.has(a)){d.ids.add(a);var e=b.source;if(b.map&&(e+="\n/*# sourceURL="+b.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{var f=d.ids.size-1,g=document.createTextNode(e),h=d.element.childNodes;h[f]&&d.element.removeChild(h[f]),h.length?d.element.insertBefore(g,h[f]):d.element.appendChild(g)}}}var browser=createInjector,__vue_script__=script,__vue_render__=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"vue-pincode-input-wrapper"},a._l(a.letters,function(b,d){return c("input",a._b({directives:[{name:"model",rawName:"v-model",value:b.value,expression:"letter.value"}],key:b.key,ref:""+a.baseRefName+d,refInFor:!0,staticClass:"vue-pincode-input",attrs:{type:"tel"},domProps:{value:b.value},on:{focus:function focus(){return a.setFocusedLetterIndex(d)},input:function input(c){c.target.composing||a.$set(b,"value",c.target.value)}}},"input",a.$attrs,!1))}),0)},__vue_staticRenderFns__=[],__vue_inject_styles__=function(a){a&&a("data-v-58735003_0",{source:".vue-pincode-input-wrapper{display:inline-flex}.vue-pincode-input{outline:0;margin:3px;padding:1rem;max-width:20px;text-align:center;font-size:1.1rem;border:none;border-radius:3px;box-shadow:0 0 3px rgba(0,0,0,.5)}.vue-pincode-input:focus{box-shadow:0 0 6px rgba(0,0,0,.5)}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,Component=normalizeComponent_1({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,browser,void 0);/* script */export default Component;
