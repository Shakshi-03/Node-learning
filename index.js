const express=require('express');
const app=express();

app.get('',(req,resp)=>{
  console.log("data sent by browser---->>",req.query.name);///>>routing with expressjs
  resp.send("welcome"+ req.query.name);
});

app.get('/about',(req,resp)=>{
 
  resp.send("welcome to about page");
});

app.get('/help',(req,resp)=>{
  resp.send("welcome to help page");
});

app.listen(4000);