let multiply = function(x,y){
    console.log(x*y)
}

let multiplyTwo = multiply.bind(this,2)
multiplyTwo(10)

let multiplyClouser = function (x){
    return function(y){
        console.log(x*y)
    }
}

let myMultiply = multiplyClouser(5)
myMultiply(6)