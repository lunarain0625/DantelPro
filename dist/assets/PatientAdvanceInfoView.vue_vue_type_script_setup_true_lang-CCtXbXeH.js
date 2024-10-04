import{s as M}from"./index-BydDTMv4.js";import{D as T,o,c,b as r,d as g,f as y,F as h,u as w,t as m,B as _,v as $,m as b,U as O,w as A,G as q,s as v,e as L,n as N,V as B,i as S,W as X,X as P,l as G,Y as Q,a as K,Z as C,g as Y,Q as Z,z as J,x as I,y as tt}from"./index-DEUlV4iD.js";import{s as D,f as et,o as at,x as nt}from"./CONSTANT-CzUVCmyn.js";import{U as V,s as k,R as E}from"./index-DQFkPrHB.js";import{s as st,a as it}from"./index-BpXIduUV.js";const ot={class:"flex flex-row gap-2"},te=T({__name:"PatientModelView",props:{patient:Object},setup(e){const t=a=>{a&&(console.log(a),window.open(a))};return(a,s)=>{var n,u,p;const i=M;return o(),c(h,null,[s[3]||(s[3]=r("div",{class:"flex items-center"},[r("i",{class:"pi pi-pen-to-square text-primary m-4",style:{"font-size":"1.5rem"}}),r("span",{class:"font-bold text-2xl text-primary"},"Model Information")],-1)),r("div",ot,[(n=e.patient)!=null&&n.stl_up?(o(),g(i,{key:0,label:"Download Maxillary Model",icon:"pi pi-download",onClick:s[0]||(s[0]=f=>{var l;return t((l=e.patient)==null?void 0:l.stl_up)})})):y("",!0),(u=e.patient)!=null&&u.stl_down?(o(),g(i,{key:1,label:"Download Mandibular Model",icon:"pi pi-download",onClick:s[1]||(s[1]=f=>{var l;return t((l=e.patient)==null?void 0:l.stl_down)})})):y("",!0),(p=e.patient)!=null&&p.stl_all?(o(),g(i,{key:2,label:"Download Bite Model",icon:"pi pi-download",onClick:s[2]||(s[2]=f=>{var l;return t((l=e.patient)==null?void 0:l.stl_all)})})):y("",!0)])],64)}}}),rt={class:"p-4 flex flex-row"},lt={class:"flex flex-col p-4 grow"},ct={key:0,class:"text-sm text-right"},ut={class:"text-2xl text-left font-bold"},dt={class:"text-base text-left"},ee=T({__name:"PatientBasicInfoView",props:{patient:Object},setup(e){const t=e;return(a,s)=>{var n,u,p,f,l,d,x;const i=D;return o(),c("div",rt,[w(i,{src:(u=(n=e.patient)==null?void 0:n.images)==null?void 0:u.top_face_image,class:"w-36",preview:""},null,8,["src"]),r("div",lt,[(p=e.patient)!=null&&p.case_no?(o(),c("span",ct,"ID: "+m((f=t.patient)==null?void 0:f.case_no),1)):y("",!0),r("span",ut,m((l=t.patient)==null?void 0:l.patient_name),1),r("span",dt,m((d=t.patient)==null?void 0:d.patient_sex)+" | "+m((x=t.patient)==null?void 0:x.patient_age)+" years old",1)])])}}});var bt=function(t){var a=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(a("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(a("tabs.tablist.border.color"),`;
    border-width: `).concat(a("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(a("tabs.nav.button.background"),`;
    color: `).concat(a("tabs.nav.button.color"),`;
    width: `).concat(a("tabs.nav.button.width"),`;
    transition: color `).concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    box-shadow: `).concat(a("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.nav.button.focus.ring.width")," ").concat(a("tabs.nav.button.focus.ring.style")," ").concat(a("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(a("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(a("tabs.tab.background"),`;
    border-width: `).concat(a("tabs.tab.border.width"),`;
    border-color: `).concat(a("tabs.tab.border.color"),`;
    color: `).concat(a("tabs.tab.color"),`;
    padding: `).concat(a("tabs.tab.padding"),`;
    font-weight: `).concat(a("tabs.tab.font.weight"),`;
    transition: background `).concat(a("tabs.transition.duration"),", border-color ").concat(a("tabs.transition.duration"),", color ").concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    margin: `).concat(a("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tab.focus.ring.width")," ").concat(a("tabs.tab.focus.ring.style")," ").concat(a("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(a("tabs.tab.hover.background"),`;
    border-color: `).concat(a("tabs.tab.hover.border.color"),`;
    color: `).concat(a("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(a("tabs.tab.active.background"),`;
    border-color: `).concat(a("tabs.tab.active.border.color"),`;
    color: `).concat(a("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(a("tabs.tabpanel.background"),`;
    color: `).concat(a("tabs.tabpanel.color"),`;
    padding: `).concat(a("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(a("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tabpanel.focus.ring.width")," ").concat(a("tabs.tabpanel.focus.ring.style")," ").concat(a("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(a("tabs.active.bar.bottom"),`;
    height: `).concat(a("tabs.active.bar.height"),`;
    background: `).concat(a("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},pt={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},ft=_.extend({name:"tabs",theme:bt,classes:pt}),vt={name:"BaseTabs",extends:k,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:ft,provide:function(){return{$pcTabs:this,$parentInstance:this}}},F={name:"Tabs",extends:vt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||V()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||V()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function ht(e,t,a,s,i,n){return o(),c("div",b({class:e.cx("root")},e.ptmi("root")),[$(e.$slots,"default")],16)}F.render=ht;var mt={root:"p-tabpanels"},gt=_.extend({name:"tabpanels",classes:mt}),yt={name:"BaseTabPanels",extends:k,props:{},style:gt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},R={name:"TabPanels",extends:yt,inheritAttrs:!1};function $t(e,t,a,s,i,n){return o(),c("div",b({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[$(e.$slots,"default")],16)}R.render=$t;var xt={root:function(t){var a=t.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},wt=_.extend({name:"tabpanel",classes:xt}),Tt={name:"BaseTabPanel",extends:k,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:wt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},j={name:"TabPanel",extends:Tt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return O((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return b(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function _t(e,t,a,s,i,n){var u,p;return n.$pcTabs?(o(),c(h,{key:1},[e.asChild?$(e.$slots,"default",{key:1,class:N(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(o(),c(h,{key:0},[!((u=n.$pcTabs)!==null&&u!==void 0&&u.lazy)||n.active?A((o(),g(L(e.as),b({key:0,class:e.cx("root")},n.attrs),{default:v(function(){return[$(e.$slots,"default")]}),_:3},16,["class"])),[[q,(p=n.$pcTabs)!==null&&p!==void 0&&p.lazy?!0:n.active]]):y("",!0)],64))],64)):$(e.$slots,"default",{key:0})}j.render=_t;var kt={root:"p-tablist",content:function(t){var a=t.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Bt=_.extend({name:"tablist",classes:kt}),Pt={name:"BaseTabList",extends:k,props:{},style:Bt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},H={name:"TabList",extends:Pt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=B(t),s=t.scrollLeft-a;t.scrollLeft=s<=0?0:s},onNextButtonClick:function(){var t=this.$refs.content,a=B(t)-this.getVisibleButtonWidths(),s=t.scrollLeft+a,i=t.scrollWidth-a;t.scrollLeft=s>=i?i:s},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,s=t.inkbar,i=t.tabs,n=S(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=X(n)+"px",s.style.top=P(n).top-P(i).top+"px"):(s.style.width=G(n)+"px",s.style.left=P(n).left-P(i).left+"px")},updateButtonState:function(){var t=this.$refs,a=t.list,s=t.content,i=s.scrollLeft,n=s.scrollTop,u=s.scrollWidth,p=s.scrollHeight,f=s.offsetWidth,l=s.offsetHeight,d=[B(s),Q(s)],x=d[0],U=d[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=n!==0,this.isNextButtonEnabled=a.offsetHeight>=l&&parseInt(n)!==p-U):(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=a.offsetWidth>=f&&parseInt(i)!==u-x)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevBtn,s=t.nextBtn;return[a,s].reduce(function(i,n){return n?i+B(n):i},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:st,ChevronRightIcon:it},directives:{ripple:E}},Ct=["aria-label","tabindex"],It=["aria-orientation"],At=["aria-label","tabindex"];function Lt(e,t,a,s,i,n){var u=K("ripple");return o(),c("div",b({ref:"list",class:e.cx("root")},e.ptmi("root")),[n.showNavigators&&i.isPrevButtonEnabled?A((o(),c("button",b({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(o(),g(L(n.templates.previcon||"ChevronLeftIcon"),b({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Ct)),[[u]]):y("",!0),r("div",b({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},e.ptm("content")),[r("div",b({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[$(e.$slots,"default"),r("span",b({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,It)],16),n.showNavigators&&i.isNextButtonEnabled?A((o(),c("button",b({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(o(),g(L(n.templates.nexticon||"ChevronRightIcon"),b({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,At)),[[u]]):y("",!0)],16)}H.render=Lt;var St={root:function(t){var a=t.instance,s=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},Nt=_.extend({name:"tab",classes:St}),Vt={name:"BaseTab",extends:k,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Nt,provide:function(){return{$pcTab:this,$parentInstance:this}}},W={name:"Tab",extends:Vt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.nextElementSibling;return s?C(s,"data-p-disabled")||C(s,"data-pc-section")==="inkbar"?this.findNextTab(s):S(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.previousElementSibling;return s?C(s,"data-p-disabled")||C(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):S(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){Y(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return O((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return b(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:E}};function zt(e,t,a,s,i,n){var u=K("ripple");return e.asChild?$(e.$slots,"default",{key:1,class:N(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):A((o(),g(L(e.as),b({key:0,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:v(function(){return[$(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[u]])}W.render=zt;const Ot={class:"w-32"},Kt={class:"box-border h-33 w-33 border-2 border-slate-200 rounded border-dashed flex items-center justify-center"},Dt=["src"],Et=["src"],z="/src/assets/img_placeholder.png",Ft=T({__name:"ImageCell",props:{src:String,title:String},setup(e){const t=e;return(a,s)=>{const i=D;return o(),c("div",Ot,[r("div",Kt,[w(i,{alt:"Image",preview:""},{image:v(()=>[r("img",{src:t.src??z,alt:"image",class:"h-32 w-32 object-cover object-center"},null,8,Dt)]),preview:v(n=>[r("img",{src:t.src??z,alt:"preview",style:Z(n.style)},null,12,Et)]),_:1})]),r("span",null,m(t.title??"-"),1)])}}}),Rt={class:"flex flex-wrap flex-row"},jt={key:0,class:"p-2"},ae=T({__name:"PatientImageView",props:{patient:Object},setup(e){const t=J([{title:"Face Photos",value:"face",items:et},{title:"Oral Photos",value:"oral",items:at},{title:"X-ray Films",value:"xray",items:nt}]);return(a,s)=>{const i=W,n=H,u=j,p=R,f=F;return o(),c(h,null,[s[0]||(s[0]=r("div",{class:"flex items-center"},[r("i",{class:"pi pi-camera text-primary m-4",style:{"font-size":"1.5rem"}}),r("span",{class:"font-bold text-2xl text-primary"},"Photo Information")],-1)),w(f,{value:"face"},{default:v(()=>[w(n,null,{default:v(()=>[(o(!0),c(h,null,I(t.value,l=>(o(),g(i,{key:l.title,value:l.value},{default:v(()=>[tt(m(l.title),1)]),_:2},1032,["value"]))),128))]),_:1}),w(p,null,{default:v(()=>[(o(!0),c(h,null,I(t.value,l=>(o(),g(u,{key:l.value,value:l.value},{default:v(()=>[r("div",Rt,[(o(!0),c(h,null,I(l.items,d=>{var x;return o(),c("div",{key:d==null?void 0:d.key},[(x=e.patient)!=null&&x[d==null?void 0:d.key]?(o(),c("div",jt,[w(Ft,{src:e.patient[d==null?void 0:d.key],title:d==null?void 0:d.title},null,8,["src","title"])])):y("",!0)])}),128))])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})],64)}}}),Ht={class:"flex items-center"},Wt={class:"font-bold text-2xl text-primary"},Ut={class:"flex flex-wrap"},Mt={class:"flex justify-start"},qt={class:"text-base text-slate-500"},Xt={class:"text-base font-bold ml-2"},ne=T({__name:"PatientAdvanceInfoView",props:{items:Array,title:String,icon:String,patient:Object},setup(e){const t=e;return(a,s)=>(o(),c(h,null,[r("div",Ht,[r("i",{class:N(["text-primary m-4",t.icon??""]),style:{"font-size":"1.5rem"}},null,2),r("span",Wt,m(t.title),1)]),r("div",Ut,[(o(!0),c(h,null,I(t.items,i=>{var n;return o(),c("div",{key:i.key,class:"w-1/2 p-4 min-w-fit"},[r("div",Mt,[r("span",qt,m(i.title),1),r("span",Xt,m((n=e.patient)==null?void 0:n[i.key]),1)])])}),128))])],64))}});export{ee as _,ne as a,ae as b,te as c,W as d,H as e,j as f,R as g,F as s};
