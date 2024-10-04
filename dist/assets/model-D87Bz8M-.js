import{s as _}from"./index-C8ajdkz6.js";import{B as k,o as c,c as p,m as v,_ as b,b as o,u as r,D as m,z as f,d as y,f as S,w,G as x,F as $,A as R,C as B,R as z}from"./index-Dt15kLpH.js";import{s as I}from"./index-C1DoKZ4r.js";import{a as A,A as C}from"./authRequest-BpyrNxXt.js";var V=function(t){var e=t.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(e("skeleton.background"),`;
    border-radius: `).concat(e("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(e("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)},L={root:{position:"relative"}},N={root:function(t){var e=t.props;return["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]}},D=k.extend({name:"skeleton",theme:V,classes:N,inlineStyles:L}),P={name:"BaseSkeleton",extends:I,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:D,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},h={name:"Skeleton",extends:P,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function X(n,t,e,d,a,i){return c(),p("div",v({class:n.cx("root"),style:[n.sx("root"),i.containerStyle],"aria-hidden":"true"},n.ptmi("root")),null,16)}h.render=X;const F={},M={class:"rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900"},U={class:"flex mb-4"},j={class:"flex justify-between mt-4"};function q(n,t){const e=h;return c(),p("div",M,[o("div",U,[r(e,{shape:"circle",size:"4rem",class:"mr-2"}),o("div",null,[r(e,{width:"10rem",class:"mb-2"}),r(e,{width:"5rem",class:"mb-2"}),r(e,{height:".5rem"})])]),r(e,{width:"100%",height:"150px"}),o("div",j,[r(e,{width:"4rem",height:"2rem"}),r(e,{width:"4rem",height:"2rem"})])])}const E=b(F,[["render",q]]),G=["src"],H=m({__name:"ModelViewerIframe",props:{url:String},setup(n){const t=f(!1),e=a=>{console.log("iframe loaded",a),t.value=!0};return console.log("case_url",n.url),(a,i)=>(c(),p($,null,[t.value?S("",!0):(c(),y(E,{key:0})),w(o("iframe",{onLoad:e,class:"grow",src:n.url},null,40,G),[[x,t.value]])],64))}}),J={class:"flex flex-col"},K={class:"flex flex-row items-center mt-6 mr-6"},Y=m({__name:"model",setup(n){const t=z(),e=()=>{t.back()},d=t.currentRoute.value.params.case_no,a=t.currentRoute.value.params.planId,i=f("");return R(async()=>{const{data:u}=await A.get(C.PLAN_URL+`?case_no=${d}`);if(console.log("data",u.data),u.data){const s=u.data;console.log("cases",s);const l=s.find(g=>g.planId==a);console.log("c",l),l&&(i.value=l.detailUrl)}}),(u,s)=>{const l=_;return c(),p("div",J,[o("div",K,[s[0]||(s[0]=o("i",{class:"pi pi-file-check text-primary m-4",style:{"font-size":"1.5rem"}},null,-1)),s[1]||(s[1]=o("span",{class:"text-2xl font-bold text-left grow text-primary"},"Solution Details",-1)),r(l,{label:"Back",class:"mr-4",icon:"pi pi-chevron-left",severity:"secondary",onClick:e})]),r(H,{url:i.value,case_no:B(d)},null,8,["url","case_no"])])}}});export{Y as default};
