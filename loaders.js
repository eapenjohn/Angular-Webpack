module.exports = loaders;
var loaders = function () {
    return [
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
            exclude: /node_modules/
        },
        , {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'raw'
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
    ];

}