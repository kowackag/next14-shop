"use server";

import { revalidateTag } from "next/cache";
import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartChangeProductQuantityDocument,
	type CartChangeProductQuantityMutation,
	type CartChangeProductQuantityMutationVariables,
} from "@/gql/graphql";

export const changeProductQuantityInCart = async ({
	cartId,
	productId,
	quantity,
}: CartChangeProductQuantityMutationVariables): Promise<
	CartChangeProductQuantityMutation["cartChangeItemQuantity"]
> => {
	const graphqlResponse = await executeGraphql({
		query: CartChangeProductQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
	if (!graphqlResponse) {
		throw notFound();
	}
	revalidateTag("/cart");

	return graphqlResponse.cartChangeItemQuantity;
};
