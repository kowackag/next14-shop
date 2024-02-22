import { getProductById, getProducts } from "@/api/products";
import { ProductDetailsCart } from "@/ui/organisms/ProductDetailsCart";
// import { SuspectedProductsList } from "@/ui/organisms/SuspectedProductsList";
// import { Suspense } from "react";

export const generateStaticParams = async () => {
	const products = await getProducts();

	return products.map((product) => ({
		productId: product.id,
	}));
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);
	return (
		<div className="mx-auto lg:max-w-screen-xl">
			<ProductDetailsCart product={product} />
			{/* <Suspense>
				<SuspectedProductsList />
			</Suspense> */}
		</div>
	);
}
