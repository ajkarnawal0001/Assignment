function runProgram(input) {
    let S = input.trim()
    let N = S.length
    let arr = []
    for (i = 0; i < N; i++){
        // console.log(S[i],"dd")
        if (S[i] == '(' || S[i] == '{' || S[i] == '[' || S[i] == ')' || S[i] == '}' || S[i] == ']') {
            arr.push(S[i])
        }
    }

    N=arr.length
    // console.log(arr)
    checkPara(arr,N)
}

function checkPara(S, N) {
    
    var stack = []
    let FLAG = 0
    for (let i = 0; i < N; i++) {

        if (S[i] == '(' || S[i] == '{' || S[i] == '[') {

            stack.push(S[i]);

            // console.log(stack,i)
        }

        else {
            // console.log(stack.length)
            let len = stack.length
            if (len== 0) {
                
                FLAG = 1;
                
                break;

            }

            else {

                if ((S[i] == ')' && stack[stack.length-1] != '(') || (S[i] == '}' && stack[stack.length-1] != '{') || (S[i] == ']' && stack[stack.length-1] != '[')) {
                    FLAG = 1;
                    
                    
                    break;
                }

                else
                    stack.pop();
            }

        }

    }

    if (FLAG == 1)

        console.log("unbalanced")

    else {

        if (stack.length==0)

            console.log("balanced")

        else

            console.log("unbalanced")
    }
}

if (process.env.USERNAME === "akarn") {
runProgram(`3
{([])}
()
([]`);
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