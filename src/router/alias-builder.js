const aliasBuilder = {
    get: function (target, prop) {
        if(Reflect.has(target, prop)) return target[prop]
        return cb => target.on(prop, cb)
    }
}

module.exports = aliasBuilder