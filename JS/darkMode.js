let darkMode = document.getElementById ("darkMode")

if(localStorage.getItem("modoOscuro")){
    if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
        darkMode.innerText = `LightMode`
        darkMode.className = `btn btn-light`
    }
}else{
    localStorage.setItem("modoOscuro", false)
}

darkMode.addEventListener("click", ()=>{
    
    document.body.classList.toggle("darkMode")

    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
        darkMode.innerText = `LightMode`
        darkMode.className = `btn btn-light`
        localStorage.setItem("modoOscuro", true)
    }else{
        darkMode.innerText = `DarkMode`
        darkMode.className = `btn btn-dark`
        localStorage.setItem("modoOscuro", false)
    }
})

