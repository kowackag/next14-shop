import Link from "next/link";

import { ProductImage } from "@/ui/atoms/ProductImage";

import { Paths } from "@/paths";

export const CollectionListItem = ({
	collection: { slug, name, products },
}: {
	collection: {
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
	const dataCollection = {
		slug: slug,
		name: name,
		images: products.map((images) =>
			images.images.map((img) => img.url).join(","),
		),
	};

	return (
		<li
			className="max-h-60 w-1/2 border-[1px] border-solid border-zinc-200 p-3 transition-shadow hover:shadow-md"
			key={slug}
		>
			<Link
				className="relative inline-block h-full w-full"
				href={`${Paths.COLLECTIONS}/${slug}`}
			>
				<h3 className="z-10 m-auto font-semibold">{name}</h3>
				<div className="flex h-full">
					{dataCollection.images.length ? (
						dataCollection.images.map((img) => (
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
