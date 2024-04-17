"use client";

import { useState } from "react";

export const StarsRadioField = () => {
	const [rating, setRating] = useState(4);
	const starsList = [
		{ name: "first", value: 1 },
		{ name: "second", value: 2 },
		{ name: "third", value: 3 },
		{ name: "fourth", value: 4 },
		{ name: "fifth", value: 5 },
	];
	return (
		<div className="flex py-4 text-zinc-800">
			{starsList.map(({ name, value }) => (
				<label
					key={name}
					className="relative px-1 text-center"
					htmlFor={name}
					onClick={() => setRating(value)}
				>
					<input
						className="fixed opacity-0"
						type="radio"
						id="first"
						aria-label="first"
						name="rating"
						value={1}
					/>
					<svg className="left-0 top-0" width="24px" height="24px">
						<use
							className={`${rating > value - 1 ? "fill-amber-500" : "fill-none"}`}
							href="/icons.svg#star"
						></use>
					</svg>
				</label>
			))}
		</div>
	);
};
