// Add WebPack to use the included CommonsChunkPlugin
var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp('^' + name + '$'));
    },

    entry: {
        app: ['webpack/hot/dev-server', './app/js/main.js'],
        vendors: ['react', 'react-router']
    },
    resolve: {
        alias: {
            'styles': '../styles/style.scss'
        }
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    output: {
        path: process.env.NODE_ENV === 'production' ? './dist' : './build',
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },

    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    }
};

config.addVendor('react', bower_dir + '/react/react.js');
config.addVendor('react-router', bower_dir + '/react-router/build/global/ReactRouter.js');
config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.js');

module.exports = config;