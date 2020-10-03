const clickHeader = document.querySelector(".clickHeader");
const nav = document.querySelector(".nav__list__combined");

clickHeader.addEventListener("click", ()=>{
    nav.classList.toggle("nav__list__combined--hide");
})