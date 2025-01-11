import React, { useEffect, useState } from "react";

type LinksProps = {
	link: string;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LinksComp({ link, setLoading }: LinksProps) {
	const [copied, setCopied] = useState(false);
	const [newLink, setNewLink] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				// const res = await fetch(`api/squizee?url=${link}`, {
				// 	// method: "POST",
				// 	method: "GET",
				// 	// body: JSON.stringify({ url: link }),
				// });
				const res = await fetch("api/cleanuri", {
					method: "POST",
					body: JSON.stringify({ url: link }),
				});
				const data = await res.json();
				setNewLink(data.result_url);
				setLoading(false);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [link]);

	const handleClickCopyButton = () => {
		setCopied(true);
		navigator.clipboard.writeText(newLink);
	};

	return (
		<div>
			{newLink !== "" && (
				<div>
					<div className="bg-white mt-5 rounded-lg text-base w-full flex flex-col sm:text-sm lg:text-base sm:flex-row sm:items-center sm:p-2 sm:justify-between">
						<p className="py-3 font-semibold px-5 sm:px-0 truncate whitespace-nowrap text-ellipsis ">
							{link}
						</p>
						<div className="h-px w-full bg-slate-300 sm:hidden"></div>
						<div className="flex flex-col sm:flex-row">
							<p className="py-3 px-5 font-semibold text-primaryCyan">
								{newLink}
							</p>
							<button
								onClick={handleClickCopyButton}
								className={`mx-5 rounded-md py-3 px-3 bg-cyan-500 hover:bg-cyan-300 text-white font-bold mb-5 sm:m-0 sm:w-32 sm:py-2 ${
									copied && "bg-primaryPurple hover:bg-primaryPurple"
								}`}
							>
								{copied ? "Copied!" : "Copy"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
