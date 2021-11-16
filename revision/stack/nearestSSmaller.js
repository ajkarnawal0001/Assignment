function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
    for (let a = 1; a <= test * 2; a = a + 2) {
        
        var len = +input[a]
        var arr = input[a + 1].split(' ').map(Number)
        let index1 = nextGreater(len, arr)
        let index2 = nextSmaller(len,arr)
        var show = []
        for (let i = 0; i < len; i++) {
            if (index1[i] == -1 && index2[i] == -1) {
                    show.push(-1)
                }
            else if(index1[i]==-1){
                show.push(arr[index2[i]])
            } else if (index2[i] == -1) {
                show.push(arr[index1[i]])
            } else {
                if (i - index1[i] == index2[i] - i) {
                    show.push(arr[index1[i]])
                } 
                else if (i - index1[i] < index2[i] - i) {
                    show.push(arr[index1[i]])
                } else {
                    show.push(arr[index2[i]])
                }
            }
        }
        console.log(show.join(' '))
        // console.log(index1)
        // console.log(index2)
    }
}


function nextGreater(len, arr) {
   let stack =   []
    stack.push()
    let index = []
    let output = []
    let indexArr = []

    for (let t = 0; t < len; t++){
        indexArr.push([t,arr[t]])
    }
    for (let i = 0; i <len; i++){
        
        while (stack.length !=0 && stack[stack.length - 1][1] >= indexArr[i][1]) {
            stack.pop()
            
        }
        if (stack.length != 0) {
            output.push(stack[stack.length - 1])
        } else {
            output.push(-1)
        }

        stack.push(indexArr[i])
    }
    for (let j = 0; j <len; j++){
        if (output[j][0] == undefined) {
            index.push(-1)
        } else {
            index.push(output[j][0])
        }
    }
    return index
  
}

function nextSmaller(len, arr) {
    let stack =   []
    stack.push()
    let index = []
    let output = []
    let indexArr = []

    for (let t = 0; t < len; t++){
        indexArr.push([t,arr[t]])
    }
    for (let i = len - 1; i >= 0; i--){
        
        while (stack.length !=0 && stack[stack.length - 1][1] >= indexArr[i][1]) {
            stack.pop()
            
        }
        if (stack.length != 0) {
            output.push(stack[stack.length - 1])
        } else {
            output.push(-1)
        }

        stack.push(indexArr[i])
    }
      for (let j = output.length-1; j >=0; j--){
        if (output[j][0] == undefined) {
            index.push(-1)
        } else {
            index.push(output[j][0])
        }
    }
    // console.log(output)
    return index
}



  if(process.env.USERNAME ==="HP"){
      runProgram(`4
1
7
7
2 3 6 4 4 2 1
8
5 5 4 4 1 8 1 5
7
2 5 6 4 4 8 1`);
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