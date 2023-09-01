/* Metodo Get */

/* Estamos llamando la informacion de usuarios de mockAPI(GET) */
// let obtener =  async()=>{
//     let peticion = await fetch("https://64f202d40e1e60602d2490dd.mockapi.io/:endpoint/usuario");
//     let response = await peticion.json();
//     console.log(response);
// }

// obtener();


let enviar =  async()=>{
    let obj = {
            cedula: 91,
            nombre: "Juan",
            apellido: "Galan",
            edad: 13
    }
    let peticion = await fetch("https://64f202d40e1e60602d2490dd.mockapi.io/:endpoint/usuario", config);
    let response = await peticion.json();
    console.log(response);
}

enviar();