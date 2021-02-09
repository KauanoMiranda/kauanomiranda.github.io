// Código para mudar imagem

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'imagens/imagem1') {
    myImage.setAttribute ('src','imagens/imagem2');
  } else {
    myImage.setAttribute ('src','imagens/imagem1');
  }
}

// Personalizando a mensagem de boas vindas 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Por favor digite seu nome.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Galáxias são legais, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Galáxias são legais, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}