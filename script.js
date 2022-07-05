let addCor = 'cor1';
const cor1add = document.getElementsByClassName('cor1')[0];
const cor2add = document.getElementsByClassName('cor2')[0];
const cor3add = document.getElementsByClassName('cor3')[0];
const cor4add = document.getElementsByClassName('cor4')[0];

cor1add.addEventListener('click', adiCor1)
function adiCor1() {
  addCor = 'cor1';
  selectBox(cor1add);
}
cor2add.addEventListener('click', adiCor2)
function adiCor2() {
  addCor = 'cor2';
  selectBox(cor2add);
}
cor3add.addEventListener('click', adiCor3)
function adiCor3() {
  addCor = 'cor3';
  selectBox(cor3add);
}
cor4add.addEventListener('click', adiCor4)
function adiCor4() {
  addCor = 'cor4';
  selectBox(cor4add);
}

function selectBox(event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.classList.add('selected');
}

function pintar() {
  const quadradinhos = document.querySelectorAll(".pixel")
  for (let i = 0; i < quadradinhos.length; i += 1) {
    quadradinhos[i].addEventListener("click", function (event) {
      event.target.className = "pixel " + addCor;
    });
  }
}

pintar();

const limpar = document.getElementById('clear-board');
limpar.addEventListener('click', limpaA);
function limpaA() {
  const quadradinhos = document.querySelectorAll(".pixel")
  for (let i = 0; i < quadradinhos.length; i += 1) {
    quadradinhos[i].className = "pixel";
  }
}

// BONUS

const input = document.getElementById('board-size');
const botaoVQV = document.getElementById('generate-board');
const divP = document.getElementById('pixel-board')

botaoVQV.addEventListener('click', gerador);

function gerador() {
  if (input.value === '0' || !input.value || input.value < 0) {
    alert('Board Inválido!')
  }else{
  const quadradinhos = document.querySelectorAll(".pixel");
  for (let i = 0; i < quadradinhos.length; i += 1) {
    quadradinhos[i].remove()
  };
  for (let i = 0; i < input.value * input.value; i++) {
    const divF = document.createElement('div');
    divF.classList.add('pixel');
    divP.appendChild(divF)
  }
  pintar();
  limpaA();
}
}