function runProgram(input) {
    input = input.trim().split("\n")
    let [N,K] = input[0].split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    console.log(SIRAS(arr,N,K))

    
    function SIRAS(arr,N,k){
      let low = 0;
      let high = N-1;
      let ans = -1
      while (low <= high){
      mid = low + Math.floor((high-low)/2)
            if (arr[mid] == k){
                ans = mid
                high = mid - 1
            }
            else if (arr[mid] > k){
                high = mid - 1
            }
            else{ 
                low = mid + 1
            }
        }
        return ans
      
    }
  }
  if (process.env.USERNAME === "KARNAWAL") {
  runProgram(`5 2
  1 1 2 2 5`);
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
  
    