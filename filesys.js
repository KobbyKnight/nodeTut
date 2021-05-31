const fs = require("fs");
/**
 * Write/create a file
 */
fs.writeFile("./file.txt","Hello filesystem",(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("File successfully created");      

    }
});

/**
 * Read a file
 */
fs.readFile("./file.txt",'utf8',(er,file)=>{
    er?console.log(er):console.log(file);    
});

/**
 * Rename a file
 */
fs.rename('./file.txt',"newFile.txt",(er)=>{
    er?console.log(er):console.log("File renamed successfully");   
});

/**
 * Add/ Append to a file
 */
fs.appendFile("./newFile.txt",`\nNew line of information`,(e)=>{
    e?console.log(e):console.log("New data appended to file");    
});

/**
 * delete a file
 * the file extension does matter in the file name/pathe specified
 * fo all the above functions
 */
fs.unlink("./newFile.txt",(e)=>{
    e?console.log(e):console.log("File deleted");
});