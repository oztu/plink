!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){function c(a){this.p=d.create(a)}var d=a("internet"),e=a("./PlinkServer.js");c.create=function(a){return new c(a)},b.exports=c,c.prototype.connect=function(a){var b=this.p.connect(a);return e.create(b)}},{"./PlinkServer.js":2,internet:8}],2:[function(a,b){function c(a){this.promises={},this.onramp=a,this.onramp.on("message",this.messageHandler.bind(this)),this.on=this.onramp.on.bind(this.onramp),this.removeListener=this.onramp.removeListener.bind(this.onramp)}var d=a("when");c.create=function(a){return new c(a)},b.exports=c,c.prototype.setPasscode=function(a,b){var c=this.promises["set"+a];return c||(c=this.promises["set"+a]=d.defer()),this.onramp.send({type:"set passcode",passcode:a,timeout:b}),c.promise},c.prototype.revokePasscode=function(a){var b=this.promises["revoke"+a];return b||(b=this.promises["revoke"+a]=d.defer()),this.onramp.send({type:"revoke passcode",passcode:a}),b.promise},c.prototype.usePasscode=function(a){var b=this.promises["use"+a];return b||(b=this.promises["use"+a]=d.defer()),this.onramp.send({type:"use passcode",passcode:a}),b.promise},c.prototype.messageHandler=function(a){if(a.type){var b,c=a.passcode;switch(a.type){case"address":var d=this.onramp.connect(a.address);b=this.promises["use"+c],b.resolve(d),delete this.promises["use"+c];break;case"invalid passcode":b=this.promises["use"+c],b.reject(new Error("invalid passcode: "+a.passcode)),delete this.promises["use"+c];break;case"passcode set":b=this.promises["set"+c],b.resolve(a.passcode),delete this.promises["set"+c];break;case"passcode not set":b=this.promises["set"+c],b.reject(new Error("passcode not set: "+a.passcode)),delete this.promises["set"+c];break;case"passcode revoked":b=this.promises["revoke"+c],b.resolve(a.passcode),delete this.promises["revoke"+c];break;case"passcode revoked":b=this.promises["revoke"+c],b.resolve(new Error("passcode not revoked: "+a.passcode)),delete this.promises["revoke"+c]}}}},{when:17}],3:[function(a){window.Plink=a("./Plink.js")},{"./Plink.js":1}],4:[function(a,b,c){function d(a){return"[object Array]"===j.call(a)}function e(a,b){var c;if(null===a)c={__proto__:null};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");var d=function(){};d.prototype=a,c=new d,c.__proto__=a}return"undefined"!=typeof b&&Object.defineProperties&&Object.defineProperties(c,b),c}function f(a){return"object"!=typeof a&&"function"!=typeof a||null===a}function g(a){if(f(a))throw new TypeError("Object.keys called on a non-object");var b=[];for(var c in a)k.call(a,c)&&b.push(c);return b}function h(a){if(f(a))throw new TypeError("Object.getOwnPropertyNames called on a non-object");var b=g(a);return c.isArray(a)&&-1===c.indexOf(a,"length")&&b.push("length"),b}function i(a,b){return{value:a[b]}}var j=Object.prototype.toString,k=Object.prototype.hasOwnProperty;c.isArray="function"==typeof Array.isArray?Array.isArray:d,c.indexOf=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1},c.filter=function(a,b){if(a.filter)return a.filter(b);for(var c=[],d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c},c.forEach=function(a,b,c){if(a.forEach)return a.forEach(b,c);for(var d=0;d<a.length;d++)b.call(c,a[d],d,a)},c.map=function(a,b){if(a.map)return a.map(b);for(var c=new Array(a.length),d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c},c.reduce=function(a,b,c){if(a.reduce)return a.reduce(b,c);var d,e=!1;2<arguments.length&&(d=c,e=!0);for(var f=0,g=a.length;g>f;++f)a.hasOwnProperty(f)&&(e?d=b(d,a[f],f,a):(d=a[f],e=!0));return d},c.substr="b"!=="ab".substr(-1)?function(a,b,c){return 0>b&&(b=a.length+b),a.substr(b,c)}:function(a,b,c){return a.substr(b,c)},c.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},c.bind=function(){var a=Array.prototype.slice.call(arguments),b=a.shift();if(b.bind)return b.bind.apply(b,a);var c=a.shift();return function(){b.apply(c,a.concat([Array.prototype.slice.call(arguments)]))}},c.create="function"==typeof Object.create?Object.create:e;var l="function"==typeof Object.keys?Object.keys:g,m="function"==typeof Object.getOwnPropertyNames?Object.getOwnPropertyNames:h;if((new Error).hasOwnProperty("description")){var n=function(a,b){return"[object Error]"===j.call(a)&&(b=c.filter(b,function(a){return"description"!==a&&"number"!==a&&"message"!==a})),b};c.keys=function(a){return n(a,l(a))},c.getOwnPropertyNames=function(a){return n(a,m(a))}}else c.keys=l,c.getOwnPropertyNames=m;if("function"==typeof Object.getOwnPropertyDescriptor)try{Object.getOwnPropertyDescriptor({a:1},"a"),c.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor}catch(o){c.getOwnPropertyDescriptor=function(a,b){try{return Object.getOwnPropertyDescriptor(a,b)}catch(c){return i(a,b)}}}else c.getOwnPropertyDescriptor=i},{}],5:[function(a,b){function c(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}var d=a("util");b.exports=c,c.EventEmitter=c,c.prototype._events=void 0,c.prototype._maxListeners=void 0,c.defaultMaxListeners=10,c.prototype.setMaxListeners=function(a){if(!d.isNumber(a)||0>a)throw TypeError("n must be a positive number");return this._maxListeners=a,this},c.prototype.emit=function(a){var b,c,e,f,g,h;if(this._events||(this._events={}),"error"===a&&(!this._events.error||d.isObject(this._events.error)&&!this._events.error.length))throw b=arguments[1],b instanceof Error?b:TypeError('Uncaught, unspecified "error" event.');if(c=this._events[a],d.isUndefined(c))return!1;if(d.isFunction(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(e=arguments.length,f=new Array(e-1),g=1;e>g;g++)f[g-1]=arguments[g];c.apply(this,f)}else if(d.isObject(c)){for(e=arguments.length,f=new Array(e-1),g=1;e>g;g++)f[g-1]=arguments[g];for(h=c.slice(),e=h.length,g=0;e>g;g++)h[g].apply(this,f)}return!0},c.prototype.addListener=function(a,b){var e;if(!d.isFunction(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,d.isFunction(b.listener)?b.listener:b),this._events[a]?d.isObject(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,d.isObject(this._events[a])&&!this._events[a].warned){var e;e=d.isUndefined(this._maxListeners)?c.defaultMaxListeners:this._maxListeners,e&&e>0&&this._events[a].length>e&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),console.trace())}return this},c.prototype.on=c.prototype.addListener,c.prototype.once=function(a,b){function c(){this.removeListener(a,c),b.apply(this,arguments)}if(!d.isFunction(b))throw TypeError("listener must be a function");return c.listener=b,this.on(a,c),this},c.prototype.removeListener=function(a,b){var c,e,f,g;if(!d.isFunction(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,e=-1,c===b||d.isFunction(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(d.isObject(c)){for(g=f;g-->0;)if(c[g]===b||c[g].listener&&c[g].listener===b){e=g;break}if(0>e)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(e,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},c.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],d.isFunction(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},c.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?d.isFunction(this._events[a])?[this._events[a]]:this._events[a].slice():[]},c.listenerCount=function(a,b){var c;return c=a._events&&a._events[b]?d.isFunction(a._events[b])?1:a._events[b].length:0}},{util:6}],6:[function(a,b,c){function d(a,b){var d={seen:[],stylize:f};return arguments.length>=3&&(d.depth=arguments[2]),arguments.length>=4&&(d.colors=arguments[3]),o(b)?d.showHidden=b:b&&c._extend(d,b),u(d.showHidden)&&(d.showHidden=!1),u(d.depth)&&(d.depth=2),u(d.colors)&&(d.colors=!1),u(d.customInspect)&&(d.customInspect=!0),d.colors&&(d.stylize=e),h(d,a,d.depth)}function e(a,b){var c=d.styles[b];return c?"["+d.colors[c][0]+"m"+a+"["+d.colors[c][1]+"m":a}function f(a){return a}function g(a){var b={};return G.forEach(a,function(a){b[a]=!0}),b}function h(a,b,d){if(a.customInspect&&b&&z(b.inspect)&&b.inspect!==c.inspect&&(!b.constructor||b.constructor.prototype!==b)){var e=b.inspect(d);return s(e)||(e=h(a,e,d)),e}var f=i(a,b);if(f)return f;var o=G.keys(b),p=g(o);if(a.showHidden&&(o=G.getOwnPropertyNames(b)),0===o.length){if(z(b)){var q=b.name?": "+b.name:"";return a.stylize("[Function"+q+"]","special")}if(v(b))return a.stylize(RegExp.prototype.toString.call(b),"regexp");if(x(b))return a.stylize(Date.prototype.toString.call(b),"date");if(y(b))return j(b)}var r="",t=!1,u=["{","}"];if(n(b)&&(t=!0,u=["[","]"]),z(b)){var w=b.name?": "+b.name:"";r=" [Function"+w+"]"}if(v(b)&&(r=" "+RegExp.prototype.toString.call(b)),x(b)&&(r=" "+Date.prototype.toUTCString.call(b)),y(b)&&(r=" "+j(b)),0===o.length&&(!t||0==b.length))return u[0]+r+u[1];if(0>d)return v(b)?a.stylize(RegExp.prototype.toString.call(b),"regexp"):a.stylize("[Object]","special");a.seen.push(b);var A;return A=t?k(a,b,d,p,o):o.map(function(c){return l(a,b,d,p,c,t)}),a.seen.pop(),m(A,r,u)}function i(a,b){if(u(b))return a.stylize("undefined","undefined");if(s(b)){var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string")}return r(b)?a.stylize(""+b,"number"):o(b)?a.stylize(""+b,"boolean"):p(b)?a.stylize("null","null"):void 0}function j(a){return"["+Error.prototype.toString.call(a)+"]"}function k(a,b,c,d,e){for(var f=[],g=0,h=b.length;h>g;++g)f.push(F(b,String(g))?l(a,b,c,d,String(g),!0):"");return G.forEach(e,function(e){e.match(/^\d+$/)||f.push(l(a,b,c,d,e,!0))}),f}function l(a,b,c,d,e,f){var g,i,j;if(j=G.getOwnPropertyDescriptor(b,e)||{value:b[e]},j.get?i=j.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):j.set&&(i=a.stylize("[Setter]","special")),F(d,e)||(g="["+e+"]"),i||(G.indexOf(a.seen,j.value)<0?(i=p(c)?h(a,j.value,null):h(a,j.value,c-1),i.indexOf("\n")>-1&&(i=f?i.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+i.split("\n").map(function(a){return"   "+a}).join("\n"))):i=a.stylize("[Circular]","special")),u(g)){if(f&&e.match(/^\d+$/))return i;g=JSON.stringify(""+e),g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(g=g.substr(1,g.length-2),g=a.stylize(g,"name")):(g=g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),g=a.stylize(g,"string"))}return g+": "+i}function m(a,b,c){var d=0,e=G.reduce(a,function(a,b){return d++,b.indexOf("\n")>=0&&d++,a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0);return e>60?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function n(a){return G.isArray(a)}function o(a){return"boolean"==typeof a}function p(a){return null===a}function q(a){return null==a}function r(a){return"number"==typeof a}function s(a){return"string"==typeof a}function t(a){return"symbol"==typeof a}function u(a){return void 0===a}function v(a){return w(a)&&"[object RegExp]"===C(a)}function w(a){return"object"==typeof a&&a}function x(a){return w(a)&&"[object Date]"===C(a)}function y(a){return w(a)&&"[object Error]"===C(a)}function z(a){return"function"==typeof a}function A(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||"undefined"==typeof a}function B(a){return a&&"object"==typeof a&&"function"==typeof a.copy&&"function"==typeof a.fill&&"function"==typeof a.binarySlice}function C(a){return Object.prototype.toString.call(a)}function D(a){return 10>a?"0"+a.toString(10):a.toString(10)}function E(){var a=new Date,b=[D(a.getHours()),D(a.getMinutes()),D(a.getSeconds())].join(":");return[a.getDate(),I[a.getMonth()],b].join(" ")}function F(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var G=a("_shims"),H=/%[sdj%]/g;c.format=function(a){if(!s(a)){for(var b=[],c=0;c<arguments.length;c++)b.push(d(arguments[c]));return b.join(" ")}for(var c=1,e=arguments,f=e.length,g=String(a).replace(H,function(a){if("%%"===a)return"%";if(c>=f)return a;switch(a){case"%s":return String(e[c++]);case"%d":return Number(e[c++]);case"%j":try{return JSON.stringify(e[c++])}catch(b){return"[Circular]"}default:return a}}),h=e[c];f>c;h=e[++c])g+=p(h)||!w(h)?" "+h:" "+d(h);return g},c.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},c.isArray=n,c.isBoolean=o,c.isNull=p,c.isNullOrUndefined=q,c.isNumber=r,c.isString=s,c.isSymbol=t,c.isUndefined=u,c.isRegExp=v,c.isObject=w,c.isDate=x,c.isError=y,c.isFunction=z,c.isPrimitive=A,c.isBuffer=B;var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.log=function(){console.log("%s - %s",E(),c.format.apply(c,arguments))},c.inherits=function(a,b){a.super_=b,a.prototype=G.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})},c._extend=function(a,b){if(!b||!w(b))return a;for(var c=G.keys(b),d=c.length;d--;)a[c[d]]=b[c[d]];return a}},{_shims:4}],7:[function(a,b){var c=b.exports={};c.nextTick=function(){var a="undefined"!=typeof window&&window.setImmediate,b="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(a)return function(a){return window.setImmediate(a)};if(b){var c=[];return window.addEventListener("message",function(a){var b=a.source;if((b===window||null===b)&&"process-tick"===a.data&&(a.stopPropagation(),c.length>0)){var d=c.shift();d()}},!0),function(a){c.push(a),window.postMessage("process-tick","*")}}return function(a){setTimeout(a,0)}}(),c.title="browser",c.browser=!0,c.env={},c.argv=[],c.binding=function(){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(){throw new Error("process.chdir is not supported")}},{}],8:[function(a,b){b.exports=a("./lib/P.js")},{"./lib/P.js":12}],9:[function(a,b){function c(){throw new Error("This method is not implemented")}function d(a,b,c){g.string(a),g.defined(b),this.address=a,this.peers=b,this.emitter=c||new d.Emitter,this.on=this.emitter.on.bind(this.emitter),this.removeListener=this.emitter.removeListener.bind(this.emitter)}function e(a){return"[object String]"===Object.prototype.toString.call(a)}var f=a("./JSONProtocol.js"),g=a("its"),h=a("events").EventEmitter;d.createWebRTCConnection=null,d.Emitter=h,d.prototype=Object.create(f.prototype),d.prototype.send=f.prototype.writeMessage,d.prototype.getPeer=function(a){return this.peers.get(a)},d.prototype.addPeer=function(a){return this.peers.add(a)},d.prototype.getPeers=function(){return this.peers.get()},d.prototype.connect=function(a){e(a)&&(a={address:a});var b=this,c=d.createWebRTCConnection(a,this.peers,this);return c.writeOffer(a),this.peers.add(c),c.on("close",function(){b.peers.remove(c),b.emitter.emit("disconnection",c)}),this.emitter.emit("connection",c),c},d.prototype.readMessage=function(a){this.emitter.emit("message",a)},d.prototype.acceptRTCConnection=function(){return!0},d.prototype.readRelay=function(a,b){var c=this.getPeer(a);c.writeRelayedMessage(this.address,b)},d.prototype.readRelayedIceCandidate=function(a,b){var c=this.getPeer(a);c.readIceCandidate(b)},d.prototype.readRelayedOffer=function(a,b,c){if(!this.acceptRTCConnection(b,c))return!1;var e=this,f=d.createWebRTCConnection({address:a},this.peers,this);this.addPeer(f),f.on("close",function(){e.peers.remove(f),e.emitter.emit("disconnection",f)}),f.readOffer(b,c),f.writeAnswer(),this.emitter.emit("connection",f)},d.prototype.readRelayedAnswer=function(a,b){var c=this.getPeer(a);c.readAnswer(b)},d.prototype.close=c,d.prototype.getReadyState=c,d.prototype.isOpen=function(){return"open"===this.getReadyState()},b.exports=d},{"./JSONProtocol.js":11,events:5,its:15}],10:[function(a,b){function c(){}function d(){this.connectionMap={},this.connectionList=[]}var e=a("its");d.prototype.get=function(a){return void 0===a?this.connectionList.slice():this.connectionMap[a]},d.prototype.add=function(a){e.defined(a);var b=a.address;return e.string(b),b in this.connectionMap?!1:(this.connectionMap[b]=a,this.connectionList.push(a),this.onAdd(a),!0)},d.prototype.onAdd=c,d.prototype.remove=function(a){e.defined(a);var b=a.address;e.string(b);var c=this.connectionMap[b];if(!c||c!==a)return!1;delete this.connectionMap[b];var d=this.connectionList.indexOf(a);return this.connectionList.splice(d,1),this.onRemove(a),!0},d.prototype.onRemove=c,b.exports=d},{its:15}],11:[function(a,b){function c(){throw new Error("This method is not implemented")}function d(){}d.prototype.PROTOCOL_NAME="p",d.prototype.MESSAGE_TYPE={DIRECT:0,RTC_OFFER:3,RTC_ANSWER:4,RTC_ICE_CANDIDATE:5,RELAY:6,RELAYED:7},d.prototype.readRaw=function(a){a instanceof ArrayBuffer?this.readArrayBuffer(a):this.readProtocolMessage(JSON.parse(a))},d.prototype.readProtocolMessage=function(a){var b=this.MESSAGE_TYPE,c=a[0];switch(c){case b.DIRECT:this.readMessage(a[1]);break;case b.RELAYED:this.readRelayedMessage(a[1],a[2]);break;case b.RELAY:this.readRelay(a[1],a[2]);break;default:throw new Error("Unknown message type: "+c)}},d.prototype.readRelayedMessage=function(a,b){var c=this.MESSAGE_TYPE,d=b[0];switch(d){case c.RTC_OFFER:this.readRelayedOffer(a,b[1],b[2]);break;case c.RTC_ANSWER:this.readRelayedAnswer(a,b[1]);break;case c.RTC_ICE_CANDIDATE:this.readRelayedIceCandidate(a,b[1]);break;default:throw new Error("Unknown message type: "+d)}},d.prototype.readMessage=c,d.prototype.readArrayBuffer=c,d.prototype.readRelay=c,d.prototype.readRelayedOffer=c,d.prototype.readRelayedAnswer=c,d.prototype.readRelayedIceCandidate=c,d.prototype.writeRaw=c,d.prototype.writeProtocolMessage=function(a){var b=JSON.stringify(a);this.writeRaw(b)},d.prototype.writeMessage=function(a){a instanceof ArrayBuffer?this.writeRaw(a):this.writeStringMessage(a)},d.prototype.writeStringMessage=function(a){this.writeProtocolMessage([this.MESSAGE_TYPE.DIRECT,a])},d.prototype.writeRelayedMessage=function(a,b){this.writeProtocolMessage([this.MESSAGE_TYPE.RELAYED,a,b])},d.prototype.writeRelayMessage=function(a,b){this.writeProtocolMessage([this.MESSAGE_TYPE.RELAY,a,b])},d.prototype.writeRelayAnswer=function(a,b){this.writeRelayMessage(a,[this.MESSAGE_TYPE.RTC_ANSWER,b])},d.prototype.writeRelayIceCandidate=function(a,b){this.writeRelayMessage(a,[this.MESSAGE_TYPE.RTC_ICE_CANDIDATE,b])},d.prototype.writeRelayOffer=function(a,b,c){this.writeRelayMessage(a,[this.MESSAGE_TYPE.RTC_OFFER,b,c])},b.exports=d},{}],12:[function(a,b){function c(a,b){g.defined(a),g.defined(b),this.emitter=a,this.peers=b,this.peers.onAdd=function(b){a.emit("connection",b)},this.peers.onRemove=function(b){a.emit("disconnection",b)},this.on=a.on.bind(a),this.removeListener=a.removeListener.bind(a)}var d=a("events").EventEmitter,e=a("./ConnectionManager.js"),f=a("./WebSocketConnection.js"),g=(a("./WebRTCConnection.js"),a("its"));c.create=function(){var a=new d,b=new e;return new c(a,b)},c.prototype.getPeers=function(){return this.peers.get()},c.prototype.connect=function(a){g.string(a);var b=this.peers,c=f.create(a,this.peers);return b.add(c),c.on("close",function(){b.remove(c)}),c},b.exports=c},{"./ConnectionManager.js":10,"./WebRTCConnection.js":13,"./WebSocketConnection.js":14,events:5,its:15}],13:[function(a,b){function c(a,b,c,f){var g=this;e.string(a),e.defined(b),e.defined(c),e.defined(f),d.call(this,a,b),this.signalingChannel=f,this.rtcConnection=c,this.rtcDataChannel=c.createDataChannel(this.PROTOCOL_NAME,{reliable:!1}),this.close=c.close.bind(c),this.rtcConnection.addEventListener("icecandidate",function(b){b.candidate&&g.signalingChannel.writeRelayIceCandidate(a,b.candidate)}),this.rtcDataChannel.addEventListener("message",function(a){g.readRaw(a.data)}),this.rtcDataChannel.addEventListener("open",function(a){g.emitter.emit("open",a)}),this.rtcDataChannel.addEventListener("error",function(a){g.emitter.emit("error",a)}),this.rtcDataChannel.addEventListener("close",function(a){g.emitter.emit("close",a)})}var d=a("./Connection.js"),e=a("its"),f="undefined"!=typeof RTCPeerConnection?RTCPeerConnection:"undefined"!=typeof webkitRTCPeerConnection?webkitRTCPeerConnection:"undefined"!=typeof mozRTCPeerConnection?mozRTCPeerConnection:void 0,g="undefined"!=typeof RTCSessionDescription?RTCSessionDescription:"undefined"!=typeof mozRTCSessionDescription?mozRTCSessionDescription:void 0,h="undefined"!=typeof RTCIceCandidate?RTCIceCandidate:"undefined"!=typeof mozRTCIceCandidate?mozRTCIceCandidate:void 0,i=null,j={optional:[{RtpDataChannels:!0}],mandatory:{OfferToReceiveAudio:!1,OfferToReceiveVideo:!1}};c.create=function(a,b,d){var e=a.rtcConfiguration||i,g=a.mediaConstraints||j,h=new f(e,g);return new c(a.address,b,h,d)},c.prototype=Object.create(d.prototype),c.prototype.writeRaw=function(a){switch(this.rtcDataChannel.readyState){case"connecting":throw new Error("Can't send a message while RTCDataChannel connecting");case"open":this.rtcDataChannel.send(a);break;case"closing":case"closed":throw new Error("Can't send a message while RTCDataChannel is closing or closed")}},c.prototype.readAnswer=function(a){var b=new g(a);this.rtcConnection.setRemoteDescription(b)},c.prototype.readOffer=function(a){var b=new g(a);this.rtcConnection.setRemoteDescription(b)},c.prototype.readIceCandidate=function(a){this.emitter;this.rtcConnection.addIceCandidate(new h(a))},c.prototype.writeAnswer=function(){function a(a){b.emit("error",a)}var b=this.emitter,c=this.address,d=this.rtcConnection,e=this.signalingChannel;d.createAnswer(function(b){d.setLocalDescription(b,function(){e.writeRelayAnswer(c,b)},a)},a)},c.prototype.writeOffer=function(a){function b(a){c.emit("error",a)}var c=this.emitter,d=this.address,e=this.rtcConnection,f=this.signalingChannel;e.createOffer(function(a){e.setLocalDescription(a,function(){f.writeRelayOffer(d,a)},b)},b,a.mediaConstraints||j)},c.prototype.getReadyState=function(){return this.rtcDataChannel.readyState},d.createWebRTCConnection=c.create,b.exports=c},{"./Connection.js":9,its:15}],14:[function(a,b){function c(a,b,c){var e=this;d.call(this,a,b),this.webSocket=c,this.close=c.close.bind(c),this.webSocket.addEventListener("message",function(a){e.readRaw(a.data)}),this.webSocket.addEventListener("open",function(a){e.emitter.emit("open",a)}),this.webSocket.addEventListener("error",function(a){e.emitter.emit("error",a)}),this.webSocket.addEventListener("close",function(a){e.emitter.emit("close",a)})}var d=a("./Connection.js");c.create=function(a,b){var d=new WebSocket(a,c.prototype.PROTOCOL_NAME);return new c(a,b,d)},c.prototype=Object.create(d.prototype),c.prototype.writeRaw=function(a){switch(this.webSocket.readyState){case WebSocket.CONNECTING:throw new Error("Can't send a message while WebSocket connecting");case WebSocket.OPEN:this.webSocket.send(a);break;case WebSocket.CLOSING:case WebSocket.CLOSED:throw new Error("Can't send a message while WebSocket is closing or closed")}},c.prototype.getReadyState=function(){switch(this.webSocket.readyState){case WebSocket.CONNECTING:return"connecting";case WebSocket.OPEN:return"open";case WebSocket.CLOSING:return"closing";case WebSocket.CLOSED:return"closed"}},b.exports=c},{"./Connection.js":9}],15:[function(a,b){b.exports=a("./lib/its.js")},{"./lib/its.js":16}],16:[function(a,b){var c=Array.prototype.slice,d=Object.prototype.toString,e=/%s/,f=function(a,b){for(var c=[],d=a.split(e),f=0,g=d.length;g>f;f++)c.push(d[f]),c.push(b[f]);return c.join("")},g=b.exports=function(a,b){if(a===!1)throw b&&"string"!=typeof b?b(arguments.length>3?f(arguments[2],c.call(arguments,3)):arguments[2]):new Error(arguments.length>2?f(b,c.call(arguments,2)):b);return a};g.type=function(a,b){if(a===!1)throw new TypeError(arguments.length>2?f(b,c.call(arguments,2)):b);return a},g.undefined=function(a){return g.type.apply(null,[void 0===a].concat(c.call(arguments,1)))},g.null=function(a){return g.type.apply(null,[null===a].concat(c.call(arguments,1)))},g.boolean=function(a){return g.type.apply(null,[a===!0||a===!1||"[object Boolean]"===d.call(a)].concat(c.call(arguments,1)))},g.array=function(a){return g.type.apply(null,["[object Array]"===d.call(a)].concat(c.call(arguments,1)))},g.object=function(a){return g.type.apply(null,[a===Object(a)].concat(c.call(arguments,1)))},function(){for(var a=[["args","Arguments"],["func","Function"],["string","String"],["number","Number"],["date","Date"],["regexp","RegExp"]],b=0,e=a.length;e>b;b++)!function(){var e=a[b];g[e[0]]=function(a){return g.type.apply(null,[d.call(a)==="[object "+e[1]+"]"].concat(c.call(arguments,1)))}}()}(),"function"!=typeof/./&&(g.func=function(a){return g.type.apply(null,["function"==typeof a].concat(c.call(arguments,1)))}),g.defined=function(a,b){if(void 0===a)throw new ReferenceError(arguments.length>2?f(b,c.call(arguments,2)):b);return a},g.range=function(a,b){if(a===!1)throw new RangeError(arguments.length>2?f(b,c.call(arguments,2)):b);return a}},{}],17:[function(a,b){var c=a("__browserify_process");!function(a){"use strict";a(function(a){function b(a,b,c,d){return f(a).then(b,c,d)}function d(a){return new e(a,Q.PromiseStatus&&Q.PromiseStatus())}function e(a,b){function c(){return i?i.inspect():B()}function d(a,b,c,d,e){function f(f){f._when(a,b,c,d,e)}l?l.push(f):C(function(){f(i)})}function e(a){if(l){var c=l;l=U,C(function(){i=k(h,a),b&&p(i,b),j(c,i)})}}function f(a){e(new n(a))}function g(a){if(l){var b=l;C(function(){j(b,new o(a))})}}var h,i,l=[];h=this,this._status=b,this.inspect=c,this._when=d;try{a(e,f,g)}catch(m){f(m)}}function f(a){return a instanceof e?a:g(a)}function g(a){return d(function(b){b(a)})}function h(a){return b(a,function(a){return new n(a)})}function i(){function a(a,d,f){b.resolve=b.resolver.resolve=function(b){return e?g(b):(e=!0,a(b),c)},b.reject=b.resolver.reject=function(a){return e?g(new n(a)):(e=!0,d(a),c)},b.notify=b.resolver.notify=function(a){return f(a),a}}var b,c,e;return b={promise:U,resolve:U,reject:U,notify:U,resolver:{resolve:U,reject:U,notify:U}},b.promise=c=d(a),b}function j(a,b){for(var c=0;c<a.length;c++)a[c](b)}function k(a,b){if(b===a)return new n(new TypeError);if(b instanceof e)return b;try{var c=b===Object(b)&&b.then;return"function"==typeof c?l(c,b):new m(b)}catch(d){return new n(d)}}function l(a,b){return d(function(c,d){K(a,b,c,d)})}function m(a){this.value=a}function n(a){this.value=a}function o(a){this.value=a}function p(a,b){function c(){b.fulfilled()}function d(a){b.rejected(a)}a.then(c,d)}function q(a){return a&&"function"==typeof a.then}function r(a,c,e,f,g){return b(a,function(a){function h(d,e,f){function g(a){n(a)}function h(a){m(a)}var i,j,k,l,m,n,o,p;if(o=a.length>>>0,i=Math.max(0,Math.min(c,o)),k=[],j=o-i+1,l=[],i)for(n=function(a){l.push(a),--j||(m=n=E,e(l))},m=function(a){k.push(a),--i||(m=n=E,d(k))},p=0;o>p;++p)p in a&&b(a[p],h,g,f);else d(k)}return d(h).then(e,f,g)})}function s(a,b,c,d){function e(a){return b?b(a[0]):a[0]}return r(a,1,e,c,d)}function t(a,b,c,d){return x(a,E).then(b,c,d)}function u(){return x(arguments,E)}function v(a){return x(a,z,A)}function w(a,b){return x(a,b)}function x(a,c,d){return b(a,function(a){function f(e,f,g){function h(a,h){b(a,c,d).then(function(a){i[h]=a,--k||e(i)},f,g)}var i,j,k,l;if(k=j=a.length>>>0,i=[],!k)return void e(i);for(l=0;j>l;l++)l in a?h(a[l],l):--k}return new e(f)})}function y(a,c){var d=K(J,arguments,1);return b(a,function(a){var e;return e=a.length,d[0]=function(a,d,f){return b(a,function(a){return b(d,function(b){return c(a,b,f,e)})})},I.apply(a,d)})}function z(a){return{state:"fulfilled",value:a}}function A(a){return{state:"rejected",reason:a}}function B(){return{state:"pending"}}function C(a){1===M.push(a)&&L(D)}function D(){j(M),M=[]}function E(a){return a}function F(a){throw"function"==typeof Q.reportUnhandled?Q.reportUnhandled():C(function(){throw a}),a}b.promise=d,b.resolve=g,b.reject=h,b.defer=i,b.join=u,b.all=t,b.map=w,b.reduce=y,b.settle=v,b.any=s,b.some=r,b.isPromise=q,b.isPromiseLike=q,G=e.prototype,G.then=function(a,b,c){var d=this;return new e(function(e,f,g){d._when(e,g,a,b,c)},this._status&&this._status.observed())},G["catch"]=G.otherwise=function(a){return this.then(U,a)},G["finally"]=G.ensure=function(a){function b(){return g(a())}return"function"==typeof a?this.then(b,b)["yield"](this):this},G.done=function(a,b){this.then(a,b)["catch"](F)},G["yield"]=function(a){return this.then(function(){return a})},G.tap=function(a){return this.then(a)["yield"](this)},G.spread=function(a){return this.then(function(b){return t(b,function(b){return a.apply(U,b)})})},G.always=function(a,b){return this.then(a,a,b)},H=Object.create||function(a){function b(){}return b.prototype=a,new b},m.prototype=H(G),m.prototype.inspect=function(){return z(this.value)},m.prototype._when=function(a,b,c){try{a("function"==typeof c?c(this.value):this.value)}catch(d){a(new n(d))}},n.prototype=H(G),n.prototype.inspect=function(){return A(this.value)},n.prototype._when=function(a,b,c,d){try{a("function"==typeof d?d(this.value):this)}catch(e){a(new n(e))}},o.prototype=H(G),o.prototype._when=function(a,b,c,d,e){try{b("function"==typeof e?e(this.value):this.value)}catch(f){b(f)}};var G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U;if(S=a,M=[],Q="undefined"!=typeof console?console:b,"object"==typeof c&&c.nextTick)L=c.nextTick;else if(T="function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver)L=function(a,b,c){var d=a.createElement("div");return new b(c).observe(d,{attributes:!0}),function(){d.setAttribute("x","x")}}(document,T,D);else try{L=S("vertx").runOnLoop||S("vertx").runOnContext}catch(V){R=setTimeout,L=function(a){R(a,0)}}return N=Function.prototype,O=N.call,K=N.bind?O.bind(O):function(a,b){return a.apply(b,J.call(arguments,2))},P=[],J=P.slice,I=P.reduce||function(a){var b,c,d,e,f;if(f=0,b=Object(this),e=b.length>>>0,c=arguments,c.length<=1)for(;;){if(f in b){d=b[f++];break}if(++f>=e)throw new TypeError}else d=c[1];for(;e>f;++f)f in b&&(d=a(d,b[f],f,b));return d},b})}("function"==typeof define&&define.amd?define:function(c){b.exports=c(a)})},{__browserify_process:7}]},{},[3]);