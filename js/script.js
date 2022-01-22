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
            mainMenu.classList.remove('closeMainMenu');
            header.classList.remove('header__mini');
        } else {
            goCenter.forEach((item, index)=>{
                item.setAttribute('cx', positionDots[index]['cx']);
                item.setAttribute('cy', positionDots[index]['cy']);
            })
            mainMenu.style.height = '0%';
            mainMenu.classList.add('closeMainMenu');
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




    const mainMenu__contentMob__menuItemLeft = document.querySelectorAll('.mainMenu__contentMob__menuItemLeft'),
          mainMenu__contentMob__wrapItemSelector = document.querySelector('.mainMenu__contentMob__wrapItemSelector'),
          mainMenu__contentMob__menuContentItem = document.querySelectorAll('.mainMenu__contentMob__menuContentItem'),
          mainMenu__contentMob__wrapBackBtn = document.querySelector('.mainMenu__contentMob__wrapBackBtn p');

    mainMenu__contentMob__menuItemLeft.forEach(item=>{
        item.addEventListener('click', ()=>{
            item.parentElement.classList.add('mainMenu__contentMob__menuItem--select');
            mainMenu__contentMob__wrapItemSelector.style.width = '0%';
            mainMenu__contentMob__menuContentItem.forEach(elem =>{
                    if (elem.dataset.selector == item.querySelector('h3').textContent){
                        elem.style.display = 'block';
                    }
            })
        })
    })

    mainMenu__contentMob__wrapBackBtn.addEventListener('click', ()=>{
        mainMenu__contentMob__wrapItemSelector.style.width = '100%';
        mainMenu__contentMob__menuContentItem.forEach(elem =>{
            setTimeout(()=>{
                elem.style.display = 'none';
            }, 500)
        mainMenu__contentMob__menuItemLeft.forEach(item=>{
            setTimeout(()=>{
                item.parentElement.classList.remove('mainMenu__contentMob__menuItem--select');
            }, 300)
        })
            
    })
    })
})