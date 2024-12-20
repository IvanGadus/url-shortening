"use client";
import React, { useEffect, useState } from "react";

export default function LinkInput() {
	const [inputValue, setInputValue] = useState("");
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		inputValue !== "" && setIsError(false);
	}, [inputValue]);

	const handleForm = (e: FormData) => {
		// e.preventDefault();
		if (inputValue === "") {
			setIsError(true);
		} else {
			setIsError(false);
			console.log(inputValue);
		}
	};

	return (
		<div
			id="shorten"
			className="flex flex-col mx-11 md:mx-20 lg:mx-36 bg-primaryPurple rounded-xl py-7  bg-[url('/bg-shorten-mobile.svg')] bg-no-repeat bg-right-top  sm:bg-[url('/bg-shorten-desktop.svg')] sm:pl-5 md:px-10 z-20"
		>
			<form
				action={(e) => handleForm(e)}
				className="flex flex-col justify-evenly sm:flex-row sm:items-center sm:justify-around sm:h-20"
			>
				<div className="flex flex-col px-5 relative sm:w-full sm:px-0">
					<input
						className={`rounded-md w-full py-3 px-3 mb-6 sm:m-0 sm:flex-1 ${
							isError ? "border-4 border-red-500 mb-1 placeholder-red-300" : ""
						}`}
						type="text"
						placeholder="Shorten a link here..."
						name="link"
						onChange={(e) => setInputValue(e.target.value)}
					/>
					{isError && (
						<p className="text-red-500  mb-2 sm:absolute sm:-bottom-8">
							Please add a link
						</p>
					)}
				</div>
				<button className="mx-5 rounded-md py-3 px-3 bg-cyan-500 hover:bg-cyan-300 text-white font-bold sm:w-40">
					Shoren It!
				</button>
			</form>
		</div>
	);
}
