let addCor = 'cor1';
const cor1add = document.getElementsByClassName('cor1')[0];
const cor2add = document.getElementsByClassName('cor2')[0];
const cor3add = document.getElementsByClassName('cor3')[0];
const cor4add = document.getElementsByClassName('cor4')[0];

cor1add.addEventListener('click', adiCor1)
function adiCor1() {
  addCor = 'cor1';
  cor1add.className = "color cor1 selected"
  cor2add.className = "color cor2"
  cor3add.className = "color cor3"
  cor4add.className = "color cor4"
}
cor2add.addEventListener('click', adiCor2)
function adiCor2() {
  addCor = 'cor2';
  cor2add.className = " color cor2 selected"
  cor1add.className = "color cor1"
  cor3add.className = "color cor3"
  cor4add.className = "color cor4"
}
cor3add.addEventListener('click', adiCor3)
function adiCor3() {
  addCor = 'cor3';
  cor3add.className = "color cor3 selected"
  cor2add.className = "color cor2"
  cor1add.className = "color cor1"
  cor4add.className = "color cor4"
}
cor4add.addEventListener('click', adiCor4)
function adiCor4() {
  addCor = 'cor4';
  cor4add.className = "color cor4 selected"
  cor2add.className = "color cor2"
  cor3add.className = "color cor3"
  cor1add.className = "color cor1"
}


const quadradinhos = document.querySelectorAll(".pixel")
for (let i = 0; i < quadradinhos.length; i += 1) {
  quadradinhos[i].addEventListener("click", function (event) {
    event.target.className = "pixel " + addCor;
  });
}