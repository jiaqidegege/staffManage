module.exports = {
    entry:[ 
            // 'webpack/hot/dev-server',
            // 'webpack-dev-server/client?http://localhost:8080',
            __dirname + '/src/ManageSystem.js'],

    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    devtool: 'eval-source-map',  //生成source file
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    }
};