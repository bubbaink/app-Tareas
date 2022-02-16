const tareas = require("./tareas.json")

const fs = require ("fs");

const guardarJSON = (tareas) => {
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,3));
    return null
}
const mostrarTareas = (tareas) => {
    tareas.forEach((tarea,index) => {
        console.log(`${index + 1} - ${tarea.descripcion} - estado: ${tarea.estado} - ID: ${tarea.id}`);
    });
}


module.exports = {

    listarTareas : () =>{
       mostrarTareas(tareas)
       return null
  
    },

    Tarea : (tarea) => {

        tareas.push(tarea)
        guardarJSON(tareas)
        
        return console.log('Tarea Agregada');
    },
    ActualizarTarea : (id) => {

        let check = tareas.filter(tarea => tarea.id === id);

        if(check.length === 0){
            return console.log('ID inexistente!!');
        }


        let tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.estado = "completado";
                return tarea 
            }
                return tarea
            
        })

        guardarJSON(tareasActualizadas)

        return console.log("Tarea Actualizada");
    },
    eliminarTarea : (id) => {
        let tareasFiltdradas = tareas.filter(tarea => {
            return tarea.id !== id
        })

       guardarJSON(tareasFiltdradas)

                
        return console.log('Tarea elimindada');
    },
    filtrarTareas : (estado) => {

        let estadosValidos = ['completado','en proceso', 'pendiente'];

        if(!estadosValidos.includes(estado)){
            return console.log('Estado no válido', estadosValidos);
        }

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado === estado
        });

       mostrarTareas(tareasFiltradas)
        return null

    },
    buscarTarea : (keyword)=>{
        let resultado = tareas.filter(tarea => {
            return tarea.descripcion.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())

        })
        mostrarTareas(resultado);
        return null;
    }

}
