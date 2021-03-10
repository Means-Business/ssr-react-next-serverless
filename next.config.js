const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  webpack(config, options) {
    config.node = {
      fs: 'empty',
    };
    // config.resolve.module.push(path.resolve('./'));
    config.module.rules.push({
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/',
            outputPath: 'static/images/',
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withPlugins([
  {
    images: {
      domains: ['means-business.com', 'assets.means-business.com'],
    },
  },
  [withBundleAnalyzer],
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],
  config,

  // your other plugins here
]);
