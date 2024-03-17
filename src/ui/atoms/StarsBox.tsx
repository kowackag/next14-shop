export const StarsBox = ({ rating }: { rating: number }) => {
	return (
		<div className="flex text-zinc-800">
			<svg width="24px" height="24px">
				<use
					className={rating > 0 ? "fill-amber-500" : "fill-none"}
					href="/icons.svg#star"
				></use>
			</svg>
			<svg width="24px" height="24px">
				<use
					className={rating > 1 ? "fill-amber-500" : "fill-none"}
					href="/icons.svg#star"
				></use>
			</svg>
			<svg width="24px" height="24px">
				<use
					className={rating > 2 ? "fill-amber-500" : "fill-none"}
					href="/icons.svg#star"
				></use>
			</svg>
			<svg width="24px" height="24px">
				<use
					className={rating > 3 ? "fill-amber-500" : "fill-none"}
					href="/icons.svg#star"
				></use>
			</svg>
			<svg width="24px" height="24px">
				<use
					className={rating > 4 ? "fill-amber-500" : "fill-none"}
					href="/icons.svg#star"
				></use>
			</svg>
		</div>
	);
};
