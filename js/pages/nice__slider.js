'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const nice__slider = document.querySelectorAll('.nice__slider');


    nice__slider.forEach(item=>{
        const blocks = item.querySelectorAll('.nice__sliderblockWrap');
        const leftArr = document.querySelector('.nice__sliderContrItemLeft'),
              rightArr = document.querySelector('.nice__sliderContrItemRight');

        const width = blocks[0].clientWidth;
        let margin = 32;
        if (window.screen.width <= 1000){
            margin = 22;
        }
        if (window.screen.width <= 800){
            margin = 15;
        }
        
        if (window.screen.width > 700){
            const center = (blocks.length) / 2
            const index = [Math.ceil(center - 1), Math.ceil(center)];

            
            if (blocks.length % 2 == 1){
                item.querySelector('.nice__sliderTrack').style.transform = `translate(calc(-50% - ${(width + margin) / 2}px),0)`
            }

            
            blocks[index[0]].classList.add('nice__sliderblockWrap--select');
            blocks[index[1]].classList.add('nice__sliderblockWrap--select');

            rightArr.addEventListener('click', ()=>{
                if (index[0] > 0){
                blocks[index[0]].classList.add('niceBlock--hidden');
                blocks[index[1]].classList.add('niceBlock--hidden');
                index[0]--;
                index[1]++;
                blocks[index[0]].classList.add('nice__sliderblockWrap--select');
                if (blocks[index[1]])
                blocks[index[1]].classList.add('nice__sliderblockWrap--select');
                
                }
            })

            leftArr.addEventListener('click', ()=>{
                if (index[1] > center + 1){
                    blocks[index[0]].classList.remove('nice__sliderblockWrap--select');
                    if (blocks[index[1]])
                    blocks[index[1]].classList.remove('nice__sliderblockWrap--select');
                    index[1]--;
                    index[0]++;
                    blocks[index[0]].classList.remove('niceBlock--hidden');
                    blocks[index[1]].classList.remove('niceBlock--hidden');
                }
                
            })
    } else {
        let index = 0
        blocks[index].classList.add('nice__sliderblockWrap--select');

        leftArr.addEventListener('click', ()=>{
            if (!(index == 0)){
                blocks[index].classList.remove('nice__sliderblockWrap--select');
                index--;
                blocks[index].classList.add('nice__sliderblockWrap--select');
                blocks[index].classList.remove('niceBlock--hidden');
            }
            
        })

        rightArr.addEventListener('click', ()=>{
            if (!(index + 1 >= blocks.length)){
            blocks[index].classList.add('niceBlock--hidden');
            blocks[index].classList.remove('nice__sliderblockWrap--select');
            index++;
            blocks[index].classList.add('nice__sliderblockWrap--select');
            }
        })
    }
    })
})