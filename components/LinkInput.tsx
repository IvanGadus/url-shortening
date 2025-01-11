"use client";
import React, { useEffect, useState } from "react";

type MyComponentProps = {
	setLinks: React.Dispatch<React.SetStateAction<string[]>>;
	loading: boolean;
};

export default function LinkInput({ setLinks, loading }: MyComponentProps) {
	const [inputValue, setInputValue] = useState("");
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		inputValue !== "" && setIsError(false);
	}, [inputValue]);

	const handleForm = (e: FormData) => {
		// e.preventDefault();
		const urlPattern = /^(https:\/\/|http:\/\/)/;
		const badUrlPattern = /^(https:\/\/cleanuri.com)/;

		if (
			inputValue === "" ||
			!urlPattern.test(inputValue) ||
			badUrlPattern.test(inputValue)
		) {
			console.log("errorik");
			console.log(inputValue);
			setIsError(true); // Nastav chybu, ak je prázdny alebo nesprávny formát
		} else {
			setIsError(false); // Vstup je validný
			setLinks((prev) => [...prev, inputValue]);
			setInputValue("");
		}
	};

	return (
		<div
			id="shorten"
			className="flex flex-col mx-11 md:mx-20 lg:mx-36 bg-primaryPurple rounded-xl py-7  bg-[url('/bg-shorten-mobile.svg')] bg-no-repeat bg-right-top  sm:bg-[url('/bg-shorten-desktop.svg')] sm:pl-5 md:px-10 z-20 t-10 scroll-mt-10"
		>
			<form
				action={(e) => handleForm(e)}
				className="flex flex-col justify-evenly sm:flex-row sm:items-center sm:justify-around sm:h-20"
			>
				<div className="flex flex-col px-5 relative sm:w-full sm:px-0">
					<input
						className={`rounded-md w-full py-3 px-3 mb-3 sm:m-0 sm:flex-1 ${
							isError ? "border-4 border-red-500 mb-1 placeholder-red-300" : ""
						}`}
						type="text"
						placeholder="Shorten a link here..."
						name="link"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					{isError && (
						<p className="text-red-500  mb-2 sm:absolute sm:-bottom-[35px]">
							Please add valid link
						</p>
					)}
				</div>
				<button className="mx-5 rounded-md py-3 px-3 bg-cyan-500 hover:bg-cyan-300 text-white font-bold sm:w-40">
					{loading ? "Loading ..." : "Shorten It!"}
				</button>
			</form>
		</div>
	);
}
