
const input=document.getElementById("input")
const resultContainer=document.getElementById("resultContainer")

async function enter() {
    resultContainer.innerHTML=""
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    const data=await response.json()

         const arr=[]
         data.meals.map((ele)=>{
            arr.push(ele.strMealThumb)
        })

        arr.map((ele)=>{
           
                resultContainer.innerHTML+=`<img id="img" src="${ele}" alt="">`     
            
        })


}