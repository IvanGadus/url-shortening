import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<div className="w-full relative h-[calc(100svh-6rem)] min-h-max overflow-clip flex flex-col sm:flex-row-reverse sm:py-20 md:pl-20 lg:pl-36 sm:items-center sm:max-h-[30%] px-11 sm:px-0 sm:bg-white md:pb-32 pb-10 sm:h-[calc(100svh-6rem)]">
			<Image
				src="./illustration-working.svg"
				alt="working illustration"
				width={1000}
				height={1000}
				className="w-full ml-20 sm:max-w-[55vw] sm:-mr-20 object-contain sm:ml-10 "
			></Image>
			<div className="flex flex-col items-center justify-between w-full h-1/2 pt-2 sm:min-w-[300px] sm:h-max sm:py-10 sm:items-start sm:pl-11 pb-11 min-h-max">
				<h2 className="text-5xl text-center font-bold sm:text-start lg:max-w-[450px] leading-[1.1]">
					More than just shorter links
				</h2>
				<p className="text-lg font-medium text-slate-400 text-center mt-5 line-clamp-3sm:text-start lg:max-w-[450px] pb-12 sm:text-left">
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<button className="px-7 py-3 bg-cyan-500 rounded-3xl text-xl font-semibold text-white sm:self-start hover:bg-cyan-300">
					<a href="#shorten">Get Started</a>
				</button>
			</div>
		</div>
	);
}
