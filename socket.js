const  socketIO  = require('socket.io')
const socket = {};

// function connect(server) {
//     socket.io = new Server(server);
    
// }

function connect(server) {
    socket.io = socketIO(server);
}

module.exports = {
    socket,
    connect
}
