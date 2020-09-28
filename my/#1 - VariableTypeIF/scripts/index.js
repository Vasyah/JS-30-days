// // Мы просим пользователя ввести имя

// let usrName = prompt('Введите ваш возраст?');
// console.log(usrName);
// if(isNaN(usrName) || usrName === null) {
//     alert('Чувак, ты ввёл какую-то дичь, я хочу увидеть число');
// }
// else{
//     alert('Товарищ, ты справился с заданием');
// }


// 1>0?alert(true):alert(false);
// // console.log(typeof(usrName));
// console.log(usrName);

// Мы просим пользователя ввести возраст

// let input = document.querySelector('.input');


// input.addEventListener('change', () => {
//     let variable = input.value > 10? console.log('Что-то есть') : console.log('Пусто');
// } );

// let message = if( age > 18) { return 'добро'} else{ return 'asdasd'};

// let value = 13;
// // for(let i = 0; i < value; i++){
// //     if(i>5){
// //         console.log(i);
// //     }
// //     else{
// //         continue;
// //     }
// // }
// let counter = 0;
// while( counter < 13 ){
//     if(counter > 5){
//     console.log(counter);
//     counter++;
//     }
//     else{
//         counter++;
//         continue;
//     }
// }


let userAnsw = prompt('');
let userArr = userAnsw.split('');

// for(let i = 0; i < userArr.length; i++){
//     if(userArr[i] % 2 === 0){
//         document.write(userArr[i]);
//     }
// }
userArr.forEach((item,index,arr) => console.log(`Массив ${arr} элемент ${index}=${item}\n`));



console.log(userArr);