import { getProductsCategories } from "@/api/products";
import { CategoriesTemplates } from "@/ui/molecules/CategoriesTemplates";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
	const categories = await getProductsCategories();
	return categories.map((category) => ({
		slug: category.slug,
		name: category.name,
		image: category.image,
	}));
};

export default async function CategoriesPage() {
	const categories = await getProductsCategories();
	if (!categories) {
		throw notFound();
	}
	return (
		<section>
			<CategoriesTemplates categories={categories} />
		</section>
	);
}
