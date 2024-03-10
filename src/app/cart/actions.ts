"use server";

import { revalidatePath } from "next/cache";
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
	const graphqlResponse = await executeGraphql(
		CartChangeProductQuantityDocument,
		{
			cartId,
			productId,
			quantity,
		},
	);
	if (!graphqlResponse) {
		throw notFound();
	}
	revalidatePath("/cart");

	return graphqlResponse.cartChangeItemQuantity;
};
