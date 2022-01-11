'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const popup = document.querySelectorAll('.popupWrap'),
          exit__popup = document.querySelectorAll('.popup__exitBtnPic svg');


    
    exit__popup.forEach(item=>{
        item.addEventListener('click', ()=>{
            item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        })
        
    })
})