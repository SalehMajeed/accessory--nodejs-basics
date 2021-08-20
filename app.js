console.log('Oye');
setTimeout(() => {
	console.log('after 3 seconds');
}, 3);

let time = 0;
let timer = setInterval(() => {
	time += 2;
	console.log(`after every  ${time} seconds`);
	if (time > 5) {
		clearInterval(timer);
	}
}, 2000);

console.log(__dirname);
console.log(__filename);

function higher_order_function(fn) {
	fn('console.log called');
}

higher_order_function(console.log);
