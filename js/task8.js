// // Found all necessary elements
// const inputRef = document.querySelector('input[type="number"]');
// const btnRenderRef = document.querySelector('button[data-action="render"]');
// const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
// const containerToFillRef = document.querySelector('#boxes');
// containerToFillRef.classList.add('parentBox');
// // Unique color creation
// const colorGenerator = () => {
//   let color = '#';
//   for (let k = 0; k < 3; k++) {
//     color += ('0' + ((Math.random() * 256) | 0).toString(16)).substr(-2);
//   }
//   return color;
// };
// // Function to create new div-boxes
// const createBoxes = amount => {
//   for (let i = 0; i <= amount - 1; i += 1) {
//     const newBoxRef = document.createElement('div');
//     newBoxRef.classList.add('newBox');
//     newBoxRef.style.backgroundColor = colorGenerator();
//     newBoxRef.style.width = `${30 + i * 10}px`;
//     newBoxRef.style.height = `${30 + i * 10}px`;
//     containerToFillRef.append(newBoxRef);
//   }
// };
// //Function to destroy new div-boxes
// const destroyBoxes = () => {
//   containerToFillRef.innerHTML = '';
// };
// inputRef.addEventListener('focus', event => {
//   btnRenderRef.addEventListener('click', () => {
//     createBoxes(event.target.value);
//     event.target.value = '';
//   });
// });
// btnDestroyRef.addEventListener('click', () => {
//   destroyBoxes();
// });
