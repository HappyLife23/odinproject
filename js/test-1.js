// how to accept userInput 
// easy way with windoe prompt

// let username = window.prompt('Whats your name?');
// console.log(username);

// let username;

let myInput = document.getElementById('myText');

const myButton = document.getElementById('myButton');
    
myButton.addEventListener('click', () => {

    console.log(`Hello ${myInput.value}`)
    
    welcomeUser();
    
    myInput.value = ''; // inputfältet måste tömmas efter att användaren har matat in information med andra ord efter att funktionen 'welcomeUser har körts klart'

    
});

function welcomeUser() {
    let greeting = document.createElement('div');
    greeting.innerHTML += `
    <h3>Hello ${myInput.value}</h3>
    `
    
    localStorage.setItem('userFirstName', myInput.value);
    const username = localStorage.getItem('userFirstName')
    
    document.body.appendChild(greeting);
}


