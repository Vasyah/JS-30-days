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
let user = {
    name: 'Vasya',
    age: '27',
    city: 'NSK',
    sex: 'male',
};
// записываем объект со свойствами
// получение значение через ключ
console.log(user.name);
console.log(user.age);
// изменение ключа
user.age = '40';
console.log(user.age);
let mainUser = user;
console.log(mainUser);
user.age = '45';
console.log(mainUser);
// перебор массива
let arr = ['bitch', 'ditch', 'rich'];
// перебор строки
let str = 'qwertyuiop[]'
for(let key  in  user){
    console.log(user);
}
let cart = {
};
let productName_1 = 'prod_1' ;
let productName_2 = 'prod_2';

let productPrice_1 = '450';
let productPrice_2 = '900';

function addToCart(product, price){
    cart[product] = price;
    console.log(cart);
}

addToCart(productName_1, productPrice_1);
addToCart(productName_2, productPrice_2);
// 
// delFromCart
// удалить выбранный товар из корзины

// delAllFromCart
// удалить все товары из корзины

// updCart
// изменить количество товара в корзине


// toggleCart
// в зависимости от условий -> openCart/closeCart
// openCart
// открыть корзину
// в зависимости от условий -> showAllInCart

// closeCart
// закрыть корзину


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
