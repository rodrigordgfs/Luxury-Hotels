module.exports = {
    publicPath: '',

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Luxury Hotels";
                return args;
            })
    },

    pwa: {
      name: 'Luxury Hotels',
      themeColor: '#F5F5F5'
    }
}