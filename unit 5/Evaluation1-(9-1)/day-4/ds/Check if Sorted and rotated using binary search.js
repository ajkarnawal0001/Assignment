function runProgram(input) {
    input = input.trim().split("\n")
    let [N,K] = input[0].split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    let ans = MinInArr(arr,N,K)

  let firstHalf = arraySortedOrNot(arr,0,ans)
  let secHalf = arraySortedOrNot(arr,ans,N)
  // console.log(firstHalf)
  // console.log(secHalf)
  if(arr[0]<arr[N-1]){
    console.log("No")
  }
  else if(firstHalf && secHalf){
    console.log("YES")
  }
  else{
    console.log("NO")
  }
    function arraySortedOrNot(arr,start,n)
    {

        if (n == 0 || n == 1)
            return true;

        for (let i = start+1; i < n; i++)

            if (arr[i - 1] > arr[i])
                return false;

        return true;
    }
    function MinInArr(arr,N,K){
      let low = 0;
      let high = N
      while(low<=high){
        mid = low + Math.floor((high-low)/2)
        if(arr[mid]>arr[high]){
          low = mid+1
        }
        else if(arr[mid]<arr[high]){
          high = mid
        }
        else{
          high--
        }
      }
      return low
    }
  }
  if (process.env.USERNAME === "KARNAWAL") {
  runProgram(`5
  1 2 3 4 5`);
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
  
    