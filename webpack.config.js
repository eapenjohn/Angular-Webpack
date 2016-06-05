var alias = require('./alias')
var loaders = require('./loaders')
var browserSync = require('browser-sync-webpack-plugin');
var babel = require('babel-core');
var path = require('path');
var browserSync = require('browser-sync-webpack-plugin');
var webpackConfig = function (conf) {
    var configOutput= {
        context: path.resolve(__dirname, 'app'),
        entry: './index.mockups.ts',
        output:
        {
            path: path.resolve(__dirname, 'temp'),
            // path: __dirname+'/temp',
            filename: 'bundle.js',
            // publicPath:"/asset/"
        },
        resolve: {
            root: path.join(__dirname, './app'),
            extensions: ['', '.ts', '.js', '.json'],
            alias: alias
        },
        devtool: 'source-map',
        resolveLoader: {
            modulesDirectories: ["node_modules"]
        },
        ts: {
            transpileOnly: true
        },
        module:
        {
            loaders: [
                {
                    test: /\.css$/, loader: 'style!css!'
                },
                {
                    test: /\.ts(x?)$/,
                    loader: 'ts'
                },
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    include: [
                        path.join(__dirname, "./app"),
                    ]
                },
                , {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'raw'
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file'
                }, {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file'
                }, {
                    test: /\.jpg$/,
                    exclude: /node_modules/,
                    loader: 'file'
                }, {
                    test: /\.gif$/,
                    exclude: /node_modules/,
                    loader: 'file'
                }, {
                    test: /\.png$/,
                    exclude: /node_modules/,
                    loader: 'file'
                }
            ]
        },
        preprocessors: {
            '**/*.js': file => babel.transform(file.content, { sourceMap: true })
        },
        // target:'node',
        // node:
        // {
        //   __dirname:true,
        //   __filename:true
        // },
        plugins: [
            
        ]
    }
    if(conf.showBrowser)
    configOutput.plugins.push(
        new browserSync({
                host: 'localhost',
                port: 3200,
                proxy: 'http://localhost:' + 3100,
                // ui: false,
                // online: false,
                // notify: true
            })
    );
    return configOutput;
}

module.exports = webpackConfig;

