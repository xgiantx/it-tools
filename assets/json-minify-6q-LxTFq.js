import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-CBH_JAJe.js";import{l as r}from"./index-8HslT92O.js";import{w as i}from"./defaults-CMtlFFSf.js";import{d as s,c as l,o as p}from"./index-Br2O5Rg4.js";import"./TextareaCopyable-DjwTAKmp.js";import"./Scrollbar-GJsuXQt_.js";import"./Copy-0UxCH17v.js";const u=`{
	"hello": [
		"world"
	]
}`,N=s({__name:"json-minify",setup(m){const t=o=>i(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return p(),l(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{N as default};
