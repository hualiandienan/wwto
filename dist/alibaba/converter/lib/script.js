import wx from './../../adaptor.js';
function convert(n){return n.replace(/['"](\/\/\w+\.\w+)/g,function(n,t){return n.replace(t,["https:",t].join(""))}).replace(/\.option\.transition\.delay/g,".delay").replace(/\.option\.transition\.duration/g,".duration").replace(/\.option\.transition\.timingFunction/g,".duration")}module.exports=convert;").replace(/(from\s+['"])(\w+)/g,function(e,t){return e.replace(t,[t,isWpy?"":"./"].join(""))}).replace(/(let|var|const)\s+fetch\s*=/g,"$1 renameFetch = ").replace(/(\s+)renameFetch([;\s]*)$/,"$1renameFetch$2").replace(/[^\w.'"]fetch[.(]/g,function(e){return e.replace(/fetch/g,"renameFetch")}).replace(/App\({[\s\S]+(onLaunch|onShow):\s*function\s*\(\s*(\w+)\s*\)[^{]*{/g,function(e,t,r){return defQuery(e,r)}).replace(/App\({[\s\S]+(onLaunch|onShow)\s*\(\s*(\w+)\s*\)[^{]*{/g,function(e,t,r){return defQuery(e,r)}).replace(/App\({[\s\S]+(onLaunch|onShow):\s*\(\s*(\w+)\s*\)\s*=>\s*[^{]*{/g,function(e,t,r){return defQuery(e,r)}).replace(/Component\([\s\S]+properties:[^{]*{/,function(e){return e.replace("properties","props")}).replace(/\.props/g,function(e){return e.replace(".props",".props")}).replace(/Component\([\s\S]+methods:[^{]*{/,function(e){return[e,"triggerEvent: function(name, opt) {\n            this.props['on' + name[0].toUpperCase() + name.substring(1)]({detail:opt});\n          },\r\n"].join("")}).replace(/[\s\S]+/,function(match){if(!match.match(/Component\(/))return match;const lifeCircleNames=["created","attached","ready","detached"];let lifeCircleFns="";lifeCircleNames.map(e=>{let{args:t,body:r}=extractFn(match,e);lifeCircleFns+=e+"("+t+")"+(r||"{}")+",\r\n"});let methods=(match.match(/methods:[\s\n]*{/)||{})[0];match=methods?match.replace(methods,[methods,lifeCircleFns].join("\r\n")):match.replace("let _observers = null;
Component({

        didMount() {
          this.data = Object.assign({}, this.data, this.props);
          
          this.created && this.created.apply(this, arguments);
          this.attached && this.attached.apply(this, arguments);
          this.ready && this.ready.apply(this, arguments);
        },
        didUnmount() {
          this.detached && this.detached.apply(this, arguments);
        },
          didUpdate: function(prevProps, preData) {
            for (let key in this.props) {
              if (_observers && typeof(_observers[key]) === 'function') {
                if (JSON.stringify(prevProps[key]) !== JSON.stringify(this.props[key]) && 
                JSON.stringify(preData[key]) !== JSON.stringify(this.props[key])) {
                  this.setData(Object.assign({}, this.data, {[key]: this.props[key]}));
                  _observers[key].apply(this, [this.props[key], prevProps[key]]);
                }
              } else if (this.props[key] !== prevProps[key]) {
                this.data[key] = this.props[key];
                this.setData(this.data);
              }
            }
          },",["Component({","methods: {
created(){},
attached(){},
ready(){},
detached(){}",lifeCircleFns,"}"].join("\r\n"));let props=(match.match(/props:[\s\S]+/)||{})[0]||"";if(!props)return match;let str=balancingGroup(props),obj=eval("("+str+")"),has=Object.prototype.hasOwnProperty,propMap={},observerMap=null,events=match.match(/\.triggerEvent\(['"]\w+['"]/g)||[];for(let e=0;e<events.length;e++){let t=events[e],r=t.match(/\(['"](\w+)['"]/)[1];r="on"+r[0].toUpperCase()+r.substring(1),propMap[r]=(()=>{})}for(let key in obj)if(has.call(obj,key)){let item=obj[key];propMap[key]=item.value,item.observer&&(observerMap=observerMap||{},"function"==typeof item.observer?observerMap[key]=item.observer:observerMap[key]=eval('() => {\n                  this["'+item.observer+'"].apply(this, arguments);\n                }'))}let didMount="\n        didMount() {\n          this.data = Object.assign({}, this.data, this.props);\n          \n          this.created && this.created.apply(this, arguments);\n          this.attached && this.attached.apply(this, arguments);\n          this.ready && this.ready.apply(this, arguments);\n        }",didUnmount=",\n        didUnmount() {\n          this.detached && this.detached.apply(this, arguments);\n        }",didUpdate=",\n          didUpdate: function(prevProps, preData) {\n            for (let key in this.props) {\n              if (_observers && typeof(_observers[key]) === 'function') {\n                if (JSON.stringify(prevProps[key]) !== JSON.stringify(this.props[key]) && \n                JSON.stringify(preData[key]) !== JSON.stringify(this.props[key])) {\n                  this.setData(Object.assign({}, this.data, {[key]: this.props[key]}));\n                  _observers[key].apply(this, [this.props[key], prevProps[key]]);\n                }\n              } else if (this.props[key] !== prevProps[key]) {\n                this.data[key] = this.props[key];\n                this.setData(this.data);\n              }\n            }\n          },",lifeCircle=[didMount,didUnmount,didUpdate].join(""),observers=uneval(observerMap).replace(/^\(|\)$/g,"").replace(/observer\(/g,"function(").replace(/\(\) => {/g,"function() {"),newProps=props.replace(str,uneval(propMap).replace(/^\(|\)$/g,""));return match.replace("Component({","let _observers = "+observers+";\r\nComponent({\r\n"+lifeCircle).replace(props,newProps)}).replace(/methods:[\s\n]*{,
triggerEvent: function(name, opt) {
            this.props['on' + name[0].toUpperCase() + name.substring(1)]({detail:opt});
          },
[\s\S]*/g,function(e){return e.replace(/on\w+\((\w+)\)\s*{/g,function(e,t){return[e,`if (${t} && ${t}.target && ${t}.target.targetDataset) {\n              ${t}.target.dataset = ${t}.target.targetDataset;\n            }`].join("\r\n")})})}module.exports=convert;