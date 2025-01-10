import Image from "next/image";
import React from "react";

type StatisticProps = {
	title: string;
	text: string;
	img: string;
	margin: string;
};

export default function StatisticItem({
	title,
	text,
	img,
	margin,
}: StatisticProps) {
	return (
		<div
			className={`flex flex-col items-center max-w-[300px] min-h-[300px] bg-white relative rounded-md pt-16 p-10 ${
				title === "Fully Customizable" ? "" : "mb-20"
			} ${margin}`}
		>
			<div className="p-5 flex rounded-full bg-primaryPurple absolute top-[-2.5rem]">
				<Image src={img} alt="" width={40} height={40} />
			</div>
			<h2 className="text-xl font-bold pb-5">{title}</h2>
			<p className="text-textGrayish text-center">{text}</p>
			{title !== "Fully Customizable" && (
				<div className="absolute w-2 h-20 bg-primaryCyan bottom-[-5rem] xl:right-[-5rem] xl:w-20 xl:h-2 xl:top-1/2"></div>
			)}
		</div>
	);
}
