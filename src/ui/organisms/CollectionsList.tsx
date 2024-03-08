import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

import { type CollectionsGetListQuery } from "@/gql/graphql";

export const CollectionsList = ({
	collections,
}: {
	collections: CollectionsGetListQuery["collections"];
}) => {
	return (
		<ul className="grid w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4">
			{collections.data.map((collection) => (
				<CollectionListItem key={collection.slug} collection={collection} />
			))}
		</ul>
	);
};
