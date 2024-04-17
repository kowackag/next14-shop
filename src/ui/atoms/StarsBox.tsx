export const StarsBox = ({ rating }: { rating: number }) => {
	const starsList = new Array(5).fill(1).map((_item, ind) => ind);
	return (
		<div className="flex text-zinc-800">
			{starsList.map((ind) => (
				<svg width="24px" height="24px">
					<use
						className={rating > ind ? "fill-amber-500" : "fill-none"}
						href="/icons.svg#star"
					></use>
				</svg>
			))}
		</div>
	);
};
