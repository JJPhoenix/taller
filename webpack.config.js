const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
const HtmlWebpackLUGIN = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports={
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders : 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/'
                        }
                    }
               ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 2500,
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackLUGIN({
            vue:true,
            favicon: './src/assets/favicon.png',
            title: 'shibuya',
            template: './src/index.html'
        }),
        new CopyPlugin([
            {
                from: 'src/assets/img',
                to:'assets/img',
            },
            {
                from: 'src/assets/fonts',
                to: 'assets/fonts',
            },
        ])
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname,'src/components/'),
            Views: path.resolve(__dirname,'src/views/'),
            Img: path.resolve(__dirname,'src/assets/img/'),
            Fonts: path.resolve(__dirname, 'src/assets/fonts/'),
            Config: path.resolve(__dirname, 'src/views/config/'),
        },
        descriptionFiles: ['package.json']
    }
};