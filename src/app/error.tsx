"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="grid h-screen place-content-center bg-white px-4">
			<div className="text-center">
				<h1 className="text-9xl font-black text-gray-200">{error.name}</h1>

				<p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{error.message}
				</p>

				{/* <p className="mt-4 text-gray-500">
					You must be logged in to access the page
				</p> */}
				<button
					onClick={() => reset()}
					type="button"
					className="mt-6 inline-block rounded bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring"
				>
					Try Again
				</button>
			</div>
		</div>
	);
}
