const countryLength = document.getElementById("countryLength")
countryLength.innerText = `Total Number of countries are ${countries.length}`

var result = []

countries.map((ele) => {
    result.push(ele.toLowerCase()) 
})


function startWith() {
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.innerHTML = ""

    var inputEle = document.getElementById("input")
    inputEle.setAttribute("onkeyup", "startWith()")
 
    
    var input = document.getElementById("input").value
   
    if (input == "") {
        mainContainer.innerHTML =`<div class="innerDiv">please enter the country</div>` 
    }
   else{
    const matchArr=[]
    result.map((ele) =>{
        const match=ele.startsWith(input.toLowerCase())
         
        if (match) {
            matchArr.push(ele)
            mainContainer.innerHTML +=`<div class="innerDiv">${ele}</div>`
        }  
    })
    const currentCountry=document.getElementById("currentCountry")
    currentCountry.innerHTML=`Number of countries starting word are ${matchArr.length}`
   }
}


function searchWithKey() {
        
    const mainContainer = document.getElementById("mainContainer")
    mainContainer.innerHTML = ""

    var inputEle = document.getElementById("input")
    inputEle.setAttribute("onkeyup", "searchWithKey()")
 
    
    var input = document.getElementById("input").value
   
    if (input == "") {
        mainContainer.innerHTML =`<div class="innerDiv">please enter the country</div>` 
    }
   else{
    const matchArr=[]
    result.map((ele) =>{
        const match=ele.includes(input.toLowerCase())
         
        if (match) {
            matchArr.push(ele)
            mainContainer.innerHTML +=`<div class="innerDiv">${ele}</div>`
        }  
    })
    const currentCountry=document.getElementById("currentCountry")
    currentCountry.innerHTML=`Number of countries starting word are ${matchArr.length}`
   }
}


