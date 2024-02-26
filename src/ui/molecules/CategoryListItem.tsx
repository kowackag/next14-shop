import { Paths } from "@/paths";
import Link from "next/link";
import { ProductImage } from "@/ui/atoms/ProductImage";
export const CategoryListItem = ({
	category: { name, slug, image },
	activeCategory,
}: {
	activeCategory?: string;
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
			className={`border-solid  p-3 transition-shadow hover:shadow-md ${activeCategory === slug ? "border-2 border-cyan-600" : "border-[1px]  border-zinc-200"}`}
			key={slug}
		>
			<Link
				className="relative box-content  h-full w-full"
				href={`${Paths.CATEGORIES}/${slug}/1`}
			>
				<div className="absolute bottom-0 right-0 flex h-10 w-32 bg-zinc-800 text-zinc-100">
					<p className="z-10 m-auto font-semibold">{name}</p>
				</div>
				<ProductImage src={image.src} alt={image.alt} />
			</Link>
		</li>
	);
};
