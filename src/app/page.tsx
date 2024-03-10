import { notFound } from "next/navigation";
import NextImage from "next/image";

import { Suspense } from "react";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";

import { getProductsCollections } from "@/api/collections";
import { getProductsCategories } from "@/api/categories";
import { SubTitle } from "@/ui/atoms/Title";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";

export const generateStaticParams = async () => {
	const categories = await getProductsCategories();
	return categories.data.map((category) => ({
		slug: category.slug,
		name: category.name,
		images: category.products[0]
			? category.products[0].images[0]?.url
			: "Fassion",
	}));
};

export default async function HomePage() {
	const allCategories = await getProductsCategories();
	const allCollection = await getProductsCollections();
	const products = await getProducts();

	if (!allCategories || !allCollection || !products) {
		throw notFound();
	}

	return (
		<div>
			<div className="relative md:px-6 md:py-6">
				<NextImage
					className="m-auto h-[400px] w-full max-w-screen-2xl object-cover object-center md:h-[500px] lg:h-[600px] xl:h-[800px]"
					src="/portrait-home-page.jpg"
					alt="woman wearing dress"
					width={1536}
					height={600}
					priority={true}
				/>
				<div className="lg:py-18 absolute bottom-0 left-0 top-0 px-4 py-6 text-zinc-200 sm:w-1/3 md:w-1/2 md:p-12">
					<h1 className="text-3xl md:text-4xl lg:text-6xl">
						<span className="font-semibold tracking-wider">Fashion</span> is our
						passion
					</h1>
					<p className="my-4 md:my-8">New collection 2024</p>
					<button className="border border-zinc-300 p-2 px-6 uppercase sm:py-4">
						Shop now
					</button>
				</div>
			</div>
			<SectionContainer>
				<SubTitle>Our products</SubTitle>
				<ProductList products={products.data.slice(-4)} />
			</SectionContainer>
			<SectionContainer>
				<SubTitle>Our categories</SubTitle>
				<CategoriesList categories={allCategories} />
			</SectionContainer>
			<SectionContainer>
				<SubTitle>Our collections</SubTitle>
				<Suspense>
					<CollectionsList collections={allCollection} />
				</Suspense>
			</SectionContainer>
		</div>
	);
}
