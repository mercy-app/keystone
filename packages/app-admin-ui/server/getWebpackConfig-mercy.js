const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const { enableDevFeatures, mode } = require('./env');

module.exports = function({ adminMeta, entry, outputPath }) {
  const templatePlugin = new HtmlWebpackPlugin({
    title: 'KeystoneJS',
    template: 'index.html',
    chunksSortMode: 'none',
  });
  const environmentPlugin = new webpack.DefinePlugin({
    ENABLE_DEV_FEATURES: enableDevFeatures,
    IS_PUBLIC_BUNDLE: entry === 'public',
    KEYSTONE_ADMIN_META: JSON.stringify(adminMeta),
  });

  const rules = [
    {
      test: /\.(ts|js)x?$/,
      exclude: [/node_modules(?!(?:\/|\\)@keystonejs(?:\/|\\)app-admin-ui)/],
      use: [
        {
          loader: 'babel-loader',
          options: {
            configFile: false,
            babelrc: false,
            presets: [
              mode === 'production'
                ? require.resolve('babel-preset-react-app/prod')
                : require.resolve('babel-preset-react-app/dev'),
            ],
            plugins: [require.resolve('babel-plugin-emotion')],
          },
        },
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|png|svg|jpg|gif)$/,
      use: ['file-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    // This is a workaround for a problem with graphql@0.13.x. It can be removed
    // once we upgrade to graphql@14.0.2.
    // https://github.com/zeit/next.js/issues/5233#issuecomment-424738510
    {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    },
  ];
  if (adminMeta.lists) {
    rules.push({
      test: /FIELD_TYPES/,
      use: [
        {
          loader: '@keystonejs/field-views-loader',
          options: {
            adminMeta,
          },
        },
      ],
    });
  }
  const entryPath = `./${entry}.js`;
  return {
    mode,
    context: path.resolve(__dirname, '../client/'),
    devtool: mode === 'development' ? 'inline-source-map' : undefined,
    entry:
      mode === 'production' ? entryPath : [entryPath, 'webpack-hot-middleware/client?reload=true'],
    output: {
      path: outputPath,
      filename: 'js/[name].[hash].bundle.js',
      publicPath: adminMeta.adminPath + '/',
    },
    // TODO: We should pay attention to our bundle size at some point, but
    // right now this is just noise
    performance: { hints: false },
    plugins: [
      environmentPlugin,
      templatePlugin,
      ...(mode === 'development' ? [new webpack.HotModuleReplacementPlugin()] : []),
    ],
    module: {
      rules,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      modules: [path.resolve(__dirname, '../../../mercy/shop'), 'node_modules'],
      alias: {
        // we only want to bundle a single version of react
        // but we don't want to assume a consumer has the same version of react
        // that we use so we alias react the react resolved from the admin ui
        // which depends on the version of react that keystone uses
        react$: require.resolve('react'),
        'react-dom$': require.resolve('react-dom'),
        // we also only want a single version of react-router-dom so that all usages of it are using the same context object
        // why is this using path.dirname(require.resolve('react-router-dom/package.json')) over require.resolve('react-router-dom')?
        // because react-router-dom has module builds which are better for bundlers
        // and if we did require.resolve('react-router-dom'), we would get the cjs build
        // why isn't that used for react and react-dom?
        // they don't have module builds
        'react-router-dom$': path.dirname(require.resolve('react-router-dom/package.json')),
      },
    },
  };
};
