import{d as m,o as a,c,a as t,w as f,v as $,g as A,u as j,t as C,j as w,_ as B,n as z,p as M,k as N,l as b,m as k,q as O,b as y,e as V,f as U,F as h,s as x,r as D}from"./file_index.3c92475e.js";import{u as T}from"./file_auth.6e5b2a38.js";import{n as P,d as R,u as E,a as F,g as H}from"./file_index.8d78be7c.js";const L={class:"field"},q=t("label",{class:"label"},"Agrega una nueva tarea:",-1),G={class:"control"},J={class:"control"},K=t("div",{class:"control"},[t("button",{type:"submit",class:"mt-2 button is-primary"},"A\xF1adir")],-1),Q={__name:"EscribirPost",setup(l){const o=T(),s=m(""),e=m(""),u=()=>{console.log(s.value,e.value,o.user.name),P({user_id:o.user.name,title:s.value,description:e.value}),d()},d=()=>{s.value="",e.value=""};return(p,_)=>(a(),c("div",null,[t("form",{class:"box",onSubmit:_[2]||(_[2]=A(n=>u(),["prevent"]))},[t("div",L,[q,t("div",G,[f(t("input",{"onUpdate:modelValue":_[0]||(_[0]=n=>s.value=n),class:"input",type:"text",placeholder:"Tarea"},null,512),[[$,s.value]])])]),t("div",J,[f(t("textarea",{"onUpdate:modelValue":_[1]||(_[1]=n=>e.value=n),class:"textarea",placeholder:"Escribe un post"},null,512),[[$,e.value]])]),K],32)]))}},W={class:"container m-3"},X={class:"is-flex is-justify-content-space-between"},Y={class:"mr-4"},Z={class:"buttons"},tt=t("strong",null,"Cerrar sesion",-1),st=[tt],et={__name:"Navbar",setup(l){j();const o=T();return(s,e)=>(a(),c("div",W,[t("nav",X,[t("div",null,[t("div",null,[t("div",Y,"Hola, "+C(w(o).user.email),1)])]),t("div",null,[t("div",Z,[t("button",{onClick:e[0]||(e[0]=u=>w(o).logout()),class:"button is-secundary is-danger"},st)])])])]))}};const I=l=>(M("data-v-5a1cf73f"),l=l(),N(),l),ot={key:0,class:"card my-4"},at={class:"card-content"},nt={class:"title my-2"},lt={class:"has-text-weight-bold"},it={class:"subtitle my-5"},rt={class:"card-footer"},ct={key:1,class:"card my-4"},ut={class:"card-content field"},dt=I(()=>t("label",{class:"label"},"Modifica la tarea:",-1)),_t={class:"control field"},pt=["placeholder"],mt={class:"control"},vt=["placeholder"],bt=I(()=>t("button",{class:"card-footer-item button is-primary is-light"},"modificar",-1)),kt={__name:"VisualizarPost",props:{task:Object},emits:["borrar","cambiar","completada"],setup(l,{emit:o}){const s=l,e=m(),u=m(),d=m(!0),p=async i=>{alert("evento de props BORRAR");const r=await R(i);return console.log(i),r},_=async i=>{alert("evento de props"),i=!i,await E(s.task.id,i),console.log(i)},n=async i=>{console.log(i),g(),console.log(i),await F(i,{title:e.value,description:u.value})},g=()=>{d.value=!d.value};return(i,r)=>(a(),c("div",null,[d.value?(a(),c("div",ot,[t("div",at,[t("p",nt,[t("header",{class:z(s.task.completed?"has-text-danger":"")},[t("div",lt,C(s.task.title),1)],2)]),t("p",it,C(s.task.description),1)]),t("footer",rt,[t("button",{class:"card-footer-item button is-success is-light",onClick:r[0]||(r[0]=v=>_(s.task.completed))},"completada"),t("button",{class:"card-footer-item button is-warning is-light",onClick:g},"modificar"),t("button",{class:"card-footer-item button is-danger is-light",onClick:r[1]||(r[1]=v=>p(s.task.id))},"Borrar")])])):(a(),c("div",ct,[t("form",{onSubmit:r[4]||(r[4]=A(v=>n(s.task.id),["prevent"]))},[t("div",ut,[dt,t("div",_t,[f(t("input",{class:"input",type:"text",placeholder:s.task.title,"onUpdate:modelValue":r[2]||(r[2]=v=>e.value=v)},null,8,pt),[[$,e.value]])]),t("div",mt,[f(t("textarea",{class:"textarea",placeholder:s.task.description,"onUpdate:modelValue":r[3]||(r[3]=v=>u.value=v)},null,8,vt),[[$,u.value]])])]),t("footer",{class:"card-footer"},[t("button",{class:"card-footer-item button is-white",onClick:g},"atras"),bt])],32)]))]))}},S=B(kt,[["__scopeId","data-v-5a1cf73f"]]),ht={__name:"TodoTask",props:{tarea:Object},setup(l){const o=l;return(s,e)=>o.tarea.completed?k("",!0):(a(),b(S,{key:0,task:o.tarea},null,8,["task"]))}},ft={__name:"CompletedTaskComponent",props:{tarea:Object},setup(l){const o=l;return console.log(o.tarea.completed),(s,e)=>o.tarea.completed?(a(),b(S,{key:0,task:o.tarea},null,8,["task"])):k("",!0)}},$t={__name:"AllTasksComponent",props:{tarea:Object},setup(l){const o=l;return(s,e)=>(a(),b(S,{task:o.tarea},null,8,["task"]))}},gt={class:"container"},yt={key:0,class:"message is-danger"},xt={class:"message-body"},Ct={key:1},wt={class:"section block container"},Tt={class:"section container"},St=t("div",{class:"content is-normal"},[t("h3",null,"Tasks")],-1),Vt={class:"block backg-color-yellow p-4"},At={class:"buttons is-centered"},It={class:"block"},Mt={__name:"Home",setup(l){const o=T(),s=m([]);m(!0);const e=m("all"),u=d=>{e.value=d};return O(async()=>{const d=await H();s.value=await d.data}),(d,p)=>{const _=D("router-link");return a(),c(h,null,[y(et),t("div",null,[t("div",gt,[w(o).isAuth?(a(),c("div",Ct,[t("div",wt,[y(Q)]),t("div",Tt,[St,t("div",Vt,[t("div",At,[t("button",{class:"button is-light is-primary mx-5",onClick:p[0]||(p[0]=n=>u("all"))},"All"),t("button",{class:"button is-light is-primary mx-5",onClick:p[1]||(p[1]=n=>u("to-do"))},"to-do"),t("button",{class:"button is-light is-primary mx-5",onClick:p[2]||(p[2]=n=>u("completadas"))},"Completed")])]),t("div",It,[e.value=="all"?(a(!0),c(h,{key:0},x(s.value,n=>(a(),b($t,{tarea:n},null,8,["tarea"]))),256)):k("",!0),e.value=="to-do"?(a(!0),c(h,{key:1},x(s.value,n=>(a(),b(ht,{tarea:n},null,8,["tarea"]))),256)):k("",!0),e.value=="completadas"?(a(!0),c(h,{key:2},x(s.value,n=>(a(),b(ft,{tarea:n},null,8,["tarea"]))),256)):k("",!0)])])])):(a(),c("article",yt,[t("div",xt,[V(" Debes iniciar sesion para utilizar la aplicacion "),y(_,{to:{name:"login"}},{default:U(()=>[V(" Ir a Login ")]),_:1})])]))])])],64)}}};export{Mt as default};