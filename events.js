var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Person = function(name){
    this.name = name;
};
util.inherits(Person, EventEmitter);
var ben = new Person("Benjamin Franklin");
ben.on('speak', function(said){
    console.log(`${this.name} : ${said}`);
});
ben.emit('speak', "Knowledge invetment will have the best benefits");