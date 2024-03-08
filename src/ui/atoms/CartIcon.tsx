import Link from "next/link";
import { Paths } from "@/paths";

export const CartIcon = async () => {
	return (
		<Link className="cursor-pointer" href={Paths.CART}>
			<div className="relative flex h-[76px] items-center justify-center px-2">
				<svg width="32px" height="32px">
					<use href="/icons.svg#shoping-card"></use>
				</svg>

				<p className="absolute bottom-3 right-0 mr-2 h-5 w-5 rounded-full bg-rose-500 py-[2px] text-center align-middle text-xs text-neutral-100">
					10
				</p>
			</div>
		</Link>
	);
};
