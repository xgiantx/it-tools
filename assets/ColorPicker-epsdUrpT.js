import{b2 as _,bM as P,bN as G,bO as ve,bP as I,bQ as E,bR as N,bS as ne,bT as W,bU as Be,bV as Ce,bW as Ue,bX as Ae,d as H,I as i,n as w,b as A,b5 as oe,bb as ae,aq as ot,ar as Fe,R as Te,bY as se,bZ as Re,b_ as $e,b$ as _e,aI as at,D as te,E as b,c0 as lt,aC as U,H as ze,c1 as it,c2 as st,c3 as ut,c4 as Ve,T as ct,c5 as dt,c6 as ht,J as pt,K as qe,c7 as ft,aw as gt,ax as Se,aQ as Pe,q as vt,O as Ie,P as bt,c8 as mt,c9 as xt,aR as de,b4 as kt}from"./index-Br2O5Rg4.js";import{N as wt}from"./Input-CZIbwevR.js";import{_ as yt}from"./InputGroup-BNbgia9P.js";import{u as St}from"./use-form-item-Dy91cqfT.js";import{u as Ct}from"./use-locale-BXEo-Q17.js";import{B as he}from"./Button-Cgth0Vqq.js";function Ut(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ue(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function At(e,t=[255,255,255],l="AA"){const[n,a,o,s]=_(P(e));if(s===1){const j=pe([n,a,o]),D=pe(t);return(Math.max(j,D)+.05)/(Math.min(j,D)+.05)>=(l==="AA"?4.5:7)}const u=Math.round(n*s+t[0]*(1-s)),h=Math.round(a*s+t[1]*(1-s)),V=Math.round(o*s+t[2]*(1-s)),B=pe([u,h,V]),R=pe(t);return(Math.max(B,R)+.05)/(Math.min(B,R)+.05)>=(l==="AA"?4.5:7)}function pe(e){const[t,l,n]=e.map(a=>(a/=255,a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)));return .2126*t+.7152*l+.0722*n}function Rt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function $t(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const _t={rgb:{hex(e){return N(_(e))},hsl(e){const[t,l,n,a]=_(e);return P([...Ae(t,l,n),a])},hsv(e){const[t,l,n,a]=_(e);return W([...Ue(t,l,n),a])}},hex:{rgb(e){return I(_(e))},hsl(e){const[t,l,n,a]=_(e);return P([...Ae(t,l,n),a])},hsv(e){const[t,l,n,a]=_(e);return W([...Ue(t,l,n),a])}},hsl:{hex(e){const[t,l,n,a]=ne(e);return N([...Ce(t,l,n),a])},rgb(e){const[t,l,n,a]=ne(e);return I([...Ce(t,l,n),a])},hsv(e){const[t,l,n,a]=ne(e);return W([...Be(t,l,n),a])}},hsv:{hex(e){const[t,l,n,a]=G(e);return N([...E(t,l,n),a])},rgb(e){const[t,l,n,a]=G(e);return I([...E(t,l,n),a])},hsl(e){const[t,l,n,a]=G(e);return P([...ve(t,l,n),a])}}};function Ee(e,t,l){return l=l||ue(e),l?l===t?e:_t[l][t](e):null}const ie="12px",Vt=12,X="6px",Dt=H({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function l(o){!t.value||!e.rgba||(oe("mousemove",document,n),oe("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:h}=s.getBoundingClientRect(),V=(o.clientX-h)/(u-Vt);e.onUpdateAlpha($t(V))}function a(){var o;ae("mousemove",document,n),ae("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,railBackgroundImage:A(()=>{const{rgba:o}=e;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ie,borderRadius:X},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:X,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:X,right:X,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${X})`,borderRadius:X,width:ie,height:ie}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:I(this.rgba),borderRadius:X,width:ie,height:ie}}))))}}),De=ot("n-color-picker");function Mt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function zt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Pt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function It(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Ht(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Bt={paddingSmall:"0 4px"},He=H({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=w(""),{themeRef:l}=Fe(De,null);Te(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function o(s){let u,h;switch(e.label){case"HEX":h=It(s),h&&e.onUpdateValue(s),t.value=n();break;case"H":u=zt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Pt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"A":u=Ht(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Mt(s),u===!1?t.value=n():e.onUpdateValue(u);break}}return{mergedTheme:l,inputValue:t,handleInputChange:o,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return i(wt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Bt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Ft=H({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,l){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?N:se)(l));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=l,e.onUpdateValue((n?W:_e)(a));break;case"rgb":a[t]=l,e.onUpdateValue((n?I:$e)(a));break;case"hsl":a[t]=l,e.onUpdateValue((n?P:Re)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(yt,null,{default:()=>{const{mode:l,valueArr:n,showAlpha:a}=this;if(l==="hex"){let o=null;try{o=n===null?null:(a?N:se)(n)}catch{}return i(He,{label:"HEX",showAlpha:a,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(l+(a?"a":"")).split("").map((o,s)=>i(He,{label:o.toUpperCase(),value:n===null?null:n[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}});function Tt(e,t){if(t==="hsv"){const[l,n,a,o]=G(e);return I([...E(l,n,a),o])}return e}function qt(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Et=H({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=A(()=>e.swatches.map(o=>{const s=ue(o);return{value:o,mode:s,legalValue:Tt(o,s)}}));function l(o){const{mode:s}=e;let{value:u,mode:h}=o;return h||(h="hex",/^[a-zA-Z]+$/.test(u)?u=qt(u):(at("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),h===s?u:Ee(u,s,h)}function n(o){e.onUpdateColor(l(o))}function a(o,s){o.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:l=>{this.handleSwatchKeyDown(l,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Nt=H({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:l}=Fe(De,null);return()=>{const{hsla:n,value:a,clsPrefix:o,onClick:s,disabled:u}=e,h=t.label||l.value;return i("div",{class:[`${o}-color-picker-trigger`,u&&`${o}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${o}-color-picker-trigger__fill`},i("div",{class:`${o}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?P(n):""}}),a&&n?i("div",{class:`${o}-color-picker-trigger__value`,style:{color:At(n)?"white":"black"}},h?h(a):a):null))}}}),Ot=H({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ue(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(l){var n;const a=l.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Ee(a.toUpperCase(),e.mode,"hex")),l.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),re="12px",jt=12,Z="6px",Lt=6,Kt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Xt=H({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function l(o){t.value&&(oe("mousemove",document,n),oe("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:h}=s.getBoundingClientRect(),V=Rt((o.clientX-h-Lt)/(u-jt)*360);e.onUpdateHue(V)}function a(){var o;ae("mousemove",document,n),ae("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:re,borderRadius:Z}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Kt,height:re,borderRadius:Z,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:Z,right:Z,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Z})`,borderRadius:Z,width:re,height:re}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Z,width:re,height:re}})))))}}),fe="12px",ge="6px",Zt=H({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function l(o){t.value&&(oe("mousemove",document,n),oe("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,height:h,left:V,bottom:B}=s.getBoundingClientRect(),R=(B-o.clientY)/h,O=(o.clientX-V)/u,j=100*(O>1?1:O<0?0:O),D=100*(R>1?1:R<0?0:R);e.onUpdateSV(j,D)}function a(){var o;ae("mousemove",document,n),ae("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{palleteRef:t,handleColor:A(()=>{const{rgba:o}=e;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:fe,height:fe,borderRadius:ge,left:`calc(${this.displayedSv[0]}% - ${ge})`,bottom:`calc(${this.displayedSv[1]}% - ${ge})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ge,width:fe,height:fe}})))}}),Gt=te([b("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),b("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[lt(),b("input",`
 text-align: center;
 `)]),b("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[te("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[U("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),te("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),b("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[U("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),b("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[U("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ze("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),b("color-picker-preview",`
 display: flex;
 `,[U("sliders",`
 flex: 1 0 auto;
 `),U("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),U("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),U("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),b("color-picker-input",`
 display: flex;
 align-items: center;
 `,[b("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),U("mode",`
 width: 72px;
 text-align: center;
 `)]),b("color-picker-control",`
 padding: 12px;
 `),b("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[b("button","margin-left: 8px;")]),b("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[U("value",`
 white-space: nowrap;
 position: relative;
 `),U("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),ze("disabled","cursor: not-allowed"),b("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[te("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),b("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[b("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[U("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),te("&:focus",`
 outline: none;
 `,[U("fill",[te("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Wt=Object.assign(Object.assign({},qe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ve.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),nr=H({name:"ColorPicker",props:Wt,slots:Object,setup(e,{slots:t}){const l=w(null);let n=null;const a=St(e),{mergedSizeRef:o,mergedDisabledRef:s}=a,{localeRef:u}=Ct("global"),{mergedClsPrefixRef:h,namespaceRef:V,inlineThemeDisabled:B}=pt(e),R=qe("ColorPicker","-color-picker",Gt,ft,e,h);gt(De,{themeRef:R,renderLabelRef:Se(e,"renderLabel"),colorPickerSlots:t});const O=w(e.defaultShow),j=Pe(Se(e,"show"),O);function D(r){const{onUpdateShow:c,"onUpdate:show":p}=e;c&&de(c,r),p&&de(p,r),O.value=r}const{defaultValue:be}=e,Me=w(be===void 0?Ut(e.modes,e.showAlpha):be),x=Pe(Se(e,"value"),Me),Q=w([x.value]),M=w(0),me=A(()=>ue(x.value)),{modes:Ne}=e,$=w(ue(x.value)||Ne[0]||"rgb");function Oe(){const{modes:r}=e,{value:c}=$,p=r.findIndex(f=>f===c);~p?$.value=r[(p+1)%r.length]:$.value="rgb"}let y,S,Y,J,F,T,q,C;const le=A(()=>{const{value:r}=x;if(!r)return null;switch(me.value){case"hsv":return G(r);case"hsl":return[y,S,Y,C]=ne(r),[...Be(y,S,Y),C];case"rgb":case"hex":return[F,T,q,C]=_(r),[...Ue(F,T,q),C]}}),L=A(()=>{const{value:r}=x;if(!r)return null;switch(me.value){case"rgb":case"hex":return _(r);case"hsv":return[y,S,J,C]=G(r),[...E(y,S,J),C];case"hsl":return[y,S,Y,C]=ne(r),[...Ce(y,S,Y),C]}}),xe=A(()=>{const{value:r}=x;if(!r)return null;switch(me.value){case"hsl":return ne(r);case"hsv":return[y,S,J,C]=G(r),[...ve(y,S,J),C];case"rgb":case"hex":return[F,T,q,C]=_(r),[...Ae(F,T,q),C]}}),je=A(()=>{switch($.value){case"rgb":case"hex":return L.value;case"hsv":return le.value;case"hsl":return xe.value}}),ce=w(0),ke=w(1),we=w([0,0]);function Le(r,c){const{value:p}=le,f=ce.value,g=p?p[3]:1;we.value=[r,c];const{showAlpha:d}=e;switch($.value){case"hsv":v((d?W:_e)([f,r,c,g]),"cursor");break;case"hsl":v((d?P:Re)([...ve(f,r,c),g]),"cursor");break;case"rgb":v((d?I:$e)([...E(f,r,c),g]),"cursor");break;case"hex":v((d?N:se)([...E(f,r,c),g]),"cursor");break}}function Ke(r){ce.value=r;const{value:c}=le;if(!c)return;const[,p,f,g]=c,{showAlpha:d}=e;switch($.value){case"hsv":v((d?W:_e)([r,p,f,g]),"cursor");break;case"rgb":v((d?I:$e)([...E(r,p,f),g]),"cursor");break;case"hex":v((d?N:se)([...E(r,p,f),g]),"cursor");break;case"hsl":v((d?P:Re)([...ve(r,p,f),g]),"cursor");break}}function Xe(r){switch($.value){case"hsv":[y,S,J]=le.value,v(W([y,S,J,r]),"cursor");break;case"rgb":[F,T,q]=L.value,v(I([F,T,q,r]),"cursor");break;case"hex":[F,T,q]=L.value,v(N([F,T,q,r]),"cursor");break;case"hsl":[y,S,Y]=xe.value,v(P([y,S,Y,r]),"cursor");break}ke.value=r}function v(r,c){c==="cursor"?n=r:n=null;const{nTriggerFormChange:p,nTriggerFormInput:f}=a,{onUpdateValue:g,"onUpdate:value":d}=e;g&&de(g,r),d&&de(d,r),p(),f(),Me.value=r}function Ze(r){v(r,"input"),kt(ee)}function ee(r=!0){const{value:c}=x;if(c){const{nTriggerFormChange:p,nTriggerFormInput:f}=a,{onComplete:g}=e;g&&g(c);const{value:d}=Q,{value:k}=M;r&&(d.splice(k+1,d.length,c),M.value=k+1),p(),f()}}function Ge(){const{value:r}=M;r-1<0||(v(Q.value[r-1],"input"),ee(!1),M.value=r-1)}function We(){const{value:r}=M;r<0||r+1>=Q.value.length||(v(Q.value[r+1],"input"),ee(!1),M.value=r+1)}function Qe(){v(null,"input");const{onClear:r}=e;r&&r(),D(!1)}function Ye(){const{value:r}=x,{onConfirm:c}=e;c&&c(r),D(!1)}const Je=A(()=>M.value>=1),et=A(()=>{const{value:r}=Q;return r.length>1&&M.value<r.length-1});vt(j,r=>{r||(Q.value=[x.value],M.value=0)}),Te(()=>{if(!(n&&n===x.value)){const{value:r}=le;r&&(ce.value=r[0],ke.value=r[3],we.value=[r[1],r[2]])}n=null});const ye=A(()=>{const{value:r}=o,{common:{cubicBezierEaseInOut:c},self:{textColor:p,color:f,panelFontSize:g,boxShadow:d,border:k,borderRadius:m,dividerColor:K,[Ie("height",r)]:rt,[Ie("fontSize",r)]:nt}}=R.value;return{"--n-bezier":c,"--n-text-color":p,"--n-color":f,"--n-panel-font-size":g,"--n-font-size":nt,"--n-box-shadow":d,"--n-border":k,"--n-border-radius":m,"--n-height":rt,"--n-divider-color":K}}),z=B?bt("color-picker",A(()=>o.value[0]),ye,e):void 0;function tt(){var r;const{value:c}=L,{value:p}=ce,{internalActions:f,modes:g,actions:d}=e,{value:k}=R,{value:m}=h;return i("div",{class:[`${m}-color-picker-panel`,z?.themeClass.value],onDragstart:K=>{K.preventDefault()},style:B?void 0:ye.value},i("div",{class:`${m}-color-picker-control`},i(Zt,{clsPrefix:m,rgba:c,displayedHue:p,displayedSv:we.value,onUpdateSV:Le,onComplete:ee}),i("div",{class:`${m}-color-picker-preview`},i("div",{class:`${m}-color-picker-preview__sliders`},i(Xt,{clsPrefix:m,hue:p,onUpdateHue:Ke,onComplete:ee}),e.showAlpha?i(Dt,{clsPrefix:m,rgba:c,alpha:ke.value,onUpdateAlpha:Xe,onComplete:ee}):null),e.showPreview?i(Ot,{clsPrefix:m,mode:$.value,color:L.value&&se(L.value),onUpdateColor:K=>{v(K,"input")}}):null),i(Ft,{clsPrefix:m,showAlpha:e.showAlpha,mode:$.value,modes:g,onUpdateMode:Oe,value:x.value,valueArr:je.value,onUpdateValue:Ze}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&i(Et,{clsPrefix:m,mode:$.value,swatches:e.swatches,onUpdateColor:K=>{v(K,"input")}})),d?.length?i("div",{class:`${m}-color-picker-action`},d.includes("confirm")&&i(he,{size:"small",onClick:Ye,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.confirm}),d.includes("clear")&&i(he,{size:"small",onClick:Qe,disabled:!x.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${m}-color-picker-action`},{default:t.action}):f?i("div",{class:`${m}-color-picker-action`},f.includes("undo")&&i(he,{size:"small",onClick:Ge,disabled:!Je.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.undo}),f.includes("redo")&&i(he,{size:"small",onClick:We,disabled:!et.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:h,namespace:V,selfRef:l,hsla:xe,rgba:L,mergedShow:j,mergedDisabled:s,isMounted:mt(),adjustedTo:Ve(e),mergedValue:x,handleTriggerClick(){D(!0)},handleClickOutside(r){var c;!((c=l.value)===null||c===void 0)&&c.contains(xt(r))||D(!1)},renderPanel:tt,cssVars:B?void 0:ye,themeClass:z?.themeClass,onRender:z?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),i("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},i(it,null,{default:()=>[i(st,null,{default:()=>i(Nt,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),i(ut,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ve.tdkey,to:this.adjustedTo},{default:()=>i(ct,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?dt(this.renderPanel(),[[ht,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});export{nr as _};
