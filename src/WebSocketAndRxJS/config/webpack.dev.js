var helpers = require('./helpers');

module.exports = {
    entry: "./app/main",
    output: {
        path: helpers.root('./wwwroot'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js"]
    }
};