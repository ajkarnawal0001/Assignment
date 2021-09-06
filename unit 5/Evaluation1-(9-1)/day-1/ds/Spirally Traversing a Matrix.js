function runProgram(input) {
    input = input.split("\n");
    let N = +input[0]
    var matrix = [];
    for (let i = 1; i <= N; i++){
        let row = input[i].split(" ").map(Number)
        matrix.push(row)
    }
    console.log("sdsdsd")
    console.log(matrix)
    spiral(matrix, N);
    function spiral(arr, N) {
        var res = "";
        var top = 0;
        var bottom = N - 1;
        var left = 0;
        var right = N - 1;
        var total = N * N;
        var count = 0;
        while (count < total) {
            for (i = left; i <= right && count < total; i++) {
                res += arr[top][i] + " ";

                count++;
            }
            top++;
            for (var i = top; i <= bottom && count < total; i++) {
                res += arr[i][right] + " ";

                count++;
            }
            right--;
    
            for (var i = right; i >= left && count < total; i--) {
                res += arr[bottom][i] + " ";

                count++;
            }
            bottom--;
            for (i = bottom; i >= top && count < total; i--) {
                res += arr[i][left] + " ";

                count++;
            }
            left++;
        }
        console.log(res);
    }
}
if (process.env.USERNAME === "") {
  runProgram(`4
1 2 3 4
5 6 7 8
9 10 11 12
9 10 11 12`);
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
