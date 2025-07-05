const quoteWrapper = document.querySelector('.box');
const refreshBtn = document.querySelector('.refresh');
const loader = document.querySelector('.loading');

function showLoader() {
    loader.classList.add('show') ;
}

function hideLoader(){
    loader.classList.remove("show")
}

refreshBtn.addEventListener('click', () => {
    showLoader() ;
    fetch("https://api.quotable.io/quotes/random", { method: "GET" }).then((res) => res.json())
        .then((result) => {
            hideLoader() ;
            display(result[0])})
        .catch((e) => console.log(e)) 

})

function display(result) {
    quoteWrapper.innerHTML = `
    <div>
    ${result.author}
    ${result.contetn}
    ${result.dateAdded}
    ${result.tags[0]}
    </div>
    ` ;
}