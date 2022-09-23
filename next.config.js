/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  optimizeFonts: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}

