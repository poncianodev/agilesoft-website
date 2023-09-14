window.onload = function () {
    window.addEventListener("scroll", function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add("scroll");
        } else {
            document.querySelector("header").classList.remove("scroll");
        }
    });

    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");

    menu_btn.addEventListener("click", function () {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
    });
};
