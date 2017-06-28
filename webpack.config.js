/**
 * Created by S.Aliakbari on 6/28/2017.
 */

const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: [
            './actions/imageActions.js',
            './components/FileUpload.js',
            './containers/FileUploadContainer.js',
            './store/config/storeConfig.js',
            './store/reducers/imageReducer',
            './store/reducers/index',
            './app',
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015','react'] },
                }],
            },

            // Loaders for other file types can go here
        ],
    },
};