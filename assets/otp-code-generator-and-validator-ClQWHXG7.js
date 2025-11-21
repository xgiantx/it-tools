import{d as z,b as C,cF as oe,I as t,b6 as Y,bv as F,bu as J,bt as K,bw as Z,aD as R,D as N,E as m,H as B,J as ie,K as Q,cG as ne,O as L,P as se,a8 as ae,f as U,o as V,g as $,e as le,v as q,a5 as ce,m as b,aY as ee,j as f,w as k,k as te,cH as H,i as O,t as W,cI as de,a4 as ue,ae as pe,n as ge,y as fe,x as he,F as me,B as ve}from"./index-DtXg1mwU.js";import{u as ye,_ as be}from"./useQRCode-CZYf8Kjj.js";import{c as T}from"./index-CV0rgzey.js";import{c as xe}from"./token-generator.service-BJkSsBDQ.js";import{_ as D}from"./InputCopyable.vue_vue_type_script_setup_true_lang-CcwH8Ap-.js";import{c as Ce}from"./computedRefreshable-DTGd8k8y.js";import"./is-browser-DqcmxZSF.js";import"./use-locale-1DqEhDbw.js";import"./browser-Cv5D50Oq.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./___vite-browser-external_commonjs-proxy-DqQqjIva.js";import"./__vite-browser-external-Dk_eJUSQ.js";const $e={success:t(Z,null),error:t(K,null),warning:t(J,null),info:t(F,null)},Se=z({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:o}){const d=C(()=>{const r="gradient",{fillColor:i}=e;return typeof i=="object"?`${r}-${oe(JSON.stringify(i))}`:r});function u(r,i,s,c){const{gapDegree:v,viewBoxWidth:g,strokeWidth:h}=e,n=50,y=0,p=n,a=0,S=2*n,_=50+h/2,x=`M ${_},${_} m ${y},${p}
      a ${n},${n} 0 1 1 ${a},${-S}
      a ${n},${n} 0 1 1 ${-a},${S}`,w=Math.PI*2*n,P={stroke:c==="rail"?s:typeof e.fillColor=="object"?`url(#${d.value})`:s,strokeDasharray:`${Math.min(r,100)/100*(w-v)}px ${g*8}px`,strokeDashoffset:`-${v/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:x,pathStyle:P}}const l=()=>{const r=typeof e.fillColor=="object",i=r?e.fillColor.stops[0]:"",s=r?e.fillColor.stops[1]:"";return r&&t("defs",null,t("linearGradient",{id:d.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},t("stop",{offset:"0%","stop-color":i}),t("stop",{offset:"100%","stop-color":s})))};return()=>{const{fillColor:r,railColor:i,strokeWidth:s,offsetDegree:c,status:v,percentage:g,showIndicator:h,indicatorTextColor:n,unit:y,gapOffsetDegree:p,clsPrefix:a}=e,{pathString:S,pathStyle:_}=u(100,0,i,"rail"),{pathString:x,pathStyle:w}=u(g,c,r,"fill"),P=100+s;return t("div",{class:`${a}-progress-content`,role:"none"},t("div",{class:`${a}-progress-graph`,"aria-hidden":!0},t("div",{class:`${a}-progress-graph-circle`,style:{transform:p?`rotate(${p}deg)`:void 0}},t("svg",{viewBox:`0 0 ${P} ${P}`},l(),t("g",null,t("path",{class:`${a}-progress-graph-circle-rail`,d:S,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:_})),t("g",null,t("path",{class:[`${a}-progress-graph-circle-fill`,g===0&&`${a}-progress-graph-circle-fill--empty`],d:x,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:w}))))),h?t("div",null,o.default?t("div",{class:`${a}-progress-custom-content`,role:"none"},o.default()):v!=="default"?t("div",{class:`${a}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:a},{default:()=>$e[v]})):t("div",{class:`${a}-progress-text`,style:{color:n},role:"none"},t("span",{class:`${a}-progress-text__percentage`},g),t("span",{class:`${a}-progress-text__unit`},y))):null)}}}),_e={success:t(Z,null),error:t(K,null),warning:t(J,null),info:t(F,null)},we=z({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:o}){const d=C(()=>R(e.height)),u=C(()=>{var i,s;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(i=e.fillColor)===null||i===void 0?void 0:i.stops[0]} , ${(s=e.fillColor)===null||s===void 0?void 0:s.stops[1]})`:e.fillColor}),l=C(()=>e.railBorderRadius!==void 0?R(e.railBorderRadius):e.height!==void 0?R(e.height,{c:.5}):""),r=C(()=>e.fillBorderRadius!==void 0?R(e.fillBorderRadius):e.railBorderRadius!==void 0?R(e.railBorderRadius):e.height!==void 0?R(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:s,railStyle:c,percentage:v,unit:g,indicatorTextColor:h,status:n,showIndicator:y,processing:p,clsPrefix:a}=e;return t("div",{class:`${a}-progress-content`,role:"none"},t("div",{class:`${a}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${a}-progress-graph-line`,{[`${a}-progress-graph-line--indicator-${i}`]:!0}]},t("div",{class:`${a}-progress-graph-line-rail`,style:[{backgroundColor:s,height:d.value,borderRadius:l.value},c]},t("div",{class:[`${a}-progress-graph-line-fill`,p&&`${a}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:u.value,height:d.value,lineHeight:d.value,borderRadius:r.value}},i==="inside"?t("div",{class:`${a}-progress-graph-line-indicator`,style:{color:h}},o.default?o.default():`${v}${g}`):null)))),y&&i==="outside"?t("div",null,o.default?t("div",{class:`${a}-progress-custom-content`,style:{color:h},role:"none"},o.default()):n==="default"?t("div",{role:"none",class:`${a}-progress-icon ${a}-progress-icon--as-text`,style:{color:h}},v,g):t("div",{class:`${a}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:a},{default:()=>_e[n]}))):null)}}});function E(e,o,d=100){return`m ${d/2} ${d/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const ke=z({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:o}){const d=C(()=>e.percentage.map((r,i)=>`${Math.PI*r/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`)),u=(l,r)=>{const i=e.fillColor[r],s=typeof i=="object"?i.stops[0]:"",c=typeof i=="object"?i.stops[1]:"";return typeof e.fillColor[r]=="object"&&t("linearGradient",{id:`gradient-${r}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},t("stop",{offset:"0%","stop-color":s}),t("stop",{offset:"100%","stop-color":c}))};return()=>{const{viewBoxWidth:l,strokeWidth:r,circleGap:i,showIndicator:s,fillColor:c,railColor:v,railStyle:g,percentage:h,clsPrefix:n}=e;return t("div",{class:`${n}-progress-content`,role:"none"},t("div",{class:`${n}-progress-graph`,"aria-hidden":!0},t("div",{class:`${n}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${l} ${l}`},t("defs",null,h.map((y,p)=>u(y,p))),h.map((y,p)=>t("g",{key:p},t("path",{class:`${n}-progress-graph-circle-rail`,d:E(l/2-r/2*(1+2*p)-i*p,r,l),"stroke-width":r,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:v[p]},g[p]]}),t("path",{class:[`${n}-progress-graph-circle-fill`,y===0&&`${n}-progress-graph-circle-fill--empty`],d:E(l/2-r/2*(1+2*p)-i*p,r,l),"stroke-width":r,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:d.value[p],strokeDashoffset:0,stroke:typeof c[p]=="object"?`url(#gradient-${p})`:c[p]}})))))),s&&o.default?t("div",null,t("div",{class:`${n}-progress-text`},o.default())):null)}}}),Pe=N([m("progress",{display:"inline-block"},[m("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),B("line",`
 width: 100%;
 display: block;
 `,[m("progress-content",`
 display: flex;
 align-items: center;
 `,[m("progress-graph",{flex:1})]),m("progress-custom-content",{marginLeft:"14px"}),m("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[B("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),B("circle, dashboard",{width:"120px"},[m("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),m("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),m("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),B("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[m("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),m("progress-content",{position:"relative"}),m("progress-graph",{position:"relative"},[m("progress-graph-circle",[N("svg",{verticalAlign:"bottom"}),m("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[B("empty",{opacity:0})]),m("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),m("progress-graph-line",[B("indicator-inside",[m("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[m("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),m("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),B("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[m("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),m("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),m("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[m("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[B("processing",[N("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),N("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Be=Object.assign(Object.assign({},Q.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Re=z({name:"Progress",props:Be,setup(e){const o=C(()=>e.indicatorPlacement||e.indicatorPosition),d=C(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:u,inlineThemeDisabled:l}=ie(e),r=Q("Progress","-progress",Pe,ne,e,u),i=C(()=>{const{status:c}=e,{common:{cubicBezierEaseInOut:v},self:{fontSize:g,fontSizeCircle:h,railColor:n,railHeight:y,iconSizeCircle:p,iconSizeLine:a,textColorCircle:S,textColorLineInner:_,textColorLineOuter:x,lineBgProcessing:w,fontWeightCircle:P,[L("iconColor",c)]:j,[L("fillColor",c)]:I}}=r.value;return{"--n-bezier":v,"--n-fill-color":I,"--n-font-size":g,"--n-font-size-circle":h,"--n-font-weight-circle":P,"--n-icon-color":j,"--n-icon-size-circle":p,"--n-icon-size-line":a,"--n-line-bg-processing":w,"--n-rail-color":n,"--n-rail-height":y,"--n-text-color-circle":S,"--n-text-color-line-inner":_,"--n-text-color-line-outer":x}}),s=l?se("progress",C(()=>e.status[0]),i,e):void 0;return{mergedClsPrefix:u,mergedIndicatorPlacement:o,gapDeg:d,cssVars:l?void 0:i,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{type:e,cssVars:o,indicatorTextColor:d,showIndicator:u,status:l,railColor:r,railStyle:i,color:s,percentage:c,viewBoxWidth:v,strokeWidth:g,mergedIndicatorPlacement:h,unit:n,borderRadius:y,fillBorderRadius:p,height:a,processing:S,circleGap:_,mergedClsPrefix:x,gapDeg:w,gapOffsetDegree:P,themeClass:j,$slots:I,onRender:A}=this;return A?.(),t("div",{class:[j,`${x}-progress`,`${x}-progress--${e}`,`${x}-progress--${l}`],style:o,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(Se,{clsPrefix:x,status:l,showIndicator:u,indicatorTextColor:d,railColor:r,fillColor:s,railStyle:i,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:v,strokeWidth:g,gapDegree:w===void 0?e==="dashboard"?75:0:w,gapOffsetDegree:P,unit:n},I):e==="line"?t(we,{clsPrefix:x,status:l,showIndicator:u,indicatorTextColor:d,railColor:r,fillColor:s,railStyle:i,percentage:c,processing:S,indicatorPlacement:h,unit:n,fillBorderRadius:p,railBorderRadius:y,height:a},I):e==="multiple-circle"?t(ke,{clsPrefix:x,strokeWidth:g,railColor:r,fillColor:s,railStyle:i,viewBoxWidth:v,percentage:c,showIndicator:u,circleGap:_},I):null)}}),ze={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function Ie(e,o){return V(),U("svg",ze,[...o[0]||(o[0]=[$("path",{fill:"currentColor",d:"M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"},null,-1)])])}const Ne=ae({name:"mdi-refresh",render:Ie});function Te(e){return(e.match(/.{1,2}/g)??[]).map(o=>Number.parseInt(o,16))}function De(e,o){return T.HmacSHA1(T.enc.Hex.parse(e),T.enc.Hex.parse(re(o))).toString(T.enc.Hex)}function re(e){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";return(e.toUpperCase().replace(/=+$/,"").split("").map(l=>o.indexOf(l).toString(2).padStart(5,"0")).join("").match(/.{1,8}/g)??[]).map(l=>Number.parseInt(l,2).toString(16).padStart(2,"0")).join("")}function Oe({key:e,counter:o=0}){const d=De(o.toString(16).padStart(16,"0"),e),u=Te(d),l=u[19]&15,r=(u[l]&127)<<24|(u[l+1]&255)<<16|(u[l+2]&255)<<8|u[l+3]&255;return String(r%1e6).padStart(6,"0")}function G({now:e,timeStep:o}){return Math.floor(e/1e3/o)}function M({key:e,now:o=Date.now(),timeStep:d=30}){const u=G({now:o,timeStep:d});return Oe({key:e,counter:u})}function We({secret:e,app:o="IT-Tools",account:d="demo-user",algorithm:u="SHA1",digits:l=6,period:r=30}){const s=le({issuer:o,secret:e,algorithm:u,digits:l,period:r}).map((c,v)=>`${encodeURIComponent(v)}=${encodeURIComponent(c)}`).join("&");return`otpauth://totp/${encodeURIComponent(o)}:${encodeURIComponent(d)}?${s}`}function X(){return xe({length:16,alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"})}const je={flex:"","items-center":""},Ae=z({__name:"token-display",props:{tokens:{}},setup(e){const o=e,{copy:d,isJustCopied:u}=q({createToast:!1}),{copy:l,isJustCopied:r}=q({createToast:!1}),{copy:i,isJustCopied:s}=q({createToast:!1}),{tokens:c}=ce(o);return(v,g)=>{const h=te,n=ee;return V(),U("div",null,[g[3]||(g[3]=$("div",{"mb-5px":"","w-full":"",flex:"","items-center":""},[$("div",{"flex-1":"","text-left":""}," Previous "),$("div",{"flex-1":"","text-center":""}," Current OTP "),$("div",{"flex-1":"","text-right":""}," Next ")],-1)),$("div",je,[b(n,{tooltip:f(u)?"Copied !":"Copy previous OTP",position:"bottom","flex-1":""},{default:k(()=>[b(h,{"data-test-id":"previous-otp","w-full":"","important:h-12":"","important:rounded-r-none":"","important:font-mono":"",onClick:g[0]||(g[0]=H(y=>f(d)(f(c).previous),["prevent"]))},{default:k(()=>[O(W(f(c).previous),1)]),_:1})]),_:1},8,["tooltip"]),b(n,{tooltip:f(r)?"Copied !":"Copy current OTP",position:"bottom","flex-1":"","flex-basis-5xl":""},{default:k(()=>[b(h,{"data-test-id":"current-otp","w-full":"","important:border-x":"1px solid gray op-40","important:h-12":"","important:rounded-0":"","important:text-22px":"",onClick:g[1]||(g[1]=H(y=>f(l)(f(c).current),["prevent"]))},{default:k(()=>[O(W(f(c).current),1)]),_:1})]),_:1},8,["tooltip"]),b(n,{tooltip:f(s)?"Copied !":"Copy next OTP",position:"bottom","flex-1":""},{default:k(()=>[b(h,{"data-test-id":"next-otp","w-full":"","important:h-12":"","important:rounded-l-none":"",onClick:g[2]||(g[2]=H(y=>f(i)(f(c).next),["prevent"]))},{default:k(()=>[O(W(f(c).next),1)]),_:1})]),_:1},8,["tooltip"])])])}}}),qe={style:{"max-width":"350px"}},He={style:{"text-align":"center"}},Me={"mt-4":"",flex:"","flex-col":"","items-center":"","justify-center":"","gap-3":""},Ge={style:{"max-width":"350px"}},Ue=z({__name:"otp-code-generator-and-validator",setup(e){const o=de(),d=C(()=>o.value/1e3%30),u=ue(),l=pe(),r=ge(X());function i(){r.value=X()}const[s]=Ce(()=>({previous:M({key:r.value,now:o.value-3e4}),current:M({key:r.value,now:o.value}),next:M({key:r.value,now:o.value+3e4})}),{throttle:500}),c=C(()=>We({secret:r.value})),{qrcode:v}=ye({text:c,color:{background:C(()=>l.isDarkTheme?"#ffffff":"#00000000"),foreground:"#000000"},options:{width:210}}),g=[{message:"Secret should be a base32 string",validator:h=>h.toUpperCase().match(/^[A-Z234567]+$/)},{message:"Please set a secret",validator:h=>h!==""}];return(h,n)=>{const y=Ne,p=te,a=ee,S=he,_=Re,x=be;return V(),U(me,null,[$("div",qe,[b(S,{value:f(r),"onUpdate:value":n[0]||(n[0]=w=>fe(r)?r.value=w:null),label:"Secret",placeholder:"Paste your TOTP secret...","mb-5":"","validation-rules":g},{suffix:k(()=>[b(a,{tooltip:"Generate a new random secret"},{default:k(()=>[b(p,{circle:"",variant:"text",size:"small",onClick:i},{default:k(()=>[b(y)]),_:1})]),_:1})]),_:1},8,["value"]),$("div",null,[b(Ae,{tokens:f(s)},null,8,["tokens"]),b(_,{percentage:100*f(d)/30,color:f(u).primaryColor,"show-indicator":!1},null,8,["percentage","color"]),$("div",He," Next in "+W(String(Math.floor(30-f(d))).padStart(2,"0"))+"s ",1)]),$("div",Me,[b(x,{src:f(v)},null,8,["src"]),b(p,{href:f(c),target:"_blank"},{default:k(()=>[...n[1]||(n[1]=[O(" Open Key URI in new tab ",-1)])]),_:1},8,["href"])])]),$("div",Ge,[b(D,{label:"Secret in hexadecimal",value:f(re)(f(r)),readonly:"",placeholder:"Secret in hex will be displayed here","mb-5":""},null,8,["value"]),b(D,{label:"Epoch",value:Math.floor(f(o)/1e3).toString(),readonly:"","mb-5":"",placeholder:"Epoch in sec will be displayed here"},null,8,["value"]),n[2]||(n[2]=$("p",null,"Iteration",-1)),b(D,{value:String(f(G)({now:f(o),timeStep:30})),readonly:"",label:"Count:","label-position":"left","label-width":"90px","label-align":"right",placeholder:"Iteration count will be displayed here"},null,8,["value"]),b(D,{value:f(G)({now:f(o),timeStep:30}).toString(16).padStart(16,"0"),readonly:"",placeholder:"Iteration count in hex will be displayed here","label-position":"left","label-width":"90px","label-align":"right",label:"Padded hex:"},null,8,["value"])])],64)}}}),rt=ve(Ue,[["__scopeId","data-v-388f1b9b"]]);export{rt as default};
