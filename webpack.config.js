module.exports = {
  entry: './client/index.js', 
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  //configure the server for development --> bundle is served at /build path and use /api to access proxy local server
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http:localhost:3000'
    }
  },
  //global NODE_ENV set in scripts in package.json
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      //list of rules include objects with test and use properties
      //babel processes jsx files
      {
        test: /.\js$/,
        exclude: /(node_modules)/,
        use: {
          loader: babel-loader,
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      //sets up style loaders for css and scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      //extracts css for faster loading
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  }
}