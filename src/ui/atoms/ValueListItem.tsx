export const ValueListItem = ({
	description,
	name,
	href,
}: {
	description: string;
	name: string;
	href: string;
}) => {
	return (
		<article className="flex h-full min-h-32 w-full border bg-zinc-100 p-4">
			<div className="mr-4 pt-[2px]">
				<svg width="24" height="24">
					<use href={href}></use>
				</svg>
			</div>
			<div className="text-sm">
				<h3 className="mb-2 font-semibold tracking-wide">{name}</h3>
				<p>{description}</p>
			</div>
		</article>
	);
};
