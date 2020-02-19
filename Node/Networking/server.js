const server = require('net').createServer();
let counter = 0;
let sockets = {}; 

server.on('connection', socket=>{   // it is duplex connection (that is, we can read and write both)
    socket.id = counter++;
    sockets[socket.id] = socket;

    console.log('Client connected');
    socket.write('Welcome new client\n');
    // socket.setEncoding('utf8');
    socket.on('data', data => {
        Object.entries(sockets).forEach(([, cs]) => {
            cs.write(`${socket.id}: `);
            cs.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected');
    })
});

server.listen(8000, () => console.log('Server bound'));