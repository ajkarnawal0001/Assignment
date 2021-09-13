function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
    for(let i=1;i<=test;i++){
        let K = 1
        let N = +input[i]
        let ans = moneyMoney(N,K)
        if(ans==true){
            console.log("YES")
        }else{
            console.log("NO")
        }
    }

    function moneyMoney(N,K){
        if(N==K){
            return true
        }
        if(K>N){
            return false    
        }
        else {
            return moneyMoney(N,K*10)||moneyMoney(N,K*20)
        }
    }
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`5
1
2
10
25
200`);
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
  
    