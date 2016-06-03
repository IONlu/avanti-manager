const server = require('http').createServer();
const io = require('socket.io')(server);
const commandLineArgs = require('command-line-args');

const optionDefinitions = [{
    name: 'port',
    alias: 'p',
    type: Number
}];
const options = commandLineArgs(optionDefinitions);


io.on('connection', function(socket) {
    console.log('connect');
    socket.on('disconnect', () => console.log('disconnect'));
});
server.listen(options.port || 3000);

console.log('listening on: ' + options.port || 3000);
