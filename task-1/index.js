const fs = require('fs');


let directory = "sample"

let filenames = fs.readdirSync(directory);

console.log("\nFilenames in directory:");

filenames.forEach((file)=>{
    console.log("File:",file)
})
