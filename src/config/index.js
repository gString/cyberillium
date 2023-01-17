if (process.env.NODE_ENV === 'development') {
    module.exports = require('./config.dev.json')
} else {
    module.exports = require('./config.prod.json')
}