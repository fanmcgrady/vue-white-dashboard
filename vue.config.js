module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8088',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            }
        }
    }
}