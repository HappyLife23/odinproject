const calender = document.getElementById('div-calender');
const dateSelect = document.getElementById('date-select');
const calenderPara = document.getElementById('calender-para')


function getMonth(){ 
    const months = ['January','February','March','April','May','June','July','August','September','Oktober','November','December']
    
    const currenyDate = new Date();

    const currentMonth = months[currenyDate.getMonth()];

    calender.textContent = currentMonth;

    const choiceMonth = dateSelect.value;
    
    switch (choiceMonth) {
        case 'january':
            // calender.textContent
            break;
        case 'february':
            calenderPara.textContent = 'hello'
            break;
        default:
            calenderPara = ""
        }
}
            
dateSelect.addEventListener('change', getMonth);
            