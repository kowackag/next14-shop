"use client";

import { useFormState } from "react-dom";

import { addCommentAction } from "./actions";
import { StarsRadioField } from "@/ui/atoms/StarsRadioField";


export const AddCommentForm = ({ id }: { id: string }) => {
	const [_state, formAction] = useFormState(
		(_prevState: unknown, formData: FormData) => {
			return addCommentAction(formData, id);
		},
		null,
	);

	return (
		<form data-testid="add-review-form" action={formAction}>
			<div className="text-sm">
				<p className="inline-block pt-2">Rating</p>
				<StarsRadioField />
			</div>
			<div className="text-sm">
				<label className="inline-block pt-2" htmlFor="headline">
					Title
				</label>
				<input
					id="headline"
					name="headline"
					className="block w-full border p-2 outline-none"
				/>
			</div>
			<div className="text-sm">
				<label className="inline-block pt-2" htmlFor="content">
					Comment
				</label>
				<textarea
					id="content"
					name="content"
					required
					className="block w-full border p-2 outline-none"
				/>
			</div>
			<div className="text-sm">
				<label className="inline-block pt-2" htmlFor="name">
					Name
				</label>
				<input
					id="name"
					name="name"
					required
					className="block w-full border p-2 outline-none"
				/>
			</div>
			<div className="text-sm">
				<label className="inline-block pt-2" htmlFor="email">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					className="block w-full border p-2 outline-none"
				/>
			</div>

			<button type="submit" className="my-6 border px-4 py-2">
				Add comment
			</button>
		</form>
	);
};
