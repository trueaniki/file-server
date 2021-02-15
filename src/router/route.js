const EventEmitter = require('events')
const aliasBuilder = require('./alias-builder')

const filter = (req, config) => {
    return true
}

class Route extends EventEmitter {
    constructor(router) {
        super()
        this.router = router
    }
    updateFilterConfig(prop, pattern) {
        if(!this.filterConfig) this.filterConfig = {}
        if(this.filterConfigFinished) this.flushFilterConfig()
        this.filterConfigFinished = false
        this.filterConfig[prop] = pattern
    }
    flushFilterConfig() {
        this.filterConfig = {}
    }
    qs(pattern) {
        this.updateFilterConfig('qs', pattern)
        return this
    }
    params(pattern) {
        this.updateFilterConfig('params', pattern)
        return this
    }
    headers(pattern) {
        this.updateFilterConfig('headers', pattern)
        return this
    }

    createListenerWithFilter(listener) {
        return function(req, ...args) {
            if(filter(req, listener.filterConfig)) listener(req, ...args)
        }
    }

    on(eventName, listener) {
        if(this.filterConfigFinished) this.flushFilterConfig()
        this.filterConfigFinished = true

        listener.filterConfig = this.filterConfig
        super.on(eventName, listener)
        return this
    }
    emit(...args) {
        super.emit(...args)
    }
}

module.exports = class {
    constructor() {
        Object.assign(this, new Proxy(new Route(), aliasBuilder))
    }
}