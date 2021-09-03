const readline = require('readline')

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const list = ["Anna Karenina", " Greta Garbo in Anna Karenina", "To Kill a Mockingbird", "The Great Gatsby", "One Hundred Years of Solitude", "A Passage to India", "Invisible Man", "Don Quixote", "Beloved"]
const fun = () => {
    readline1.question("Please press the opyion bellow 1,2,3 \n", (num) => {
        if (num == 1) {
            list.map((item) => {
                return console.log(item)
            })
            return fun()
                // readline1.close()
        } else if (num == 2) {
            readline1.question("Please Enter the name of book \n", (Book) => {
                console.log(`${Book} added succesfully`)
            })
            return fun()
        } else if (num == 3) {
            readline1.question("Are you sure you want to quit, press Y/N \n", (answer) => {
                if (answer == "Y") {
                    readline1.close()
                }
            })
        }
    })

    readline1.on("close", () => {
        console.log("Tata bye bye khatam")
    })
}

fun()