import wx from './../../adaptor.js';
function extraBalancingGroup(e,n="{",r="}"){let t=e.indexOf(n),i=e.indexOf(r),a="",f=0;if(i<=t)return a;for(let a=t;a<e.length;a++)if(e[a]===n)f++;else if(e[a]===r&&0===--f){i=a;break}return 0===f&&(a=e.substring(t,i+1)),a}module.exports=extraBalancingGroup;