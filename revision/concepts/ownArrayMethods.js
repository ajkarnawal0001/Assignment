// // MyMap function 
// Array.prototype.myMap = function (callback){
//     let res = []
//     for(let index=0;index<this.length;index++){
//         res.push(callback(this[index],index,this))
//     }
//     return res
// }

// let arr = [1,23,4,5,6]
// let res = arr.myMap((item)=>{
//     return item+100
// })
// console.log(res)
// console.log(arr)



// // My Filter function

// Array.prototype.myFilter = function(callback){
//     let res = []
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             res.push(this[i])
//         }
//     }
//     return res
// }
// let arr = [1,23,4,5,6]
// let res = arr.myFilter((item)=>{
//     return item > 10
// })
// console.log(res)
// console.log(arr)

//  My Reduce Funtion

Array.prototype.myReduce = function(callback,initialValue){
    if(!this.length && initialValue===undefined){
        throw new TypeError("reduce of empty array with no initial value")
    }
    let accumulator = initialValue
    let index = 0
    if(initialValue === undefined){
        accumulator = this[0]
        index = 1
    }
    for(; index < this.length;index++){
        accumulator = callback(accumulator,this[index],index,this)
    }
    return accumulator
}
let myArray = [1,2,3,4,5,6,7,8]
let reduce = myArray.myReduce((accumulater,current,index,array)=>{
    return current + accumulater
},"") 
console.log(reduce)