'use strict'
//方式1 测试失败
// const egg = require('egg')
// const path = require("path");
// //const baseDir = path.resolve(process.cwd());

// // const workers = Number(process.argv[2] || require('os').cpus().length)
// egg.startCluster({
// 	workers: 1,
// 	// respawn: true,
// 	baseDir: process.cwd(),
// });


//方式2 测试成功
// 由于egg-script是默认以当前执行proccess.cwd() 路径为默认项目的，打包后需要每次输入 /snapshot/${项目文件夹名} 作为指定目录
// 所以，以下为修改参数，自动嵌入“/snapshot/${项目文件夹名}”

// 这种模式下如果报错 xxx --no-deprecation  
// 去这个文件 pkg-egg3js-example\node_modules\egg-scripts\lib\cmd\start.js  
// 注释掉 下面行
// execArgvObj.deprecation = false; // --no-deprecation
// execArgvObj.traceWarnings = true; // --trace-warnings
const fs = require("fs");
const baseDir = '/snapshot/' + fs.readdirSync('/snapshot')[0];
console.log('baseDir:', baseDir);
// 当 start 的时候，自动嵌入bashDir为 /snapshot/${项目文件夹名}
const startIndex = process.argv.indexOf('start');
if (startIndex > -1) {
    process.argv = [].concat(
        process.argv.slice(0, startIndex + 1),
        baseDir,
        process.argv.slice(startIndex + 1),
    );
}
require('./node_modules/egg-scripts/bin/egg-scripts.js');
