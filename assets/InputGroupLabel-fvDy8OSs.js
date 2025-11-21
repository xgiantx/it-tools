import{E as _,aC as R,d as B,I as a,J as I,K as b,b0 as L,b as d,O as u,P as k}from"./index-DtXg1mwU.js";import{u as y}from"./use-form-item-85PEBv7I.js";const P=_("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[R("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),w=Object.assign(Object.assign({},b.props),{size:String,bordered:{type:Boolean,default:void 0}}),T=B({name:"InputGroupLabel",props:w,setup(e){const{mergedBorderedRef:s,mergedClsPrefixRef:r,inlineThemeDisabled:n}=I(e),c=y(e),{mergedSizeRef:t}=c,g=b("Input","-input-group-label",P,L,e,r),l=d(()=>{const{value:i}=t,{common:{cubicBezierEaseInOut:p},self:{groupLabelColor:h,borderRadius:m,groupLabelTextColor:f,lineHeight:v,groupLabelBorder:z,[u("fontSize",i)]:C,[u("height",i)]:x}}=g.value;return{"--n-bezier":p,"--n-group-label-color":h,"--n-group-label-border":z,"--n-border-radius":m,"--n-group-label-text-color":f,"--n-font-size":C,"--n-line-height":v,"--n-height":x}}),o=n?k("input-group-label",d(()=>{const{value:i}=t;return i[0]}),l,e):void 0;return{mergedClsPrefix:r,mergedBordered:s,cssVars:n?void 0:l,themeClass:o?.themeClass,onRender:o?.onRender}},render(){var e,s,r;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},(r=(s=this.$slots).default)===null||r===void 0?void 0:r.call(s),this.mergedBordered?a("div",{class:`${n}-input-group-label__border`}):null)}});export{T as _};
