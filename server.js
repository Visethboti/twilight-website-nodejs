const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extender: true}));

app.use(express.static(__dirname + '/views'));

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("index")
});


app.listen(3011, function(){
  console.log("Server started on port 3011");
});
