function runProgram(input) {
    input = input.trim().split("\n")
    let [N,K] = input[0].split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    console.log(upper_bound(arr,N,K))

    
    function upper_bound(arr,  N,  X){
    let mid;
 
    // Initialise starting index and
    // ending index
    let low = 0;
    let high = N;
 
    // Till low is less than high
    while (low < high) {
        // Find the middle index
        mid = low + (high - low) / 2;
 
        // If X is greater than or equal
        // to arr[mid] then find
        // in right subarray
        if (X >= arr[mid]) {
            low = mid + 1;
        }
 
        // If X is less than arr[mid]
        // then find in left subarray
        else {
            high = mid;
        }
    }
   
    // if X is greater than arr[n-1]
    if(low < N && arr[low] <= X) {
       low++;
    }
 
    // Return the upper_bound index
    return low;
}
  }
  if (process.env.USERNAME === "akarn") {
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