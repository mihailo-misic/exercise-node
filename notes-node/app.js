console.log('Starting app.js');

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes');

let title = {describe: 'Title of note', demand: true, alias: 't',};
let body = {describe: 'Body of note', demand: true, alias: 'b',};

const argv = yargs
    .command('add', 'Add a new note', {title, body})
    .command('list', 'List all notes')
    .command('read', 'Read a note', {title})
    .command('remove', 'Remove a note', {title})
    .help()
    .argv;
let command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note ${argv.title} has been saved.`);
        notes.logNote(note);
    } else {
        console.error(`ERROR: Note already exists!`)
    }
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log("Note " + argv.title + " not found!");
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? `Note "${argv.title}" has been removed` : `Note "${argv.title}" not found!`;
    console.log(message)
} else if (command === 'list') {
    notes.getAll()
} else {
    console.log('Command not recognized')
}
