const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    performance: { hints: false },
    entry: [path.join(__dirname, 'src', 'index')],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },  
    devServer:{
        contentBase: path.join(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(
        {
            title: 'Caching',
            hash: true,
            template: path.join(__dirname, 'assets', 'index.html'),
            filename: '../index.html',
            minify: {
                collapseWhitespace :  true , 
                removeComments :  true , 
                removeRedundantAttributes :  true , 
                removeScriptTypeAttributes :  true , 
                removeStyleLinkTypeAttributes :  true , 
                useShortDoctype :  true 
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[hash].[ext]',
                      outputPath: 'src/assets/'
                    }
                  }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader'
            }
        ]
    }
}