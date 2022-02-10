'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const medservice__sectionWrap = document.querySelectorAll(".medservice__sectionWrap");
    const medservice__nav = document.querySelector('.medservice__nav ul');
    
   
    let flag = 1;
    

    medservice__sectionWrap.forEach(item =>{
        let block = document.createElement('li');
        let txt = item.querySelector('h2').innerHTML;
        block.classList.add('medservice__navItem');
        block.innerHTML = `<a>
        <span class="medservice__navSelect">
            <svg width="13" height="18" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-2.8604e-05 6.99985L6.28107 0.71875L12.5622 6.99985L6.28107 13.2809L-2.8604e-05 6.99985Z" fill="#F8B677"></path>
            </svg>
        </span>
        <p>${txt}</p>
        </a>`;

        medservice__nav.append(block);
        })

        const medservice__navSelect = document.querySelectorAll('.medservice__navItem ');

        medservice__navSelect[0].classList.add('medservice__nav-active');
        let HeightselectItem = document.querySelector('.medservice__nav-active').clientHeight + 20;
        const height = medservice__nav.clientHeight;

        medservice__navSelect.forEach((item, index) =>{
            item.addEventListener('click', ()=>{
                medservice__sectionWrap.forEach(elem =>{
                    elem.style.display = 'none'
                    if (elem.querySelector('h2').innerHTML == item.querySelector('p').innerHTML){
                        elem.style.display = 'block';
                    }
                })

                if (window.screen.width > 750){
                medservice__navSelect.forEach(item =>{
                    item.classList.remove('medservice__nav-active');
                })
                item.classList.add('medservice__nav-active');
                }

                if (window.screen.width <= 750){
                    mobNav(item.querySelector('p'));
                }
            })
        })

        if (window.screen.width <= 750){

            changer();
        }

      function mobNav(block){
            let selectItem = medservice__nav.querySelector('.medservice__nav-active');
            console.log(selectItem);
            
            let selectItemTxt = selectItem.querySelector('p');
            let swap = block.innerHTML;
            block.innerHTML  = selectItemTxt.innerHTML;
            selectItemTxt.innerHTML = swap;
           

        }

        function changer(){
            medservice__nav.addEventListener('click', (e)=>{
                if (e.target.nodeName != 'P'){
                    if (flag){
                    medservice__nav.style.height = height + 'px';
                } else {
                    medservice__nav.style.height = HeightselectItem + 'px';
                }
                    flag = !flag;
                }
            })
        }
   
})