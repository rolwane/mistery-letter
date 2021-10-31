const p = document.querySelector('#carta-gerada');

function generateLetter() {
  const letters = document.querySelector('#carta-texto').value.split(' ');
  p.innerText = '';
  letters.forEach((letter) => {
    const span = document.createElement('span');
    span.innerText = letter;
    p.appendChild(span);
  });
}

document.querySelector('#criar-carta').addEventListener('click', generateLetter);
