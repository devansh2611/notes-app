const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { listNotes, readNote } = require('./notes.js')

//console.log(process.argv)

//Customise the verison
yargs.version('1.1.0')

// Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        body:{
            describe: 'Note body',
            demandOption:true,
            type: 'string',

        },
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
 
// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command:'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
        console.log(chalk.blue.inverse('Listed out all notes'))
    }
})


// Create read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})

// add, remove ,read ,list0
yargs.parse()
//console.log(yargs.argv)






