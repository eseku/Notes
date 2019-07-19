const fs = require( 'fs' );
const chalk = require( 'chalk' );
const getNotes = function () {
	return "Your notes...";
};
const error = chalk.red.inverse;
const success = chalk.green.inverse;
const head = chalk.yellow.inverse;
const subhead = chalk.yellow.bold;
const notebody = chalk.white;




const addNote = ( title1, body1 ) => {
	const notes = loadNotes();
	const duplicatenote = notes.filter( ( note ) => note.title === title1 );

	if ( duplicatenote.length === 0 ) {
		notes.push( {
			title: title1,
			body: body1
		} )
		saveNotes( notes );
		console.log( success( 'New Note added' ) );
	} else {
		console.log( error( 'Note title taken' ) );
	}

}

const removeNote = ( title1 ) => {
	// const title = title1;
	const notes = loadNotes();
	const duplicatenote1 = notes.filter( ( note ) => note.title !== title1 );
	if ( duplicatenote1.length === notes.length ) {
		console.log( error( 'Note not available' ) );
	} else {
		saveNotes( duplicatenote1 );
		console.log( success( 'Note successfully deleted' ) );
	}

}


const listNotes = () => {
	const notes = loadNotes();
	let count = 1;
	notes.forEach( ( note ) => {
		console.log( head( "Note " + count ) + subhead( "\nTitle: " ) + notebody( note.title ) + subhead( "\nBody: " ) + notebody( note.body ) );
		count++;
	} )
}


const readNote = ( title ) => {
	const notes = loadNotes();
	notes.forEach( ( note ) => {
		if ( title === note.title ) {
			console.log( subhead( 'Title: \n' ) + notebody( note.title ) + '\n' + subhead( 'Body: \n' ) + notebody( note.body ) );

		}
	} );

}



const saveNotes = ( notes ) => {
	const dataJSON = JSON.stringify( notes );
	fs.writeFileSync( './notes.json', dataJSON )
}

const loadNotes = () => {
	try {
		const datafrom = fs.readFileSync( 'notes.json' ).toString();
		return JSON.parse( datafrom );
	} catch ( e ) {
		return [];
	}

}


module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}