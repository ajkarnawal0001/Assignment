function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
  for (let a = 1; a <= test * 2; a = a + 2) {
    var [L, S] = input[a].split(" ").map(Number)
    var arr = input[a+1].split(" ").map(Number)
    console.log(checkSum(arr,L,S))
  }
}

function checkSum(arr, N, S) {
         let left = 0
         let right = N-1
         let sum = 0
         while(left<right){
             sum = arr[left]+arr[right]
             if(sum==S){
                let ans = ""
                ans += left + " " + right
                return ans
             }
             if(sum>S){
                 right--
             }else{
                 left++
             }
            }
            return ("-1 -1")
      
    }
  if(process.env.USERNAME ==="KARNAWAL"){
      runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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