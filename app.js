//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//2d6f7897765aca4cdc385c1a193867bf


const weatherApi={
    key:"2d6f7897765aca4cdc385c1a193867bf",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

//Event listener and key press
const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event)=>{
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
});


//Get weather Report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText= `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML= `${weather.main.temp}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML= `${Math.floor(weather.main.temp_min)}&deg;C (min) / 
    ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText=`Description: ${weather.weather[0].description}`;


    let humidity = document.getElementById('humidity');
    humidity.innerText=`Humidity: ${weather.main.humidity}%`;

    let pressure = document.getElementById('pressure');
    pressure.innerText=`Pressure: ${weather.main.pressure} hPa`;

    let windSpeed = document.getElementById('wind-speed');
    windSpeed.innerText=`Wind Speed: ${weather.wind.speed} m/s`;
    
    let windDirection = document.getElementById('wind-direction');
    windDirection.innerText=`Wind Direction: ${weather.wind.deg} deg;`;

    let visibility = document.getElementById('visibility');
    visibility.innerText=`Visibility: ${weather.visibility} meter`;

    let image = document.getElementById('image');
    const id= weather.weather[0].id;
    if(id<211 && id>200)
        {
        image.src="ithunder.svg"
        }
        else if(id<300 && id>210)
        {
        image.src="ithunderstorm.svg"
        }

        else if(id<500 && id>300)
        {
        image.src="Drizzle.svg"
        }
        else if(id==500)
        {
        image.src="moderate-rain.svg"
        }
        else if(id<503 && id>500)
        {
        image.src="light-rain.svg"
        }
        else if(id<600 && id>503)
        {
        image.src="shower-rain.svg"
        }

        else if(id<603 && id>599)
        {
        image.src="light-snow.svg"
        }
        else if(id<621 && id>603)
        {
        image.src="rain-snow.svg"
        }
        else if(id<700 && id>621)
        {
        image.src="heavy-snow.svg"
        } 

        else if(id==701)
        {
        image.src="mist.svg"
        } 
        else if(id==711)
        {
        image.src="smoke.svg"
        } 
        else if(id==721)
        {
        image.src="haze.svg"
        } 
        else if(id==741)
        {
        image.src="foggy.svg"
        } 
        else if(id==762)
        {
        image.src="volcano.svg"
        } 

        else if(id==800)
        {
        image.src="sun.svg"
        } 
        
        
        else if(id==801)
        {
        image.src="few-cloud.svg"
        } 
        else if(id==802)
        {
        image.src="scattred-clouds.svg"
        } 
        else if(id==803)
        {
        image.src="broken-clouds.svg"
        } 
        else if(id==804)
        {
        image.src="overcust.svg"
        } 
    


    let date = document.getElementById('date');
    let todayDate =new Date();
    date.innerText = dateManage(todayDate);

    

}

//Data Manage
function dateManage(dateArg){
    
    var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months=["January","February","March","April","May","June","July","August",
    "September","October","November","December"];
    
    let year = dateArg.getFullYear();
    let month  =months[dateArg.getMonth()];
    let date =dateArg.getDate();
    let day =days[dateArg.getDay()];

    


    return `${date} ${month} (${day}), ${year}`;
    
}



