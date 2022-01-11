'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const faq__blockTop = document.querySelectorAll('.faq__blockTop');
   


    faq__blockTop.forEach(item=>{
        let flag = true;
        let block__Bottom =  item.parentElement.querySelector('.faq__blockDesc');
        const pic = item.querySelector('.faq__blockTopPic svg');

        item.addEventListener('click', ()=>{
            if(flag){
                block__Bottom.style.height = block__Bottom.querySelector('p').offsetHeight + 50 + 'px';
                pic.style.transform = 'rotate(180deg)';
            } else {
                block__Bottom.style.height = '0px';
                pic.style.transform = 'rotate(0deg)';
            }
            flag = !flag;
        })
    })
})