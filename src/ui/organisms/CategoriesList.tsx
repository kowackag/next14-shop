import { CategoryListItem } from "@/ui/molecules/CategoryListItem";

export const CategoriesList = ({
	categories,
}: {
	categories: {
		name: string;
		slug: string;
		image: {
			src: string;
			alt: string;
		};
	}[];
}) => {
	return (
		<ul className="grid w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
			{categories.map((category) => (
				<CategoryListItem key={category.slug} category={category} />
			))}
		</ul>
	);
};
