let form = document.querySelector("#form")

form.addEventListener("submit", (e)=> {
    e.preventDefault() // prevent reload behaviour
    let isValid = false; 

    //name check
    let username = document.querySelector("#username")
    let error = document.querySelector("#usernameError")

    if(username.value.trim("").length < 4  ){
        error.style.display = "block"; 
        error.innerHTML = "error : username too short!";
        username.classList.add("invalid");
        isValid = false;
    }else{
        error.innerHTML = ""
        error.style.display = "none"; 
        username.classList.remove("invalid");
        isValid = true;
    }

    //password
    let password = document.querySelector("#password")
    let passwordError = document.querySelector("#passwordError")

    if(password.value.length < 8){
        passwordError.style.display = "block"
        passwordError.innerHTML = "password too short!"
        password.classList.add("invalid");
        isValid = false;
    }else{
        passwordError.style.display = "none"
        passwordError.innerHTML = ""
        password.classList.remove("invalid")
        isValid = true;
    }

    //email check
    let email = document.querySelector("#email")
    let emailError = document.querySelector("#emailError")
    
    if(!email.value.includes("@")){
       emailError.innerHTML = "wrong email format"
       emailError.style.display = "block";
       email.style.border = "1px solid red"
    }
    else{
        emailError.style.display = "none"
        emailError.innerHTML = ""
        email.classList.remove("invalid")
        isValid = true;
    }


    if(isValid){
        alert("form submitted successfully!")
        form.reset();
    }else{
        alert("fill the correct inputs")
    }
})