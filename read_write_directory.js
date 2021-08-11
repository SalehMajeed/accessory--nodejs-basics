const fs = require('fs');
const sync_name = 'directory from synchronous';
const async_name = 'directory from asynchronous';

// read directory synchronously
const dir_names = fs.readdirSync(__dirname, 'utf-8');
console.log('from synchronous \n ', dir_names, '\n');

// read directory asynchronously
fs.readdir(__dirname, 'utf-8', function (err, files) {
	if (err) {
		return err;
	}
	console.log('from asynchronous \n ', files, '\n');
});

function create_directory() {
	// create directory synchronously
	fs.mkdirSync(__dirname + '/' + sync_name, { recursive: true });

	// create directory asynchronously
	fs.mkdir(__dirname + '/' + async_name, { recursive: true }, function (err, str) {
		if (err) {
			return err;
		}
		console.log(str);
	});
}

function remove_directory(name = '/') {
	// remove directory synchronously
	fs.rmdirSync(__dirname + name + sync_name, { recursive: true });

	// remove directory asynchronously
	fs.rmdir(__dirname + name + async_name, function () {
		console.log('done');
	});
}

function rename_directory() {
	// clear renamed directories
	// remove_directory('/renamed ');

	// rename directory synchronously
	fs.renameSync(sync_name, `renamed ${sync_name}`);

	// rename directory asynchronously
	fs.rename(async_name, 'renamed ' + async_name, function (err) {
		if (err) {
			return err;
		}
		console.log('renamed successfully');
	});
}
