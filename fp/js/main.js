//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 

 //set current year in span with id of this-year
let d = new Date(); let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || "topnav.scrolled") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}

/*
var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".topnav");
//Toggle mobile menu 
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        
        // adds the menu (hamburger) icon 
        toggle.querySelector("a").innerHTML = "<i class=’fa-solid fa-bars’></i>";
    } else {
        menu.classList.add("active");
        
        // adds the close (x) icon 
        toggle.querySelector("a").innerHTML = "<i class=’fa-solid fa-xmark></i>";
    }
}

// Event Listener 
toggle.addEventListener("click", toggleMenu, false);
*/

$(function () {
    $(document).scroll(function () {
    var $nav = $(".topnav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});