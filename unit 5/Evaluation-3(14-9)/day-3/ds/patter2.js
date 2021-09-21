function runProgram(input) {
    input = +input
    pattern(input,input)
    function print_row(no,n1,ans ) {
        let ll = ""
        for(let i =0;i<n1;i++){
            if(i<no){
                ll+="*"+" "
            }else{

                ll+="1 "
            }
        }
        console.log(ll)
        return
       }
  
       // function to print the pattern
       function pattern(n,n2) {
          
        var ans = ""
         if (n == 0) {
            return
         }
        let aa =  print_row(n,n2,ans);
        //  console.log("aasasas")
         pattern(n - 1,input);
       }
  }
  
  if (process.env.USERNAME === "KARNAWAL") {
    runProgram(`5`);
  } else {
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
  