'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const firstscreen__bgItem = document.querySelectorAll('.firstscreen__bgItem'),
          firstscreen__underBg = document.querySelectorAll('.firstscreen__underBg');
    let index = firstscreen__bgItem.length - 1;
    let coun = firstscreen__bgItem.length - 1;

    firstscreen__bgItem.forEach((item,index) =>{
        item.style.zIndex = index;
    })

    firstscreen__underBg.forEach(item=>{
        item.style.zIndex = firstscreen__bgItem.length + 2;
    })

    function change(){
        firstscreen__bgItem[index].style.opacity = 0;

        setTimeout(()=>{
            for (let i = 0; i<= coun; i++){
                if (i != index){
                    firstscreen__bgItem[i].style.zIndex = parseInt(firstscreen__bgItem[i].style.zIndex) + 1;
                }

            }
            firstscreen__bgItem[index].style.zIndex = 0;
            setTimeout(()=>{ 
                firstscreen__bgItem[index].style.opacity = 1;
                index--;
                if (index < 0){
                    index = firstscreen__bgItem.length - 1;
                }
            }, 200)
            

            
        }, 600)
    }

    setInterval(change, 2700)
})