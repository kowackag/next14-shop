import * as zod from "zod";

export const commentSchema = zod.object({
	headline: zod.string().min(3),
	content: zod.string().min(3).max(500),
	name: zod.string().min(3),
	email: zod.string().email(),
	rating: zod.string(),
});

export type CommentFormData = zod.TypeOf<typeof commentSchema>;
