import express from "express";
const a=express();
a.listen(7000,()=>{
    console.log("the port is running ");
})
// to find the port number which is running on our computer
// type command netstat -ano|findstr "LISTENING"