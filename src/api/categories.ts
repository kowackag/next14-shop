import { executeGraphql } from "./graphqlApi";
import {
	ProductsGetByCategorySlugDocument,
	CategoriesGetListDocument,
	type CategoriesGetListQuery,
	CategoriesGetNamesDocument,
	type CategoriesGetNamesQuery,
} from "@/gql/graphql";

export const getProductsCategories = async (): Promise<
	CategoriesGetListQuery["categories"]
> => {
	const graphqlResponse = await executeGraphql(CategoriesGetListDocument, {});
	return graphqlResponse.categories;
};

export const getProductsCategoriesNames = async (): Promise<
	CategoriesGetNamesQuery["categories"]
> => {
	const graphqlResponse = await executeGraphql(CategoriesGetNamesDocument, {});

	return graphqlResponse.categories;
};

export const getProductsByCategorySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{
			slug,
		},
	);
	return graphqlResponse.category;
};
