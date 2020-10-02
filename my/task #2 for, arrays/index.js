'use strict'

// Задание на 02.10.2020

// Циклы

function fillArrWithNum(maxVal) {
    let arr = [];
    for (let i = 1; i <= maxVal; i++) {
        arr.push(i);
    }
    return arr;
}

let numArr = fillArrWithNum(100);
// Все задания выполнить, сперва с for, затем while/do while (по желанию)
// 1)Выведите столбец чисел от 1 до 100.

function showAllElmsWithFor(arr) {
    let div = document.createElement('div');
    for (let i = 0; i < arr.length; i++) {
        div.textContent += `${arr[i]} `;
    }
    div.style.marginTop = '20px'
    document.body.append(div);
    // обычное решение, красоты
}

showAllElmsWithFor(numArr);

function showAllElmsWithWhile(arr) {
    let i = 0;
    let div = document.createElement('div');
    while (i < arr.length) {
        div.textContent += `${arr[i]} `;
        i++;
    }
    div.style.marginTop = '20px'
    document.body.append(div);
}

showAllElmsWithWhile(numArr);

// console.log(numArr);

// 2)Выведите столбец чисел от 11 до 33.

function showRangeWithFor(startNum, endNum, arr) {
    let div = document.createElement('div');
    for (let i = 0; i <= arr.length; i++) {
        if (i >= startNum && i <= endNum) {
            div.textContent += `${arr[i - 1]} `;
        }
    }
    div.style.marginTop = '20px'
    document.body.append(div);
    // обычное решение, красоты
}

function showRangeWithWhile(startNum, endNum, arr) {
    let div = document.createElement('div');
    let i = 1;
    while (i <= arr.length) {
        if (i >= startNum && i <= endNum) {
            div.textContent += `${arr[i - 1]} `;
        }
        i++;
    }
    div.style.marginTop = '20px'
    document.body.append(div);
    // обычное решение, красоты
}
showRangeWithFor(11, 33, numArr);
showRangeWithWhile(11, 33, numArr);
// 3)Выведите столбец четных чисел в промежутке от 0 до 100.

function showEvenWithFor(arr) {
    let div = document.createElement('div');
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2)) {
            div.innerHTML += `${arr[i]} `;
        }
    }
    div.style.marginTop = '20px';
    document.body.append(div);
}
showEvenWithFor(numArr);
// 4)С помощью цикла найдите сумму чисел от 1 до 100.
function showSumm(arr) {
    let div = document.createElement('div');
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter += arr[i];
    }
    div.innerHTML = `Сумма всех элементов: ${counter}`;
    div.style.marginTop = '20px';
    document.body.append(div);
}

showSumm(numArr);

// Массивы
// https://learn.javascript.ru/array - массивы
// https://learn.javascript.ru/array-methods - методы массивов
// После выполнения этих заданий, усложняем
// записать числа от 1 до 100 в массив, затем,

// используя метод .forEach вывести все элементы массива на экран
let div = document.createElement('div');
numArr.forEach((currentItem, index) => {
    let text = div.innerHTML;
    div.textContent += `${currentItem} `;
    if (index + 1 === numArr.length) {
        div.style.marginTop = '20px'
        document.body.append(div);
    }
});

// используя метод .filter вывести значения в диапазоне от 11 до 33
let div1 = document.createElement('div');

let filterNumArr = numArr.filter(currentItem => {
    return currentItem >= 11 && currentItem <= 33;
});
console.log(filterNumArr);


// используя метод .map записать в новый массив только чётные
// может кто-нибудь догадается, как в тернарном операторе убрать часть с else
let mapNumArr = numArr.map(currentItem => !(currentItem % 2) ? currentItem : '');
console.log(mapNumArr);
// используя метод .reduce найти сумму всех элементов массива

// Подумать, какие функции должны быть у корзины покупок
// https://dropmefiles.com/LrTa5 - ссылка на скачивание видоса по отладке кода
// Отладка кода в chrome - https://learn.javascript.ru/debugging-chrome
// Ошибки в js - https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/%D0%A7%D1%82%D0%BE_%D0%BF%D0%BE%D1%88%D0%BB%D0%BE_%D0%BD%D0%B5_%D1%82%D0%B0%D0%BA

// (Дополнительно) Попробуем вот эти статьи ещё почитать, про область видимости
// https://learn.javascript.ru/closures 
// https://habr.com/ru/post/78991/
