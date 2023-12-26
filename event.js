for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "pink";
    });
}// method to change the 
//q juery method
$("button").click(function () {
    $("h1").css("color", "pink");
})