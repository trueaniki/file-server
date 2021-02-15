const net = require('net')
const config = require('../../config')
const Request = require('./http-request')
const Response = require('./http-response')

//обертка над tcp сервером
const Server = (router) => {
	const server = net.createServer()
	// this.router = router

	server.on('connection', socket => {
		socket.setEncoding(config.socketEncoding || 'utf8')
		socket.on('data', data => {
			const req = new Request(data)
			const res = new Response(socket)
			router(req, res)
		})
	})
	return {
		listen(port, host) {
			console.log(`Server listening on ${host}:${port}`)
			server.listen(port, host)
		}
	}
}

module.exports = Server