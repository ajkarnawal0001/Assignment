const readline = require('readline')

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readline1.question("who is your best friend \n", (name) => {
    if (name == "Amarjeet") {
        console.log(`thank you ${name}`)
        readline1.close()
    } else {
        console.log(`i hate you ${name}`)
        readline1.close()
    }
})

readline1.on("close", () => {
    console.log("bye")
})