const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
  let sum = 0
  let degreelist = mtrx
  for(a=0;a<degreelist.length;a++){
    }
  return sum
}

function degreecentrality(mtrx,v){
  let neighbors = [A(a,a)];
    return A.div
}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
