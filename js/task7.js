const rangeRef = document.querySelector('.js-font-size-control');
const textRef = document.querySelector('.js-text');

function onInputRange(event) {
  textRef.style.fontSize = event.target.value + 'px';
}

rangeRef.addEventListener('input', onInputRange);

console.log('Ползунок работает!');
