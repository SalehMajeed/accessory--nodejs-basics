const fs = require('fs');
const read_stream = fs.createReadStream(__dirname + '/read.html', 'utf-8');
const write_stream = fs.WriteStream(__dirname + '/chunk.html');

read_stream.on('data', function (chunk) {
	console.log('new chunk received \n');
	write_stream.write(chunk);
});
