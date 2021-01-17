const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea'
};

const argv = require('yargs')
                    .command('crear', 'Crear una tarea por hacer', {
                        descripcion
                    })
                    .command('actualizar', 'Atualizar el estado completado de una tarea', {
                        descripcion,
                        completado 
                    })
                    .command('borrar', 'Eliminar una tarea por hacer', {
                        descripcion
                    })
                    .help()
                    .argv; 

module.exports = {
    argv
}