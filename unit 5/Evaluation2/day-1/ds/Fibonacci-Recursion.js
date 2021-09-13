function runProgram(input) {
    input = +input
    let ans = fibb(input)
    console.log(ans)
    function fibb(n) {
        if (n <= 1){
            return n;
        }
        return fibb(n-1) + fibb(n-2);
    }
  }
  if (process.env.USERNAME === "KARNAWAL") {
  runProgram(`4`);
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
  
    