import {
	CartFindOrCreateAndAddProductDocument,
	CartFindOrCreateAndAddProductMutation,
	CartGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export const getCartById = async (id: string) => {
	const graphqlResponse = await executeGraphql(CartGetByIdDocument, {
		cartId: id,
	});

	return graphqlResponse.order;
};

export const findOrCreateCartAndAddProduct = async (
	productId: string,
	quantity: number,
	cartId?: string,
): Promise<CartFindOrCreateAndAddProductMutation["cartFindOrCreate"]> => {
	if (cartId) {
		const graphqlResponse = await executeGraphql(
			CartFindOrCreateAndAddProductDocument,
			{
				productId,
				quantity,
				cartId,
			},
		);

		return graphqlResponse.cartFindOrCreate;
	}
	const graphqlResponse = await executeGraphql(
		CartFindOrCreateAndAddProductDocument,
		{
			productId,
			quantity,
		},
	);
	console.log(777, graphqlResponse.cartFindOrCreate);
	return graphqlResponse.cartFindOrCreate;
};

export const createCart = async () => {
	console.log(5555555555555555);
};
