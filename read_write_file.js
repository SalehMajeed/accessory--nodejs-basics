const fs = require('fs');
const sync_name = 'new_sync_file.html';
const async_name = 'new_async_file.html';

// synchronous Read file
const data = fs.readFileSync(__dirname + '/read.html', 'utf-8');
console.log('synchronous read \n', data, '\n');

// asynchronous Read file
fs.readFile(__dirname + '/read.html', 'utf-8', function (err, data) {
	if (err) {
		return err;
	}
	console.log('asynchronous read \n', data, '\n');
});

function write_file() {
	// synchronous Write file
	fs.writeFileSync(__dirname + '/' + sync_name, data, { encoding: 'utf-8' });

	// synchronous Write file
	fs.writeFile(__dirname + '/' + async_name, data, { encoding: 'utf-8' }, function (err, res) {
		if (err) {
			return err;
		}
		console.log('res' + res);
	});
}

function remove_file(name = '/') {
	// synchronous file remove
	fs.unlinkSync(__dirname + name + sync_name);

	// asynchronous file remove
	fs.unlink(__dirname + name + async_name, function (err) {
		if (err) {
			return err;
		}
		console.log('removed');
	});
}

function rename_file() {
	// clear renamed filess
	// remove_file('/renamed ');

	// rename file synchronously
	fs.renameSync(sync_name, `renamed ${sync_name}`);

	// rename file asynchronously
	fs.rename(async_name, 'renamed ' + async_name, function (err) {
		if (err) {
			return err;
		}
		console.log('renamed successfully');
	});
}
