/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories",
				destination: "/categories/t-shirts/1",
				permanent: true,
			},
		];
	},
	experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
