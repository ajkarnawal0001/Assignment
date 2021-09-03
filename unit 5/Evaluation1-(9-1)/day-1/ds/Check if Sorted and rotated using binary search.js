function runProgram(input) {
    input = input.split("\n")
    let N = +input[0]
    let arr = input[1].split(" ").map(Number)
    
    let low = 0
    let high = N - 1
    let mid = Math.floor((low + high) / 2)

    
}
  if(process.env.USERNAME ==="HP"){
      runProgram(`6
3 4 7 9 1 2`);
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