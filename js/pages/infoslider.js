'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const elemBlocks = document.querySelectorAll('.ecscursCont__elemBlocks');
    const colums = 3;
    let margin = '33px';
    if (window.innerWidth <= 1100) margin = '29px';
    if (window.innerWidth <= 900) margin = '25px';
    if (window.innerWidth <= 600) margin = '20px';
    if (window.innerWidth <= 450) margin = '10px';


    let width = elemBlocks[0].querySelector('.ecscursCont__elemBlockWrap').clientWidth + 'px';
    console.dir(elemBlocks[0].querySelector('.ecscursCont__elemBlockWrap').style);
    elemBlocks.forEach((item)=>{
        const leftControl = item.parentElement.parentElement.querySelector('.ecscursCont__elemControlItemLeft'),
              rightControl = item.parentElement.parentElement.querySelector('.ecscursCont__elemControlItemRight');

        const blocks = item.querySelectorAll('.ecscursCont__elemBlock');
        const data = [];

        let index = 0;
        
        blocks.forEach((item,index)=>{
            data[index] = item.innerHTML;
        })

        
        rightControl.addEventListener('click',()=>{
            blocks[index].classList.add('ecscursCont__elemBlockHid');
            blocks[index].parentElement.style.width = '0px';
            blocks[index].parentElement.style.marginRight = '0px';
            index++;
            if (index > blocks.length - colums) index--;
        })

        leftControl.addEventListener('click',()=>{
            index--;
            if (index < 0) index++;
            blocks[index].classList.remove('ecscursCont__elemBlockHid');
            blocks[index].parentElement.style.width = width;
            blocks[index].parentElement.style.marginRight = margin;
            
        })
    })

    
})