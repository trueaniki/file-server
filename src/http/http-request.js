const { parse } = require('hmn')

class Request {
    constructor(incomingMessage) {
        const {method, url, headers, body} = parse(incomingMessage)
        this.method = method
        this.url = url
        this.headers = headers
        this.body = body
    }
}

module.exports = Request