// write your code in this directory
// task 1 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// task 2 
for (let t = 10; t >= 1; t--) {
    console.log(t);
}
// task 3 
// let sum = 0;   არის ცვლადი შექმნილი, სახელად ("sum" - ჯამი), ცვლადში მოთავსებულია ნულიანი
// for (let i = 1; i <= 50; i++) { გამოყენებულია loop ფუნქცია, დაპრინტულია ციფრები 1-დან 50-მდე.
//     sum += i;
// }
// console.log(sum); კონსილ ლოგის საშვალებით გამოტანილი არის ცონსოლში დანაპრინტი ციფრები 

// task 4 
// შეიძლება გაუგებრად მეწროს მაგრამ ყველა iterations აწერია მის ზემოთ განმარტება რამდენად სწორა თქვენ განსაჯეთ

// Initialization(let i = 0), Condition(i < 10),  Increment(i += 2),
// start,            bright,              end; ან 3 ან 5 

// for (let i = 0; i < 10; i += 2) { 3 ინტერაქცია თუ სწორად მახსოვს start, brige , end
//     console.log(i);
// }
// task 5 
// break statement - გამოიყენება  იმ შემთხვევაში, როდესაც გივინდა ჩვენი ციკლი არ შესრულდეს, ანუ ბოლომდე არ დასრულდეს, break statements დაწერით გავაჩეროთ სადაც იქნება საჭირო.

for (let g = 0; g < 10; g++) {
    if (g === 3) {
        console.log('When it comes to three = 3');
        break;  // გაჩერდება 3 ზე 
    }
    console.log('Number is:', g);
}


// task 6 
const animals = ['Lion', 'Tiger', 'Elephant', 'Zebra', 'Giraffe'];

for (let animal of animals) {
    if (animal === 'Elephant') continue; // გამოტოვებს  elephants, და განაგრძობს Zebradan (overall რასაც უწერია contiunue statemant იმ commands ტოვებს )
    console.log(animal);
}

// task 7 
let randomNumber;
do {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
} while (randomNumber !== 27);

console.log('Found 27, exit the loop!');


// task 8 
for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0 && i % 5 === 0) {
        output = 'FizzBuzz';
    }
    else if (i % 3 === 0) {
        output = 'Fizz';
    }
    else if (i % 5 === 0) {
        output = 'Buzz';
    }
    else {
        output = i;
    }
    console.log(output);
}


// task 9 
let randomNumber100;
do {
    randomNumber100 = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber100);
} while (randomNumber100 !== 27);



// task 10
let sumEven = 2;


for (let s = 1; s <= 1000; s++) {
    if (s % 2 === 0) {
        sumEven += s;
    }
}

console.log('Sum of all even numbers between 1 and 1000:', sumEven);
//  task 11 


let totalSum = 0;

for (let t = 1; t < 1000; t++) {
    if (t % 3 === 0 || t % 5 === 0) {
        totalSum += t;
    }
}
console.log("The sum of all numbers between 1 and 1000 divisible by 3 or 5 is:", totalSum);

// task 12
let divisibleSum = 0;
for (let m = 1; m <= 1000; m++) { 
    if (m % 16 == 0) {
        divisibleSum += m;         
    }
} 


console.log("The sum of all numbers between 1 and 1000 divisiblSum by 3 or 5 is:", divisibleSum);

// task 13 

const characters = 'passwordToko:luka:ggf2jsfj';
const passwordLength = 12;

let password = '';

for (let p = 0; p < passwordLength; p++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
}
console.log(password);

// task 14 
let str = "";
for (let i = 0; i < 10; i++) {
    str += Math.random() > 0.5 ? " " : "?";
}
console.log(str);


for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
        console.log("Postion of '?':", i);
        break;
    }
}
// task 15
// i dont have any idea

// Let's explain in the lesson.

