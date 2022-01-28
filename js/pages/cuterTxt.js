'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const cuter = document.querySelectorAll('.cuter'),
          moreBtn = document.querySelectorAll('.moreBtn');
    
    cuter.forEach((item,index)=>{
        const txt = item.querySelector('p');
        
        if (txt.innerText.length > 165){
            txt.dataset.fulltxt = txt.innerText;
            txt.innerText = txt.innerText.slice(0,155) + '...';

            item.classList.add('readContent');
            moreBtn[index].classList.add('readBtn');

            moreBtn[index].style.display = 'inline';
        }
    })
})