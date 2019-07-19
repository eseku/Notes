const fs = require( 'fs' );
const chalk = require( 'chalk' );
const yargs = require( 'yargs' );
const notes = require( './notes.js' );


//Create add command
yargs.command( {
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: 'true',
			type: 'string'
		},
		body: {
			describe: 'Note Body',
			demandOption: 'true',
			type: 'string'

		}
	},
	handler( argv ) {
		notes.addNote( argv.title, argv.body );
	}
} );

//create remove command
yargs.command( {
	command: 'remove',
	describe: 'Remove a note',

	handler( argv ) {
		notes.removeNote( argv.title );
	}
} );

//create list command
yargs.command( {
	command: 'list',
	describe: 'List All Notes',
	handler( argv ) {
		notes.listNotes();
	}
} );

//create read command
yargs.command( {
	command: 'read',
	describe: 'open and read a note',
	handler( argv ) {
		notes.readNote( argv.title );

	}
} );
yargs.parse();