function runProgram(input){
    let S  = input
    let N = input.length 
    let arr = []
    for(let i =0; i<N;i++){
        if(S[i]=="(" || S[i]=="{" || S[i]=="[" || S[i]==")" || S[i]=="}" || S[i]=="]"){
            arr.push(S[i])
        }
    }  
    N = arr.length
    checkPara(arr,N)
  }

  function checkPara(S,N){
      var stack = []
      let FLAG = 0
      for(let i = 0;i<N;i++){
          if(S[i]=="(" || S[i]=="{" || S[i]=="["){
              stack.push(S[i])
          }
        else{
              let len = stack.length
              if(len ==0){
                  FLAG = 1;
                  break;
              }
              else{
                  if((S[i]==")" && stack[stack.length-1] !="(") || (S[i]=="}" && stack[stack.length-1] !="{") ||
                  (S[i]=="]" && stack[stack.length-1] !="[")){
                      FLAG=1
                      break
                  }
                else
                  stack.pop()
              }
          }
      }
        if(FLAG ==1){
            console.log("unbalanced")
        }else{
            if(stack.length==0){
                console.log("balance")
            }else{
                console.log("unbalanced")
            }
        }
    }
  if(process.env.USERNAME ==="KARNAWAL"){
runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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