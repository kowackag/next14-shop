import { Suspense } from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";

import { ProductDetailsCart } from "@/ui/organisms/ProductDetailsCart";
import { RelatedProductsList } from "@/ui/organisms/RelatedProductsList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Loading } from "@/ui/atoms/Loading";

import { getProductById, getProducts } from "@/api/products";

type ProductPageType = {
	readonly params: { page: string; productId: string };
	readonly searchParams: { [key: string]: string | string[] };
};

export const generateStaticParams = async () => {
	const products = await getProducts();

	return products.data.map((product) => ({
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
		title: product?.name,
		description: product?.description,
		openGraph: {
			title: product?.name,
			description: product?.description,
			images: product?.images[0]?.url,
		},
	};
}

export default async function SingleProductPage({ params }: ProductPageType) {
	const product = await getProductById(params.productId);
	if (!product) {
		throw notFound();
	}
	return (
		<>
			<SectionContainer>
				<ProductDetailsCart product={product} />
			</SectionContainer>
			<SectionContainer>
				<Suspense fallback={<Loading />}>
					<RelatedProductsList category={product.categories[0]?.slug} />
				</Suspense>
			</SectionContainer>
		</>
	);
}
