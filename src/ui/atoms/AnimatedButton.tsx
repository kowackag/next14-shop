export const AnimatedButton = ({
	onClick,
	children,
}: {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children: React.ReactNode;
}) => {
	return (
		<button
			className="transition-color group relative h-14 w-36 overflow-hidden bg-cyan-100 text-sm font-semibold uppercase tracking-wide text-cyan-950 shadow-lg before:absolute before:left-0 before:top-0 before:block before:h-full before:w-[2px] before:translate-y-[-100%] before:bg-cyan-900 before:transition-transform  before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-full after:w-[2px] after:translate-y-[100%] after:bg-cyan-800 after:transition-transform after:duration-300 hover:bg-transparent hover:before:translate-y-0 hover:after:translate-y-0"
			onClick={onClick}
		>
			<span
				className="relative flex h-full w-full items-center justify-center before:absolute before:right-0 before:top-0 before:block before:h-[2px] before:w-full before:translate-x-[100%] before:bg-cyan-800 before:transition-transform before:duration-300 after:absolute
    after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-cyan-800 after:transition-transform after:duration-300 group-hover:before:translate-x-0 group-hover:after:translate-x-0"
			>
				{children}
			</span>
		</button>
		/*<button className="relative h-12 w-36 overflow-hidden bg-zinc-500 shadow-lg before:absolute before:left-0 before:top-0 before:block before:h-full before:w-[2px] before:translate-y-[-100%] before:bg-zinc-800 before:transition-transform  before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-full after:w-[2px] after:translate-y-[100%] after:bg-zinc-800 after:transition-transform after:duration-300 hover:bg-transparent hover:before:translate-y-0 hover:after:translate-y-0">
			<span
				className="relative flex h-full w-full items-center justify-center before:absolute before:right-0 before:top-0 before:block before:h-[2px] before:w-full before:translate-x-[100%] before:bg-zinc-800 before:transition-transform before:duration-300 after:absolute
	    after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-zinc-800 after:transition-transform after:duration-300 hover:bg-transparent hover:before:translate-x-0 hover:after:translate-x-0"
			>
				{children}
			</span>
		</button> */
	);
};
