// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const arr = [];

for(let i=0; i < arr.length; i++);
const fiveHundredths = inventors.forEach(function(inventor) {
    if(inventor.year > 1499 || inventor.year < 1599 ) {
        arr.push(inventor.first + ' ' + inventor.last);
    }
});

// const fiveHundredths1 = inventors.filter()



console.log(arr);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// метод .map всегда возвращает столько элементов в новый массив, сколько получил на вход
// здесь мы возвращаем массив, в котором каждый объект содержим имя и фамилию
const mapWithInventors = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.log(mapWithInventors);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortInventors = inventors.sort( (a, b) => b.year - a.year);
console.log(sortInventors);

// сортировка

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

let preVal = 0;

for(let i=0; i < inventors.length; i++){
    preVal = inventors[i].passed - inventors[i].year;
}

console.log(preVal);
const reduceInventors = inventors.reduce( (prevValue, inventor) => {
    return prevValue + (inventor.passed - inventor.year);
}, 0);

console.log(reduceInventors);


// 5. Sort the inventors by years lived

const sortInventors11 = inventors.reduce((yearsArr, inventor) => {
    yearsArr.push(inventor.passed - inventor.year);
    return yearsArr.sort((a, b) => a > b ? 1: -1);
}, []);

console.log(sortInventors11);
// можно не делать
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['171', '447', '341', '428', '374', '208', '583', '268', '268', '268', '268', '268', '268', '268', '268', '268', '268', '268', '268', '268', '318', '158', '211', '211', '320', '320', '30', '181', '181', '181', '195', '379', '354', '191', '11', '11', '175', '175', '175', '175', '175', '175', '175', '152', '378', '346', '77', '77', '8', '8', '8', '400', '400', '562', '562', '562' , '12', '459', '459', '459', '459', '274', '36', '325', '466', '269', '269', '269', '269', '269', '8', '10', '10'];
let counter = 0;
const newData = data.reduce((newObj, item) =>{

    if(newObj[item] == null){
        newObj[item] = 1;
    }
    else{
        newObj[item] += 1;
    }
    counter++;
    return newObj;
}, {});


console.log(newData);


console.log(counter);



















