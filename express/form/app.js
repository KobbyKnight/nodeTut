const express = require('express');
const app = express();
const Joi = require('joi');
const path = require('path');
const bodyParser = require('body-parser');
//middleware
//app.use('/public',express.static(path.join(__dirname,'/form/static')));
// URL encodes the form data;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    //console.log(path.join(__dirname));
});
//console.log(path.join(__dirname,'form/static'));

app.post('/',(req,res)=>{
    console.log(req.body);
    //db work here
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body,schema,(err,result)=>{
        if (err) {
            res.send('Validation Error');
            console.log(err);            
        }
        console.log(result);        
        res.json({success : true});
    })
    
});

app.listen(3000);