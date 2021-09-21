function runProgram(input){
    input =input.trim().split('\n') 
    for (let i = 1; i < input.length;){
        let matrix = []
        for (let rowNum = i + 1; rowNum < i + Number(input[i]) + 1; rowNum++){
            // console.log(input[rowNum])
            let rowOne = input[rowNum].split(" ").map(Number)
            matrix.push(rowOne)
        }
        let res = rotate90(matrix , Number(input[i]))
        let res2 = rotate902(res,Number(input[i]))
        i=i+ Number(input[i]) + 1
    }


    function rotate90(matrix,num){
        // console.log(matrix,num)
        let mat = []
    for(let j=num-1; j>=0; j--){
        let temp = []
        for(let i=0; i<num; i++){
            temp.push(matrix[i][j])
        }
        mat.push(temp)
    }
    return mat
    }


    function rotate902(matrix,num){
    for(let j=num-1; j>=0; j--){
        let temp = ""
        for(let i=0; i<num; i++){
            temp += matrix[i][j]+" "
        }
        console.log(temp.trim())
    }
    }

// 9 8 7 
// 6 5 4 
// 3 2 1 
// 6 5 4 3 
// 2 1 0 9 
// 8 7 6 5 
// 4 3 2 1 

  }
  if(process.env.USERNAME ==="KARNAWAL"){
runProgram(`2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6`);
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