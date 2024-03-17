import { executeGraphql } from "./graphqlApi";
import {
	CommentAddToProductDocument,
	type CommentAddToProductMutation,
	type CommentAddToProductMutationVariables,
} from "@/gql/graphql";

export const addCommentToProduct = async ({
	productId,
	title,
	description,
	author,
	email,
	rating,
}: CommentAddToProductMutationVariables): Promise<
	CommentAddToProductMutation["reviewCreate"]
> => {
	const graphqlResponse = await executeGraphql({
		query: CommentAddToProductDocument,
		variables: {
			productId,
			title,
			description,
			author,
			email,
			rating,
		},
		next: {
			tags: ["product"],
		},
	});
	return graphqlResponse.reviewCreate;
};
