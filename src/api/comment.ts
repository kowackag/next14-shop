import {
	CommentAddToProductDocument,
	CommentAddToProductMutation,
	CommentAddToProductMutationVariables,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

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
	console.log(productId, title, description, author, email, rating);
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
			tags: ["/product"],
		},
	});
	return graphqlResponse.reviewCreate;
};
