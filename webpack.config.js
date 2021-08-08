const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        carousel: './src/Carousel/Carousel.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            }
        ]
    }

}