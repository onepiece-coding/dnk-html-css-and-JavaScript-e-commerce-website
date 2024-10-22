const toggleNavbarMenuBtn = document.querySelector(".toggle-navbar-menu");

const navbarEl = document.querySelector(".navbar");

toggleNavbarMenuBtn.addEventListener("click", function () {

    if (navbarEl.classList.contains("show")) {

        this.innerHTML = "<i class=\"fa-solid fa-bars\"></i>";

        navbarEl.classList.remove("show");

    } else {

        this.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";

        navbarEl.classList.add("show");


    }

});
