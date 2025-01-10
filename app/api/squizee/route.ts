import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");
	try {
		const response = await fetch(
			`https://s.squizee.in/short/formResponse?url=${url}&email=&format=&suffix=IV4N`
		);
		const text = await response.text();

		const $ = cheerio.load(text);
		const shortenedUrl = $("#shortenedUrlInput").val();

		return NextResponse.json({ url: shortenedUrl });
	} catch (error) {
		console.error("Fetch error:", error);
		return NextResponse.json({ error: "Failed to fetch data" });
	}
}
