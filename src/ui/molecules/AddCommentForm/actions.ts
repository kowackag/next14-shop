"use server";

import { addCommentToProduct } from "@/api/comment";
import { commentSchema } from "./commentSchema";

export type AddCommentActionTypes<TData = unknown> =
	| {
			success: false;
			errors: {
				content?: string[] | undefined;
				email?: string[] | undefined;
				name?: string[] | undefined;
				rating?: string[] | undefined;
				headline?: string[] | undefined;
			};
	  }
	| {
			success: true;
			data: TData;
	  };
export const addCommentAction = async (data: FormData, productId: string) => {
	const parsedData = await commentSchema.safeParseAsync(
		Object.fromEntries(data),
	);
	if (parsedData.success) {
		const data = {
			productId: productId,
			title: parsedData.data.headline,
			description: parsedData.data.content,
			author: parsedData.data.name,
			email: parsedData.data.email,
			rating: Number(parsedData.data.rating),
		};
		addCommentToProduct(data);
		// return {
		// 	success: true,
		// 	errors: false,
		// };
	} else {
		console.log(parsedData.error.flatten().fieldErrors);
		// return {
		// 	success: false,
		// 	errors: parsedData.error.flatten().fieldErrors,
		// };
	}
};
