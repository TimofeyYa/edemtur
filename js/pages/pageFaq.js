'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const faq__blockTop = document.querySelectorAll('.faq__blockTop');
   


    faq__blockTop.forEach(item=>{
        let flag = true;
        let block__Bottom =  item.parentElement.querySelector('.faq__blockDesc');

        item.addEventListener('click', ()=>{
            if(flag){
                block__Bottom.style.height = block__Bottom.querySelector('p').offsetHeight + 50 + 'px';
                
            } else {
                block__Bottom.style.height = '0px';
                
            }
            flag = !flag;
        })
    })
})