let a=document.querySelector("#b");
let b=document.querySelector("#c");
let c=document.querySelector("#e");
a.onclick = () =>{
    let m=prompt("enter the number");
    console.log(m);
    a.innerText=m;
    b.onclick = () =>{
        let n=prompt("enter the number");
        console.log(n);
        b.innerText=n;
    }
    
    
}



