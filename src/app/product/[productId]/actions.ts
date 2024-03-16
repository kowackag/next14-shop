"use server";

import { executeGraphql } from "@/api/graphqlApi";
import {
	CartRemoveProductDocument,
	CartRemoveProductMutationVariables,
} from "@/gql/graphql";
import { notFound } from "next/navigation";

export const RemoveProductFromCart = async ({
	id,
	productId,
}: CartRemoveProductMutationVariables) => {
	const graphqlResponse = await executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			id,
			productId,
		},
	});
	if (!graphqlResponse) {
		throw notFound();
	}
	return graphqlResponse.cartRemoveItem;
};
