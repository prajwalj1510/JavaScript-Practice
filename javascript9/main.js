const categories = ['All','Men','Women','Kids'] ;
const contents = [
    {
        id: "Men",
        label:"Men Shopping",
    },
    {
        id: "Men",
        label:"Men Shopping",
    },
    {
        id: "Men",
        label:"Men Shopping",
    },
    {
        id: "Women",
        label:"Women Shopping",
    },
    {
        id: "Women",
        label:"Women Shopping",
    },
    {
        id: "Women",
        label:"Women Shopping",
    },
    {
        id: "Kids",
        label:"Kids Shopping",
    },
    {
        id: "Kids",
        label:"Kids Shopping",
    },
    {
        id: "Kids",
        label:"Kids Shopping",
    },
    {
        id: "Kids",
        label:"Kids Shopping",
    },
]

const filterWrapper = document.querySelector('.filter_categories') ;

function createCategoty() {
    categories.forEach((categoryItem) => {
        const btn = document.createElement('button') ;
        btn.innerHTML = categoryItem ;
        btn.classList.add('filter-button') ;
        btn.setAttribute('data-filter',categoryItem) ;

        filterWrapper.appendChild(btn) ;
    })

}

const filterContent = document.querySelector('.content_wrapper') ;

function createContent() {
    contents.forEach((contentItem) => {
        const box = document.createElement('div') ;
        box.classList.add("content") ;
        box.setAttribute("data-id",contentItem.id) ;
        box.innerHTML = contentItem.label ; 

        filterContent.appendChild(box) ;
    })

}

createCategoty() ;
createContent() ;

filterWrapper.addEventListener('click',(event) => {
    console.log(event.target.dataset.filter)

    const currentId = event.target.dataset.filter ; 
    const tabs = document.querySelectorAll('.filter-button') ;
    const conts = document.querySelectorAll('.content')
    if(currentId) {
        tabs.forEach((tabItem) => {
            tabItem.classList.remove('active') ;
        })

        event.target.classList.add('active')

        conts.forEach((contItem) => {
            contItem.classList.remove('active')
        })

        conts.forEach((contItem) => {
            if(currentId === "All") {
                contItem.classList.add('active')
            }
            if(contItem.dataset.id === currentId) {
                contItem.classList.add('active') 
            }
        })
        
    }
})