function runProgram(input) {
    input = input.split("\n")
    var output = ""
    let res = ""
    let n = +input[0]
    let arr = input[1].trim().split("")
    let newArr = []
    let index = 0
    genAllSub(arr,n,index,newArr)

   function genAllSub(arr,N,index,newArr){
       if(newArr!==""){
        console.log(newArr.join(""))
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
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`3
abc`);
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
  
    