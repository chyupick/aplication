const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: './bundle.js'
    },

    devServer: {
        inline: true,
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}