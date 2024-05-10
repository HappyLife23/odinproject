const select = document.getElementById('theme');
const html = document.querySelector('html');


function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener('change', () => {
    select.value === 'yellow' 
    ? update('yellow', 'blue') 
    : update('white', 'black')
})

