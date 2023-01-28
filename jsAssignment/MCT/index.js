
const input=document.getElementById("input")
const resultContainer=document.getElementById("resultContainer")
const locate =document.getElementById("locate")
const temp=document.getElementById("temp")

async function search() {
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    const data=await response.json()

   
    locate.innerHTML=`  <img id="locateImg" src="./locations.png" alt=""> 
    <h1>Tempreture country ${input.value}, In</h1>`

    temp.innerHTML=`<div class="oneDiv">
                           <div class="divImg"> 
                              <img class="imgTemp" src="./fog.png" alt="">     
                           </div>
                           <div class="divTemp">
                               <h1 class="headTemp">${data.main.temp} C</h1>
                               <h4>tempreture</h4>
                               <h4>minimum temp:${data.main.temp_min}<br> maximum temp:${data.main.temp_max}</h4>
 
                           </div>
                     </div>
                     <div class="twoDiv">
                     <h4> Humidity : ${data.main.humidity}</h4>
                     <h4>Speed : ${data.wind.speed} km/h</h4>
                     <h4>Description : ${data.weather[0].description}</h4>
                     <h4>Feel like : ${data.main.feels_like}</h4>
                     
                     </div>`
}

