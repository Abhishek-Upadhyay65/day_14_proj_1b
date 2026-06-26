const express=require("express");

const app=express();

let students = [
    {id:1,name:"Abhishek",city:"Gorakhpur"},
    {id:2,name:"abhinav",city:"gkp"}
];
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API IS RUNNING");
});

app.get("/students",(req,res)=>{
    res.json({
        message:"ALL STUDENTS",
        data:students
    })
});

app.listen(3000,()=>{
    console.log("server started");
    

});