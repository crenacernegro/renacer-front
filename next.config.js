/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "https://renacer-admin-2aud.vercel.app/api/309c0e25-251c-4f13-a300-169ae2a631dd",
    ],
  },
};

module.exports = nextConfig;
