/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true
}

console.log("HOST : ", process.env.HOST)

module.exports = nextConfig