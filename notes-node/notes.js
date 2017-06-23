console.log('Starting notes.js');

const fs = require('fs');
const _ = require("lodash");
const file = 'notes-data.json';

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync(file);
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
let saveNotes = (notes) => {
    fs.writeFileSync(file, JSON.stringify(notes))
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {title, body};

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getNote = (title) => {
    let notes = fetchNotes();
    return notes.filter((note) => note.title === title)[0];
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length
};

let getAll = () => {
    let notes = fetchNotes();
    if (notes.length === 0) {
        console.log("NO NOTES!");
        return
    }
    _.forEach(notes, (note) => {
        logNote(note)
    })
};

let logNote = (note) => {
    console.log(`-----------------------------
    Title: ${note.title}
    Body: ${note.body}
-----------------------------`);
};

module.exports = {
    addNote,
    getNote,
    removeNote,
    getAll,
    logNote,
};
