function runProgram(input) {
    input = input.split("\n")
    let [N,M] = input[0].split(" ").map(Number)
    let mat = []
    for(let i = 1 ;i<=N;i++){
        let row = input[i].trim().split(" ").map(Number)
        mat.push(row)
    }
    // console.log(mat)
    let ans = []
    for(let i = 0;i<M;i++){
        let prod = 1
        for(let j=0;j<N;j++){
            prod*=mat[j][i]
        }
        ans.push(prod)
    }
    console.log(ans.join("\n"))
    
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`3 2
1 2 
3 4 
5 6`);
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
  
    