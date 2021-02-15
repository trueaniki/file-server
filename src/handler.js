const Handler = {
	get(req, socket) {
		const reqPath = path.join(staticDir, req.url)
		fs.readFile(reqPath, (err, data) => {
			if(err) { 
				socket.end(notFoundError)
			} else {
				socket.end(buildResponse(200, data, null, path.extname(reqPath)))
			}
		})
	},
	put(req, socket) {

	},
	options(req, socket) {
		socket.end(buildResponse(200, null, {Allow: 'OPTIONS, GET, PUT'}))
	}
}

module.exports = Handler