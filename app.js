const express = require("express");
const bodyparser = require("body-parser"); 

const app = express();
app.use(express.static('public'));
var items = ['Buy Food', 'Cook Food','Eat Food'];
app.use(bodyparser.urlencoded({ extended: true }))
app.set('view engine','ejs')
app.get('/',function(req,res){
    var today = new Date();

   
  var options = {
    weekday : "long",
    day: "numeric",
    month:'long'
  };
  var day = today.toLocaleDateString('en-us',options);
    res.render("list", { kindofday: day, newlistitems:items });

});
app.post("/",function(req,res){
    var item = req.body.newitem;
    items.push(item)
    res.redirect("/");
    
})
app.listen(3000,function(){
    console.log("The Server is Running on port Number 3000");
    
})