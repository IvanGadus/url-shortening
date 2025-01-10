import Hero from "@/components/Hero";
import LinkInput from "@/components/LinkInput";
import Navigation from "@/components/Navigation";
import ShortenSection from "@/components/ShortenSection";
import Statistics from "@/components/Statistics";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<ShortenSection />
			<Statistics />
		</div>
	);
}
