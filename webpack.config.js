var alias = require('./alias')
var browserSync = require('browser-sync-webpack-plugin');
var babel = require('babel-core');
var path = require('path');
var browserSync = require('browser-sync-webpack-plugin');
console.log(path.resolve(__dirname, 'app'))
var webpackConfig = function (conf) {
    var configOutput = {
        context: path.resolve(__dirname, 'app'),
        entry: './index.ts',
        output: {
            path: path.resolve(__dirname, 'temp'),
            // path: __dirname+'/temp',
            filename: 'bundle.js',
            // publicPath:"/asset/"
        },
        resolve: {
            modules: [
                "node_modules"
            ],
            extensions: ['.ts', '.js', '.json'],
            //  alias: alias
        },
        devtool: 'source-map',
        // resolveLoader: {
        //     modulesDirectories: ["node_modules"]
        // },
        module: {
            rules: [{
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.ts(x?)$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader'
                }, {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: 'raw-loader'
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: 'file-loader'
                }, {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: 'file-loader'
                }, {
                    test: /\.jpg$/,
                    exclude: /node_modules/,
                    use: 'file-loader'
                }, {
                    test: /\.gif$/,
                    exclude: /node_modules/,
                    use: 'file-loader'
                }, {
                    test: /\.png$/,
                    exclude: /node_modules/,
                    use: 'file-loader'
                }
            ]
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
    if (conf.showBrowser)
        configOutput.plugins.push(
            new browserSync({
                host: 'localhost',
                port: 3200,
                proxy: 'http://localhost:' + 8080,
                // ui: false,
                // online: false,
                // notify: true
            })
        );
    return configOutput;
}

module.exports = webpackConfig;