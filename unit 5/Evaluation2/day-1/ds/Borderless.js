function runProgram(input) {
    input = input.split("\n")
    let [N,M] = input[0].split(" ").map(Number)
    let mat =[]
    let sum = 0
    for(let i=2;i<N;i++){
        let row = input[i].trim().split(" ").map(Number)
        let newR = []
        for(let j=1;j<M-1;j++){
            newR.push(row[j])
        }
        mat.push(newR)
    }
    

   for(let i=0;i<N-2;i++){
       for(let j=0;j<M-2;j++){
           sum +=mat[i][j]
       }
   }
   console.log(sum)
  }
  if (process.env.USERNAME === "KARNAWAL") {
  runProgram(`9 6
  8 1 4 3 7 3
  2 9 5 3 4 8
  3 1 3 3 4 4
  6 4 8 6 5 2
  9 6 9 6 3 3
  4 7 2 2 4 2
  4 1 2 7 6 5
  1 2 3 6 7 7
  5 2 8 5 9 2`);
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
  
    