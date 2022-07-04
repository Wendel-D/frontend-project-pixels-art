let addCor = 'cor1';
const cor1add = document.getElementsByClassName('cor1')[0];
const cor2add = document.getElementsByClassName('cor2')[0];
const cor3add = document.getElementsByClassName('cor3')[0];
const cor4add = document.getElementsByClassName('cor4')[0];

cor1add.addEventListener('click', adiCor1)
function adiCor1() {
  addCor = 'cor1';
  console.log(addCor);
}
cor2add.addEventListener('click', adiCor2)
function adiCor2() {
  addCor = 'cor2';
  console.log(addCor);
}
cor3add.addEventListener('click', adiCor3)
function adiCor3() {
  addCor = 'cor3';
  console.log(addCor);
}
cor4add.addEventListener('click', adiCor4)
function adiCor4() {
  addCor = 'cor4';
  console.log(addCor);
}


const quadradinhos = document.querySelectorAll(".pixel")
for (let i = 0; i < quadradinhos.length; i += 1) {
  quadradinhos[i].addEventListener("click", function (event) {
    event.target.className = "pixel " + addCor;
  });
}