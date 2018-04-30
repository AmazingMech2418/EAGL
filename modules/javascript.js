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
