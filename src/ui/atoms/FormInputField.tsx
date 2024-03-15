export const FormInputField = ({
	label,
	name,
	type,
}: {
	label: string;
	name: string;
	type?: string;
}) => {
	return (
		<div className="text-sm">
			<label className="inline-block pt-2" htmlFor={name}>
				{label}
			</label>
			<input
				type={type || "text"}
				id={name}
				name={name}
				className="block w-full border p-2 outline-none"
			/>
		</div>
	);
};
