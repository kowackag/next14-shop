import { ProductsGetCategoriesQuery } from "@/gql/graphql";
import { CategoryListItem } from "@/ui/molecules/CategoryListItem";

export const CategoriesList = ({
	categories,
	activeCategory
}: {
	activeCategory?:string;
	categories: ProductsGetCategoriesQuery["categories"];
}) => {
	return (
		<ul className="grid w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
			{categories.map((category) => (
				<CategoryListItem key={category.slug} category={category} activeCategory={activeCategory}/>
			))}
		</ul>
	);
};
