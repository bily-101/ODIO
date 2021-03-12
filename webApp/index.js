var express = require("express");
var app = express();
var mongodb = require("mongodb");

app.get("/", function(req,res){
    res.render("index.ejs")
})

app.get("/rules", function(req,res){
  res.render("rules.ejs")
})
app.get("/dashboard",function(req, res) {
    res.render("socialMedia_site/dashboard.ejs")
})


app.get("/help", function(req,res){
  res.render("help.ejs")
})


app.get("/submitReq", function(req,res){
  res.render("submit.ejs")
})

app.get("/chat", function(req,res){
  res.render("chat.ejs")
})

app.listen(process.env.PORT, function () {
  console.log('ODIO chat app listening on port 8080');
});