const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lists = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const listItem = document.createElement('li')
  listItem.textContent = item;
  listItem.classList.toggle("item")
  lists.append(listItem)
  return;
})



