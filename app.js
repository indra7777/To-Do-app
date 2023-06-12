
const bodyParser = require('body-parser');
const express = require('express');
const {static} = require("express");

const day = require(__dirname+'/date.js');

const app = express();
let items = [];
let workListItems = [];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/public', express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

   
    let currentDay = day();
    res.render('list',{listTitle:currentDay,newListItems:items});
});

app.post("/",(req,res)=>{
    let item = req.body.newValue;
    if( req.body.list === "Work"){
        // let workItem = req.body.newValue;
        workListItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work",(req,res)=>{
   res.render("list",{listTitle:"Work",newListItems:workListItems})
});


app.listen(3000,()=>{
    console.log("Sever is running on port: 3000");
})