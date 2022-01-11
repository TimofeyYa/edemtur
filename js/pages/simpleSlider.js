'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const medservice__controlLeft = document.querySelector('.medservice__controlLeft'),
          medservice__controlRight = document.querySelector('.medservice__controlRight');

    function setSimpleSlider(itemName,arrLeft,arrRight, column){
        let items = document.querySelectorAll(itemName);
        let index = column - 1;
        let parenEl = items[0].parentElement;
        console.log(parenEl);

        items.forEach(item=>{
            item.style.display = 0;
        })

        for(let i = 0; i < column; i++){
            items[i].style.display = 'block';
        }

        if(items.length == 0){
            arrLeft.style.display = 'none';
            arrRight.style.display = 'none';
        }
        arrRight.addEventListener('click', ()=>{
            index++;
            items[index].style.display = 'block';
            items[index - column].style.display = 'none';

            let elem = document.createElement('div');
            
            elem.classList = items[index - column].classList;
            elem.style.backgroundImage = items[index - column].style['background-image'];
            elem.style.display = 'none';


            
            parenEl.append(elem);

            items[index - column].remove();
            console.log(items);
            index--;
            items =document.querySelectorAll(itemName);
        })

        arrLeft.addEventListener('click', ()=>{
           
            items[index].style.display = 'none';
            

            let elem = document.createElement('div');
            
            elem.classList = items[items.length - 1].classList;
            elem.style.backgroundImage = items[items.length - 1].style['background-image'];
            elem.style.display = 'none';


            
            parenEl.prepend(elem);

            items[items.length - 1].remove();
            console.log(items);
         
            items =document.querySelectorAll(itemName);
            items[index - column + 1].style.display = 'block';
        })
    }

    setSimpleSlider('.medservice___picItem',medservice__controlLeft,medservice__controlRight, 1);
})