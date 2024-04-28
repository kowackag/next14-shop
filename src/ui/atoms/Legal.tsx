import Link from "next/link";
import { Paths } from "@/paths";

export const Legal = () => {
	return (
		<article className="my-10 px-4">
			<h3 className="mb-4 text-lg font-bold">Legal</h3>
			<Link className="block py-2 text-sm" href={Paths.POLICY}>
				Policy
			</Link>
			<Link className="block py-2 text-sm" href={Paths.TERMS}>
				Terms and conditions
			</Link>
		</article>
	);
};
