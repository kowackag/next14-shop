import Link from "next/link";

import { ProductImage } from "@/ui/atoms/ProductImage";

import { Paths } from "@/paths";

export const CategoryListItem = ({
	category: { name, slug, products },
	activeCategory,
}: {
	activeCategory?: string;
	category: {
		id: string;
		name: string;
		slug: string;
		products: {
			images: {
				url: string;
			}[];
		}[];
	};
}) => {
	return (
		<li
			className={`m-auto max-w-sm border-solid  p-3 transition-shadow hover:shadow-md ${activeCategory === slug ? "border-2 border-cyan-600" : "border-[1px]  border-zinc-200"}`}
			key={slug}
		>
			<Link
				className="relative box-content  h-full w-full"
				href={`${Paths.CATEGORIES}/${slug}/1`}
			>
				<div className="absolute bottom-0 right-0 flex h-10 w-32 bg-zinc-800 text-zinc-100">
					<p className="z-10 m-auto font-semibold">{name}</p>
				</div>
				{products[0] && products[0].images[0] && (
					<ProductImage
						src={products[0].images[0].url}
						alt={`category's ${name} product`}
					/>
				)}
			</Link>
		</li>
	);
};
