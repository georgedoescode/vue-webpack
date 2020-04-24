const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const MODE = argv.mode;

    return {
        entry: './src/main.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].bundle.js',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        devtool: MODE === 'development' ? 'eval-source-map' : 'none',
        devServer: {
            contentBase: 'dist',
            port: 1234,
            hot: true,
            historyApiFallback: true,
            overlay: {
                errors: true,
            },
            stats: 'errors-warnings',
            clientLogLevel: 'silent',
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        MODE === 'development'
                            ? 'vue-style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    ctx: {
                                        mode: MODE,
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'assets/img/[name].[ext]',
                                esModule: false,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new MiniCssExtractPlugin(),
            new StylelintPlugin({ files: ['src/**/*.{vue,scss,css}'] }),
            new CleanWebpackPlugin(),
        ],
    };
};
