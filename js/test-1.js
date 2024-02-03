// Lyssnar efter DOMContentLoaded händelsen som avfyras när hela dokumentet har laddats. 
// Det säkerställer att datan från localStorage visas så snart som möjligt när sidan är redo.

document.addEventListener('DOMContentLoaded', () => {

    // Kör funktionen showSavedGreeting för att visa sparade hälsningar från localStorage.
    showSavedGreeting();
});

// hämtar referens från DOM
const myInput = document.getElementById('myText');
const myButton = document.getElementById('myButton');

// skapar en 'click' event 
myButton.addEventListener('click', () => {

    // funktionen welcomeUser() körs
    welcomeUser();
    
    myInput.value = ''; // inputfältet måste tömmas efter att användaren har matat in information med andra ord efter att funktionen 'welcomeUser har körts klart'   
});

// skapar en keydown event och 
myInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        welcomeUser();
    
        myInput.value = '';
    }
});


// Definierar funktionen welcomeUser
function welcomeUser() {

    // skapar ett object med användarens input som 'name'
    let currentGreeting = { name: myInput.value };
    // Försöker hämta en lista med hälsningar från localStorage och parsar den. Om inget finns, skapas en tom lista.
    let greetingList = JSON.parse(localStorage.getItem('greetings')) || [];        
    // Lägger till det aktuella hälsningsobjektet i listan med hälsningar.
    greetingList.push(currentGreeting);
    // Sparar den uppdaterade listan med hälsningar i localStorage.
    localStorage.setItem('greetings', JSON.stringify(greetingList));
    // Anropar appendGreeting för att visa den nya hälsningen på sidan.
    appendGreeting(currentGreeting);
  
};

/* 
    - difinerar funktionen 'showSavedGreeting' som visar sparade hälsningar från localStorage.
    - med hjälp av variabel 'savedGreetings' hämtar data och konverterar datan till javascript object med nyckeln 'greetings'
    - om det inte finns en array i savedGreetings, säkerställer att savedGreetings är en tom array så att det inte finns error i konsolen?
    - skapar en forEach-loop och för varje greeting lägger till greeting?
    
*/
function showSavedGreeting() {
    let savedGreetings = JSON.parse(localStorage.getItem('greetings'));
    if (!Array.isArray(savedGreetings)) {
        savedGreetings = []; // Säkerställer att savedGreetings är en array
    }
    savedGreetings.forEach(greeting => {
        appendGreeting(greeting);
    })
   
};

/*
    - definerar funktionen appendGreeting som tar en hälsning och visar den på sidan.
    - skapar ett nytt div-element
    - div-innerHTMl
    - ul, li och h4 och inuti <h4> lägger till användarens värde eller input-värdet 
    - sist appendar div-elementet till bodyn
*/

function appendGreeting(greeting) {
    let greetingElement = document.createElement('div');
    greetingElement.innerHTML = `

    <ul class="greetingOutput">
        <li>       
            <h4>Hello ${greeting.name}</h4>
        </li>
    </ul>
    
    `;


    document.body.appendChild(greetingElement);

}


// const btn = document.getElementById('localStorage-Btn');

//-------------------------------------------------------
// //skapar ett object 
// let myObject = { name: 'David', age: 30 };

// // konvertera objectet till en sträng
// let myObjectAsString = JSON.stringify(myObject);

// // Spara strängen i localStorage med nyckeln 'user'
// localStorage.setItem('user', myObjectAsString);
// //--------------------------------------------------------

// //hämta strängen från localStorage
// myObjectAsString = localStorage.getItem('user');

// // Konvertera stränegn tillbaka till strängen
// myObject = JSON.parse(myObjectAsString);

//--------------------------------------------------------
// localStorage.setItem() and localSorage.getItem()
// function showData() {
//     const main = document.querySelector('main');
//     main.innerHTML += `
//     <div>
//         <h4>Hello ${myObject.name}</h4>
//         <h4>age ${myObject.age}</h4>
//     </div>
//     `;
// }
//--------------------------------------------------------




// btn.addEventListener('click', () => {
//     // console.log(`Hello ${myObjectAsString}`)
//     showData();
// });
