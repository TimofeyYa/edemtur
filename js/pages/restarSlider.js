'use strict'

window.addEventListener("DOMContentLoaded", ()=>{

    const widthScreen = window.innerWidth / 2;
    const restarDay__sliderWrap = document.querySelectorAll('.restarDay__sliderWrap');
    const track = document.querySelectorAll('.restarDay__sliderTrack');

    function selectSlider(track, wraper){
        const trackWidth = track.offsetWidth - widthScreen;
        
        let flag = 0;
        let trans = 0;
        let pluser;

        window.addEventListener('mousemove',(e)=>{
            if (flag){
                console.log('trackWidth',trackWidth)
                console.log('trans',trans)

                trans = trans - (pluser - e.clientX) / 40;
                track.style.transform = `translate(${trans}px, 0)`
                
            }
        })

        wraper.addEventListener('mousedown', (e)=>{
           pluser = e.clientX;
           flag = 1;
        })

        window.addEventListener('mouseup', ()=>{
            flag = 0;
        })
    }

    if (window.screen.width > 1000){
        track.forEach((item,index)=>{
            selectSlider(item, restarDay__sliderWrap[index]);
        })
    }
    
    
})