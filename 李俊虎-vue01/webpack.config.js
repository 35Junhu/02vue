//引入文件路径
const path = require('path')
//引入自动生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入vue插件
const { VueLoaderPlugin } = require('vue-loader')
//引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    //mode模式
    mode: 'production',
    //入口
    entry: './src/main.js',
    //出口
    output: {
        //文件路径
        path: path.join(__dirname, 'lib'),
        //文件名
        filename: 'index.js',
        //是否先清除
        clean: true,
    },
    //html文件的自动生成,但他会使用默认模板，需要配置template
    plugins: [
        new HtmlWebpackPlugin(
            { template: './public/index.html' }
        ),
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    //进行开发服务器的配置，自动打开，端口号30000
    devServer: {
        //yarn.serve后自动打开浏览器
        open: true,
        //端口号设置
        port: 30000
    },
    //css，less,图片配置
    module: {
        rules: [
            //css
            // {
            //     //正则匹配
            //     test: /\.css$/,
            //     //指定匹配的文件用什么加载
            //     use: ['style-loader', 'css-loader']
            // },
            //less
            // {
            //     //正则
            //     test: /\.less/,
            //     use: ['style-loader', 'css-loader', 'less-loader']
            // },
            {
                //正则
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    }
}