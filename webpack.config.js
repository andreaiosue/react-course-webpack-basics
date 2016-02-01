var path = require("path");

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|.idea)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    entry: './public/js/app.jsx',
    output: {
        path: path.join(__dirname, '/public/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        root: path.join(__dirname, '/public/js/'),
        alias: {
            myModule: './folder/module.jsx'
        },
        extensions: ['', '.js', '.jsx']
    }
};