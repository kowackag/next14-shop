import { Icon } from "./Icon";

export const MobileMenuButton = () => {
	return (
		<div className="flex h-[76px] items-center justify-center px-2 hover:cursor-pointer md:hidden">
			<Icon
				href="/icons.svg#menu-mobile"
				width="32px"
				height="32px"
				aria-label="mobile menu"
			/>
		</div>
	);
};
