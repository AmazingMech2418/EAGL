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
filter();
  var lol = functionslol[cmdlol];
  return lol(params);
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
    if (params[z].search("$")!==-1) {
    params[z] = compileLine(params[z].slice(1,params[z].length-1));
    }
    }
}
