import { CategoryListItem } from "@/ui/molecules/CategoryListItem";

import { type CategoriesGetListQuery } from "@/gql/graphql";

export const CategoriesList = ({
	categories,
	activeCategory,
}: {
	activeCategory?: string;
	categories: CategoriesGetListQuery["categories"];
}) => {
	return (
		<ul className="grid w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4">
			{categories.data.map((category) => (
				<CategoryListItem
					key={category.slug}
					category={category}
					activeCategory={activeCategory}
				/>
			))}
		</ul>
	);
};
