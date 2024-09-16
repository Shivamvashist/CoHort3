const { Command } = require('commander');
const program = new Command();
const fs =  require("fs");

//Assignment 1 => 
// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file

let ctWords ;

const file = 

fs.readFile(file,"utf8",(err,data)=>{
    if(err){
        console.log("file not found!")
    }else{
        ctWords = data.split(' ');
        console.log(ctWords)
    }
})








// program
// .name('Counter')
// .description('Counter the number of lines and words in a file')
// .version("1.0.0")

// program
// .command('countWords  <file>')
// .action(console.log(file));





// program
//   .option('--first')
//   .option('-s, --separator <char>');

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));

