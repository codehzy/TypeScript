// 配置文件入口
const { merge } = require('webpack-merge'); // 合并配置文件

// 引入配置文件
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.pro.config');

// 判断环境变量
let config = process.NODE_ENV === 'development' ? devConfig : proConfig;

// 合并
module.exports = merge(baseConfig, config);