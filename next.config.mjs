/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["hybrid-overture-blurred.ngrok-free.dev"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;