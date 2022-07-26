// let unlock = true;
// let iconMenu = document.querySelector(".icon-menu");
// if (iconMenu != null) {
//     let menuBody = document.querySelector(".main__menu");
//     iconMenu.addEventListener("click", function (e) {
//         if (unlock) {
//             iconMenu.classList.toggle("_active");
//             menuBody.classList.toggle("_active");
//         }
//     });
// };
// function menu_close() {
//     let iconMenu = document.querySelector(".icon-menu");
//     let menuBody = document.querySelector(".main__menu");
//     iconMenu.classList.remove("_active");
//     menuBody.classList.remove("_active");
// }

$(document).ready(function () {
    $('.original__slider').slick({
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 5,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
            }
        }],
    });
});
$(document).ready(function () {
    $('.rising__slider').slick({
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 5

    });
});
