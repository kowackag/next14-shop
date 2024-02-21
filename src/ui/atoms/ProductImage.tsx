export const ProductImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="overflow-hidden">
			<img
				alt={alt}
				src={src}
				width={320}
				height={320}
				className="h-80 w-full object-contain object-center transition-all group-hover:scale-105"
			/>
		</div>
	);
};
