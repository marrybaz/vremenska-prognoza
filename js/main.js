let d = id => document.getElementById(id);


function ucitaj() {
    
    let grad = d('location').value;
//    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+grad+'&APPID=7646f7548ba1b2c60b152bfe7750967d';
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+grad+'&units=metric&APPID=7646f7548ba1b2c60b152bfe7750967d';
    fetch(url)
    .then(function (request) {
        return request.json();
    })
      .then(result => {        
        let city = result.city;
        let forecast = result.list;
        let weather;
        let dt;        
        console.log(typeof forecast);
        d('ispis').innerHTML= `${city.name}<br>`;        
        forecast.forEach(function(element) {
            dt = new Date(element.dt*1000); // epoch to date
            console.log(element.weather);
            // Iz dokumentacije It is possible to meet more than one weather condition for a requested location. The first weather condition in API respond is primary.
            weather = element.weather[0]; // primary weather vidi https://openweathermap.org/weather-conditions
            d('ispis').innerHTML += `Vreme ${dt.toLocaleString("sr")} <br/> stepeni ${element.main.temp}  <br/>`
            d('ispis').innerHTML += `<img src="http://openweathermap.org/img/w/${weather.icon}.png" alt="${weather.description}"/><hr/>`            
        });

        

       
      })
  }
  
  d('find').addEventListener('click', ucitaj)



 