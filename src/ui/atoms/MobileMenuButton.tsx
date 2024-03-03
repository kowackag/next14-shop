export const MobileMenuButton = () => {
	return (
		<div className="flex h-[76px] items-center justify-center px-2 hover:cursor-pointer md:hidden">
			<svg width="32px" height="32px">
				<use href="/icons.svg#menu-mobile"></use>
			</svg>
		</div>
	);
};
