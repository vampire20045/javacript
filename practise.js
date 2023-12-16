let a=prompt("enter a number");
console.log(a);
for(let b=0;b<a;b++){
    if(b%2==0){
        console.log("yes number is evem");
    }
    else{
        console.log("number is ood");
    }
}
let c=prompt("enter a string");
console.log(c);
for(let i of c){
    console.log(i);
}
let d={
f:121,
age:21,
name:"aryan",
};
for(let i in d){
    console.log(i);
}
let str="aryan";
console.log(str[0]);
