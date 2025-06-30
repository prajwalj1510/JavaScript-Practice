const data = [
    {
        id: "1" ,
        question: "Who is the Prime Minister Of Inda" ,
        answer: "Dr. Narendra Damodaradas Modi" ,
    },
    {
        id: "2" ,
        question: "Who is the Prime Minister Of Inda" ,
        answer: "Dr. Narendra Damodaradas Modi" ,
    },
    {
        id: "3" ,
        question: "Who is the Prime Minister Of Inda" ,
        answer: "Dr. Narendra Damodaradas Modi" ,
    }
]

const divwrapper = document.querySelector('.wrapper') ;

function generate() {
    divwrapper.innerHTML = data.map((dataItem) => 
        `<div class = "item">
            <div class = "title">
            ${dataItem.question}
            <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div class = "content">
            ${dataItem.answer}
            </div>
        </div>`
    ).join(" ")
} 

generate() ;

const contTitle = document.querySelectorAll('.title') ;

contTitle.forEach((current_title) => {
    current_title.addEventListener('click', () => {
        if(current_title.classList.contains('active')){
            current_title.classList.remove('active')
        }
        else {
            let getAlreadyCurrentTitle = document.querySelectorAll('.active') 

            getAlreadyCurrentTitle.forEach((currentTitle) => {
                currentTitle.classList.remove('active')
            })

            current_title.classList.add('active')
        }
    })
})

