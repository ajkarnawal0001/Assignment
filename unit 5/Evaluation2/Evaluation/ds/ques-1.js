function runProgram(input) {
    input = input.split("\n")
    let len = +input[0]
    let arr = input[1].split(" ").map(Number)
    let count = 0
    let K = 0
    for(let i=0 ;i<len;i++){
       let arr2 = []
       let ans = true
        for(let j = i;j<len;j++){
            arr2.push(arr[j])
            let a = countOdd(arr2)
            
        }
        // console.log(arr2)
    }
    
    function countOdd(str){
        let temp = true
        for(let i=0;i<str.length;i++){
            if(str[i]%2==0){
                temp=false
            }            
        }
        if(temp==true){
            console.log(str)
        }
    }
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`3
1 2 3`);
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
  
    