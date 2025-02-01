const fs = require('fs')

// const files = fs.readdirSync('./');


fs.readdir('./', (err, files) => {
    if(err) console.log("Error", err);
    else console.log("Result", files)
    
})

// console.log(files);
