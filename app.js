let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const getRandomNumber = max => Math.floor(Math.random() * max); // function to generate random number

const generateCardValues = () => `${values[getRandomNumber(values.length)]}`;
// console.log(generateCardValues());

let value = generateCardValues();

// const suite = ["♥", "♦", "♠", "♣"];

// const getRandomNumber = max => Math.floor(Math.random() * max); // function to generate random number

// const generateCardSuites = () =>
//     `${suite[getRandomNumber(suite.length)]}`;

// let suit = generateCardSuites()

const cardValue = () => {
    document.querySelector(".middle").innerHTML = value;
    document.querySelector(".value").innerHTML = document.querySelector(
        ".middle"
    ).innerHTML;
    document.querySelector(".value2").innerHTML = document.querySelector(
        ".middle"
    ).innerHTML;
};