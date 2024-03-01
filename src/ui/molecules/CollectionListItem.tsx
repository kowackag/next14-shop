import Link from "next/link";

import { ProductImage } from "@/ui/atoms/ProductImage";

import { Paths } from "@/paths";

export const CollectionListItem = ({
	collection: { slug, name, products },
}: {
	collection: {
		name: string;
		slug: string;
		products: {
			images: {
				url: string;
			}[];
		}[];
	};
}) => {
	const dataCollection = {
		slug: slug,
		name: name,
		images: products.map((images) =>
			images.images.map((img) => img.url).join(","),
		),
	};

	return (
		<li
			className="w-1/2 border-[1px] border-solid border-zinc-200 p-3 transition-shadow hover:shadow-md"
			key={slug}
		>
			<Link
				className="relative inline-block w-full"
				href={`${Paths.COLLECTIONS}/${slug}`}
			>
				<h3 className="z-10 m-auto py-2 font-semibold">{name}</h3>
				<div className="flex h-full">
					{dataCollection.images.length ? (
						dataCollection.images.slice(-2).map((img) => (
							<ProductImage
								key={img}
								src={img}
								alt={`Colection ${dataCollection.name}`}
							/>
						))
					) : (
						<ProductImage src="/icons.svg" alt="eye and question mark" />
					)}
				</div>
			</Link>
		</li>
	);
};
