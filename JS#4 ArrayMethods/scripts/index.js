// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsFilter = inventors.filter(item => item['year'] > 1500 && item['year'] < 1600);
console.log(inventorsFilter);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// метод .map всегда возвращает столько элементов в новый массив, сколько получил на вход

const inventorsNames = inventors.map((item) => {
    return {
        first: item['first'],
        last: item['last'],
    }
});
/* не разобрался, почему не работает this
TODO: */
console.log(inventorsNames);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// сортировка
const arr = [1, 3, 5, -1, 10, 44];

console.log(arr.sort((a, b) => a - b));

let sortedBirthday = inventors.sort((a, b) => {
    if (a.year < b.year) return -1;
    else if (a.year > b.year) return 1;
    return 0;

});

console.log(sortedBirthday);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let sumAllYears = inventors.reduce((previousVal, currVal) => {
    let yearsLive = currVal.passed - currVal.year;
    console.log(currVal['first'] + ' ' + currVal['last'] + ' прожил: ' + yearsLive);
    return previousVal += currVal.passed - currVal.year;
}, 0);

console.log(sumAllYears);

// 5. Sort the inventors by years lived

let sortByYearsLived = inventors.sort((a, b) => {
    let aYearsLive = a.passed - a.year;
    let bYearsLive = b.passed - b.year;
    console.log('a: ' + aYearsLive + '\n' + 'b: ' + bYearsLive);
    if (aYearsLive < bYearsLive) {
        return -1;
    }
    else if (aYearsLive > bYearsLive) {
        return 1;
    }
    return 0;
});

console.log(sortByYearsLived);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name
let newPeople = people.sort();
console.log(newPeople);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];


const testObj = {
    key: 15,
};

const fifteen = 15;

console.log(testObj.hasOwnProperty('key'));


let newData = data.reduce(function (obj, item) {
    if( !obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log((newData));