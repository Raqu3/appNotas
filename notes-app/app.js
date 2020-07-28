const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
command:'add',
describe: 'add a new note',
builder:{
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe:'Note Body',
        demandOption: true,
        type: 'string'
    }
},
handler (argv){
    notes.addNote(argv.title, argv.body)
}
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler (){
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})

//add, remove, read and list notes
yargs.parse()
//console.log(yargs.argv)
