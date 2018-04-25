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
