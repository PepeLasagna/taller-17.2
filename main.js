const miFormulario = document.getElementById('miFormulario')
let usuario = document.getElementById("name");
let email= document.getElementById("email");
let pass = document.getElementById("contraseña");
let adress= document.getElementById("direccion");
let country = document.getElementById("pais");
let regExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let genero = document.getElementById("genero")
let num = document.getElementById("num_puerta")



miFormulario.addEventListener("submit", (e)=>{
    let userValidity = usuario.checkValidity();
    let emailValidity = email.checkValidity();
    let passValidity = pass.checkValidity();
    let adressValidity = adress.checkValidity();
    let countryValidity = country.checkValidity();
    let genreValidity = genero.checkValidity();
    let numValidity = num.checkValidity();
    if(userValidity && emailValidity && passValidity && adressValidity && countryValidity && genreValidity && numValidity){
        alert("Formulario enviado con éxito!")
    } else {
        console.log("error")
        e.preventDefault()
    }
})

usuario.addEventListener("input", (e) => {
    if(!usuario.checkValidity()){
        usuario.setAttribute("class", "form-control is-invalid")
    } else {
        usuario.setAttribute("class", "form-control is-valid")}
});

email.addEventListener("input", (e) => {
    if (!regExp.test(email.value)) {
        email.setAttribute("class", "form-control is-invalid elemento");
    } else {
        email.setAttribute("class", "form-control is-valid elemento");
    }
});

pass.addEventListener("input", (e) => {
    if(!pass.checkValidity()){
        pass.setAttribute("class", "form-control is-invalid");
    } else {
        pass.setAttribute("class", "form-control is-valid elemento");
    }
});

adress.addEventListener("input", (e) => {
    if(!adress.checkValidity()){
        adress.setAttribute("class", "form-control is-invalid");
    } else {
        adress.setAttribute("class", "form-control is-valid elemento");
    }
});

genero.addEventListener("input", (e) => {
    if(!genero.checkValidity()){
        genero.setAttribute("class", "form-select elemento");
    }else{
        genero.setAttribute("class","form-control is-valid elemento" );
    }
});

country.addEventListener("input", (e) => {
    if(!country.checkValidity()){
        country.setAttribute("class", "form-select is-invalid elemento");
    }else{
        country.setAttribute("class","form-control is-valid elemento" );
    }
})

num.addEventListener("input", (e) => {
    if(!num.checkValidity()){
        num.setAttribute("class", "form-select is-invalid elemento");
    }else{
        num.setAttribute("class","form-control is-valid elemento" );
    }
})