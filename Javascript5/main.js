const slides = document.querySelector('.slider_box');
const dots = document.querySelector('.dot_box')

async function fetchImages() {
    try {

        const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5",{method:"GET"});
        const imageList = await response.json() ;

        if (imageList && imageList.length > 0) displayImage(imageList) ;
        console.log(imageList);
        
    } catch(e) {
        console.log(e.stack) ;
    }
}

fetchImages() ;

function displayImage(images) {
    slides.innerHTML = images.map((imageItem,index) => `
    <div class = "slide">
        <img src = "${imageItem.download_url}" alt = "${index}"/>
    </div>
    `).join(" ")

    dots.innerHTML = images.map((image,index)=> `
    <span class = "dot ${index === 0?"active":""} data-slide=${index}"></span>
    `).join(" ")
}


setTimeout(()=>{
    const slide = document.querySelectorAll('.slide') 
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next') 

let currentSlide = 0 ;

function changeSlide(getCurrentSlide) {
    slide.forEach((slideItem,index)=>{
        slideItem.style.transform = `translateX(${100*(index-getCurrentSlide)}%)` ;
    })
    console.log(getCurrentSlide)
}

function changeDot(getCurrentSlide) {
    document.querySelectorAll('.dot').forEach((dotItem)=>{
        dotItem.classList.remove("active") ;
    })
    console.log(getCurrentSlide)
    document.querySelector(`.dot [data-slide="${getCurrentSlide}"]`).classList.add("active");

}

nextBtn.addEventListener('click',()=>{
    currentSlide++ ;
    if( currentSlide > slide.length-1) currentSlide = 0 ; 
    changeSlide(currentSlide) ;
    changeDot(currentSlide) ;
})

prevBtn.addEventListener('click',() => {
    currentSlide-- ;
    if(currentSlide < 0) currentSlide = slide.length - 1 ;
    changeSlide(currentSlide) ;
    changeDot(currentSlide) ;
})

dots.addEventListener("click", (event) => {
    if(event.target.classList.contains('dot')){
        const currentSlide = event.target.dataset.slide
        changeSlide(currentSlide)
        changeDot(currentSlide)
    }
  });

},1000)


