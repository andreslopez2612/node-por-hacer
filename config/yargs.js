const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcon de la tarea por hacer'
};
const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado})
    .command('borrar','Borra un dato existente',{
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Borrar una tarea existente'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}