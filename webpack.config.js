module.exports = {
    entry: './src/app/index.js',
    output: {
      path: __dirname + '/src/public',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                "babel-plugin-transform-scss"
              ]
            }
          }
        }
      ]
    }
  };