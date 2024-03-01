import { notFound } from "next/navigation";
import NextImage from "next/image";

import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";

import { getProductsCollections } from "@/api/collections";
import { getProductsCategories } from "@/api/categories";
import { SubTitle } from "@/ui/atoms/Title";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";
// import { Suspense } from "react";

export const generateStaticParams = async () => {
	const categories = await getProductsCategories();
	return categories.data.map((category) => ({
		slug: category.slug,
		name: category.name,
		images:
			category.products[0] && category.products[0].images[0]
				? category.products[0].images[0].url
				: "Fassion",
	}));
};

export default async function HomePage() {
	const allCategories = await getProductsCategories();
	console.log(allCategories);
	const allCollection = await getProductsCollections();
	const products = await getProducts();

	if (!allCategories || !allCollection || !products) {
		throw notFound();
	}

	return (
		<div>
			<div className="relative md:px-6 md:py-6">
				<NextImage
					className="m-auto h-[400px] w-full  max-w-screen-2xl object-cover object-center md:h-[500px] lg:h-[600px] xl:h-[800px]"
					src="/portrait-home-page.jpg"
					alt="woman wearing dress"
					width={1536}
					height={600}
					priority={true}
				/>
			</div>
			<SectionContainer>
				<SubTitle>Our products</SubTitle>
				{/* <Suspense> */}
				<ProductList products={products.data.slice(-4)} />
				{/* </Suspense> */}
			</SectionContainer>
			<SectionContainer>
				<SubTitle>Our categories</SubTitle>
				<CategoriesList categories={allCategories} />
			</SectionContainer>
			<SectionContainer>
				<SubTitle>Our collections</SubTitle>
				<CollectionsList collections={allCollection} />
			</SectionContainer>
		</div>
	);
}
