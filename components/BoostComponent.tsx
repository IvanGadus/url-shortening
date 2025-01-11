import React from "react";

export default function BoostComponent() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-80 bg-primaryPurple bg-[url('/bg-boost-mobile.svg')] md:bg-[url('/bg-boost-desktop.svg')] bg-no-repeat bg-cover bg-center px-11 md:px-20 lg:px-36">
			<h2 className="text-3xl font-bold text-white mb-7 text-center">
				Boost your links today
			</h2>
			<button className="px-7 py-3 bg-cyan-500 rounded-3xl text-xl font-semibold text-white hover:bg-cyan-300 flex  ">
				<a href="#shorten">Get Started</a>
			</button>
		</div>
	);
}
