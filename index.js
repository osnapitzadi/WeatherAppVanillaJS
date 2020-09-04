console.log('Hello World');

const API_KEY = "4c61b270f69a9186e3fb5ed85b49925b";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_URL_DEMO = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=4c61b270f69a9186e3fb5ed85b49925b&units=metric";

const submitHandler = (event) => {
    // event.preventDefault();
    console.log("pressed");
    let city = document.querySelector('#city').value;
    console.log(city);

    getWeather(city)
        // .then(data => console.log(data))
        // .then(data => document.write(data.name))
        .then(data => printData(data))
    
}

async function getWeather(location) {
    
    let response = await fetch (`${API_URL}${location}&appid=${API_KEY}&units=metric`);
    let data = await response.json();
    return data;
}  

function printData(data) {
    let outputDiv = document.querySelector('.output');
    console.log(data);

    var city = document.createElement('h1');
    city.innerHTML = data.name;
    outputDiv.appendChild(city);
}

const test = () => {
    let outputDiv = document.querySelector('.output');
}
test();
