/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    CC_APIKEY: 'xarwaunzeuem4rd2csbz2b9r',
    CC_ACCESSTOKEN: '818c8dd7-2942-4f17-8a55-5cfc4a053e1b',
    CC_RCM_LIST_ID: '1195493300'
  }
}

module.exports = nextConfig
