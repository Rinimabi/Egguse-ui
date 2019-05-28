var webpack = require('webpack');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
     module:{
          loaders:[
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                },
          ]
     },
}