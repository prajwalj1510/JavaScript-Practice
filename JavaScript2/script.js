const hexBtn = document.querySelector(".hex")
const rgbBtn = document.querySelector(".rgb")

const hexBox = document.querySelector('.box1') ;
const rgbBox = document.querySelector('.box2')

const h1Text = document.getElementById('text') ;

const hexText = document.querySelector('.clip1') ;
const rgbText = document.querySelector('.clip2') ;

hexBtn.addEventListener('click',()=>{
    let characterSet = '0123456789ABCDEF';
    let hexOput = "#" ;

    for(let i = 0 ; i < 6 ; i++){
        hexOput += characterSet.charAt(Math.floor(Math.random()*characterSet.length)) ;
    }
    /*console.log(hexOput)*/
    h1Text.innerHTML = hexOput ;
    hexBox.style.backgroundColor = hexOput ;

    hexText.addEventListener('click',()=>{
        navigator.clipboard.writeText = hexOput ;
    })

})


rgbBtn.addEventListener('click',() => {
     
    const redValue = document.querySelector('#red').value ;
    const greenValue = document.querySelector('#green').value ;
    const blueValue = document.querySelector('#blue').value ;
    /*console.log(redValue,greenValue,blueValue)*/
    rgbBox.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;

    rgbText.addEventListener('click',() => {
        navigator.clipboard.writeText = `rgb(${redValue},${greenValue},${blueValue})`;
    })
})



