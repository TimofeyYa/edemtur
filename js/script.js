'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const header__navMenuBtn = document.querySelector('.header__navMenuBtn'),
          goCenter = document.querySelectorAll('.goCenter'),
          mainMenu = document.querySelector('.mainMenu'),
          positionDots = [];

    const header = document.querySelector('.header');

    let flag = true;

    goCenter.forEach(item=>{
        positionDots.push({cx: item.getAttribute('cx'), cy:item.getAttribute('cy')})
    })
    
    header__navMenuBtn.addEventListener('click', ()=>{
        if (flag){
            goCenter.forEach(item=>{
                item.setAttribute('cx', 13);
                item.setAttribute('cy', 13);
                
            })
            mainMenu.style.height = '100%';
            header.classList.remove('header__mini');
        } else {
            goCenter.forEach((item, index)=>{
                item.setAttribute('cx', positionDots[index]['cx']);
                item.setAttribute('cy', positionDots[index]['cy']);
            })
            mainMenu.style.height = '0%';
            if (window.scrollY > 50){
    
                    header.classList.add('header__mini');
                
            } 
        }
        flag = !flag;
      
    })


   

    window.addEventListener('scroll', ()=>{
        
        if (window.scrollY > 50){
            if (flag){
                header.classList.add('header__mini');
            } else {
                header.classList.remove('header__mini');
            }
            
        } else{
            header.classList.remove('header__mini');
        }
    })



})