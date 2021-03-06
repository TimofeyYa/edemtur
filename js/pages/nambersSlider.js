'use strict'

window.addEventListener("DOMContentLoaded",()=>{
    const numfondCont__lineType = document.querySelectorAll('.numfondCont__lineType');


    if (window.screen.width > 1100){
        numfondCont__lineType.forEach(item=>{
        const number__sliderTrack = item.querySelector('.number__sliderTrack'),
        number__sliderSec = item.querySelectorAll('.number__sliderSec');

        const slideItemWidth = number__sliderSec[0].clientWidth;

        let index = 0,
            scroll = slideItemWidth / 2;


        number__sliderSec[index].classList.add('number__sliderSec--carrent');
        let carrentEl = item.querySelector('.number__sliderSec--carrent');
        
        function selectSlide(znak){

            number__sliderTrack.style.marginLeft = (window.innerWidth / 2) + 'px';
            number__sliderTrack.style.transform = `translate(${scroll * znak}px, 0px)`;
        }
        selectSlide(-1);

        // number__sliderTrack.addEventListener('click', (e)=>{
        //     console.log(e.path);
        //     if (!e.path.includes(carrentEl)){
        //     if (e.clientX > window.innerWidth / 2){
        //         if (!(index >= number__sliderSec.length -1)){
        //             carrentSelect(1)
        //             scroll = scroll + slideItemWidth + 40;
        //             selectSlide(-1);
        //         }
        //     } else {
        //         if(!(index <= 0)){
        //             carrentSelect(-1);
        //             scroll = scroll - (slideItemWidth + 40);
        //             selectSlide(-1);
        //         }
        //     }
        // }
        
        // })
        number__sliderSec.forEach(item=>{
            item.addEventListener('click', (e)=>{
                if (item.classList[1] != 'number__sliderSec--carrent'){
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
            carrentEl = item.querySelector('.number__sliderSec--carrent');
        }
        })
    } else {
        numfondCont__lineType.forEach(item=>{
            
            const leftArr = item.parentElement.parentElement.querySelector('.numfondCont__lineControlArrLeft'),
                  rightArr = item.parentElement.parentElement.querySelector('.numfondCont__lineControlArrRight');
            const number__sliderItem = item.querySelectorAll('.number__sliderItem');
            let index = 0;

            console.log(item.parentElement.parentElement, performance.now());
            rightArr.addEventListener('click', ()=>{
                if ((item.style.display != 'none') && (index + 1 < number__sliderItem.length)){
                    number__sliderItem[index].style.display = 'none';
                    index++;
                }
            })
            leftArr.addEventListener('click', ()=>{
                if ((item.style.display != 'none') && (index > 0)){
                    index--;
                    number__sliderItem[index].style.display = 'block';
                }
                
            })
        })
    }
    
    
})