function runProgram(input) {
    input = input.split("\n")
    let test = +input[0]
    let main = []
    let flag1 = false
    let flag2 = false
    let flag3 = false
    let flag4 = false
    
    for(let i=1;i<=test;i++){
        let row = input[i].split(' ')
        if(row[0]=="E"){
            enque(row)
        }else{
            dequeue(row)
        }
    }
    function enque(arr){
        
        if(arr[1]==1 ){
            if(flag1==false){
            flag1 = true
            main.push(+arr[1])
            club1.push(+arr[2])
            }else{
                main.push(+arr[1])
            }
        }
        if(arr[1]==2 ){
            if(flag2==false){
            flag2 = true
            main.push(+arr[1])
            club2.push(+arr[2])
            }else{
                main.push(+arr[1])
            }
        }
        if(arr[1]==3 ){
            if(flag3==false){
            flag3 = true
            main.push(+arr[1])
            club3.push(+arr[2])
            }else{
                main.push(+arr[1])
            }
        }
        if(arr[1]==4 ){
            if(flag4==false){
            flag4 = true
            main.push(+arr[1])
            club4.push(+arr[2])
            }else{
                main.push(+arr[1])
            }
        }
        console.log(main)
    }

    function dequeue(row){
        
    }
}
   if(process.env.USERNAME ==="KARNAWAL"){
runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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
