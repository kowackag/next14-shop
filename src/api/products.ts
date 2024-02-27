import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetCategoriesDocument,
	ProductsGetByCategorySlugDocument,
	type ProductListItemFragment,
	type ProductGetByIdQuery,
} from "@/gql/graphql";
import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";

export const getProducts = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	return graphqlResponse.products;
};

export const getProductById = async (
	id: ProductListItemFragment["id"],
): Promise<ProductGetByIdQuery["product"]> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});
	if (!product) {
		throw notFound();
	}

	// return {
	// 	id: product.id,
	// 	name: product.name,
	// 	categories: product.categories[0]?.name ?? "",
	// 	price: product.price,
	// 	description: product.description,
	// 	longDescription: product.description,
	// 	image: product.images[0] && {
	// 		src: product.images[0].url,
	// 		alt: product.name,
	// 	},
	// 	rating: {
	// 		rate: 4,
	// 		count: 123,
	// 	},
	// };

	return product;
};

// export const getProductsByPage = async ({
// 	offset = 0,
// }: {
// 	offset?: number;
// }) => {
// 	const PER_PAGE = 20;
// 	const res = await fetch(
// 		`https://naszsklep-api.vercel.app/api/products?take=${PER_PAGE}&offset=${offset}`,
// 	);
// 	const productsResponse = (await res.json()) as ProductResponseItem[];
// 	const products = productsResponse.map(productResponseItemToProductItemType);
// 	return products;
// };

// const productResponseItemToProductItemType = (
// 	product: ProductResponseItem,
// ): ProductItemType => ({
// 	id: product.id,
// 	name: product.title,
// 	category: product.category,
// 	price: product.price,
// 	image: {
// 		src: product.image.src,
// 		alt: product.category,
// 	},
// });

export const getProductsCategories = async (): Promise<any[]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetCategoriesDocument,
		{},
	);
	return graphqlResponse.categories.map((cat) => ({
		id: cat.id,
		slug: cat.slug,
		name: cat.name,
		image: {
			src: cat.products[0]?.images[0]?.url,
			alt: cat.name,
		},
	}));
};

export const getProductsByCategorySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{
			slug,
		},
	);
	return graphqlResponse.categories[0];
};
