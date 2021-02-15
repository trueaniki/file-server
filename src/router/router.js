const Route = require('./route')

const Router = function () {
    const callbacks = {}
    const routesMap = {}

    function router (req, res) {
        console.log('Request passed to router')
        const method = req.method.toUpperCase()
        if(!callbacks[method]) throw Error(`No handler for ${method} method`)
        callbacks[method](req, res)
    }

    router.route = function(url) {
        if(routesMap[url]) return routesMap[url]
        routesMap[url] = new Route()
        return routesMap[url]
    }

    // const methodsBuilder = {
    //     get: function (target, prop) {
    //         return cb => {
    //             callbacks[prop.toUpperCase()] = cb
    //         }
    //     }
    // }

    // return new Proxy(router, methodsBuilder)
}

module.exports = Router