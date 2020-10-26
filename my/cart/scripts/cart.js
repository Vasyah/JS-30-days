// 'use strict'

let cart = {};

let d = document;

let products = d.querySelector('.products');

// console.dir(products);

// addCart - добавить товар в корзину
function addCart(id, price){
    if(!cart.hasOwnProperty(id)){
        cart[id] = {};
        cart[id]['price'] = +price;
        cart[id]['count'] = 1;
        cart[id]['totalPrice'] =  cart[id]['count']*cart[id]['price'];
        console.log(cart);
    }
    else{
        cart[id]['count'] += 1;
        cart[id]['totalPrice'] =  cart[id]['count']*cart[id]['price'];
        console.log(cart);
    }
}
// delCart - удалить товар из корзины
function delCart(id){
    if(cart.hasOwnProperty(id)){
        if(cart[id]['count'] - 1 <= 0){
            delete cart[id]
            return;
        }
        cart[id]['count'] -= 1;
        cart[id]['totalPrice'] =  cart[id]['count']*cart[id]['price'];
        console.log(cart);
    }
    else{
        return;
    }
}
// delAllCart - удалить все товары из корзины

// openCart  - показать содержимое корзины
let btns = d.querySelectorAll('.product__btn');

// Вешаем события на все кнопки

// btns.forEach(btn => btn.addEventListener('click', (e) => {
//     let isClass = e.target.classList;
//     if (isClass.contains('product__btn--plus')) {
//         console.log(e.target);
//     } else if (isClass.contains('product__btn--minus')) {
//         console.log(e.target);
//     }; 
// }));

products.addEventListener('click', (e) => {
    let isClass = e.target.classList;
    let dataset = e.target.dataset;
    if (isClass.contains('product__btn--plus')) {
        addCart(dataset.id, dataset.price);
    } else if (isClass.contains('product__btn--minus')) {
        delCart(dataset.id);
    };
});
// ДЛЯ ДЗ
// querySelector, querySelectorAll
// document.
// .onClick (посмотреть события)
// .addEventListner (чем он лучше .onClick)
// callback функция
// выяснить, шо це таке, из-за чего корзина считает коряво