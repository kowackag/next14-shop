import { getProductsCategories } from "@/api/products";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
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
			<h2 className="mb-6 text-2xl sm:text-3xl">Our categories</h2>
			<CategoriesList categories={categories} />
		</section>
	);
}
