const path = require('path');

module.exports = {
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'), // has to be absolute path
        filename: 'bundle.js' // name can be anything
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // only apply with .js files
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [ // array of loaders
                'style-loader', // get the code
                'css-loader', // convert it from scss down to css 
                'sass-loader' // get it showing up in the browser by dumping it into a style tag
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

// everytime you change the webpack config, restart 'build'