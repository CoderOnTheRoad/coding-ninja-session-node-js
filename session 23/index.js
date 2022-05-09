const express= require("express");
const app= express();
const port=8080;



app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Node Js<h1>");
})

app.listen(port,function(err){
    if(err){
        console.log("something went wrong",err);
    }
    console.log(`app is running on port:${port}`);
})





