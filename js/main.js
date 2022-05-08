window.addEventListener('DOMContentLoaded', function() {

    // header       кнопка играть маленькая
    document.querySelectorAll('.header__play').forEach(el => el.addEventListener('click', function() {
        el.querySelectorAll('.header__svg').forEach(ell => ell.classList.toggle('header__svg_hidden'));
    }))

    // podcasts       кнопка играть большая
    document.querySelectorAll('.podcasts__play').forEach(el => el.addEventListener('click', function() {
        el.querySelectorAll('.podcasts__svg').forEach(ell => ell.classList.toggle('podcasts__svg-hidden'));
    }))

    // podcasts//like-unlike 
    document.querySelectorAll('.podcasts__icon2').forEach(el => el.addEventListener('click', function() {
        el.classList.toggle('.podcasts__icon-event');
        if (el.classList.contains('.podcasts__icon-event') === true)
            el.querySelector('.podcasts__counts').textContent++; //like 
        else
            el.querySelector('.podcasts__counts').textContent--; //unlike
    }))

    // podcasts  //share
    document.querySelectorAll('.podcasts__icon3').forEach(el => el.addEventListener('click', function() {
        if (el.classList.contains('.podcasts__icon-event') === false)
            el.classList.add('.podcasts__icon-event');
        el.querySelector('.podcasts__counts').textContent++;
    }))

    // broadcast  select  choices.js
    function mySelect() {
        const element = document.querySelector('.broadcast__select-list');
        const choices = new Choices(element, {
            // placeholder: true,
            // placeholderValue: "",
            allowHTML: true,
            searchEnabled: false, //отключает поиск
            shouldSort: false, //отключает сортировку
        });

    }
    mySelect();

    // broadcast  button Еще подкасты
    document.querySelector('.podcasts__btn').addEventListener('click', function() {
        const items = document.querySelectorAll('.podcasts__item');
        //получаем значение из :root и string переводим в int
        //--number-card-podcasts = 8 для всех
        //--number-card-podcasts = 4 для media 320(500) 
        const numItemsVisible = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--number-card-podcasts'), 10);
        // определяем media
        const itemsClassHiden = (numItemsVisible == 8) ? 'podcasts__hidden' : 'podcasts__hidden-320';
        let firstItemHidden = 0; //номер первого невидимого элемента

        for (let i = 0; i < items.length; i++) {
            if (!items[i].classList.contains(itemsClassHiden)) {
                firstItemHidden = i + 1;
                items[i].classList.add(itemsClassHiden);
            }
        }
        if (firstItemHidden >= items.length) firstItemHidden = 0; //определяем первый эл который будет виден
        for (let i = firstItemHidden;
            (i < firstItemHidden + numItemsVisible) && (i < items.length); i++) {
            items[i].classList.remove(itemsClassHiden);
        }
    });

    // guest accordeon
    (() => {
        new Accordion(".js-accordion-container", {
            openOnInit: [0]
        });
    })();

    // guest accordeon tab меняем фото
    // https://github.com/michu2k/Accordion/tree/master/dist
    document.querySelectorAll('.accordion__link').forEach(function(tabsBtn) {
        // меняем картинку
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.guests__card').forEach(function(tabContent) { //все улаляю
                tabContent.classList.remove('guests__card_active')
            })
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function(tabPic) { // нужное add
                    tabPic.classList.add('guests__card_active');
                })
                // меняем гостя имя фиксируем 
            document.querySelector('.accordion__link_active').classList.remove('accordion__link_active');
            tabsBtn.classList.add('accordion__link_active');
        })
    })

    //header-search
    document.querySelector(".header__search").addEventListener("click", function() {
        document.querySelector(".header__form").classList.toggle("header__form_active");
    })

    // закрытие окон при клике вне окон  
    document.addEventListener("click", function(e) {
        let target = e.target;
        let form = document.querySelector(".header__form");
        if (!target.closest(".header__search-wrap")) {
            form.classList.remove("header__form_active");
            form.querySelector("input").value = "";
            //   document.querySelector(".form-btn__open").classList.remove("active")
        }
    })

    //header-burger
    document.querySelector(".header__burger").addEventListener("click", function() {
        this.classList.toggle("burger_active");
        document.querySelector(".header__nav").classList.toggle("burger_active");
        document.querySelector(".header__nav2").classList.toggle("burger_active");
    })

    document.querySelector(".header__block-320").addEventListener("click", function() {
            this.classList.toggle("js_active");
            document.querySelector(".header__block").classList.toggle("js_active");
        })
        // отложенная загрузка изображений
    lazyload();
})