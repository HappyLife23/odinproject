// const friends = ['David', 'Sofie', 'Sara'];
// console.log(friends);

// // Eller kan man skriva det på detta sätt med
// const year = new Array(2010, 2012, 2013, 2016);
// console.log(year[year.length - 1]);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const years = [1020, 1022, 1252, 5544, 6856];
// /*********
// **** ALT ONE
// *********/
// // Här kaan vi inte skicak years som en argument,
// // För att birthYear är ett en siffra och inte
// // en array
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// /************
// **** ALT TWO
// ************/
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

// /***************************************************/
// //Array Methods
// //ADD
// friends.push('Emma');
// friends.unshift('John');

// //REMOVE
// friends.pop();
// friends.shift();

// console.log(friends);

// // indexOf
// console.log(friends.indexOf('Sara'));
// console.log(friends.indexOf('Bob'));

// // Funkar som indexOf men är modernt
// console.log(friends.includes('David'));
// console.log(friends.includes('Hehh'));

// if (friends.includes('David')){
//     console.log('True you have a friend named David.');
// } else {
//     console.log(error)
// }

// /***************************************************/
// // Exercise
// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 55];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2], ];

// console.log('Bill:',bills);
// console.log('Tip:',tips);
// console.log(totals);

/***************************************************/
//Objects
// const info = document.getElementById('info');
// const friend = document.getElementById('friend');
// const para = document.getElementById('para');

// const myInformation = {
//     firstname: "David",
//     lastname: "Heidari",
//     age: 30,
//     married: false,
//     hobbys: ['training', 'reading', 'travel']
// }
// const myHobbys = myInformation.hobbys.join(' ');

// console.log(myInformation, myInformation.hobbys);
// console.log(myInformation.age);
// console.log(myInformation.firstname);
// console.log(myInformation.hobbys);
// console.log(myInformation.hobbys[0]);

// const informationAboutDavid = prompt('What do you want to know about David: \nfirstname \nlastname \nage \nmarried \nhobbys').toLowerCase();

// if (informationAboutDavid in myInformation) {
//     if (informationAboutDavid === 'hobbys') {
//         para.innerHTML = `
//             <p> My favorite hobbys are ${myInformation.hobbys.join(',')} </p>`;
//     } else if (informationAboutDavid === 'age') {
//         para.innerHTML =
//             `<p>I am ${myInformation.age} years old.</p>`;
//     } else if (informationAboutDavid === 'firstname') {
//         para.innerHTML =
//             `<p>My firstname is ${myInformation.firstname}.</p>`;
//     }else if (informationAboutDavid === 'lastname') {
//         para.innerHTML =
//             `<p>My lastname is ${myInformation.lastname}.</p>`;
//     }else if (informationAboutDavid === 'married') {
//         para.innerHTML =
//             `<p>I am ${myInformation.married ? 'married' : 'not married yet'}.</p>`;
//     }
//     // console.log(`My favorite hobbys are ${hobbys}`)
// } else {
//     para.innerHTML =
//         `<p>Sorry the information you asked dose'nt exists.</p>`;
// }

// // close friend outputage
// const showBestFriend = prompt('Do you want to know Davids closest friend? \n-Yes \n-No').toLowerCase();

// if (showBestFriend === 'yes') {
//     friend.innerHTML = `
//     <h1> ${myInformation.firstname} has ${friends.length} friends and his closest friend name is ${friends[1]} </h1>`;

// } else{
//     friend.innerHTML = `
//     <h1> Fuck you🖕 </h1>
//     `;
// }

// info.textContent = myInformation[informationAboutDavid];

// if (!myInformation[informationAboutDavid]) {
//     info.innerHTML = `
//     <h5 style="color:red">Sorry the information you asked dosen't exists.</h5>`
// } else {
//     info.innerHTML = myInformation[informationAboutDavid];
// }

// console.log(`David has ${friends.length} friends and his closest friend name is ${friends[1]}`);

// console.log(myInformation[informationAboutDavid]);

/**************************************************************************/

// const david = {
//     firstname: "david",
//     lastname: "heidari",
//     birthYear: 1995,
//     job: "student",
//     study: 'Fullstack utvecklare JavaScript',
//     work: "behandlings-pedagog",
//     friends: ['Sofie', 'Emma', 'Anna'],
//     körkort: true,
//     favColors: ['Yellow', 'Light Green', 'Light Blue'],
//     goal: 'Ekonomist oberoende',
//ALT-1
// calcAge: function (birthYear) {
//     return 2024 - birthYear;
// }

//ALT-2
// calcAge: function () {
//     console.log(this);
//     return 2024 - this.birthYear;
// }

// ALT-3
// calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return david.age;
// },

// getSummery: function () {
//     return `
//         ${this.firstname} is a ${this.age} year old ${this.job}.
//         He is working at the same time as ${this.work} and he has ${this.körkort ? 'a' : 'no'} drivers license.
//     `
// }

//     myStory: function () {
//         return `
// My name is ${this.firstname} ${this.lastname} and i am ${this.age}-year old.
// Right now i am a ${this.job}, studying ${this.study}. I also work at the same time as ${this.work} in SiS. My closest friend is ${this.friends[0]} and i love her alot. My favorite colors are ${this.favColors}. My goal for the future is to become ${this.goal}.`}
// };

// console.log(david.calcAge());
// console.log(david.myStory().trim());

//* All CONSOLE.LOG()
// David is a 28-year old student and also has a job and a driving-license.
// console.log(david.age);
// console.log(david.getSummery().trim());
// console.log(`${david.firstname} is a ${david.age} year old ${david.job} and also is a ${david.work} and he has a ${david.körkort}.`)
// console.log('Your age is:', david.calcAge());
// console.log('Yoor first friend in friends array is:', david.friends[0]);

//** OBEJCTS EXERISE
// const mark = {
//     fullName: 'Mark',
//     mass: 85,
//     height: 1.80,

//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John',
//     mass: 95,
//     height: 1.80,

//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(`${mark.fullName}'s BMI is (${mark.calcBMI().toFixed()}) and ${john.fullName}'s  BMI is (${john.calcBMI().toFixed()}) `);

// if (mark.bmi > john.bmi) {
//     console.log('Marks BMI is higher than Johns BMI');
// } else {
//     console.log('Johns BMI is higher than Marks BMI.');
// }

// //* FOR-LOOP
// for (let i = 0; i <= 10; i++){
//     console.log(`for-loop: ${i}`);
// }

// const sofiesArray = [
//     'Sofie Kleberg',
//     31,
//     'student',
//     ['Sara', 'Åsa', 'Matilda']
// ];

// const bestFariends = sofiesArray[3].join(' ')

// for (let i = 0; i < sofiesArray.length; i++){
//     // console.log(`
//     // Her name is ${sofiesArray[0]} and she is ${sofiesArray[1]}-years old.
//     // She is a ${sofiesArray[2]}.
//     // Her best friends are ${bestFariends}`);

//     // denna if-sats skriver ut bara det som är string
//     if (typeof sofiesArray[i] !== 'string') continue;
//     console.log(sofiesArray[i], typeof sofiesArray[i]);
// }

// for (let i = 0; i < sofiesArray.length; i++){
//     // console.log(`
//     // Her name is ${sofiesArray[0]} and she is ${sofiesArray[1]}-years old.
//     // She is a ${sofiesArray[2]}.
//     // Her best friends are ${bestFariends}`);

//     // denna if-sats skriver ut bara det som är string
//     if (typeof sofiesArray[i] === 'number') break;
//     console.log(sofiesArray[i], typeof sofiesArray[i]);
// }

//* Example
// const header = document.getElementById('info');

// const years = [1969, 1955, 1995, 1993];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2024 - years[i]);
//     continue
// }

// const listItems = ages.map(age => `<li>${age}</li>`).join(' ');

// header.innerHTML = `
// <ul>
//     ${listItems}
// </ul>
// `
// console.log(ages)

//* Loppping backwards

// const jonas = [
//     'Jonas',
//     'Alexis',
//     2024 - 1985,
//     ['David', 'John', 'Alex']
// ];

// for (let i = jonas.length - 1; i >= 0; i--){
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`<--------- Starting Set-${exercise} --------->`);

//     for (let rep = 1; rep < 4; rep++){
//         console.log(`Repetition ${rep} 🏋🏽‍♂️`)

//     }
//     for (let rest = 1; rest < 4 ; rest++){
//         console.log(`Rest-time between each repetition 30s ${rest}`)
//     }
// }

//* While-loop
//* We use while-loop, when we dont know how many times its gonna run
//* If we know how many times then we use for-loop, like an array

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`hello ${rep}`);
//     rep++;
// }

// let dice =  Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) (
//         console.log(`You rolled a ${dice}. Loop is about to end...`)
//     )

// }

//* Example

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAvarge = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // de här två gör exakt samma sak
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }

//   // console.log(sum);
//   return sum / arr.length;
// };

// console.log(calcAvarge([3, 3, 6]));
// console.log(Math.trunc(calcAvarge(totals)));
// console.log(Math.trunc(calcAvarge(tips)));

// //* prettier inställningar, det finns en fil som jag har skapat och den heter .prettierrc
// const sayHi = 'Hello';
// const calcÅlder = birthYear => 2024 - birthYear;

// const temperatures = [3, -2, -6, -1, 'error', 9, 10, 15];

// const calcTemp = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }

//   console.log('Max-value:', max);
//   console.log('Min-value', min);
//   return max - min;
//   // console.log(max - min);
// };

// // calcTemp([3, 8, 5, 9]);
// const amplitude = calcTemp(temperatures);
// console.log(amplitude);

// // Concat two arrays
// const calcTempNew = function (array1, array2) {
//   const temps = array1.concat(array2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log('Max-value:', max);
//   console.log('Min-value', min);
//   return max - min;
// };

// const newAmplitude = calcTempNew([1, 3, 5], [4, 13, -2]);
// console.log(newAmplitude);

// fixing BUG

// const measureKelvin = function () {
//   const measurment = {
//     type: 'number',
//     unit: 'celcius',
//     // value: parseInt(prompt(`Degrees in Celcius: `))
//     // value: Number(prompt(`Degrees in Celcius: `)),
//     value: 10,
//   };
//   console.log(measurment);

//   //* using debugger
//   // debugger;
//   const kelvin = measurment.value + 273;
//   console.log(measurment.value);
//   return kelvin;
// };

// console.log(measureKelvin());

//* Exercise

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...', str);
};

printForcast(data1);
printForcast(data2);
