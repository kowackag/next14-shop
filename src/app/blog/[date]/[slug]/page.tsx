export default async function BlogPage({
	params: { date, slug },
}: {
	params: { date: string; slug: string };
}) {
	// const pathname = params.pathname?.join("/") || [];

	return (
		<div>
			Blog:
			{date} / {slug}
		</div>
	);
}
