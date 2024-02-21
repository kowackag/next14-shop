import { getProductById } from "@/api/products";
import { SuspectedProductsList } from "@/ui/organisms/SuspectedProductsList";
import { Suspense } from "react";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const generateStaticParams = async () => {
		
	}
	const product = await getProductById(params.productId);
	return (
		<div>
			<p>{product.name} </p>
			<Suspense>
				<SuspectedProductsList />
			</Suspense>
		</div>
	);
}
