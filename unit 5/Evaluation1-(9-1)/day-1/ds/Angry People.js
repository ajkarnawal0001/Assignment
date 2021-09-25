function runProgram(input) {
  input = input.trim().split("\n")
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
     arr.sort(function (a, b) {
       return a - b;
     });

let ans=0;
for(let i=0;i<N;i++){
  if(i+2>=N){
    console.log(i)
    break;
  }
      ans = Math.max(ans, arr[i + 2] - arr[i]);
  }
  console.log(ans)
console.log(process.env.USERNAME)
}


if(process.env.USERNAME ==="HP"){
  runProgram(`6 3
16 17 4 3 5 2`);
}else{
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () { 
read = read.replace(/\n$/,"")
runProgram(read);
});

process.on("SIGINT", function () {
read = read.replace(/\n$/,"")
runProgram(read);
process.exit(0);
});
}