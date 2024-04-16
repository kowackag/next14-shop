import { notFound } from "next/navigation";

import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { Section } from "@/ui/atoms/Section";
import { Title } from "@/ui/atoms/Title";

import { getProductsByQuery } from "@/api/products";
import { Loading } from "@/ui/atoms/Loading";

type ProductSearchPageType = {
	readonly searchParams: { [key: string]: string | string[] };
};
export default async function ProductsPage({
	searchParams,
}: ProductSearchPageType) {
	const query = searchParams.query?.toString() ?? "";
	const products = await getProductsByQuery(query);

	if (!products) {
		throw notFound();
	}

	return (
		<Section>
			{products.data.length ? (
				<>
					<Title>{`Products for phrase: ${query}`}</Title>
					<Suspense fallback={<Loading />}>
						<ProductList products={products.data} />
					</Suspense>
				</>
			) : (
				<p>{`No results for phrase: ${query}`}</p>
			)}
		</Section>
	);
}
