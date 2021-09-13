function runProgram(input) {
    input = input.split("\n")
    let output = ""
    let n = +input[0]
    let str = input[1].split(" ").map(Number)
    str = (str.join(""))
    let l = 0
    permute(str,0,n-1)
    function permute(str, l, r)
{
    if (l == r)
            console.log(str.join(","))
        else
        {
            for (let i = l; i <= r; i++)
            {
                str = swap(str, l, i);
                permute(str, l + 1, r);
                str = swap(str, l, i);
            }
        }
}
 
function swap(a, i, j)
{
    let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}
    
}
if (process.env.USERNAME === "KARNAWAL") {
runProgram(`3
1 2 3`);
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
  
    