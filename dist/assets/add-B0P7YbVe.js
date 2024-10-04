import{U as T,s as I,R as H,b as Ye,a as Je}from"./index-CqyupCfq.js";import{B as P,o as r,c as f,v as w,f as b,m as p,h as te,i as et,E as xe,q as M,d as $,s as y,w as j,e as L,b as i,G as _,T as G,F as S,t as x,n as z,D as U,x as B,u as c,H as tt,I as nt,J as Ie,y as C,C as v,_ as Ve,a as Be,K as ot,L as ue,M as fe,N as at,O as Fe,P as ie,z as E,Q as st,R as it}from"./index-BgBEZCtr.js";import{s as D}from"./index-1D2GU8J7.js";import{s as ne,a as lt,T as rt,b as ct,c as le,d as me,e as ge,f as re,g as Le,h as dt}from"./index-wJmkjS9s.js";import{s as pt,a as Pe,b as he,c as ut}from"./index-BBHmBvah.js";import{s as ft}from"./index-DH7cfi-h.js";import{N as K,a as mt,b as gt,g as ht,c as vt,i as bt,l as yt,p as oe,Q as Oe,d as ae,O as Me,s as ze,f as $t,o as wt,x as kt,e as St,u as Ct,h as xt,j as It,k as Vt,B as Bt,m as Ft,y as Lt,t as Pt,n as Ot,q as Mt,r as ve,v as be,w as zt,z as ye,A as Et,C as Ut,D as jt,E as At}from"./CONSTANT-CMk5eq9k.js";import{a as ce}from"./index-DKiV0sy7.js";import{b as Ee,a as Tt,A as Dt}from"./authRequest-dVOg2jRK.js";import{s as Rt}from"./index-U-W2Oy7Z.js";import{_ as _t,a as $e,b as qt,c as Nt}from"./PatientAdvanceInfoView.vue_vue_type_script_setup_true_lang-CJIVM6kh.js";import"./index-Bcv19V7x.js";var Kt=function(n){var t=n.dt;return`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: `.concat(t("stepper.step.gap"),`;
    padding: `).concat(t("stepper.step.padding"),`;
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),`;
    border-radius: `).concat(t("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(t("stepper.step.header.padding"),`;
    gap: `).concat(t("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(t("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(t("stepper.step.header.focus.ring.width")," ").concat(t("stepper.step.header.focus.ring.style")," ").concat(t("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(t("stepper.step.header.focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(t("stepper.step.title.color"),`;
    font-weight: `).concat(t("stepper.step.title.font.weight"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(t("stepper.step.number.color"),`;
    border: 2px solid `).concat(t("stepper.step.number.border.color"),`;
    background: `).concat(t("stepper.step.number.background"),`;
    min-width: `).concat(t("stepper.step.number.size"),`;
    height: `).concat(t("stepper.step.number.size"),`;
    line-height: `).concat(t("stepper.step.number.size"),`;
    font-size: `).concat(t("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(t("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(t("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(t("stepper.step.number.active.background"),`;
    border-color: `).concat(t("stepper.step.number.active.border.color"),`;
    color: `).concat(t("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(t("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(t("focus.ring.width")," ").concat(t("focus.ring.style")," ").concat(t("focus.ring.color"),`;
    outline-offset: `).concat(t("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(t("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(t("stepper.separator.size"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(t("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(t("stepper.steppanel.background"),`;
    color: `).concat(t("stepper.steppanel.color"),`;
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: `).concat(t("stepper.steppanel.padding"),`;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(t("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(t("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(t("stepper.step.number.size"),`;
}
`)},Wt={root:function(n){var t=n.props;return["p-stepper p-component",{"p-readonly":t.linear}]},separator:"p-stepper-separator"},Ht=P.extend({name:"stepper",theme:Kt,classes:Wt}),Gt={name:"BaseStepper",extends:I,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Ht,provide:function(){return{$pcStepper:this,$parentInstance:this}}},Ue={name:"Stepper",extends:Gt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(n){this.id=n||T()},value:function(n){this.d_value=n}},mounted:function(){this.id=this.id||T()},methods:{updateValue:function(n){this.d_value!==n&&(this.d_value=n,this.$emit("update:value",n))},isStepActive:function(n){return this.d_value===n},isStepDisabled:function(){return this.linear}}};function Qt(e,n,t,s,l,o){return r(),f("div",p({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?w(e.$slots,"start",{key:0}):b("",!0),w(e.$slots,"default"),e.$slots.end?w(e.$slots,"end",{key:1}):b("",!0)],16)}Ue.render=Qt;var Xt={root:"p-steppanels"},Zt=P.extend({name:"steppanels",classes:Xt}),Yt={name:"BaseStepPanels",extends:I,style:Zt,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},je={name:"StepPanels",extends:Yt,inheritAttrs:!1};function Jt(e,n,t,s,l,o){return r(),f("div",p({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}je.render=Jt;var en={root:function(n){var t=n.instance;return["p-steppanel",{"p-steppanel-active":t.isVertical&&t.active}]},content:"p-steppanel-content"},tn=P.extend({name:"steppanel",classes:en}),Ae={name:"StepperSeparator",hostName:"Stepper",extends:I};function nn(e,n,t,s,l,o){return r(),f("span",p({class:e.cx("separator")},e.ptm("separator")),null,16)}Ae.render=nn;var on={name:"BaseStepPanel",extends:I,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:tn,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},Te={name:"StepPanel",extends:on,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var n,t,s=te(this.$pcStepper.$el,'[data-pc-name="step"]'),l=et(this.isVertical?(n=this.$pcStepItem)===null||n===void 0?void 0:n.$el:(t=this.$pcStepList)===null||t===void 0?void 0:t.$el,'[data-pc-name="step"]'),o=xe(l,s);this.isSeparatorVisible=this.isVertical&&o!==s.length-1}},methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active}})},updateValue:function(n){this.$pcStepper.updateValue(n)}},computed:{active:function(){var n,t,s=this.$pcStepItem?(n=this.$pcStepItem)===null||n===void 0?void 0:n.value:this.value;return s===((t=this.$pcStepper)===null||t===void 0?void 0:t.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var n;return this.isVertical?(n=this.$pcStepItem)===null||n===void 0?void 0:n.value:this.value},id:function(){var n;return"".concat((n=this.$pcStepper)===null||n===void 0?void 0:n.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var n;return"".concat((n=this.$pcStepper)===null||n===void 0?void 0:n.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}}},components:{StepperSeparator:Ae}};function an(e,n,t,s,l,o){var d=M("StepperSeparator");return o.isVertical?(r(),f(S,{key:0},[e.asChild?w(e.$slots,"default",{key:1,active:o.active,a11yAttrs:o.a11yAttrs,activateCallback:function(a){return o.updateValue(a)}}):(r(),$(G,p({key:0,name:"p-toggleable-content"},e.ptm("transition")),{default:y(function(){return[j((r(),$(L(e.as),p({id:o.id,class:e.cx("root"),role:"tabpanel","aria-controls":o.ariaControls},o.getPTOptions("root")),{default:y(function(){return[l.isSeparatorVisible?(r(),$(d,{key:0})):b("",!0),i("div",p({class:e.cx("content")},o.getPTOptions("content")),[w(e.$slots,"default",{active:o.active,activateCallback:function(a){return o.updateValue(a)}})],16)]}),_:3},16,["id","class","aria-controls"])),[[_,o.active]])]}),_:3},16))],64)):(r(),f(S,{key:1},[e.asChild?e.asChild&&o.active?w(e.$slots,"default",{key:1,active:o.active,a11yAttrs:o.a11yAttrs,activateCallback:function(a){return o.updateValue(a)}}):b("",!0):j((r(),$(L(e.as),p({key:0,id:o.id,class:e.cx("root"),role:"tabpanel","aria-controls":o.ariaControls},o.getPTOptions("root")),{default:y(function(){return[w(e.$slots,"default",{active:o.active,activateCallback:function(a){return o.updateValue(a)}})]}),_:3},16,["id","class","aria-controls"])),[[_,o.active]])],64))}Te.render=an;var sn={root:"p-steplist"},ln=P.extend({name:"steplist",classes:sn}),rn={name:"BaseStepList",extends:I,style:ln,provide:function(){return{$pcStepList:this,$parentInstance:this}}},De={name:"StepList",extends:rn,inheritAttrs:!1};function cn(e,n,t,s,l,o){return r(),f("div",p({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}De.render=cn;var dn={root:function(n){var t=n.instance;return["p-step",{"p-step-active":t.active,"p-disabled":t.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},pn=P.extend({name:"step",classes:dn}),Re={name:"StepperSeparator",hostName:"Stepper",extends:I};function un(e,n,t,s,l,o){return r(),f("span",p({class:e.cx("separator")},e.ptm("separator")),null,16)}Re.render=un;var fn={name:"BaseStep",extends:I,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:pn,provide:function(){return{$pcStep:this,$parentInstance:this}}},_e={name:"Step",extends:fn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var n=xe(this.$el,te(this.$pcStepper.$el,'[data-pc-name="step"]')),t=te(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=n!==t-1}},methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var n;return this.$pcStepItem?(n=this.$pcStepItem)===null||n===void 0?void 0:n.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var n;return"".concat((n=this.$pcStepper)===null||n===void 0?void 0:n.id,"_step_").concat(this.activeValue)},ariaControls:function(){var n;return"".concat((n=this.$pcStepper)===null||n===void 0?void 0:n.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.disabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.disabled,onClick:this.onStepClick}}}},components:{StepperSeparator:Re}},mn=["id","tabindex","aria-controls","disabled"];function gn(e,n,t,s,l,o){var d=M("StepperSeparator");return e.asChild?w(e.$slots,"default",{key:1,class:z(e.cx("root")),active:o.active,value:e.value,a11yAttrs:o.a11yAttrs,activateCallback:o.onStepClick}):(r(),$(L(e.as),p({key:0,class:e.cx("root"),"aria-current":o.active?"step":void 0,role:"presentation","data-p-active":o.active,"data-p-disabled":o.isStepDisabled},o.getPTOptions("root")),{default:y(function(){return[i("button",p({id:o.id,class:e.cx("header"),role:"tab",type:"button",tabindex:o.isStepDisabled?-1:void 0,"aria-controls":o.ariaControls,disabled:o.isStepDisabled,onClick:n[0]||(n[0]=function(){return o.onStepClick&&o.onStepClick.apply(o,arguments)})},o.getPTOptions("header")),[i("span",p({class:e.cx("number")},o.getPTOptions("number")),x(o.activeValue),17),i("span",p({class:e.cx("title")},o.getPTOptions("title")),[w(e.$slots,"default")],16)],16,mn),l.isSeparatorVisible?(r(),$(d,{key:0})):b("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}_e.render=gn;var hn=function(n){var t=n.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(t("chip.background"),`;
    color: `).concat(t("chip.color"),`;
    border-radius: `).concat(t("chip.border.radius"),`;
    padding: `).concat(t("chip.padding.y")," ").concat(t("chip.padding.x"),`;
    gap: `).concat(t("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(t("chip.icon.color"),`;
    font-size: `).concat(t("chip.icon.font.size"),`;
    width: `).concat(t("chip.icon.size"),`;
    height: `).concat(t("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(t("chip.image.width"),`;
    height: `).concat(t("chip.image.height"),`;
    margin-left: calc(-1 * `).concat(t("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: `).concat(t("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(`).concat(t("chip.padding.y"),` / 2);
    padding-bottom: calc(`).concat(t("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(t("chip.remove.icon.size"),`;
    width: `).concat(t("chip.remove.icon.size"),`;
    height: `).concat(t("chip.remove.icon.size"),`;
    color: `).concat(t("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(t("chip.transition.duration"),", box-shadow ").concat(t("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(t("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(t("chip.remove.icon.focus.ring.width")," ").concat(t("chip.remove.icon.focus.ring.style")," ").concat(t("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(t("chip.remove.icon.focus.ring.offset"),`;
}
`)},vn={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},bn=P.extend({name:"chip",theme:hn,classes:vn}),yn={name:"BaseChip",extends:I,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:bn,provide:function(){return{$pcChip:this,$parentInstance:this}}},qe={name:"Chip",extends:yn,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},components:{TimesCircleIcon:ne}},$n=["aria-label"],wn=["src"];function kn(e,n,t,s,l,o){return l.visible?(r(),f("div",p({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[w(e.$slots,"default",{},function(){return[e.image?(r(),f("img",p({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,wn)):e.$slots.icon?(r(),$(L(e.$slots.icon),p({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(r(),f("span",p({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):b("",!0),e.label?(r(),f("div",p({key:3,class:e.cx("label")},e.ptm("label")),x(e.label),17)):b("",!0)]}),e.removable?w(e.$slots,"removeicon",{key:0,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(r(),$(L(e.removeIcon?"span":"TimesCircleIcon"),p({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:o.close,onKeydown:o.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):b("",!0)],16,$n)):b("",!0)}qe.render=kn;const Sn={class:"flex flex-wrap gap-2"},Cn=U({__name:"InputChips",props:{options:Array,modelValue:String},emits:["update:modelValue"],setup(e,{emit:n}){const t=n;return(s,l)=>{const o=qe;return r(),f("div",Sn,[(r(!0),f(S,null,B(e.options,d=>(r(),f("div",null,[c(o,{onClick:u=>t("update:modelValue",d.value),value:d.value,label:d.label},null,8,["onClick","value","label"])]))),256))])}}});var xn=function(n){var t=n.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("textarea.color"),`;
    background: `).concat(t("textarea.background"),`;
    padding: `).concat(t("textarea.padding.y")," ").concat(t("textarea.padding.x"),`;
    border: 1px solid `).concat(t("textarea.border.color"),`;
    transition: background `).concat(t("textarea.transition.duration"),", color ").concat(t("textarea.transition.duration"),", border-color ").concat(t("textarea.transition.duration"),", outline-color ").concat(t("textarea.transition.duration"),", box-shadow ").concat(t("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(t("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(t("textarea.focus.border.color"),`;
    box-shadow: `).concat(t("textarea.focus.ring.shadow"),`;
    outline: `).concat(t("textarea.focus.ring.width")," ").concat(t("textarea.focus.ring.style")," ").concat(t("textarea.focus.ring.color"),`;
    outline-offset: `).concat(t("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(t("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(t("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(t("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(t("textarea.disabled.background"),`;
    color: `).concat(t("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(t("textarea.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},In={root:function(n){var t=n.instance,s=n.props;return["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":s.autoResize,"p-invalid":s.invalid,"p-variant-filled":s.variant?s.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-textarea-fluid":t.hasFluid}]}},Vn=P.extend({name:"textarea",theme:xn,classes:In}),Bn={name:"BaseTextarea",extends:I,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Vn,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Q={name:"Textarea",extends:Bn,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(n){this.autoResize&&this.resize(),this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return tt(this.fluid)?!!this.$pcFluid:this.fluid}}},Fn=["value","aria-invalid"];function Ln(e,n,t,s,l,o){return r(),f("textarea",p({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},e.ptmi("root",o.ptmParams)),null,16,Fn)}Q.render=Ln;const Pn={class:"flex flex-wrap gap-4"},On=["for"],V=U({__name:"MyRadioButton",props:nt({options:Array},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=Ie(e,"modelValue");return(t,s)=>{const l=lt,o=ft,d=rt;return r(),f("div",Pn,[(r(!0),f(S,null,B(e.options,u=>(r(),f("div",{key:u.value,class:"flex items-center"},[c(l,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a),inputId:u.value,name:"dynamic",value:u.value},null,8,["modelValue","inputId","value"]),i("label",{for:u.value,class:"ml-2"},x(u.label),9,On),u.desc?j((r(),$(o,{key:0,icon:"pi pi-info-circle",severity:"info"},null,512)),[[d,u.desc??""]]):b("",!0)]))),128))])}}}),Mn={class:"flex flex-col gap-4"},zn={class:"flex flex-row"},En={class:"flex flex-row"},Un={class:"flex flex-row"},jn={class:"flex flex-row"},An={class:"flex flex-row"},Tn={class:"flex flex-row"},Dn={class:"flex flex-row"},Rn={class:"flex flex-col gap-2"},_n={class:"flex flex-row"},qn={class:"flex flex-col gap-2"},Nn=U({__name:"BasicInfoView",props:{patient:{type:Object,default:K}},setup(e){const n=e;return(t,s)=>{const l=pt,o=ct,d=Q,u=Cn;return r(),f("div",Mn,[i("div",zn,[s[10]||(s[10]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Patient Name:")],-1)),c(l,{type:"text",modelValue:n.patient.patient_name,"onUpdate:modelValue":s[0]||(s[0]=a=>n.patient.patient_name=a)},null,8,["modelValue"])]),i("div",En,[s[11]||(s[11]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Gender:")],-1)),c(V,{modelValue:n.patient.patient_sex,"onUpdate:modelValue":s[1]||(s[1]=a=>n.patient.patient_sex=a),options:v(mt)},null,8,["modelValue","options"])]),i("div",Un,[s[12]||(s[12]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Age:")],-1)),c(o,{modelValue:n.patient.patient_age,"onUpdate:modelValue":s[2]||(s[2]=a=>n.patient.patient_age=a),inputId:"integeronly"},null,8,["modelValue"])]),i("div",jn,[s[13]||(s[13]=i("span",{class:"title"},"Angle's classification:",-1)),c(V,{modelValue:n.patient.anshi,"onUpdate:modelValue":s[3]||(s[3]=a=>n.patient.anshi=a),options:v(gt)},null,8,["modelValue","options"])]),i("div",An,[s[14]||(s[14]=i("span",{class:"title"},"bone classification:",-1)),c(V,{modelValue:n.patient.guxing,"onUpdate:modelValue":s[4]||(s[4]=a=>n.patient.guxing=a),options:v(ht)},null,8,["modelValue","options"])]),i("div",Tn,[s[15]||(s[15]=i("span",{class:"title"},"FMA:",-1)),c(V,{modelValue:n.patient.gaodi,"onUpdate:modelValue":s[5]||(s[5]=a=>n.patient.gaodi=a),options:v(vt)},null,8,["modelValue","options"])]),i("div",Dn,[s[16]||(s[16]=i("span",{class:"title"},"Chief complaint/medical history:",-1)),i("div",Rn,[c(d,{modelValue:n.patient.illness_log,"onUpdate:modelValue":s[6]||(s[6]=a=>n.patient.illness_log=a),autoResize:"",rows:"5",cols:"60"},null,8,["modelValue"]),c(u,{modelValue:n.patient.illness_log,"onUpdate:modelValue":s[7]||(s[7]=a=>{n.patient&&(n.patient.illness_log+=a+", ")}),options:v(bt)},null,8,["modelValue","options"])])]),i("div",_n,[s[17]||(s[17]=i("span",{class:"title"},"target of treatment:",-1)),i("div",qn,[c(d,{modelValue:n.patient.likedesc,"onUpdate:modelValue":s[8]||(s[8]=a=>n.patient.likedesc=a),autoResize:"",rows:"5",cols:"60"},null,8,["modelValue"]),c(u,{modelValue:n.patient.likedesc,"onUpdate:modelValue":s[9]||(s[9]=a=>{n.patient&&(n.patient.likedesc+=a+", ")}),options:v(yt)},null,8,["modelValue","options"])])])])}}}),Kn=Ve(Nn,[["__scopeId","data-v-7a058b8f"]]);var Wn=function(n){var t=n.dt;return`
.p-fieldset {
    background: `.concat(t("fieldset.background"),`;
    border: 1px solid `).concat(t("fieldset.border.color"),`;
    border-radius: `).concat(t("fieldset.border.radius"),`;
    color: `).concat(t("fieldset.color"),`;
    padding:  `).concat(t("fieldset.padding"),`;
    margin: 0;
}

.p-fieldset-legend {
    background: `).concat(t("fieldset.legend.background"),`;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    border-width: `).concat(t("fieldset.legend.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("fieldset.legend.border.color"),`;
    padding: `).concat(t("fieldset.legend.padding"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: `).concat(t("fieldset.legend.gap"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("fieldset.legend.padding"),`;
    background: transparent;
    border: 0 none;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: `).concat(t("fieldset.legend.font.weight"),`;
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: `).concat(t("fieldset.legend.focus.ring.shadow"),`;
    outline: `).concat(t("fieldset.legend.focus.ring.width")," ").concat(t("fieldset.legend.focus.ring.style")," ").concat(t("fieldset.legend.focus.ring.color"),`;
    outline-offset: `).concat(t("fieldset.legend.focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: `).concat(t("fieldset.legend.hover.color"),`;
    background: `).concat(t("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.color"),`;
    transition: color `).concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: `).concat(t("fieldset.content.padding"),`;
}
`)},Hn={root:function(n){var t=n.props;return["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},Gn=P.extend({name:"fieldset",theme:Wn,classes:Hn}),Qn={name:"BaseFieldset",extends:I,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Gn,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},Ne={name:"Fieldset",extends:Qn,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||T()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||T()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:H},components:{PlusIcon:le,MinusIcon:Pe}};function q(e){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},q(e)}function we(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,s)}return t}function ke(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?we(Object(t),!0).forEach(function(s){Xn(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function Xn(e,n,t){return(n=Zn(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Zn(e){var n=Yn(e,"string");return q(n)=="symbol"?n:n+""}function Yn(e,n){if(q(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,n||"default");if(q(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Jn=["id"],eo=["id","aria-controls","aria-expanded","aria-label"],to=["id","aria-labelledby"];function no(e,n,t,s,l,o){var d=Be("ripple");return r(),f("fieldset",p({class:e.cx("root")},e.ptmi("root")),[i("legend",p({class:e.cx("legend")},e.ptm("legend")),[w(e.$slots,"legend",{toggleCallback:o.toggle},function(){return[e.toggleable?b("",!0):(r(),f("span",p({key:0,id:l.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),x(e.legend),17,Jn)),e.toggleable?j((r(),f("button",p({key:1,id:l.id+"_header",type:"button","aria-controls":l.id+"_content","aria-expanded":!l.d_collapsed,"aria-label":o.buttonAriaLabel,class:e.cx("toggleButton"),onClick:n[0]||(n[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)}),onKeydown:n[1]||(n[1]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},ke(ke({},e.toggleButtonProps),e.ptm("toggleButton"))),[w(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed,class:z(e.cx("toggleIcon"))},function(){return[(r(),$(L(l.d_collapsed?"PlusIcon":"MinusIcon"),p({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),i("span",p({class:e.cx("legendLabel")},e.ptm("legendLabel")),x(e.legend),17)],16,eo)),[[d]]):b("",!0)]})],16),c(G,p({name:"p-toggleable-content"},e.ptm("transition")),{default:y(function(){return[j(i("div",p({id:l.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":l.id+"_header"},e.ptm("contentContainer")),[i("div",p({class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16)],16,to),[[_,!l.d_collapsed]])]}),_:3},16)],16)}Ne.render=no;var Ke={name:"UploadIcon",extends:Ye};function oo(e,n,t,s,l,o){return r(),f("svg",p({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}Ke.render=oo;var ao=function(n){var t=n.dt;return`
.p-message {
    border-radius: `.concat(t("message.border.radius"),`;
    outline-width: `).concat(t("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(t("message.content.padding"),`;
    gap: `).concat(t("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(t("message.close.button.width"),`;
    height: `).concat(t("message.close.button.height"),`;
    border-radius: `).concat(t("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(t("message.transition.duration"),", color ").concat(t("message.transition.duration"),", outline-color ").concat(t("message.transition.duration"),", box-shadow ").concat(t("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(t("message.close.icon.size"),`;
    width: `).concat(t("message.close.icon.size"),`;
    height: `).concat(t("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(t("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(t("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(t("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(t("message.info.background"),`;
    outline-color: `).concat(t("message.info.border.color"),`;
    color: `).concat(t("message.info.color"),`;
    box-shadow: `).concat(t("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(t("message.info.close.button.hover.background"),`;
}

.p-message-success {
    background: `).concat(t("message.success.background"),`;
    outline-color: `).concat(t("message.success.border.color"),`;
    color: `).concat(t("message.success.color"),`;
    box-shadow: `).concat(t("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(t("message.success.close.button.hover.background"),`;
}

.p-message-warn {
    background: `).concat(t("message.warn.background"),`;
    outline-color: `).concat(t("message.warn.border.color"),`;
    color: `).concat(t("message.warn.color"),`;
    box-shadow: `).concat(t("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(t("message.warn.close.button.hover.background"),`;
}

.p-message-error {
    background: `).concat(t("message.error.background"),`;
    outline-color: `).concat(t("message.error.border.color"),`;
    color: `).concat(t("message.error.color"),`;
    box-shadow: `).concat(t("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(t("message.error.close.button.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(t("message.secondary.background"),`;
    outline-color: `).concat(t("message.secondary.border.color"),`;
    color: `).concat(t("message.secondary.color"),`;
    box-shadow: `).concat(t("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(t("message.secondary.close.button.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(t("message.contrast.background"),`;
    outline-color: `).concat(t("message.contrast.border.color"),`;
    color: `).concat(t("message.contrast.color"),`;
    box-shadow: `).concat(t("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(t("message.contrast.close.button.hover.background"),`;
}

.p-message-text {
    font-size: `).concat(t("message.text.font.size"),`;
    font-weight: `).concat(t("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(t("message.icon.size"),`;
    width: `).concat(t("message.icon.size"),`;
    height: `).concat(t("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}
`)},so={root:function(n){var t=n.props;return"p-message p-component p-message-"+t.severity},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},io=P.extend({name:"message",theme:ao,classes:so}),lo={name:"BaseMessage",extends:I,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:io,provide:function(){return{$pcMessage:this,$parentInstance:this}}},We={name:"Message",extends:lo,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.life&&setTimeout(function(){n.visible=!1,n.$emit("life-end")},this.life)},methods:{close:function(n){this.visible=!1,this.$emit("close",n)}},computed:{iconComponent:function(){return{info:me,success:he,warn:ge,error:ne}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:H},components:{TimesIcon:ce,InfoCircleIcon:me,CheckIcon:he,ExclamationTriangleIcon:ge,TimesCircleIcon:ne}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},N(e)}function Se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,s)}return t}function Ce(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Se(Object(t),!0).forEach(function(s){ro(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Se(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function ro(e,n,t){return(n=co(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function co(e){var n=po(e,"string");return N(n)=="symbol"?n:n+""}function po(e,n){if(N(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,n||"default");if(N(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var uo=["aria-label"];function fo(e,n,t,s,l,o){var d=M("TimesIcon"),u=Be("ripple");return r(),$(G,p({name:"p-message",appear:""},e.ptmi("transition")),{default:y(function(){return[j(i("div",p({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:o.close}):(r(),f("div",p({key:1,class:e.cx("content")},e.ptm("content")),[w(e.$slots,"icon",{class:"p-message-icon"},function(){return[(r(),$(L(e.icon?"span":null),p({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),e.$slots.default?(r(),f("div",p({key:0,class:["p-message-text",e.cx("text")]},e.ptm("text")),[w(e.$slots,"default")],16)):b("",!0),e.closable?j((r(),f("button",p({key:1,class:e.cx("closeButton"),"aria-label":o.closeAriaLabel,type:"button",onClick:n[0]||(n[0]=function(a){return o.close(a)})},Ce(Ce({},e.closeButtonProps),e.ptm("closeButton"))),[w(e.$slots,"closeicon",{},function(){return[e.closeIcon?(r(),f("i",p({key:0,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16)):(r(),$(d,p({key:1,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,uo)),[[u]]):b("",!0)],16))],16),[[_,l.visible]])]}),_:3},16)}We.render=fo;var mo=function(n){var t=n.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(t("progressbar.height"),`;
    background: `).concat(t("progressbar.background"),`;
    border-radius: `).concat(t("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(t("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(t("progressbar.label.color"),`;
    font-size: `).concat(t("progressbar.label.font.size"),`;
    font-weight: `).concat(t("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`)},go={root:function(n){var t=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},ho=P.extend({name:"progressbar",theme:mo,classes:go}),vo={name:"BaseProgressBar",extends:I,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:ho,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},He={name:"ProgressBar",extends:vo,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},bo=["aria-valuenow"];function yo(e,n,t,s,l,o){return r(),f("div",p({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[o.determinate?(r(),f("div",p({key:0,class:e.cx("value"),style:o.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(r(),f("div",p({key:0,class:e.cx("label")},e.ptm("label")),[w(e.$slots,"default",{},function(){return[C(x(e.value+"%"),1)]})],16)):b("",!0)],16)):o.indeterminate?(r(),f("div",p({key:1,class:e.cx("value")},e.ptm("value")),null,16)):b("",!0)],16,bo)}He.render=yo;var $o=function(n){var t=n.dt;return`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid `.concat(t("fileupload.border.color"),`;
    border-radius: `).concat(t("fileupload.border.radius"),`;
    background: `).concat(t("fileupload.background"),`;
    color: `).concat(t("fileupload.color"),`;
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: `).concat(t("fileupload.header.padding"),`;
    background: `).concat(t("fileupload.header.background"),`;
    color: `).concat(t("fileupload.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("fileupload.header.border.width"),`;
    border-color: `).concat(t("fileupload.header.border.color"),`;
    border-radius: `).concat(t("fileupload.header.border.radius"),`;
    gap: `).concat(t("fileupload.header.gap"),`;
}

.p-fileupload-content {
    border: 1px solid transparent;
    position: relative;
    transition: border-color `).concat(t("fileupload.transition.duration"),`;
    padding: `).concat(t("fileupload.content.padding"),`;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: `).concat(t("fileupload.progressbar.height"),`;
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.125rem;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: `).concat(t("fileupload.file.padding"),`;
    border-bottom: 1px solid `).concat(t("fileupload.file.border.color"),`;
    gap: `).concat(t("fileupload.file.gap"),`;
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.file.info.gap"),`;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(t("fileupload.content.highlight.border.color"),`;
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("fileupload.basic.gap"),`;
}
`)},wo={root:function(n){var t=n.props;return["p-fileupload p-fileupload-".concat(t.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},ko=P.extend({name:"fileupload",theme:$o,classes:wo}),So={name:"BaseFileUpload",extends:I,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:ko,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},Ge={name:"FileContent",hostName:"FileUpload",extends:I,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(n){var t,s=1024,l=3,o=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(o[0]);var d=Math.floor(Math.log(n)/Math.log(s)),u=parseFloat((n/Math.pow(s,d)).toFixed(l));return"".concat(u," ").concat(o[d])}},components:{Button:D,Badge:Je,TimesIcon:ce}},Co=["alt","src","width"];function xo(e,n,t,s,l,o){var d=M("Badge"),u=M("TimesIcon"),a=M("Button");return r(!0),f(S,null,B(t.files,function(h,g){return r(),f("div",p({key:h.name+h.type+h.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[i("img",p({role:"presentation",class:e.cx("fileThumbnail"),alt:h.name,src:h.objectURL,width:t.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,Co),i("div",p({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[i("div",p({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),x(h.name),17),i("span",p({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),x(o.formatSize(h.size)),17)],16),c(d,{value:t.badgeValue,class:z(e.cx("pcFileBadge")),severity:t.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),i("div",p({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[c(a,{onClick:function(m){return e.$emit("remove",g)},text:"",rounded:"",severity:"danger",class:z(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:y(function(k){return[t.templates.fileremoveicon?(r(),$(L(t.templates.fileremoveicon),{key:0,class:z(k.class),file:h,index:g},null,8,["class","file","index"])):(r(),$(u,p({key:1,class:k.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}Ge.render=xo;function Z(e){return Bo(e)||Vo(e)||Qe(e)||Io()}function Io(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bo(e){if(Array.isArray(e))return se(e)}function W(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Qe(e))||n){t&&(e=t);var s=0,l=function(){};return{s:l,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(h){throw h},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,d=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var h=t.next();return d=h.done,h},e:function(h){u=!0,o=h},f:function(){try{d||t.return==null||t.return()}finally{if(u)throw o}}}}function Qe(e,n){if(e){if(typeof e=="string")return se(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?se(e,n):void 0}}function se(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,s=Array(n);t<n;t++)s[t]=e[t];return s}var de={name:"FileUpload",extends:So,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(n){n.button===0&&this.$refs.fileInput.click()},onFileSelect:function(n){if(n.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var t=n.dataTransfer?n.dataTransfer.files:n.target.files,s=W(t),l;try{for(s.s();!(l=s.n()).done;){var o=l.value;this.isFileSelected(o)||this.validate(o)&&(this.isImage(o)&&(o.objectURL=window.URL.createObjectURL(o)),this.files.push(o))}}catch(d){s.e(d)}finally{s.f()}this.$emit("select",{originalEvent:n,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),n.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var n=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var t=new XMLHttpRequest,s=new FormData;this.$emit("before-upload",{xhr:t,formData:s});var l=W(this.files),o;try{for(l.s();!(o=l.n()).done;){var d=o.value;s.append(this.name,d,d.name)}}catch(u){l.e(u)}finally{l.f()}t.upload.addEventListener("progress",function(u){u.lengthComputable&&(n.progress=Math.round(u.loaded*100/u.total)),n.$emit("progress",{originalEvent:u,progress:n.progress})}),t.onreadystatechange=function(){if(t.readyState===4){var u;n.progress=0,t.status>=200&&t.status<300?(n.fileLimit&&(n.uploadedFileCount+=n.files.length),n.$emit("upload",{xhr:t,files:n.files})):n.$emit("error",{xhr:t,files:n.files}),(u=n.uploadedFiles).push.apply(u,Z(n.files)),n.clear()}},t.open("POST",this.url,!0),this.$emit("before-send",{xhr:t,formData:s}),t.withCredentials=this.withCredentials,t.send(s)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(n){if(this.files&&this.files.length){var t=W(this.files),s;try{for(t.s();!(s=t.n()).done;){var l=s.value;if(l.name+l.type+l.size===n.name+n.type+n.size)return!0}}catch(o){t.e(o)}finally{t.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(n){return this.accept&&!this.isFileTypeValid(n)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",n.name).replace("{1}",this.accept)),!1):this.maxFileSize&&n.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",n.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(n){var t=this.accept.split(",").map(function(u){return u.trim()}),s=W(t),l;try{for(s.s();!(l=s.n()).done;){var o=l.value,d=this.isWildcard(o)?this.getTypeClass(n.type)===this.getTypeClass(o):n.type==o||this.getFileExtension(n).toLowerCase()===o.toLowerCase();if(d)return!0}}catch(u){s.e(u)}finally{s.f()}return!1},getTypeClass:function(n){return n.substring(0,n.indexOf("/"))},isWildcard:function(n){return n.indexOf("*")!==-1},getFileExtension:function(n){return"."+n.name.split(".").pop()},isImage:function(n){return/^image\//.test(n.type)},onDragEnter:function(n){this.disabled||(n.stopPropagation(),n.preventDefault())},onDragOver:function(n){this.disabled||(!this.isUnstyled&&ot(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),n.stopPropagation(),n.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&ue(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(n){if(!this.disabled){!this.isUnstyled&&ue(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),n.stopPropagation(),n.preventDefault();var t=n.dataTransfer?n.dataTransfer.files:n.target.files,s=this.multiple||t&&t.length===1;s&&this.onFileSelect(n)}},remove:function(n){this.clearInputElement();var t=this.files.splice(n,1)[0];this.files=Z(this.files),this.$emit("remove",{file:t,files:this.files})},removeUploadedFile:function(n){var t=this.uploadedFiles.splice(n,1)[0];this.uploadedFiles=Z(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:t,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(n){var t,s=1024,l=3,o=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(o[0]);var d=Math.floor(Math.log(n)/Math.log(s)),u=parseFloat((n/Math.pow(s,d)).toFixed(l));return"".concat(u," ").concat(o[d])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var n;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var t;return this.files&&this.files.length===1?this.files[0].name:(t=this.$primevue.config.locale)===null||t===void 0||(t=t.fileChosenMessage)===null||t===void 0?void 0:t.replace("{0}",this.files.length)}return((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:D,ProgressBar:He,Message:We,FileContent:Ge,PlusIcon:le,UploadIcon:Ke,TimesIcon:ce},directives:{ripple:H}},Fo=["multiple","accept","disabled"],Lo=["files"],Po=["accept","disabled","multiple"];function Oo(e,n,t,s,l,o){var d=M("Button"),u=M("ProgressBar"),a=M("Message"),h=M("FileContent");return o.isAdvanced?(r(),f("div",p({key:0,class:e.cx("root")},e.ptmi("root")),[i("input",p({ref:"fileInput",type:"file",onChange:n[0]||(n[0]=function(){return o.onFileSelect&&o.onFileSelect.apply(o,arguments)}),multiple:e.multiple,accept:e.accept,disabled:o.chooseDisabled},e.ptm("input")),null,16,Fo),i("div",p({class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{files:l.files,uploadedFiles:l.uploadedFiles,chooseCallback:o.choose,uploadCallback:o.uploader,clearCallback:o.clear},function(){return[c(d,p({label:o.chooseButtonLabel,class:o.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:o.choose,onKeydown:fe(o.choose,["enter"]),onFocus:o.onFocus,onBlur:o.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(g){return[w(e.$slots,"chooseicon",{},function(){return[(r(),$(L(e.chooseIcon?"span":"PlusIcon"),p({class:[g.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(r(),$(d,p({key:0,class:e.cx("pcUploadButton"),label:o.uploadButtonLabel,onClick:o.uploader,disabled:o.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:y(function(g){return[w(e.$slots,"uploadicon",{},function(){return[(r(),$(L(e.uploadIcon?"span":"UploadIcon"),p({class:[g.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0),e.showCancelButton?(r(),$(d,p({key:1,class:e.cx("pcCancelButton"),label:o.cancelButtonLabel,onClick:o.clear,disabled:o.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:y(function(g){return[w(e.$slots,"cancelicon",{},function(){return[(r(),$(L(e.cancelIcon?"span":"TimesIcon"),p({class:[g.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):b("",!0)]})],16),i("div",p({ref:"content",class:e.cx("content"),onDragenter:n[1]||(n[1]=function(){return o.onDragEnter&&o.onDragEnter.apply(o,arguments)}),onDragover:n[2]||(n[2]=function(){return o.onDragOver&&o.onDragOver.apply(o,arguments)}),onDragleave:n[3]||(n[3]=function(){return o.onDragLeave&&o.onDragLeave.apply(o,arguments)}),onDrop:n[4]||(n[4]=function(){return o.onDrop&&o.onDrop.apply(o,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[w(e.$slots,"content",{files:l.files,uploadedFiles:l.uploadedFiles,removeUploadedFileCallback:o.removeUploadedFile,removeFileCallback:o.remove,progress:l.progress,messages:l.messages},function(){return[o.hasFiles?(r(),$(u,{key:0,value:l.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):b("",!0),(r(!0),f(S,null,B(l.messages,function(g){return r(),$(a,{key:g,severity:"error",onClose:o.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[C(x(g),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),o.hasFiles?(r(),f("div",{key:1,class:z(e.cx("fileList"))},[c(h,{files:l.files,onRemove:o.remove,badgeValue:o.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0),o.hasUploadedFiles?(r(),f("div",{key:2,class:z(e.cx("fileList"))},[c(h,{files:l.uploadedFiles,onRemove:o.removeUploadedFile,badgeValue:o.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):b("",!0)]}),e.$slots.empty&&!o.hasFiles&&!o.hasUploadedFiles?(r(),f("div",at(p({key:0},e.ptm("empty"))),[w(e.$slots,"empty")],16)):b("",!0)],16)],16)):o.isBasic?(r(),f("div",p({key:1,class:e.cx("root")},e.ptmi("root")),[(r(!0),f(S,null,B(l.messages,function(g){return r(),$(a,{key:g,severity:"error",onClose:o.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:y(function(){return[C(x(g),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),c(d,p({label:o.chooseButtonLabel,class:o.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:o.onBasicUploaderClick,onKeydown:fe(o.choose,["enter"]),onFocus:o.onFocus,onBlur:o.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:y(function(g){return[w(e.$slots,"chooseicon",{},function(){return[(r(),$(L(e.chooseIcon?"span":"PlusIcon"),p({class:[g.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?b("",!0):w(e.$slots,"filelabel",{key:0,class:z(e.cx("filelabel"))},function(){return[i("span",{class:z(e.cx("filelabel")),files:l.files},x(o.basicFileChosenLabel),11,Lo)]}),i("input",p({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:n[5]||(n[5]=function(){return o.onFileSelect&&o.onFileSelect.apply(o,arguments)}),onFocus:n[6]||(n[6]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:n[7]||(n[7]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},e.ptm("input")),null,16,Po)],16)):b("",!0)}de.render=Oo;var Mo=function(n){var t=n.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(t("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(t("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(t("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(t("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(t("progressspinner.color.4"),`;
    }
}
`)},zo={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Eo=P.extend({name:"progressspinner",theme:Mo,classes:zo}),Uo={name:"BaseProgressSpinner",extends:I,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Eo,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},pe={name:"ProgressSpinner",extends:Uo,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},jo=["fill","stroke-width"];function Ao(e,n,t,s,l,o){return r(),f("div",p({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(r(),f("svg",p({class:e.cx("spin"),viewBox:"25 25 50 50",style:o.svgStyle},e.ptm("spin")),[i("circle",p({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,jo)],16))],16)}pe.render=Ao;const To={class:"flex flex-col w-46 gap-2"},Do={class:"box-border border-2 border-slate-200 rounded border-dashed flex flex-col gap-2 p-2 items-center justify-center"},Ro={class:"relative"},_o={key:0,class:"absolute bg-black opacity-80 inset-0 flex flex-col items-center justify-center"},qo=["src"],No=["src"],Ko={class:"flex flex-row gap-2"},Y=U({__name:"UploadImageCell",props:{src:String,title:String,name:String},emits:["onImageChange"],setup(e,{emit:n}){const t=e,s=n,l=Fe(),o=ie(),d=E(!1),u=async h=>{try{d.value=!0;const g=h.files[0],k=new FormData;k.append("file",g),k.append("token",Oe);const m=await Ee.post(ae,k);if(m){const O=Me+m.data.key;console.log(O),s("onImageChange",{name:t.name,url:O}),o.add({severity:"success",summary:"Success",detail:"File Uploaded",life:1e4})}}catch{o.add({severity:"error",summary:"Failed",detail:"Failed to upload file",life:1e4})}d.value=!1},a=h=>{console.log("delete"),l.require({target:h.currentTarget,message:"Do you want to delete this image?",icon:"pi pi-info-circle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{s("onImageChange",{name:t.name,url:""}),o.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{}})};return(h,g)=>{const k=re,m=Le,O=pe,F=ze,A=de,X=D;return r(),f(S,null,[c(k),c(m),i("div",To,[i("div",Do,[i("div",Ro,[d.value?(r(),f("div",_o,[c(O)])):b("",!0),c(F,{alt:"Image",preview:typeof e.src=="string"&&e.src.length>0},{image:y(()=>[i("img",{src:e.src||v(oe)[e.name],alt:"image",class:"h-40 w-40 object-cover object-center"},null,8,qo)]),preview:y(R=>[i("img",{src:e.src||v(oe)[e.name],alt:"preview",style:st(R.style)},null,12,No)]),_:1},8,["preview"])]),i("div",Ko,[c(A,{mode:"basic",name:"demo[]",accept:"image/*",maxFileSize:1e7,onUploader:u,auto:!0,customUpload:"",chooseLabel:"Upload"}),e.src?(r(),$(X,{key:0,icon:"pi pi-times",iconPos:"left",severity:"danger",onClick:g[0]||(g[0]=R=>a(R))})):b("",!0)])]),i("span",null,x(t.title??"-"),1)])],64)}}}),Wo={class:"flex flex-col w-46 gap-2"},Ho={class:"box-border border-2 border-slate-200 rounded border-dashed flex flex-col gap-2 p-2 items-center justify-center"},Go={class:"relative"},Qo={key:0,class:"absolute bg-black opacity-80 inset-0 flex flex-col items-center justify-center"},Xo={key:1,class:"absolute bg-black opacity-80 inset-0 flex flex-col items-center justify-center"},Zo=["src"],Yo={class:"flex flex-row gap-2"},J=U({__name:"UploadFileCell",props:{src:String,title:String,name:String},emits:["onImageChange"],setup(e,{emit:n}){const t=e,s=n,l=Fe(),o=ie(),d=E(!1),u=async h=>{try{d.value=!0;const g=h.files[0],k=new FormData;k.append("file",g),k.append("token",Oe);const m=await Ee.post(ae,k);if(m){const O=Me+m.data.key;console.log(O),s("onImageChange",{name:t.name,url:O}),o.add({severity:"success",summary:"Success",detail:"File Uploaded",life:3e3})}}catch{o.add({severity:"error",summary:"Failed",detail:"Failed to upload file",life:3e3})}d.value=!1},a=h=>{console.log("delete"),l.require({target:h.currentTarget,message:"Do you want to delete this image?",icon:"pi pi-info-circle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{s("onImageChange",{name:t.name,url:""}),o.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{}})};return(h,g)=>{const k=re,m=Le,O=Rt,F=pe,A=ze,X=de,R=D;return r(),f(S,null,[c(k),c(m),i("div",Wo,[i("div",Ho,[i("div",Go,[e.src&&!d.value?(r(),f("div",Qo,[c(O,{icon:"pi pi-check",class:"mb-2",style:{"background-color":"forestgreen",color:"#ffffff"},shape:"circle",size:"xlarge"}),g[1]||(g[1]=i("span",null,"已上传",-1))])):b("",!0),d.value?(r(),f("div",Xo,[c(F)])):b("",!0),c(A,{alt:"Image"},{image:y(()=>[i("img",{src:v(oe)[e.name],alt:"image",class:"h-40 w-40 object-cover object-center"},null,8,Zo)]),_:1})]),i("div",Yo,[c(X,{mode:"basic",name:"demo[]",url:v(ae),maxFileSize:1e7,onUploader:u,auto:!0,customUpload:"",chooseLabel:"Upload"},null,8,["url"]),e.src?(r(),$(R,{key:0,icon:"pi pi-times",iconPos:"left",severity:"danger",onClick:g[0]||(g[0]=Ze=>a(Ze))})):b("",!0)])]),i("span",null,x(t.title??"-"),1)])],64)}}}),Jo={class:"flex flex-col gap-4"},ea={class:"flex flex-wrap gap-4 mb-4"},ta={class:"flex flex-wrap gap-4 mb-4"},na={class:"flex flex-wrap gap-4 mb-4"},oa={class:"flex flex-wrap gap-4 mb-4"},aa=U({__name:"ImageInfoView",props:{patient:{type:Object,default:K}},setup(e){const n=e,t=s=>{n.patient.images[s.name]=s.url};return(s,l)=>{const o=Ne;return r(),f("div",Jo,[c(o,{legend:"Face Photos"},{default:y(()=>[i("div",ea,[(r(!0),f(S,null,B(v($t),d=>(r(),$(Y,{src:e.patient.images[d.key],name:d.key,title:d.title,onOnImageChange:t},null,8,["src","name","title"]))),256))])]),_:1}),c(o,{legend:"Oral Photos"},{default:y(()=>[i("div",ta,[(r(!0),f(S,null,B(v(wt),d=>(r(),$(Y,{src:e.patient.images[d.key],name:d.key,title:d.title,onOnImageChange:t},null,8,["src","name","title"]))),256))])]),_:1}),c(o,{legend:"X-ray Films"},{default:y(()=>[i("div",na,[(r(!0),f(S,null,B(v(kt),d=>(r(),$(Y,{src:e.patient.images[d.key],name:d.key,title:d.title,onOnImageChange:t},null,8,["src","name","title"]))),256))])]),_:1}),c(o,{legend:"Oral Scan Files"},{default:y(()=>[i("div",oa,[c(J,{src:e.patient.stl_up,name:"stl_up",title:"Maxillary model",onOnImageChange:t},null,8,["src"]),c(J,{src:e.patient.stl_down,name:"stl_down",title:"Mandibular model",onOnImageChange:t},null,8,["src"]),c(J,{src:e.patient.stl_all,name:"stl_all",title:"Bite model",onOnImageChange:t},null,8,["src"])])]),_:1})])}}});var sa=function(n){var t=n.dt;return`
.p-panel {
    border: 1px solid `.concat(t("panel.border.color"),`;
    border-radius: `).concat(t("panel.border.radius"),`;
    background: `).concat(t("panel.background"),`;
    color: `).concat(t("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(t("panel.header.padding"),`;
    background: `).concat(t("panel.header.background"),`;
    color: `).concat(t("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("panel.header.border.width"),`;
    border-color: `).concat(t("panel.header.border.color"),`;
    border-radius: `).concat(t("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(t("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(t("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(t("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(t("panel.footer.padding"),`;
}
`)},ia={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},la=P.extend({name:"panel",theme:sa,classes:ia}),ra={name:"BasePanel",extends:I,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:la,provide:function(){return{$pcPanel:this,$parentInstance:this}}},Xe={name:"Panel",extends:ra,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||T()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||T()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:le,MinusIcon:Pe,Button:D},directives:{ripple:H}},ca=["id"],da=["id","aria-labelledby"];function pa(e,n,t,s,l,o){var d=M("Button");return r(),f("div",p({class:e.cx("root")},e.ptmi("root")),[i("div",p({class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{id:l.id+"_header",class:z(e.cx("title"))},function(){return[e.header?(r(),f("span",p({key:0,id:l.id+"_header",class:e.cx("title")},e.ptm("title")),x(e.header),17,ca)):b("",!0)]}),i("div",p({class:e.cx("headerActions")},e.ptm("headerActions")),[w(e.$slots,"icons"),e.toggleable?(r(),$(d,p({key:0,id:l.id+"_header",class:e.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":l.id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:o.toggle,onKeydown:o.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:y(function(u){return[w(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(r(),$(L(l.d_collapsed?"PlusIcon":"MinusIcon"),p({class:u.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):b("",!0)],16)],16),c(G,p({name:"p-toggleable-content"},e.ptm("transition")),{default:y(function(){return[j(i("div",p({id:l.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":l.id+"_header"},e.ptm("contentContainer")),[i("div",p({class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16),e.$slots.footer?(r(),f("div",p({key:0,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):b("",!0)],16,da),[[_,!l.d_collapsed]])]}),_:3},16)],16)}Xe.render=pa;const ua={class:"flex flex-col gap-4"},fa={class:"flex flex-wrap gap-2"},ma={class:"flex items-center gap-2"},ga=["for"],ha=U({__name:"SpecialDesignCheckBoxes",props:{modelValue:{default:""},modelModifiers:{}},emits:["update:modelValue"],setup(e){const n=Ie(e,"modelValue"),t=E(!1),s=E(!1),l=E([]),o=()=>{s.value?n.value="":n.value=l.value.join(",")};return(d,u)=>{const a=ut,h=Q;return r(),f("div",ua,[i("div",fa,[i("div",ma,[c(a,{binary:!0,modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=g=>t.value=g),onChange:u[1]||(u[1]=g=>{l.value=[],s.value=!1})},null,8,["modelValue"]),u[5]||(u[5]=i("label",{for:"custom"},"Customized",-1))]),(r(!0),f(S,null,B(v(St),g=>(r(),f("div",{key:g.value,class:"flex items-center gap-2"},[c(a,{inputId:g.value,name:"option",value:g.value,modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=k=>l.value=k),onChange:u[3]||(u[3]=k=>{t.value=!1,s.value=!1,o()})},null,8,["inputId","value","modelValue"]),i("label",{for:g.value},x(g.label),9,ga)]))),128)),u[6]||(u[6]=i("div",{class:"flex items-center gap-2"},null,-1))]),t.value?(r(),$(h,{key:0,autoResize:"",rows:"2",cols:"60",modelValue:n.value,"onUpdate:modelValue":u[4]||(u[4]=g=>n.value=g)},null,8,["modelValue"])):b("",!0)])}}}),va={class:"flex flex-col items-center"},ba={class:"flex flex-row mb-2"},ya={class:"flex flex-row-reverse items-end gap-1"},$a=["onClick"],wa=["src"],ka={class:"flex flex-row items-end gap-1"},Sa=["onClick"],Ca=["src"],xa={class:"flex flex-row"},Ia={class:"flex flex-row-reverse items-start gap-1"},Va=["onClick"],Ba=["src"],Fa={class:"flex flex-row items-start gap-1"},La=["onClick"],Pa=["src"],Oa={class:"flex flex-row gap-4"},Ma=["onClick"],za=["src"],Ea=U({__name:"ToothSeat",props:{patient:{type:Object,default:K}},setup(e){const n=e,t={0:["a","Normal"],1:["b","Missing"],2:["c","Removed"],3:["d","Not Attachable"],4:["e","Immovable"]},s=E(0),l=d=>{s.value=parseInt(d)},o=d=>{n.patient&&(n.patient.tooth_seat[d]=s.value)};return(d,u)=>(r(),f("div",va,[i("div",ba,[i("div",ya,[(r(!0),f(S,null,B(Object.entries(e.patient.tooth_seat).slice(0,8),(a,h)=>(r(),f("div",{key:h,onClick:g=>o(a[0])},[i("img",{src:`https://alpha.protectmec.com/images/teeth/${t[a[1]][0]}/${h}.png`,alt:""},null,8,wa)],8,$a))),128))]),i("div",ka,[(r(!0),f(S,null,B(Object.entries(e.patient.tooth_seat).slice(8,16),(a,h)=>(r(),f("div",{key:h,onClick:g=>o(a[0])},[i("img",{src:`https://alpha.protectmec.com/images/teeth/${t[a[1]][0]}/${h+8}.png`,alt:""},null,8,Ca)],8,Sa))),128))])]),i("div",xa,[i("div",Ia,[(r(!0),f(S,null,B(Object.entries(e.patient.tooth_seat).slice(24,32),(a,h)=>(r(),f("div",{key:h,onClick:g=>o(a[0])},[i("img",{src:`https://alpha.protectmec.com/images/teeth/${t[a[1]][0]}/${h+24}.png`,alt:""},null,8,Ba)],8,Va))),128))]),i("div",Fa,[(r(!0),f(S,null,B(Object.entries(e.patient.tooth_seat).slice(16,24),(a,h)=>(r(),f("div",{key:h,onClick:g=>o(a[0])},[i("img",{src:`https://alpha.protectmec.com/images/teeth/${t[a[1]][0]}/${h+16}.png`,alt:""},null,8,Pa)],8,La))),128))])]),i("div",Oa,[(r(),f(S,null,B(t,(a,h)=>i("div",{class:"card flex flex-col items-center",onClick:g=>l(h)},[i("img",{src:`https://alpha.protectmec.com/images/teeth/${a[0]}.png`,class:"w-16 mr-2",alt:""},null,8,za),i("span",{class:z(h==s.value?"text-primary font-bold":"")},x(a[1]),3)],8,Ma)),64))])]))}}),Ua={class:"flex flex-col gap-4"},ja={class:"flex flex-row items-center"},Aa={class:"flex flex-row items-center"},Ta={class:"flex flex-row items-center gap-2"},Da={class:"flex flex-row"},Ra={class:"flex flex-row"},_a={class:"flex flex-col gap-4"},qa={class:"flex flex-row"},Na={class:"flex flex-row items-center"},Ka={class:"flex flex-row items-center"},Wa={class:"flex flex-col gap-4"},Ha={class:"grid grid-cols-2 gap-4"},Ga={class:"flex flex-row items-center"},Qa={class:"flex flex-col gap-2"},Xa={key:0},Za={class:"flex flex-row items-center"},Ya={class:"flex flex-col gap-2"},Ja={class:"flex flex-row items-center"},es={class:"flex flex-col gap-2"},ts={class:"flex flex-row items-center"},ns={class:"flex flex-row items-center"},os={class:"flex flex-row items-center"},as={class:"flex flex-row items-center"},ss={class:"flex flex-row items-center"},is=U({__name:"DesignInfoView",props:{patient:{type:Object,default:K}},setup(e){const n=e,t=E(""),s=E(""),l=E(""),o=E(""),d=()=>{console.log("changed");let u,a;t.value==="调整"?u="左-"+t.value+"-"+s.value:t.value==="维持"?u="左-"+t.value:u="左-无",l.value==="调整"?a="右-"+l.value+"-"+o.value:l.value==="维持"?a="右-"+l.value:a="右-无",n.patient&&(n.patient.jiuzhengguanxi=u+" | "+a,n.patient.rectify_left=u,n.patient.rectify_right=a)};return(u,a)=>{const h=dt,g=Q,k=Xe;return r(),f("div",Ua,[i("div",ja,[a[25]||(a[25]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Application type:")],-1)),c(V,{modelValue:e.patient.use_type,"onUpdate:modelValue":a[0]||(a[0]=m=>e.patient.use_type=m),options:v(Ct)},null,8,["modelValue","options"])]),i("div",Aa,[a[26]||(a[26]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Bracket:")],-1)),c(h,{modelValue:e.patient.fixed_slot,"onUpdate:modelValue":a[1]||(a[1]=m=>e.patient.fixed_slot=m),options:v(xt),optionLabel:"label",optionValue:"value",class:"w-full md:w-56"},null,8,["modelValue","options"])]),i("div",Ta,[a[27]||(a[27]=i("span",{class:"title"},"Buccal tube:",-1)),a[28]||(a[28]=i("span",null,"6#",-1)),c(h,{modelValue:e.patient.fixed_face,"onUpdate:modelValue":a[2]||(a[2]=m=>e.patient.fixed_face=m),options:v(It),optionLabel:"label",optionValue:"value",class:"w-full md:w-56"},null,8,["modelValue","options"]),a[29]||(a[29]=i("span",null,"7#",-1)),c(h,{modelValue:e.patient.fixed_face2,"onUpdate:modelValue":a[3]||(a[3]=m=>e.patient.fixed_face2=m),options:v(Vt),optionLabel:"label",optionValue:"value",class:"w-full md:w-56"},null,8,["modelValue","options"])]),i("div",Da,[a[30]||(a[30]=i("span",{class:"title"},"Remarks for brackets:",-1)),c(g,{placeholder:v(Bt),modelValue:e.patient.fixed_slot_desc,"onUpdate:modelValue":a[4]||(a[4]=m=>e.patient.fixed_slot_desc=m),autoResize:"",rows:"2",cols:"60"},null,8,["placeholder","modelValue"])]),i("div",Ra,[a[31]||(a[31]=i("span",{class:"title"},"Positioning scheme:",-1)),c(V,{modelValue:e.patient.set_plan,"onUpdate:modelValue":a[5]||(a[5]=m=>e.patient.set_plan=m),options:v(Ft)},null,8,["modelValue","options"])]),c(k,{header:"Special design requirements and situations:",toggleable:""},{default:y(()=>[i("div",_a,[i("div",qa,[a[32]||(a[32]=i("span",{class:"title"},"Special design:",-1)),c(ha,{modelValue:e.patient.tssheji,"onUpdate:modelValue":a[6]||(a[6]=m=>e.patient.tssheji=m)},null,8,["modelValue"])]),i("div",Na,[a[33]||(a[33]=i("span",{class:"title"},"For brackets with occlusal interference:",-1)),c(h,{modelValue:e.patient.tsqingkuang_yaohe,"onUpdate:modelValue":a[7]||(a[7]=m=>e.patient.tsqingkuang_yaohe=m),options:v(Lt),optionLabel:"label",optionValue:"value",class:"w-full md:w-56"},null,8,["modelValue","options"])]),i("div",Ka,[a[34]||(a[34]=i("span",{class:"title"},"For cases that bracket base frequently interferences with the gingiva:",-1)),c(h,{modelValue:e.patient.tsqingkuang_tuocao,"onUpdate:modelValue":a[8]||(a[8]=m=>e.patient.tsqingkuang_tuocao=m),options:v(Pt),optionLabel:"label",optionValue:"value",class:"w-full md:w-56"},null,8,["modelValue","options"])])])]),_:1}),i("div",Wa,[a[35]||(a[35]=i("span",{class:"title"},"Teeth position:",-1)),c(Ea,{patient:e.patient},null,8,["patient"]),c(g,{placeholder:"Remarks: Less than 200 words...",modelValue:e.patient.tooth_seat_desc,"onUpdate:modelValue":a[9]||(a[9]=m=>e.patient.tooth_seat_desc=m),autoResize:"",rows:"3",cols:"60"},null,8,["modelValue"])]),c(k,{header:"Supplementary Information:",toggleable:""},{default:y(()=>[i("div",Ha,[i("div",Ga,[a[36]||(a[36]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Midline correction:")],-1)),i("div",Qa,[c(V,{modelValue:e.patient.center_correct,"onUpdate:modelValue":a[10]||(a[10]=m=>e.patient.center_correct=m),options:v(Ot)},null,8,["modelValue","options"]),e.patient.center_correct.includes("改善")?(r(),f("div",Xa,[c(V,{modelValue:e.patient.center_correct,"onUpdate:modelValue":a[11]||(a[11]=m=>e.patient.center_correct=m),options:v(Mt)},null,8,["modelValue","options"])])):b("",!0)])]),i("div",Za,[a[37]||(a[37]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Molar Relationship (left):")],-1)),i("div",Ya,[c(V,{modelValue:t.value,"onUpdate:modelValue":a[12]||(a[12]=m=>t.value=m),options:v(ve),onChange:a[13]||(a[13]=m=>d())},null,8,["modelValue","options"]),t.value==="调整"?(r(),$(h,{key:0,modelValue:s.value,"onUpdate:modelValue":a[14]||(a[14]=m=>s.value=m),options:v(be),optionLabel:"label",optionValue:"value",class:"w-full md:w-56",onChange:a[15]||(a[15]=m=>d())},null,8,["modelValue","options"])):b("",!0)])]),i("div",Ja,[a[38]||(a[38]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Molar Relationship (right):")],-1)),i("div",es,[c(V,{modelValue:l.value,"onUpdate:modelValue":a[16]||(a[16]=m=>l.value=m),options:v(ve),onChange:a[17]||(a[17]=m=>d())},null,8,["modelValue","options"]),l.value==="调整"?(r(),$(h,{key:0,modelValue:o.value,"onUpdate:modelValue":a[18]||(a[18]=m=>o.value=m),options:v(be),optionLabel:"label",optionValue:"value",class:"w-full md:w-56",onChange:a[19]||(a[19]=m=>d())},null,8,["modelValue","options"])):b("",!0)])]),i("div",ts,[a[39]||(a[39]=i("span",{class:"title"},"Expand arch:",-1)),c(V,{modelValue:e.patient.kuogong,"onUpdate:modelValue":a[20]||(a[20]=m=>e.patient.kuogong=m),options:v(zt)},null,8,["modelValue","options"])]),i("div",ns,[a[40]||(a[40]=i("span",{class:"title"},"Vertical orientation of upper anterior teeth:",-1)),c(V,{modelValue:e.patient.back_vertical,"onUpdate:modelValue":a[21]||(a[21]=m=>e.patient.back_vertical=m),options:v(ye)},null,8,["modelValue","options"])]),i("div",os,[a[41]||(a[41]=i("span",{class:"title"},"Vertical orientation of upper posterior teeth:",-1)),c(V,{modelValue:e.patient.front_vertical,"onUpdate:modelValue":a[22]||(a[22]=m=>e.patient.front_vertical=m),options:v(ye)},null,8,["modelValue","options"])]),i("div",as,[a[42]||(a[42]=i("span",{class:"title"},[i("span",{class:"text-red-500"},"*"),C("Interdental space:")],-1)),c(V,{modelValue:e.patient.close_correct,"onUpdate:modelValue":a[23]||(a[23]=m=>e.patient.close_correct=m),options:v(Et)},null,8,["modelValue","options"])]),i("div",ss,[a[43]||(a[43]=i("span",{class:"title"},"stripping of enamel:",-1)),c(V,{modelValue:e.patient.quyou,"onUpdate:modelValue":a[24]||(a[24]=m=>e.patient.quyou=m),options:v(Ut)},null,8,["modelValue","options"])])])]),_:1})])}}}),ls=Ve(is,[["__scopeId","data-v-f125eb42"]]),ee=(e,n,t)=>{if(e==="2"){if(!n.patient_name)return t.add({severity:"error",summary:"Error Message",detail:"Patient name is required",life:3e3}),!1;if(!n.patient_sex)return t.add({severity:"error",summary:"Error Message",detail:"Patient sex is required",life:3e3}),!1;if(!n.patient_age)return t.add({severity:"error",summary:"Error Message",detail:"Patient age is required",life:3e3}),!1}if(e==="3"){if(!n.use_type)return t.add({severity:"error",summary:"Error Message",detail:"Application type is required",life:3e3}),!1;if(!n.fixed_slot)return t.add({severity:"error",summary:"Error Message",detail:"Bracket is required",life:3e3}),!1;if(!n.rectify_left)return t.add({severity:"error",summary:"Error Message",detail:"Molar Relationship (left) is required",life:3e3}),!1;if(!n.rectify_right)return t.add({severity:"error",summary:"Error Message",detail:"Molar Relationship (right) is required",life:3e3}),!1;if(!n.center_correct)return t.add({severity:"error",summary:"Error Message",detail:"Midline correction is required",life:3e3}),!1;if(!n.close_correct)return t.add({severity:"error",summary:"Error Message",detail:"Interdental space is required",life:3e3}),!1}if(e==="4"){if(!n.images.top_face_image)return t.add({severity:"error",summary:"Error Message",detail:"Top face image is required",life:3e3}),!1;if(!n.images.right_half_image)return t.add({severity:"error",summary:"Error Message",detail:"Right half image is required",life:3e3}),!1;if(!n.images.left_half_image)return t.add({severity:"error",summary:"Error Message",detail:"Left half image is required",life:3e3}),!1;if(!n.images.left_face_image)return t.add({severity:"error",summary:"Error Message",detail:"Left face image is required",life:3e3}),!1;if(!n.images.right_face_image)return t.add({severity:"error",summary:"Error Message",detail:"Right face image is required",life:3e3}),!1;if(!n.images.top_mouth_image)return t.add({severity:"error",summary:"Error Message",detail:"Top mouth image is required",life:3e3}),!1;if(!n.images.smile_image)return t.add({severity:"error",summary:"Error Message",detail:"Smile image is required",life:3e3}),!1;if(!n.images.bottom_mouth_image)return t.add({severity:"error",summary:"Error Message",detail:"Bottom mouth image is required",life:3e3}),!1;if(!n.images.left_mouth_image)return t.add({severity:"error",summary:"Error Message",detail:"Left mouth image is required",life:3e3}),!1;if(!n.images.right_mouth_image)return t.add({severity:"error",summary:"Error Message",detail:"Right mouth image is required",life:3e3}),!1;if(!n.images.middle_mouth_image)return t.add({severity:"error",summary:"Error Message",detail:"Middle mouth image is required",life:3e3}),!1;if(!n.images.x_all_image)return t.add({severity:"error",summary:"Error Message",detail:"X all image is required",life:3e3}),!1;if(!n.images.x_side_image)return t.add({severity:"error",summary:"Error Message",detail:"X side image is required",life:3e3}),!1;if(!n.stl_up)return t.add({severity:"error",summary:"Error Message",detail:"Maxillary model is required",life:3e3}),!1;if(!n.stl_down)return t.add({severity:"error",summary:"Error Message",detail:"Oral model is required",life:3e3}),!1;if(!n.stl_all)return t.add({severity:"error",summary:"Error Message",detail:"Oral model is required",life:3e3}),!1}return!0},rs={class:"card"},cs={class:"mb-12"},ds={class:"flex pt-6 justify-end"},ps={class:"flex pt-6 justify-between"},us={class:"flex pt-6 justify-between"},fs={class:"flex pt-6 justify-between"},Is=U({__name:"add",setup(e){const n=it(),t=ie(),s=E(K),l=async()=>{s.value.no=String(Math.floor(Date.now()/1e3)),console.log("newPatient",s.value);const o=await Tt.post(Dt.CREATE_CASE,s.value);console.log("res",o),o.data&&o.data.code==1?(t.add({severity:"success",summary:"Success Message",detail:"Add new patient successfully",life:3e3}),await n.push(`info/${o.data.data}`)):t.add({severity:"error",summary:"Error Message",detail:o.data.msg,life:3e3})};return(o,d)=>{const u=re,a=_e,h=De,g=D,k=Te,m=je,O=Ue;return r(),f("div",rs,[c(u),c(O,{value:"1",class:"basis-[50rem]",linear:""},{default:y(()=>[i("div",cs,[c(h,null,{default:y(()=>[c(a,{value:"1"},{default:y(()=>d[0]||(d[0]=[C("Basic Information")])),_:1}),c(a,{value:"2"},{default:y(()=>d[1]||(d[1]=[C("Design Information")])),_:1}),c(a,{value:"3"},{default:y(()=>d[2]||(d[2]=[C("Photo & Model Information")])),_:1}),c(a,{value:"4"},{default:y(()=>d[3]||(d[3]=[C("Confirm Information")])),_:1})]),_:1})]),c(m,null,{default:y(()=>[c(k,{value:"1"},{default:y(({activateCallback:F})=>[c(Kn,{patient:s.value},null,8,["patient"]),i("div",ds,[c(g,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>{v(ee)("2",s.value,v(t))&&F("2")}},null,8,["onClick"])])]),_:1}),c(k,{value:"2"},{default:y(({activateCallback:F})=>[c(ls,{patient:s.value},null,8,["patient"]),i("div",ps,[c(g,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:A=>F("1")},null,8,["onClick"]),c(g,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>{v(ee)("3",s.value,v(t))&&F("3")}},null,8,["onClick"])])]),_:1}),c(k,{value:"3"},{default:y(({activateCallback:F})=>[c(aa,{patient:s.value},null,8,["patient"]),i("div",us,[c(g,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:A=>F("2")},null,8,["onClick"]),c(g,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>{v(ee)("4",s.value,v(t))&&F("4")}},null,8,["onClick"])])]),_:1}),c(k,{value:"4"},{default:y(({activateCallback:F})=>[c(_t,{patient:s.value},null,8,["patient"]),c($e,{patient:s.value,items:v(jt),icon:"pi pi-user",title:"Basic Information"},null,8,["patient","items"]),c($e,{patient:s.value,items:v(At),icon:"pi pi-pencil",title:"Design Information"},null,8,["patient","items"]),c(qt,{patient:s.value.images},null,8,["patient"]),c(Nt,{patient:s.value},null,8,["patient"]),i("div",fs,[c(g,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:A=>F("3")},null,8,["onClick"]),c(g,{label:"Submit",icon:"pi pi-arrow-right",iconPos:"right",onClick:l})])]),_:1})]),_:1})]),_:1})])}}});export{Is as default};
