
/*
const hamburger_menu=document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".header nav");
const links = document.querySelectorAll(".links a");


function closeMenu(){
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}


hamburger_menu.addEventListener("click",() => {
    if(!navbar.classList.contains("open")) {
        document.body.classList.add("stop-scrolling");
        navbar.classList.add("open");
    }else{
        closeMenu();
    }
});
*/


/* ===========  typing animation  ===========================*/
/*var Typed = require(typed.min.js);*/

var typed = new Typed(".animation",{
    strings:["","Researcher","Developer","Programmer","Designer",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



