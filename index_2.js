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

app.post("/students",(req,res)=>{
    const {id,name,city}=req.body;
    const newStudent={id,name,city};
    students.push(newStudent);
    res.json({
        message:"record added",
        students:newStudent,
        data:students
    })

});
// data update
app.put("/students/:id",(req,res)=>{
    // const id = req.params.id;
    const {id}=req.params;
    const student = students.find(s => s.id==id);
    // if student found = value==>
    if(!student)
    {
        return res.status(404).json({
            message:"Student not found"
        });
    }
    student.name = req.body.name;
    student.city= req.body.city;
    res.json({
        message:"record updated",
        student
    });
});
// app.delete

app.listen(3000,()=>{
    console.log("server started");
    

});