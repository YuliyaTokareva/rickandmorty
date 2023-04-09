const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
// const isDevelopment = process.env.NODE_ENV !== 'production';

// const { EnvironmentPlugin } = require('webpack');
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
// const isDevelopment = process.env.NODE_ENV !== 'production';
// const dotenv = require('dotenv').config();
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  let mode = 'development';

  if (process.env.NODE_ENV === 'production') {
    mode = 'production';
  }
  const config = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /.(js|jsx|ts|tsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: mode === 'production' ? 'asset' : 'asset/resource'
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      alias: {
        '@img': path.resolve(__dirname, 'src/img/'),
        '@svg': path.resolve(__dirname, 'src/movie/svg/'),
        '@common': path.resolve(__dirname, 'src/common'),
        '@components': path.resolve(__dirname, 'src/movie/components/')
      }
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new Dotenv({
        path: './my.env', // путь к файлу .env
        safe: true, // пропускать только определенные переменные окружения
        systemvars: true, // использовать переменные окружения из системы
        defaults: true // загружать переменные окружения по умолчанию, если они не определены
      })
      // new webpack.DefinePlugin({
      //   'process.env': JSON.stringify(dotenv.parsed),
      //   'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production')
      // })

      // new webpack.DefinePlugin({
      //   'process.env': {
      //     REACT_APP_BASE_URL: JSON.stringify(process.env.REACT_APP_BASE_URL)
      //   }
      // })
    ],
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8090
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  };

  if (isProduction) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    );
  }

  return config;
};
