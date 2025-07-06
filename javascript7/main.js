const tabCont = document.querySelector('.tabContainer');
const tabBtn = document.querySelectorAll('.tab') ;
const tabPara = document.querySelectorAll('.content') ;

tabCont.addEventListener('click',(event)=> {
    console.log(event.target) ;
    const currentId = event.target.dataset.id ;

    if(currentId) {
        tabBtn.forEach((btnItem) => {
            btnItem.classList.remove("active") ;
        })

        event.target.classList.add("active") ;

        tabPara.forEach((para) => {
            para.classList.remove("active")
        })

        const currentPara = document.getElementById(currentId);
        currentPara.classList.add("active") ;
    }

})

