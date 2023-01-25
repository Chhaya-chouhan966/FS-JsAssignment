
const input=document.getElementById("input")
const dataContainer=document.getElementById("dataContainer")

async function submit() {
   const location=input.value

   const respons=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
   const data = await respons.json()
   console.log(data);

   dataContainer.innerHTML=`<div class="ResultContainer">
             <h2 id="head2">Wheather of ${location}</h2>
             <h3 class="skyCondition">Sky Condition: ${data.weather[0].description}</h3>
             <h3 class="temp">Tempreature: ${data.main.temp} C</h3>
             <h3 class="speed">Wind Speed: ${data.wind.speed} km/h</h3>
              
             </div>`


}

