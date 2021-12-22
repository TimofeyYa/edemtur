'use strict'

window.addEventListener('DOMContentLoaded', ()=>{

    const contactsControls = document.querySelector('.contactsControls .container');
    const contSec = document.querySelectorAll('.contSec');

    contSec.forEach(item=>{
        let block = document.createElement('div');
        block.classList.add('contactsControls__item')
        block.innerHTML = `<p>${item.dataset.name}</p>`
        contactsControls.append(block);

        item.style.display = 'none';
    })

    const buttons = document.querySelectorAll('.contactsControls__item');

    selectItem(0);

    buttons.forEach((item,index)=>{
        item.addEventListener('click', ()=>{
            selectItem(index);
        })
    })    
    function selectItem(num){
        contSec.forEach(item=>{
            item.style.display = 'none';
        })
        buttons.forEach(item=>{
            item.classList.remove( 'contactsControls__item--select');
        })
        contSec[num].style.display = 'block';
        buttons[num].classList.add( 'contactsControls__item--select');
    }
})