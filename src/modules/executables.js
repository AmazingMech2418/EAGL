module("run batch or bash",function(args){exec(args[0]);});
module("open a file",function(args){open(args[0]);});
module("change directory",function(args){cd(args[0]);});
module("get directory",function(args){return getDir()();});
module("write to a file",function(args){write(args[0],args[1]);});
module("read a file",function(args){return read(args[0]);});
module("start a server",function(args){server(args[0],args[1]);});
module("start a server and open it",function(args){server(args[0],args[1]);open("http://localhost:"+args[1]);});
