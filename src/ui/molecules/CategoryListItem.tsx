import { Paths } from "@/paths";
import Link from "next/link";
import { ProductImage } from "@/ui/atoms/ProductImage";
export const CategoryListItem = ({
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
		<li
			className="relative border-[1px] border-solid border-zinc-200 p-3 transition-shadow hover:shadow-md"
			key={slug}
		>
			<Link className=" h-full w-full" href={`${Paths.CATEGORIES}/${slug}`}>
				<div className="absolute bottom-0 right-0 flex h-10 w-32 bg-zinc-800 text-zinc-100">
					<p className="z-10 m-auto font-semibold">{name}</p>
				</div>
				<ProductImage src={image.src} alt={image.alt} />
			</Link>
		</li>
	);
};
