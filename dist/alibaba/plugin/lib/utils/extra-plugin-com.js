import wx from './../../../adaptor.js';
const sysPath=require("./path"),gulp=require("./gulp"),through2=require("./through2"),ab2str=require("./arraybuffer-to-string"),str2ab=require("./to-buffer");module.exports=function(t,s){const e={main:{},coms:{}};gulp.src(`${t}/**/plugin.json`).pipe(through2.obj(function(t,s,r){const n=t.history[0].replace(t.base,"").split(sysPath.sep),o=n[n.length-2],u=ab2str(t.contents),i=JSON.parse(u);e.main[o]=i.main,e.coms[o]=i.publicComponents,t.contents=str2ab(u),this.push(t),r()})).pipe(gulp.dest(t)).on("end",()=>{s(e)})};