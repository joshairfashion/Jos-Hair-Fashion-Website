
$(document).ready(function () {
    console.log("hello world");
 
    $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('nav-colored', $(this).scrollTop() > $nav.height());
  });
    
   var open = document.getElementById("open-menu");
    var close = document.getElementById("close-menu");
    var nav = document.getElementById("mobile-menu")
    
    $(function () {
        $("#open-menu").on('click', function () {
            open.classList.add("hide");
            close.classList.remove("hide");
            nav.classList.remove("away")
        });
    });
    const closeMenu = () => {
        $("#close-menu").on('click', function () {
            close.classList.add("hide");
            open.classList.remove("hide");
            nav.classList.add("away");
        });
    }; 
    closeMenu()
    $(".nav-link").on("click", () => {
        close.classList.add("hide");
        open.classList.remove("hide");
        nav.classList.add("away");
    })
});
