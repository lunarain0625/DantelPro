import{N as F,G as S,_ as E,A as $,C as R,D as V,E as D,F as L,H as h,I as O,J,K as M}from"./PatientAdvanceInfoView.vue_vue_type_script_setup_true_lang-CAvljP0w.js";import{s as C}from"./index-CGAh1eId.js";import{C as I,R as N,o as p,c as u,b as o,x as U,F as j,t as g,u as e,z as v,A as q,s as n,f as z,S as G,y as x,J as b}from"./index-Cu91fKQy.js";import{a as k,A as y}from"./authRequest-dVOg2jRK.js";import"./index-C1XrH7FH.js";import"./index-Db0TN5Da.js";import"./index-DIhKS-1l.js";import"./index-3jir5xNa.js";const H={key:0},K={class:"flex flex-row rounded-lg p-4 border-2 m-4"},W={class:"flex flex-col grow"},Y={class:"text-left text-primary font-bold text-2xl"},Q={class:"text-left"},X=I({__name:"PatientSolutionList",props:{patient:Object,solutions:Array},setup(d){const m=N(),r=i=>{m.push(`/model/${i.case_no}/${i.planId}`)};return(i,l)=>{var c;const s=C;return((c=d.solutions)==null?void 0:c.length)==0?(p(),u("div",H,l[0]||(l[0]=[o("span",{class:"font-bold text-2xl"},"No Plan Yet",-1)]))):(p(!0),u(j,{key:1},U(d.solutions,t=>(p(),u("div",{key:t==null?void 0:t.planId},[o("div",K,[o("div",W,[o("span",Y,g(t==null?void 0:t.planName),1),o("span",Q,"上传时间： "+g(t==null?void 0:t.createTime),1)]),e(s,{label:t==null?void 0:t.planStatus,onClick:a=>r(t)},null,8,["label","onClick"])])]))),128))}}}),Z={class:"flex flex-row"},ee={class:"flex items-center flex-row"},te={key:0},pe=I({__name:"info",setup(d){const m=N(),r=G(),i=()=>{console.log("goBack"),m.back()},l=v("info"),s=v(F),c=v([]);return q(async()=>{console.log("onMounted",r.params.case_no);const t=await k.get(y.CASE_INFO+`?case_no=${r.params.case_no}`);s.value=t.data.data,console.log("res patient",s.value);const{data:a}=await k.get(y.PLAN_INFO+`?case_no=${r.params.case_no}`);console.log("data",a.data),a.data&&(c.value=a.data)}),(t,a)=>{const w=C,f=h,T=O,_=J,P=M,A=S;return p(),u("div",Z,[e(A,{value:l.value,"onUpdate:value":a[0]||(a[0]=B=>l.value=B),class:"grow"},{default:n(()=>[o("div",ee,[e(w,{label:"Back",class:"mr-4",icon:"pi pi-chevron-left",severity:"secondary",onClick:i}),a[4]||(a[4]=o("span",{class:"text-2xl font-bold ml-4 mr-12"},"Case Details",-1)),e(T,{class:"grow"},{default:n(()=>[e(f,{value:"info"},{default:n(()=>a[1]||(a[1]=[x("Case Information")])),_:1}),e(f,{value:"plan"},{default:n(()=>a[2]||(a[2]=[x("Corrective Treatment Plan")])),_:1}),e(f,{value:"record"},{default:n(()=>a[3]||(a[3]=[x("Follow Up Records")])),_:1})]),_:1})]),e(P,null,{default:n(()=>[e(_,{value:"info"},{default:n(()=>[e(E,{patient:s.value},null,8,["patient"]),e($,{patient:s.value,items:b(R),icon:"pi pi-user",title:"Patient Information"},null,8,["patient","items"]),e($,{patient:s.value,items:b(V),icon:"pi pi-pencil",title:"Design Information"},null,8,["patient","items"]),e(D,{patient:s.value},null,8,["patient"]),e(L,{patient:s.value},null,8,["patient"])]),_:1}),e(_,{value:"plan"},{default:n(()=>[e(X,{patient:s.value,solutions:c.value},null,8,["patient","solutions"])]),_:1}),e(_,{value:"record"}),e(_,{value:"supply"})]),_:1})]),_:1},8,["value"]),l.value==="info"?(p(),u("div",te)):z("",!0)])}}});export{pe as default};
