const stream = require('stream')

class ResponseStream extends stream.Writable {
    constructor(socket) {
        super()
        this.socket = socket
    }

    _write(chunk, enc, next) {
        socket.write
        next()
    }
}