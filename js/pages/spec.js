"use strict"

window.addEventListener('DOMContentLoaded', ()=>{
    const specCont__control = document.querySelector('.specCont__control'),
          specCont__sector = document.querySelectorAll('.specCont__sector');

    specCont__sector.forEach(item=>{
        let elem = document.createElement('div');
        elem.classList.add('specCont__controlItem');

        elem.innerHTML = `<p>${item.dataset.name}</p>`;
        specCont__control.append(elem);
    })

    const specCont__controlItem = document.querySelectorAll('.specCont__controlItem');
    function selectSector(index){
        specCont__controlItem.forEach(item=>{
            item.classList.remove('specCont__controlItem--active');
        })
        specCont__sector.forEach(item=>{
            item.style.display = 'none';
        })
        specCont__controlItem[index].classList.add('specCont__controlItem--active');
        specCont__sector[index].style.display = 'grid';
    }

    selectSector(0);

    specCont__controlItem.forEach((item,index)=>{
        item.addEventListener('click', ()=>{
            selectSector(index)
        })
    })
})