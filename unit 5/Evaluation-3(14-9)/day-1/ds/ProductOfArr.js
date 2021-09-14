function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
    for(let i=1;i<=test*2;i=i+2){
        let N = +input[i]
        let a = input[i+1].split(" ").map(Number)

        let prod = 1;
    let flag = 0;
  
    for(let i = 0; i < N; i++) 
    {
        if (a[i] == 0){
            flag++;
        }
        else{
            prod *= a[i];
            // console.log(prod)
    }
}
  
    let arr = Array(N).fill(0);
    // console.log(arr)
    for(let i = 0; i < N; i++) 
    {          
        if (flag > 1)
        {
            arr[i] = 0;
            
        }
        else if (flag == 0)
            arr[i] = (prod / a[i]);

        else if (flag == 1 && a[i] != 0) 
        {
            arr[i] = 0;
        }
        else
            arr[i] = prod;
    }
    console.log(arr.join(" "))
    }
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`2
5
1 2 3 4 5
3
3 0 7`);
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
  
    