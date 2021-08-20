const express = require('express');
const app = express();
console.log(this);

app.use(express.static('public'));

app.get('/:id', function (req, res) {
	res.send(req.params.id);
});

app.listen((port = 3000), 'localhost', () => {
	console.log(`listening on localhost:${port}`);
});
