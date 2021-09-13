function runProgram(input) {
    input = input.split("\n")
    var main = ""
    let res = ""
    let n = +input[0]
    let str = input[1]

    genSs(str,res)
    
    // output.join("\n")
    function genSs(str,res){
        var output = ""
        output = output.trim().split(" ").sort()
        if(str.length == 0){
            console.log(res)
            output += " " + res
            return
        }
        genSs(str.substring(1),res+str.charAt(0))
        genSs(str.substring(1),res)
    }
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`4
abcd`);
}  else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});
}
  
    