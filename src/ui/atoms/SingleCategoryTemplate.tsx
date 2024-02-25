import { Paths } from "@/paths";

export const SingleCategoryTemplate = ({
	category: { name, slug, image },
}: {
	category: {
		name: string;
		slug: string;
		image: {
			src: string;
			alt: string;
		};
	};
}) => {
	return (
		<li className="border-2" key={slug}>
			<a href={`${Paths.CATEGORIES}/${slug}`}>
				<div className="relative h-full w-full">
					<div className="absolute bottom-0 right-0 flex h-10 w-32 bg-cyan-50 text-zinc-800">
						<p className="m-auto font-semibold">{name}</p>
					</div>
					<img
						className="h-full w-full"
						width={320}
						height={320}
						src={image.src}
						alt={image.alt}
					/>
				</div>
			</a>
		</li>
	);
};
