function runProgram(input) {
    input = input.split("\n")
    let output = ""
    let n = +input[0]
    let arr = input[1].split(" ").map(Number)
    arr = (arr.join(""))

    genPer(arr,0,n-1)
    output = output.trim().split(" ")
    output = output.map((i)=>{
        i = i.split("")
        i = i.join(" ")
        return i
    })
    console.log(output.join("\n"))
    function genPer(arr,l,n){
        if(l==n){
            output+=" "+ arr
            // console.log(arr)
            return 
            
        }
        else{
        for(let i=l;i<=n;i++){
            arr = swap(arr,i,l)
            genPer(arr,l+1,n)
        }
    }
    }
    function swap(arr,i,j){
        let temp;
        let newArr = arr.split("")
        temp = newArr[i] ;
        newArr[i] = newArr[j];
        newArr[j] = temp;
        return (newArr).join("")
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
  
    