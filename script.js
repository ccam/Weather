function getData(){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'text';
  //replace github with 
  xhr.open('GET', "https://api.wunderground.com/api/7c06c11b1ec1f632/forecast/geolookup/conditions/q/NY/New_York.json" );

  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    
    renderHTML(data);
  }
  xhr.send();
};

function renderHTML(theData) {
  //for .left 
  var pressure = document.getElementById('pressure');
  pressure.innerHTML = theData.current_observation.pressure_in;

  var vis = document.getElementById('vis');
  vis.innerHTML = theData.current_observation.visibility_mi;

  var windChill = document.getElementById('windChill');
  windChill.innerHTML = theData.current_observation.windchill_f;

  var dew = document.getElementById('dew');
  dew.innerHTML = theData.current_observation.dewpoint_f;

  var humidity = document.getElementById('humidity');
  humidity.innerHTML = theData.current_observation.relative_humidity;

  var rain = document.getElementById('rain');
  rain.innerHTML = Math.round(theData.current_observation.precip_1hr_in);

  var snow = document.getElementById('snow');
  snow.innerHTML = theData.forecast.simpleforecast.forecastday[0].snow_allday.in;

  //for .middle 
  var img = theData.forecast.txt_forecast.forecastday[0].icon_url;
  var icon = document.getElementById('icon');
  icon.innerHTML = '<img src="'+img+'">';

  var forecast = document.getElementById('forecast');
  forecast.innerHTML = theData.forecast.txt_forecast.forecastday[0].fcttext;

  var temp = document.getElementById('temp');
  temp.innerHTML = theData.current_observation.temp_f;
  
  var feelsTemp = document.getElementById('feelsTemp');
  feelsTemp.innerHTML = theData.current_observation.feelslike_f;
};

getData();