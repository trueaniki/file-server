require('dotenv').config()
const path = require('path')

const config = require('./config')

const Server = require('./src/http/http-server')
const Router = require('./src/router').Router

const { FileController, PreflightController } = require('./src/controllers')

// const ServeStaticService = require('./src/file-service')

// const {isEmpty, createContentTypeMap} = require('./src/utils')

const port = config.port || process.env.PORT
const host = config.host || process.env.HOST

const staticDir = path.join(__dirname, './static')

const defaultContentTypeMap = require('./default-content-type-map')

// const getContentType = createContentTypeMap(
// 	isEmpty(config.contentTypeMap) ? config.contentTypeMap : defaultContentTypeMap
// )

const router = Router()
const server = Server(router)

router.get(FileController.getFile)
router.put(FileController.createFile)

router['123']((req,res) => {
    console.log('123')
})

router.sanya((req,res) => {
    console.log('lol')
})

const route = router.route
route('some/url').get((req, res) => {})
route('some/another/url').post((req, res) => {})

route('/url')

router.options(PreflightController.handlePreflight)

server.listen(port, host)