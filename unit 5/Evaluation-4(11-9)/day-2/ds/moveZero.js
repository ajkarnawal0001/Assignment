// function runProgram(input) {
//     input=input.split('\n');
//     let test= +input[0]
//     for(let a=1;a<=2*test;a=a+2){
//         let N = +input[a]
//         let arr = input[a+1].split(" ").map(Number)
        
//         zeroMove(N,arr)
//     }

//     function zeroMove(N,arr){
//         let count = 0; 
//         let arr1= []
//         let arr2 = []
//         for(let i=0;i<N;i++){
//             if(arr[i]!=0){
//                 arr1.push(arr[i])
//             }else{
//                 arr2.push(arr[i])
//             }
//         }
//         console.log(arr1.concat(arr2).join(' '))
//     }
    
// }
//    if(process.env.USERNAME ==="KARNAWAL"){
// runProgram(`2
// 5
// 0 1 2 3 0
// 5
// 0 0 1 2 3`);
//       }else{
//       process.stdin.resume();
//       process.stdin.setEncoding("ascii");
//       let read = "";
//       process.stdin.on("data", function (input) {
//       read += input;
//       });
//       process.stdin.on("end", function () { 
//       read = read.replace(/\n$/,"")
//       runProgram(read);
//       });
      
//       process.on("SIGINT", function () {
//       read = read.replace(/\n$/,"")
//       runProgram(read);
//       process.exit(0);
//       });
//       }
