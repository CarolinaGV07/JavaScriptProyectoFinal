// CLase constructora de tratamientos 
class Tratamiento {
    constructor (id, nombre, precio, metodo, img){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.metodo = metodo,
        this.img = img,
        this.cantidad = 1
    }
  // Metodos
    sumarUnidad (){
        this.cantidad += 1
    }
    restarUnidad (){
        this.cantidad = this.cantidad - 1
        return this.cantidad
    }

}

// Creacion de array de tratamientos
let arrayTratamientos = []

const cargarTratamientos = async () => {
    const response = await fetch("tratamientos.json")
    const data = await response.json()
    for(let tratamiento of data){
        let tratNuevo = new Tratamiento (tratamiento.id, tratamiento.nombre, tratamiento.precio, tratamiento.metodo, tratamiento.img)
        arrayTratamientos.push(tratNuevo)
}
    localStorage.setItem("arrayTratamientos", JSON.stringify(arrayTratamientos))
}

//Condicional para el storage
if (localStorage.getItem ("arrayTratamientos")){

    for(let tratamiento of JSON.parse (localStorage.getItem ("arrayTratamientos"))){
        let tratStorage = new Tratamiento(tratamiento.id, tratamiento.nombre, tratamiento.precio,tratamiento.metodo, tratamiento.img)
        arrayTratamientos.push(tratStorage)
    }
}else {
    cargarTratamientos ()
}


// Clase constructora de pacientes
class Paciente {
    constructor (id, nombreCompleto, edad, eMail){
        this.id = id,
        this.nombre = nombreCompleto,
        this.edad = edad,
        this.eMail = eMail
    }
}

// Creacion de array de pacientes
let arrayPacientes = []

if (localStorage.getItem ("arrayPacientes")){
    
    for (let paciente of JSON.parse(localStorage.getItem ("arrayPacientes"))){
        let pacienteStorage = new Paciente (paciente.id, paciente.nombre, paciente.edad, paciente.eMail)
        arrayPacientes.push (pacienteStorage)  
    }
}else{
    localStorage.setItem("arrayPacientes", JSON.stringify(arrayPacientes))
}