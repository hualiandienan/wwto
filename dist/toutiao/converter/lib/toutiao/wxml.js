var wx = require('./../../../adaptor.js').default;
function convert(e){return e.replace(/wx:/g,"tt:").replace(/tt:for-items/g,"tt:for").replace(/\.wxml/g,".ttml").replace(/url\(['"]?\/\/[^)]+['"]?\)/gi,e=>e.replace(/\/\//g,e=>`https:${e}`)).replace(/url=["']{{([^{}\s?=]+)}}/gi,(e,r)=>e.replace(r,`(${r}[0]=='/' && ${r}[1]=='/') ? 'https:' + ${r}:${r}`)).replace(/url\({{([^{}\s?=]+)}}/gi,(e,r)=>e.replace(r,`(${r}[0]=='/' && ${r}[1]=='/') ? 'https:' + ${r}:${r}`)).replace(/<progress[^>]+(activeColor|backgroundColor)=/g,(e,r)=>e.replace(r,r.replace(/[A-Z]/,e=>`-${e.toLowerCase()}`))).replace(/<slider[^>]+(activeColor|backgroundColor)=/g,(e,r)=>e.replace(r,r.replace(/[A-Z]/,e=>`-${e.toLowerCase()}`))).replace(/<slider[^>]+(block-size|block-color)=/g,(e,r)=>e.replace(r,r.replace("block","handle")))}module.exports=convert;