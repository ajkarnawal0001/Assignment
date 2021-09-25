function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
        let S = input[1].trim().split(" ").map(Number).sort((a,b)=>{
            return b-a
        })
        let C= input[2].trim().split(" ").map(Number).sort((a,b)=>{
            return b-a
        })
        let ans = 0
        for(let i=0;i<S.length;i++){
            ans+=S[i]*C[i]
        }
        console.log(ans)
  }
  
  
  if(process.env.USERNAME ==="KARNAWAL"){
    runProgram(`2
    3 1
    4 3`);
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
