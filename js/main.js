let d = id => document.getElementById(id);


function ucitaj() {
    
    let grad = d('location').value;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+grad+'&APPID=7646f7548ba1b2c60b152bfe7750967d';
    fetch(url)
    .then(function (request) {
        return request.json();
    })
      .then(result => {
        console.log(result.main.temp);
        d('ispis').innerText = `Vremenska prognoza za ${result.sys.name} je ${(result.main.temp-273.15).toFixed(1)} stepeni.`
       
      })
  }
  
  d('find').addEventListener('click', ucitaj)



 