import { ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};
export const getProducts = async (offset: number) => {
	const PER_PAGE = 20;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${PER_PAGE}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(productResponseItemToProductItemType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;

	const product = productResponseItemToProductItemType(productResponse);

	return product;
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => ({
	id: product.id,
	name: product.title,
	category: product.category,
	price: product.price,
	rating: product.rating,
	longDescription: product.description,
	image: {
		src: product.image,
		alt: product.category,
	},
});
