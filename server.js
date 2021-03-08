require('dotenv').config()

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: { colors: true },
    disableHostCheck: false
}).listen(process.env.PORT, (err) => err ? console.log(err) : console.log('Servidor iniciado.'))
