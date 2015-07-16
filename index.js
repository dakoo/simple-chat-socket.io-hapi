var Hapi = require('hapi');
var ends = require('./endpoints');
var ports = require('./portconfig.json');

var server= new Hapi.Server();

server.connection(ports.page).route(ends.page);
server.connection(ports.chat).route(ends.chat);

server.start(function() {
    console.log('Server started');
});
