const nextBtn = document.querySelector('.parent button');
const signInH2 = document.querySelector('.parent h2');
const eMailInput = document.querySelector('.parent input');

nextBtn.addEventListener('click', ()=>{

    let newElement = document.createElement('div');
    newElement.innerHTML = `That Microsoft account doesn't exist. Enter a <br> different account or <a href=\"#"\>get a new one</a>.`
    newElement.classList.add('warning')
    signInH2.appendChild(newElement)
    console.log(newElement)
})
