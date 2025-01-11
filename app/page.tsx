import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ShortenSection from "@/components/ShortenSection";
import Statistics from "@/components/Statistics";

export default function Home() {
	return (
		<div>
			<Navigation />
			<Hero />
			<ShortenSection />
			<Statistics />
			<Footer />
		</div>
	);
}
