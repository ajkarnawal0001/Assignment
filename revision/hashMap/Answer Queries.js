function runProgram(input) {
    input = input.split("\n");
    const len = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let Q = +input[2]
    let queries = input[3].trim().split(" ").map(Number)

    let obj ={}
    for(let i=0;i<Q;i++){
        let el = queries[i]
        if(el in obj){
            obj[el]++
        }else{
            obj[el] = 1
        }
    }
    for(let i=0;i<len;i++){
        if(arr[i] in obj){
            obj[arr[i]]++
        }
    }
    for(key in obj){
        let check = obj[key]
        if(check>1){
            console.log("Yes");
        }else{
            console.log("No");
        }
  }
  console.log(obj);

 }
 if(process.env.USERNAME ==="akarn"){
   runProgram(`5
   1 2 3 4 5 5 5 5
   3
   3 5 0`);
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
