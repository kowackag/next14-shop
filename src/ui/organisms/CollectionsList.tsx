import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

import { type ProductsGetCollectionQuery } from "@/gql/graphql";

export const CollectionsList = ({
	collections,
}: {
	collections: ProductsGetCollectionQuery["collections"];
}) => {
	return (
		<ul className="max-w-1/2 flex gap-8">
			{collections.map((collection) => (
				<CollectionListItem key={collection.slug} collection={collection} />
			))}
		</ul>
	);
};
