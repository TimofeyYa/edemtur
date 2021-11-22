'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const header = document.querySelector('.header');

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 50){
            header.classList.add('header__mini');
        } else{
            header.classList.remove('header__mini');
        }
    })
})