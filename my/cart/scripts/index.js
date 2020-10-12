'use strict'
// Запишем сперва просто функции для корзины
// Затем добавим DOM
// Затем используя объект

// functions list
// Познакомимся с обработчиком событий
// самые частые события
// click
// mousemove
// 
// addToCart
// добавить текущий товар в корзину
// cart - имитация объекта корзины

// Статья по объектам - https://learn.javascript.ru/object

let user = {
    'name': 'Vasya',
    'age': '27',
    'sex': 'male',
    'city': 'NSK',
};


console.log(user);
// обращение к св-ву
// обращение к св-ву
let nameUser = 'name';
console.log(user.name);
console.log(user[nameUser]);
// записываем объект со свойствами

// получение значение через ключ
user.height = '183';
console.log(user);

user["width"] = '11';
console.log(user);


delete user.width;
delete user.height;
console.log(user);

// перебор массива
// for in
for(let property in user){
    console.log(`${property}: ${user[property]}`);
}

let arr = ['bird', 'ditch', 'rich', 'storm'];

for(let item in arr){
    console.log(`${item}: ${arr[item]}`);
}

let str = 'qwertyuiop';

for(let item in str){
    console.log(`${item}: ${str[item]}`);
}

//  for of
//(TODO:) узнать, как перебрать значения свойств объекта через for of
for(let prop of arr){
    console.log(prop);
}



// let cart = {
    //     items: {},
    //     loadItems(items){
    //         items.reduce((prev,item) => {
    //             this.items[`item${item.dataset.id}`]= {};
    //         },{});
    //     },
    // };

// let arr = [1, 3, 4];

// arr.filter(currItem => currItem >= 3? console.log(currItem): '');

// let d = document;
// let cartTotaSumm = d.querySelector('.cart__totalSumm');
// let cards = d.querySelectorAll('.card__item');
// function addToCart() {
//     console.log(cartTotaSumm.value++);
// }
// cart.loadItems(cards);
// console.log(cart);
// let btnAdd = d.querySelectorAll('.btn-add');

// btnAdd.forEach(btn => btn.addEventListener('click', addToCart));

// Для Полины задание 12.10.20
// Самостоятельно выполнить предыдущее задание
// реализовать все функции две функции из задания и использовать методы массивов

// Для Юли задание 12.10
// Решить задания с использованием методов массивов
