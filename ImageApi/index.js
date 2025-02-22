const express=require("express")
const app= express();
const images = require("./unsplashImages.json")

app.get("/",(req,res)=>{
  const image = images[Math.floor(Math.random()*images.length)]
  res.json(image)
})

app.listen(5000,()=>{
    console.log("Server is up on port 5000");
    
})