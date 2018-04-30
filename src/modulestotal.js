
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
