// function runProgram(input) {
//     input = input.split("\n")
//     let N = +input[0]
//     let student = input[1].split(" ").map(Number).sort((a,b)=>{
//         return a-b
//     })
//     let room = input[2].split(" ").map(Number).sort((a,b)=>{
//         return a-b
//     })
//     let dis = []
//     // console.log(student)
//     // console.log(room)
//     for(let i =0;i<N;i++){
//         let ans = (room[i]-student[i])
//         dis.push(Math.abs(ans))
//     }
//     let l = Math.floor(3.1)
//     console.log(l)
//     dis = dis.sort((a,b)=>(
//         b-a
//     ))
//     // console.log(dis)
//     console.log(dis[0])
// }
//    if(process.env.USERNAME ==="KARNAWAL"){
// runProgram(`5
// -2 4 -20 20 0
// 10 10 10 40 10`);
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


// function findGrantsCap(grantsArray, newBudget) {
//     // your code goes here
//     grantsArray = grantsArray.map(Number)
//     newBudget = +newBudget
//     let modBudget = newBudget
//     let cap;
//     let sum = 0
//     let avg;
//     let len = grantsArray.length
    // grantsArray = grantsArray.sort((a,b)=>{
    //     return a-b
    // })
//     console.log(grantsArray)
//     for(let i=0;i<grantsArray.length;i++){
//       sum+=grantsArray[i]
//     }
//     avg = newBudget/len
//     let sum2 = 0
//     for(let i=0;i<len;i++){
//         if(grantsArray[i]>avg){
//             break
//         }else{
//             cap = grantsArray[i]
//             sum2+=grantsArray[i]
//         }
//     }
//     console.log(cap , sum2)

//     if(cap<newBudget){
//         cap = newBudget- sum2
//         len = len-1
//         cap = (cap/len)
//         console.log(cap)
//     }else{
//         cap = newBudget/len
//         console.log(cap)
//     }
//   }

// let  grantsArray =  [2,100,50,120,167]
//   let  newBudget = 400

//   let a = findGrantsCap(grantsArray,newBudget)
//   console.log(a)

//M2

//   grantsArray = grantsArray.map(Number)
//   newBudget = +newBudget
//   let modBudget = newBudget
//   let cap;
//   let sum = 0
//   let avg;
//   let len = grantsArray.length
  
//   for(let i=0;i<grantsArray.length;i++){
//     sum+=grantsArray[i]
//   }
//   avg = sum/len
//   if(avg == newBudget){
//     return newBudget/len
//   }else{
//     grantsArray=grantsArray.sort((a,b)=>{
//         return a-b
//     })
//   //   console.log(modBudget)
//   //   console.log(grantsArray)
//     modBudget -= grantsArray[0]
//     cap = modBudget/(len-1)
//     for(let i=1;i<len-1;i++){
//       //   console.log(cap)
//       if(cap>grantsArray[i]){
//         modBudget -= grantsArray[i]
//         cap = modBudget/(len-i-1)
//       }
//     }
//   }
//   if(cap<1){
//     return 1
//   }else{
//     return cap
//   }

//M3

function findGrantsCap(grantsArray, newBudget) {
        // your code goes here
    if(grantsArray == null || newBudget <=0){
        return 0
    }
    var length = grantsArray.length
    let prefixSum = 0
    grantsArray = grantsArray.sort((a,b)=>{
    return a-b
    })
    for(let i=0; i<length;i++){
        let current = grantsArray[i]
        let available = newBudget-prefixSum
        console.log(available)
        let numberLeft = length-i
        if(current*numberLeft > available){
            console.log(available)
            return available/numberLeft
        }
        prefixSum+=current
    }
    return grantsArray[length-1]

   
  }

let  grantsArray =  [2,100,50,120,167]
  let  newBudget = 400

  let a = findGrantsCap(grantsArray,newBudget)
  console.log(a)

