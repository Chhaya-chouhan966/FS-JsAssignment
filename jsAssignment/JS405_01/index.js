const countryLength = document.getElementById("countryLength")
countryLength.innerHTML = `Currently, we have ${countries_data.length} countries`

var sort = countries_data.sort((a, b) => {
    return b.population - a.population
})


var totalPopulation = 0;
for (let i = 0; i < countries_data.length; i++) {
    totalPopulation +=countries_data[i].population
}

var result = document.getElementById("result")

function population() {

    result.innerHTML=""

    var paraTenTop=document.getElementById("paraTenTop")
    paraTenTop.innerHTML="10 Most populated countries in the world"
    
    for (let i = 0; i < 100; i++) {

        var countriesDetailsDiv = document.createElement("div")
        countriesDetailsDiv.classList.add("countriesDetailsDiv")

        var countriesName = document.createElement("div")
        countriesName.classList.add("countriesName")
        countriesName.innerHTML = `${sort[i].name}`
        countriesDetailsDiv.appendChild(countriesName)
        result.appendChild(countriesDetailsDiv)


        var countriesPer = document.createElement("div")
        countriesPer.classList.add("countriesPer")
        var perDiv=document.createElement("div")
        perDiv.classList.add("perDiv")
        countriesPer.appendChild(perDiv)
        var percentage=(sort[i].population/totalPopulation)*100
        perDiv.style.width=`${percentage}%`
        perDiv.style.backgroundColor="orange"
        perDiv.innerHTML=`${percentage.toFixed(2)}%`
        countriesDetailsDiv.appendChild(countriesPer)



        var People = document.createElement("div")
        People.classList.add("People")
        People.innerHTML = `${sort[i].population}`
        countriesDetailsDiv.appendChild(People)

    }

}

function language() {
    result.innerHTML=""

    var paraTenTop=document.getElementById("paraTenTop")
    paraTenTop.innerHTML="10 Most populated language in world"

    const langArr=[]
    countries_data.map((ele)=>{
        langArr.push(ele.languages)
    })

    const flatArr=langArr.flat()
    
    const obj={}

    flatArr.map((ele) =>{
        obj[ele]=(obj[ele] || 0) +1
    })

    const objToArr=Object.entries(obj)

    sortLang=objToArr.sort((a,b)=>{
       return b[1]-a[1]
    })
    
   console.log(sortLang);


    for (let i = 0; i < sortLang.length; i++) {
          
        var countriesDetailsDiv = document.createElement("div")
        countriesDetailsDiv.classList.add("countriesDetailsDiv")

        var countriesName = document.createElement("div")
        countriesName.classList.add("countriesName")
        countriesName.innerHTML += `${sortLang[i][0]}`
        countriesDetailsDiv.appendChild(countriesName)
        result.appendChild(countriesDetailsDiv)


        var countriesPer = document.createElement("div")
        countriesPer.classList.add("countriesPer")
        var perDiv=document.createElement("div")
        perDiv.classList.add("perDiv")
        countriesPer.appendChild(perDiv)
        var percentage=(sortLang[i][1]/sortLang.length)*100
        perDiv.style.width=`${percentage}%`
        perDiv.style.backgroundColor="orange"
        perDiv.innerHTML=`${percentage.toFixed(2)}%`
        countriesDetailsDiv.appendChild(countriesPer)



        var People = document.createElement("div")
        People.classList.add("People")
        People.innerHTML = `${sortLang[i][1]}`
        countriesDetailsDiv.appendChild(People)
        
    }

    




   


}

// var hi=[
//     {
//         "name":"world",
//         "pop": function hello() {
//                       var element=0;
//                        for (let i = 0; i < countries_data.length; i++) {
//                            var str =+(countries_data[i].population)
//                            element+=str
//                         }
//                       return element;
//                     }
//     }
// ]
// console.log(hi[0].pop());