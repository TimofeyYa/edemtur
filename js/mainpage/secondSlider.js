'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const controlLeft = document.querySelector('.number__secondSliderControl__Left'),
          controlRigth = document.querySelector('.number__secondSliderControl__Right');
    const wrap = document.querySelectorAll('.number__secondSliderContent .number__sliderItemWrap'),
          item = document.querySelectorAll('.number__secondSliderContent .number__sliderItem');
    const width = wrap[0].clientWidth;
    let index = 0;
    const length = item.length;


    controlRigth.addEventListener('click', ()=>{
        if (index < length - 1){
            item[index].classList.add('number__sliderItem--select');
            wrap[index].style.width = '0px';
            index++;
        }
        
    })
    controlLeft.addEventListener('click', ()=>{
        if (index > 0){
        index--;
        item[index].classList.remove('number__sliderItem--select');
        wrap[index].style.width = width +'px';
        }
    })
})