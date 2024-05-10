// const section = document.querySelector('section');
const select = document.querySelector('select');
const para = document.getElementById('weather-para');
const weatherImg = document.getElementById('weather-img')

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;


    if (choice === 'sunny') {
        para.textContent = 'It\'s sunny outside';
        weatherImg.src = './assets/sun.png'
    } else if (choice === 'rainy') {
        para.textContent = 'It\'s raining outside'
        weatherImg.src = './assets/raining.png'
    }else if (choice === 'snowing') {
        para.textContent = 'It\'s snowing outside'
        weatherImg.src = './assets/snow.png'
    }else if (choice === 'cloudy') {
        para.textContent = 'It\'s cloudy outside'
        weatherImg.src = './assets/clouds.png'
    }else if (choice === 'surprise') {
        para.textContent = 'Make the day count'
        weatherImg.src = './assets/reward.png'
    }else {
        para.textContent = ''
    }
}

