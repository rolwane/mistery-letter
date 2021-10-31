const p = document.querySelector('#carta-gerada');

function generateLetter() {
  const letters = document.querySelector('#carta-texto').value.split(' ');
  p.innerText = '';
  let cont = 0;
  letters.forEach((element) => {
    if (element === '') {
      cont += 1;
    }
  });
  if (cont === letters.length) {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  letters.forEach((letter) => {
    const span = document.createElement('span');
    span.innerText = letter;
    p.appendChild(span);
  });
}

document.querySelector('#criar-carta').addEventListener('click', generateLetter);
