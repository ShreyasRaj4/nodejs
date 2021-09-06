var url = 'http://mylogger.io/log';

function log(message) {
    console.log(message + " raj")
}

expo = { log: log }
module.exports = expo
console.log(module)
log('shreyas')