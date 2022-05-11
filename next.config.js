/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  env: {
    ENV: process.env.ENV,
    API_URL: process.env.API_URL,
    PUBLIC_URL: process.env.PUBLIC_URL,
  },
  serverRuntimeConfig: {
    ENV: process.env.ENV,
    API_URL: process.env.API_URL,
    PUBLIC_URL: process.env.PUBLIC_URL,
  },
  publicRuntimeConfig: {
    ENV: process.env.ENV,
    API_URL: process.env.API_URL,
    PUBLIC_URL: process.env.PUBLIC_URL,
  }
}

module.exports = nextConfig

