const stream = require('stream')

class Response extends stream.Writable{
    constructor(socket) {
        super()
        this.socket = socket
        this.body = ''
    }
    _write(chunk, enc, next) {

        next()
    }
    set statusCode(code) {

    }
    setHeaders() {

    }
    append(data) {
        this.body += data
    }
    send() {

    }
    end() {
        socket.end()
    }
}

module.exports = Response