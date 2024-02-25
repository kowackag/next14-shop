import { getProductById, getProducts } from "@/api/products";
import { ProductDetailsCart } from "@/ui/organisms/ProductDetailsCart";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import { SuspectedProductsList } from "@/ui/organisms/SuspectedProductsList";
// import { Suspense } from "react";

type ProductPageType = {
	readonly params: { page: string; productId: string };
	readonly searchParams: { [key: string]: string | string[] };
};

export const generateStaticParams = async () => {
	const products = await getProducts();

	return products.map((product) => ({
		productId: product.id,
	}));
};

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		metadataBase: new URL("http://localhost:3000"),
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: product.image?.src,
		},
	};
}

export default async function SingleProductPage({ params }: ProductPageType) {
	const product = await getProductById(params.productId);
	if (!product) {
		throw notFound();
	}
	return (
		<div className="mx-auto lg:max-w-screen-xl">
			<ProductDetailsCart product={product} />
			{/* <Suspense>
				<SuspectedProductsList />
			</Suspense> */}
		</div>
	);
}
