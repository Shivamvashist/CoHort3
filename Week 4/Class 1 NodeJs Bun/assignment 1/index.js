const { Command } = require('commander');
const program = new Command();
const fs =  require("fs");
const path = require("path");

//Assignment 1 => 
// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file

let ctWords ;
let ctLine;



program
.description("A cli to do file based Tasks")
.name("counter")
.version("0.0.1")

program.command("count")
.description("Count the number of lines in the file")
.argument('<file>',"file to read")
.action((file)=>{
    fs.readFile(file,"utf8",(err,data)=>{
        if(err){
            console.log("file not found!")
        }else{
            ctLine = data.split('\n').length;
            console.log(`There are ${ctLine} lines in your file`)
        }
    })
})

program.parse();










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

