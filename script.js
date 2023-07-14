const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-Items');
const timezoneEl = document.getElementById('timezone');
const countryEl = document.getElementById('country');
const weatherforecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='1cd9ace62d4a20255bd9799db7395b59';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12hrformat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'
    //fix $(ampm)
   // timeEl.innerHTML = hoursIn12hrformat + ':' + minutes+ '' + '<span id="am-pm">$(ampm)</span>'

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

function getWeatherData(lat,lon) {
   
         fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+API_KEY)
         .then(function(res){
            return res.json()
         })
         .then(function(data){
            console.log(data)
         })
}

getLocation()
function getLocation() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=austin&limit=1&appid='+API_KEY)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data[0].lat, data[0].lon)
    getWeatherData(data[0].lat, data[0].lon)

    })
}
