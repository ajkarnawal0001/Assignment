function runProgram(input) {
    input = +input
    let ans = fact(input)
    console.log(ans)
    function fact(n) {
        if(n==1){
            return 1
        }
        else return fact(n-1)* n
    }
  }
  if (process.env.USERNAME === "KARNAWAL") {
  runProgram(`5`);
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
  
    