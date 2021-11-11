// function runProgram(input) {
//     input = input.split("\n")
//     let [N,K] = input[0].trim().split(" ").map(Number)
//     let arr = input[1].trim().split(" ").map(Number)
//     let ans1 = countPair(arr,N,K)
//     console.log(ans1)
//     function countPair(arr,N,K){
//         arr = arr.sort((a,b)=>{
//             return a-b
//         })
//         // console.log(arr)
//         let i = 0
//         let j = N-1
// let ans = 0
//         while(i<j){
//             if(arr[i]+arr[j]<K){
//                 i++
//             }
//             else if(arr[i]+arr[j]>K){
//                 j--
//             }
//             else{
//                 ans++
//                 i++
//             }
//         }
//         return ans
//     }

function runProgram(input) {
    const newInput = input.split(/[\r\n]+/);
    const t = newInput[0].trim().split(" ").map(Number);
    let data = newInput[1].trim().split(" ").map(Number);
  
  let n = t[0];
  let tar = t[1];
  
  console.log(solve(data,n,tar))
  
  
  function solve(arr,n,k){
      let count =0;
  let obj ={};
  
  for(let i=0; i<n; i++){
      let rem = k-arr[i];
      console.log(rem)
      if(obj[rem]){
          let a = obj[rem];
          if(a>1){
              
          count +=a;
         // console.log("a",a, rem)
          }
          else{
              count++;
          }
          // console.log(a)
      }
      if( obj[arr[i]] ){
          
           obj[arr[i]] +=1;
      }
      else{
          
      obj[arr[i]] =1;
      }
  }
  
  //console.log(obj)
      
      return count
  }
}
  if(process.env.USERNAME ==="akarn"){
      runProgram(`5 0
      -1 1 -1 1 -1`);
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