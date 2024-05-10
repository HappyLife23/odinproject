const selectTernary = document.getElementById('theme');
const html = document.querySelector('html');


function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

selectTernary.addEventListener('change', () => {
    selectTernary.value === 'yellow' 
    ? update('yellow', 'blue') 
    : update('white', 'black')
})

