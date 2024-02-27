import {
	ProductsGetByCategorySlugDocument,
	ProductsGetCategoriesDocument,
	ProductsGetCategoriesQuery,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

// export const getProductsCategories = async (): Promise<ProductsGetCategoriesQuery["categories"]> => {
// 	const graphqlResponse = await executeGraphql(
// 		ProductsGetCategoriesDocument,
// 		{},
// 	);
// 	return graphqlResponse.categories.map((cat) => ({
// 		id: cat.id,
// 		slug: cat.slug,
// 		name: cat.name,
// 		image: {
// 			src: cat.products[0]?.images[0]?.url,
// 			alt: cat.name,
// 		},
// 	}));
// };

export const getProductsCategories = async (): Promise<ProductsGetCategoriesQuery["categories"]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetCategoriesDocument,
		{},
	);
	return graphqlResponse.categories;
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
