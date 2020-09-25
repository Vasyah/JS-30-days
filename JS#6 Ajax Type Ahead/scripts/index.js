const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(URL)
    // return another promise
    .then(blob => blob.json())
    .then(data => cities.push(...data));

console.log(cities);

function ob(citi) {
    citi.forEach(element => {
        console.log(element.city);
    });
}
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    const matchedCities = findMatches(this.value, cities);
    let lis = matchedCities.map(place => {
        return `<li><span class="name">${place.city}</span><span class="population">population: ${place.population}</span></li>`;
        
    }).join('');
    // console.log(lis);
    suggestion.innerHTML = lis;

}

const search = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

search.addEventListener('keyup', displayMatches);

