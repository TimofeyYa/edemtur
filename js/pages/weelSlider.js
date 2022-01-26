'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const track = document.querySelectorAll('.weelSlider__track');

    track.forEach(track =>{
        
        const itemsSlider = track.querySelectorAll('.weelSliderItem');
        
        itemsSlider.forEach(item=>{
            item.addEventListener('click', ()=>{
                let data;
                for (let i = 0; i<itemsSlider.length ; i++){
                    if (i == 0){
                        data = itemsSlider[i].style.backgroundImage;
                    }
                    if (i + 1 < itemsSlider.length){
                        itemsSlider[i].style.backgroundImage = itemsSlider[i + 1].style.backgroundImage;
                    } else {
                        itemsSlider[i].style.backgroundImage = data;
                    }
                    
                }
            })
        })
    })
    
 
})