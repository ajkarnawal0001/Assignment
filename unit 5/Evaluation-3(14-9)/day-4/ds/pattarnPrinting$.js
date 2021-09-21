function runProgram(input) {
    var input = +input
    var arr= []
    for (var i = 0; i < input; i++){
        var ans = ""
        
        for (var j = 0; j < input; j++){
                if (i == 0) {
                ans+=("*"+" ")
                } else {
                    if (j == 0 || j == input-1) {
                        ans+="*"+" "
                    } else {
                        ans+="  "
                    }
            }
        }
        console.log(ans)
    }
    
}

   if(process.env.USERNAME ==="KARNAWAL"){
        runProgram(`5`);
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