
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



app.get("/", function(req, res){
	res.render("index")
});


app.get("/destination", function(req, res){
	res.render("destination")
});

app.get("/crew", function(req, res){
	res.render("crew")
});

app.get("/technology", function(req, res){
	res.render("technology")
});


app.listen(3000, function(){
	console.log("Server initiated on port 3000");
})


