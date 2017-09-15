const path = require('path');

module.exports = {

    entry: './src/app.jsx',
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
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}