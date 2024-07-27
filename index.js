const express = require('express');


const app = express();

app.use(express.json())

app.post("/",(req,res)=>{
    try {
        const { name } = req.body;
         
        res.send(200,`Hello ${name}`);
    } catch (error) {
        console.log(error)
        res.send(500, error);
    }
    
});

app.listen(3000);
