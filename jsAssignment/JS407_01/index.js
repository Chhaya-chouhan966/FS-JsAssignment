



const emojiArr=[]
function serchEmoji() {

    var container=document.getElementById("resContainer")
    container.innerHTML=""
   
    const input=document.getElementById("input").value
    if (input=="") {
        container.innerHTML =`<table>
                                     <tr>
                                         <td id="p">Please Enter Emoji Name Here!!!!!</td>
                                       </tr>   
                                </table>`                  
                                             
    }else{
       emojiList.map((ele) => {
             if (ele.tags.includes(input.toLowerCase())) {
                emojiArr.push(ele.tags)
                container.innerHTML +=`<table>
                                               <tr>
                                                   <td>${ele.emoji}</td>
                                                   <td>${ele.aliases}</td>
                                                   <td>${ele.description}</td>
                                                </tr>
                                         </table>`
             }
       })
    }  
    document.getElementById("input").value="" 
    
}
function serchEmojiKeyUp() {
    var container=document.getElementById("resContainer")
    container.innerHTML=""
   
    const input=document.getElementById("input").value
    if (input=="") {
        container.innerHTML =`<table>
                                     <tr>
                                         <td id="p">Please Enter Emoji Name Here!!!!</td>
                                       </tr>   
                                </table>`                  
                                             
    }else{
        const arr=[]
       emojiList.map((ele) => {
             ele.tags.map((element) => {
                    if (element.startsWith(input.toLowerCase())) {
                        arr.push(ele)
                      container.innerHTML +=`<table>
                                                    <tr>
                                                        <td>${ele.emoji}</td>
                                                        <td>${ele.aliases}</td>
                                                        <td>${ele.description}</td>
                                                     </tr>
                                              </table>`
                    }
                                     
             })
       })
}  
    
    
}