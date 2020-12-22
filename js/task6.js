const inputRef = document.querySelector('.js-validation');
inputRef.addEventListener('blur', () => {
  inputRef.classList.add('invalid');
  if (inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
});

console.log('Проверка создана!');
