function runProgram(input) {
     input = input.split("\n");
    const len = +input[0]
    let str = input[1].trim()
    let count = {}
    // console.log(str);
    for(let i=0; i<str.length; i++){
        let el = str[i].trim()  


        if(el in count){
            count[el]++
        }
        else{
            count[el] = 1
        }
    }
        let sortable = [];
        for (let key in count) {
            sortable.push([key, count[key]]);
        }

        sortable.sort()
        for(let i=0;i<sortable.length;i++){
            console.log(sortable[i][0]+"-"+sortable[i][1]);
        }
  }
  if(process.env.USERNAME ==="akarn"){
    runProgram(`4
    mana`);
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
