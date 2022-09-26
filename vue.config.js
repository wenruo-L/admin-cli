// --report 添加打包命令行可查看打包分析
const CompressionWebpackPlugin = require("compression-webpack-plugin");//开启gzip压缩， 按需引用
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.output.filename = 'js/[name]_[hash].js';
    config.output.chunkFilename = 'js/[name]_[hash].js';
    const plugins = [];
    plugins.push(
      new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: productionGzipExtensions,// 匹配文件名
          threshold: 10240,
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8 // 压缩比
      })
  );
  config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack (config) {
    config
      .optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/
          },
        }
      })
    config.optimization.runtimeChunk('single')
  }
}