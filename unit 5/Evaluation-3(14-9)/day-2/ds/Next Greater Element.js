function runProgram(input) {
    input = input.split("\n");
    let test = +input[0]
    for(let a = 1;a<=test*2;a=a+2){
    let len = +input[a];
    let arr = input[a+1].split(" ").map(Number);
        console.log(a)
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
    runProgram(`10
    6
    8 11 1 20 15 19
    1
    15
    9
    2 5 1 6 2 4 4 5 5
    6
    8 8 10 3 8 3
    11
    16 10 8 10 9 8 15 9 4 16 15
    2
    4 2
    11
    6 9 10 5 6 3 9 2 10 11 4
    13
    11 1 6 12 12 1 14 12 10 12 7 11 15
    12
    3 1 1 3 2 5 6 4 3 3 5 4
    14
    9 8 9 8 4 4 8 9 4 5 5 4 3 3`);
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
  