/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  webpack5: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}

module.exports = nextConfig