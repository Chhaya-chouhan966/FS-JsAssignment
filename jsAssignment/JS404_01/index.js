const planet = [
    { planetName: "Sun", gravity: 27.9, image: "img/sun.png" },
    { planetName: "Mercury", gravity: 3.77, image: "img/mercury.png" },
    { planetName: "Venus", gravity: 0.9032, image: "img/venus.png" },
    { planetName: "Earth", gravity: 1, image: "img/earth.png" },
    { planetName: "Mars", gravity: 0.3895, image: "img/mars.png" },
    { planetName: "Jupiter", gravity: 2.640, image: "img/jupitar.png" },
    { planetName: "Saturn", gravity: 1.139, image: "img/saturn.png" },
    { planetName: "Uranus", gravity: 0.917, image: "img/uranus.png" },
    { planetName: "Neptune", gravity: 1.148, image: "img/neptun.png" },
    { planetName: "Moon", gravity: 0.1655, image: "img/moon.png" },

]

const selectContainer = document.getElementById("selectContainer")
planet.map((ele) => {
    var options = document.createElement("option")
    options.innerHTML = ele.planetName
    options.value = ele.gravity
    options.setAttribute("imageSrc", ele.image)
    selectContainer.appendChild(options)

})
const resultContainer = document.getElementById("resultContainer")
const resultContainerInnerDiv = document.getElementById("resultContainerInnerDiv")

function calculateButton() {
    resultContainerInnerDiv.innerHTML = ""

    const weightInput = document.getElementById("weightInput").value
    const selectContainer = document.getElementById("selectContainer")

    const selectIndex = selectContainer.selectedIndex

    const selectOption = selectContainer.options[selectIndex]

    const gravity = +selectOption.value

    const mass = weightInput * gravity
    
    
    if (weightInput=="") {
        resultContainerInnerDiv.innerText="Your mass is empty"
    }else if (weightInput<=0) {
        resultContainerInnerDiv.innerText="Please enter the valid nomber"
    }else{
    const imageDiv = document.createElement("div")
    imageDiv.classList.add("imageDiv")
    const imgsrc=selectOption.getAttribute("imageSrc")
    const img=document.createElement("img")
    img.src=imgsrc
    imageDiv.appendChild(img)
    resultContainerInnerDiv.appendChild(imageDiv)
    

   
    const calculateResultDiv = document.createElement("div")
    calculateResultDiv.classList.add("calculateResultDiv")
    const headOneDiv=document.createElement("div")
    headOneDiv.classList.add("headOneDiv")
    headOneDiv.innerHTML=`The weight of the object an ${selectOption.innerHTML}`
    const headOne=document.createElement("h1")
    headOne.classList.add("headOne")
    headOne.innerHTML=`${mass} N`
    headOneDiv.appendChild(headOne)
    calculateResultDiv.appendChild(headOneDiv)
    resultContainerInnerDiv.appendChild(calculateResultDiv)

    }

    document.getElementById("weightInput").value=""

}



