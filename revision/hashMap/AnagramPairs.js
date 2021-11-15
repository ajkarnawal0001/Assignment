function solve(data){
    var obj = {};
    for(var i =0;i<data.length;i++){
        var d = data[i].split("").sort().join("");
        if(obj[d]){
            obj[d] += 1;
        }else{
            obj[d] = 1;
        }
    }
    // console.log(obj);
    var count = 0
    for(var key in obj){
        var add = obj[key] * (obj[key]-1);
        // console.log(add,"add");
        count += add/2;
    }
    console.log(count);
}
function runProgram(input) {
    var newInput = input.split(/[\r\n]+/).map(a=>{
        return a.trim()
    })
        var i=1;
        while(i<newInput.length){
            let n=Number(newInput[i]);
            let arr=newInput.slice(i+1,i+1+n).map(a=>{
                return a.split("").sort().join("")
            })
            solve(arr)
            i=i+1+n
        }
}

if(process.env.USERNAME ==="akarn"){
    runProgram(`2
    5
    aaaaabbbbb
    baabbbbaaa
    aaaabbbbba
    xxxxxxxxxy
    yxxxxxxxxx
    2
    abcdefghij
    jighdefabc
    `);
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
 