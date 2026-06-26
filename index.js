const express = require("express");

const app =express();

app.use("/",(req,res)=>{
    res.write("phla phla pyaar....");
    console.log("someone trying to see your love");
    res.end("Thank you");
    
});

app.listen(3000,()=>{
    console.log("server started");
    
});
