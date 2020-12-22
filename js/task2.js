const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createItemElement = value => {
  const elementRef = document.createElement('li');
  elementRef.classList.add('ingredients-list');
  elementRef.textContent = value;
  return elementRef;
};

const values = ingredients.map(value => createItemElement(value));

const listRef = document.querySelector('.js-ingredients');
listRef.append(...values);

console.log('Список ингредиентов создан!');
