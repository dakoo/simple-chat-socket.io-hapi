var call = require('./handlers');
exports.api = [
    { method: 'GET', path: '/', handler : call.chat }];
