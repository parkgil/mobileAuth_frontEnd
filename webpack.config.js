const path = require('path');

module.exports = {
    devServer: {
        contentBase: './public',
        hot: true, // hot reloading : 수정사항 생겼을때 자동으로 서버 재시
    },
    mode: 'development',
    entry: { // js파일 가져와서 bundle할때 필요한 경로
        app: './src/index.js'
    },
    output: { // webpack 사용해서 bundle파일 만들때 경로지정
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    }
}