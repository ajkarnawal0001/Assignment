function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
    for(let i=1;i<=test*2;i=i+2){
        let N = +input[i]
        let str = input[i+1]
        // console.log(str)
        var arr = []
        let a =printMid(str,0,N-1)
        console.log(arr.join(""))
    }

    function printMid(str,Start,N){
    if (Start > N){
        return
    }
    let mid = Math.floor((Start+N)/2)
    // console.log(mid)
    arr.push(str[mid])
    
    printMid(str, Start, mid - 1);
    printMid(str, mid + 1, N);
    }
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
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
  
    