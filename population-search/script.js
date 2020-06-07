const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

// fetching the json and pushing it to the array
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(inputWord, cities) {
    return cities.filter(place => {
        // gi - global insensitive - look thought the entire string and not case sensitive
        const regex = new RegExp(inputWord, 'gi');
        // include in the filtered array if inputWord matches a city or state
        return place.city.match(regex) || place.state.match(regex);
    })
}