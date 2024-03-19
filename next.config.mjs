/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "your.domain.com" }],
  },
};

export default nextConfig;
