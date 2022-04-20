//  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
//  zip: /^\d{5}(-\d{4})?$/, 
//  phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/, 
//  password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/, 
//  strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/  
// ^[А-Яа-яЁё]+$/ - "Имя"



function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
    // let re = /^[А-Яа-яЁё]+$/;
    let re = /^[A-Za-zА-Яа-яЁё\s]/;
    return re.test(String(name).toLowerCase());
}

function validatePassword(password) {
    let re = /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/;
    return re.test(String((password)));
}

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}
// по клику очищаем форму
function deleteError(el) {
    el.classList.remove('error');
}

function validateInput(el, validate, error) {
    if (!validate) {
        el.classList.add('error');
        error++;
    } else
        el.classList.remove('error');
    return error;
}

// если поле или форма не заполнено
function validateInputs(formInputs, error) {
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function(input) {
        if (input.value === '') {
            input.classList.add('error');
            error++;
        } else
            input.classList.remove('error');
    });
    // если форма не заполнена
    if (emptyInputs.length !== 0) error++;
    return error;
}

window.addEventListener('DOMContentLoaded', () => {
    //about__form
    document.querySelector('.about__form').addEventListener('submit', function(e) {

        e.preventDefault();

        let formInputs = document.querySelectorAll('.about__input');
        let inputName = document.querySelector('.about__input_name');
        let inputEmail = document.querySelector('.about__input_email');
        let inputCheckbox = document.querySelector('.about__checkbox');
        let error = 0;

        error = validateInputs(formInputs, error);
        error = validateInput(inputName, validateName(inputName.value), error);
        error = validateInput(inputEmail, validateEmail(inputEmail.value), error);
        error = validateInput(inputCheckbox, inputCheckbox.checked, error);

        if (error === 0) this.submit();
    })

    //modal-entry__form
    document.querySelector('.modal-entry__form').addEventListener('submit', function(e) {

        e.preventDefault();

        let formInputs = document.querySelectorAll('.modal-entry__input');
        let inputPassword = document.querySelector('.modal-entry__input_password');
        let error = 0;

        error = validateInputs(formInputs, error);
        error = validateInput(inputPassword, validatePassword(inputPassword.value), error);

        if (error === 0) this.submit();
    })
})