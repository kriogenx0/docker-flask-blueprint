const { resolve } = require('path');

const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'production',

  entry: {
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    app: ['babel-polyfill', resolve(__dirname, '../index.jsx')]
  },

  output: {
    path: resolve(__dirname, '../../app/static/compiled'),
    filename: '[name]-compiled.js'
  },

  // context: resolve(__dirname, 'app'),

  // devServer: {
  //   hot: true,
  //   contentBase: resolve(__dirname, 'build'),
  //   historyApiFallback: true,
  //   publicPath: '/'
  // },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      controls: resolve(__dirname, '../lib/soda/controls'),
      data: resolve(__dirname, '../redux'),
      lib: resolve(__dirname, '../lib'),
      resources: resolve(__dirname, '../resources'),
      views: resolve(__dirname, '../views')
    }
  },

  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader"
      // },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     'css-loader',
        //     {
        //       loader: 'sass-loader',
        //       query: {
        //         sourceMap: false,
        //       },
        //     },
        //   ],
        //   publicPath: '../'
        // })),/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
            // loader: 'url-loader',
            // options: {
            //   limit: 8192,
            //   mimetype: 'application/octet-stream',
            //   name: 'fonts/[name].[ext]'
            // }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            // Limit at 50k. Above that it emits separate files
            limit: 8192,
            // url-loader sets mimetype if it's passed.
            // Without this it derives it from the file extension
            mimetype: "application/font-woff",

            // Output below fonts directory
            name: "./fonts/[name].[ext]",
          }
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml',
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      PropTypes: 'prop-types',
      React: 'react',
      toastr: 'toastr'
    })
  ]

  // plugins: [
  // new webpack.NamedModulesPlugin(),
  // new webpack.LoaderOptionsPlugin({
  //   test: /\.jsx?$/,
  //   options: {
  //     eslint: {
  //       configFile: resolve(__dirname, '.eslintrc'),
  //       cache: false,
  //     }
  //   },
  // }),
  // new webpack.optimize.ModuleConcatenationPlugin(),
  // new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
  // new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
  // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  // new webpack.HotModuleReplacementPlugin(),
  // ]
};

module.exports = config;
