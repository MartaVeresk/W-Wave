document.addEventListener("DOMContentLoaded", () => {
    const swiper1 = new Swiper('.advan__swiper1', {
        slidesPerView: 1,
        pagination: {
            el: '.advan__pag',
            type: 'bullets',
            clickable: true,
        },
        // a11y: false, // доступность
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }, // можно управлять с клавиатуры стрелками влево/вправо

    });

    const swiper2 = new Swiper('.playlists__swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.playlists__pag',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.playlists__next',
            prevEl: '.playlists__prev',
        },
        a11y: {
            enable: true,
            // containerMessage: 'Радиоприемник W-Wave',
            // slideLabelMessage: {
            //     slide 1: 'Радиоприемник W-Wave бордовый',
            //     2: 'Радиоприемник W-Wave сине-зелёный',
            //     3: 'Радиоприемник W-Wave зелёный',
            // }
        },
        breakpoints: {
            1100: {
                spaceBetween: 30
            },
            1200: {
                spaceBetween: 0
            }
        },
    });

    // playlist
    //добавляем swiper3 для 320 для checkbox
    const slider = document.querySelector('.playlists__header'); //swiper
    let swiper3 = null;
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    function mobileSlider(e) {
        // Проверить, что media query будет true
        if ((e.matches) && slider.dataset.mobile == 'false') {
            swiper3 = new Swiper(slider, {
                slidesPerView: 'auto',
                spaceBetween: 15,
                slideClass: 'playlists__label',
                grabCursor: true,
                a11y: false,
            });
            slider.dataset.mobile == 'true';
        } else {
            slider.dataset.mobile == 'false';
            if (slider.classList.contains('swiper-initialized'))
                swiper3.destroy();
            swiper3 = null;
        }
    }
    // Начальная проверка
    mobileSlider(mediaQuery);
    // Слушать события
    mediaQuery.addListener(mobileSlider);
})