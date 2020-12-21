// 每次构建成功后清空dist目录，避免缓存,因为有时候我们需要在文件后面加上hash
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}