function runProgram(input) {
    input = input.trim().split("\n")
    let [N,K] = input[0].split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    console.log(SIRAS(arr,N,K))

    
    function SIRAS(arr,N,K){
      let low = 0;
      let high = N-1;
      let ans = -1
      while(low<=high){
        let mid = Math.floor((low + high)/2)
          if(arr[mid]==K){
            ans = mid
            return ans
        }
        else if(arr[mid]<=arr[high]){
          if(K>arr[mid] && K<=arr[high]){
            low=mid+1
          }else{
            high = mid-1
          }
        }else{
          if(K>=arr[low] && K<arr[mid]){
            high=mid-1
          }else{
            low= mid+1
          }
        }
      }
      return ans
    }
  }
  if (process.env.USERNAME === "KARNAWAL") {
  runProgram(`6 6
  3 4 7 9 1 2`);
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
  
    