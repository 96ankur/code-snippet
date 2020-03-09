const server = require('net').createServer();
let counter = 0;
let sockets = {}; 

function timeStamp(){
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

server.on('connection', socket=>{   // it is duplex connection (that is, we can read and write both)
    socket.id = counter++;

    console.log('Client connected');
    socket.write('Please enter your name: ');
    // socket.setEncoding('utf8');
    socket.on('data', data => {
        if(!sockets[socket.id]){
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;;
            return;
        }
        Object.entries(sockets).forEach(([key, cs]) => {
            if(socket.id == key) return;
            cs.write(`${socket.name} ${timeStamp()}: `);
            cs.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected');
    })
});

server.listen(8000, () => console.log('Server bound'));