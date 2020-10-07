// Запишем сперва просто функции для корзины
// Затем добавим DOM
// Затем используя объект

// functions list
// Познакомимся с обработчиком событий
// самые частые события
// click
// mousemove
let cart = {
    items: {},
    loadItems(items){
        items.reduce((prev,item) => {
            this.items[`item${item.dataset.id}`]= {};
        },{});
    },
};
// addToCart
// добавить текущий товар в корзину
let d = document;
let cartTotaSumm = d.querySelector('.cart__totalSumm');
let cards = d.querySelectorAll('.card__item');
function addToCart() {
    console.log(cartTotaSumm.value++);
}
cart.loadItems(cards);
console.log(cart);
let btnAdd = d.querySelectorAll('.btn-add');

btnAdd.forEach(btn => btn.addEventListener('click', addToCart));
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