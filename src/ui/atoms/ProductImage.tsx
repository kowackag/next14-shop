export const ProductImage = ({
	alt,
	src,
	className,
}: {
	alt: string;
	src: string;
	className?: string;
}) => {
	return (
		<div className="m-auto h-full w-full items-center overflow-hidden marker:max-w-96">
			<img
				alt={alt}
				src={src}
				width={320}
				height={320}
				className={`h-full w-full object-contain object-center transition-all group-hover:scale-105 ${className}`}
			/>
		</div>
	);
};
