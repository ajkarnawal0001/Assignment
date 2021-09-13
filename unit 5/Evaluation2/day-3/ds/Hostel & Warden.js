function runProgram(input) {
    input = input.split("\n")
    let N = +input[0]
    let student = input[1].split(" ").map(Number).sort((a,b)=>{
        return a-b
    })
    let room = input[2].split(" ").map(Number).sort((a,b)=>{
        return a-b
    })
    let dis = []
    for(let i =0;i<N;i++){
        let ans = Math.abs(room[i]-student[i])
        dis.push(ans)
    }
    dis = dis.sort((a,b)=>(
        b-a
    ))
    console.log(dis[0])
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`2
-2 4
-2 0`);
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
  
    