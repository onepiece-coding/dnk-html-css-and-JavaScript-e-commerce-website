const toggleNavbarMenuBtn = document.querySelector(".toggle-navbar-menu");

const navbarEl = document.querySelector(".navbar");

// Toggle Mobile Navbar

toggleNavbarMenuBtn.addEventListener("click", function () {

    if (navbarEl.classList.contains("show")) {

        this.innerHTML = "<i class=\"fa-solid fa-bars\"></i>";

        navbarEl.classList.remove("show");

    } else {

        this.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";

        navbarEl.classList.add("show");


    }

});

// Initialize Swiper

const swiper = new Swiper('.swiper', {

    slidesPerView: 1,       // Number of slides visible at a time

    spaceBetween: 20,       // Space between each slide (in pixels)

    loop: true,             // Loop through slides

    // pagination: {

    //     el: '.swiper-pagination',

    //     clickable: true,

    // },

    navigation: {

        nextEl: '.swiper-button-next',

        prevEl: '.swiper-button-prev',

    },

    breakpoints: { // Media Queries

        640: {

            slidesPerView: 1, // Display 1 slide at a time on smaller screens

        },

        768: {

            slidesPerView: 2, // Display 2 slides on medium-sized screens

        },

        1024: {

            slidesPerView: 3, // Display 3 slides on larger screens

        },

    },

});
