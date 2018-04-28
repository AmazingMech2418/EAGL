var html = "";
var js = `var c = document.getElementsByTagName("canvas")[0];
var ctx = c.getContext("2d");
var canvasJS = {
rectangle: function(x,y,h,w){ctx.fillRect(x,y,h,w);},
text: {
stroke:function(font,text,x,y){ctx.font = font;
ctx.strokeText(text,x,y);},
fill: function(font,text,x,y){ctx.font = font;
ctx.fillText(text,x,y);}
},
gradientLinear: function(gx,gy,gx2,gy2,clr1,clr2,x,y,w,h){
var grd = ctx.createLinearGradient(gx,gy,gx2,gy2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x,y,w,h);
},
gradientRadial: function(x1,y1,r1,x2,y2,r2,clr1,clr2,x,y,w,h){
var grd = ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x,y,w,h);
},
image: function(source,x,y,w,h){
imaged=new Image();
imaged.src=source;
ctx.drawImage(imaged,x,y,w,h);
}
};`;
function compileCanvas() {
html = "<canvas></canvas><script>"+js+"</script>"+html;
}
function addjavascript(code) {
js+=code;
}
function runjavascript(code) {
eval(code);
}
function addTag(tag) {
html+=tag;
}
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
