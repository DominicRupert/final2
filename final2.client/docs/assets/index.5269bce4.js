import{r as ee,c as v,a as k,o as c,b as d,d as o,e as x,F as M,S as N,f as te,g as P,w as y,v as V,h as j,u as T,M as S,i as q,t as f,j as oe,k as se,l as F,m as ae,n as ne,p as B,q as K,s as z,x as I,y as O,z as A,A as H,B as re,C as ie}from"./vendor.4be605e7.js";const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}};le();const i=ee({user:{},account:{},keeps:null,activeKeep:null,myVaults:null,activeProfile:null,activeUsersKeeps:null,activeUsersVaults:null,activeVaultKeeps:null,activeVault:null});var b=(a,e)=>{for(const[s,t]of e)a[s]=t;return a};const ce={name:"App",setup(){return{appState:v(()=>i)}}};function de(a,e,s,t,n,l){const r=k("Navbar"),u=k("router-view"),w=k("ModalLg");return c(),d(M,null,[o("header",null,[x(r)]),o("main",null,[x(u)]),x(w)],64)}var ue=b(ce,[["render",de]]);class p{static async confirm(e="Are you sure?",s="You won't be able to revert this!",t="warning",n="Yes, delete it!"){try{return!!(await N.fire({title:e,text:s,icon:t,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:n})).isConfirmed}catch{return!1}}static toast(e="Warning!",s="warning",t="top-end",n=3e3,l=!0){N.fire({title:e,icon:s,position:t,timer:n,timerProgressBar:l,toast:!0,showConfirmButton:!1})}static error(e){var s;if(e.isAxiosError){const{response:t}=e;this.toast(((s=t.data.error)==null?void 0:s.message)||t.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const Y=window.location.origin.includes("localhost"),W=Y?"https://localhost:5001":"",_e="dev-mvphoyti.us.auth0.com",me="https://DomDev.com",pe="W2aMF5UM64pgkw5jfATYDQT4GEU1ZPNB",_=te.create({baseURL:W,timeout:8e3});function $(a,e){if(Y)console[a](`[${a}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(a){case"log":case"assert":return}console[a](`[${a}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const m={log(){$("log",arguments)},error(){$("error",arguments)},warn(){$("warn",arguments)},assert(){$("assert",arguments)},trace(){$("trace",arguments)}};class ve{async getAll(){const e=await _.get("api/keeps");i.keeps=e.data}async getKeep(e){const s=await _.get(`api/keeps/${e}`);i.activeKeep=s.data}async createKeep(e){const s=await _.post("api/keeps",e);m.log("created",s.data),i.activeKeep=s.data}async delete(e){const s=await _.delete(`api/keeps/${e}`);m.log("deleted",s.data);const t=i.activeVaultKeeps.findIndex(n=>n.id===e);i.activeVaultKeeps.splice(t,1)}}const L=new ve,ge={setup(){const a=P({});return{editable:a,async resetForm(){p.confirm()&&(a.value={})},async createKeep(){try{await L.createKeep(a.value),a.value={},p.toast("Keep Created!","success")}catch(e){console.error("[COULD NOT CREATE KEEP]",e.message),p.toast(e.message,"error")}}}}},fe={class:"mb-3"},he=o("label",{for:"name",class:"form-label"},"Name:",-1),be={class:"mb-3"},ye=o("label",{for:"description",class:"form-label"},"Description:",-1),we={class:"mb-3"},ke=o("label",{for:"img",class:"form-label"},"Image URL:",-1),xe={class:"d-flex justify-content-around"},Ve=o("button",{class:"btn bg-success darken-20 w-25",type:"submit"}," Submit ",-1);function $e(a,e,s,t,n,l){return c(),d("form",{onSubmit:e[4]||(e[4]=j(r=>t.createKeep(),["prevent"])),id:"createKeepForm"},[o("div",fe,[he,y(o("input",{type:"text",name:"name",id:"name",class:"form-control",placeholder:"Enter the keep's name...","onUpdate:modelValue":e[0]||(e[0]=r=>t.editable.name=r),required:""},null,512),[[V,t.editable.name]])]),o("div",be,[ye,y(o("textarea",{class:"form-control",name:"description",id:"description",rows:"3",placeholder:"Explain what this keep is about...","onUpdate:modelValue":e[1]||(e[1]=r=>t.editable.description=r),required:""},null,512),[[V,t.editable.description]])]),o("div",we,[ke,y(o("input",{type:"text",name:"img",id:"img",class:"form-control",placeholder:"Enter the URL for the cover image of the keep...","onUpdate:modelValue":e[2]||(e[2]=r=>t.editable.img=r),required:""},null,512),[[V,t.editable.img]])]),o("div",xe,[o("button",{class:"btn bg-danger darken-10 w-25",type:"button",onClick:e[3]||(e[3]=r=>t.resetForm())}," Reset "),Ve])],32)}var Ee=b(ge,[["render",$e]]),Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ee});class Se{async getMyVaults(){const e=await _.get("account/vaults");m.log("getMyVaults",e.data),i.myVaults=e.data}async create(e){const s=await _.post("api/vaults",e);m.log("created",s.data),i.activeUsersVaults.push(s.data)}async getVault(e){const s=await _.get(`api/vaults/${e}`);m.log("getVault",s.data),i.activeVault=s.data}async delete(e){const s=await _.delete(`api/vaults/${e}`);m.log("deleted",s.data);const t=i.myVaults.findIndex(n=>n.id===e);i.myVaults.splice(t,1)}}const Ae=new Se,Ce={setup(){T();const a=P({});return{editable:a,async createVault(){try{await Ae.create(a.value),p.toast("Vault created!","success"),a.value={},S.getOrCreateInstance(document.getElementById("createVaultModal")).hide()}catch(e){console.error("[COULD_NOT_CREATE_VAULT]",e.message),p.toast(e.message,"error")}}}}},Pe={class:"mb-3"},Ke=o("label",{for:"name",class:"form-label ms-1"},"Name:",-1),Ie={class:"mb-3"},Oe=o("label",{for:"description",class:"form-label"},"Description",-1),Le={class:"mb-3 d-flex justify-content-between align-items-end"},Ue={class:"w-50 pe-3"},De=o("label",{for:"",class:"form-label"},"Is this vault private?",-1),Re=o("option",{selected:"",value:!1},"No",-1),Me=o("option",{value:!0},"Yes",-1),Ne=[Re,Me],je={class:"d-flex w-50 h-50 justify-content-between"},qe=o("button",{class:"btn bg-success darken-20 w-50 ms-2",type:"submit"}," Submit ",-1);function Fe(a,e,s,t,n,l){return c(),d("form",{onSubmit:e[4]||(e[4]=j(r=>t.createVault(),["prevent"])),id:"createVaultForm"},[o("div",Pe,[Ke,y(o("input",{type:"text",name:"name",id:"name",class:"form-control",placeholder:"Enter the vaults name...","onUpdate:modelValue":e[0]||(e[0]=r=>t.editable.name=r),required:""},null,512),[[V,t.editable.name]])]),o("div",Ie,[Oe,y(o("input",{type:"text",name:"description",id:"description",class:"form-control",placeholder:"What are you making this vault for?","onUpdate:modelValue":e[1]||(e[1]=r=>t.editable.description=r),required:""},null,512),[[V,t.editable.description]])]),o("div",Le,[o("div",Ue,[De,y(o("select",{class:"form-control w-100",name:"isPrivate",id:"isPrivate","onUpdate:modelValue":e[2]||(e[2]=r=>t.editable.isPrivate=r),required:""},Ne,512),[[q,t.editable.isPrivate]])]),o("div",je,[o("button",{class:"btn bg-danger darken-10 w-50 me-2",type:"button",onClick:e[3]||(e[3]=r=>a.resetForm())}," Reset "),qe])])],32)}var Be=b(Ce,[["render",Fe]]),ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be});const He={props:{keep:{type:Object,required:!0}},setup(a){return{async openLgModal(){await L.getKeep(a.keep.id),S.getOrCreateInstance(document.getElementById("modalLg")).toggle()}}}},Ye=["src"],We={class:"card-img-overlay text-light text-shadow d-flex align-items-end"},Ge={class:"fw-light"};function Qe(a,e,s,t,n,l){return c(),d("div",{class:"card my-2 selectable elevation-5 w-100",onClick:e[0]||(e[0]=(...r)=>t.openLgModal&&t.openLgModal(...r))},[o("img",{src:s.keep.img,alt:"",class:"card-img"},null,8,Ye),o("div",We,[o("h1",Ge,f(s.keep.name),1)])])}var Ze=b(He,[["render",Qe]]),Je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze});const Xe="modulepreload",G={},et="/",E=function(e,s){return!s||s.length===0?e():Promise.all(s.map(t=>{if(t=`${et}${t}`,t in G)return;G[t]=!0;const n=t.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${l}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":Xe,n||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),n)return new Promise((u,w)=>{r.addEventListener("load",u),r.addEventListener("error",w)})})).then(()=>e())};function tt(a){switch(a){case"./pages/AboutPage.vue":return E(()=>import("./AboutPage.a976e6a3.js"),[]);case"./pages/AccountPage.vue":return E(()=>import("./AccountPage.db958771.js"),["assets/AccountPage.db958771.js","assets/AccountPage.1d38451d.css","assets/vendor.4be605e7.js"]);case"./pages/HomePage.vue":return E(()=>import("./HomePage.d0ba7f9d.js"),["assets/HomePage.d0ba7f9d.js","assets/HomePage.bb79b9d1.css","assets/vendor.4be605e7.js"]);case"./pages/ProfilePage.vue":return E(()=>import("./ProfilePage.8a480986.js"),["assets/ProfilePage.8a480986.js","assets/vendor.4be605e7.js"]);case"./pages/VaultPage.vue":return E(()=>import("./VaultPage.51f00d72.js"),["assets/VaultPage.51f00d72.js","assets/vendor.4be605e7.js"]);default:return new Promise(function(e,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+a)))})}}function C(a){return()=>tt(`./pages/${a}.vue`)}const ot=[{path:"/",name:"Home",component:C("HomePage")},{path:"/profiles/:id",name:"Profile",component:C("ProfilePage"),beforeEnter:F},{path:"/vaults/:id",name:"Vault",component:C("VaultPage"),beforeEnter:F},{path:"/account",name:"Account",component:C("AccountPage"),beforeEnter:ae}],Q=oe({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:se(),routes:ot});class st{async getAccount(){try{const e=await _.get("/account");i.account=e.data}catch(e){m.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const at=new st,nt={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class rt{constructor(e=!1,s=W){}on(e,s){var t;return(t=this.socket)==null||t.on(e,s.bind(this)),this}onConnected(e){m.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){m.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var s;(s=this.socket)==null||s.emit(nt.authenticate,e)}onError(e){m.error("[SOCKET_ERROR]",e)}enqueue(e,s){m.log("[ENQUEING_ACTION]",{action:e,payload:s}),this.queue.push({action:e,payload:s})}playback(){m.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(s=>{this.emit(s.action,s.payload)})}emit(e,s=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,s);if(!this.connected)return this.enqueue(e,s);this.socket.emit(e,s)}}class it extends rt{constructor(){super();this.on("error",this.onError)}onError(e){p.toast(e.message,"error")}}const Z=new it,g=ne({domain:_e,clientId:pe,audience:me,useRefreshTokens:!0,onRedirectCallback:a=>{Q.push(a&&a.targetUrl?a.targetUrl:window.location.pathname)}});g.on(g.AUTH_EVENTS.AUTHENTICATED,async function(){_.defaults.headers.authorization=g.bearer,_.interceptors.request.use(lt),i.user=g.user,await at.getAccount(),Z.authenticate(g.bearer)});async function lt(a){if(!g.isAuthenticated)return a;const e=g.identity.exp*1e3,s=e<Date.now(),t=e<Date.now()+1e3*60*60*12;return s?await g.loginWithPopup():t&&(await g.getTokenSilently(),_.defaults.headers.authorization=g.bearer,Z.authenticate(g.bearer)),a}const ct={setup(){const a=T(),e=B();return{user:v(()=>i.user),account:v(()=>i.account),async login(){g.loginWithPopup()},async logout(){g.logout({returnTo:window.location.origin})},goToProfilePage(){e.params.id!==this.account.id&&a.push({name:"Profile",params:{id:this.account.id}})}}}},J=a=>(I("data-v-71423292"),a=a(),O(),a),dt={class:"navbar-text"},ut={key:1,class:"dropdown my-2 my-lg-0"},_t={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},mt={key:0},pt=["src"],vt={class:"mx-3 text-success lighten-30"},gt={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},ft=J(()=>o("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),ht=J(()=>o("i",{class:"mdi mdi-logout"},null,-1)),bt=A(" logout "),yt=[ht,bt];function wt(a,e,s,t,n,l){const r=k("router-link");return c(),d("span",dt,[t.user.isAuthenticated?(c(),d("div",ut,[o("div",_t,[t.account.picture?(c(),d("div",mt,[o("img",{src:t.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,pt),o("span",vt,f(t.account.name),1)])):K("",!0)]),o("div",gt,[x(r,{to:{name:"Account"}},{default:z(()=>[ft]),_:1}),o("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...u)=>t.logout&&t.logout(...u))},yt)])])):(c(),d("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...u)=>t.login&&t.login(...u))}," Login "))])}var kt=b(ct,[["render",wt],["__scopeId","data-v-71423292"]]),xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt});const Vt={setup(){return{}}},$t={class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Et={class:"modal-dialog modal-dialog-centered",role:"document"},Tt={class:"modal-content"},St={class:"modal-header"},At={class:"modal-title"},Ct=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Pt={class:"modal-body"};function Kt(a,e,s,t,n,l){return c(),d("div",$t,[o("div",Et,[o("div",Tt,[o("div",St,[o("h5",At,[H(a.$slots,"title")]),Ct]),o("div",Pt,[H(a.$slots,"body")])])])])}var It=b(Vt,[["render",Kt]]),Ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:It});class Lt{async addKeep(e){const s=await _.post("api/vaultkeeps",e);m.log("created",s.data)}async getVaultKeeps(e){const s=await _.get("api/vaults/"+e+"/keeps");m.log("getVaultKeeps",s.data),i.activeVaultKeeps=s.data}async deleteFromVault(e){const s=await _.delete("api/vaultkeeps/"+e);m.log("deleted",s.data);const t=i.activeVaultKeeps.findIndex(n=>n.id===e);i.activeVaultKeeps.splice(t,1)}}const U=new Lt,Ut={setup(){const a=T(),e=B(),s=P({});return{route:e,vaultIdRef:s,user:v(()=>i.user),activeVault:v(()=>i.activeVault),account:v(()=>i.account),keep:v(()=>i.activeKeep),myVaults:v(()=>i.myVaults),availableVaults:v(()=>{i.myVaults}),account:v(()=>i.account),goToProfile(t){S.getOrCreateInstance(document.getElementById("modalLg")).hide(),a.push({name:"Profile",params:{id:t}})},async addToVault(){let t={vaultId:s.value.vaultId,keepId:this.keep.id};try{await U.addKeep(t),p.toast("Added to vault!","success"),s.value={}}catch(n){console.error("[COULD_NOT_ADD_TO_VAULT]",n.message),p.toast("Could not add to vault. (Is this keep already in the vault you selected?)","error"),vault.value.vaultId={}}},async removeFromVault(){try{if(await p.confirm("Are you sure?","Would you like to remove this keep from your vault?","warning","Yes, remove it!")){const t=i.activeVaultKeeps.find(n=>n.id===i.activeKeep.id);S.getOrCreateInstance(document.getElementById("modalLg")).hide(),await U.deleteFromVault(t.vaultKeepId)}}catch(t){console.error("[COULD NOT REMOVE KEEP]",t.message),p.toast(t.message,"error")}},async deleteKeep(t){try{await p.confirm()&&(await L.delete(t),p.toast("Keep deleted from Keepr"))}catch(n){console.error("[COULD_NOT_DELETE_KEEP]",n.message),p.toast(n.message,"error")}}}}},Dt={key:0,class:"modal fade",id:"modalLg",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Rt={class:"modal-dialog modal-lg",role:"document"},Mt={class:"modal-content"},Nt={class:"modal-body"},jt={class:"row"},qt={class:"col-6"},Ft=["src"],Bt={class:"col-6 text-center py-2 d-flex flex-column"},zt={class:"row"},Ht={class:"col-6 d-flex justify-content-end"},Yt={title:"Views",class:"text-secondary"},Wt=o("i",{class:"mdi mdi-eye text-primary"},null,-1),Gt={class:"col-6 d-flex"},Qt={title:"Saved in vaults",class:"text-secondary"},Zt=o("i",{class:"mdi mdi-safe text-primary"},null,-1),Jt={class:"row"},Xt={class:"amatic my-3"},eo={class:"col-12"},to={class:"comfortaa text-start"},oo=o("hr",{class:"mx-4"},null,-1),so={class:"row mt-auto"},ao={key:0,class:"col-5 text-start"},no={key:0,class:""},ro={key:1,class:"btn btn-outline-success w-100 disabled"},io=o("option",{disabled:"",selected:""},"Add to vault",-1),lo=["value"],co={key:1,class:"col-5 text-start"},uo={key:2,class:"col-5"},_o={key:3,class:"col-1 d-flex align-items-end justify-content-center"},mo={class:"mb-0"},po={key:4,class:"col-1"},vo={class:"col-6 d-flex align-items-end"},go=["src"];function fo(a,e,s,t,n,l){var r,u,w,R;return t.keep?(c(),d("div",Dt,[o("div",Rt,[o("div",Mt,[o("div",Nt,[o("div",jt,[o("div",qt,[o("img",{src:t.keep.img,alt:"",class:"img-fluid rounded"},null,8,Ft)]),o("div",Bt,[o("div",zt,[o("div",Ht,[o("h5",Yt,[Wt,A(" "+f(t.keep.views),1)])]),o("div",Gt,[o("h5",Qt,[Zt,A(" "+f(t.keep.kept),1)])])]),o("div",Jt,[o("h1",Xt,f(t.keep.name),1),o("div",eo,[o("p",to,f(t.keep.description),1),oo])]),o("div",so,[t.route.name==="Home"||t.route.name==="Profile"?(c(),d("div",ao,[t.user.isAuthenticated?(c(),d("div",no,[t.vaultIdRef.vaultId?(c(),d("button",{key:0,class:"btn btn-outline-success w-100",onClick:e[0]||(e[0]=h=>t.addToVault())}," Add to vault ")):(c(),d("button",ro," Add to vault ")),y(o("select",{class:"form-control text-primary",name:"vaultSelect",id:"vaultSelect","onUpdate:modelValue":e[1]||(e[1]=h=>t.vaultIdRef.vaultId=h)},[io,(c(!0),d(M,null,re(t.myVaults,h=>(c(),d("option",{key:h.id,value:h.id},f(h.name),9,lo))),128))],512),[[q,t.vaultIdRef.vaultId]])])):K("",!0)])):((r=t.activeVault)==null?void 0:r.creatorId)===((u=t.account)==null?void 0:u.id)&&t.route.name!=="Profile"?(c(),d("div",co,[o("button",{class:"btn btn-outline-secondary btn-sm h-75",onClick:e[2]||(e[2]=(...h)=>t.removeFromVault&&t.removeFromVault(...h))}," Remove from vault ")])):(c(),d("div",uo)),t.keep.creatorId===t.account.id&&t.route.name!=="Vault"?(c(),d("div",_o,[o("h3",mo,[o("i",{class:"mdi mdi-delete-outline text-secondary darken-10 selectable",onClick:e[3]||(e[3]=h=>t.deleteKeep(t.keep.id)),title:"Delete this keep from Keepr"})])])):(c(),d("div",po)),o("div",vo,[o("p",{class:"selectable rounded mb-0",onClick:e[4]||(e[4]=h=>t.goToProfile(t.keep.creatorId))},[o("img",{src:(w=t.keep.creator)==null?void 0:w.picture,class:"rounded",width:"40",height:"40"},null,8,go),A(" "+f((R=t.keep.creator)==null?void 0:R.name),1)])])])])])])])])])):K("",!0)}var ho=b(Ut,[["render",fo]]),bo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ho});const yo={setup(){return{}}},D=a=>(I("data-v-2b94cd72"),a=a(),O(),a),wo={class:"navbar navbar-expand-lg navbar-dark bg-dark px-3"},ko=D(()=>o("div",{class:"d-flex flex-column align-items-center"},null,-1)),xo=D(()=>o("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"navbar-toggler-icon"})],-1)),Vo={class:"collapse navbar-collapse",id:"navbarText"},$o=D(()=>o("ul",{class:"navbar-nav me-auto"},[o("li")],-1));function Eo(a,e,s,t,n,l){const r=k("router-link"),u=k("Login");return c(),d("nav",wo,[x(r,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:z(()=>[ko]),_:1}),xo,o("div",Vo,[$o,x(u)])])}var To=b(yo,[["render",Eo],["__scopeId","data-v-2b94cd72"]]),So=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:To});const Ao={setup(){return{activeUser:v(()=>i.activeProfile),activeUsersKeeps:v(()=>i.activeUsersKeeps),activeUsersVaults:v(()=>i.activeUsersVaults)}}},Co={class:"col-12 mt-4"},Po={class:"row"},Ko={class:"col-12 text-start"},Io={class:"d-flex"},Oo=["src"],Lo={class:"row"},Uo={class:"col-12 text-start"},Do={class:"comfortaa pt-2"},Ro={class:"fs-5 comfortaa mb-1"},Mo={class:"fs-5 comfortaa"};function No(a,e,s,t,n,l){var r,u;return c(),d("div",Co,[o("div",Po,[o("div",Ko,[o("div",Io,[o("img",{src:t.activeUser.picture,class:"rounded me-4 pp"},null,8,Oo),o("div",Lo,[o("div",Uo,[o("h3",Do,f(t.activeUser.name),1),o("p",Ro," Keeps: "+f((r=t.activeUsersKeeps)==null?void 0:r.length),1),o("p",Mo," Vaults: "+f((u=t.activeUsersVaults)==null?void 0:u.length),1)])])])])])])}var jo=b(Ao,[["render",No],["__scopeId","data-v-58eeaa3a"]]),qo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jo});const Fo={props:{vault:{type:Object,required:!0}},setup(a){const e=T();return{async goToVault(){try{await U.getVaultKeeps(a.vault.id),e.push({name:"Vault",params:{id:a.vault.id}})}catch(s){console.error("[COULD NOT LOAD VAULT]",s.message),p.toast(s.message,"error")}}}}},Bo=a=>(I("data-v-321ddaf2"),a=a(),O(),a),zo={class:"col-md-3 col-6 d-flex mb-4"},Ho={class:"card-title p-2 d-flex align-items-end justify-content-center"},Yo={class:"comfortaa"},Wo=Bo(()=>o("p",{class:"fs-5 comfortaa"},null,-1));function Go(a,e,s,t,n,l){return c(),d("div",zo,[o("div",{class:"card bg-primary lighten-30 w-100 ratio ratio-1x1 selectable",onClick:e[0]||(e[0]=r=>t.goToVault())},[o("div",Ho,[o("h4",Yo,f(s.vault.name),1),Wo])])])}var Qo=b(Fo,[["render",Go],["__scopeId","data-v-321ddaf2"]]),Zo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qo});function Jo(a){Object.entries({"./components/CreateKeepForm.vue":Te,"./components/CreateVaultForm.vue":ze,"./components/Keep.vue":Je,"./components/Login.vue":xt,"./components/Modal.vue":Ot,"./components/ModalLg.vue":bo,"./components/Navbar.vue":So,"./components/Profile.vue":qo,"./components/Vault.vue":Zo}).forEach(([s,t])=>{const n=t.name||s.substr(s.lastIndexOf("/")+1).replace(/\.\w+$/,"");a.component(n,t.default)})}const X=ie(ue);Jo(X);X.use(Q).mount("#app");export{i as A,p as P,b as _,_ as a,U as b,L as k,Ae as v};
