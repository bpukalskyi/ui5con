const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDebug = !process.argv.includes('--release');
const PROJECT_ROOT = path.resolve(__dirname, '..');

const config = {
    entry: {
        core: path.resolve(PROJECT_ROOT, 'src/default.js'),
        styles: path.resolve(PROJECT_ROOT, 'src/blocks/index.css'),
    },

    output: {
        path: path.resolve(PROJECT_ROOT, 'build'),
        publicPath: '/',
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: path.resolve(__dirname, 'postcss.config.js'),
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                },
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],

    target: 'web',
};


module.exports = config;
