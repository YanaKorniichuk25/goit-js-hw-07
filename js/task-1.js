const categoriesItems = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categoriesItems.length);
categoriesItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
