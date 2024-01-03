let a=prompt("enter a string");
console.log(a);
function vowel(a){
    let c=0;
    let s="abbbc"

    for(let v of a){
        if(v==="a" || v==="o" || v==="e" || v==="i" || v==="u" )
        {
c=c+1;

        }
    }
    console.log(c);
}
vowel(a);