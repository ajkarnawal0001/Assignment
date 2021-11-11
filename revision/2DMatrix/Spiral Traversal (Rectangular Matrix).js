function runProgram(input) {
    input = input.split("\n")
    for(let i=1;i<input.length;){
        let matrix = []
        let [N,C] = input[i].trim().split(" ").map(Number)
        for(let rowNo=i+1;rowNo<i+N+1;rowNo++){
            let onRow = input[rowNo].trim().split(" ").map(Number)
            matrix.push(onRow)
        }
        i=i+N+1
        // console.log(N,C)
        spiralRact(matrix,N,C)
    }

    function spiralRact(arr,N,C){
        let res = ""
        let top = 0
        let bottom = N-1
        let left = 0
        let right = C-1
        let total = N*C
        let count = 0

        while(count<total){
            // console.log(res)
            for( i=top;i<=bottom && count<total;i++){
                res+=(arr[i][left])+" "
                count++
            }
            left++
            for( i=left;i<=right&&count<total;i++){
                res+=(arr[bottom][i])+" "
                count++
            }
            bottom--
            for( i=bottom;i>=top && count<total;i--){
                res+=(arr[i][right])+" "
                count++
            }
            right--
            for( i=right;i>=left && count<total;i--){
                res+=(arr[top][i])+" "
                count++
            }
            top++
        }
        console.log(res)
    }



    //         for (var i = top; i <=bottom && count < total; i++) {
    //             res += (arr[i][right]) + " "
                
    //             count++
    //         }
    //         right--
    //         for (var i = right; i >= left && count < total; i--) {
    //             res += (arr[bottom][i]) + " "
                
    //             count++
    //         }
    //         bottom--
    //     }
    //     console.log(res)
    // }
}
  if(process.env.USERNAME ==="akarn"){
      runProgram(`2
      3 4
      1 2 3 4
      5 6 7 8
      9 10 11 12
      4 3
      1 2 3
      4 5 6
      7 8 9
      10 11 12`);
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