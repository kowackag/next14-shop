import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetCategoriesDocument,
	ProductsGetByCategorySlugDocument,
} from "@/gql/graphql";
import { ProductItemType } from "@/ui/types";
import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";

type ProductResponseItem = {
	id: string;
	slug:string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: {
		src: string;
		alt: string;
	};
};

export const getProducts = async (): Promise<ProductItemType[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	return graphqlResponse.products.map((product) => ({
		id: product.id,
		name: product.name,
		category: product.categories[0]?.name || "",
		description: product.description,
		longDescription: product.description,
		price: product.price,
		image: product.images[0] && {
			src: product.images[0].url,
			alt: product.name,
		},
		rating: {
			rate: 4,
			count: 123,
		},
	}));
};

export const getProductById = async (
	id: ProductResponseItem["id"],
): Promise<ProductItemType> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});
	if (!product) {
		throw notFound();
	}

	return {
		id: product.id,
		name: product.name,
		category: product.categories[0]?.name || "",
		price: product.price,
		description: product.description,
		longDescription: product.description,
		image: product.images[0] && {
			src: product.images[0].url,
			alt: product.name,
		},
		rating: {
			rate: 4,
			count: 123,
		},
	};
};

export const getProductsByPage = async ({
	offset = 0,
}: {
	offset?: number;
}) => {
	const PER_PAGE = 20;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${PER_PAGE}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(productResponseItemToProductItemType);

	return products;
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => ({
	id: product.id,
	name: product.title,
	category: product.category,
	price: product.price,
	rating: product.rating,
	description: product.description,
	longDescription: product.description,
	image: {
		src: product.image.src,
		alt: product.category,
	},
});

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

export const getProductsByCategorySlug = async (
	slug: ProductResponseItem["slug"],
): Promise<any[]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{
			slug,
		},
	);
	const products = graphqlResponse.categories.map((cat) => ({
		categoryName: cat.name,
		products: cat.products.map((product) => ({
			id: product.id,
			name: product.name,
			price: product.price,
			image: {
				src: product.images[0]?.url,
				alt: product.name,
			},
		})),
	}));
	return products;
};
