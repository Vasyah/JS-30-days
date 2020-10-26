// 'use strict'

let user = {
        // props
        age: 48,
        name: 'George',

        // methods
        getName() {
            // return this.name;
            let arw = () => {
                let arwNew = () => console.log(this);
                arwNew();
            };
            arw();
        },
};

let arw = () => console.log(this);

arw();

console.log(user.getName());

function checkThis() {
    // console.log(this);
    // function checkThisNew(){
    //     console.log(this);
    // }
    // checkThisNew();
    let arw = () => console.log(this);
    arw();
}

checkThis();
user.getThis = checkThis;
console.log(user.getThis());

function userConstructor(age, name, city){
    this.age = age;
    this.name = name;
    this.city = city;
}
console.log(typeof(userConstructor));
let userAngela = new userConstructor(23, 'Angela', 'Br9nsk');
let userJohn = new userConstructor(27, 'John', 'L.A.');
let userRichard = new userConstructor(28, 'Richard', 'Florida');
console.log(userAngela);
console.log(userJohn);
console.log(userRichard);
// 1 - функция не имеет собственного контекста
// 2 - контекст метода объекта - сам объект
// 3 - call, apply, bind

// 1 this для обычной функции
// 2 this для обычной функции внутри обычной функции
// 3 this для объекта (в методах)
// 4 this для обычной функции/стрелочной функции в методе объекта
// 5 функции-конструкторы
// 6 call, apply, bind

function checkThis(newArg, newArg1){
    console.log(this[newArg] + ' ' +  this[newArg1]);
}

checkThis();
checkThis.call(user, 'age', 'name' );
checkThis.apply(user, ['age', 'name'] );


function doubleVal(){
    return this * 2;
}

let newVal = doubleVal.bind(2);
let newVal1 = doubleVal.bind(newVal());

console.log(newVal1());

