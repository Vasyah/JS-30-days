// 'use strict'
// объект корзины
let cart = {
    items: {},
    // добавил объект, в корзине, содержащий все товары, иначе были проблемы с перечислением
    addCart(id, price) {
        // создание нового товара, если его нет в корзине
        if (!this['items'].hasOwnProperty(id)) {
            this['items'][id] = {};
            this['items'][id]['price'] = +price;
            this['items'][id]['count'] = 1;
            this['items'][id]['totalPrice'] = this['items'][id]['count'] * this['items'][id]['price'];
            console.log(this);
        } else {
            this['items'][id]['count'] += 1;
            this['items'][id]['totalPrice'] = this['items'][id]['count'] * this['items'][id]['price'];
            console.log(this);
        }
    },
    delCart(id) {
        if (this['items'].hasOwnProperty(id)) {
            if (this['items'][id]['count'] - 1 <= 0) {
                delete this['items'][id]
                console.log(this);
                return;
            }
            this['items'][id]['count'] -= 1;
            this['items'][id]['totalPrice'] = this['items'][id]['count'] * this['items'][id]['price'];
            console.log(this);
        } else {
            return;
        }
    },
    delAllCart(){
        for(let item in this.items){
            delete this.items[item];
        }
        console.log(this);
    }
};
// преобразование для удобства
// openCart  - показать содержимое корзины

let d = document;
// элемент, содержащий все продукты
let products = d.querySelector('.products');
let clearBtn = d.querySelector('.products__btn--clear');
// Вешаем события на все кнопки

// btns.forEach(btn => btn.addEventListener('click', (e) => {
//     let isClass = e.target.classList;
//     if (isClass.contains('product__btn--plus')) {
//         console.log(e.target);
//     } else if (isClass.contains('product__btn--minus')) {
//         console.log(e.target);
//     }; 
// }));


// очистка корзины
console.log(clearBtn);
clearBtn.addEventListener('click', function(){
    cart.delAllCart();
});
products.addEventListener('click', (e) => {
    let isClass = e.target.classList;
    let dataset = e.target.dataset;
    if (isClass.contains('product__btn--plus')) {
        cart.addCart(dataset.id, dataset.price);
    } else if (isClass.contains('product__btn--minus')) {
        cart.delCart(dataset.id);
    };
});
// ДЛЯ ДЗ
// querySelector, querySelectorAll
// document.
// .onClick (посмотреть события)
// .addEventListner (чем он лучше .onClick)
// callback функция
// выяснить, шо це таке, из-за чего корзина считает коряво