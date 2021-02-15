const fs = require('fs')

const FileService = {
    getFile(filePath) {
        // const reqPath = path.join(staticDir, req.url)
        fs.readFile(filePath, (err, data) => {
            if(err) throw err
            return [data, path.extname(filePath)]
        })
    },
    createFile(filePath, data) {
        fs.writeFile(filePath, data, (err) => {
            if(err) throw err
            return filePath
        })
    }
}

module.exports = FileService