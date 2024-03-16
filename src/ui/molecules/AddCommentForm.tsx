"use client";

// import { useForm } from "react-hook-form";
// import { addCommentToProduct } from "@/api/comment";

export const AddCommentForm = ({ id }: { id: string }) => {
	console.log(id);
	// const {
	// 	register,
	// 	handleSubmit,
	// 	control,
	// 	formState: { error },
	// } = useForm({
	// 	defaultValues: {
	// 		title: "",
	// 		description: "",
	// 		author: "",
	// 		email: "",
	// 		rating: 5,
	// 	},
	// });
	const addToCartAction = async (formData: FormData) => {
		console.log(formData.get("title"));
		try {
			const data = {
				productId: id,
				title: formData.get("headline"),
				description: formData.get("content"),
				author: formData.get("name"),
				email: formData.get("email"),
				rating: Number(formData.get("rating")),
			};
			console.log(666, data);
			// addCommentToProduct(data);
		} catch (err) {}
	};

	return (
		<form data-testid="add-review-form">
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

			<div className="flex justify-between">
				<div className="text-sm">
					<label className="inline-block pt-2" htmlFor="name">
						Name
					</label>
					<input
						id="name"
						name="name"
						required
						className="block w-full border-b p-2 outline-none"
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
			</div>

			<div className="text-sm">
				<label className="inline-block pt-2" htmlFor="rating">
					Rating
				</label>
				<input
					id="rating"
					name="rating"
					type="number"
					min={1}
					max={5}
					required
					className="block w-full border p-2 outline-none"
				/>
			</div>

			<button
				formAction={addToCartAction}
				type="submit"
				className="my-6 border px-4 py-2"
			>
				Add comment
			</button>
		</form>
	);
};
