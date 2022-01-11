'use strict'


window.addEventListener('DOMContentLoaded', ()=>{
    const numfondCont__line = document.querySelectorAll('.numfondCont__line');

    numfondCont__line.forEach(item=>{
        const numfondCont__lineControl = item.querySelector('.numfondCont__lineControl');
        const numfondCont__lineType = item.querySelectorAll('.numfondCont__lineType');

        numfondCont__lineType.forEach(elem=>{
            let block = document.createElement('div');
            block.classList.add('numfondCont__lineControlItem');
            block.classList.add('lightBtn');
            block.innerHTML = `<p>${elem.dataset.name}</p>`


            numfondCont__lineControl.append(block);
        })

        const buttons = item.querySelectorAll('.numfondCont__lineControlItem');
        showItem(0);


        buttons.forEach((elem,index)=>{
            elem.addEventListener('click', ()=>{
                showItem(index);
            })
        })
        function showItem(num){
            numfondCont__lineType.forEach(elem=>{
                elem.style.display = 'none';
            })
            buttons.forEach(elem=>{
                elem.classList.remove('numfondCont__lineControlItem--select');
            })

            numfondCont__lineType[num].style.display = 'block';
            buttons[num].classList.add('numfondCont__lineControlItem--select');
        }
    })
})