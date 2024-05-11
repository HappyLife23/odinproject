const calender = document.getElementById('div-calender');
const dateSelect = document.getElementById('date-select');
const calenderPara = document.getElementById('calender-para');
const monthName = document.getElementById('month-name');
const list = document.getElementById('list');

// lägger till en eventListener på select
// skapar ett variabel och tilldelar värdet på select
// skapar en if/ else-if sats 
// Anropar på funktionen "createCalender" i min eventListener
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

// skapar en funktion med två argument days and choice
// min ul-content blir value av det user har valt
// skapar en for-loop och låter första dagenn börjar på 1
// skapar li-element inuti min ul-element och ger det ett className
// lli-elementens content blir det indextet som user har valt
// appendar li'n till ul
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
            