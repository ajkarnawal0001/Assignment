function runProgram(input) {
    input = input.split("\n")
    var output = ""
    let res = ""
    let n = +input[0]
    let arr = input[1].trim().split(" ")
    let newArr = []
    let index = 0
    var ans = 0
    // console.log(ans)
    genAllSub(arr,n,index,newArr)

   function genAllSub(arr,N,index,newArr){
       if(newArr!==""){
        checkOdd(newArr)
       }
       if(index==N){
           return
       }
       for(let i=index;i<N;i++){
           newArr.push(arr[i])
           genAllSub(arr,N,i+1,newArr)
           newArr.pop()//remove the last element
       }
    //    console.log(newArr)
       return
   }

function checkOdd(arr){
    let sum = 1
    arr = arr.map(Number)
    for(let i=0;i<arr.length;i++){
        sum *= +arr[i]
        // console.log(arr[i])
    }
    // console.log(sum)
    if(sum%2!=0){
        ans++
    }
    }
    console.log(ans)
}
if (process.env.USERNAME === "akarn") {
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