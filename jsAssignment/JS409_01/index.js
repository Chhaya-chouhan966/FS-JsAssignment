

function firstNameValidate() {

    const firstName = document.getElementById("firstName")
    const firstNameValidate = document.getElementById("firstNameValidate")

    if (firstName.value == "" || firstName.value.length < 3 || firstName.value.length > 16 || /^[a-zA-Z]*$/.test(firstName.value) == false) {
        firstNameValidate.innerHTML = "First name must be alphanumeric and contains 3-16 character"
        firstName.classList.add("errorRed")

    } else {
        firstNameValidate.innerHTML = ""
        firstName.classList.remove("errorRed")
    }
}
function lastNameValidate() {
    const lastName = document.getElementById("lastName")
    const lastNameValidate = document.getElementById("lastNameValidate")

    if (lastName.value == "" || lastName.value.length < 3 || lastName.value.length > 16 || /^[a-zA-Z]*$/.test(lastName.value) == false) {
        lastNameValidate.innerHTML = "First name must be alphanumeric and contains 3-16 character"
        lastName.classList.add("errorRed")

    } else {
        lastNameValidate.innerHTML = ""
        lastName.classList.remove("errorRed")
    }

}
function emailValidate() {
    const email = document.getElementById("email")
    const emailValidate = document.getElementById("emailValidate")

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false) {
        emailValidate.innerHTML = "Email must be a valid adderss, e.g. example@examle.com"
        email.classList.add("errorRed")
    } else {
        emailValidate.innerHTML = ""
        email.classList.remove("errorRed")
    }
}
function passwordValidate() {
    const password=document.getElementById("password")
    const passwordValidate=document.getElementById("passwordValidate")
    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password.value)==false) {
        passwordValidate.innerHTML=`Password should be alphanumrical,one uppercase,one lowecase and 
        one special charecter e.g.@#_ and 8-15 charecters`
        password.classList.add("errorRed") 
    }else{
        passwordValidate.innerHTML=""
        password.classList.remove("errorRed") 

    }
 
}

function telephoneValidate() {
    const telephone=document.getElementById("telephone")
    const telephoneValidate=document.getElementById("telephoneValidate")
     
    if (/^\d{10}$/.test( telephone.value)==false) {
        telephoneValidate.innerHTML="A valid telephone nomber(10 digit and 1234567890)"
        telephone.classList.add("errorRed")
    }else{
        telephoneValidate.innerHTML=""
        telephone.classList.remove("errorRed")
    }
}
function yourBioValidate() {
    const yourBio=document.getElementById("yourBio")
    const yourBioValidate=document.getElementById("yourBioValidate")
    if(yourBio.value=="" || (yourBio.value.length < 8  ) || /^[a-z0-9_@./#&+-]*$/.test(yourBio.value)==false){
        yourBioValidate.innerHTML="Bio must contain only lowercase letter and minimum charectr 8"
        yourBio.classList.add("errorRed")
    } else{
        yourBioValidate.innerHTML=""
        yourBio.classList.remove("errorRed")
    }
} 

function fromValidate() {
    
    if (firstName.value== "" || lastName.value=="" || email.value=="" || password.value=="" || telephone.value=="" || yourBio.value=="") {
        alert("please write the input")    
    }
    
}
