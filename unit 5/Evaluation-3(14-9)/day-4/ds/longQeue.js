function runProgram(input) {
     input = input.split("\n")
    let len = +input[0]
    let arr = input[1].trim().split(" ")
    let ans = longQueue(arr)
}
function longQueue(queue){
    let numGroups = 1
    let count = 1
    // for(var i=0; i<queue.length - 1; i++){
    //     if((+queue[i]) > (+queue[i+1])){
    //         numGroups++;
    //     }
    // }
    for (i = 0;i<queue.length-1;i++){
        if ((+queue[i]) > (+queue[i+1])) {
            count++
        }
    }
    console.log(count)
}
   if(process.env.USERNAME ==="KARNAWAL"){
        runProgram(`25
        99 92 90 87 83 80 79 75 71 67 66 52 51 36 36 33 33 27 24 21 13 11 2 2 1`);
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