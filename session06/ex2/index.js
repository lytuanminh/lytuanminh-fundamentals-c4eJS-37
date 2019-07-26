let selection = document.getElementById('color-selection');
let btnRemove = document.getElementById('btn-remove');
console.dir (selection);
btnRemove.addEventListener('click', () => {
    selection.remove(selection.selectedIndex);
})