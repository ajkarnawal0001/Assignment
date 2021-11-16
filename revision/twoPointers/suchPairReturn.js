
function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var l = Number(newInput[0]);
    
    for(let a=0; a<l; a++){
        let [n, k] = newInput[2*a+1].split(" ").map(Number)
        let arr = newInput[2*a+2].split(" ").map(Number)
        arr.sort((a, b)=>{return a-b})
        let [l,r] = [0,n-1]
        let sum = 0
        while(l<r){
            sum = arr[l]+arr[r]
            if(sum == k){
                break
            }else if(sum <k){
                l++
            }else{
                r--
            }
        }
      sum == k ? console.log("1") : console.log("-1")
        
    }
      
  }
  if(process.env.USERNAME ==="akarn"){
    runProgram(`1
    5 2
    3 4 0 2 7`);
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
