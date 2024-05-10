const myText = document.getElementById('myText');
const myButton = document.getElementById('myButton');
const outputDiv = document.getElementById('output-div');
// Kör funktionen showSavedGreeting för att visa sparade hälsningar från localStorage.
document.addEventListener('DOMContentLoaded', () => {
    showSavedGreeting();
});


// funktionen welcomeUser() körs   
// inputfältet måste tömmas efter att användaren har matat in information med andra ord efter att funktionen 'welcomeUser har körts klart'   
myButton.addEventListener('click', () => {
    welcomeUser();
    myText.value = '';
})


myText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        welcomeUser();
        myText.value = '';
    }
})

// Definierar funktionen welcomeUser
// skapar ett object med användarens input som 'name'
// Försöker hämta en lista med hälsningar från localStorage och parsar den. Om inget finns, skapas en tom lista.
// Lägger till det aktuella hälsningsobjektet i listan med hälsningar.
// Sparar den uppdaterade listan med hälsningar i localStorage.
// Anropar appendGreeting för att visa den nya hälsningen på sidan.
function welcomeUser() {
    const userObject = { name: myText.value };
    const savedLocalStorageList = JSON.parse(localStorage.getItem('greetings')) || [];
    savedLocalStorageList.push(userObject);
    localStorage.setItem('greetings', JSON.stringify(savedLocalStorageList));
    appendGreeting(userObject);
};

// difinerar funktionen 'showSavedGreeting' som visar sparade hälsningar från localStorage.
//med hjälp av variabel 'savedGreetings' hämtar data och konverterar datan till javascript object med nyckeln 'greetings'
//om det inte finns en array i savedGreetings, säkerställer att savedGreetings är en tom array så att det inte finns error i konsolen?
//skapar en forEach-loop och för varje greeting lägger till greeting?
function showSavedGreeting() { 
    let savedGreetings = JSON.parse(localStorage.getItem('greetings'))
    if (!Array.isArray(savedGreetings)) {
        savedGreetings = [];
    }
    savedGreetings.forEach(greeting => {
        appendGreeting(greeting);
    });
};


// - definerar funktionen appendGreeting som tar en hälsning och visar den på sidan.
function appendGreeting(greeting) {
    outputDiv.innerHTML = `
         <h3>Hello ${greeting.name} 🙋🏼</h3>
    `;
}
    


