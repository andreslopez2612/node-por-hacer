const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch( comando ){
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();
        for(let lista of listado){
            console.log('Tarea: ' + colors.green(lista.descripcion));
            console.log('Estado: ' + colors.green(lista.completado));
        }
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado); 
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
    break;


    default:
        console.log('Comando no es reconocido');
}