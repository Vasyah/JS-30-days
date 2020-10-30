'use sctrict'

let link = document.querySelector('.bread');
let arrForLink = [];
arrForLink.push(link.outerHTML);
let div = document.createElement('div');
div.innerHTML = arrForLink[0];
document.body.appendChild(div);
console.log(arrForLink[0]);
console.log(link);
let str = 'бы'
let match = link.innerHTML.match(str);
console.log(match);