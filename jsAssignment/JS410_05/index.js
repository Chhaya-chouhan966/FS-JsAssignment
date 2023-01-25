

nextstep()
async function nextstep(){
 const response = await fetch("https://api.quotable.io/random")//response
 const data = await response.json();
 console.log(data);
 const para = document.getElementById("show_text")
 para.innerHTML = ` " ${data.content}"`;
 para.style.fontSize = "30px"
 para.style.display = "flex"
 para.style.justifyContent="center"
 const author = document.getElementById("author_text");
 author.innerHTML = `" ~ ${data.author}"`
 author.style.textAlign = "center";
 console.log(author);
}