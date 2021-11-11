function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    for(let i=1;i<=test;i++){
        let num = +input[i]
    let ans = floorSqrt(num)
    console.log(ans)
    }
    
    function floorSqrt(x)
{
    // Base cases
    if (x == 0 || x == 1)
    return x;
 
    // Do Binary Search
    // for floor(sqrt(x))
    let start = 1;
    let end = x;
    let ans;
    while (start <= end)
    {
        let mid = Math.floor((start + end) / 2);
 
        if (mid * mid == x)
            return mid;
 
        if (mid * mid < x)
        {
            start = mid + 1;
            ans = mid;
        }
         
        else
            end = mid-1;    
    }
    return ans;
}
    
  }
  if(process.env.USERNAME ==="akarn"){
    runProgram(`2
    4
    8`);
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
