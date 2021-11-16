function runProgram(input) {
    input = input.trim().split("\n")
    let [N,K] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    console.log(solve(arr,N,K))


    function solve(arr,n,k){

        let count = 0
        let obj = {}

        for(let i=0;i<N;i++){
            let rem = k-arr[i]
            if(rem in obj){
                let a = obj[rem]
                count +=a
            }
            if(arr[i] in obj){
                obj[arr[i]]++
            }else{
                obj[arr[i]] = 1
            }
        }
        return count
    }
    
  }
  if(process.env.USERNAME ==="akarn"){
    runProgram(`5 9
    3 0 6 2 7`);
  }else{
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
  read += input;
  });
  process.stdin.on("end", function () { 
  read = read.replace(/\n$/,"")
  runProgram(read);
  });
  
  process.on("SIGINT", function () {
  read = read.replace(/\n$/,"")
  runProgram(read);
  process.exit(0);
  });
  }
