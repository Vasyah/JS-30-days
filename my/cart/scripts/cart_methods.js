// 'use strict'
// объект корзины
let cart = {
    items: {},
    // добавил объект, в корзине, содержащий все товары, иначе были проблемы с перечислением
    addCart(id, price, input) {
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
        this.updInputVal(input, this['items'][id]['count']);
    },
    delCart(id, input) {
        if (this['items'].hasOwnProperty(id)) {
            if (this['items'][id]['count'] - 1 <= 0) {
                this.updInputVal(input, 0);
                delete this['items'][id]
                console.log(this);
                return;
            }
            this['items'][id]['count'] -= 1;
            this['items'][id]['totalPrice'] = this['items'][id]['count'] * this['items'][id]['price'];
            this.updInputVal(input, this['items'][id]['count']);
            console.log(this);
        } else {
            return;
        }
    },
    delAllCart(inputs){
        for(let item in this.items){
            delete this.items[item];
        }
        inputs.forEach(input => {
            this.updInputVal(input, 0);
        }); 
    },
    
    updInputVal(tag, count){
        tag.value = count;
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
clearBtn.addEventListener('click', function(e){
    let targetParent = e.target.parentNode.parentNode;
    let allInputs = targetParent.querySelectorAll('.product__count');
    cart.delAllCart(allInputs);
});
products.addEventListener('click', (e) => {
    let isClass = e.target.classList;
    let dataset = e.target.dataset;
    let targetParent = e.target.parentNode;
    if (isClass.contains('product__btn--plus')) {
        let currInput = targetParent.querySelector('.product__count');
        cart.addCart(dataset.id, dataset.price, currInput);
        
    } else if (isClass.contains('product__btn--minus')) {
        let currInput = targetParent.querySelector('.product__count');
        cart.delCart(dataset.id, currInput);
    };
});
// ДЛЯ ДЗ
// querySelector, querySelectorAll
// document.
// .onClick (посмотреть события)
// .addEventListner (чем он лучше .onClick)
// callback функция
// выяснить, шо це таке, из-за чего корзина считает коряво