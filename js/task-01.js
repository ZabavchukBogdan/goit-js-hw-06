
const lists = document.querySelectorAll('.item');

console.dir(`Number of categories: ${lists.length}`)


lists.forEach(list => {
    console.dir(`Category: ${list.querySelector('h2').textContent}`)
    console.dir(`Elements: ${list.querySelector('ul').children.length}`) 
})