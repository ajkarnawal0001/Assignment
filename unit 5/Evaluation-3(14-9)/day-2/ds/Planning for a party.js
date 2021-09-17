function runProgram(input) {
    input = input.split("\n");
    let N = +input[0]
    let M = +input[2]
    let arr1 = input[1].split(" ").map(Number)
    let arr3 = input[3].split(" ").map(Number)

    let ans = isSameStack(arr1,arr3,N)
    if (ans) {
        console.log("Yes")
    }else{
        console.log("No")
    }
    }
    // function partyPlanning(N,PamID,M,JimID){
    //     //write code here
    // }
    
  function isSameStack(PamID,JimID,N)
{
    let ans = "Yes"
        for(let i=0;i<N;i++){
            if(PamID[i]!=JimID[i]){
                console.log("No")
                return
            }
        }
        console.log(ans)
}
  
  if (process.env.USERNAME === "KARNAWAL") {
    runProgram(`5
    8 3 6 3 8
    5
    1 9 3 5 1`);
  } else {
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
  