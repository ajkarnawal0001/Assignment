console.log("object");
function runProgram(input) {
    let str = input
    console.log(str);
//     let ans = ""
//     for(let i=0;i<str.length;i++){
//         let prev = i-1
//         let fron = i+1
        
//        if(str[i]=="?"){
//         if(i==str.length-1){
//             if(ans[prev]=="a"){
//                 ans+="b"
//             }else{
//                 ans+="a"
//             }
//         }
//             else if(ans[prev]=="a"||str[fron]=="a"){
//                 ans+="b"
//             }
//             else{
//                 if(ans[prev]=="a"||str[fron]=="?"){
//                     ans+="a"
//                 }
//                 else{
//                 ans+="a"
//             }
//         }
//         }
//         else{
//             ans+=str[i]
//         }
//     }
// console.log(ans)
}
   if(process.env.USERNAME ==="Lenovo"){
runProgram(`?a?a???`);//bababa
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
