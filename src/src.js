// from ObjectifyJS strings
var functionslol = {};
String.prototype.splitBrackets=function(open,close) {
var a = [""];
var brackets = 0;
for(var i=0; i<this.length; i++) {
  if (this[i]===open) {
  brackets += 1;
    if(brackets === 1){
    a.push("");
    } else {a[a.length-1] += this[i];}
  } else if (this[i]===close) {
  brackets -= 1;if(brackets!==0){a[a.length-1] += this[i];}
  } else {
  a[a.length-1] += this[i];
  }
}
  return a;
}
// From Failed Language EasyCode
function splitCode(code,splitter,nodata,keep) {
  var a = [""];
  var nodataB = 0;
  for (var i=0; i<code.length; i++) {
    
    if (nodata.indexOf(code[i])!==-1) {
      if (nodataB===0) {
          nodataB=1;
          } else {
          nodataB=0;
          }
      // if(keep) {a[a.length-1]+=code[i];}
    }
    if (code[i]===splitter && nodataB===0) {
        a.push("");
        } else {
          if((keep) || (code[i]!==nodata)){
        a[a.length-1]+=code[i];
          }
        }
  }
  return a;
}
function compileLine(cmd) {
  var params = [];
  var cmdlol = "";
params = splitCode(cmd,"|","$",true);
cmdlol = params[0];
   // params = splitCode(params[1],' ','"',false);
params = filter(params);
  return run(cmdlol,params);

}
function compile (code) {
var c = code.split(";");

  for (var i=0; i<c.length; i++) {
    console.log(compileLine(c[i]));
}
}
function filter(params) {
  params.shift();
    for (var z=0; z<params.length; z++) {
    if (params[z].indexOf("$")!==-1) {
    params[z] = compileLine(params[z].slice(1,params[z].length-1));
    }
    }
  return params;
}
function run(cmdlol,params) {
  var lol = functionslol[cmdlol];
return lol(params);
  
}
function module(name,content) {
functionslol[name]=content;
}
module("add html",function(args){addTag(args[0]);});
module("add javascript",function(args){addjavascript(args[0]);});
module("run javascript",function(args){return runjavascript(args[0]);});
module("compile canvas for graphics interface",function(args){compileCanvas();});
module("run batch or bash",function(args){exec(args[0]);});
module("open a file",function(args){open(args[0]);});
module("change directory",function(args){cd(args[0]);});
module("get directory",function(args){return getDir()();});
module("write to a file",function(args){write(args[0],args[1]);});
module("read a file",function(args){return read(args[0]);});
module("start a server",function(args){server(args[0],args[1]);});
module("start a server and open it",function(args){server(args[0],args[1]);open("http://localhost:"+args[1]);});
module("JSON parse",function(args){return JSON.parse(args[0]);});
module("search for text in string",function(args){return args[0].indexOf(args[1]);});
module("search for text in string version 2",function(args){return args[0].search(args[1]);});
function variable(name,content) {
  if (!console[name]) {
console[name]=content;
  }
}
module("make a variable",function(args){variable(args[0],args[1]);});
module("get variable",function(args){return console[args[0]];});
