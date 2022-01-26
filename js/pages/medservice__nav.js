'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const medservice__nav = document.querySelector('.medservice__nav ul');
    const height = medservice__nav.clientHeight;
    const selectItem = medservice__nav.querySelector('.medservice__nav-active');
    const item__height = selectItem.clientHeight  + 20;

    let flag = 1;
    const selectTxt = selectItem.innerHTML;
    
    selectItem.remove();

    const selectItemBlock = document.createElement('li');
    selectItemBlock.classList.add('medservice__navItem');
    selectItemBlock.classList.add('medservice__nav-active');
    selectItemBlock.innerHTML = selectTxt;

    medservice__nav.prepend(selectItemBlock);



    medservice__nav.style.height = item__height + 'px';

    medservice__nav.addEventListener('click', (e)=>{
        if (e.target.nodeName != 'P'){
            if (flag){
            medservice__nav.style.height = height + 'px';
        } else {
            medservice__nav.style.height = item__height + 'px';
        }
            flag = !flag;
        }
    })
    
})