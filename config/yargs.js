const { describe } = require('yargs');




const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: 10,
                    describe: 'Este es el numero hasta donde quieres la tabla'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b) ) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

                module.exports = argv;