const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

function entryField() {
  inputRef.value === ''
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = inputRef.value);
}

inputRef.addEventListener('input', entryField);

console.log('Приветствие работает!');
