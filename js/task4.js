let initialValue = 0;

const btnDecrementRef = document.querySelector(
  '.js-counter button[data-action="decrement"]',
);

const btnIncrementRef = document.querySelector(
  '.js-counter button[data-action="increment"]',
);
const counterValueRef = document.querySelector('.js-value');

btnDecrementRef.addEventListener('click', onDecrementValue);
btnIncrementRef.addEventListener('click', onIncremrntValue);

function onDecrementValue() {
  counterValueRef.textContent = initialValue -= 1;
}
function onIncremrntValue() {
  counterValueRef.textContent = initialValue += 1;
}

console.log('Счетчик работает!');
