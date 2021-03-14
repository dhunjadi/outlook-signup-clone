// WRAPPER
const main = document.getElementsByTagName('main');

// PARENT1
const parentDiv = document.querySelector('.parent1');
let userInput = document.getElementById('email-input');
const nextBtn = document.querySelector('.parent1 button');
const parentH2 = document.querySelector('.parent1 h2');

// PARENT2
const parentDiv2 = document.querySelector('.parent2');
let passwordInput = document.getElementById('password-input');
const signInBtn = document.querySelector('.parent2 button');
const parent2H2 = document.querySelector('.parent2 h2');

// SIGN-IN OPTIONS
let signInOptionsDiv = document.querySelector('.options');

// FOOTER DIV
footerDiv = document.querySelector('.footer-div');

showError = true;
counter = 0;
size = 500;

nextBtn.addEventListener('click', () => {
  let eMailInput = document.getElementById('email-input').value;

  //Check if input has @hotmail.com or @outlook.com
  if (eMailInput.includes('@hotmail.com') || eMailInput.includes('@outlook.com')) {
    showError = false; // Don't show the error message

    // Slide e-mail input
    counter++;
    parentDiv.style.transition = "transform 0.5s ease-in-out";
    parentDiv.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Sign-in options div removal
    removeSignInOptions = function () {
      signInOptionsDiv.remove()
    }

    signInOptionsDiv.style.transition = 'opacity 0.2s ease-out';
    signInOptionsDiv.style.opacity = 0;
    setTimeout(removeSignInOptions, 500);

    // Slide password input
    parentDiv2.style.transition = "transform 0.5s ease-in-out";
    parentDiv2.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Chosen e-mail div
    const chosenMailDiv = document.createElement('div');
    chosenMailDiv.classList.add('chosen-mail-div');
    parent2H2.insertBefore(chosenMailDiv, parent2H2.childNodes[0]);

    // Arrow
    const arrowImg = document.createElement('img');
    arrowImg.classList.add('arrow-img');
    arrowImg.src = 'images/arrow.svg';
    chosenMailDiv.appendChild(arrowImg);

    // Chosen e-mail text
    const chosenMail = document.createElement('h5');
    chosenMail.innerHTML = eMailInput;
    chosenMail.classList.add('chosen-mail');
    chosenMailDiv.appendChild(chosenMail);

    // Arrow click
    arrowImg.addEventListener('click', () => {
      counter--

      parentDiv2.style.transition = "transform 0.5s ease-in-out";
      parentDiv2.style.transform = 'translateX(' + (size * counter) + 'px)';

      parentDiv.style.transition = "transform 0.5s ease-in-out";
      parentDiv.style.transform = 'translateX(' + (size * counter) + 'px)';

      chosenMailDiv.remove();

      let signInOptionsDiv = document.createElement('div');
      signInOptionsDiv.classList.add('options');
      for(i = 0; i < main.length; i++){
        main[i].appendChild(signInOptionsDiv)
      }
    })

    // Error message
  } else if(showError = true) { // Show the error message
    let errorMessage = document.createElement('div');
    errorMessage.innerHTML = `That Microsoft account doesn't exist. Enter a <br> different account or <a href=\"#"\>get a new one</a>.`
    errorMessage.classList.add('error-msg');
    parentH2.appendChild(errorMessage);
  }
})
