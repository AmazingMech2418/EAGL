// from ObjectifyJS strings
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
function splitCode(code,splitter,nodata) {
  var a = [""];
  var nodataB = 0;
  for (var i=0; i<code.length; i++) {
    
    if (nodata.indexOf(code[i])!==-1) {
      if (nodataB===0) {
          nodataB=1;
          } else {
          nodataB=0;
          }
    }
    if (code[i]===splitter && nodataB===0) {
        a.push("");
        } else {
        a[a.length-1]+=code[i];
        }
  }
  return a;
}

function compile (code) {
var c = code.split(";");
var params = [];
  var command = [];
  for (var i=0; i<c.length; i++) {
    params = c[i].split("|");
command = params[0];
    params = splitCode(params[1],' ','"');
    // coming soon: reporter block-like functions
}
}
