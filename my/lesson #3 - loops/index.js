'use strict'


// let k = prompt('Число, которое возводим в степень');

// let n = +prompt('Степень, в которую возводим число k');
// // флаг, отвечающий за то, что степерь отрицательна 0 - пол-ное, 1 - отриц-ое
// let isNegative = 0;
// if(n < 0){
//     n *= -1;
//     isNegative = 1;
// }
// let result = 1;
// for (let i = 0; i < n; i++) {
//     result *= k;
//     if(i === n - 1 && isNegative){
//             result = 1/result;
//             console.log(result);
//             break;
//     }
//     console.log(result);
// }
// math.pow

// let u = Math.pow(2, 0);
// console.log(u);

// самостоятельно записать эту программу, как функцию
// как function declaration, function expression, как стрелочную функцию


// Сегодня разберём, что такое функции и какие они бывают, это нам нужно, для того, чтобы
// мы могли начать писать свой проект

// Функция - это некоторая конструкция, которая может содержать программный код, которая может вызываться
// сколь угодно раз

// Синтаксис

// function declaration

// camelCase
// самодокументируемый код
// аргументы функции - это входные параметры, с которыми эта функция может работать
let usrName = 'Garold';

function showUsrName(usrName) {
    console.log(usrName);
    // func body
}

function changeUsrName(){
    usrName = 'Shen';
}

// вызов функции

showUsrName(usrName);
changeUsrName();
showUsrName(usrName);

function summNums(firstNum, secondNum) {
    return firstNum + secondNum;
}

let summ = summNums(3, 4);

let sum  = function (firstNum, secondNum){
    return firstNum + secondNum;
}
sum(3,4);
console.log(summ);
console.log(sum(3,4));

let arwFnc = () => {
    return 
};

console.log(arwFnc());
// глобальные, локальные переменные
// https://tproger.ru/translations/wtf-is-ecmascript/

// контекст this - когда объекты
// смотрю на время, если больше 1:30, то завершаю, если нет, то определяем функции для нашей корзины

