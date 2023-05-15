const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true}));
//To render static file 
// app.use(express.static("public"));

app.use(express.static(__dirname + "/public/"));

app.get('/' , (req , res)=>{
  res.sendFile(__dirname + "/index.html");
})

app.listen("3000" , ()=>{
  console.log("my server is running on the port of 3000");
})