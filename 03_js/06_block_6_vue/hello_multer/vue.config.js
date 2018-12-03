module.exports = {
    // options...
    devServer: {
        proxy: 'http://localhost:3030',
        watchOptions: {
            poll: true
        }
    }
}