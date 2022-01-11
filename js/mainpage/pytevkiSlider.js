'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const typepyt__pic = document.querySelector('.typepyt__pic'),
          typepyt__picImg = document.querySelectorAll('.typepyt__pic img'),
          typepyt__infoWrap = document.querySelectorAll('.typepyt__infoWrap');

    const typepyt__controlLeft = document.querySelector('.typepyt__controlLeft'),
          typepyt__controlRight = document.querySelector('.typepyt__controlRight');

    let index = 0;
    console.log(typepyt__picImg[index].src);
    function startShow(index){
        typepyt__pic.style.backgroundImage = `url(${typepyt__picImg[index].src})`;

        typepyt__infoWrap.forEach(item =>{
            item.style.display = 'none';
        })
        typepyt__infoWrap[index].style.display = 'block'
    }
    startShow(1);

    typepyt__controlLeft.addEventListener('click', ()=>{
        index--;
        if (index < 0){
            index = typepyt__infoWrap.length - 1;
        }
        startShow(index);
    })

    typepyt__controlRight.addEventListener('click', ()=>{
        index++;
        if (index > typepyt__infoWrap.length - 1){
            index = 0;
        }
        startShow(index);
    })
})