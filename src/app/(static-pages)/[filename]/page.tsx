import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export default async function StaticPage({
	params,
}: {
	params: { filename: string };
}) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	return (
		<article className="prose prose-zinc m-auto max-w-screen-xl px-6 py-8">
			<Content />
		</article>
	);
}
