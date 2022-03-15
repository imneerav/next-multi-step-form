module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_APP_VERSION: 1
    }
  }
  return nextConfig
}