let now = new Date();
document.write("Current date and time: " + now);


let now1 = new Date();
let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let monthIndex = now1.getMonth();
let monthName = monthNames[monthIndex];
alert("The current month is " + monthName + ".");


let now2 = new Date();
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayIndex = now2.getDay();
let dayName = dayNames[dayIndex];
alert("Today is " + dayName + ".");



let now3 = new Date();
let dayIndex1 = now3.getDay();

if (dayIndex1 === 0 || dayIndex1 === 6) {
    alert("It's Fun day!");
}


let now4 = new Date();
let date = now4.getDate();

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}


let currentDate = new Date();
console.log("Current date: " + currentDate.toString());

let elapsedMilliseconds = currentDate.getTime();
console.log("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds);

let elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
console.log("Elapsed minutes since January 1, 1970: " + elapsedMinutes);


let currentDate2 = new Date();
let currentHour = currentDate2.getHours();

if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

let laterDate = new Date(2020, 11, 31);
console.log(laterDate);


let startingDate = new Date("June 18, 2015");

let today = new Date();
let timeDiff = Math.abs(today.getTime() - startingDate.getTime());
let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

alert("Number of days past since 1st Ramadan: " + daysDiff);


let referenceDate = new Date(2015, 0, 1);
let beginning2015 = new Date();
let secondsElapsed = (beginning2015 - referenceDate) / 1000;

document.write(`On reference date ${referenceDate} <br>
${secondsElapsed} seconds had passed since beginning of 2015`);



let now5 = new Date();
let oneHourAgo = new Date(now5 - 60 * 60 * 1000);

let nowString = now5.toString();
let oneHourAgoString = oneHourAgo.toString();

console.log("Current date: " + nowString);
console.log("1 hour ago, it was " + oneHourAgoString);


let age = parseInt(prompt("Enter your age:"));
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;

document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);




let cxName = "Usama Jawaid"
let currentMonth = new Date().getMonth()
let numberOfUnit = 410;
let unitCharges = 31;

let payableAmount = numberOfUnit * unitCharges
let lateCharges = 350;
let afterDate = payableAmount + lateCharges;

document.write(`<h1>K-Electric Bill</h1><br>
        Customer Name: ${cxName} <br>
        Month: ${currentMonth}<br>
        Number of unit: ${numberOfUnit}<br>
        Charges per unit: ${unitCharges}<br><br>
        Net Amount Payable(within due date):${payableAmount}<br>
        Late payment charges: ${lateCharges}<br>
        Gross Amount Payable(after due date): ${afterDate}`)