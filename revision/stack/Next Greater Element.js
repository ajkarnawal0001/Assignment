function runProgram(input) {
    input = input.split("\n");
    let test = +input[0]
    for(let a = 1;a<=test*2;a=a+2){
    let len = +input[a];
    let arr = input[a+1].split(" ").map(Number);
  
    console.log(greaterRight(arr,len).trim())
  }
}
  function greaterRight(arr, n) {
    let stack = [];
      let ans = ""
    for (let i = n-1; i >= 0; i--) {
      while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
          ans=-1+" " + ans
      }
  
      else {
        ans =stack[stack.length - 1] + " " + ans
      }
  
      stack.push(arr[i]);
    }
    return ans
  }
  
  if (process.env.USERNAME === "KARNAWAL") {
    runProgram(`1
4
1 3 2 4`);
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