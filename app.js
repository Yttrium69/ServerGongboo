const express=require('express');
const app=express();

const path=require('path');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

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

app.get("/signup", (req, res)=>{
    res.sendFile(path.join(__dirname, "/signup.html"))
});

app.post("/code", (req, res)=>{
    res.send(req.body.code);
})

http.listen(port, ()=>{
    console.log(`server listening on*:${port}`)
})