import { Paths } from "@/paths";
import NextImage from "next/image";
import Link from "next/link";

export const ImageSection = () => {
	return (
		<div className="relative m-auto w-full max-w-screen-2xl">
			<NextImage
				className="m-auto h-[400px] w-full max-w-screen-2xl object-cover object-center md:h-[500px] lg:h-[600px] xl:h-[800px]"
				src="/portrait-home-page.jpg"
				alt="woman wearing dress"
				width={1536}
				height={600}
				priority={true}
			/>
			<div className="absolute bottom-0 left-0 top-0 m-auto h-3/4 items-start justify-center px-4 text-zinc-200 md:px-6">
				<h1 className="text-3xl md:text-5xl lg:text-7xl">
					<span className="block tracking-wider md:mb-2">Fashion</span>Passion
				</h1>
				<p className="my-4 md:my-10 lg:my-14 lg:text-xl">Eminent collection</p>
				<button className="border border-zinc-300 p-2 md:px-5 lg:px-7 lg:py-3">
					<Link href={Paths.PRODUCTS}>Shop now</Link>
				</button>
			</div>
		</div>
	);
};
