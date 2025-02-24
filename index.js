const express=require('express');
const path =require('path');
const app=express();

const publicPath=path.join(__dirname,'public');

// app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get('',(_,resp)=>{
  resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,resp)=>{
  resp.sendFile(`${publicPath}/about.html`)
})


app.get('/profile',(_,resp)=>{
  const user={
    name:'Shakshi kejriwal',
    email:'kejriwal@gmail',
    city:'jnk',
    skill:['php','c++','java','python']
  }
  resp.render('profile',{user});
})
app.get('/login',(_,resp)=>{
  resp.render('login');
})

app.get('*',(_,resp)=>{
  resp.sendFile(`${publicPath}/404page.html`)/// make 404 page 
});


app.listen(4000);