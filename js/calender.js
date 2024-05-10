const calender = document.getElementById('div-calender');
const dateSelect = document.getElementById('date-select');
const calenderPara = document.getElementById('calender-para');
const monthName = document.getElementById('month-name');
const list = document.getElementById('list');

dateSelect.addEventListener('change', () => {
    const choice = dateSelect.value;
    let days = 31;
    if (choice === 'Februari') {
        days = 29;
    } else if (
        choice === 'April' ||
        choice === 'Juni' ||
        choice === 'September' ||
        choice === 'November'

    ) {
        days = 30;
    }

    createCalender(days, choice);
} );

function createCalender(days, choice){ 
    list.innerHTML = "";
    monthName.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.className = 'li-element';
        listItem.textContent = i;
        list.appendChild(listItem)
    }
}
     
createCalender(31, 'Januari')
            