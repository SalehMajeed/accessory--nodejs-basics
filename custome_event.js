const events = require('events');
const utils = require('util');
const my_emitter = new events.EventEmitter();

my_emitter.on('someEvent', function (e) {
	console.log(e);
});

my_emitter.emit('someEvent', 'event was emmited');

const Person = function (name) {
	this.name = name;
};

utils.inherits(Person, events.EventEmitter);

const people = [];
people[0] = new Person('Person1');
people[1] = new Person('Person2');
people[2] = new Person('Person3');

people.forEach(person => {
	person.on('Speak', function (msg) {
		console.log(msg);
	});
});

people.forEach(person => {
	person.emit('Speak', person.name);
});
