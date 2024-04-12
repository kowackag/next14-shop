/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
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
			{
				source: "/categories/:categorySlug",
				destination: "/categories/:categorySlug/1",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		// remarkPlugins: [remarkGfm],
		rehypePlugins: [],
	},
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
