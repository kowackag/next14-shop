export const ValueDescription = ({
	description,
	name,
	href,
}: {
	description: string;
	name: string;
	href: string;
}) => {
	return (
		<article className="mb-8 flex max-w-[238px]">
			<div className="mr-4 pt-[2px]">
				<svg width="48" height="48">
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
