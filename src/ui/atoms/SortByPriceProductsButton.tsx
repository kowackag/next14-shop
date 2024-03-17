"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState } from "react";

export const SortByPriceProductsButton = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [sorted, setSorted] = useState(searchParams.get("sorted") ?? "none");

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();

		const sortBy: string = e.target.value;
		setSorted(sortBy);

		if (e.target.value === "none") {
			return router.push(`/products/1`);
		}

		router.push(`/products/1?sorted=${sortBy}`);
	};

	return (
		<form className="flex w-full justify-end px-2 py-6">
			<label className="px-2" htmlFor="sorted">
				Sort:
			</label>
			<select
				className="w-36 outline-none border"
				name="sorted"
				id="sorted"
				value={sorted}
				onChange={handleChange}
			>
				<option className="p-2 inline-block" value="none">
					none
				</option>
				<option value="price" data-testid="sort-by-price">
					by price
				</option>
				<option value="rating" data-testid="sort-by-rating">
					by rating
				</option>
			</select>
		</form>
	);
};
