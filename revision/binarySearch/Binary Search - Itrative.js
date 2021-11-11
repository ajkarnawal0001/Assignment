function runProgram(input) {
    input = input.trim().split("\n")
    let [N,K] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    arr = arr.sort((a,b)=>{
        return a-b
    })
    let ans = checkKey(arr,N,K)
    console.log(ans)
    function checkKey(arr,N,K){
        console.log(arr)
        let low = 0, high=N-1
    while(low<=high){
        let mid = Math.floor(low+(high-low)/2)
        
        if(arr[mid]==K){
            return 1
        }
        else if(arr[mid]<K){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return -1
    }
    
  }
  if(process.env.USERNAME ==="akarn"){
    runProgram(`5 0
    2 -2 0 3 4`);
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
