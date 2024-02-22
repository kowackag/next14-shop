import { getProductById } from "@/api/products";
import { AnimatedButton } from "@/ui/atoms/AnimatedButton";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductDetailsCart } from "@/ui/organisms/ProductDetailsCart";
import { SuspectedProductsList } from "@/ui/organisms/SuspectedProductsList";
import { Suspense } from "react";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const generateStaticParams = async () => {};
	const product = await getProductById(params.productId);
	console.log(5, product);
	return (
		<div className="mx-auto lg:max-w-screen-xl">
			<ProductDetailsCart product={product} />
			{/* <Suspense>
				<SuspectedProductsList />
			</Suspense> */}
		</div>
	);
}
