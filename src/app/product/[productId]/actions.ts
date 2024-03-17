"use server";

import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartRemoveProductDocument,
	type CartRemoveProductMutationVariables,
} from "@/gql/graphql";

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
