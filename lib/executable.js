let exec = require('child_process').exec;
function open(file) {
exec("start "+file);
  exec("open "+file);
}
function cd(dir) {
process.chdir(dir);
}
function getDir() {
return process.cwd;
}

let fs = require('fs');
function read(file) {
fs.readFileSync(file,{encoding:"utf-8"});
}
function write(file,content) {
fs.writeFileSync(file,content);
}

var http = require('http');
var url = require('url');
function server(content,port) {
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  res.end(content);
}).listen(port);
}
