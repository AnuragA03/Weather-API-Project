const API_KEY = "0a2a7a2f12847503faa507ad30f952e7";

//ERROR : this function is not working 
function renderWeatherInfo(){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function showWeather() {

    try{
        let city = "goa";
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();

        console.log("Weather data => ", data); 

        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        document.body.appendChild(newPara);

    }

    catch(err){
        //handle the error
        console.log("Wrong Input", err);
    }
   
}   

async function getCustomWeatherDetails(){
    try{
        let lat = 44.34;
        let lon = 10.99;

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        let data = await response.json();

        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        document.body.appendChild(newPara);
    }

    catch(err){
        console.log("Error", err);
    }

    
}