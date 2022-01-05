window.onload = function () {
    let menu_btn = document.querySelector(".hamburger");
    let mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.addEventListener("click", function () {
        menu_btn.classList.toggle('is-active');
        // mobile_menu.classList.toggle('is-active');
    });
    menu_btn.addEventListener('click', function () {
        mobile_menu.classList.toggle('is-active');
    });
}