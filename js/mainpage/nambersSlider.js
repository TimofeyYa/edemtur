'use strict'

window.addEventListener("DOMContentLoaded",()=>{
    
    const number__sliderTrack = document.querySelector('.number__sliderTrack'),
          number__sliderSec = document.querySelectorAll('.number__sliderSec');

    const slideItemWidth = number__sliderSec[0].clientWidth;

    let index = 0,
        scroll = slideItemWidth / 2;


    number__sliderSec[index].classList.add('number__sliderSec--carrent');
    let carrentEl = document.querySelector('.number__sliderSec--carrent');
    
    function selectSlide(znak){

        number__sliderTrack.style.marginLeft = (window.innerWidth / 2) + 'px';
        number__sliderTrack.style.transform = `translate(${scroll * znak}px, 0px)`;
    }
    selectSlide(-1);
    
    number__sliderSec.forEach(item=>{
        item.addEventListener('click', (e)=>{
                if (!item.classList[1]){
                    if (e.clientX > window.innerWidth / 2){
                        if (!(index >= number__sliderSec.length -1)){
                            carrentSelect(1)
                            scroll = scroll + slideItemWidth + 40;
                            selectSlide(-1);
                        }
                    } else {
                        if(!(index <= 0)){
                            carrentSelect(-1);
                            scroll = scroll - (slideItemWidth + 40);
                            selectSlide(-1);
                        }
                    }
            }
           
        })
    })

    function carrentSelect(znak){
        index = index + 1*znak;

        number__sliderSec.forEach(item =>{
            item.classList.remove('number__sliderSec--carrent');
        })
            number__sliderSec[index].classList.add('number__sliderSec--carrent');
        carrentEl = document.querySelector('.number__sliderSec--carrent');
    }
})