
const input = document.getElementById("input")
input.value = "geekster"
const resultContainer = document.getElementById("resultContainer")


async function hello() {

  const respons = await fetch("https://api.github.com/search/users?q=geekster")
  const data = await respons.json()

  data.items.map((ele) => {
    const profile = ele.html_url
    resultContainer.innerHTML += `<div class="profileDiv">
                                      <img id="profileDivImg" src="${ele.avatar_url}" alt="">
                                      <div class="profile">
                                      <h3 class="h3">${ele.login}</h3>
                                      <a  class="a" href="${ele.html_url}">Visit Profile</a>
                                      </div>
                                  </div>`
  })
}
hello()

 async function goButton() {
  const searchInput=input.value
  const respons = await fetch(`https://api.github.com/search/users?q=${searchInput}`)
  const data = await respons.json()

  resultContainer.innerHTML = ""
  console.log(data);


  data.items.map((ele) => {
    resultContainer.innerHTML += `<div class="profileDiv">
                                      <img id="profileDivImg" src="${ele.avatar_url}" alt="">
                                      <div class="profile">
                                      <h3 class="h3">${ele.login}</h3>
                                      <a  class="a" href="${ele.html_url}">Visit Profile</a>
                                      </div>
                                  </div>`
  })
}


 async function clearFunc() {
   resultContainer.innerHTML =""
   input.value="geekster"
   
   const respons = await fetch("https://api.github.com/search/users?q=geekster")
   const data = await respons.json()
   
   data.items.map((ele) => {
     const profile = ele.html_url
     resultContainer.innerHTML += `<div class="profileDiv">
                                       <img id="profileDivImg" src="${ele.avatar_url}" alt="">
                                       <div class="profile">
                                       <h3 class="h3">${ele.login}</h3>
                                       <a  class="a" href="${ele.html_url}">Visit Profile</a>
                                       </div>
                                   </div>`
   })
 }
   


