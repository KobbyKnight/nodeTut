const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/example',(req,res)=>{
    res.send('Example page');
});

// Route with params
app.get('/example/:name/:age',(req,res)=>{
    // use params when required
    console.log(req.params);
    // fetches query string
    //use query string when param is optional. ?index=value&index=value...
    console.log(req.query);
    res.send('Name: ' + req.params.name +'</br>'+'Age: ' + req.params.age);
});

/**
 * Serving Static files
 */
app.use('./public',express.static(path.join(__dirname,'/static')));
app.get('/homer',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.listen(4000);