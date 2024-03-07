//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
  
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 
 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

    /*
        Taken from intl.seatllecolleges.edu
        Changes class to make background of desktop 
        nav blue instead of transparent on scroll
        https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
    */
        $(function () {
            $(document).scroll(function () {
            var $nav = $(".topnav");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });
        });