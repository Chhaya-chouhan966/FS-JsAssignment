
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

  const other=document.getElementById("other")
  const weekly_data=["sunday", "monday", "tuesday", "wednsday", "thrusday", "friday", "satarday"]

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  for (let i = 0; i < weekly_data.length; i++) {
       const day=new Date()
       console.log(day);
    //    var datas=weekly_data[day.getDay()]
    //    console.log(datas);

    
    other.innerHTML=`    <h4 class="head4">${input.value}</h4>
                         <h4 class="head4">${weekly_data[day.getDay()]}</h4>
                         <h4 class="head4">${day.getDate()} ${months[day.getMonth()+1]} ${day.getFullYear()}</h4>
                         <h4 class="head4">${day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()}</h4>
                         <h4 class="head4">${day}</h4>
                         `
  }  
  
  
}

