function runProgram(input) {
  input = input.split("\n");
  let len = +input[0];
  let arr = input[1].split(" ").map(Number);

  console.log(smallerLeft(arr,len).trim())
}

function smallerLeft(arr, n) {
  let stack = [];
    let ans = ""
  for (let i = 0; i < n; i++) {
    while (stack.length != 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
        ans+=-1+" "
    }

    else {
      ans+=stack[stack.length - 1] +" "
    }

    stack.push(arr[i]);
  }
  return ans
}

if (process.env.USERNAME === "KARNAWAL") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
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
