export const ProductImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="overflow-hidden h-full w-full">
			<img
				alt={alt}
				src={src}
				width={220}
				height={220}
				className="h-full w-full object-cover object-center transition-all group-hover:scale-105"
			/>
		</div>
	);
};
