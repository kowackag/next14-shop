import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://next14-shop.vercel.app/",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://next14-shop.vercel.app/collection",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://next14-shop.vercel.app/products/:page",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://next14-shop.vercel.app/product/:productId",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://next14-shop.vercel.app/cart",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.5,
		},
	];
}
