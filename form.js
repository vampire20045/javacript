// to change the colour of the background when it is clicked 
let x = document.querySelector(".a");
x.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});
// it will change the inner text of h1 tag
let y =document.querySelector(".b");
let m=document.querySelector(".c");
y.addEventListener("click",()=>{
    m.innerHTML="<h1> i love u </h1>"
    m.prepend.innerHTML="<h1> love u too</h1>"
    
})


