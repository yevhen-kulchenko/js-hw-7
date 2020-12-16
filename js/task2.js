const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('.js-ingredients');

const createItemElement = value => {
  const elementRef = document.createElement('li');
  elementRef.textContent = value;
  return elementRef;
};

const values = ingredients.map(value => createItemElement(value));

listRef.append(...values);
