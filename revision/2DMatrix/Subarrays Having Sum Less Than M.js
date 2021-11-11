function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
    for(let i=1;i<=test;i=i+2){
        let [N,K] = input[i].trim().split(" ").map(Number)
        let arr = input[i].trim().split(" ").map(Number)

        let ans = countSubarray(arr,N,K)
    }

    function countSubarray(arr,N,K){
        let start = 0,end=0
        let count = 0 ,sum=arr[0]

        while(start<N && end<N){
            
        }
    }
}
if (process.env.USERNAME === "akarn") {
runProgram(`1
5 5
1 5 1 3 2`);
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