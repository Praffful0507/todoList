const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

var todos = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/", function(req,res){
    var todo = req.body.n;

    todos.push(todo);

    res.redirect("/");
})

app.get("/", function(req,res){
    
    var today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", option);

    res.render("list", {
        kindofDay: day,
        todo: todos
    });

});

app.listen(3000, function(){
    console.log("Server is started in port 3000");
});