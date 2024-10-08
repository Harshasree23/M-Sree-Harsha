// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('postcss-preset-env')({
                      stage: 0,
                      preserve: true,
                    }),
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  };
  