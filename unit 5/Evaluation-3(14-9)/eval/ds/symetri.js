function runProgram(input){
    input = input.split("\n")
    for (let i = 1; i < input.length;){
        let matrix = []
        for (let rowNum = i + 1; rowNum < i + Number(input[i]) + 1; rowNum++){
            // console.log(input[rowNum])
            let rowOne = input[rowNum].split(" ")
            matrix.push(rowOne)
        }
        let res = checkSym(matrix , Number(input[i]))
        i=i+ Number(input[i]) + 1
    }
}
function checkSym(arr,N){
   
        let horizontal = true;
        let vertical = true;
        let stack = []
        let P = N/2
        if(N%2!=0){
            P = Math.floor(N/2)        
        }
        for(let i =0;i<P;i++){
            stack.push(arr[i])
        }
        let count = 0
        for(let j=P+1;j<N;j++){
            
            // console.log("d")
            if(arr[j].join("")!=stack[count].join("")){
                horizontal = false
                count++
                break
            }
            break
        } 
        let mat = arr[0]
        mat = mat.join("")
    for(let i=0;i<Math.floor(N/2);i++){  
        if(mat[i] != mat[N-i-1]){ 
        vertical = false
        break
    }
        }
        if (!horizontal && !vertical)
            console.log("NO");
   
        else if (horizontal && !vertical)
            console.log("HORIZONTAL");
   
        else if (vertical && !horizontal)
            console.log("VERTICAL");
   
        else
            console.log("BOTH");
    }
     
  if(process.env.USERNAME ==="KARNAWAL"){
runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*..
.*.
3
..*
**.
..*`);
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