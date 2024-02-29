import { Suspense } from "react";
import { notFound } from "next/navigation";

import { ProductList } from "@/ui/organisms/ProductList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Title } from "@/ui/atoms/Title";
import { Loading } from "@/ui/atoms/Loading";

import { getProductsByQuery } from "@/api/products";

type ProductSearchPageType = {
	// readonly params: { page: string };
	readonly searchParams: { [key: string]: string | string[] };
};
export default async function ProductsPage({
	// params,
	searchParams,
}: ProductSearchPageType) {
	const query = searchParams.query?.toString() ?? "";
	const products = await getProductsByQuery(query);
	if (!products) {
		throw notFound();
	}

	return (
		<SectionContainer>
			<Title>Searching: </Title>
			{products.length ? (
				<Suspense fallback={<Loading />}>
					<ProductList products={products} />
				</Suspense>
			) : (
				<p>{`No results for phrase: ${query}`}</p>
			)}
		</SectionContainer>
	);
}
