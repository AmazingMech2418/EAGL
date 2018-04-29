// from ObjectifyJS strings
var functions = {};
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
params = splitCode(cmd,"|","$",true);
command = params[0];
   // params = splitCode(params[1],' ','"',false);
  params.shift();
    for (var z=0; z<params.length; z++) {
    if (params[z].search("$")!==-1) {
    params[z] = compileLine(params[z].slice(1,params[z].length-1));
    }
    }
  return eval(functions[command].replace("ARG0",params[0]).replace("ARG1",params[1]).replace("ARG2",params[2]).replace("ARG3",params[3]).replace("ARG4",params[4]).replace("ARG5",params[5]).replace("ARG6",params[6]).replace("ARG7",params[7]).replace("ARG8",params[8]).replace("ARG9",params[9]));
}
function compile (code) {
var c = code.split(";");
var params = [];
  var command = [];
  for (var i=0; i<c.length; i++) {
    console.log(compileLine(c[i],params,command));
}
}
