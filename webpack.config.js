
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        carousel: './src/Carousel/Carousel.jsx',
        example: './example/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Carousel Example',
            chunks: ['example']
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            }
        ]
    }

}