const express=require('express');
const app=express();

const path=require('path');

var http=require('http').Server(app);
const port=3000;

app.get("/", (req, res)=>{
    res.send('abc');
})


app.get("/yeojun", (req, res)=>{
    res.send('yeojun')
});

app.get("/gandan", (req, res)=>{
    res.sendFile(path.join(__dirname, "/gandan.html"))
});

http.listen(port, ()=>{
    console.log(`server listening on*:${port}`)
})