const wrapper = document.querySelector('.wrapper')
const login_back = document.querySelector('.login_back')
const register = document.querySelector('.register')
const login_popup = document.querySelector('.login_popup')
const close_page = document.querySelector('.close_page')

register.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

login_back.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

login_popup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

close_page.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const inputBoxes = document.querySelectorAll('.inputBox input, .inputBox textarea');

let popupSI = document.getElementById("popupSI");
let popupSU = document.getElementById("popupSU");

function openPopupSI() {
    popupSI.classList.add("signIn_successOpen");
    wrapper.classList.remove('active-popup');
}

function openPopupSU() {
    popupSU.classList.add("signUp_successOpen");
    wrapper.classList.remove('active-popup');
}

function closePopupSI() {
    popupSI.classList.remove("signIn_successOpen");
    wrapper.classList.remove('active-popup');
}

function closePopupSU() {
    popupSU.classList.remove("signUp_successOpen");
    wrapper.classList.remove('active-popup');
}