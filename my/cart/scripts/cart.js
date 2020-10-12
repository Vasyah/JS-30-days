// ПРОЕКТ КОРЗИНА (НЕ ПОМОЙНАЯ)
// addToCart
let productName_1 = 'YogaCarpet1';
let productName_2 = 'YogaCarpet2';

let productPrice_1 = '2500';
let productPrice_2 = '30000';

let cart = {};
function addToCart(product, price){
    cart[product] = price;
}

addToCart(productName_1, productPrice_1);
addToCart(productName_2, productPrice_2);

console.log(cart);

for(let prod in cart){
    console.log(`${prod}: ${cart[prod]}`);
}
// rmwFromCart
// удалить выбранный товар из корзины
function rmwFromCart(product){
    delete cart[product];
}

rmwFromCart('YogaCarpet1');
rmwFromCart('YogaCarpet2');
console.log(cart);
