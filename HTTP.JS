// get=request resourse
// post = sending resource
// put=replace resource 
//patch= patch up resource 
// delete = delete the resource 
import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("hello aryan this is the first server,<h1> hello world</h1>");
});
app.get("/about",(req,res)=>{
    res.send("hello aryan this is the first server,<h1> hello world</h1>");
});
app.listen(8000,()=>{
    console.log("hello world ");
})
