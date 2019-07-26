let href = document.getElementById('demo-a');
let input = document.getElementById('input-demo');
let btn = document.getElementById('btn-demo');
console.dir(href);
btn.addEventListener ('click', () => {
    input.value += href.host;
})