import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();

	try {
		const response = await fetch("https://cleanuri.com/api/v1/shorten", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const newURL = await response.json();

		return NextResponse.json(newURL);
	} catch (error) {
		console.error("Fetch error:", error);
		return NextResponse.json({ error: "Failed to fetch data" });
	}
}
