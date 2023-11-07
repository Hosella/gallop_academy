// slideshow
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//btn menu
const bntMenu = document.getElementById("top__icon");
const body = document.getElementById("body");
const nav_icon = document.getElementById("top__icon");
const menu = document.getElementById("menu");
const handleMenu = ()=>{
    const isHidden = body.matches(".body-hidden");
    if (isHidden) {
        body.classList.remove("body-hidden");
        nav_icon.classList.remove("open");
        menu.classList.remove("page__menu--open");
    } else {
        body.classList.add("body-hidden");
        nav_icon.classList.add("open");
        menu.classList.add("page__menu--open");
    }
};
bntMenu.addEventListener("click", handleMenu);
const links = document.querySelectorAll(".menu__link") || [];
links?.forEach((link)=>{
    link.addEventListener("click", ()=>{
        body.classList.remove("body-hidden");
    });
});

//# sourceMappingURL=index.900caf0b.js.map
