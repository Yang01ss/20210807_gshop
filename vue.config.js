module.exports = {
  devServer: {
    //vue脚手架创建代理
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  // 设置analyzer可视化
  
};
