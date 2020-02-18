const EventEmitter = require('events');

class Server extends EventEmitter{

    constructor(client){
        super();
        this.tasks = {};
        this.taskId = 1
        client.on('command', (command, arg) => {
            switch(command){
                case 'help':
                case 'ls':
                case 'add':
                case 'delete':
                    this[command](arg);
                    break;
                default: 
                    this.emit('response', 'Unknown command received!!!')
            }
        })
    }

    taskString(){
        return Object.keys(this.tasks).map(key=>{
            return `${key}:${this.tasks[key]} `
        })
    }

    help(){
        this.emit('response', ` Avaliable commands:
        add task
        ls
        delete :id
        `);
    }

    ls(){
        this.emit('response', `Avaliable tasks: ${this.taskString()}`);
    }

    add(arg){
        this.tasks[this.taskId] = arg.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId++;
    }

    delete(arg){
        delete(this.tasks[args[0]])
        this.emit('response', `Deleted task ${arg[0]}`);
    }

}

module.exports = (client) => new Server(client);
