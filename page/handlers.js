exports.front = {
    file: function (request) {
        return __dirname + '/client/html/' + 'index.html';
    }
};
exports.get = {
    file: function (request) {
        return __dirname + '/client/html/' + request.params.filename;
    }
};
