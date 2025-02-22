const express = require("express");
const app =express()
const jokes =require('./joke.json')

app.get("/",(req,res)=>{
    const randomjoke=jokes[Math.floor(Math.random()*jokes.length)]
    res.json(randomjoke)
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    
})