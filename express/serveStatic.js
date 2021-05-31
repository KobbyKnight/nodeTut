// Serving static files
const express = require('express');
const app = express();
const path = require ('path');

//middleware
app.use('/public',express.static(path.join(__dirname,'web')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'web','index.html'));

});
console.log(path.join(__dirname,'web','index.html'));

app.listen(3000);