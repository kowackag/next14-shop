import { notFound } from "next/navigation";

import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";

import { getProductsCollections } from "@/api/collections";
import { getProductsCategories } from "@/api/categories";

export const generateStaticParams = async () => {
	const categories = await getProductsCategories();
	return categories.map((category) => ({
		slug: category.slug,
		name: category.name,
		images:
			category.products[0] &&
			category.products[0].images[0] &&
			category.products[0].images[0].url,
	}));
};

export default async function HomePage() {
	const allCategories = await getProductsCategories();
	if (!allCategories) {
		throw notFound();
	}

	const allCollection = await getProductsCollections();
	if (!allCollection) {
		throw notFound();
	}

	return (
		<div>
			<div className="md:px-6 md:py-6">
				<img
					className="m-auto h-[400px] w-full  max-w-screen-2xl object-cover object-center md:h-[500px] lg:h-[600px] xl:h-[800px]"
					src="/portrait-home-page.jpg"
					alt="fassion"
					width="100%"
					height="600px"
				/>
			</div>
			<SectionContainer>
				<h2 className="my-6 text-2xl sm:text-3xl ">Our categories</h2>
				<CategoriesList categories={allCategories} />
			</SectionContainer>
			<SectionContainer>
				<h2 className="my-6 text-2xl sm:text-3xl ">Our collections</h2>
				<CollectionsList collections={allCollection} />
			</SectionContainer>
		</div>
	);
}
