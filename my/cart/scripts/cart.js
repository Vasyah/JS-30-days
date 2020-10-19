'use strict'
let cart = {}

// let d = document;
// const products = d.querySelector('.products');
// const productsInputs = d.querySelectorAll('.product__count');
// // добавить в корзину
// function addCart(id, price) {
//     // лежит ли уже в корзине
//     if (cart.hasOwnProperty(id)) {
//         cart[id].count += 1;
//         cart[id]['totalPrice'] = cart[id]['count'] * cart[id]['price'];
//     }
//     // если не лежит
//     else {
//         cart[id] = {};
//         cart[id].count = 1;
//         cart[id]['price'] = +price;
//         cart[id]['totalPrice'] = cart[id]['count'] * cart[id]['price'];
//     }
//     console.log(cart);
// };

// // удалить из корзины
// function delCart(id) {
//     // если не осталось товара в корзине, удалить из объекта
//     if (cart.hasOwnProperty(id)) {
//         if (cart[id]['count'] - 1 === 0) {
//             delete cart[id];
//             console.log(cart);
//             return;
//         }
//         cart[id].count -= 1;
//         cart[id]['totalPrice'] = cart[id]['count'] * cart[id]['price'];
//     }
//     // если не лежит
//     else {
//         console.log(cart);
//         return;
//     }
//     console.log(cart);
// };

// function delAllCart() {
//     for (let item in cart) {
//         delete cart[item];
//     }
//     console.log(cart);
// }

// function changeCount(e, id) {
//     if (!cart.hasOwnProperty(id)) return;
//     e.target.parentNode.children[1].value = cart[e.path[2].dataset.id]['count'];
// }


// products.addEventListener('click', e => {
//     // нажата кнопка "+" ?
//     if (e.target.classList.contains('product__btn--plus')) {
//         addCart(e.path[2].dataset.id, e.path[2].dataset.price);
//         changeCount(e, e.path[2].dataset.id);
//     }
//     // нажата кнопка "-" ?
//     else if (e.target.classList.contains('product__btn--minus')) {
//         delCart(e.path[2].dataset.id);
//         changeCount(e, e.path[2].dataset.id);
//     } 
//     else if (e.target.classList.contains('products__btn--clear')) {
//         delAllCart();
//         productsInputs.forEach( i => i.value = 0);
//     }
// });
