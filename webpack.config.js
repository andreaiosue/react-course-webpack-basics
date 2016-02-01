var path = require("path");

module.exports = {
    entry: './public/js/app.js',
    output: {
        path: path.join(__dirname, '/public/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    }
};