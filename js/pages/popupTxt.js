'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const exitBtn = document.querySelector('.popupTxt__exit');
    const popupTxtWrap = document.querySelector('.popupTxtWrap');
    const readBtn = document.querySelectorAll('.readBtn'),
          readContent = document.querySelectorAll('.readContent');

    const dataText = document.querySelector('.popupTxtContent p'),
          dataTitle = document.querySelector('.popupTxtContent h3');

    
    exitBtn.addEventListener('click', ()=>{
        popupTxtWrap.style.display = 'none';
      
    })

    readBtn.forEach((item,index) =>{
        item.addEventListener('click', ()=>{
            console.log(readContent[index].querySelector('p').dataset.fulltxt);
            dataText.innerHTML = readContent[index].querySelector('p').dataset.fulltxt;
            if (readContent[index].querySelector('h3')){
                dataTitle.innerHTML = readContent[index].querySelector('h3').innerHTML;
            } else {
                dataTitle.innerHTML = readContent[index].querySelector('h4').innerHTML; 
            }
            
            popupTxtWrap.style.display = 'flex';
            
        })
    })
})