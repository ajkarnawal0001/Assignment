function runProgram(input) {
    console.log(input);
    
}
   if(process.env.USERNAME ==="Lenovo"){
runProgram(`2`);
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
