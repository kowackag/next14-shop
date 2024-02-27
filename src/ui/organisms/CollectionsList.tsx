import { type ProductsGetCollectionQuery } from "@/gql/graphql";
import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

export const CollectionsList = ({
	collections,
}: {
	collections: ProductsGetCollectionQuery["collections"];
}) => {
	return (
		<ul className="flex max-w-1/2 gap-8">
			{collections.map((collection) => (
				<CollectionListItem key={collection.slug} collection={collection} />
			))}
		</ul>
	);
};
