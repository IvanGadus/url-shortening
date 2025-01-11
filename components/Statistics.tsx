import React from "react";
import StatisticItem from "./StatisticItem";

export default function Statistics() {
	const statisticsData = [
		{
			title: "Brand Recognition",
			text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
			img: "./icon-brand-recognition.svg",
			margin: "xl:mt-0",
		},
		{
			title: "Detailed Records",
			text: " Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
			img: "./icon-detailed-records.svg",
			margin: "xl:mt-10",
		},
		{
			title: "Fully Customizable",
			text: " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
			img: "./icon-fully-customizable.svg",
			margin: "xl:mt-20",
		},
	];

	return (
		<div className="bg-primaryGrey px-11 md:px-20 lg:px-36 pb-20">
			<div className="flex flex-col items-center pb-20">
				<h2 className="text-3xl font-bold pb-5 text-center">
					Advanced Statistics
				</h2>
				<p className="text-textGrayish text-center max-w-lg ">
					Track how your link are performing across the web with our advaced
					statistics dashboard.
				</p>
			</div>

			<div className="flex items-center flex-col xl:flex-row xl:justify-center xl:gap-12 xl:items-start">
				{" "}
				{statisticsData.map((statistic, idx) => {
					return (
						<StatisticItem
							key={idx}
							title={statistic.title}
							text={statistic.text}
							img={statistic.img}
							margin={statistic.margin}
						/>
					);
				})}
			</div>
		</div>
	);
}
