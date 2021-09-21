function runProgram(input) {
    input=input.split('\n');
    let len = +input[0]
    let ans = ""
    let temp = []
    for(let i=1;i<=len;i++){
        let row = input[i]
        checkLen(row,temp)
        ans+=row
    }
    console.log(Math.max(...temp));
    checkMax(ans)
    function checkMax (arr){
            var i,
                temp,
                streak,
                length = arr.length;
        
            for(i=0; i<length; i++) {
                if (arr[i] === 1) {
                    streak += 1;
                } else {
                    temp = streak;
                    break;
                }
            }
            console.log(temp)

            
        }


    function checkLen(row,temp){
        let start = -1
        let end = 0
        for(let j =0;j<row.length;j++){
            if(row[j]=="C" && start==-1){
                start = j
                // console.log(start , "Start")
            }
            else if(start!=-1 && row[j]!="C"){
                end = j-1
                // console.log(end , "End")
                temp.push(end-start+1)
                start= -1
            }
            else if(j==row.length-1 && row[j]=="C"){
                end = j-1
            // console.log(end , "End last")
            temp.push(end-start+1)
            start= -1  
            }
        }
    }
}
   if(process.env.USERNAME ==="KARNAWAL"){
runProgram(`4
SSSSEEEECCCCEECCCC
CCCCCSSSSEEECCCCSS
SSSSSEEESSCCCCCCCS
EESSSSCCCCCCSSEEEE
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