function runProgram(input){
    let data=input.split("\n")
    // console.log(data);
    data.shift()
      let ans=[]
      let n=data.length
      let obj={}
      for(let i=0;i<n;i++){
          let f=data[i].split("").sort().join("")
        //   console.log(f,"f");
          if(!(f in obj)){
              obj[f]=1
              ans.push(data[i])
          }
      }
      console.log(ans.length)
      ans.sort().map((item)=>{
          console.log(item)
      })
        
   }
   if(process.env.USERNAME ==="akarn"){
    runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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
 