function runProgram(input) {
    const newInput = input.split(/[\r\n]+/);
    const t= newInput[0].trim().split(" ").map(Number)[0];
    
    for(let a=1; a<=t; a++){
    let data = newInput[a*2].trim().split(" ").map(Number);
    let line = newInput[a*2-1].trim().split(" ").map(Number);
    let tar = line[1];
    let n = data.length;
    console.log(solve(data,n,tar))
  
  }
  
  function solve(arr,n,k){
      let count =0;
      let sum =arr[0];
    
      let i=0; // start pointer
      let j=0; ///end pointer
  //  5
  // 1 5 1 3 2 // 1
      while(j<n && i<n){ //j=4, i=4, sum =2, c =0
          if(sum < k){
                j++; 
              if(j >= i){
               count += j-i; //1-0 =1
               }
             if(sum < k){
              sum += arr[j];
             }
          }
          else {
              sum -= arr[i];
              i++;
          }
      
      }
    
      
      return count;
  }
  
    
  }
  if(process.env.USERNAME ==="akarn"){
    runProgram(`1
    5 5
    1 5 1 3 2`);
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
