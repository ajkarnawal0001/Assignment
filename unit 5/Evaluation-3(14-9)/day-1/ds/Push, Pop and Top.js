function runProgram(input) {
    input = input.split("\n");
    let len = +input[0];
    let S = []
    for(let i =1 ;i<=len;i++){
        let Q = input[i]
        let N = Q.length
        if(Q.length>1){
            [Q,N] = input[i].split(" ").map(Number)
        }
        // console.log(Q)
        if(Q==1){
            S.push(N)
        }
        if(Q==2){
            S.pop()
        }
        if(Q==3){
            if(S.length!==0){
                console.log(S[S.length-1])
            }else{
                console.log("empty!")
            }
        }
    }
  }
  
  if (process.env.USERNAME === "KARNAWAL") {
runProgram(`6
1 15
1 20
2
3
2
3`);
  } else {
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
  