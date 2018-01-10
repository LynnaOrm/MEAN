var express = require('express'); //nodes way of importing 
var app = express(); //store the resulting app in var app 
var port = 8000; //setting up port, local host
var bp = require('body-parser'); // allows use to send info from the front end to the back end 
var path = require('path'); //tells where to go.
var session = require('express-session');

app.use(bp.urlencoded());

app.use(express.static(path.join(__dirname , "/view")));

app.use(session({secret:" string "})); 

app.set("views",path.join(__dirname,"/view"));
app.set("view.engine", "ejs");



//ROUTING

app.get('/count', function(req, res){
    if(!req.session.count){
        req.session.count = 0
    }
    res.render("count.ejs", {count: req.session.count});
});

app.get("/add", function(req, res){
    req.session.count += 1
    res.redirect("/count")
});
    
    

app.listen(port,function(){
    console.log('listening')
});
    