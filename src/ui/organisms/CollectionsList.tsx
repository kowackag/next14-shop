import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

import { type CollectionsGetListQuery } from "@/gql/graphql";

export const CollectionsList = ({
	collections,
}: {
	collections: CollectionsGetListQuery["collections"];
}) => {
	return (
		<ul className="max-w-1/2 flex gap-8">
			{collections.data.map((collection) => (
				<CollectionListItem key={collection.slug} collection={collection} />
			))}
		</ul>
	);
};
