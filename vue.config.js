module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.20.10.2',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            }
        }
    }
}