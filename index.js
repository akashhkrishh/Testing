const express = require('express');

const app = express();

app.use("/",(req,res)=>{
    res.send("Hellow");
}).listen(3000);
