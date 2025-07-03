const postList = document.querySelector('.post')

function fetchUsingXHR() {
    const Obj = new XMLHttpRequest()
    Obj.open("GET","https://jsonplaceholder.typicode.com/posts") ;
    Obj.responseType = "json"  ;
    Obj.send() ;

    Obj.onload = () => {
        if (Obj.status === 200 ){
            displayResult(Obj.response)
        }
        else {
            alert('Some error')
        }
    }
}

// fetchUsingXHR() ;

function fetchUsingFetch() {
    const resFetch = fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"}) 
    resFetch
    .then((res) => res.json())
    .then((res) => displayResult(res))
    .catch((e) => alert(e.stack)) 
}

// fetchUsingFetch() ;

async function fetchUsingAsyncAwait() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts") ;

    const res = await result.json() ;

    displayResult(res) ;

}

fetchUsingAsyncAwait() ;

function displayResult(posts) {
    postList.innerHTML = posts.map((postItem) => 
    `<div>
        <h1>${postItem.title}</h1>
        <p>${postItem.body}</p>
    </div>
    `
    ).join(" ")
}