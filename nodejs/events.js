/*
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("Connection Successful");
    eventEmitter.emit('data-received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data-received',function() {
    console.log('Data received');
})
eventEmitter.emit('connection');
*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

//listeners
var listener1 = function listener1() {
    console.log("Listener 1 executed")
}
var listener2 = function listener2() {
    console.log("Listener 2 executed")
}

//binding
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" listeners are active");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('Listener 1 is offline');

eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" listeners are active");
console.log('Program ended');