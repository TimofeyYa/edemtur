'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const reviewsCont__block = document.querySelectorAll('.reviewsCont__block'),
          reviewsContrl__add = document.querySelector('.reviewsContrl__add');

    reviewsCont__block.forEach(item=>{
        item.style.display = 'none';
    })

    for (let i = 0; i < 3; i++){
        reviewsCont__block[i].style.display = 'block';
    }

    reviewsContrl__add.addEventListener('click', ()=>{
        reviewsCont__block.forEach(item=>{
            item.style.display = 'block';
        })
        reviewsContrl__add.style.display = 'none';
    })
})