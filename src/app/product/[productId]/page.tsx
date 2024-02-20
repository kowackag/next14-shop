export default async function SingleProductPage({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	// const product = await getProductById(params.productId);
	// const referral = Object.values(searchParams).toString();
	const referral = searchParams.referral?.toString();

	console.log(referral);
	console.log(searchParams);
	return (
		<div>
			{params.productId}
			{/* <SingleProductTemplate product={product} /> */}
		</div>
	);
}
