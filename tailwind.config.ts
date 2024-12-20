import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primaryPurple: "hsl(257, 27%, 26%)",
				primaryGrey: "hsl(0, 0%, 75%)",
				primaryCyan: "hsl(180, 66%, 49%)",
			},
		},
	},
	plugins: [],
} satisfies Config;
