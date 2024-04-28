import { ReloadButton } from "@/ui/atoms/ReloadButton";
import { SubTitle } from "@/ui/atoms/Title";

export const CartModalTemplate = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="fixed bottom-0 left-0 right-0 top-0 flex justify-end overflow-hidden overscroll-none bg-black bg-opacity-50">
         <ReloadButton/>
			<div className="flex h-full w-96 flex-col justify-between bg-slate-100 p-5">
				<SubTitle>Shopping cart</SubTitle>
				{children}
			</div>
		</div>
	);
};
