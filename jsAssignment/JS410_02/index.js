
const input=document.getElementById("input")
const resultContainer=document.getElementById("resultContainer")

async function search() {
    const search=input.value
    const respons=await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${search}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data=await respons.json()
    console.log(data);
  

    resultContainer.innerHTML=`<p class="resultPara">${data[0].shortdef[0]}</p>`

}   