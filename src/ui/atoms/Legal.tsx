import { Paths } from "@/paths";
import Link from "next/link";

export const Legal = () => {
	return (
		<article className="my-10 px-4">
			<h3 className="mb-4 text-lg font-bold">Legal</h3>
			<Link className="my-2 block text-sm" href={Paths.POLICY}>
				Policy
			</Link>
			<Link className="my-2 block text-sm" href={Paths.TERMS}>
				Terms and conditions
			</Link>
		</article>
	);
};
