var lat 
var lon 
var cityName
var searchButtonEl

var cityFormEl = document.getElementById("city-form");
var cityInputEl = document.getElementById("city-input");
var cityEl = document.getElementById("city");
var recentSearchesEl = document.getElementById("recent-searches");

//current date
var dateEl = document.getElementById("date");
var iconEl = document.getElementById("icon");
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var uvIndexEl = document.getElementById("uv-index");
//forecast day 1
var date1El = document.getElementById("date-1");
var icon1El = document.getElementById("icon-1");
var temp1El = document.getElementById("temp-1");
var wind1El = document.getElementById("wind-1");
var humidity1El = document.getElementById("humidity-1");
//forefast day 2
var date2El = document.getElementById("date-2");
var icon2El = document.getElementById("icon-2");
var temp2El = document.getElementById("temp-2");
var wind2El = document.getElementById("wind-2");
var humidity2El = document.getElementById("humidity-2");
//forecast day 3
var date3El = document.getElementById("date-3");
var icon3El = document.getElementById("icon-3");
var temp3El = document.getElementById("temp-3");
var wind3El = document.getElementById("wind-3");
var humidity3El = document.getElementById("humidity-3");
//forecast day 4
var date4El = document.getElementById("date-4");
var icon4El = document.getElementById("icon-4");
var temp4El = document.getElementById("temp-4");
var wind4El = document.getElementById("wind-4");
var humidity4El = document.getElementById("humidity-4");
//forecast day 5
var date5El = document.getElementById("date-5");
var icon5El = document.getElementById("icon-5");
var temp5El = document.getElementById("temp-5");
var wind5El = document.getElementById("wind-5");
var humidity5El = document.getElementById("humidity-5");

// display dates
var getDate = function() {
    var today = new Date();
    //today
    var date = (today.getMonth()+1)+'/'+today.getDate() +'/'+(today.getFullYear());
    dateEl.textContent = date;
    //forecast day 1
    var date1 = (today.getMonth()+1)+'/'+(today.getDate()+1) +'/'+(today.getFullYear());
    date1El.textContent = date1;
    //forecast day 2
    var date2 = (today.getMonth()+1)+'/'+(today.getDate()+2) +'/'+(today.getFullYear());
    date2El.textContent = date2;
    //forecast day 3
    var date3 = (today.getMonth()+1)+'/'+(today.getDate()+3) +'/'+(today.getFullYear());
    date3El.textContent = date3;
    //forecast day 4
    var date4 = (today.getMonth()+1)+'/'+(today.getDate()+4) +'/'+(today.getFullYear());
    date4El.textContent = date4;
    //forecast day 5
    var date5 = (today.getMonth()+1)+'/'+(today.getDate()+5) +'/'+(today.getFullYear());
    date5El.textContent = date5;
}

//get input from city form 
var formSubmitHandler = function(event) {
    event.preventDefault();
    cityName = cityInputEl.value.trim();
    if (cityName) {
        getCity(cityName);
        cityInputEl.value = "";
        cityEl.textContent = cityName
        recentSearchHandler();
    }
}

//save recent searches 
var recentSearchHandler = function() {
    searchButtonEl = document.createElement("button");
    searchButtonEl.textContent = cityName;
    searchButtonEl.setAttribute("class", "recent-search-button");
    recentSearchesEl.appendChild(searchButtonEl);
    searchButtonEl.addEventListener("click", recentSearchButton); 
}

var recentSearchButton = function() {
    console.log(searchButtonEl.textContent);
    cityName = this.textContent;
    formSubmitHandler();
}

//get lat and lon coordinates for weather data api request 
var getCity = function() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=f1c27cb81faeee38552c89fbd39e289e";
    
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                lat = data.coord.lat;
                lon = data.coord.lon;
                getWeatherData();
            })
        }
    })
}

// api fetch request to display weather data
var getWeatherData = function() {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=f1c27cb81faeee38552c89fbd39e289e&units=imperial';
    fetch(apiUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    // display current weather data 
                    iconEl.innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png'>";
                    tempEl.textContent = data.current.temp;
                    windEl.textContent = data.current.wind_speed;
                    humidityEl.textContent = data.current.humidity;
                    uvIndexEl.textContent = data.current.uvi;
                    // display forecast day 1 weather data 
                    icon1El.innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png'>";
                    temp1El.textContent = data.daily[0].temp.day;
                    wind1El.textContent = data.daily[0].wind_speed;
                    humidity1El.textContent = data.daily[0].humidity;
                    // display forecast day 2 weatehr data
                    icon2El.innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png'>";
                    temp2El.textContent = data.daily[1].temp.day;
                    wind2El.textContent = data.daily[1].wind_speed;
                    humidity2El.textContent = data.daily[1].humidity;
                    // display forecast day 3 weather data 
                    icon3El.innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png'>";
                    temp3El.textContent = data.daily[2].temp.day;
                    wind3El.textContent = data.daily[2].wind_speed;
                    humidity3El.textContent = data.daily[2].humidity;
                    // display forecast day 4 weather data 
                    icon4El.innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png'>";
                    temp4El.textContent = data.daily[3].temp.day;
                    wind4El.textContent = data.daily[3].wind_speed;
                    humidity4El.textContent = data.daily[3].humidity;
                    // dispaly forecast day 5 weather data 
                    icon5El.innerHTML = "<img src='http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png'>";
                    temp5El.textContent = data.daily[4].temp.day;
                    wind5El.textContent = data.daily[4].wind_speed;
                    humidity5El.textContent = data.daily[4].humidity;
                });
            } else {
                alert("Error: OpenWeather couldn't connect");
            }
        })
    
}

getDate();



// event listener 
cityFormEl.addEventListener("submit", formSubmitHandler);

