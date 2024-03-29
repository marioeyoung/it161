//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 

 //set current year in span with id of this-year
let d = new Date(); let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }

}

$(function () {
    $(document).scroll(function () {
    var $nav = $(".topnav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});