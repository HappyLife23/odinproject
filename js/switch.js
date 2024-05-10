const select = document.querySelector('select');
const para = document.getElementById('weather-para');
const weatherImg = document.getElementById('weather-img')


const setWeather = () => {
    const choice = select.value;
    
    
    switch (choice) {
        case 'sunny':
            para.textContent = 'It\'s sunny'
            weatherImg.src = './assets/sun.png'
            break;
        case 'rainy':
            para.textContent = 'It\'s rainy outside'
            weatherImg.src = './assets/raining.png'
            break;
        case 'cloudy':
            para.textContent = 'It\'s cloudy outside'
            weatherImg.src = './assets/clouds.png'
            break;
        case 'snowing':
            para.textContent = 'It\'s snowing outside'
            weatherImg.src = './assets/snow.png'
            break;
        case 'surprise':
            para.textContent = 'Do your best today'
            weatherImg.src = './assets/motivation.png'
            break;
        default:
            para.textContent = '';
        }
    }

select.addEventListener('change', setWeather);