import { notFound } from "next/navigation";

import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Title } from "@/ui/atoms/Title";

import { getProductsCategories } from "@/api/products";

// export const generateStaticParams = async () => {
// 	const categories = await getProductsCategories();
// 	return categories.map((category) => ({
// 		slug: category.slug,
// 		name: category.name,
// 		image: category.image,
// 	}));
// };

export default async function CategoriesPage() {
	const categories = await getProductsCategories();
	if (!categories) {
		throw notFound();
	}
	return (
		<SectionContainer>
			<Title>Our categories</Title>
			<CategoriesList categories={categories} />
		</SectionContainer>
	);
}
