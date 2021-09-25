function runProgram(input) {
   
  input = input.split("\n");
  let n = parseInt(input[0]);
  let playerM = input[1].split(" ").map(Number).sort((a,b)=>{
    return a-b
})
let playerN = input[3].split(" ").map(Number).sort((a,b)=>{
    return b-a
})
// console.log(playerN)
let maxN = playerN[0]
// console.log(maxN)
let money = 0
for(let i=0;i<playerM.length;i++){
    if(playerM[i]>maxN){
        break
    }else{
        let ans = maxN-playerM[i]+1
        // console.log(ans , "playerM")
        money+=ans
    }
}
console.log(money)
}
   if(process.env.USERNAME ==="KARNAWAL"){
runProgram(`3
1 3 10
2
3 4`);
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
