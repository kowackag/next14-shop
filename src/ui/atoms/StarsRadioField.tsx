"use client";

import { useState } from "react";

export const StarsRadioField = () => {
	const [rating, setRating] = useState(4);
	return (
		<div className="flex py-4 text-zinc-800">
			<label
				className="relative px-1 text-center"
				htmlFor="first"
				onClick={() => setRating(1)}
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
						className={`${rating > 0 ? "fill-amber-500" : "fill-none"}`}
						href="/icons.svg#star"
					></use>
				</svg>
			</label>
			<label
				className="group relative px-1 text-center"
				htmlFor="second"
				onClick={() => setRating(2)}
			>
				<input
					className="fixed opacity-0"
					type="radio"
					id="second"
					aria-label="second"
					name="rating"
					value={2}
				/>
				<svg width="24px" height="24px">
					<use
						className={`${rating > 1 ? "fill-amber-500" : "fill-none"}`}
						href="/icons.svg#star"
					></use>
				</svg>
			</label>
			<label
				className="relative px-1 text-center"
				htmlFor="third"
				onClick={() => setRating(3)}
			>
				<input
					className="fixed opacity-0"
					type="radio"
					id="third"
					aria-label="third"
					name="rating"
					value={3}
				/>
				<svg width="24px" height="24px">
					<use
						className={`${rating > 2 ? "fill-amber-500" : "fill-none"}`}
						href="/icons.svg#star"
					></use>
				</svg>
			</label>
			<label
				className="relative px-1 text-center"
				htmlFor="fourth"
				onClick={() => setRating(4)}
			>
				<input
					className="fixed opacity-0"
					type="radio"
					id="fourth"
					aria-label="fourth"
					name="rating"
					value={4}
					defaultChecked
				/>
				<svg width="24px" height="24px">
					<use
						className={`${rating > 3 ? "fill-amber-500" : "fill-none"}`}
						href="/icons.svg#star"
					></use>
				</svg>
			</label>
			<label
				className="relative px-1 text-center"
				htmlFor="fifth"
				onClick={() => setRating(5)}
			>
				<input
					className="fixed opacity-0"
					type="radio"
					id="fifth"
					aria-label="fifth"
					name="rating"
					value={5}
				/>
				<svg width="24px" height="24px">
					<use
						className={`${rating > 4 ? "fill-amber-500" : "fill-none"}`}
						href="/icons.svg#star"
					></use>
				</svg>
			</label>
		</div>
	);
};
