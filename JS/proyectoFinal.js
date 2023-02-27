//DOM
let divTrats = document.getElementById ("divTrats")
let selectOrdenar = document.getElementById ("selectOrdenar")
let btnComprarCarrito = document.getElementById ("btnComprarCarrito")
let modalBodyCarrito = document.getElementById ("modal-bodyCarrito")
let precioTotal = document.getElementById("precioTotal")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let coincidencia = document.getElementById("coincidencia")
let buscadorInputNav = document.getElementById ("buscadorInputNav")
let textoLoader = document.getElementById("textoLoader")
let loader = document.getElementById("loader")
let fecha = document.getElementById("fecha")
let hora = document.getElementById ("hora")
let inputNombre = document.getElementById ("inputNombre")
let inputEdad = document.getElementById ("inputEdad")
let inputEmail = document.getElementById ("inputEmail")
let formNuevoPaciente = document.getElementById ("formNuevoPaciente")
let btnGuardarPaciente = document.getElementById ("btnGuardarPaciente")
let inputEdadTips = document.getElementById ("inputEdadTips")
let btnTips = document.getElementById ("btnTips")

//Seteo en el storage del array del carrito (con condicional)
let productosEnCarrito = []
if(localStorage.getItem ("carrito")){
  for(let tratCarrito of JSON.parse(localStorage.getItem("carrito"))){
    let cantStorage = tratCarrito.cantidad
    let tratStorage = new Tratamiento (tratCarrito.id,tratCarrito.nombre, tratCarrito.precio, tratCarrito.metodo, tratCarrito.img)
    tratStorage.cantidad = cantStorage
    productosEnCarrito.push (tratStorage)
  }
}else{
  productosEnCarrito = []
  localStorage.setItem ("carrito",productosEnCarrito)
}


//Funcion con ciclo (for of) para recorrer el array e imprimir las cards en el body
function listaTratamientos (array){
    
    divTrats.innerHTML = ""
    for (let tratamiento of array){       
    
    let nuevoTratDiv = document.createElement ("div")
    nuevoTratDiv.className = "col-sm my-3"

    nuevoTratDiv.innerHTML = `
    <div id=${tratamiento.id} class="card" style="width: 18rem;">
        <img src="img/${tratamiento.img}" class="card-img-top img-fluid imgcard" style="height: 300px; alt="${tratamiento.nombre} con ${tratamiento.metodo}">
            <div class="card-body">
                <h5 class="card-title">${tratamiento.nombre}</h5>
                <p class="card-text">${tratamiento.metodo}</p>
                <p class="card-text ${tratamiento.precio <= 4200 && "fontOffer"}">$${tratamiento.precio}</p>
                <button id="agregarBtn ${tratamiento.id}"class="btn btn-secondary">Lo quiero!</button>
            </div>
    </div>
    `
    divTrats.appendChild (nuevoTratDiv)  
    let agregarBtn = document.getElementById (`agregarBtn ${tratamiento.id}`)
    agregarBtn.onclick = ()=>{

      agregarAlCarrito (tratamiento)

    }
}

}

listaTratamientos(arrayTratamientos)

// Funcion para el buscador del nav
function buscarPorTratamiento (buscado,array){
  let busqueda = array.filter(
      (tratamiento) => tratamiento.nombre.toLowerCase().includes(buscado.toLowerCase())
  )
  busqueda.length == 0 ? (coincidencia.innerHTML = `<h3>No hay coincidencias con la búsqueda!</h3>`, listaTratamientos(busqueda)) : (coincidencia.innerHTML = "", listaTratamientos(busqueda))

}

//Funciones para el select del nav
function ordenarMayorMenor (array){
  const mayorMenor = [].concat (array)
  mayorMenor.sort ((a,b)=> b.precio - a.precio)
  listaTratamientos (mayorMenor)
}

function ordenarMenorMayor (array){
  const menorMayor = [].concat (array)
  menorMayor.sort ((a,b)=> a.precio - b.precio)
  listaTratamientos (menorMayor)
}

function ordenarAlfabeticamenteTratamiento (array){
  const ordenAlfabetico = [].concat (array)
  ordenAlfabetico.sort ((a,b)=>{
    if(a.nombre > b.nombre){
      return 1
    }
    if(a.nombre < b.nombre){
      return -1
    } return 0

  } )

  listaTratamientos (ordenAlfabetico)
}

function bonusTips (){
  let edadIngresada = parseInt(inputEdadTips.value)
  if(edadIngresada <= 18){
    Swal.fire({
      title: 'Con una limpieza facial profunda lucirás muy bien!',
      icon: 'success',
      confirmButtonColor: 'violet',
      text: `Registrate para solicitar un turno y con gusto te atenderemos (diagnóstico sujeto a previa anamnesis)`,
    })
  }else if((edadIngresada > 18) && (edadIngresada <=25)){
    Swal.fire({
      title: 'Seguro necesitás una limpieza facial profunda, y si sumás un peeling mejor aún!',
      icon: 'success',
      confirmButtonColor: 'violet',
      text: `Registrate para solicitar un turno y con gusto te atenderemos (diagnóstico sujeto a previa anamnesis)`,
    })
  }else if((edadIngresada > 25) && (edadIngresada <=35)){
    Swal.fire({
      title: 'Recurrí a tratamientos con aparatología que dejarán tu piel tersa y delicada!',
      icon: 'success',
      confirmButtonColor: 'violet',
      text: `Registrate para solicitar un turno y con gusto te atenderemos (diagnóstico sujeto a previa anamnesis)`,
    })
  }else if(edadIngresada > 35){
    Swal.fire({
      title: 'Podés recurrir a tratamientos Antiage después de los cuales te verás renovada!',
      icon: 'success',
      confirmButtonColor: 'violet',
      text: `Registrate para solicitar un turno y con gusto te atenderemos (diagnóstico sujeto a previa anamnesis)`,
    })
  }else{
    Swal.fire({
      title: 'Incorrecto! Ingresa tu edad con números por favor',
      icon: 'success',
      confirmButtonColor: 'violet',
      text: `De esa manera podremos colaborar con tu consulta!`,
    })
  }
}

// Funcion para boton de registro de pacientes en el sistema
function registroPaciente(array){
  const nuevoPaciente = new Paciente (arrayPacientes.length+1, inputNombre.value, parseInt(inputEdad.value), inputEmail.value)
  arrayPacientes.push (nuevoPaciente)
  localStorage.setItem ("arrayPacientes", JSON.stringify(array))
  formNuevoPaciente.reset()
  Swal.fire({
    title: `Felicitaciones!`,
    text: `Ya pertenecés a nuestro sistema. Pronto serás atendido por Vanina`,
    icon: "success",
    confirmButtonText: "Gracias!",
    confirmButtonColor: "violet",
    timer: 3000,
    imageUrl: `img/Vani con ambo chica.jpeg`,
    imageHeight: 300 
 })
}

//Funcion para sumar los tratamientos al carrito de compras
function agregarAlCarrito (tratamiento){
  let tratAgregado = productosEnCarrito.find((trat)=> trat.id == tratamiento.id)
  if (tratAgregado == undefined){
    productosEnCarrito.push(tratamiento)
    localStorage.setItem ("carrito", JSON.stringify(productosEnCarrito))
    Swal.fire({
      title: `Felicitaciones! Estás a punto de adquirir nuestro servicio:`,
      text: `${tratamiento.nombre}`,
      icon: "success",
      confirmButtonText: "Gracias!",
      confirmButtonColor: "violet",
      timer: 3000,
      imageUrl: `img/${tratamiento.img}`,
      imageHeight: 200 
   })
  }else{
    Swal.fire({
      title: `${tratamiento.nombre} ya se encuentra en el carrito de compras`,
      text: `Para adquirir más de una sesión del mismo tratamiento, podés sumarlo en el carrito`,
      icon: "info",
      timer: 3000,
      showConfirmButton: false
    })
  }
}

// Funcion para visualizar los tratamientos en el modal del carrito
function cargarProductosEnCarrito (array){
  modalBodyCarrito.innerHTML = ""
  array.forEach ((tratCarrito)=>{

    // Metodo forEach para visualizar tratamiento/s en el carrito
    modalBodyCarrito.innerHTML += `
    <div class="card border-primary mb-3" id ="tratCarrito${tratCarrito.id}" style="max-width: 540px;">
            <img class="card-img-top" height="300px" src="img/${tratCarrito.img}" alt="${tratCarrito.nombre}">
            <div class="card-body">
                    <h4 class="card-title">${tratCarrito.nombre}</h4>
                    <p class="card-text">Precio unitario: $${tratCarrito.precio}</p>
                    <p class="card-text">Total de unidades: ${tratCarrito.cantidad}</p> 
                    <p class="card-text">Subtotal: $${tratCarrito.precio * tratCarrito.cantidad}</p> 
                    <button class= "btn btn-success" id="botonSumarUnidad${tratCarrito.id}"><i class=""></i>+1</button>
                    <button class= "btn btn-danger" id="botonRestarUnidad${tratCarrito.id}"><i class=""></i>-1</button> 
                    <button id="botonEliminar${tratCarrito.id}" class= "btn btn-danger" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg></button>
            </div>    
        </div>
    `

  })

  // Metodo forEach para eliminar/sumar/restar tratamiento/s del carrito
  array.forEach((tratCarrito)=>{
    document.getElementById (`botonEliminar${tratCarrito.id}`).addEventListener("click",()=>{
      let cardTratamiento = document. getElementById (`tratCarrito${tratCarrito.id}`)
      cardTratamiento.remove()
      let tratEliminar = array.find(tratamiento => tratamiento.id == tratCarrito.id)
      let posicion = array.indexOf(tratEliminar)
      array.splice (posicion,1)
      localStorage.setItem ("carrito", JSON.stringify (array))
      totalCompra (array)
    })
    document.getElementById(`botonSumarUnidad${tratCarrito.id}`).addEventListener("click",()=>{
      tratCarrito.sumarUnidad ()
      localStorage.setItem("carrito",JSON.stringify(array))
      cargarProductosEnCarrito (array)
    })
    document.getElementById(`botonRestarUnidad${tratCarrito.id}`).addEventListener("click", ()=>{
      let cantidad = tratCarrito.restarUnidad()
      if(cantidad < 1){
      let cardTratamiento = document.getElementById(`tratCarrito${tratCarrito.id}`)
      cardTratamiento.remove()
      let posicion = array.indexOf(tratCarrito)
      array.splice(posicion,1)
      localStorage.setItem("carrito",JSON.stringify(array))
      totalCompra(array)
      }else{
        localStorage.setItem("carrito",JSON.stringify(array))
      }
      cargarProductosEnCarrito (array)
    }) 
  })
  totalCompra (array)
}

// Función para calcular el total de la compra de tratamientos
function totalCompra (array){
  let total = array.reduce ((accum,tratCarrito) => accum + (tratCarrito.precio*tratCarrito.cantidad), 0)
  total == 0 ? precioTotal.innerHTML = `No hay tratamientos agregados` : precioTotal.innerHTML = `El total de la compra es <strong>$${total}</strong>`
  return total

}

// Funcion para botón Finalizar compra del carrito
function finalizarCompra (array){
  Swal.fire({
    title: 'Usted quiere finalizar la compra?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Sí, quiero!',
    cancelButtonText: 'No, no quiero',
    confirmButtonColor: 'violet',
    cancelButtonColor: 'grey',
}).then( (result)=> {
        if(result.isConfirmed){
            let totalFinalizar = totalCompra(array)
            Swal.fire({
                title: 'Genial! Ya puede solicitar turno.',
                icon: 'success',
                confirmButtonColor: 'violet',
                text: `Muchas gracias por elegir nuestros servicios! El total a abonar es de $${totalFinalizar}`,
                })
            productosEnCarrito = []
            localStorage.removeItem("carrito")    
            
        }else{
            Swal.fire({
                title: 'Compra no realizada!',
                icon: 'info',
                text: `Atención! Sus productos siguen en el carrito de compras`,
                confirmButtonColor: 'violet',
                timer:3500
            })
        }
})
}


//EVENTOS

// Input del nav que busca tratamiento por coincidencia
buscadorInputNav.addEventListener ("input", ()=> {
  buscarPorTratamiento (buscadorInputNav.value.toLowerCase(),arrayTratamientos)
})

//Select del nav
selectOrdenar.addEventListener ("change",()=> {
  if(selectOrdenar.value == "1"){
    ordenarMayorMenor (arrayTratamientos)
  }else if (selectOrdenar.value == "2"){
    ordenarMenorMayor (arrayTratamientos)
  }else if (selectOrdenar.value == "3"){
    ordenarAlfabeticamenteTratamiento (arrayTratamientos)
  }else{
    listaTratamientos(arrayTratamientos)
  }
})

// Boton de registro de paciente nuevo del nav
btnGuardarPaciente.addEventListener ("click", ()=> {
  registroPaciente(arrayPacientes)
})

// Boton comprar del nav
btnComprarCarrito.addEventListener ("click", ()=> {
  cargarProductosEnCarrito (productosEnCarrito)
})

// Boton finalizar compra del modal del carrito 
botonFinalizarCompra.addEventListener("click", ()=>{
  
  if(productosEnCarrito == ""){
    Swal.fire({
      title: 'El carrito esta vacío',
      icon: 'info',
      text: `No hay compra por finalizar`,
      confirmButtonColor: 'green',
      timer:3500
    })
  }else{
    finalizarCompra(productosEnCarrito)
  }
})

// Boton Tip del modal del bonus
btnTips.addEventListener("click", ()=>{
  bonusTips ()
})


//Loader
setTimeout(()=>{
  textoLoader.innerText = ""
  loader.remove()
  listaTratamientos(arrayTratamientos)
},2500)

//Fecha y hora con libreria luxon
const DateTime = luxon.DateTime
const fechaHoy = DateTime.now()
let fechaMostrar = fechaHoy.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
fecha.innerHTML = `${fechaMostrar}`

setInterval(()=>{
  let horaActual = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE)
  hora.innerHTML = `${horaActual}`
}, 1000)

