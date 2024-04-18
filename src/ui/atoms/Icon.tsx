export const Icon = ({
	href,
	width,
	height,
	...props
}: {
	href: string;
	width?: string;
	height?: string;
}) => {
	return (
		<svg width={width || "24px"} height={height || "24px"} {...props}>
			<use href={href}></use>
		</svg>
	);
};
