function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
    for (let a = 1; a <= test * 2; a = a + 2){
        let [N, R] = input[a].split(" ").map(Number)
        let arr = input[a + 1].split(" ").map(Number)
        if (R > N) {
            R=R%N
        }
        arr = arr1(arr, 0, N - 1)
        arr = arr1(arr, 0, R - 1)
        arr = arr1(arr, R,N-1)
        console.log(arr.join(" "))
        // console.log(reverseArr(arr,R-1 , N-1))  
    }
}

let arr1 = function (arr, s, e) {
    // let start = 0
    // let end = N - 1
    while (s < e) {
        temp = arr[s]
        arr[s] = arr[e]
        arr[e] = temp
        s++
        e--
    }
    return arr
}

  if(process.env.USERNAME ==="KARNAWAL"){
      runProgram(`3
5 2
1 2 3 4 5
2 2
1 2
3 1
1 2 3`);
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