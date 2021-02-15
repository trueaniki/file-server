const config = require('../config')

const buildResponse = (code, body = null, headers = config.headers, contentType) => {
	const response = {}
	response.protocolVersion = '1.1'
	response.status = code
	response.statusText = 'LOL'
	response.headers = {
		Date: new Date().toUTCString(),
		Server: 'NodeJS',
		'Last-Modified': new Date().toUTCString(),
		'Content-Length': body && body.lenght || 0,
		'Content-Type': contentType || 'text/plain',
		Connection: 'Keep',
		...headers
	}
	if(body)
		response.body = body
	return stringify(response)
}

const notFoundError = buildResponse(404, '<h1>Not found</h1>')

module.exports = {
	buildResponse,
	notFoundError
}