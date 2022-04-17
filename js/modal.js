window.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.modal-btn');
    const btnsClose = document.querySelectorAll('.modal-close-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');


    function modalClose(condition) {
        if (condition) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el) => {
                el.classList.remove('modal--visible');
            });
            body.classList.remove('lock');
        };
    };

    function modalOpen(path) {
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
        body.classList.add('lock');
    }

    btns.forEach((el) => { //открытие
        el.addEventListener('click', (e) => {
            let path = e.currentTarget.getAttribute('data-path');
            modalOpen(path);
        });
    });
    btnsClose.forEach((el) => { //закрытие по кнопке
        el.addEventListener('click', (e) => {
            modalClose(e.target.closest('.modal'));
        });
    });
    modalOverlay.addEventListener('click', (e) => { // закрытие по серой области
        modalClose(e.target == modalOverlay);
    });
})