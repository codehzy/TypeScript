const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            // tsx正则
            test: /\.tsx?$/i,
            use: [{
                loader: 'ts-loader'
            }],
            //排除node_modules文件
            exclude: /node_modules/
        }]
    },
    // html-webpack-plugin ： 通过一个模板生成一个首页，将输出文件嵌入到这个文件中
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}