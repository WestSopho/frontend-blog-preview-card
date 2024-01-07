//Event Handler for Title 
var titleElement = document.querySelectorAll(".title");

titleElement[0].addEventListener("mouseover", function () {
    titleElement[0].classList.add("hoverEffectTitle", "cursor");
});

titleElement[0].addEventListener("mouseout", function () {
    titleElement[0].classList.remove("hoverEffectTitle"); 
});