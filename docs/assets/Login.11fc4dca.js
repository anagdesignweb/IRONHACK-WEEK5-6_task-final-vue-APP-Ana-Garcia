import{d as r,r as u,o as _,c as p,b as e,w as m,e as n,v as a,f as i,a as v,g as h}from"./index.20467aeb.js";import{l as f}from"./index.df4a61b1.js";const g={class:"hero is-fullheight backg-color-pink"},b={class:"hero-body"},w={class:"container"},k={class:"columns is-centered"},x={class:"column is-5-tablet is-4-desktop is-3-widescreen"},y=e("div",{class:"field has-text-centered"},[e("h1",null,"Login")],-1),V={class:"field"},B=e("label",{class:"label"},"Email",-1),L={class:"control"},N={class:"field"},C=e("label",{class:"label"},"Password",-1),E={class:"control"},M=e("div",{class:"field"},[e("button",{class:"button is-inline-block is-success",type:"submit"},"Login")],-1),S={class:"field"},A={__name:"Login",setup(T){const s=r({email:{content:"",error:!1},password:{content:"",error:!1}}),c=async()=>{console.log("login enviado"),console.log(s.value),console.log(s.value.email.content),console.log(s.value.password.content);const l=await f(s.value.email.content,s.value.password.content);console.log(l)};return(l,o)=>{const d=u("router-link");return _(),p("section",g,[e("div",b,[e("div",w,[e("div",k,[e("div",x,[e("form",{class:"box",onSubmit:o[2]||(o[2]=m(t=>c(),["prevent"]))},[y,e("div",V,[B,e("div",L,[n(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.value.email.content=t),class:"input",type:"email",placeholder:"yourname@gmail.com"},null,512),[[a,s.value.email.content]])])]),e("div",N,[C,e("div",E,[n(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.value.password.content=t),class:"input",type:"password",placeholder:"******",required:""},null,512),[[a,s.value.password.content]])])]),M,e("div",S,[e("p",null,[i("\xBFAun no estas registrado? "),v(d,{to:{name:"register"}},{default:h(()=>[i("Register ")]),_:1})])])],32)])])])])])}}};export{A as default};
