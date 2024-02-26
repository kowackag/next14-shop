import { notFound } from "next/navigation";
import { getProductsCategories } from "@/api/products";
import { CategoriesList } from "@/ui/organisms/CategoriesList";

export const generateStaticParams = async () => {
	const categories = await getProductsCategories();
	return categories.map((category) => ({
		slug: category.slug,
		name: category.name,
		image: category.image,
	}));
};

export default async function HomePage() {
	const categories = await getProductsCategories();
	if (!categories) {
		throw notFound();
	}
	return (
		<section>
			<div className="md:px-6 md:py-6">
				<img
					className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px] xl:h-[740px]"
					src="/portrait-home-page.jpg"
					alt="fassion"
					width="100%"
					height="600px"
				/>
			</div>
			<div className="px-6 sm:px-16">
				<h2 className="my-6 text-2xl sm:text-3xl ">Our categories</h2>
				<CategoriesList categories={categories} />
			</div>
		</section>
	);
}
