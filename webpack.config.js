// webpack.config.js

module.exports = {
    entry: './handler.js',
    target: 'node',
    externals: [
        // add your modules
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: __dirname,
                exclude: /node_modules/,
            }
        ]
    }
};
