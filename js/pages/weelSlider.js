'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const track = document.querySelectorAll('.weelSlider__track');
    const screenW = window.innerWidth / 2;
    // const weelSliderItem = document.querySelector('.weelSliderItem').clientWidth; // это для анимации слайдера
    // const gap = 54;


    let traker = 0
    track.forEach(item=>{
    let itemWidth = item.clientWidth / -2;
    console.dir(item);
    item.style.transform = `translate(calc(${itemWidth}px + ${0}px),0)`;
            item.addEventListener('click', (e)=>{
            if ((e.clientX - screenW) > 0){
                // traker -= (weelSliderItem * 2 + gap * 2);
                // item.style.transform = `translate(calc(${itemWidth}px + ${traker}px),0)`;
                reCoper('right',item)
            } else {
                // traker += (weelSliderItem * 2 + gap * 2);
                // item.style.transform = `translate(calc(${itemWidth}px + ${traker}px),0)`;
                reCoper('left',item)
            }
            
        })
    })

    function reCoper(side,track){
        let trackItems = track.querySelectorAll('.weelSliderItem');
        if (side == 'right'){
            for (let i = 0; i <= 1; i++){
                let block = document.createElement('div');

                block.style.backgroundImage = trackItems[i].style.backgroundImage;
                block.classList.add('weelSliderItem');
                trackItems[i].remove();
                track.append(block);
                
            }
        } else if (side == 'left'){
            for (let i = trackItems.length - 1; i >= trackItems.length - 2; i--){
                let block = document.createElement('div');

                block.style.backgroundImage = trackItems[i].style.backgroundImage;
                block.classList.add('weelSliderItem');
                trackItems[i].remove();
                track.prepend(block);
                
            }
        }
    }
})