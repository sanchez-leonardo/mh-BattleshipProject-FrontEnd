module.exports = {
  devServer: {
    proxy: {
      "^/": {
        target: "https://mh-battleship.herokuapp.com",
        changeOrigin: true
      },
      transpileDependencies: ["vuetify"]
    }
  }
};
