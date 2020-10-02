'use strict';

// let num = +prompt('Число');
// let base = +prompt('Степень');
// let result = 1;
// // 0 - положительное 1 - отрицательное
// let isNegative = 0;
// if (base < 0) {
//     base *= -1;
//     isNegative = 1;
// }
// if(base === 0){
//     console.log(result);
// }
// else{
//     for(let i = 0; i < base; i++){
//         result *= num;
//         if(i === base - 1 && isNegative){
//             result = 1/result;
//         }
//         console.log(result);
//     }
// }




// let num = +prompt('Напишите число');

// let base =+prompt('Напишите степень');

// let result= 1;
// // флаг 0 - положительное, 1 - отрицательное
// let isNegative = 0;

// if(base < 0) {
//     base *= -1;
//     isNegative = 1;
// }

// if(base === 0){
//     console.log(result);
// }
// else{
//     for(let i = 0; i < base; i++){
//         result *= num;
//         if(i === base - 1 && isNegative){
//         result = 1/result;
//         }
//         console.log(result);
//     }
// }


// самодокументируемый код
// function declaration
let superGlobVariable = "I'm here";
let globVariable = null;

function showUsrName(userName){
    let userName1 = 'George';
    console.log(userName);    
    return userName1;
}

function summNums(firstNum, secondNum){
    return firstNum + secondNum;
}
let summ = summNums(3, 4);
console.log(summ);
let newName = showUsrName('qwer');
console.log(newName);
// console.log(showUsrName('Albert'));

let expressVariable = function () {
    return 3;
}

let arwFnc = (a, b) => a + b;

console.log(arwFnc(3, 5));

// errors in JS и debug (dev tools)

// область видимости - глобальные, локальные переменные

// где используется function expression

// this - понятие контекста, что будет, если не будет найден контекст.

// какие функции(методы) есть у корзины покупок