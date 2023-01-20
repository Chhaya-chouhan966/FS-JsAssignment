
var counter=0;
const resultDiv = document.getElementById("resultDiv")
function search() {
    
   
    const firstName = document.getElementById("firstName").value
    const LastName = document.getElementById("LastName").value
    const country = document.getElementById("country").value
    const score = document.getElementById("score").value

    if (firstName=="" || LastName=="" || country=="" || score=="" ) {
        resultDiv.innerHTML =`<p  class="para">All fields are required</p>`
    }else{
    
        resultDiv.innerHTML +=`<div class="innerDiv" id="innerDiv${counter}">
                             <div class="del name">${firstName+" "+LastName}</div>
                             <div class="del country">${country}</div>
                             <div class="del score" id="sco${counter}" >${score}</div>
                             <div onclick="delFunc(${counter})" class="del delet hi"><i class="fa-solid fa-trash-can"></i></div>
                             <div onclick="plusFiveFunc(${counter})" id="plusFive" class="del delet">+5</div>
                             <div onclick="minusFiveFunc(${counter})" class="del delet">-5</div>

                           </div>`  
          
           counter=counter+1;
    } 
    document.getElementById("firstName").value=""
    document.getElementById("LastName").value=""
    document.getElementById("country").value=""
    document.getElementById("score").value=""
}

function delFunc(counter) {
    const innerDiv=document.getElementById(`innerDiv${counter}`)
    innerDiv.remove()
}
function plusFiveFunc(counter) {
    const score=document.getElementById(`sco${counter}`)
    score.innerText = +score.innerText+5
}
function minusFiveFunc(counter) {
    const score=document.getElementById(`sco${counter}`)
    score.innerText = +score.innerText-5
}

    
