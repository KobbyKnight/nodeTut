const fs = require('fs');
// Make a folder
fs.mkdir('tutorial',(e)=>{
    e?console.log(e):console.log('Folder created');
});

// remove directory
fs.rmdir('tutorial',(e)=>{
    e?console.log(e):console.log('folder deleted');   
});

//create file in directory
fs.writeFile('./tutorial/hello.txt',"file in folder",(e)=>{
    e?console.log(e):console.log("file created in directory");  
});

//read dir and files , inner function deletes files
fs.readdir('./tutorial',(e,files)=>{
    e?console.log(e):console.log(files);
    if (files) {
        for (let file of files) {
            fs.unlink('./tutorial/'+ file,(er)=>{
                er?console.log(er):console.log("Files deleted successfully");              
            });            
        }
    }
});


