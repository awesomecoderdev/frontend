/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false,
	// swcMinify: true,
	images: {
		domains: [
			"awesomecoder.dev",
			"wpplagiarism.one",
			"localhost",
			"lh3.googleusercontent.com",
		],
		formats: ["image/avif", "image/webp"],
	},
};
