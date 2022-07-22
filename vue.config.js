module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        // 在这里设置后端服务器接口
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: {"^/api" : ""}
      },
    },
  },
};
