/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  // swcMinify: true,
  images: {
    domains: ["awesomecoder.dev","plagiarism.test","localhost"],
    formats: ["image/avif", "image/webp"],
  },
};
