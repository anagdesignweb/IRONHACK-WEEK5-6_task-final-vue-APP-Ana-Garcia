import{d as c,c as m,a as t,w as n,v as l,n as r,e as i,b as p,f as v,g as _,F as f,r as w,o as g}from"./file_index.3c92475e.js";import{r as h}from"./file_index.8d78be7c.js";const y=t("h1",{class:"title is-3"},"Register",-1),b=t("p",{class:"description m-2"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit",-1),V={class:"field"},x={class:"control"},k={class:"field"},N={class:"control"},U={class:"field"},B={class:"control"},C={class:"field"},R={class:"control"},q=t("button",{class:"button is-block is-primary is-fullwidth is-medium",type:"submit"},"Register",-1),D=t("br",null,null,-1),T={__name:"Register",setup(F){const e=c({name:{content:"",error:!1},email:{content:"",error:!1},password1:{content:"",error:!1},password:{content:"",error:!1}}),d=async()=>{console.log("formulario enviado"),console.log(e.value),console.log(e.value.email.content),console.log(e.value.password.content),e.value.name.content.length===0?e.value.name.error=!0:e.value.name.error=!1;const a=async()=>{await h(e.value.email.content,e.value.password.content)};e.value.password1.content!==e.value.password.content?e.value.password.error=!0:a()};return(a,o)=>{const u=w("router-link");return g(),m(f,null,[y,b,t("form",{onSubmit:o[4]||(o[4]=_(s=>d(),["prevent"]))},[t("div",V,[t("div",x,[n(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.value.name.content=s),class:r(["input is-medium",{input:!0,"is-danger":e.value.name.error}]),type:"text",placeholder:"Nombre"},null,2),[[l,e.value.name.content]])])]),t("div",k,[t("div",N,[n(t("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>e.value.email.content=s),class:"input is-medium",type:"email",placeholder:"yourname@gmail.com"},null,512),[[l,e.value.email.content]])])]),t("div",U,[t("div",B,[n(t("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.value.password1.content=s),class:"input is-medium",type:"password",placeholder:"******",required:""},null,512),[[l,e.value.password1.content]])])]),t("div",C,[t("div",R,[n(t("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>e.value.password.content=s),class:r(["input is-medium",{input:!0,"is-danger":e.value.password.error}]),type:"password",placeholder:"******",required:""},null,2),[[l,e.value.password.content]])])]),q,D,t("p",null,[i("\xBFya estas registrado? "),p(u,{to:{name:"login"}},{default:v(()=>[i("login")]),_:1})])],32)],64)}}};export{T as default};