function getData(){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'text';
  xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/city?id=5128581&APPID=19dff603cfa465a0f1e56370746d97ff&units=imperial');

  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);

    renderHTML(data);
  }
  xhr.send();
};

function renderHTML(theData) {
  var weather = document.getElementById('weatherDesc');
  weatherLowerCase = theData.list[0].weather[0].description;
  weather.innerHTML = weatherLowerCase.charAt(0).toUpperCase() + weatherLowerCase.slice(1);
  
  var temp = document.getElementById('temp');
  temp.innerHTML = Math.round(theData.list[0].main.temp);

  var wind = document.getElementById('wind');
  wind.innerHTML = Math.round(theData.list[0].wind.speed);

};

getData();