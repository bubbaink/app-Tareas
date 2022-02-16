const process = require("process")
const {buscarTarea,listarTareas,ActualizarTarea,Tarea,eliminarTarea, filtrarTareas} = require("./appex");

const action = process.argv[2];

switch (action) {
    case "listar":
        listarTareas()
        
        break;
    case "agregar":
        let descripcion = process.argv[3];
        let nuevaTarea = {
            id : new Date().getTime(),
            descripcion,
            estado : "pendiente"
        }
        Tarea(nuevaTarea)
        break;
    case "actualizar":
        ActualizarTarea(+process.argv[3])
        break;
    case "eliminar":
        eliminarTarea(+process.argv[3])
        break;
    case undefined:
        console.log("Por favor, indicar una accion");
        break;
    case "filtrar":
       filtrarTareas(process.argv[3])
       break;
    case "buscar":
       buscarTarea(process.argv[3])
       break;  
    default:
        console.log("Accion no permitida/No reconocida");
        break;
}

