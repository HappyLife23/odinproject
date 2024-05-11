const changeBgColor = document.getElementById('change-bgColor');
const divcContainer = document.querySelector('.div-container');
const colorInput = document.querySelector('#color-input');
const colorKod = document.getElementById('color-kod');

// COLOR-INPUT
colorInput.addEventListener('change', (e) => {
    const selectedColor = e.target.value;
    colorKod.textContent = selectedColor;
    setBgColor(selectedColor);
});

function setBgColor(bgColor) {
    document.documentElement.style.backgroundColor = bgColor;
}


// CHANGE BgColor
changeBgColor.addEventListener('change', () => {
    const choiceBg = changeBgColor.value;

    switch (choiceBg) {
        case 'black':
            update('black', 'white')
            break;
        case 'white':
            update('white', 'black')
            break;
        case 'blue':
            update('#007bff', 'white')
            break;
        case 'green':
            update('#28a745', 'white')
            break;
    }
})

function update(bgColor, textColor) {
    divcContainer.style.backgroundColor = bgColor;
    divcContainer.style.color = textColor;
}
