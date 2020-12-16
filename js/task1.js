const listRef = document.querySelectorAll('.js-item');
console.log(`'В списке ${listRef.length} категории.'`);

listRef.forEach(item => {
  const titleRef = item.querySelector('h2');
  const itemRef = item.querySelectorAll('li');
  console.log(
    `Категория: ${titleRef.textContent}\nКоличество элементов ${itemRef.length}`,
  );
});
