console.log('Starting notes.js');

let addNote = (title, body) => {
    console.log(`Adding note...
    Title: ${title}
    Body: ${body}`)
};

let getNote = (title) => {
    console.log("Reading note: " + title)
};

let removeNote = (title) => {
    console.log("Removing note: " + title)
};

let getAll = () => {
    console.log('Getting all notes')
};

module.exports = {
    addNote,
    getNote,
    removeNote,
    getAll,
};
