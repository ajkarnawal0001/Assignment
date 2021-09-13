function runProgram(input) {
    input = input.split("\n")
    let len = +input[0]
    let arr = input[1].split(" ").map(Number)
    let low = 0
    let high = len
    let k = 1
    let g= true
    while(low <= high){
       let mid = Math.floor((low+high)/2)
       if(arr[mid]==1){
           console.log(mid-1)
           g = false
           break
       }
       else if(arr[mid]>k){
           high = mid-1
       }else{
        low = mid+1
       }
   }
   if(g){
       console.log(-1)
   }
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`5
0 0 0 1 1`);
}  else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});
}
  
    