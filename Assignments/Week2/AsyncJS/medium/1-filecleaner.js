// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman

// After the program runs, the output should be

// hello world my name is raman


// => Read a File
// => Remove the extra Spaces (replace and trim)
// => write it back to the file.


const fs = require("fs");
const { resolve } = require("path");

function fileCleaner(file,encoding="utf8"){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,encoding,(err,data)=>{
            if(err){
                reject();
            }else{
                let fileData = data;
                fs.writeFile(file,fileData.replace(/\s+/g," ").trim(),(err)=>{
                    if(err){
                        console.log("Failed to update given file")
                    }else{
                        resolve();
                    }
                })
            }
        })
    })

}
function done(){
    console.log("File has been cleaned!")
}
function failed(){
    console.log("Failed to clean file!")
}

fileCleaner("file-to-clean.txt").then(done).catch(failed);