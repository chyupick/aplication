const path = require( 'path' );

module.exports = {

    entry: './src/app.jsx',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: './bundle.js'
    },

    devServer: {
        inline: true,
        port: 8090
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}