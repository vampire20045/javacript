const f=require('fs');
f.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)
});
console.log("jjf");
// to write in a file
f.writeFile('th,txt','hwlleoeoeoeo',()=>{
    console.log("uekekk");
})