"use client";

import { CollectionListItem } from "@/ui/molecules/CollectionListItem";
import "keen-slider/keen-slider.min.css";
import { useOwnKeenSLider } from "@/utils/useOwnKeenSlider";

export const CollectionsList = ({
	collections,
	slider,
}: {
	collections: Array<{
		name: string;
		slug: string;
		products: Array<{ images: Array<{ url: string }> }>;
	}>;
	slider: boolean;
}) => {
	const sliderRef = useOwnKeenSLider();
	return (
		<ul
			className={`${slider ? "keen-slider" : "grid gap-4 md:grid-cols-2 lg:grid-cols-4"}`}
			ref={slider ? sliderRef : null}
		>
			{collections.map((collection, ind) => (
				<CollectionListItem
					key={collection.slug}
					collection={collection}
					className={`keen-slider__slide number-slide${ind + 1}`}
				/>
			))}
		</ul>
	);
};
