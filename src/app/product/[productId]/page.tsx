import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/api/products";
import { ProductDetailsCart } from "@/ui/organisms/ProductDetailsCart";

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
		<section className="px-6 py-8 sm:px-16">
			<ProductDetailsCart product={product} />
		</section>
	);
}
