const inputRef = document.querySelector('.js-controls input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('.js-boxes');
boxesRef.classList.add('parentBox');

let width = 30;
let hight = 30;

const getRandomRgb = () => {
  let color = '';
  for (let i = 0; i < 3; i += 1) {
    color += ('0' + ((Math.random() * 256) | 0).toString(16)).substr(-2);
  }
  return '#' + color;
};

const createBoxes = amount => {
  for (let i = 0; i <= amount - 1; i += 1) {
    const storageRef = document.createElement('div');
    storageRef.classList.add('newStorage');
    storageRef.style.backgroundColor = getRandomRgb();
    storageRef.style.width = `${(width += 10)}px`;
    storageRef.style.height = `${(hight += 10)}px`;
    storageRef.style.marginRight = '5px';
    boxesRef.append(storageRef);
  }
};

const destroyBoxes = () => {
  inputRef.value = '';
  boxesRef.querySelectorAll('div').forEach(div => div.remove());
  width = 30;
  hight = 30;
};

inputRef.addEventListener('focus', event => {
  renderBtnRef.addEventListener('click', () => {
    createBoxes(event.target.value);
    event.target.value = '';
  });
});
destroyBtnRef.addEventListener('click', destroyBoxes);
